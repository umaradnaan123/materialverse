'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '../context/AppContext';
import { 
  Compass, Library, Scale, Calculator, Award, FileText, 
  BarChart2, Info, Bookmark, Globe, Menu, X, GraduationCap, Layers
} from 'lucide-react';
import { Language } from '../data/translations';

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang, bookmarks, compareList } = useApp();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: 'library', path: '/', label: "Materials", icon: Library },
    { id: 'categories', path: '/categories', label: "Categories", icon: Layers },
    { id: 'resources', path: '/resources', label: "Resources", icon: GraduationCap },
    { id: 'selector', path: '/selector', label: "Finder", icon: Compass },
    { id: 'compare', path: '/compare', label: "Compare Matrix", icon: Scale, badge: compareList.length },
    { id: 'calculators', path: '/calculators', label: "Calculators Hub", icon: Calculator },
    { id: 'brands', path: '/brands', label: "Brands", icon: Award },
    { id: 'guides', path: '/guides', label: "Guides", icon: FileText },
    { id: 'prices', path: '/prices', label: "Prices", icon: BarChart2 },
    { id: 'bis_glossary', path: '/glossary', label: "BIS Reference", icon: Info },
    { id: 'bookmarks', path: '/bookmarks', label: "Bookmarks", icon: Bookmark, badge: bookmarks.length },
  ];

  const isLinkActive = (itemPath: string) => {
    if (itemPath === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(itemPath);
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-white/5 no-print bg-[#0b0f19]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <Compass className="w-7 h-7 text-blue-500 group-hover:rotate-6 transition-transform" />
          <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            MaterialVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const active = isLinkActive(tab.path);
            return (
              <Link
                key={tab.id}
                href={tab.path}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                  active
                    ? 'bg-blue-600/15 border-blue-500/30 text-blue-400 shadow-md'
                    : 'bg-transparent border-transparent text-gray-400 hover:text-gray-200 hover:bg-gray-800/40'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="ml-1 px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[9px] font-extrabold">
                    {tab.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right actions: Multilingual selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-gray-800/40 px-3 py-1.5 rounded-xl border border-gray-700/40">
            <Globe className="w-4 h-4 text-gray-400" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-transparent text-xs font-semibold text-gray-200 outline-none cursor-pointer border-none"
            >
              <option value="en" className="bg-[#0b0f19]">English</option>
              <option value="hi" className="bg-[#0b0f19]">हिंदी (Hindi)</option>
              <option value="te" className="bg-[#0b0f19]">తెలుగు (Telugu)</option>
            </select>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-xl bg-gray-850 border border-gray-700/40 text-gray-400 hover:text-white md:hidden transition-all"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-800 bg-[#0b0f19]/95 backdrop-blur-lg px-4 py-3 space-y-2">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const active = isLinkActive(tab.path);
            return (
              <Link
                key={tab.id}
                href={tab.path}
                onClick={() => setMenuOpen(false)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  active
                    ? 'bg-blue-600/10 text-blue-400 border border-blue-500/25'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4.5 h-4.5" />
                  <span>{tab.label}</span>
                </div>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="px-2 py-0.5 rounded-full bg-blue-500 text-white text-[10px] font-bold">
                    {tab.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
