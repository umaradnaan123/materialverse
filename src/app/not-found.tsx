import React from 'react';
import Link from 'next/link';
import { Home, Compass, GraduationCap, Building2, Search, HelpCircle } from 'lucide-react';

export const metadata = {
  title: "404 Page Not Found | Materialpedia",
  description: "The page you requested could not be found. Use the directory below to explore certified materials, engineering guides, and manufacturer brands.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-8 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="space-y-4">
        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest block bg-red-500/10 px-3 py-1 rounded-full w-max mx-auto border border-red-500/20">
          Error Code 404
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">
          Page Not Found
        </h1>
        <p className="text-gray-400 max-w-md mx-auto text-sm md:text-base leading-relaxed font-light">
          The requested address does not exist or has been permanently moved to a new destination index.
        </p>
      </div>

      {/* Directory Quick Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full pt-4">
        <Link 
          href="/" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <Home className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Homepage</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Explore general index.</p>
          </div>
        </Link>

        <Link 
          href="/materials" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Materials Hub</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Encyclopedia data.</p>
          </div>
        </Link>

        <Link 
          href="/brands" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Brand Directory</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Verified manufacturer registry.</p>
          </div>
        </Link>

        <Link 
          href="/guides" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Guides &amp; Articles</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Engineering specifications.</p>
          </div>
        </Link>

        <Link 
          href="/calculators" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Calculators</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Cost estimation tools.</p>
          </div>
        </Link>

        <Link 
          href="/blog" 
          className="flex items-center gap-3 p-4 rounded-2xl bg-gray-900/50 hover:bg-blue-950/20 border border-gray-800 hover:border-blue-500/30 transition-all text-left group"
        >
          <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-inner">
            <HelpCircle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white group-hover:text-blue-300 transition-all">Education Blog</h2>
            <p className="text-[10px] text-gray-500 font-light mt-0.5">Latest study tutorials.</p>
          </div>
        </Link>
      </div>

      <div className="pt-6">
        <Link 
          href="/" 
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold text-xs transition-all shadow-lg shadow-blue-600/15"
        >
          Return to Dashboard
        </Link>
      </div>
    </div>
  );
}
