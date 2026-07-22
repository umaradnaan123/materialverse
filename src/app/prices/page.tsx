import React from 'react';
import { Metadata } from 'next';
import PricesClient from './PricesClient';

export const metadata: Metadata = {
  title: "Material Price Intelligence & Market Estimates | Materialpedia",
  description: "Track price ranges, market estimates, GST taxes, labor costs, and cost intelligence databases for structural and finish materials.",
  alternates: {
    canonical: "https://materialpedia.org/prices",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Material Price Intelligence & Market Estimates | Materialpedia",
    description: "Track price ranges, market estimates, GST taxes, labor costs, and cost intelligence databases for structural and finish materials.",
    url: "https://materialpedia.org/prices",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Material Price Intelligence & Market Estimates",
    "url": "https://materialpedia.org/prices",
    "description": "Live trackers and estimates for construction material costs, taxation categories, and labor charges."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PricesClient />
    </>
  );
}
