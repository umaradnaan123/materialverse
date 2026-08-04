import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { resourcesData } from '../../data/resourcesData';
import { SITE_URL } from '@/config/seo';
import { GraduationCap, ArrowRight, Download, FileText, Calendar } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Engineering Study Materials & Lecture Notes Library | Materialpedia",
  description: "Browse free downloadable B.Tech/M.Tech lecture notes, competitive exam formula sheets, programming guidelines, and lab manuals.",
  alternates: {
    canonical: `${SITE_URL}/resources`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 pb-12">
      <Breadcrumbs items={[{ label: "Resources" }]} />

      <div className="text-center space-y-3 py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-2">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Study Library</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-250 to-gray-400">
          Academic Study Materials Hub
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Unlock free, high-yield engineering lecture notes, PDF study guides, formula cheat sheets, and competitive syllabus reviews.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resourcesData.map((res) => (
          <Link key={res.id} href={`/resources/${res.id}`} className="block group">
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-indigo-950/5 via-[#0b0f19] to-gray-900/40 hover:border-indigo-500/30 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-gray-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/10 font-bold uppercase tracking-wider">
                    {res.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-gray-500" />
                    <span>{res.format}</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors leading-tight">
                  {res.title}
                </h2>
                <p className="text-xs text-gray-450 font-light leading-relaxed line-clamp-3">
                  {res.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-900 pt-4 mt-6 text-[10px] text-indigo-400 font-bold">
                <span className="flex items-center gap-1.5 text-gray-500 font-light">
                  <Download className="w-3.5 h-3.5" />
                  <span>Size: {res.downloadSize}</span>
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
