import React from 'react';
import { Metadata } from 'next';
import CompareClient from './CompareClient';

export const metadata: Metadata = {
  title: "Material Comparison Matrix | Materialpedia",
  description: "Side-by-side technical comparison of 60+ materials. Compare density, lifespan, cost tiers, durability, and eco-scores.",
  alternates: {
    canonical: "https://materialpedia.org/compare",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Material Comparison Matrix | Materialpedia",
    description: "Side-by-side technical comparison of 60+ materials. Compare density, lifespan, cost tiers, durability, and eco-scores.",
    url: "https://materialpedia.org/compare",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Material Comparison Matrix",
    "url": "https://materialpedia.org/compare",
    "description": "Interactive matrix for matching and comparing technical, financial, and environmental parameters of multiple construction and manufacturing materials."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CompareClient />
    </>
  );
}
