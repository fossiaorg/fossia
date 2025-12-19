import { z, defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'

const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blog' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

const community = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blog/community' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			image: z.string(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

const news = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/news' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			author: z.string(),
			tags: z.array(z.string())
		})
})

export const collections = {
	blog,
	community,
	news
}
