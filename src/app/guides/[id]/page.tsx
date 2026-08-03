import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import { articlesData } from '../../../data/articlesData';
import GuideClientWrapper from './GuideClientWrapper';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return articlesData.map((a) => ({
    id: a.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const article = articlesData.find((a) => a.id === id);
  if (!article) {
    return {
      title: "Guide Not Found | Materialpedia",
    };
  }

  const title = `${article.title} | Educational Guides | Materialpedia`;
  const description = article.description;

  return {
    title,
    description,
    keywords: article.seoKeywords,
    alternates: {
      canonical: `${SITE_URL}/guides/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/guides/${id}`,
      siteName: 'Materialpedia',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Educational guide not found!
      </div>
    );
  }

  // Article structured JSON-LD schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": article.title,
    "description": article.description,
    "author": {
      "@type": "Organization",
      "name": article.author
    },
    "dateModified": article.lastUpdated,
    "about": {
      "@type": "Thing",
      "name": article.category
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": `${SITE_URL}/guides`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `${SITE_URL}/guides/${id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <GuideClientWrapper id={id} />
    </>
  );
}
