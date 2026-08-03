import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import { materialsData } from '../../../data/materialsData';
import MaterialClientWrapper from './MaterialClientWrapper';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return materialsData.map((m) => ({
    id: m.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const material = materialsData.find((m) => m.id === id);
  if (!material) {
    return {
      title: "Material Not Found | Materialpedia",
    };
  }

  const title = `${material.name} Properties, Standards & Guides | Materialpedia`;
  const description = `${material.name} standard specifications. Lifespan: ${material.lifespan}, Price: ${material.priceEstimation}. Learn grades, pros/cons, and DIY maintenance guide.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/material/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/material/${id}`,
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
  const material = materialsData.find((m) => m.id === id);

  if (!material) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Material not found!
      </div>
    );
  }

  // Pre-render JSON-LD Structured Schema for search crawlers
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": material.name,
    "description": material.description,
    "category": material.category,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "description": material.priceEstimation
    },
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Lifespan",
        "value": material.lifespan
      },
      {
        "@type": "PropertyValue",
        "name": "Durability Rating",
        "value": `${material.durability}/5`
      },
      {
        "@type": "PropertyValue",
        "name": "Eco Score",
        "value": `${material.ecoScore}/5`
      }
    ]
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
        "name": "Materials",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": material.name,
        "item": `https://materialpedia.org/material/${id}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <MaterialClientWrapper id={id} />
    </>
  );
}
