import React from 'react';
import { Metadata } from 'next';
import GlossaryClient from './GlossaryClient';

export const metadata: Metadata = {
  title: "Engineering Glossary & BIS Standards Reference | Materialpedia",
  description: "Browse detailed engineering glossary terms and Bureau of Indian Standards (BIS) license specifications for raw, structural, and finish materials.",
  alternates: {
    canonical: "https://materialpedia.org/glossary",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Engineering Glossary & BIS Standards Reference | Materialpedia",
    description: "Browse detailed engineering glossary terms and Bureau of Indian Standards (BIS) license specifications for raw, structural, and finish materials.",
    url: "https://materialpedia.org/glossary",
    type: "website",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Engineering Glossary & BIS Standards Reference",
    "url": "https://materialpedia.org/glossary",
    "description": "Explanatory list of civil engineering terminology and regulatory licensing certifications (ISI and BIS) matching industrial code specifications."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GlossaryClient />
    </>
  );
}
