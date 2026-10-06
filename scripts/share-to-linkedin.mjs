// Shares blog posts to LinkedIn through the Make.com scenario, the same way the n8n pipeline does.
// Run by GitHub Actions (see .github/workflows/):
//   after a push:  node scripts/share-to-linkedin.mjs --before <sha> --after <sha>
//                  shares every post whose frontmatter changed from `draft: true` to `draft: false`
//   on request:    node scripts/share-to-linkedin.mjs --post <slug>
// Options: --dry-run (print instead of sending), --no-wait (don't wait for the page to go live).
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

async function waitUntilLive(url) {
	if (flag('no-wait') || dryRun) return true;
	for (let i = 0; i < 40; i++) {
		try {
			const r = await fetch(url, { method: 'GET', redirect: 'follow' });
			if (r.ok) return true;
		} catch {
			/* not up yet */
		}
		await new Promise((res) => setTimeout(res, 15000));
	}
	return false;
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
	if (!(await waitUntilLive(payload.postUrl))) {
		console.log(`::error::${payload.postUrl} did not go live within 10 minutes; not shared. Use the "Share a post to LinkedIn" action later.`);
		failures++;
		continue;
	}
	const r = await fetch(webhook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
	if (r.ok) console.log('Sent to Make for LinkedIn.');
	else {
		console.log(`::error::Make returned HTTP ${r.status}: ${(await r.text()).slice(0, 300)}`);
		failures++;
	}
}
process.exit(failures ? 1 : 0);
