import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { categoriesData } from '../../data/categoriesData';
import { SITE_URL } from '@/config/seo';
import { LayoutGrid, ArrowRight, Layers, FileText } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Materials Categories & Application Sectors | Materialpedia",
  description: "Browse building, interior finishes, electrical, plumbing, agricultural, textile, eco-friendly and cleanroom categories in MaterialVerse.",
  alternates: {
    canonical: `${SITE_URL}/categories`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 pb-12">
      <Breadcrumbs items={[{ label: "Categories" }]} />

      <div className="text-center space-y-3 py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
          <LayoutGrid className="w-3.5 h-3.5" />
          <span>Category Directory</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400">
          Materials Categories &amp; Sectors
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Audit construction binders, interior flooring surfaces, electrical switchgear, plumbing lines, agro-textiles, and medical equipment materials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categoriesData.map((cat) => (
          <Link key={cat.id} href={`/categories/${cat.id}`} className="block group">
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-blue-950/5 via-[#0b0f19] to-gray-900/40 hover:border-blue-500/30 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-gray-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10 font-bold uppercase tracking-wider">
                    {cat.name.split(' ')[0]} Sector
                  </span>
                  <span className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-gray-500" />
                    <span>{cat.subcategories.length} Subcategories</span>
                  </span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {cat.name}
                </h2>
                <p className="text-xs text-gray-450 font-light leading-relaxed line-clamp-3">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cat.subcategories.slice(0, 3).map((sub, sIdx) => (
                    <span key={sIdx} className="text-[9px] px-2 py-0.5 rounded bg-gray-900 text-gray-400 font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-gray-850 mt-6 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors">
                <span>View Category Details</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
