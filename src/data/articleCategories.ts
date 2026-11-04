/**
 * Article categories.
 *
 * To create a NEW category:
 *   1. Add an entry below: the key is the id you write in the article frontmatter
 *      (`category: "my-new-category"`), the values are the labels shown on the site.
 *   2. Done: the schema in src/content.config.ts accepts it automatically and the
 *      filter button appears on /articles as soon as one published article uses it.
 */
export const articleCategories = {
  cybersecurity: { en: 'Cybersecurity & Pentest', it: 'Cybersecurity & Pentest' },
  devsecops: { en: 'DevSecOps', it: 'DevSecOps' },
  'software-engineering': { en: 'Software Engineering', it: 'Software Engineering' },
  'blockchain-privacy': { en: 'Blockchain & Privacy', it: 'Blockchain & Privacy' },
  cheatsheets: { en: 'Cheatsheets', it: 'Cheatsheet' },
  'tech-notes': { en: 'Tech Notes', it: 'Note Tecniche' },
} as const;

export type ArticleCategory = keyof typeof articleCategories;
