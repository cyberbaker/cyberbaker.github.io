// Shares blog posts to LinkedIn through the Make.com scenario, the same way the n8n pipeline does.
// Run by GitHub Actions (see .github/workflows/):
//   after a push:  node scripts/share-to-linkedin.mjs --before <sha> --after <sha>
//                  shares every post whose frontmatter changed from `draft: true` to `draft: false`
//   on request:    node scripts/share-to-linkedin.mjs --post <slug>
// Options: --dry-run (print instead of sending), --no-wait (skip the check that the post's page is live).
// Needs the MAKE_WEBHOOK_URL environment variable (a GitHub repository secret).
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { basename } from 'node:path';

const args = process.argv.slice(2);
const opt = (name) => {
	const i = args.indexOf(`--${name}`);
	return i === -1 ? undefined : args[i + 1];
};
const flag = (name) => args.includes(`--${name}`);
const dryRun = flag('dry-run');
const webhook = process.env.MAKE_WEBHOOK_URL;
const POSTS_DIR = 'src/content/blog';
const DEFAULT_HASHTAGS = ['CyberSecurity', 'InfoSec'];

const git = (...a) => execFileSync('git', a, { encoding: 'utf8' });

function frontmatter(text) {
	const m = String(text).match(/^---\r?\n([\s\S]*?)\r?\n---/);
	return m ? m[1] : '';
}

// Reads one top-level frontmatter value. The pipeline writes strings as JSON (valid YAML), so JSON.parse handles them.
function field(fm, key) {
	const m = fm.match(new RegExp(`^${key}:[ \\t]*(.*)$`, 'm'));
	if (!m) return undefined;
	const v = m[1].trim();
	if (v.startsWith('"') || v.startsWith('[')) {
		try {
			return JSON.parse(v);
		} catch {
			/* fall through */
		}
	}
	if (v.startsWith("'") && v.endsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
	return v;
}

const isDraft = (fm) => /^draft:[ \t]*true[ \t]*$/m.test(fm);

function siteUrl() {
	const m = readFileSync('astro.config.mjs', 'utf8').match(/^\s*site:\s*['"]([^'"]+)['"]/m);
	if (!m) throw new Error('Could not find `site` in astro.config.mjs');
	return m[1].replace(/\/+$/, '');
}

// Which posts to share.
function postsToShare() {
	const one = opt('post');
	if (one) {
		const slug = basename(one).replace(/\.mdx?$/, '');
		const path = [`${POSTS_DIR}/${slug}.md`, `${POSTS_DIR}/${slug}.mdx`].find((p) => existsSync(p));
		if (!path) throw new Error(`No post called "${slug}" in ${POSTS_DIR}`);
		if (isDraft(frontmatter(readFileSync(path, 'utf8')))) throw new Error(`${slug} is still a draft. Set draft: false first.`);
		return [path];
	}
	const before = opt('before');
	const after = opt('after') || 'HEAD';
	if (!before || /^0+$/.test(before)) {
		console.log('No previous commit to compare with; nothing to share.');
		return [];
	}
	// Only modified files: posts the pipeline publishes directly are *added* already published and shared by n8n.
	const changed = git('diff', '--name-only', '--diff-filter=M', before, after, '--', POSTS_DIR).split('\n').filter(Boolean);
	return changed.filter((path) => {
		try {
			return isDraft(frontmatter(git('show', `${before}:${path}`))) && !isDraft(frontmatter(git('show', `${after}:${path}`)));
		} catch {
			return false;
		}
	});
}

// Checks the post's page before sharing, so LinkedIn never gets a broken link.
//   live:    the page loads.
//   blocked: a firewall or bot protection (e.g. Cloudflare) refused GitHub's automated check, so the page
//            probably exists; shared with a warning.
//   missing: 404, the site hasn't been rebuilt with this post yet.
// After a push it keeps trying for up to 10 minutes while the site rebuilds; a manual share checks once.
async function checkLive(url, attempts) {
	let last = { state: 'unreachable', detail: 'no response' };
	for (let i = 0; i < attempts; i++) {
		try {
			const r = await fetch(url, {
				redirect: 'follow',
				headers: { 'User-Agent': 'Mozilla/5.0 (compatible; CyberBakerShareBot/1.0; +https://github.com/cyberbaker)' },
			});
			if (r.ok) return { state: 'live', detail: `HTTP ${r.status}` };
			if ([401, 403, 429, 503].includes(r.status)) return { state: 'blocked', detail: `HTTP ${r.status} from ${r.headers.get('server') || 'the server'}` };
			last = { state: r.status === 404 || r.status === 410 ? 'missing' : 'unreachable', detail: `HTTP ${r.status}` };
		} catch (e) {
			last = { state: 'unreachable', detail: e.cause?.code || e.message };
		}
		if (i < attempts - 1) await new Promise((res) => setTimeout(res, 15000));
	}
	return last;
}

function buildPayload(path, site) {
	const fm = frontmatter(readFileSync(path, 'utf8'));
	const slug = basename(path).replace(/\.mdx?$/, '');
	const url = `${site}/blog/${slug}/`;
	const title = field(fm, 'title') || slug;
	const description = field(fm, 'description') || '';
	const body = field(fm, 'linkedin') || `${title}\n\n${description}`;
	const tags = field(fm, 'linkedinHashtags');
	const hashtags = (Array.isArray(tags) && tags.length ? tags : DEFAULT_HASHTAGS).map((h) => `#${String(h).replace(/^#/, '')}`);
	return {
		linkedInPost: `${body.trim()}\n\nRead the full post: ${url}\n\n${hashtags.join(' ')}`,
		postTitle: title,
		postUrl: url,
		brief: description,
	};
}

const posts = postsToShare();
if (!posts.length) {
	console.log('No newly published posts to share.');
	process.exit(0);
}
if (!webhook && !dryRun) {
	console.log('::warning::MAKE_WEBHOOK_URL secret is not set, so nothing was shared. Add it under Settings > Secrets and variables > Actions.');
	process.exit(0);
}

const site = siteUrl();
let failures = 0;
for (const path of posts) {
	const payload = buildPayload(path, site);
	console.log(`\n=== ${payload.postTitle}\n${payload.postUrl}`);
	if (dryRun) {
		console.log(`--- LinkedIn post (dry run, not sent) ---\n${payload.linkedInPost}`);
		continue;
	}
	if (!flag('no-wait')) {
		const live = await checkLive(payload.postUrl, opt('post') ? 1 : 40);
		console.log(`Page check: ${live.state} (${live.detail})`);
		if (live.state === 'missing') {
			console.log(`::error::${payload.postUrl} returns ${live.detail}: the site hasn't been rebuilt with this post. Check that the latest "Deploy to GitHub Pages" run succeeded, then run "Share a post to LinkedIn" again. Not shared.`);
			failures++;
			continue;
		}
		if (live.state === 'unreachable') {
			console.log(`::error::Could not load ${payload.postUrl} (${live.detail}). Check the site is up, then run "Share a post to LinkedIn" again. Not shared.`);
			failures++;
			continue;
		}
		if (live.state === 'blocked') {
			console.log(`::warning::The site refused GitHub's automated check (${live.detail}), probably bot protection on your domain. Sharing anyway. If LinkedIn's link preview is missing, allow LinkedIn's crawler (LinkedInBot) in your domain's bot settings.`);
		}
	}
	const r = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
	if (r.ok) console.log('Sent to Make for LinkedIn.');
	else {
		console.log(`::error::Make returned HTTP ${r.status}: ${(await r.text()).slice(0, 300)}`);
		failures++;
	}
}
process.exit(failures ? 1 : 0);
