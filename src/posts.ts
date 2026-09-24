import { type CollectionEntry, getCollection } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Track = NonNullable<Post['data']['track']>;

// All published posts, newest first. Drafts are excluded everywhere on the site.
export async function getPublishedPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function readingMinutes(post: Post) {
	const words = (post.body ?? '').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 220));
}

export function postUrl(post: Post) {
	return `${import.meta.env.BASE_URL}blog/${post.id}/`;
}

// Posts of the same type first, then anything else, excluding the current post.
export function relatedPosts(all: Post[], current: Post, count = 3) {
	const others = all.filter((p) => p.id !== current.id);
	const sameTrack = others.filter((p) => p.data.track === current.data.track);
	const rest = others.filter((p) => p.data.track !== current.data.track);
	return [...sameTrack, ...rest].slice(0, count);
}
