import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Materialpedia - The Encyclopedia of Materials",
  description: "Find engineering standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Materialpedia - The Encyclopedia of Materials",
    description: "Find engineering standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
    url: `${SITE_URL}`,
    type: "website",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Materialpedia",
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
    "name": "MaterialVerse Ltd",
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
      <HomeClient />
    </>
  );
}
