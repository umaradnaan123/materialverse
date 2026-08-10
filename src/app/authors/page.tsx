import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Editorial Board & Material Science Authors | MaterialVerse",
  description: "Meet the material science specialists, civil engineers, and standards compliance auditors authoring MaterialVerse guides.",
  alternates: {
    canonical: `${SITE_URL}/authors`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-8">
      <Breadcrumbs items={[{ label: "Authors" }]} />

      <div className="space-y-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Editorial Board</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Editorial Team &amp; Process
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
          MaterialVerse content is compiled and reviewed by a collaborative board of civil engineering researchers, metallurgists, and technical writers.
        </p>
      </div>

      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-950/5 via-[#0b0f19] to-gray-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-gray-850">
          <div className="text-4xl p-4 bg-gray-900 rounded-2xl border border-gray-800 w-16 h-16 flex items-center justify-center">
            📚
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">MaterialVerse Editorial Board</h2>
            <p className="text-xs text-blue-400 font-semibold">Collaborative Technical Research &amp; Fact-Checking</p>
            <p className="text-[10px] text-gray-500 font-light mt-1">Focus: Civil specifications, code requirements (BIS/IS/ASTM/ISO), academic study notes compilation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-gray-300">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Information Sourcing</span>
            </div>
            <p className="font-light leading-relaxed">
              We compile data directly from official standard bodies, including the Bureau of Indian Standards (BIS) and regional manufacturer product data sheets.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Briefcase className="w-4 h-4" />
              <span>Review Policy</span>
            </div>
            <p className="font-light leading-relaxed">
              Every formula and material properties table is double-checked by at least two engineering contributors before dynamic pre-rendering updates.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
              <Award className="w-4 h-4" />
              <span>Objective</span>
            </div>
            <p className="font-light leading-relaxed">
              To provide a clear, factual, and accessible library database for engineering students, researchers, and professional builders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
