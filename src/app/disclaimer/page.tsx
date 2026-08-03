import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Professional & Regulatory Disclaimer | MaterialVerse",
  description: "Important safety, compliance, and professional disclaimer regarding civil calculators and standards.",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-6">
      <Breadcrumbs items={[{ label: "Disclaimer" }]} />

      <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
        Professional Disclaimer
      </h1>
      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
        Last Updated: August 3, 2026.
      </p>

      <div className="prose prose-invert max-w-none text-gray-300 text-xs sm:text-sm leading-relaxed font-light space-y-4">
        <p className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-300 font-medium">
          <strong>Notice:</strong> The material properties, load factors, structural tolerances, and estimation calculators provided by MaterialVerse are intended for preliminary informational purposes only.
        </p>

        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">No Engineering Consultations</h2>
        <p>
          MaterialVerse does not provide licensed structural, metallurgical, or civil engineering consults. Use of this database does not establish an engineer-client relationship. You must always engage a registered professional engineer (PE) to inspect site layouts, evaluate soils, and approve concrete grade mixtures.
        </p>

        <h2 className="text-base font-bold text-white uppercase tracking-wider pt-4">Calculation Discrepancies</h2>
        <p>
          Calculations are derived from standardized parameters and formulas (such as concrete volume calculations and steel rebar weight parameters). Real-world site yields vary based on water-cement ratios, structural waste indices, and logistics tolerances. MaterialVerse is not liable for structural failures or budgetary discrepancies.
        </p>
      </div>
    </div>
  );
}
