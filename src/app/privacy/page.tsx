import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Privacy Policy | MaterialVerse",
  description: "Read our privacy guidelines, cookie usage, data protection parameters, and compliance details.",
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-6">
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

      <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Privacy Policy
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
        Last Updated: August 3, 2026.
      </p>

      <div className="prose prose-invert max-w-none text-gray-300 text-xs sm:text-sm leading-relaxed font-light space-y-4">
        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">1. Data Collection</h2>
        <p>
          MaterialVerse operates as a static resource platform. We do not track, store, or sell personal identifiers or cookies. Any data stored locally (such as bookmarked materials or inspection checklist status) remains entirely client-side within your browser's local storage.
        </p>

        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">2. Cookies & Analytics</h2>
        <p>
          We utilize standard, privacy-compliant Google Analytics 4 tags to measure aggregate audience metrics and page impressions. No personally identifiable information (PII) is captured.
        </p>

        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">3. Security</h2>
        <p>
          We strictly employ HTTPS encryption. No external data feeds are executed outside our static bundle distribution.
        </p>
      </div>
    </div>
  );
}
