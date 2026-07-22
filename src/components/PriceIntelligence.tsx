"use client";

import React, { useState, useEffect } from 'react';
import { pricesData, MaterialPrice, RegionalPrice } from '../data/pricesData';
import { Language, translations } from '../data/translations';
import { 
  TrendingUp, TrendingDown, Minus, Search, Calendar, MapPin, 
  AlertCircle, RefreshCw, BarChart2, Info, Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PriceIntelligenceProps {
  lang: Language;
}

// CountUp component to animate price counts
function CountUpPrice({ value, formatFn }: { value: number; formatFn: (v: number) => string }) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let start = Math.floor(value * 0.7); // Start at 70% of value for a quick micro-animation
    const end = value;
    const duration = 500; // 500ms
    const startTime = performance.now();
    
    let animationFrameId: number;
    
    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease out quad
      const eased = progress * (2 - progress);
      setDisplayValue(Math.floor(start + eased * (end - start)));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(end);
      }
    };
    
    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value]);
  
  return <span>{formatFn(displayValue)}</span>;
}

export default function PriceIntelligence({ lang }: PriceIntelligenceProps) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedRegion, setSelectedRegion] = useState<'North India' | 'South India' | 'East India' | 'West India'>('North India');

  const categories = [
    'All', 'Construction', 'Electrical', 'Plumbing', 
    'Paint', 'Furniture', 'Agricultural', 'Fabric', 
    'Solar', 'Automotive'
  ];

  // Filter items
  const filteredPrices = pricesData.filter((item) => {
    const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getTrendIcon = (trend: 'Increasing' | 'Stable' | 'Decreasing') => {
    switch (trend) {
      case 'Increasing':
        return <TrendingUp className="w-4 h-4 text-emerald-450" />;
      case 'Decreasing':
        return <TrendingDown className="w-4 h-4 text-rose-500" />;
      case 'Stable':
      default:
        return <Minus className="w-4 h-4 text-amber-500" />;
    }
  };

  const getTrendClass = (trend: 'Increasing' | 'Stable' | 'Decreasing') => {
    switch (trend) {
      case 'Increasing':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'Decreasing':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
      case 'Stable':
      default:
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
    }
  };

  // Helper to format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, stiffness: 320, damping: 25 } }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 py-6 no-print"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Real-time Market Indexes</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400 flex items-center justify-center gap-3">
          <BarChart2 className="text-blue-500 w-9 h-9" />
          <span>Material Price Intelligence</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          Track real-time regional variations, price ranges, averages, and trend vectors across materials with automated count-up analysis.
        </p>
        <div className="pt-2 flex justify-center">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.effectivecpmnetwork.com/y64k0hg8e?key=b6e031570e1ac4dcce264194b1bf0101"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/15"
          >
            Check Features
          </motion.a>
        </div>
      </motion.div>

      {/* Control Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass-panel rounded-3xl p-6 border border-white/5 space-y-6 no-print shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
          {/* Search bar */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-450 w-4.5 h-4.5" />
            <input
              type="search"
              placeholder="Search materials (e.g. Cement, Steel, Paint)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs transition-colors"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-gray-900/60 border border-gray-800 rounded-2xl px-4 py-3 text-white outline-none focus:border-blue-500 text-xs cursor-pointer transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>Category: {cat}</option>
              ))}
            </select>
          </div>

          {/* Region Switcher Button Group (Linear Style) */}
          <div className="flex bg-gray-950 border border-gray-905 p-1 rounded-2xl relative">
            {(['North India', 'South India', 'East India', 'West India'] as const).map((reg) => {
              const active = selectedRegion === reg;
              return (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg)}
                  className="flex-1 text-[10px] sm:text-xs font-semibold py-2 rounded-xl transition-all relative z-10 text-center"
                >
                  {active && (
                    <motion.div 
                      layoutId="activeRegionBg" 
                      className="absolute inset-0 bg-blue-600 rounded-xl -z-10 shadow-md shadow-blue-650/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={active ? 'text-white font-bold' : 'text-gray-400 hover:text-white'}>
                    {reg}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Stats Counter & Info */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-1">
        <div className="text-xs text-gray-400">
          Showing <span className="text-white font-bold">{filteredPrices.length}</span> verified listings in <span className="text-blue-400 font-bold">{selectedRegion}</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-amber-450 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full font-medium shadow-sm">
          <Info className="w-3.5 h-3.5" />
          <span>Rates are approximate dealer averages subject to regional taxes</span>
        </div>
      </div>

      {/* Price Grid with AnimatePresence */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrices.map((item) => {
            // Look up regional prices or fallback to overall average
            const regional = item.regionalPrices.find((r) => r.region === selectedRegion);
            const min = regional ? regional.min : item.minPrice;
            const max = regional ? regional.max : item.maxPrice;
            const avg = regional ? regional.avg : item.avgPrice;

            return (
              <motion.div 
                key={item.id}
                layout
                variants={itemVariants}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                whileHover={{ 
                  y: -4, 
                  borderColor: 'rgba(255,255,255,0.12)',
                  boxShadow: '0 10px 30px -10px rgba(0,0,0,0.4)' 
                }}
                className="glass-panel rounded-3xl p-6 border border-white/5 flex flex-col justify-between relative overflow-hidden group shadow-md"
              >
                {/* Category tag */}
                <div className="absolute top-4 right-4 text-[9px] px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-450 font-semibold tracking-wide">
                  {item.category}
                </div>

                {/* Body */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 font-mono flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-blue-450 shrink-0" />
                      <span>{selectedRegion} Index</span>
                    </p>
                  </div>

                  {/* Range Card */}
                  <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-3 shadow-inner">
                    <div className="flex items-baseline justify-between">
                      <span className="text-[9px] text-gray-500 font-bold uppercase tracking-wider">Estimated Price Range</span>
                      <span className="text-[9px] text-gray-400 font-bold font-mono px-2 py-0.5 bg-gray-900 rounded-md border border-gray-850">{item.unit}</span>
                    </div>
                    
                    <div className="text-2xl font-black text-white tracking-tight flex items-center gap-1.5">
                      <CountUpPrice value={min} formatFn={formatPrice} />
                      <span className="text-gray-650 font-light text-xl">–</span>
                      <CountUpPrice value={max} formatFn={formatPrice} />
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2.5 border-t border-gray-900">
                      <span className="text-gray-400 font-light">Market Average:</span>
                      <span className="font-extrabold text-blue-400">
                        <CountUpPrice value={avg} formatFn={formatPrice} />
                      </span>
                    </div>
                  </div>

                  {/* Badges / Metrics Row */}
                  <div className="flex items-center justify-between text-[11px] pt-1.5 border-t border-gray-900/40">
                    {/* Trend */}
                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-bold ${getTrendClass(item.trend)}`}>
                      {getTrendIcon(item.trend)}
                      <span>{item.trend}</span>
                    </div>

                    {/* Last updated */}
                    <div className="flex items-center gap-1.5 text-gray-550 text-[10px]">
                      <Calendar className="w-3.5 h-3.5 text-gray-600" />
                      <span>{item.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {filteredPrices.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full py-20 text-center glass-panel rounded-3xl border border-white/5 text-gray-400 space-y-3 shadow-inner"
          >
            <AlertCircle className="w-8 h-8 mx-auto text-gray-650 animate-bounce" />
            <p className="text-sm">No price listings match your search parameters.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Disclaimers & Methodology */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 bg-gradient-to-br from-gray-950 to-blue-950/10 space-y-5 no-print shadow-xl"
      >
        <div className="flex items-start gap-4">
          <AlertCircle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Important Pricing Intelligence Protocol</h4>
            <p className="text-xs text-gray-450 leading-relaxed font-light">
              Prices shown on <strong>MaterialVerse</strong> are approximate market estimates collected from public standard directories, dealer records, and commodity trade lists. Local costs may deviate based on freight corridors, logistics overheads, bulk purchase schedules, local municipal taxation, and raw material pricing cycles.
            </p>
          </div>
        </div>

        <hr className="border-gray-900" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-400 font-light">
          <div className="space-y-2 bg-gray-900/20 p-4 rounded-2xl border border-gray-900/50">
            <span className="font-bold text-white text-[11px] uppercase tracking-wider block">Rate Updates</span>
            <p className="leading-relaxed">Averages are monitored and adjusted periodically to reflect broad industrial commodity trends.</p>
          </div>
          <div className="space-y-2 bg-gray-900/20 p-4 rounded-2xl border border-gray-900/50">
            <span className="font-bold text-white text-[11px] uppercase tracking-wider block">Negotiation Margins</span>
            <p className="leading-relaxed">Wholesale contract buyers can typically expect additional margins of 5% to 15% on bulk delivery schedules.</p>
          </div>
          <div className="space-y-2 bg-gray-900/20 p-4 rounded-2xl border border-gray-900/50">
            <span className="font-bold text-white text-[11px] uppercase tracking-wider block">GST & Freight</span>
            <p className="leading-relaxed">Taxes (typically 18% to 28%) and final freight delivery to site are typically excluded from base indexes.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
