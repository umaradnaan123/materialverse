import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "MaterialVerse – Engineering Materials Encyclopedia & Selection Guide",
  description: "Explore engineering and building materials with properties, applications, brands, Indian standards, sustainability information and material selection guides in the MaterialVerse encyclopedia.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MaterialVerse – Engineering Materials Encyclopedia & Selection Guide",
    description: "Explore engineering and building materials with properties, applications, brands, Indian standards, sustainability information and material selection guides in the MaterialVerse encyclopedia.",
    url: `${SITE_URL}`,
    type: "website",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MaterialVerse",
    "url": `${SITE_URL}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MaterialVerse",
    "url": `${SITE_URL}`,
    "logo": `${SITE_URL}/icon.png`,
    "sameAs": [
      "https://twitter.com/materialpedia",
      "https://github.com/materialpedia"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <div className="sr-only">
        <p className="text-xl font-bold">MaterialVerse – Engineering Materials Encyclopedia &amp; Selection Guide</p>
        <p>Explore engineering and building materials with properties, applications, brands, Indian standards, sustainability information and material selection guides in the MaterialVerse encyclopedia.</p>
        <h2>Explore Materials</h2>
        <h2>Construction Materials</h2>
        <h2>Interior &amp; Finishing Materials</h2>
        <h2>Electrical &amp; Plumbing Materials</h2>
        <h2>Tools &amp; Hardware</h2>
        <h2>Agricultural Materials</h2>
        <h2>Textile Materials</h2>
        <h2>Eco-Friendly Materials</h2>
        <h2>Medical &amp; Laboratory Materials</h2>
        <h2>Materials, Brands &amp; Standards</h2>
        <h2>Material Selection Guides</h2>
        <h2>Material Calculators</h2>
        <h2>Frequently Asked Questions</h2>
      </div>
      <HomeClient />
    </>
  );
}
