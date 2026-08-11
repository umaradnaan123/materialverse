import { SITE_URL } from '@/config/seo';
import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { categoriesData } from '../../../data/categoriesData';
import { materialsData } from '../../../data/materialsData';
import Link from 'next/link';
import { Compass, GraduationCap, ChevronRight, HelpCircle, ArrowRight, Layers } from 'lucide-react';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return categoriesData.map((cat) => ({
    id: cat.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = categoriesData.find((cat) => cat.id === id);
  if (!category) {
    return {
      title: "Category Not Found | Materialpedia",
    };
  }

  const title = `${category.name}: Specifications, Materials & Standards | Materialpedia`;
  const description = `${category.description} Explore subsectors, verified standards, and key engineering materials lists in the MaterialVerse database.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/categories/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/categories/${id}`,
      siteName: 'Materialpedia',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  };
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  const category = categoriesData.find((cat) => cat.id === id);

  if (!category) {
    notFound();
  }

  // Find material objects listed inside this category
  const categoryMaterials = materialsData.filter((mat) => category.materials.includes(mat.id));

  // Category structured JSON-LD schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": category.name,
    "url": `${SITE_URL}/categories/${id}`,
    "description": category.description,
    "hasPart": categoryMaterials.map((mat) => ({
      "@type": "WebPage",
      "name": mat.name,
      "url": `${SITE_URL}/materials/${mat.id}`
    }))
  };

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 pb-12 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumbs items={[{ label: "Categories", path: "/categories" }, { label: category.name }]} />

      {/* Hero Header */}
      <div className="space-y-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider">
          <Layers className="w-3.5 h-3.5" />
          <span>Sector Overview</span>
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          {category.name}
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
          {category.overview}
        </p>
      </div>

      {/* Main Grid: Details & Side Column */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Materials & Details */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Subcategories list */}
          <div className="glass-panel p-6 rounded-2xl border border-white/5 space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-5 h-5 text-blue-400" />
              <span>Sectors &amp; Subcategories</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {category.subcategories.map((sub, sIdx) => (
                <div key={sIdx} className="flex items-center gap-2 p-3 rounded-xl bg-gray-900/50 border border-gray-850 text-xs text-gray-300">
                  <ChevronRight className="w-4 h-4 text-blue-400" />
                  <span className="font-medium">{sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary Materials list */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white">Featured Materials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categoryMaterials.map((mat) => (
                <Link key={mat.id} href={`/materials/${mat.id}`} className="block group">
                  <div className="p-5 rounded-2xl bg-gray-900/30 hover:bg-blue-950/15 border border-gray-850 hover:border-blue-500/20 transition-all flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                        {mat.name}
                      </h3>
                      <p className="text-[11px] text-gray-450 font-light leading-relaxed line-clamp-2">
                        {mat.description}
                      </p>
                    </div>
                    <div className="pt-4 flex items-center justify-between text-[10px] font-bold text-blue-400 mt-2 border-t border-gray-850/50">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* FAQ Accordions */}
          {category.faqs && category.faqs.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-blue-400" />
                <span>Frequently Asked Questions</span>
              </h2>
              <div className="space-y-3">
                {category.faqs.map((faq, fIdx) => (
                  <div key={fIdx} className="p-4 rounded-xl bg-gray-900/40 border border-gray-850/80 space-y-2">
                    <h3 className="text-xs font-bold text-white">{faq.q}</h3>
                    <p className="text-[11px] text-gray-400 leading-relaxed font-light">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Quick Links */}
        <div className="space-y-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-gradient-to-b from-blue-950/10 to-transparent space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest text-blue-400">
              Guidance &amp; Standards
            </h3>
            <p className="text-[11px] text-gray-450 leading-relaxed font-light">
              Make sure to cross-examine material properties against national standards and verified corporate registries before sizing and structural calculations.
            </p>
            <div className="pt-2">
              <Link
                href="/guides"
                className="w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 border border-blue-500/20 text-xs shadow-sm"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Browse Guides</span>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
