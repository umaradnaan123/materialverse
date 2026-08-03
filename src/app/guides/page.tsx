import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import GuidesClient from './GuidesClient';

export const metadata: Metadata = {
  title: "Educational Installation & Buying Guides | Materialpedia",
  description: "Read professional walkthroughs, installation steps, and material procurement guidelines written by engineering specialists.",
  alternates: {
    canonical: `${SITE_URL}/guides`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Educational Installation & Buying Guides | Materialpedia",
    description: "Read professional walkthroughs, installation steps, and material procurement guidelines written by engineering specialists.",
    url: `${SITE_URL}/guides`,
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Educational Installation & Buying Guides",
    "url": `${SITE_URL}/guides`,
    "description": "Library of engineering articles, step-by-step DIY installation guidelines, and raw material safety instructions."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GuidesClient />
    </>
  );
}
