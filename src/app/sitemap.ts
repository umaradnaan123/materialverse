import { MetadataRoute } from 'next';
import { materialsData } from '../data/materialsData';
import { brandsData } from '../data/brandsData';
import { articlesData } from '../data/articlesData';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://materialpedia.org';

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
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic material paths
  const materialPaths = materialsData.map((m) => ({
    url: `${baseUrl}/material/${m.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic brand paths
  const brandPaths = brandsData.map((b) => ({
    url: `${baseUrl}/brand/${b.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  // Dynamic guide paths
  const guidePaths = articlesData.map((a) => ({
    url: `${baseUrl}/guide/${a.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticPaths, ...materialPaths, ...brandPaths, ...guidePaths];
}
