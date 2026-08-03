import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import SelectorClient from './SelectorClient';

export const metadata: Metadata = {
  title: "AI Material Selector & Recommendation Engine | Materialpedia",
  description: "Find the ideal material for your project based on structural application, target budget, durability requirements, and environmental parameters.",
  alternates: {
    canonical: `${SITE_URL}/selector`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Material Selector & Recommendation Engine | Materialpedia",
    description: "Find the ideal material for your project based on structural application, target budget, durability requirements, and environmental parameters.",
    url: `${SITE_URL}/selector`,
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "AI Material Selector & Recommendation Engine",
    "url": `${SITE_URL}/selector`,
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "All",
    "description": "Decision-support recommendation tool mapping target performance attributes to concrete, finishes, structural, and electrical categories."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SelectorClient />
    </>
  );
}
