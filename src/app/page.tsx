'use client';

import React, { useState, useEffect } from 'react';
import { Material, materialsData } from '../data/materialsData';
import { translations, Language } from '../data/translations';
import Dashboard from '../components/Dashboard';
import MaterialDetail from '../components/MaterialDetail';
import ComparisonEngine from '../components/ComparisonEngine';
import RecommendationEngine from '../components/RecommendationEngine';
import CalculatorsHub from '../components/CalculatorsHub';
import GlossaryAndBIS from '../components/GlossaryAndBIS';
import BrandDirectory from '../components/BrandDirectory';
import EducationalGuides from '../components/EducationalGuides';
import PriceIntelligence from '../components/PriceIntelligence';
import { 
  BookOpen, Calculator, Compass, Scale, 
  Bookmark, Library, Globe, Menu, X, Info, Award, HelpCircle, FileText,
  BarChart2
} from 'lucide-react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  // Navigation states
  const [activeTab, setActiveTab] = useState<'library' | 'compare' | 'calculators' | 'selector' | 'bis_glossary' | 'bookmarks' | 'brands' | 'guides' | 'prices'>('library');
  const [selectedMaterialId, setSelectedMaterialId] = useState<string | null>(null);
  const [selectedBrandId, setSelectedBrandId] = useState<string | null>(null);
  const [selectedGuideId, setSelectedGuideId] = useState<string | null>(null);
  
  // Bookmarks & Compare states
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<Material[]>([]);
  
  // Menu visibility
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOffline, setIsOffline] = useState(false);
  const [preselectedBrandCategory, setPreselectedBrandCategory] = useState<string>('All');

  // Sync state with hash route on load and hash change
  useEffect(() => {
    setMounted(true);
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/material/')) {
        const id = hash.replace('#/material/', '');
        setSelectedMaterialId(id);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
        setActiveTab('library');
      } else if (hash.startsWith('#/brand/')) {
        const id = hash.replace('#/brand/', '');
        setSelectedBrandId(id);
        setSelectedMaterialId(null);
        setSelectedGuideId(null);
        setActiveTab('brands');
      } else if (hash.startsWith('#/guide/')) {
        const id = hash.replace('#/guide/', '');
        setSelectedGuideId(id);
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setActiveTab('guides');
      } else if (hash === '#/compare') {
        setActiveTab('compare');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/calculators') {
        setActiveTab('calculators');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/selector') {
        setActiveTab('selector');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/glossary') {
        setActiveTab('bis_glossary');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/bookmarks') {
        setActiveTab('bookmarks');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/brands') {
        setActiveTab('brands');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/guides') {
        setActiveTab('guides');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else if (hash === '#/prices') {
        setActiveTab('prices');
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
      } else {
        setSelectedMaterialId(null);
        setSelectedBrandId(null);
        setSelectedGuideId(null);
        setActiveTab('library');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // trigger on initial mount

    // Load bookmarks from local storage
    const savedBookmarks = localStorage.getItem('material_bookmarks');
    if (savedBookmarks) {
      setBookmarks(JSON.parse(savedBookmarks));
    }

    // Check online status
    setIsOffline(!navigator.onLine);
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // Set hash path helper
  const navigateTo = (tab: typeof activeTab, materialId?: string) => {
    setMenuOpen(false);
    if (tab === 'library') {
      if (materialId) {
        window.location.hash = `#/material/${materialId}`;
      } else {
        window.location.hash = '';
      }
    } else if (tab === 'compare') {
      window.location.hash = '#/compare';
    } else if (tab === 'calculators') {
      window.location.hash = '#/calculators';
    } else if (tab === 'selector') {
      window.location.hash = '#/selector';
    } else if (tab === 'bis_glossary') {
      window.location.hash = '#/glossary';
    } else if (tab === 'bookmarks') {
      window.location.hash = '#/bookmarks';
    } else if (tab === 'brands') {
      window.location.hash = '#/brands';
    } else if (tab === 'guides') {
      window.location.hash = '#/guides';
    } else if (tab === 'prices') {
      window.location.hash = '#/prices';
    }
  };

  // Toggle Bookmark
  const handleToggleBookmark = (id: string) => {
    let updated;
    if (bookmarks.includes(id)) {
      updated = bookmarks.filter((b) => b !== id);
    } else {
      updated = [...bookmarks, id];
    }
    setBookmarks(updated);
    localStorage.setItem('material_bookmarks', JSON.stringify(updated));
  };

  // Add to Compare
  const handleAddToCompare = (mat: Material) => {
    if (compareList.some((m) => m.id === mat.id)) return;
    if (compareList.length >= 3) {
      alert(t.maxCompareLimit);
      return;
    }
    setCompareList([...compareList, mat]);
    navigateTo('compare');
  };

  // Remove from compare
  const handleRemoveCompare = (id: string) => {
    setCompareList(compareList.filter((m) => m.id !== id));
  };

  // Clear compare
  const handleClearCompare = () => {
    setCompareList([]);
  };

  // Render content depending on active tab & subviews
  const renderContent = () => {
    if (selectedMaterialId) {
      return (
        <MaterialDetail
          materialId={selectedMaterialId}
          lang={lang}
          onBack={() => navigateTo('library')}
          onAddToCompare={handleAddToCompare}
          onToggleBookmark={handleToggleBookmark}
          bookmarks={bookmarks}
          onSelectMaterial={(id) => navigateTo('library', id)}
        />
      );
    }

    switch (activeTab) {
      case 'library':
        return (
          <Dashboard
            lang={lang}
            onSelectMaterial={(id) => navigateTo('library', id)}
            onAddToCompare={handleAddToCompare}
            onToggleBookmark={handleToggleBookmark}
            bookmarks={bookmarks}
            onSelectCategoryForBrands={(cat) => {
              setPreselectedBrandCategory(cat);
              navigateTo('brands');
            }}
          />
        );
      case 'compare':
        return (
          <ComparisonEngine
            lang={lang}
            compareList={compareList}
            onRemoveFromCompare={handleRemoveCompare}
            onClearCompare={handleClearCompare}
            onSelectMaterial={(id) => navigateTo('library', id)}
          />
        );
      case 'calculators':
        return <CalculatorsHub lang={lang} />;
      case 'selector':
        return (
          <RecommendationEngine
            lang={lang}
            onSelectMaterial={(id) => navigateTo('library', id)}
          />
        );
      case 'bis_glossary':
        return <GlossaryAndBIS lang={lang} />;
      case 'brands':
        return (
          <BrandDirectory
            selectedBrandId={selectedBrandId}
            initialCategory={preselectedBrandCategory}
            onSelectBrand={(id) => {
              if (id) {
                window.location.hash = `#/brand/${id}`;
              } else {
                window.location.hash = '#/brands';
              }
            }}
            onBackToHome={() => navigateTo('library')}
          />
        );
      case 'guides':
        return (
          <EducationalGuides
            selectedArticleId={selectedGuideId}
            onSelectArticle={(id) => {
              if (id) {
                window.location.hash = `#/guide/${id}`;
              } else {
                window.location.hash = '#/guides';
              }
            }}
            onBackToHome={() => navigateTo('library')}
          />
        );
      case 'prices':
        return <PriceIntelligence lang={lang} />;
      case 'bookmarks':
        const bookmarkedMats = materialsData.filter((m) => bookmarks.includes(m.id));
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-white text-center flex items-center justify-center gap-2">
              <Bookmark className="w-8 h-8 text-amber-500 fill-amber-500" />
              <span>{t.bookmarksTab} ({bookmarks.length})</span>
            </h2>
            {bookmarkedMats.length > 0 ? (
              <Dashboard
                lang={lang}
                onSelectMaterial={(id) => navigateTo('library', id)}
                onAddToCompare={handleAddToCompare}
                onToggleBookmark={handleToggleBookmark}
                bookmarks={bookmarks}
                materials={bookmarkedMats}
              />
            ) : (
              <p className="text-center py-12 text-gray-400">Your bookmarks list is empty.</p>
            )}
          </div>
        );
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-[#0b0f19] text-gray-100 pb-20 md:pb-0">
      
      {/* Header Navbar */}
      <header className="sticky top-0 z-50 glass-panel border-b border-white/5 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigateTo('library')} 
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <Compass className="w-7 h-7 text-blue-500 group-hover:rotate-6 transition-transform" />
            <span className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              MaterialVerse
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: 'library', label: "Materials", icon: Library },
              { id: 'selector', label: "Finder", icon: Compass },
              { id: 'compare', label: "Compare Matrix", icon: Scale, badge: compareList.length },
              { id: 'calculators', label: "Calculators Hub", icon: Calculator },
              { id: 'brands', label: "Brands", icon: Award },
              { id: 'guides', label: "Guides", icon: FileText },
              { id: 'prices', label: "Prices", icon: BarChart2 },
              { id: 'bis_glossary', label: "BIS Reference", icon: Info },
              { id: 'bookmarks', label: "Bookmarks", icon: Bookmark, badge: bookmarks.length },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  suppressHydrationWarning={true}
                  onClick={() => navigateTo(tab.id as any)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                    activeTab === tab.id && !selectedMaterialId
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
                </button>
              );
            })}
          </nav>

          {/* Right actions: Multilingual selector */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-gray-800/40 px-3 py-1.5 rounded-xl border border-gray-700/40">
              <Globe className="w-4 h-4 text-gray-400" />
              <select
                value={lang}
                suppressHydrationWarning={true}
                onChange={(e) => setLang(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-gray-200 outline-none cursor-pointer border-none"
              >
                <option value="en" className="bg-[#0b0f19]">English</option>
                <option value="hi" className="bg-[#0b0f19]">हिंदी (Hindi)</option>
                <option value="te" className="bg-[#0b0f19]">తెలుగు (Telugu)</option>
              </select>
            </div>

            <button
              suppressHydrationWarning={true}
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
            {[
              { id: 'library', label: "Materials Library", icon: Library },
              { id: 'selector', label: "Recommendations Finder", icon: Compass },
              { id: 'compare', label: "Compare Matrix", icon: Scale, badge: compareList.length },
              { id: 'calculators', label: "Calculators Hub", icon: Calculator },
              { id: 'brands', label: "Brand Directory", icon: Award },
              { id: 'guides', label: "Knowledge Guides", icon: FileText },
              { id: 'prices', label: "Price Index", icon: BarChart2 },
              { id: 'bis_glossary', label: "BIS Reference & Glossary", icon: Info },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  suppressHydrationWarning={true}
                  onClick={() => navigateTo(tab.id as any)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                    activeTab === tab.id && !selectedMaterialId
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
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Offline Alert Indicator */}
      {isOffline && (
        <div className="bg-amber-600 text-white text-center text-xs py-2 font-medium flex items-center justify-center gap-2 no-print shadow-inner">
          <Info className="w-4 h-4 animate-bounce" />
          <span>You are currently offline. Displaying cached resources for offline access.</span>
        </div>
      )}

      {/* Main Container */}
      <main className="flex-grow max-w-7xl w-full mx-auto py-8 relative z-10">
        {renderContent()}
      </main>

      {/* Mobile Bottom Navigation Bar (Bottom Nav) */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-[#0b0f19]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-around md:hidden z-50 no-print">
        {[
          { id: 'library', label: "Home", icon: Library },
          { id: 'selector', label: "Finder", icon: Compass },
          { id: 'calculators', label: "Calcs", icon: Calculator },
          { id: 'bookmarks', label: "Saved", icon: Bookmark, badge: bookmarks.length },
          { id: 'guides', label: "Guides", icon: FileText }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id && !selectedMaterialId;
          return (
            <button
              key={tab.id}
              suppressHydrationWarning={true}
              onClick={() => navigateTo(tab.id as any)}
              className={`flex flex-col items-center justify-center relative flex-1 h-full py-1 text-[10px] font-medium transition-all ${
                isActive ? 'text-blue-400' : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span>{tab.label}</span>
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="absolute top-2 right-4 px-1.5 py-0.5 rounded-full bg-blue-500 text-white text-[8px] font-extrabold scale-90">
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Premium Footer */}
      <footer className="border-t border-gray-900 bg-gray-950/40 py-8 text-center text-xs text-gray-500 no-print space-y-2">
        <p className="font-medium">© 2026 MaterialVerse - The Material Knowledge Platform.</p>
        <p className="font-light tracking-wide text-[10px]">
          100% Static Web Resource powered by Next.js Export & React. Fully Offline Compatible (PWA).
        </p>
      </footer>
    </div>
  );
}
