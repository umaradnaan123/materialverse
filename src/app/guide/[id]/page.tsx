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
      title: "Guide Not Found | MaterialVerse",
    };
  }

  const title = `${article.title} | Educational Guides | MaterialVerse`;
  const description = article.description;

  return {
    title,
    description,
    keywords: article.seoKeywords,
    alternates: {
      canonical: `https://materialpedia.org/guide/${id}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://materialpedia.org/guide/${id}`,
    },
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
  const jsonLd = {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuideClientWrapper id={id} />
    </>
  );
}
