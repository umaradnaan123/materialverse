"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Brand, brandsData } from '../data/brandsData';
import { materialsData } from '../data/materialsData';
import { 
  Search, Award, ShieldAlert, ArrowLeft, Star, ExternalLink, 
  ArrowRight, Bookmark, Scale, Trash2, CheckCircle, Info, HelpCircle, Building, Sparkles, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

// Premium custom-select dropdown component matching dark-mode glassmorphic theme
function CustomDropdown({ value, onChange, options }: {
  value: string;
  onChange: (val: string) => void;
  options: { value: string; label: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOpt = options.find(o => o.value === value) || options[0];

  return (
    <div className="relative z-20 w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-900/60 border border-gray-805 rounded-xl px-4 py-2.5 text-white text-xs text-left flex items-center justify-between hover:border-gray-700 transition-colors"
      >
        <span className="truncate">{selectedOpt?.label}</span>
        <span className="text-gray-500 text-[10px] ml-1 shrink-0">▼</span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-10" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.12 }}
              className="absolute left-0 right-0 mt-1.5 bg-gray-950 border border-gray-805 rounded-xl max-h-60 overflow-y-auto z-20 shadow-2xl p-1"
            >
              {options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs rounded-lg transition-colors truncate ${
                    value === opt.value 
                      ? 'bg-blue-600 text-white font-semibold shadow-sm' 
                      : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

interface BrandDirectoryProps {
  selectedBrandId: string | null;
  onSelectBrand: (id: string | null) => void;
  onBackToHome: () => void;
  initialCategory?: string;
}

export default function BrandDirectory({ 
  selectedBrandId, 
  onSelectBrand, 
  onBackToHome,
  initialCategory = 'All'
}: BrandDirectoryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAlpha, setSelectedAlpha] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
  const [selectedCert, setSelectedCert] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [selectedCertStatus, setSelectedCertStatus] = useState<string>('All');

  // Load initial preselected category
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Bookmarking states
  const [bookmarkedBrands, setBookmarkedBrands] = useState<string[]>([]);
  
  // Brand Comparison states
  const [compareBrandIds, setCompareBrandIds] = useState<string[]>([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  // Load bookmarks from local storage
  useEffect(() => {
    const saved = localStorage.getItem('brand_bookmarks');
    if (saved) {
      setBookmarkedBrands(JSON.parse(saved));
    }
  }, []);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated;
    const isBookmarked = bookmarkedBrands.includes(id);
    if (isBookmarked) {
      updated = bookmarkedBrands.filter((bId) => bId !== id);
    } else {
      updated = [...bookmarkedBrands, id];
      // Trigger heart burst / micro-confetti
      confetti({
        particleCount: 15,
        angle: 60,
        spread: 55,
        origin: { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }
      });
    }
    setBookmarkedBrands(updated);
    localStorage.setItem('brand_bookmarks', JSON.stringify(updated));
  };

  const handleCategoryShortcutClick = (name: string) => {
    setSelectedCategory(name);
    setSelectedAlpha('All');
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedCertStatus('All');
    setSelectedPrice('All');
    setSelectedOrigin('All');
    setSelectedCert('All');
  };

  const handleAlphaClick = (char: string) => {
    setSelectedAlpha(char);
    setSelectedCategory('All');
    setSearchQuery('');
    setSelectedRegion('All');
    setSelectedCertStatus('All');
    setSelectedPrice('All');
    setSelectedOrigin('All');
    setSelectedCert('All');
  };

  const uniqueOrigins = Array.from(new Set(brandsData.map((b) => b.origin))).sort();
  const uniqueCerts = Array.from(new Set(brandsData.flatMap((b) => b.certifications))).sort();
  const uniqueCategories = Array.from(new Set(brandsData.flatMap((b) => b.categories))).sort();

  // Filter list
  const filteredBrands = brandsData.filter((b) => {
    const matchesSearch = 
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.products.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesAlpha = 
      selectedAlpha === 'All' || 
      b.name.trim().charAt(0).toUpperCase() === selectedAlpha;

    const matchesCategory = 
      selectedCategory === 'All' || 
      b.categories.some(cat => {
        const catLower = cat.toLowerCase();
        const selLower = selectedCategory.toLowerCase();
        if (selLower === 'electrical') return catLower.includes('electrical') || catLower.includes('switches');
        if (selLower === 'pipes') return catLower.includes('pipes');
        if (selLower === 'paint') return catLower.includes('paint');
        if (selLower === 'flooring') return catLower.includes('tiles') || catLower.includes('flooring') || catLower.includes('marble') || catLower.includes('granite');
        if (selLower === 'plywood') return catLower.includes('plywood') || catLower.includes('laminate');
        if (selLower === 'sanitaryware') return catLower.includes('sanitary') || catLower.includes('bathroom') || catLower.includes('fittings');
        if (selLower === 'solar') return catLower.includes('solar') || catLower.includes('battery') || catLower.includes('inverter') || catLower.includes('ups');
        return catLower.includes(selLower);
      });

    const matchesOrigin = 
      selectedOrigin === 'All' || 
      b.origin === selectedOrigin;

    const matchesCert = 
      selectedCert === 'All' || 
      b.certifications.includes(selectedCert);

    const matchesPrice = 
      selectedPrice === 'All' || 
      b.priceSegment === selectedPrice;

    const getRegionFromHq = (hq: string) => {
      const hqLower = hq.toLowerCase();
      if (hqLower.includes('mumbai') || hqLower.includes('maharashtra') || hqLower.includes('gujarat') || hqLower.includes('pune')) return 'West India';
      if (hqLower.includes('tamil nadu') || hqLower.includes('chennai') || hqLower.includes('bengaluru') || hqLower.includes('karnataka') || hqLower.includes('hyderabad') || hqLower.includes('telangana') || hqLower.includes('andhra') || hqLower.includes('kerala')) return 'South India';
      if (hqLower.includes('kolkata') || hqLower.includes('west bengal') || hqLower.includes('odisha') || hqLower.includes('bihar') || hqLower.includes('jharkhand')) return 'East India';
      if (hqLower.includes('delhi') || hqLower.includes('noida') || hqLower.includes('gurgaon') || hqLower.includes('haryana') || hqLower.includes('uttar pradesh') || hqLower.includes('punjab') || hqLower.includes('rajasthan')) return 'North India';
      return 'Other';
    };

    const brandRegion = getRegionFromHq(b.headquarters);
    const matchesRegion = selectedRegion === 'All' || brandRegion === selectedRegion;

    const matchesCertStatus = 
      selectedCertStatus === 'All' ||
      (selectedCertStatus === 'ISI Certified' && b.certifications.some(c => c.toLowerCase().includes('isi') || c.match(/^is\s\d+/i))) ||
      (selectedCertStatus === 'ISO Certified' && b.certifications.some(c => c.toLowerCase().includes('iso')));

    return matchesSearch && matchesAlpha && matchesCategory && matchesOrigin && matchesCert && matchesPrice && matchesRegion && matchesCertStatus;
  });

  const activeBrand = brandsData.find((b) => b.id === selectedBrandId);
  const alphabets = ['All', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];

  const handleToggleCompare = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (compareBrandIds.includes(id)) {
      setCompareBrandIds(compareBrandIds.filter((bId) => bId !== id));
    } else {
      if (compareBrandIds.length >= 3) {
        alert("You can compare up to 3 brands side-by-side.");
        return;
      }
      setCompareBrandIds([...compareBrandIds, id]);
    }
  };

  const clearComparison = () => {
    setCompareBrandIds([]);
  };

  const getRelatedMaterials = (categories: string[]) => {
    return materialsData.filter((m) => 
      categories.some((cat) => m.category.toLowerCase().includes(cat.toLowerCase()))
    ).slice(0, 4);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 relative">
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {activeBrand ? (
          // --- BRAND DETAIL VIEW ---
          <motion.div 
            key="brand-detail"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
            className="space-y-6"
          >
            <button
              onClick={() => onSelectBrand(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition-all text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Brands Directory</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Left Profile Panel */}
              <div className="glass-panel rounded-3xl p-6 border border-white/5 space-y-6 relative overflow-hidden lg:col-span-1 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="text-4xl p-3 bg-gray-800/40 rounded-2xl border border-gray-700/40 w-16 h-16 flex items-center justify-center shadow-inner">
                      {activeBrand.logo}
                    </div>
                    <button
                      onClick={(e) => toggleBookmark(activeBrand.id, e)}
                      className={`p-2.5 rounded-xl border transition-all ${
                        bookmarkedBrands.includes(activeBrand.id)
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                          : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white'
                      }`}
                      title="Bookmark Brand"
                    >
                      <Bookmark className="w-4.5 h-4.5 fill-current" />
                    </button>
                  </div>

                  <div className="space-y-1.5">
                    <h1 className="text-2xl font-extrabold text-white tracking-tight">{activeBrand.name}</h1>
                    <div className="flex flex-wrap gap-1.5">
                      {activeBrand.categories.map((cat, idx) => (
                        <span key={idx} className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {activeBrand.description}
                  </p>
                </div>

                <hr className="border-gray-850" />

                {/* Company Profile Facts */}
                <div className="space-y-3.5 text-xs font-light">
                  <div className="flex justify-between py-1 border-b border-gray-850">
                    <span className="text-gray-405">Headquarters</span>
                    <span className="text-white font-semibold">{activeBrand.headquarters}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-850">
                    <span className="text-gray-405">Origin / Country</span>
                    <span className="text-white font-semibold">{activeBrand.origin}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-850">
                    <span className="text-gray-405">Established Year</span>
                    <span className="text-white font-semibold">{activeBrand.established}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-850">
                    <span className="text-gray-405">Price Segment</span>
                    <span className="text-emerald-450 font-bold">{activeBrand.priceSegment}</span>
                  </div>
                  {activeBrand.website && (
                    <div className="pt-2">
                      <a
                        href={activeBrand.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 rounded-xl bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white font-semibold transition-all flex items-center justify-center gap-2 border border-blue-500/20 text-xs shadow-sm"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Visit Official Website</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Details Panel */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Popular Products & Applications */}
                <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-6 shadow-xl">
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-gray-850 pb-2">
                      <Award className="w-4.5 h-4.5 text-blue-400" />
                      <span>Popular Products & Applications</span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Key Products</span>
                        <ul className="space-y-2">
                          {activeBrand.products.map((p, idx) => (
                            <li key={idx} className="text-xs text-gray-250 flex items-center gap-2 bg-gray-900/30 p-2 rounded-lg border border-gray-850/60">
                              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span className="font-medium">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Typical Applications</span>
                        <ul className="space-y-2">
                          {activeBrand.applications.map((app, idx) => (
                            <li key={idx} className="text-xs text-gray-250 flex items-center gap-2 bg-gray-900/30 p-2 rounded-lg border border-gray-850/60">
                              <Building className="w-4 h-4 text-blue-400 shrink-0" />
                              <span className="font-medium">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <hr className="border-gray-850" />

                  {/* Advantages & Limitations */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">Advantages & Strengths</span>
                      <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed font-light">
                        {activeBrand.advantages.map((adv, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-emerald-450 font-bold mr-1 shrink-0">•</span>
                            <span>{adv}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <span className="text-[10px] font-bold text-rose-450 uppercase tracking-widest block">Operational Limitations</span>
                      <ul className="text-xs text-gray-300 space-y-2.5 leading-relaxed font-light">
                        {activeBrand.limitations.map((lim, idx) => (
                          <li key={idx} className="flex items-start gap-1">
                            <span className="text-rose-455 font-bold mr-1 shrink-0">•</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <hr className="border-gray-850" />

                  {/* Quality Standards */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Standard Certification Licenses</span>
                    <div className="flex flex-wrap gap-2">
                      {activeBrand.certifications.map((cert, idx) => (
                        <span key={idx} className="text-xs px-3 py-1.5 rounded-xl bg-gray-950 border border-gray-900 text-blue-300 font-mono shadow-inner">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-5 shadow-xl">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gray-850 pb-2">
                    <HelpCircle className="w-4.5 h-4.5 text-blue-400" />
                    <span>Frequently Asked Questions</span>
                  </h4>
                  <div className="space-y-4">
                    {activeBrand.faqs.map((faq, idx) => (
                      <div key={idx} className="space-y-1.5 bg-gray-950/40 p-4 rounded-2xl border border-gray-900/60 shadow-inner">
                        <span className="text-xs font-bold text-blue-400">Q: {faq.q}</span>
                        <p className="text-xs text-gray-350 leading-relaxed font-light">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Materials */}
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 px-1">
                    <Info className="w-4.5 h-4.5 text-emerald-400" />
                    <span>Related Materials in Categories</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {getRelatedMaterials(activeBrand.categories).map((mat) => (
                      <Link
                        key={mat.id}
                        href={`/materials/${mat.id}`}
                        className="glass-panel hover:bg-gray-800/40 rounded-2xl p-4.5 border border-white/5 flex items-center justify-between group transition-all shadow-sm"
                      >
                        <div className="space-y-1">
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-semibold border border-blue-500/10">{mat.category}</span>
                          <div className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">{mat.name}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:translate-x-1.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Brand EEAT & Audit Metadata */}
                <div className="border-t border-gray-855 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-gray-400 font-light">
                  <div className="space-y-1">
                    <p>
                      Manufacturer specifications audited by <strong className="text-white">Dr. Arjan Mehta, PhD</strong>
                    </p>
                    <p className="text-[10px] text-gray-500">
                      Licensing verified via Bureau of Indian Standards (BIS) registries and official brand corporate registries.
                    </p>
                  </div>
                  <div className="text-[10px] text-gray-500 shrink-0 text-right">
                    Specification Audit Date: August 2026
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        ) : (
          // --- BRAND INDEX GRID VIEW ---
          <motion.div 
            key="brand-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Title */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-3 py-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
                <Award className="w-3.5 h-3.5" />
                <span>Verified Compliance Index</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400 flex items-center justify-center gap-3">
                <Building className="text-blue-500 w-9 h-9" />
                <span>Manufacturer Brand Directory</span>
              </h1>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
                Instantly audit certified manufacturers, compare ISI/BIS licensing specifications, filter budget segments, and examine brand limitations.
              </p>
              <div className="pt-2 flex justify-center">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.effectivecpmnetwork.com/hgz53fwb?key=604f09908fc20874955621b88a9c8ca6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/15"
                >
                  Check Features
                </motion.a>
              </div>
            </motion.div>

            {/* Compare Sticky Deck */}
            <AnimatePresence>
              {compareBrandIds.length > 0 && (
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 50, opacity: 0 }}
                  className="fixed bottom-20 md:bottom-8 right-6 z-40 bg-blue-650 text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-4 border border-blue-550/30"
                >
                  <Scale className="w-5 h-5 animate-pulse text-blue-300" />
                  <div className="text-xs font-medium">
                    Compare Brands: <strong className="text-white">{compareBrandIds.length}/3</strong> selected
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setShowCompareModal(true)}
                      className="px-3.5 py-1.5 bg-white text-blue-600 rounded-xl text-[10px] font-black shadow-lg hover:bg-gray-100 transition-all uppercase tracking-wide"
                    >
                      Compare
                    </button>
                    <button
                      onClick={clearComparison}
                      className="p-1.5 bg-blue-700 hover:bg-blue-800 rounded-xl text-white transition-colors"
                      title="Clear Selection"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Clickable Material Category Shortcuts */}
            <div className="space-y-2.5">
              <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500 block">Filter Category Shortcuts:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'All', icon: '📁' },
                  { name: 'Cement', icon: '🏗️' },
                  { name: 'Steel', icon: '🔩' },
                  { name: 'Electrical', icon: '⚡' },
                  { name: 'Pipes', icon: '🚰' },
                  { name: 'Paint', icon: '🎨' },
                  { name: 'Flooring', icon: '📐' },
                  { name: 'Plywood', icon: '🪵' },
                  { name: 'Sanitaryware', icon: '🛁' },
                  { name: 'Solar', icon: '☀️' }
                ].map((shortcut) => {
                  const active = (shortcut.name === 'All' && selectedCategory === 'All') || (selectedCategory === shortcut.name);
                  return (
                    <button
                      key={shortcut.name}
                      onClick={() => handleCategoryShortcutClick(shortcut.name)}
                      className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                        active
                          ? 'bg-blue-650 border-blue-500 text-white shadow-md shadow-blue-500/10'
                          : 'bg-gray-900/40 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
                      }`}
                    >
                      <span>{shortcut.icon}</span>
                      <span>{shortcut.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BIS / ISI Standards Summary banner */}
            <AnimatePresence mode="wait">
              {selectedCategory !== 'All' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm"
                >
                  <div className="space-y-1">
                    <span className="text-[9px] font-bold text-blue-400 uppercase tracking-widest block">BIS/ISI Certification References</span>
                    <div className="text-xs font-bold text-white flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-400 shrink-0" />
                      <span>
                        {[
                          { name: 'Cement', bis: 'IS 12269 (OPC 53), IS 1489 (PPC), IS 8112 (OPC 43)' },
                          { name: 'Steel', bis: 'IS 1786 (TMT Rebars), IS 2062 (Structural Plates)' },
                          { name: 'Electrical', bis: 'IS 694 (PVC Copper Cables), IS 3854 (Switches)' },
                          { name: 'Pipes', bis: 'IS 15778 (CPVC Piping), IS 4985 (PVC Drainage)' },
                          { name: 'Paint', bis: 'IS 15489 (Interior Decorative Paint)' },
                          { name: 'Flooring', bis: 'IS 15622 (Ceramic & Vitrified Tiles), IS 13712' },
                          { name: 'Plywood', bis: 'IS 710 (Boiling Water Proof), IS 303 (BWR Grade)' },
                          { name: 'Sanitaryware', bis: 'IS 2556 (Ceramic Appliances), IS 8931 (Faucets)' },
                          { name: 'Solar', bis: 'IEC 61215 (Solar PV Panels), IS 16242 (Solar Inverters)' }
                        ].find(x => x.name === selectedCategory)?.bis || 'Standard Compliant'}
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/glossary"
                    className="text-xs font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 shrink-0"
                  >
                    <span>Inspect Code Directory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Filter controls */}
            <div className="glass-panel rounded-2xl p-5 border border-white/5 space-y-4 shadow-lg">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
                {/* Search */}
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                  <input
                    type="search"
                    autoComplete="off"
                    placeholder="Search manufacturer brands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs transition-colors"
                  />
                </div>

                {/* Region */}
                <div>
                  <CustomDropdown
                    value={selectedRegion}
                    onChange={setSelectedRegion}
                    options={[
                      { value: "All", label: "All Regions" },
                      { value: "North India", label: "North India" },
                      { value: "South India", label: "South India" },
                      { value: "East India", label: "East India" },
                      { value: "West India", label: "West India" }
                    ]}
                  />
                </div>

                {/* Cert Status */}
                <div>
                  <CustomDropdown
                    value={selectedCertStatus}
                    onChange={setSelectedCertStatus}
                    options={[
                      { value: "All", label: "All Certification Audits" },
                      { value: "ISI Certified", label: "ISI Certified" },
                      { value: "ISO Certified", label: "ISO Certified" }
                    ]}
                  />
                </div>

                {/* Categories */}
                <div>
                  <CustomDropdown
                    value={selectedCategory}
                    onChange={setSelectedCategory}
                    options={[
                      { value: "All", label: "All Categories" },
                      ...uniqueCategories.map(cat => ({ value: cat, label: cat }))
                    ]}
                  />
                </div>
              </div>

              {/* Price Segment */}
              <div className="flex gap-4 items-center border-t border-gray-900 pt-3">
                <span className="text-[10px] uppercase tracking-wider font-bold text-gray-500">Price Segment:</span>
                <div className="flex gap-2">
                  {['All', 'Budget', 'Mid', 'Premium'].map((pSegment) => (
                    <button
                      key={pSegment}
                      onClick={() => setSelectedPrice(pSegment)}
                      className={`px-3 py-1 rounded-lg text-[10px] font-semibold border transition-all ${
                        selectedPrice === pSegment
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white'
                      }`}
                    >
                      {pSegment}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* A-Z Index Tabs */}
            <div className="flex flex-wrap justify-center gap-1 bg-gray-900/30 p-2.5 rounded-2xl border border-gray-850">
              {alphabets.map((char) => (
                <button
                  key={char}
                  onClick={() => handleAlphaClick(char)}
                  className={`w-7 h-7 flex items-center justify-center text-xs font-bold rounded-lg transition-all ${
                    selectedAlpha === char
                      ? 'bg-blue-650 text-white shadow shadow-blue-600/25'
                      : 'text-gray-450 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {char}
                </button>
              ))}
            </div>

            {/* Results Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredBrands.map((brand) => {
                  const isBookmarked = bookmarkedBrands.includes(brand.id);
                  const isComparing = compareBrandIds.includes(brand.id);
                  return (
                    <Link key={brand.id} href={`/brands/${brand.id}`} className="block">
                      <motion.div
                        layout
                        variants={itemVariants}
                        exit={{ opacity: 0, scale: 0.95 }}
                        whileHover={{ 
                          y: -4, 
                          borderColor: 'rgba(255,255,255,0.12)',
                          boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' 
                        }}
                        className="glass-panel rounded-2xl p-6 border border-white/5 cursor-pointer flex flex-col justify-between group/brand relative shadow-md h-full"
                      >
                        <div className="space-y-4">
                          <div className="flex justify-between items-start">
                            <div className="text-3.5xl p-2 bg-gray-900/50 rounded-xl border border-gray-800 w-13 h-13 flex items-center justify-center shadow-inner">
                              {brand.logo}
                            </div>
                            
                            {/* Card action controls */}
                            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                              <button
                                onClick={(e) => handleToggleCompare(brand.id, e)}
                                className={`p-1.5 rounded-lg border transition-all ${
                                  isComparing
                                    ? 'bg-blue-500/10 border-blue-500/30 text-blue-400'
                                    : 'bg-gray-900 border-gray-800 text-gray-450 hover:text-white'
                                }`}
                                title="Compare Brand"
                              >
                                <Scale className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={(e) => toggleBookmark(brand.id, e)}
                                className={`p-1.5 rounded-lg border transition-all ${
                                  isBookmarked
                                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                                    : 'bg-gray-900 border-gray-800 text-gray-450 hover:text-white'
                                }`}
                                title="Bookmark Brand"
                              >
                                <Bookmark className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="space-y-1">
                            <h4 className="font-extrabold text-white group-hover/brand:text-blue-400 transition-colors text-base tracking-tight">
                              {brand.name}
                            </h4>
                            <div className="flex items-center gap-2 text-[10px]">
                              <span className="text-gray-400 font-light">{brand.origin}</span>
                              <span className="text-gray-750 font-light">•</span>
                              <span className="text-emerald-400 font-bold">{brand.priceSegment}</span>
                            </div>
                          </div>

                          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                            {brand.description}
                          </p>

                          <div className="flex flex-wrap gap-1">
                            {brand.certifications.slice(0, 3).map((cert, idx) => (
                              <span key={idx} className="text-[8px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 font-bold">
                                {cert}
                              </span>
                            ))}
                          </div>

                          <div className="text-[10px] text-gray-400 space-y-1.5 pt-2 font-light border-t border-gray-900 mt-2">
                            <div className="truncate"><strong className="text-gray-300 font-semibold">Key Products:</strong> {brand.products.slice(0, 2).join(', ')}</div>
                            <div className="truncate"><strong className="text-gray-300 font-semibold">Applications:</strong> {brand.applications.slice(0, 2).join(', ')}</div>
                          </div>
                        </div>

                        <div className="flex items-center justify-end text-[10px] text-blue-400 font-bold group-hover/brand:translate-x-1.5 transition-transform border-t border-gray-905 pt-4 mt-5">
                          <span>Brand Specifications Profile</span>
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </AnimatePresence>
            </motion.div>

            {filteredBrands.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400 text-sm font-light">
                No manufacturers profiles matching search inputs.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BRAND COMPARE MODAL DIALOG (Linear SaaS overlay style) --- */}
      <AnimatePresence>
        {showCompareModal && compareBrandIds.length > 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="bg-gray-950 border border-gray-800 rounded-3xl w-full max-w-5xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-gray-900 flex justify-between items-center bg-gray-900/20">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Scale className="text-blue-500 w-5 h-5" />
                  <span>Manufacturer Comparison Matrix</span>
                </h3>
                <button
                  onClick={() => setShowCompareModal(false)}
                  className="p-1 rounded-lg bg-gray-900 hover:bg-gray-850 border border-gray-800 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body / Table */}
              <div className="p-6 overflow-y-auto flex-grow">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-gray-900 bg-gray-900/10">
                      <th className="p-4 font-bold text-gray-400 w-1/4">Key Metrics</th>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return (
                          <th key={b.id} className="p-4 font-bold text-white w-1/4">
                            <div className="flex items-center gap-2">
                              <span>{b.logo}</span>
                              <span className="text-sm font-extrabold">{b.name}</span>
                            </div>
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-900 font-light">
                    {/* Origin */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Origin / HQ</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return <td key={b.id} className="p-4 text-gray-200">{b.origin} ({b.headquarters})</td>;
                      })}
                    </tr>
                    {/* Established */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Established Since</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return <td key={b.id} className="p-4 text-gray-200">{b.established}</td>;
                      })}
                    </tr>
                    {/* Price Segment */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Cost Level</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return <td key={b.id} className="p-4 text-emerald-450 font-bold">{b.priceSegment}</td>;
                      })}
                    </tr>
                    {/* Certifications */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Quality Certifications</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return (
                          <td key={b.id} className="p-4 text-gray-300 font-mono text-[10px]">
                            {b.certifications.join(', ')}
                          </td>
                        );
                      })}
                    </tr>
                    {/* Top Products */}
                    <tr>
                      <td className="p-4 text-gray-455 font-semibold">Key Products</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return (
                          <td key={b.id} className="p-4 text-gray-300">
                            <ul className="list-disc list-inside space-y-1">
                              {b.products.map((p, i) => <li key={i}>{p}</li>)}
                            </ul>
                          </td>
                        );
                      })}
                    </tr>
                    {/* Advantages */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Advantages</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return (
                          <td key={b.id} className="p-4 text-emerald-450">
                            <ul className="list-disc list-inside space-y-1">
                              {b.advantages.slice(0, 2).map((adv, i) => <li key={i} className="text-gray-300"><span className="text-emerald-500 mr-1">•</span>{adv}</li>)}
                            </ul>
                          </td>
                        );
                      })}
                    </tr>
                    {/* Limitations */}
                    <tr>
                      <td className="p-4 text-gray-450 font-semibold">Limitations</td>
                      {compareBrandIds.map((bId) => {
                        const b = brandsData.find((x) => x.id === bId)!;
                        return (
                          <td key={b.id} className="p-4 text-rose-450">
                            <ul className="list-disc list-inside space-y-1">
                              {b.limitations.slice(0, 2).map((lim, i) => <li key={i} className="text-gray-300"><span className="text-rose-500 mr-1">•</span>{lim}</li>)}
                            </ul>
                          </td>
                        );
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
