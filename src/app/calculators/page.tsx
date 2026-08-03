import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import CalculatorsClient from './CalculatorsClient';

export const metadata: Metadata = {
  title: "Material Quantity & Estimation Calculators | Materialpedia",
  description: "Calculate concrete, steel rebars, brick masonry, plastering, plumbing pipes, and tile layout counts instantly with engineering grade estimators.",
  alternates: {
    canonical: `${SITE_URL}/calculators`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Material Quantity & Estimation Calculators | Materialpedia",
    description: "Calculate concrete, steel rebars, brick masonry, plastering, plumbing pipes, and tile layout counts instantly with engineering grade estimators.",
    url: `${SITE_URL}/calculators`,
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Material Quantity & Estimation Calculators",
    "url": `${SITE_URL}/calculators`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Interactive civil and construction material estimators for cement, concrete, bricks, paint, steel rebars, and tiles.",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CalculatorsClient />
    </>
  );
}
