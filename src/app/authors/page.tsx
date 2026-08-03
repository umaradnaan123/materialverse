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
          Authors &amp; Content Reviewers
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
          MaterialVerse content is written and audited by certified domain specialists to maintain high levels of academic rigor and engineering compliance.
        </p>
      </div>

      <div className="glass-panel p-6 md:p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-950/5 via-[#0b0f19] to-gray-900/40 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-gray-850">
          <div className="text-4xl p-4 bg-gray-900 rounded-2xl border border-gray-800 w-16 h-16 flex items-center justify-center">
            🔬
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Dr. Arjan Mehta, PhD</h2>
            <p className="text-xs text-blue-400 font-semibold">Chief Editorial Reviewer &amp; Materials Specialist</p>
            <p className="text-[10px] text-gray-500 font-light mt-1">Focus: Civil structures, concrete mixture ratios, metallurgical fatigue indexes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-gray-300">
          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-blue-400 font-bold">
              <GraduationCap className="w-4 h-4" />
              <span>Academic Background</span>
            </div>
            <p className="font-light leading-relaxed">
              Ph.D. in Material Sciences from the Indian Institute of Technology (IIT). Over 15 peer-reviewed papers published.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </div>
            <p className="font-light leading-relaxed">
              18+ years consulting in structural design, auditing construction materials logistics compliance, and testing composites.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
              <Award className="w-4 h-4" />
              <span>Accreditation Badge</span>
            </div>
            <p className="font-light leading-relaxed">
              Registered inspector for National Material Quality Auditing Council (NMQAC).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
