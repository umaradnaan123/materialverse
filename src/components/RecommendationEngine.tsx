"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { RecommendationScenario, recommendationsData } from '../data/recommendationsData';
import { translations, Language } from '../data/translations';
import { 
  Compass, CheckSquare, Award, ArrowRight, ArrowLeft, Info, 
  AlertTriangle, Hammer, Calculator, FileText, CheckCircle, HelpCircle, ShieldAlert,
  Search, ShieldCheck, Sparkles, AlertCircle, TrendingUp
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

interface RecommendationEngineProps {
  lang: Language;
  onSelectMaterial?: (id: string) => void;
}

export default function RecommendationEngine({ lang, onSelectMaterial }: RecommendationEngineProps) {
  const t = translations[lang];
  const [selectedScenarioId, setSelectedScenarioId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Custom checklist checked states
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Categories list
  const categories = [
    'All', 'Construction', 'Agricultural', 'Solar & Energy', 
    'Paint', 'Tile & Flooring', 'Sanitary & Bathroom', 
    'Modular Kitchen', 'Electrical', 'Textile & Fabric', 'Industrial & Safety'
  ];

  const filteredScenarios = recommendationsData.filter((sc) => {
    const matchesCat = selectedCategory === 'All' || sc.category === selectedCategory;
    const matchesSearch = 
      sc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sc.recommendedMaterials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const activeScenario = recommendationsData.find((s) => s.id === selectedScenarioId);

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setCheckedItems({});
    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']
    });
  };

  const toggleCheck = (index: number) => {
    const key = `${selectedScenarioId}-${index}`;
    setCheckedItems(prev => {
      const next = { ...prev, [key]: !prev[key] };
      // Check if all items in active checklist are checked for a celebration
      if (activeScenario && Object.keys(next).filter(k => k.startsWith(`${selectedScenarioId}-`)).length === activeScenario.buyingChecklist.length) {
        const allChecked = activeScenario.buyingChecklist.every((_, idx) => next[`${selectedScenarioId}-${idx}`]);
        if (allChecked) {
          confetti({
            particleCount: 40,
            spread: 50,
            origin: { y: 0.85 }
          });
        }
      }
      return next;
    });
  };

  // Stagger variants for scenario grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 260, damping: 25 } }
  };

  // Sequential reveal animation variants for materials
  const sequentialContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.15
      }
    }
  };

  const sequentialItem = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 relative">
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-3 py-6 no-print"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Smart Decision Matrix</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400 flex items-center justify-center gap-3">
          <Compass className="text-blue-500 w-9 h-9 animate-pulse" />
          <span>Interactive Recommendations</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
          What are you building today? Find the ideal materials, grade certifications, checklists, and calculators based on industry-standard engineering parameters.
        </p>
        <div className="pt-2 flex justify-center">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="https://www.effectivecpmnetwork.com/r1w8jwtc?key=d90e40c314b49478cb2f5496e9288c01"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-blue-600/15"
          >
            Check Features
          </motion.a>
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        {activeScenario ? (
          // --- DETAILED RECOMMENDATION VIEW ---
          <motion.div 
            key="details"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="space-y-6"
          >
            <div className="flex justify-between items-center no-print">
              <button
                onClick={() => setSelectedScenarioId(null)}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800/80 transition-all text-xs font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Scenarios Index</span>
              </button>
              
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                <span>Real-time Recommendation Engine Match</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              
              {/* Left Profile Panel (SaaS Style) */}
              <div className="glass-panel rounded-3xl p-6 border border-white/5 space-y-6 relative overflow-hidden lg:col-span-1 shadow-2xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {activeScenario.category}
                    </span>
                    <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>98% Conf.</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="text-4xl p-2.5 bg-gray-800/50 rounded-2xl border border-gray-700/30">
                      {activeScenario.icon}
                    </div>
                    <div>
                      <h1 className="text-2xl font-extrabold text-white tracking-tight leading-tight">
                        {activeScenario.title}
                      </h1>
                      <p className="text-xs text-gray-400 mt-1 font-light">{activeScenario.category} Solution</p>
                    </div>
                  </div>
                  
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {activeScenario.description}
                  </p>
                </div>

                <hr className="border-gray-850" />

                {/* Score & Match Timelines */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-gray-400">
                      <span>Recommendation Reliability</span>
                      <span className="text-blue-400 font-bold">98% (High)</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-1.5 overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '98%' }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Estimated Cost Segment</span>
                    <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1">
                      <span>{activeScenario.priceRange}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Standard Certifications</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeScenario.certifications.map((cert, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-blue-300 font-mono text-[9px]">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block">Recommended Manufacturers</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeScenario.popularBrands.map((brand, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 text-gray-300 text-[10px] font-medium">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side Panels */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Sequentially Loaded Recommended Materials, Grades & Tools */}
                <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-6">
                  
                  {/* Grid for Materials & Grades */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Materials */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                        <span>Recommended Materials</span>
                      </h4>
                      <motion.ul 
                        variants={sequentialContainer}
                        initial="hidden"
                        animate="show"
                        className="space-y-2.5"
                      >
                        {activeScenario.recommendedMaterials.map((mat, idx) => (
                          <motion.li 
                            key={idx} 
                            variants={sequentialItem}
                            className="text-xs text-gray-300 flex items-center gap-2 bg-gray-900/40 p-2.5 rounded-xl border border-gray-800/40 hover:border-blue-500/20 transition-all cursor-default"
                          >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                            <span className="font-medium">{mat}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>

                    {/* Grades */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                        <Award className="w-4 h-4 text-blue-400" />
                        <span>Suggested Quality Grades</span>
                      </h4>
                      <motion.ul 
                        variants={sequentialContainer}
                        initial="hidden"
                        animate="show"
                        className="space-y-2.5"
                      >
                        {activeScenario.suggestedGrades.map((grade, idx) => (
                          <motion.li 
                            key={idx} 
                            variants={sequentialItem}
                            className="text-xs text-gray-300 flex items-start gap-2 bg-gray-900/40 p-2.5 rounded-xl border border-gray-800/40 hover:border-emerald-500/20 transition-all cursor-default"
                          >
                            <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1"></span>
                            <span className="leading-relaxed font-light">{grade}</span>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  </div>

                  <hr className="border-gray-850" />

                  {/* Required Tools */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                      <Hammer className="w-4 h-4 text-amber-400" />
                      <span>Required Tools & Equipment</span>
                    </h4>
                    <motion.div 
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      className="flex flex-wrap gap-2"
                    >
                      {activeScenario.requiredTools.map((tool, idx) => (
                        <motion.span 
                          key={idx} 
                          variants={itemVariants}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-xs px-3 py-1.5 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 font-medium cursor-default shadow-sm hover:text-white"
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </div>

                {/* Checklists & Common Mistakes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Interactive Checklist */}
                  <div className="glass-panel rounded-3xl p-6 border border-white/5 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                      <CheckSquare className="w-4.5 h-4.5 text-blue-400" />
                      <span>Interactive Buying Checklist</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeScenario.buyingChecklist.map((item, idx) => {
                        const isChecked = !!checkedItems[`${selectedScenarioId}-${idx}`];
                        return (
                          <motion.li 
                            key={idx} 
                            onClick={() => toggleCheck(idx)}
                            whileHover={{ x: 2 }}
                            className="text-xs text-gray-350 flex items-start gap-2.5 leading-relaxed font-light cursor-pointer select-none bg-gray-900/20 p-2 rounded-lg border border-transparent hover:border-gray-800 transition-colors"
                          >
                            <span className="shrink-0 mt-0.5">
                              {isChecked ? (
                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                </motion.div>
                              ) : (
                                <div className="w-5 h-5 rounded-md border border-gray-700 hover:border-blue-500 transition-colors" />
                              )}
                            </span>
                            <span className={`${isChecked ? 'line-through text-gray-500' : ''} transition-all`}>
                              {item}
                            </span>
                          </motion.li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Common Mistakes */}
                  <div className="glass-panel rounded-3xl p-6 border border-white/5 space-y-4">
                    <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                      <AlertTriangle className="w-4.5 h-4.5 text-rose-500" />
                      <span>Common Mistakes to Avoid</span>
                    </h4>
                    <ul className="space-y-3">
                      {activeScenario.commonMistakes.map((mistake, idx) => (
                        <li key={idx} className="text-xs text-gray-300 flex items-start gap-2.5 leading-relaxed font-light bg-rose-500/5 p-2.5 rounded-xl border border-rose-500/10">
                          <AlertCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                          <span>{mistake}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Alternatives & Maintenance */}
                <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-6 shadow-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Alternatives */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                        <Info className="w-4 h-4 text-teal-400" />
                        <span>Budget-Friendly Alternatives</span>
                      </h4>
                      <ul className="space-y-2">
                        {activeScenario.budgetAlternatives.map((alt, idx) => (
                          <li key={idx} className="text-xs text-gray-300 flex items-start gap-2 leading-relaxed font-light">
                            <span className="text-teal-400 font-bold mr-1">•</span>
                            <span>{alt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Maintenance */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-1.5 border-b border-gray-850 pb-2">
                        <HelpCircle className="w-4 h-4 text-purple-400" />
                        <span>Upkeep & Maintenance Tips</span>
                      </h4>
                      <p className="text-xs text-gray-300 leading-relaxed font-light bg-purple-500/5 p-2.5 rounded-xl border border-purple-500/10">
                        {activeScenario.maintenanceTips}
                      </p>
                    </div>
                  </div>

                  <hr className="border-gray-850" />

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row justify-between gap-4">
                    <div className="flex-1 space-y-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Estimation Tool</span>
                      <Link
                        href="/calculators"
                        className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all flex items-center justify-center gap-2 text-xs shadow-lg hover:shadow-blue-500/20"
                      >
                        <Calculator className="w-4 h-4" />
                        <span>Open Material Estimator</span>
                      </Link>
                    </div>
                    <div className="flex-1 space-y-2">
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">Reference Guides</span>
                      <Link
                        href="/guides"
                        className="w-full py-2.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold transition-all flex items-center justify-center gap-2 text-xs"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Read Educational Guides</span>
                      </Link>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>
        ) : (
          // --- SCENARIO SELECTION MATRIX GRID ---
          <motion.div 
            key="grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6 no-print"
          >
            
            {/* Filter Panel */}
            <div className="glass-panel rounded-2xl p-5 border border-white/5 flex flex-col md:flex-row gap-4 items-center justify-between shadow-lg">
              {/* Search input */}
              <div className="w-full md:max-w-md relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
                <input
                  type="search"
                  autoComplete="off"
                  placeholder="Search scenarios (e.g., painting, solar, home)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-800 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs transition-colors"
                />
              </div>

              {/* Category selection */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full bg-gray-900/60 border border-gray-800 rounded-xl px-4 py-2.5 text-white outline-none focus:border-blue-500 text-xs transition-colors"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="text-xs text-gray-400">
              Found <strong className="text-white">{filteredScenarios.length}</strong> customized planning scenarios matching filters
            </div>

            {/* Scenario Cards Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence>
                {filteredScenarios.map((sc) => (
                  <motion.div
                    key={sc.id}
                    layoutId={`scenario-${sc.id}`}
                    variants={itemVariants}
                    onClick={() => handleSelectScenario(sc.id)}
                    whileHover={{ 
                      y: -4, 
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.15)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 cursor-pointer flex flex-col justify-between group/sc transition-colors duration-250 shadow-md"
                  >
                    <div className="space-y-4">
                      <div className="text-4xl p-2.5 bg-gray-900/60 rounded-2xl border border-gray-800 w-14 h-14 flex items-center justify-center shadow-inner group-hover/sc:bg-blue-500/10 group-hover/sc:border-blue-500/20 transition-all duration-300">
                        {sc.icon}
                      </div>
                      <div>
                        <h4 className="font-extrabold text-white group-hover/sc:text-blue-400 transition-colors text-lg tracking-tight line-clamp-1">
                          {sc.title}
                        </h4>
                        <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed font-light">
                          {sc.description}
                        </p>
                      </div>
                      <span className="text-[9px] px-2.5 py-0.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 inline-block font-semibold">
                        {sc.category}
                      </span>
                    </div>

                    <div className="flex items-center justify-end text-[10px] text-blue-400 font-semibold group-hover/sc:translate-x-1.5 transition-transform border-t border-gray-800/80 pt-4 mt-6">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredScenarios.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400 text-sm">
                No matching scenarios found. Try adjusting filters or search string.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
