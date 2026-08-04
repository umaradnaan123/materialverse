import React from 'react';
import { Metadata } from 'next';
import { resourcesData } from '../../../data/resourcesData';
import { SITE_URL } from '@/config/seo';
import { Download, FileText, Info, Award, Calendar, BookOpen, AlertCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return resourcesData.map((res) => ({
    id: res.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const resource = resourcesData.find((r) => r.id === id);
  if (!resource) {
    return { title: "Resource Not Found | Materialpedia" };
  }

  const title = `${resource.title} - Download Free PDF Notes | Materialpedia`;
  const description = `${resource.description} Sourced and reviewed by ${resource.author}. Available formats: ${resource.format}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/resources/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/resources/${id}`,
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
  const resource = resourcesData.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Resource not found!
      </div>
    );
  }

  // Pre-render Course/CreativeWork JSON-LD Schema
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": resource.title,
    "description": resource.description,
    "provider": {
      "@type": "Organization",
      "name": "MaterialVerse Academy",
      "sameAs": `${SITE_URL}`
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "Online",
      "instructor": {
        "@type": "Person",
        "name": resource.author
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${SITE_URL}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Resources",
        "item": `${SITE_URL}/resources`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": resource.title,
        "item": `${SITE_URL}/resources/${id}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": resource.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto px-4 md:px-8 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Resources", path: "/resources" }, { label: resource.title }]} />

      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Resources Hub</span>
      </Link>

      {/* Hero Header Block */}
      <div className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {resource.category}
            </span>
            <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-gray-900 text-gray-400 border border-gray-800 flex items-center gap-1">
              <FileText className="w-3 h-3" />
              <span>{resource.format}</span>
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {resource.title}
          </h1>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            {resource.introduction}
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1">
            <span className="text-[10px] text-gray-450 uppercase tracking-wider font-bold block">Download Size</span>
            <div className="flex items-center gap-2 text-white font-black text-base">
              <Download className="w-4 h-4 text-indigo-400" />
              <span>{resource.downloadSize}</span>
            </div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1">
            <span className="text-[10px] text-gray-450 uppercase tracking-wider font-bold block">Verified Format</span>
            <div className="text-white font-black text-sm flex items-baseline gap-1 pt-0.5">
              <span className="text-indigo-400">{resource.format}</span>
            </div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1">
            <span className="text-[10px] text-gray-455 uppercase tracking-wider font-bold block">Author Reviewer</span>
            <div className="text-white font-bold text-xs truncate pt-1">{resource.author}</div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1">
            <span className="text-[10px] text-gray-455 uppercase tracking-wider font-bold block">Last Updated</span>
            <div className="text-white font-bold text-xs pt-1">{resource.lastUpdated}</div>
          </div>
        </div>
      </div>

      {/* Content Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Syllabus Structure */}
        <div className="md:col-span-1 space-y-6">
          <div className="glass-panel rounded-2xl p-5 space-y-4 shadow-md">
            <div className="flex items-center gap-2 text-indigo-400 border-b border-gray-850 pb-2">
              <BookOpen className="w-4 h-4" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">Syllabus Coverage</h4>
            </div>
            <ul className="space-y-2 text-xs text-gray-300 leading-relaxed font-light list-decimal list-inside">
              {resource.syllabus.map((item, idx) => (
                <li key={idx} className="pl-1">
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick estimation / CTA box */}
          <div className="glass-panel rounded-2xl p-5 space-y-4 bg-indigo-950/10 border-indigo-500/20 shadow-md">
            <h4 className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest block">Free Download Portal</h4>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              MaterialVerse academic materials are distributed free of charge. Click download to receive the full high-resolution notes.
            </p>
            <button className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-indigo-650 hover:bg-indigo-500 text-white font-bold text-xs transition-colors shadow-lg shadow-indigo-500/10">
              <Download className="w-4 h-4" />
              <span>Download PDF ({resource.downloadSize})</span>
            </button>
          </div>
        </div>

        {/* Right Column: Detailed Guide */}
        <div className="md:col-span-2 space-y-6">
          <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-md">
            <h3 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-gray-850 pb-2">
              <Info className="w-4 h-4 text-indigo-400" />
              <span>Syllabus Review &amp; Analysis</span>
            </h3>
            <div className="prose prose-invert max-w-none text-gray-300 text-xs sm:text-sm leading-relaxed font-light space-y-4">
              <div dangerouslySetInnerHTML={{ __html: resource.detailedContent.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />') }} />
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 uppercase tracking-wider border-b border-gray-850 pb-3">
              <AlertCircle className="w-4 h-4 text-teal-400" />
              <span>Syllabus FAQs</span>
            </h3>
            <div className="space-y-3">
              {resource.faqs.map((faq, idx) => (
                <div key={idx} className="space-y-2 bg-gray-900/40 p-5 rounded-2xl border border-gray-850 shadow-inner">
                  <h4 className="text-xs font-bold text-white">Q: {faq.q}</h4>
                  <p className="text-xs text-gray-300 leading-relaxed font-light pl-6 border-l border-gray-850">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EEAT Block / Trust signals */}
          <div className="border-t border-gray-850 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400 font-light">
            <div className="space-y-1">
              <p>
                Curated by <strong className="text-white">{resource.author}</strong> - Senior Reviewer
              </p>
              <p className="text-[10px] text-gray-500">
                Syllabus specifications verified from: {resource.references.join(', ')}.
              </p>
            </div>
            <div className="text-[10px] text-gray-500 shrink-0 text-right">
              Last Updated: {resource.lastUpdated}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
