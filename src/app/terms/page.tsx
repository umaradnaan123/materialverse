import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Terms of Service | MaterialVerse",
  description: "Review terms and conditions for utilizing the MaterialVerse engineering database and calculators hub.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-6">
      <Breadcrumbs items={[{ label: "Terms of Service" }]} />

      <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Terms of Service
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
        Last Updated: August 3, 2026.
      </p>

      <div className="prose prose-invert max-w-none text-gray-300 text-xs sm:text-sm leading-relaxed font-light space-y-4">
        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">1. Use License</h2>
        <p>
          Permission is granted to access, print, and utilize the specifications tables and civil calculators for personal or corporate project estimations. This database remains copyrighted material and bulk scraping or automated scraping is prohibited.
        </p>

        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">2. Liability Disclaimers</h2>
        <p>
          All information is compiled for educational reference. All engineering formulas and material pricing parameters should be double-checked against regional structural drawings and dealer agreements before executing site work.
        </p>
      </div>
    </div>
  );
}
