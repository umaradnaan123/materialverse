import React, { useState } from 'react';
import Link from 'next/link';
import { Material, materialsData } from '../data/materialsData';
import { translations, Language } from '../data/translations';
import { Search, Star, Leaf, Award, ArrowRight, ShieldCheck, Bookmark, Scale, ChevronDown, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface DashboardProps {
  lang: Language;
  onSelectMaterial?: (id: string) => void;
  onAddToCompare: (material: Material) => void;
  onToggleBookmark: (id: string) => void;
  bookmarks: string[];
  materials?: Material[];
  onSelectCategoryForBrands?: (category: string) => void;
}

export default function Dashboard({
  lang,
  onSelectMaterial,
  onAddToCompare,
  onToggleBookmark,
  bookmarks,
  materials = materialsData,
  onSelectCategoryForBrands,
}: DashboardProps) {
  const t = translations[lang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('All');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Groups and translation mapping
  const groups = [
    { key: 'All', label: t.allMaterials },
    { key: 'Construction', label: t.group_Construction },
    { key: 'Interior & Finishing', label: t.group_Interior },
    { key: 'Electrical & Utilities', label: t.group_Electrical },
    { key: 'Tools & Industrial', label: t.group_Tools },
    { key: 'Agriculture', label: t.group_Agriculture },
    { key: 'Textiles & Fashion', label: t.group_Textiles },
    { key: 'Eco, Smart & Stationery', label: t.group_Eco },
    { key: 'Medical & Laboratory', label: t.group_Medical },
  ];

  // Filtering materials
  const filteredMaterials = materials.filter((mat) => {
    const matchesGroup = selectedGroup === 'All' || mat.group === selectedGroup;
    const matchesSearch =
      mat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mat.bestFor.some((purpose) => purpose.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesGroup && matchesSearch;
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100, damping: 15 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 110, damping: 14 } },
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12 max-w-7xl mx-auto px-4 md:px-8 pb-12"
    >
      {/* Immersive SaaS Hero Section */}
      <motion.div 
        variants={itemVariants}
        className="text-center space-y-6 py-12 md:py-20 relative rounded-3xl overflow-hidden glass-panel border border-white/5 bg-gradient-to-br from-blue-950/20 via-[#0b0f19] to-emerald-950/15"
      >
        {/* Interactive Gradient Background Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1], 
              x: [0, 25, 0], 
              y: [0, -15, 0] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-blue-500/10 blur-[80px]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1], 
              x: [0, -35, 0], 
              y: [0, 20, 0] 
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-12 -right-12 w-80 h-80 rounded-full bg-emerald-500/5 blur-[100px]"
          />
        </div>

        <div className="relative z-10 space-y-4 max-w-3xl mx-auto px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wide shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.brandName} v2.5 Enterprise</span>
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-tight leading-none">
            Find the Perfect Material
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base font-light">
            Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.
          </p>
        </div>

        {/* Global Immersive Search Panel */}
        <div className="max-w-xl mx-auto px-4 relative z-10">
          <div className={`flex items-center gap-3 bg-gray-900/60 border rounded-2xl px-4 py-3 transition-all duration-300 ${
            isSearchFocused ? 'border-blue-500/80 shadow-lg shadow-blue-500/5 ring-1 ring-blue-500/20' : 'border-white/5'
          }`}>
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="bg-transparent text-sm w-full outline-none text-white placeholder-gray-500 font-light"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mt-4 text-[10px] text-gray-500"
          >
            <span>Try searching:</span>
            {['Cement', 'Steel', 'AAC Blocks', 'Polycab'].map((term) => (
              <button 
                key={term}
                onClick={() => setSearchQuery(term)}
                className="px-2 py-0.5 rounded bg-gray-900 border border-gray-800 hover:text-white transition-colors"
              >
                {term}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8 flex justify-center no-print">
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            onClick={() => {
              document.getElementById('featured-categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="p-1.5 rounded-full bg-gray-900 border border-gray-800 text-gray-400 cursor-pointer hover:text-white transition-colors"
          >
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Categories Filter & Grid Section */}
      <div id="featured-categories" className="space-y-6 scroll-mt-20">
        <div className="text-center space-y-1">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Materials Explorer</h2>
          <p className="text-xs text-gray-400">Filter across 60+ engineered materials to explore properties, brands, and installation guides.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 px-4 max-w-5xl mx-auto">
          {groups.map((group) => (
            <motion.button
              key={group.key}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setSelectedGroup(group.key);
                setSearchQuery('');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all ${
                selectedGroup === group.key
                  ? 'bg-blue-600 border-blue-500 text-white shadow shadow-blue-600/30'
                  : 'bg-gray-900 border-gray-800 text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {group.label}
            </motion.button>
          ))}
        </div>

        {/* Staggered Grid List */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMaterials.map((mat) => {
              const isBookmarked = bookmarks.includes(mat.id);
              return (
                <Link key={mat.id} href={`/material/${mat.id}`} className="block">
                  <motion.div
                    layout
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className="glass-panel glass-panel-hover rounded-3xl p-6 flex flex-col justify-between cursor-pointer border border-white/5 relative overflow-hidden group/card bg-gray-900/40 h-full"
                  >
                  {/* Top Row */}
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-start">
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {mat.category}
                      </span>
                      <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => onToggleBookmark(mat.id)}
                          className={`p-1.5 rounded-lg border transition-all ${
                            isBookmarked
                              ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                              : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white'
                          }`}
                          title="Bookmark"
                        >
                          <Bookmark className="w-3.5 h-3.5" />
                        </motion.button>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          onClick={() => onAddToCompare(mat)}
                          className="p-1.5 rounded-lg bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white transition-all"
                          title="Compare"
                        >
                          <Scale className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover/card:text-blue-400 transition-colors">
                      {mat.name}
                    </h3>
                    <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                      {mat.description}
                    </p>
                  </div>

                  {/* Specs & Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-800/60 space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      <div className="flex items-center gap-1.5 text-gray-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                        <span>{mat.lifespan}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-gray-400 justify-end">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        <span>Durability: {mat.durability}/5</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] font-mono">
                      <span className="text-gray-400">Tier: <strong className="text-gray-200">{mat.priceRange}</strong></span>
                      <div className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        <Leaf className="w-3 h-3" />
                        <span>Eco: {mat.ecoScore}/5</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-end text-xs text-blue-400 font-semibold group-hover/card:translate-x-1 transition-transform">
                      <span>View Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
            })}
          </AnimatePresence>

          {filteredMaterials.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center text-gray-550 border border-dashed border-gray-800 rounded-3xl"
            >
              No materials found matching your search filters.
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* --- MANUFACTURERS & CERTIFICATION STANDARDS MATRIX SECTION --- */}
      <motion.div 
        variants={itemVariants}
        className="space-y-6 pt-10 border-t border-gray-900 scroll-mt-20"
      >
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Compliance & Quality Auditing</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Top Manufacturers & Standards
          </h2>
          <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
            Select a material category below to instantly inspect verified certified brand manufacturers, national BIS/ISI license details, popular product lines, applications, and price levels.
          </p>
        </div>

        {/* Clickable Certified Standard Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {[
            {
              category: "Cement",
              icon: "🏗️",
              title: "Cement Manufacturers",
              standards: "IS 12269 (OPC 53) • IS 1489 (PPC)",
              desc: "Verify structural durability, setting timelines, and top brands like UltraTech, ACC, and Ambuja.",
              brandCount: "10 Certified Brands",
              color: "from-blue-600/10 to-blue-500/5 hover:border-blue-500/40"
            },
            {
              category: "Steel",
              icon: "🔩",
              title: "Structural & Reinforcement Steel",
              standards: "IS 1786 (TMT Rebars) • IS 2062",
              desc: "Track high tensile load-bearing steel rebars and plates from JSW, Tata, and SAIL.",
              brandCount: "10 Certified Brands",
              color: "from-amber-600/10 to-amber-500/5 hover:border-amber-500/40"
            },
            {
              category: "Electrical",
              icon: "⚡",
              title: "Electrical Wires & Switches",
              standards: "IS 694 (Wires) • IS 3854 (Switches)",
              desc: "Audit fire-retardant safety standards, cable lengths, and brands like Polycab and Havells.",
              brandCount: "6 Certified Brands",
              color: "from-rose-600/10 to-rose-500/5 hover:border-rose-500/40"
            },
            {
              category: "Flooring",
              icon: "📐",
              title: "Tiles, Flooring & Granite",
              standards: "IS 15622 (Vitrified & Ceramic)",
              desc: "Compare water absorption rates, scratch resistances, and brands like Kajaria and Somany.",
              brandCount: "6 Certified Brands",
              color: "from-purple-600/10 to-purple-500/5 hover:border-purple-500/40"
            },
            {
              category: "Pipes",
              icon: "🚰",
              title: "CPVC Plumbing & Drainage Pipes",
              standards: "IS 15778 (CPVC) • IS 4985 (PVC)",
              desc: "Examine water pressure indexes, lead-free standards, and manufacturers like Astral and Supreme.",
              brandCount: "6 Certified Brands",
              color: "from-teal-600/10 to-teal-500/5 hover:border-teal-500/40"
            },
            {
              category: "Paint",
              icon: "🎨",
              title: "Paints & Surface Coatings",
              standards: "IS 15489 (Interior Plastic Emulsion)",
              desc: "Audit volatile organic compound ratings, washability, and brands like Asian Paints and Berger.",
              brandCount: "6 Certified Brands",
              color: "from-emerald-600/10 to-emerald-500/5 hover:border-emerald-500/40"
            }
          ].map((item, idx) => (
            <Link key={idx} href={`/brands?category=${item.category}`} className="block">
              <motion.div
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className={`glass-panel rounded-3xl p-6 border border-white/5 cursor-pointer flex flex-col justify-between bg-gradient-to-br ${item.color} group transition-all shadow-md h-full`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-4xl p-2.5 bg-gray-900/60 rounded-2xl border border-gray-800 w-13 h-13 flex items-center justify-center shadow-inner group-hover:bg-blue-500/10 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <span className="text-[9px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.brandCount}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-extrabold text-white text-lg tracking-tight group-hover:text-blue-400 transition-colors leading-tight">
                      {item.title}
                    </h4>
                    <div className="text-[10px] text-blue-300 font-mono font-bold">
                      {item.standards}
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                <div className="flex items-center justify-end text-[10px] text-blue-400 font-bold group-hover:translate-x-1.5 transition-transform border-t border-gray-900 pt-4 mt-6">
                  <span>View Certified Brands</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
