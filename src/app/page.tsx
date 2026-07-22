import React from 'react';
import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: "Materialpedia - The Encyclopedia of Materials",
  description: "Find engineering standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
  alternates: {
    canonical: "https://materialpedia.org",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Materialpedia - The Encyclopedia of Materials",
    description: "Find engineering standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
    url: "https://materialpedia.org",
    type: "website",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Materialpedia",
    "url": "https://materialpedia.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://materialpedia.org/?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MaterialVerse Ltd",
    "url": "https://materialpedia.org",
    "logo": "https://materialpedia.org/icon.png",
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
