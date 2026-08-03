import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { blogData } from '../../data/blogData';
import { SITE_URL } from '@/config/seo';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import Breadcrumbs from '../../components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Engineering Materials Blog & Research Hub | Materialpedia",
  description: "Read detailed metallurgy, civil engineering, polymers, and circular economy research guides written by material science specialists.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 pb-12">
      <Breadcrumbs items={[{ label: "Blog" }]} />

      <div className="text-center space-y-3 py-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research & Insights</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400">
          Material Science & Engineering Blog
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Deep-dive technical articles covering metallurgy, polymers, eco-audits, concrete curing mechanisms, and standard specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className="block group">
            <div className="glass-panel rounded-3xl p-6 border border-white/5 bg-gradient-to-br from-blue-950/5 via-[#0b0f19] to-gray-900/40 hover:border-blue-500/30 transition-all flex flex-col justify-between h-full relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] text-gray-500">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/10 font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readingTime}</span>
                  </div>
                </div>

                <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-xs text-gray-450 font-light leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-gray-900 pt-4 mt-6 text-[10px] text-blue-400 font-bold">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-gray-500" />
                  <span className="font-light text-gray-500">{post.lastUpdated}</span>
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
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
