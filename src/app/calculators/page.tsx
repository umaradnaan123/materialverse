import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import CalculatorsClient from './CalculatorsClient';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Calculator, Compass, Layers, HelpCircle, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Material Quantity & Estimation Calculators | MaterialVerse",
  description: "Calculate concrete mixes, steel rebar weights, brick masonry, plastering mortar, paint coverage, and tile layouts with verified civil engineering formulas.",
  alternates: {
    canonical: `${SITE_URL}/calculators`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Material Quantity & Estimation Calculators | MaterialVerse",
    description: "Calculate concrete mixes, steel rebar weights, brick masonry, plastering mortar, paint coverage, and tile layouts with verified civil engineering formulas.",
    url: `${SITE_URL}/calculators`,
    type: "website",
  },
};

export default function Page() {
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Material Quantity & Estimation Calculators",
    "url": `${SITE_URL}/calculators`,
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "description": "Interactive civil and construction material estimators for cement, concrete, bricks, paint, steel rebars, and tiles.",
    "browserRequirements": "Requires JavaScript. Requires HTML5."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the dry volume conversion factor for concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The dry volume of concrete materials (cement + sand + coarse aggregate) is calculated by multiplying the wet compacted volume by 1.54. This 54% allowance accounts for voids between coarse aggregates and sand grains being filled by cement paste during mixing."
        }
      },
      {
        "@type": "Question",
        "name": "How many bricks are required for 1 cubic meter of brickwork?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard modular bricks (nominal size 200mm x 100mm x 100mm with mortar), exactly 500 bricks are required per 1 cubic meter (m³) of masonry. For non-modular traditional bricks (225mm x 112.5mm x 75mm), approximately 450 to 480 bricks are needed."
        }
      },
      {
        "@type": "Question",
        "name": "What is the formula to calculate the weight of steel rebars?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard formula for the unit weight of a steel rebar is W = (D² / 162) kg per running meter, where D is the nominal bar diameter in millimeters (mm). For imperial foot measurements, the formula is W = (D² / 533) kg per foot."
        }
      },
      {
        "@type": "Question",
        "name": "How much cutting wastage should be budgeted for tile flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard orthogonal room layouts, budget 5% to 8% for cutting wastage and transport breakage. For diagonal installations, herringbone patterns, or rooms with numerous columns and door cuts, allocate 10% to 15% extra tiles."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-7xl mx-auto px-4 md:px-8 pb-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Calculators" }]} />

      {/* Hero Header */}
      <div className="text-center space-y-3 py-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-1">
          <Calculator className="w-3.5 h-3.5" />
          <span>Engineering Estimators</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400">
          Material Quantity &amp; Estimation Calculators
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm font-light">
          Input room or structural dimensions below to compute exact cement bags, sand volume, coarse aggregates, brick counts, rebar tonnage, and paint coverage.
        </p>
      </div>

      {/* Interactive Client Calculator Tool */}
      <CalculatorsClient />

      {/* Structural Engineering Formulas Reference Section */}
      <div className="glass-panel rounded-3xl p-6 md:p-10 border border-white/5 bg-gradient-to-br from-[#0b0f19] via-[#0e1424] to-[#0b0f19] space-y-8 mt-12 shadow-2xl">
        <div className="border-b border-gray-850 pb-4 space-y-2">
          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest block">Technical Reference Manual</span>
          <h2 className="text-xl md:text-2xl font-extrabold text-white">
            Civil Engineering Formulas &amp; Estimation Methodologies
          </h2>
          <p className="text-xs text-gray-400 leading-relaxed font-light">
            Our calculators utilize standard Bureau of Indian Standards (BIS) and CPWD specifications to translate nominal physical volumes into uncompacted dry material quantities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Concrete Mix Formulas */}
          <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-900 space-y-3 shadow-inner">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Concrete Mix Design (1.54 Factor)</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Wet concrete shrinks by approximately 54% when mixed with water as sand and cement fill aggregate voids. To determine dry ingredients:
            </p>
            <div className="bg-gray-900/80 p-3 rounded-xl font-mono text-[11px] text-blue-300 border border-gray-850">
              Dry Volume = Wet Volume × 1.54
            </div>
            <ul className="text-[11px] text-gray-450 space-y-1">
              <li>• <strong>M15 (1:2:4)</strong>: Foundations &amp; non-structural floors</li>
              <li>• <strong>M20 (1:1.5:3)</strong>: Standard residential RCC slabs &amp; beams</li>
              <li>• <strong>M25 (1:1:2)</strong>: Heavy-load structural columns &amp; footings</li>
            </ul>
          </div>

          {/* Brick Masonry Formulas */}
          <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-900 space-y-3 shadow-inner">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-400" />
              <span>Modular Brick Masonry (500/m³)</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Standard modular brick dimensions without mortar are 190mm × 90mm × 90mm; with 10mm mortar, dimensions are 200mm × 100mm × 100mm:
            </p>
            <div className="bg-gray-900/80 p-3 rounded-xl font-mono text-[11px] text-blue-300 border border-gray-850">
              No. of Bricks = Wall Volume (m³) × 500
            </div>
            <p className="text-[11px] text-gray-450 leading-relaxed">
              Mortar volume accounts for roughly 30% of total masonry volume. A 10% wastage allowance is recommended for on-site transport breakage.
            </p>
          </div>

          {/* Steel Rebar Weight Formula */}
          <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-900 space-y-3 shadow-inner">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span>Steel Rebar Weight (D²/162 Formula)</span>
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Reinforcement bar weight is calculated from cylindrical volume (V = π · r² · L) multiplied by mild steel density (7850 kg/m³):
            </p>
            <div className="bg-gray-900/80 p-3 rounded-xl font-mono text-[11px] text-blue-300 border border-gray-850">
              Weight (kg/m) = D² ÷ 162.2
            </div>
            <ul className="text-[11px] text-gray-450 space-y-1">
              <li>• <strong>8mm</strong>: 0.395 kg/m (Stirrups &amp; ties)</li>
              <li>• <strong>10mm</strong>: 0.617 kg/m (Slab reinforcement)</li>
              <li>• <strong>12mm</strong>: 0.888 kg/m (Beams &amp; lintels)</li>
              <li>• <strong>16mm</strong>: 1.580 kg/m (Columns &amp; main bars)</li>
            </ul>
          </div>
        </div>

        {/* Tile & Paint Estimation Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-900 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-indigo-400">
              Flooring &amp; Wall Tile Quantity Formula
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Measure floor length and breadth to calculate net square footage. Divide by the surface area of a single tile box. Add an 8% to 10% buffer for border cuts, corner mitering, and skirting borders:
            </p>
            <div className="p-3 bg-gray-900/80 rounded-xl font-mono text-[11px] text-indigo-300">
              Total Tiles = (Floor Area ÷ Tile Area) × 1.10
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gray-950/60 border border-gray-900 space-y-2.5">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider text-teal-400">
              Interior &amp; Exterior Paint Coverage
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              Measure total wall surface area and deduct doors and windows. On smooth, primed masonry walls, acrylic emulsion delivers 120–140 sq.ft/liter for the first coat and 220–240 sq.ft/liter for the second finish coat:
            </p>
            <div className="p-3 bg-gray-900/80 rounded-xl font-mono text-[11px] text-teal-300">
              Paint Needed (Liters) = Net Wall Area (sq.ft) ÷ 110 (for 2 coats)
            </div>
          </div>
        </div>

        {/* Engineering FAQs */}
        <div className="space-y-4 pt-4 border-t border-gray-850">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-400" />
            <span>Frequently Asked Questions About Estimations</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900 space-y-2">
              <h3 className="text-xs font-bold text-white">Why is concrete dry volume 54% higher than wet volume?</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                When water is introduced to dry aggregates and cement, the finer particles settle into interstitial pore spaces, causing the mixture to densify and contract in volume.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-gray-950/40 border border-gray-900 space-y-2">
              <h3 className="text-xs font-bold text-white">How much cement is required for 100 sq.ft of 12mm plaster?</h3>
              <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                For a 1:4 cement-sand mix on internal walls with a 12mm thickness, approximately 1.5 bags of 50kg cement and 6 cubic feet of washed plastering sand are required.
              </p>
            </div>
          </div>
        </div>

        {/* Contextual Internal Links */}
        <div className="pt-4 border-t border-gray-850 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-gray-500 font-semibold">Explore Materials:</span>
            <Link href="/materials/cement" className="text-blue-400 hover:text-white transition-colors">Cement</Link>
            <span className="text-gray-700">•</span>
            <Link href="/materials/steel" className="text-blue-400 hover:text-white transition-colors">Steel Rebars</Link>
            <span className="text-gray-700">•</span>
            <Link href="/materials/bricks" className="text-blue-400 hover:text-white transition-colors">Bricks</Link>
            <span className="text-gray-700">•</span>
            <Link href="/categories/construction" className="text-blue-400 hover:text-white transition-colors">Construction Sector</Link>
          </div>
          <Link href="/guides" className="inline-flex items-center gap-1 text-blue-400 hover:text-white font-semibold transition-colors">
            <span>Browse Guides &amp; Mix Ratios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
