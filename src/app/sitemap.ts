import { MetadataRoute } from 'next';
import { materialsData } from '../data/materialsData';
import { articlesData } from '../data/articlesData';
import { blogData } from '../data/blogData';
import { resourcesData } from '../data/resourcesData';

import { SITE_URL } from '@/config/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;

  // Base static paths
  const staticPaths = [
    '',
    '/calculators',
    '/compare',
    '/selector',
    '/glossary',
    '/bookmarks',
    '/brands',
    '/guides',
    '/prices',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/authors',
    '/resources',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic material paths
  const materialPaths = materialsData.map((m) => ({
    url: `${baseUrl}/materials/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic guide paths
  const guidePaths = articlesData.map((a) => ({
    url: `${baseUrl}/guides/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic blog paths
  const blogPaths = blogData.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic resource paths
  const resourcePaths = resourcesData.map((res) => ({
    url: `${baseUrl}/resources/${res.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPaths, ...materialPaths, ...guidePaths, ...blogPaths, ...resourcePaths];
}
