import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema. The n8n pipeline writes these fields.
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			// 'everyday' = written for non-specialists, 'deep-dive' = technical but accessible
			track: z.enum(['everyday', 'deep-dive']).optional(),
			tags: z.array(z.string()).default([]),
			sources: z
				.array(z.object({ title: z.string(), url: z.string().url(), publisher: z.string().optional() }))
				.default([]),
			// Drafts are committed to the repo but never built into the site.
			draft: z.boolean().default(false),
			aiAssisted: z.boolean().default(false),
		}),
});

export const collections = { blog };
