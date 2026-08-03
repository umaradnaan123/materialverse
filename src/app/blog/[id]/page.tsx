import React from 'react';
import { Metadata } from 'next';
import { blogData } from '../../../data/blogData';
import { SITE_URL } from '@/config/seo';
import { Award, Calendar, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Breadcrumbs from '../../../components/Breadcrumbs';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = blogData.find((p) => p.id === id);
  if (!post) {
    return { title: "Article Not Found | Materialpedia" };
  }

  const title = `${post.title} | Materialpedia`;
  const description = post.description;

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/blog/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `${SITE_URL}/blog/${id}`,
      siteName: 'Materialpedia',
      authors: [post.author],
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
  const post = blogData.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Article not found!
      </div>
    );
  }

  // Pre-render JSON-LD structured Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Senior Material Scientist"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MaterialVerse Ltd",
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/icon.png`
      }
    },
    "datePublished": "2026-08-01",
    "dateModified": "2026-08-03",
    "mainEntityOfPage": `${SITE_URL}/blog/${id}`
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4 md:px-8 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Breadcrumbs items={[{ label: "Blog", path: "/blog" }, { label: post.title }]} />

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Blog feed</span>
      </Link>

      <div className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-[10px] text-gray-500">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-wider">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readingTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>Last Updated: {post.lastUpdated}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/60 border border-gray-850">
          <div className="text-xl p-2 bg-gray-800 rounded-xl border border-gray-700 w-11 h-11 flex items-center justify-center">
            🔬
          </div>
          <div>
            <p className="text-xs font-bold text-white">Authored by {post.author}</p>
            <p className="text-[10px] text-gray-450">{post.authorBio}</p>
          </div>
        </div>
      </div>

      <article className="prose prose-invert max-w-none text-gray-300 text-xs sm:text-sm leading-relaxed font-light space-y-6 border-t border-b border-gray-850 py-8">
        <p className="text-gray-200 text-sm italic font-medium">
          {post.description}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br />')
          }}
        />
      </article>

      {/* FAQs accordion */}
      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Award className="w-5 h-5 text-blue-400" />
          <span>Factual FAQ &amp; Research Citations</span>
        </h3>
        <div className="space-y-3">
          {post.faqs.map((faq, idx) => (
            <div key={idx} className="bg-gray-900/40 p-5 rounded-2xl border border-gray-850 shadow-inner space-y-1.5">
              <h4 className="text-xs font-bold text-white">Q: {faq.q}</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-light pl-4 border-l border-gray-800">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* References */}
      <div className="pt-6 border-t border-gray-850 space-y-2">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Reference Standards &amp; Bibliography</span>
        <ul className="list-disc list-inside text-xs text-gray-450 font-light space-y-1">
          {post.references.map((ref, idx) => (
            <li key={idx}>{ref}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
