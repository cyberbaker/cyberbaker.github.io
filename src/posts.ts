import { getCollection } from 'astro:content';

// All published posts, newest first. Drafts are excluded everywhere on the site.
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
