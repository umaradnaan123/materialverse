import React from 'react';
import { Metadata } from 'next';
import { SITE_URL } from '@/config/seo';
import { Award, ShieldCheck, Heart } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "About Us | MaterialVerse Civil & Material Science Database",
  description: "Learn about the mission, data audit process, and certified material experts behind the MaterialVerse resource engine.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 pb-12 space-y-8">
      <Breadcrumbs items={[{ label: "About" }]} />

      <div className="space-y-4">
        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Our Mission</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          About MaterialVerse
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
          MaterialVerse is an enterprise-grade encyclopedia and resource engine designed to empower civil engineers, metallurgists, contractors, and DIY builders with verified specifications, standards compliance data, and calculators.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
          <Award className="w-5 h-5 text-blue-400" />
          <h3 className="font-bold text-white text-sm">Verified Standards</h3>
          <p className="text-xs text-gray-450 font-light leading-relaxed">
            All structural specifications adhere to verified BIS (Bureau of Indian Standards), ASTM, and ISO guidelines.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
          <ShieldCheck className="w-5 h-5 text-emerald-400" />
          <h3 className="font-bold text-white text-sm">E-E-A-T Certified</h3>
          <p className="text-xs text-gray-450 font-light leading-relaxed">
            Curated and audited by senior PhD material science consultants to ensure factual accuracy and design compliance.
          </p>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-white/5 space-y-2">
          <Heart className="w-5 h-5 text-rose-400" />
          <h3 className="font-bold text-white text-sm">100% Free & Open</h3>
          <p className="text-xs text-gray-450 font-light leading-relaxed">
            Operating as a public library database to make material properties easily searchable.
          </p>
        </div>
      </div>

      <div className="space-y-4 pt-6 border-t border-gray-850">
        <h2 className="text-xl font-bold text-white">How We Maintain Quality Control</h2>
        <p className="text-xs text-gray-300 leading-relaxed font-light">
          Unlike generic directories, our database is reviewed quarterly against revisions in engineering publications. Each entry links back to the official standard codes (such as IS 456 for concrete design and IS 1786 for reinforcing bars). We avoid low-quality AI content by relying on factual tables, manufacturing compliance standards, and verified vendor listings.
        </p>
      </div>
    </div>
  );
}
