import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { features } from '@data/site';

// Served as /rss.xml, only when the Articles section is enabled
export function getStaticPaths() {
  return features.articles ? [{ params: { feed: 'rss' } }] : [];
}

export async function GET(context: APIContext) {
  const articles = await getCollection('articles', ({ data }) => !data.draft);
  return rss({
    title: 'Carmine Calabrese – Articles',
    description: 'Penetration testing write-ups, DevSecOps and software engineering notes.',
    site: context.site!,
    items: articles
      .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
      .map((article) => ({
        title: article.data.title,
        description: article.data.description,
        pubDate: article.data.pubDate,
        categories: [article.data.category, ...article.data.tags],
        link: `/articles/${article.id}/`,
      })),
  });
}
