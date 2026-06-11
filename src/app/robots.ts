import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const BASE_URL = 'https://materialverse.in';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all crawlers full access to all public content
        userAgent: '*',
        allow: '/',
      },
      {
        // Prevent AI training crawlers from indexing content
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'CCBot', 'anthropic-ai', 'Omgilibot'],
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
