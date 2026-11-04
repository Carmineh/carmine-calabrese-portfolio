import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { articleCategories, type ArticleCategory } from '@data/articleCategories';

const articles = defineCollection({
  // Every Markdown file in src/content/articles, except the "_" templates
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(Object.keys(articleCategories) as [ArticleCategory, ...ArticleCategory[]]),
    // Language the article is written in (used for the badge on the EN site and the <html lang>)
    lang: z.enum(['en', 'it']).default('it'),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
