"use client";

import React, { useState, useEffect } from 'react';
import { translations, Language } from '../data/translations';
import { CalculatorDefinition, calculatorsList } from '../data/calculatorsData';
import { Calculator, ArrowLeft, Info, Search, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

// ── Markdown → HTML renderer ────────────────────────────────────────────────
function renderMarkdown(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  let inList = false;
  let inOrderedList = false;

  const closeList = () => {
    if (inList)        { out.push('</ul>'); inList = false; }
    if (inOrderedList) { out.push('</ol>'); inOrderedList = false; }
  };

  for (let raw of lines) {
    const line = raw.trimEnd();

    // Skip blank lines — just add spacing
    if (line.trim() === '') {
      closeList();
      out.push('<div class="h-2"></div>');
      continue;
    }

    // Math block: $$...$$  → styled formula box
    if (/\$\$(.+)\$\$/.test(line)) {
      closeList();
      const formula = line.replace(/\$\$(.+)\$\$/, '$1').trim();
      out.push(`<div class="my-2 px-3 py-2 rounded-lg bg-blue-950/40 border border-blue-800/30 font-mono text-blue-300 text-[11px] overflow-x-auto">${formula}</div>`);
      continue;
    }

    // Headings
    if (/^####\s+/.test(line)) {
      closeList();
      out.push(`<h5 class="text-[11px] font-bold text-gray-200 uppercase tracking-wide mt-4 mb-1">${inlineFormat(line.replace(/^####\s+/, ''))}</h5>`);
      continue;
    }
    if (/^###\s+/.test(line)) {
      closeList();
      out.push(`<h4 class="text-xs font-extrabold text-white mt-5 mb-2 flex items-center gap-1.5"><span class="inline-block w-1 h-3 bg-blue-500 rounded-sm"></span>${inlineFormat(line.replace(/^###\s+/, ''))}</h4>`);
      continue;
    }
    if (/^##\s+/.test(line)) {
      closeList();
      out.push(`<h3 class="text-sm font-extrabold text-white mt-5 mb-2">${inlineFormat(line.replace(/^##\s+/, ''))}</h3>`);
      continue;
    }

    // Ordered list  (1. item)
    if (/^\d+\.\s+/.test(line)) {
      if (!inOrderedList) { closeList(); out.push('<ol class="list-decimal list-inside space-y-1 ml-2">'); inOrderedList = true; }
      out.push(`<li class="text-gray-300">${inlineFormat(line.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    // Unordered list  (- item  or  • item)
    if (/^[-•]\s+/.test(line)) {
      if (!inList) { closeList(); out.push('<ul class="space-y-1 ml-2">'); inList = true; }
      out.push(`<li class="flex gap-2 text-gray-300"><span class="text-blue-500 mt-0.5">▸</span><span>${inlineFormat(line.replace(/^[-•]\s+/, ''))}</span></li>`);
      continue;
    }

    // Plain paragraph
    closeList();
    out.push(`<p class="text-gray-350 leading-relaxed">${inlineFormat(line)}</p>`);
  }

  closeList();
  return out.join('\n');
}

// Inline formatting: **bold**, `code`, $inline-math$
function inlineFormat(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-gray-100 font-semibold">$1</strong>')
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-gray-800 text-emerald-400 font-mono text-[10px]">$1</code>')
    .replace(/\$([^$]+)\$/g, '<code class="px-1.5 py-0.5 rounded bg-blue-950/50 text-blue-300 font-mono text-[10px]">$1</code>');
}
// ────────────────────────────────────────────────────────────────────────────

interface CalculatorsHubProps {
  lang: Language;
}

// Simple CountUp helper for calculator outputs
function CountUpValue({ value }: { value: string | number }) {
  const numeric = typeof value === 'number' ? value : parseFloat(String(value).replace(/[^0-9.]/g, ''));
  const isNumber = !isNaN(numeric);
  const [displayValue, setDisplayValue] = useState(isNumber ? 0 : value);

  useEffect(() => {
    if (!isNumber) {
      setDisplayValue(value);
      return;
    }
    let start = 0;
    const end = numeric;
    const duration = 600;
    const startTime = performance.now();

    let animationFrameId: number;

    const update = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = progress * (2 - progress);
      const current = start + eased * (end - start);
      
      // If original value was an integer, display integer. Otherwise format to 2 decimals
      if (Number.isInteger(end)) {
        setDisplayValue(Math.round(current));
      } else {
        setDisplayValue(Number(current.toFixed(2)));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(update);
      } else {
        setDisplayValue(end);
      }
    };

    animationFrameId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrameId);
  }, [value, numeric, isNumber]);

  if (!isNumber) return <span>{String(value)}</span>;

  // Add back non-numeric symbols if necessary (e.g. currency, units, suffix)
  const nonNumericPart = String(value).replace(/[0-9.]/g, '');
  const isSuffix = String(value).endsWith(nonNumericPart) && nonNumericPart.length > 0;
  
  if (isSuffix) {
    return <span>{displayValue}{nonNumericPart}</span>;
  }
  return <span>{nonNumericPart}{displayValue}</span>;
}

export default function CalculatorsHub({ lang }: CalculatorsHubProps) {
  const t = translations[lang];
  
  const [selectedCalcId, setSelectedCalcId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const [inputsState, setInputsState] = useState<Record<string, any>>({});
  const [outputsState, setOutputsState] = useState<Record<string, string | number> | null>(null);

  const activeCalc = calculatorsList.find((c) => c.id === selectedCalcId);

  const categories = [
    'All', 'Construction', 'Flooring & Finishing', 'Roofing', 
    'Plumbing', 'Electrical', 'Agricultural', 'Fabric & Textile', 
    'Home Improvement', 'Cost Estimation', 'Unit Conversion', 'Advanced'
  ];

  const filteredCalcs = calculatorsList.filter((c) => {
    const matchesCat = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = 
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.seoKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const handleOpenCalc = (calc: CalculatorDefinition) => {
    setSelectedCalcId(calc.id);
    const initialInputs: Record<string, any> = {};
    calc.inputs.forEach((input) => {
      initialInputs[input.name] = input.defaultValue;
    });
    setInputsState(initialInputs);
    setOutputsState(null);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeCalc) return;
    const results = activeCalc.calculate(inputsState);
    setOutputsState(results);

    // Dynamic celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#10b981', '#f59e0b']
    });
  };

  // Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 280, damping: 25 } }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-8 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <AnimatePresence mode="wait">
        {activeCalc ? (
          <motion.div 
            key="calc-widget"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="space-y-6"
          >
            <button
              onClick={() => setSelectedCalcId(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-905/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition-all text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Calculators Index</span>
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              
              {/* Left Widget Panel */}
              <div className="lg:col-span-2 space-y-6">
                <form onSubmit={handleCalculate} className="glass-panel rounded-3xl p-6 border border-white/5 space-y-5 relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                  
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {activeCalc.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">{activeCalc.name}</h3>
                    <p className="text-xs text-gray-400 font-light leading-relaxed">{activeCalc.description}</p>
                  </div>

                  <hr className="border-gray-850" />

                  {/* Inputs */}
                  <div className="space-y-4">
                    {activeCalc.inputs.map((input) => (
                      <div key={input.name} className="space-y-1.5">
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                          {input.label}
                        </label>
                        {input.type === 'select' ? (
                          <select
                            value={inputsState[input.name] ?? ''}
                            onChange={(e) => setInputsState({ ...inputsState, [input.name]: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-blue-500 text-xs transition-colors"
                          >
                            {input.options?.map((opt) => (
                              <option key={opt.value} value={opt.value} className="bg-[#0b0f19]">
                                {opt.label}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type="number"
                            step="any"
                            required
                            value={inputsState[input.name] ?? ''}
                            onChange={(e) => setInputsState({ ...inputsState, [input.name]: e.target.value })}
                            className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-white outline-none focus:border-blue-500 text-xs transition-colors"
                          />
                        )}
                      </div>
                    ))}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-blue-650 hover:bg-blue-500 text-white font-semibold transition-all text-xs shadow-lg shadow-blue-500/15 flex items-center justify-center gap-2"
                  >
                    <Calculator className="w-4 h-4" />
                    <span>Run Real-time Calculation</span>
                  </button>
                </form>

              </div>

              {/* Right Panel: Estimations + Reference */}
              <div className="lg:col-span-3 space-y-6">

                {/* Calculation Estimations — shown above Reference */}
                <AnimatePresence mode="wait">
                  {outputsState ? (
                    <motion.div
                      key="outputs"
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ type: 'spring' as const, stiffness: 300, damping: 28 }}
                      className="glass-panel rounded-3xl p-6 border border-emerald-500/15 bg-emerald-950/5 space-y-4 shadow-xl"
                    >
                      <h4 className="font-bold text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-2 border-b border-emerald-900/20 pb-3">
                        <Sparkles className="w-4 h-4" />
                        <span>Calculation Estimations</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {Object.entries(outputsState).map(([key, val]) => (
                          <div key={key} className="space-y-1 bg-gray-900/60 p-4 rounded-2xl border border-gray-800 shadow-inner">
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                              {activeCalc.outputLabels[key] || key}
                            </span>
                            <div className="text-2xl font-extrabold text-white tracking-tight">
                              <CountUpValue value={val} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="outputs-placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="glass-panel rounded-3xl p-6 border border-dashed border-gray-800 flex flex-col items-center justify-center gap-3 min-h-[120px]"
                    >
                      <Sparkles className="w-6 h-6 text-gray-700" />
                      <p className="text-xs text-gray-600 font-medium text-center">Fill in the inputs and click<br/><span className="text-gray-500">Run Real-time Calculation</span> to see results here.</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Reference Formula & Standards */}
                <div className="glass-panel rounded-3xl p-6 md:p-8 border border-white/5 space-y-5 prose prose-invert max-w-none text-gray-300 shadow-2xl">
                  <div className="flex items-center gap-2 text-blue-450 pb-2 border-b border-gray-850">
                    <Info className="w-5 h-5" />
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">Reference Formula &amp; Standards</h4>
                  </div>
                  <div
                    className="text-xs space-y-1"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(activeCalc.explanatoryContent) }}
                  />

                  <div className="pt-5 border-t border-gray-850/60 space-y-2">
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest block">Indexed SEO Keywords</span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeCalc.seoKeywords.map((kw, idx) => (
                        <span key={idx} className="text-[9px] font-medium px-2.5 py-0.5 rounded-full bg-gray-900 text-gray-400 border border-gray-800">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </motion.div>
        ) : (
          /* Index View */
          <motion.div 
            key="calc-index"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6"
          >
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-3 py-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>Quantity & Cost Matrices</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-250 to-gray-400 flex items-center justify-center gap-3">
                <span>Interactive Estimators</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
                Calculate raw materials quantities, estimate construction costs, configure setups, and evaluate energy savings in seconds.
              </p>
              <div className="pt-2 flex justify-center">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://www.effectivecpmnetwork.com/b2r8r4vba?key=c509707241dc8f425cdd67fe12b30e63"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-600/15"
                >
                  Check Features
                </motion.a>
              </div>
            </motion.div>

            {/* Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full lg:max-w-md relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-450 w-4.5 h-4.5" />
                <input
                  type="text"
                  placeholder="Search estimators (e.g. Paint, Cement, Steel)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-gray-900/60 border border-gray-805 text-white placeholder-gray-505 focus:border-blue-500 outline-none text-xs transition-colors"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-1.5 justify-center lg:justify-end max-w-2xl">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border ${
                      selectedCategory === cat
                        ? 'bg-blue-650 border-blue-500 text-white shadow shadow-blue-500/10'
                        : 'bg-gray-900/60 text-gray-400 border-gray-800 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredCalcs.map((calc) => (
                  <motion.div
                    key={calc.id}
                    layout
                    variants={itemVariants}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => handleOpenCalc(calc)}
                    whileHover={{ 
                      y: -4, 
                      borderColor: 'rgba(59, 130, 246, 0.4)',
                      boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.15)'
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 cursor-pointer flex flex-col justify-between group/calc shadow-md"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center">
                        <span className="text-[9px] font-semibold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                          {calc.category}
                        </span>
                      </div>
                      <h4 className="font-extrabold text-white group-hover/calc:text-blue-400 transition-colors text-base tracking-tight line-clamp-1">
                        {calc.name}
                      </h4>
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                        {calc.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end text-[10px] text-blue-400 font-bold group-hover/calc:translate-x-1.5 transition-transform border-t border-gray-850/60 pt-4 mt-6">
                      <span>Open Calculator Tool</span>
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredCalcs.length === 0 && (
              <div className="col-span-full py-20 text-center text-gray-400 text-sm font-light">
                No calculators match your search query. Try another keyword.
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
