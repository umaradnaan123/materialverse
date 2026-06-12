import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';
import { materialsData } from '../data/materialsData';
import { brandsData } from '../data/brandsData';
import { articlesData } from '../data/articlesData';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://materialverse.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();

  // ── Static / section pages ───────────────────────────────────────────────
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/#/compare`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#/calculators`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#/selector`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/#/brands`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#/guides`,
      lastModified: today,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/#/prices`,
      lastModified: today,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/#/glossary`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];

  // ── Material detail pages ────────────────────────────────────────────────
  const materialRoutes: MetadataRoute.Sitemap = materialsData.map((mat) => ({
    url: `${BASE_URL}/#/material/${mat.id}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Brand profile pages ──────────────────────────────────────────────────
  const brandRoutes: MetadataRoute.Sitemap = brandsData.map((brand) => ({
    url: `${BASE_URL}/#/brand/${brand.id}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ── Educational guide / article pages ───────────────────────────────────
  const guideRoutes: MetadataRoute.Sitemap = articlesData.map((article) => ({
    url: `${BASE_URL}/#/guide/${article.id}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...materialRoutes, ...brandRoutes, ...guideRoutes];
}
