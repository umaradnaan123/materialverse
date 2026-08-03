import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import BrandsClient from './BrandsClient';

export const metadata: Metadata = {
  title: "Certified Brand Directory & Manufacturers | Materialpedia",
  description: "Browse verified material brand directories, manufacturers, certifications, and compliance licenses across civil construction categories.",
  alternates: {
    canonical: `${SITE_URL}/brands`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Certified Brand Directory & Manufacturers | Materialpedia",
    description: "Browse verified material brand directories, manufacturers, certifications, and compliance licenses across civil construction categories.",
    url: `${SITE_URL}/brands`,
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Certified Brand Directory & Manufacturers",
    "url": `${SITE_URL}/brands`,
    "description": "Comprehensive directory profiling top quality-certified material manufacturers and license details."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BrandsClient />
    </>
  );
}
