import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { materialsData } from '../../data/materialsData';
import { SITE_URL } from '@/config/seo';
import { Library, ArrowRight, Compass } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Engineering Materials Directory & Specification Database | MaterialVerse",
  description: "Browse 60+ engineering and building materials profiles including cement, steel, bricks, flooring tiles, insulation, and solar panels in the MaterialVerse encyclopedia.",
  alternates: {
    canonical: `${SITE_URL}/materials`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 pb-12">
      <Breadcrumbs items={[{ label: "Materials" }]} />

      <div className="text-center space-y-3 py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
          <Library className="w-3.5 h-3.5" />
          <span>Materials Database</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400">
          Engineering Materials Directory
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Access structural parameters, BIS standards, pricing estimates, eco-impact logs, and selection checklists for civil construction and engineering materials.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {materialsData.map((mat) => (
          <Link key={mat.id} href={`/materials/${mat.id}`} className="block group">
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-blue-950/5 via-[#0b0f19] to-gray-900/40 hover:border-blue-500/30 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-gray-505">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10 font-bold uppercase tracking-wider">
                    {mat.category}
                  </span>
                  <span className="text-gray-500">Lifespan: {mat.lifespan}</span>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {mat.name}
                </h2>
                <p className="text-xs text-gray-450 font-light leading-relaxed line-clamp-3">
                  {mat.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {mat.bestFor.slice(0, 3).map((use, uIdx) => (
                    <span key={uIdx} className="text-[9px] px-2 py-0.5 rounded bg-gray-900 text-gray-400 font-medium">
                      {use}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-gray-850 mt-6 text-xs font-semibold text-blue-400 group-hover:text-white transition-colors">
                <span>View Full Specifications</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
