import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Article, articlesData } from '../data/articlesData';
import { 
  FileText, ArrowLeft, ChevronRight, BookOpen, Clock, 
  ChevronDown, ChevronUp, Printer, Bookmark, Search, Calculator, Calendar, ArrowRight
} from 'lucide-react';

interface EducationalGuidesProps {
  selectedArticleId: string | null;
  onSelectArticle: (id: string | null) => void;
  onBackToHome: () => void;
}

export default function EducationalGuides({ 
  selectedArticleId, 
  onSelectArticle, 
  onBackToHome 
}: EducationalGuidesProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Bookmarking articles
  const [bookmarkedArticles, setBookmarkedArticles] = useState<string[]>([]);

  // Load bookmarks
  useEffect(() => {
    const saved = localStorage.getItem('article_bookmarks');
    if (saved) {
      setBookmarkedArticles(JSON.parse(saved));
    }
  }, []);

  // Monitor scroll for reading progress bar
  useEffect(() => {
    if (!selectedArticleId) return;

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticleId]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated;
    if (bookmarkedArticles.includes(id)) {
      updated = bookmarkedArticles.filter((aId) => aId !== id);
    } else {
      updated = [...bookmarkedArticles, id];
    }
    setBookmarkedArticles(updated);
    localStorage.setItem('article_bookmarks', JSON.stringify(updated));
  };

  const handlePrint = () => {
    window.print();
  };

  // Categories list
  const categories = ['All', ...Array.from(new Set(articlesData.map((a) => a.category))).sort()];

  // Filter list
  const filteredArticles = articlesData.filter((a) => {
    const matchesCategory = selectedCategory === 'All' || a.category === selectedCategory;
    const matchesSearch = 
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.seoKeywords.some((kw) => kw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const activeArticle = articlesData.find((a) => a.id === selectedArticleId);

  // Related guides recommendation
  const getRelatedGuides = (article: Article) => {
    return articlesData
      .filter((a) => a.category === article.category && a.id !== article.id)
      .slice(0, 3);
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-7xl mx-auto px-4 md:px-8">
      {activeArticle ? (
        // --- DETAILED ARTICLE VIEW ---
        <div className="space-y-6 relative">
          
          {/* Reading Progress Bar */}
          <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-800 no-print">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-75"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Breadcrumbs */}
          <nav className="text-xs text-gray-500 flex items-center gap-1.5 no-print">
            <span className="hover:text-gray-300 cursor-pointer" onClick={onBackToHome}>Home</span>
            <ChevronRight className="w-3 h-3" />
            <span className="hover:text-gray-300 cursor-pointer" onClick={() => onSelectArticle(null)}>Guides</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-400 font-semibold truncate">{activeArticle.title}</span>
          </nav>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center no-print">
            <button
              onClick={() => onSelectArticle(null)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/50 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Guides Index</span>
            </button>

            <div className="flex gap-2">
              <button
                onClick={(e) => toggleBookmark(activeArticle.id, e)}
                className={`p-2.5 rounded-xl border transition-all ${
                  bookmarkedArticles.includes(activeArticle.id)
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 font-semibold'
                    : 'bg-gray-800/50 border-gray-700/50 text-gray-400 hover:text-white'
                }`}
                title="Save Guide"
              >
                <Bookmark className="w-4 h-4" />
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gray-800/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-700/50 transition-all text-xs font-semibold"
                title="Print Guide"
              >
                <Printer className="w-4 h-4" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Table of Contents (Sidebar) */}
            <div className="lg:col-span-1 space-y-4 lg:sticky lg:top-24 h-fit no-print">
              <div className="glass-panel rounded-2xl p-5 border border-white/5 space-y-3">
                <h4 className="text-xs font-bold text-gray-450 uppercase tracking-widest border-b border-gray-850 pb-2 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-blue-400" />
                  <span>Table of Contents</span>
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeArticle.sections.map((sec, idx) => (
                    <li key={idx}>
                      <a 
                        href={`#section-${idx}`}
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-600" />
                        <span>{sec.title}</span>
                      </a>
                    </li>
                  ))}
                  {activeArticle.comparisonTable && (
                    <li>
                      <a 
                        href="#section-compare"
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-600" />
                        <span>Comparison Matrix</span>
                      </a>
                    </li>
                  )}
                  {activeArticle.faqs.length > 0 && (
                    <li>
                      <a 
                        href="#section-faqs"
                        className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                      >
                        <ChevronRight className="w-3 h-3 text-gray-600" />
                        <span>FAQ Guidelines</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              {/* Calculator Integration */}
              {activeArticle.calculatorLink && (
                <div className="glass-panel rounded-2xl p-5 border border-emerald-500/10 bg-emerald-950/5 space-y-3">
                  <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <Calculator className="w-4.5 h-4.5" />
                    <span>Try Estimator</span>
                  </h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed font-light">
                    Perform automatic structural estimations using the calculator associated with this guide.
                  </p>
                  <a
                    href="#/calculators"
                    className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all flex items-center justify-center gap-2 text-xs"
                  >
                    <span>Run Calculator</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>

            {/* Main Article Body */}
            <div className="lg:col-span-3 space-y-8 glass-panel rounded-3xl p-6 md:p-8 border border-white/5 print-full-width">
              {/* Header */}
              <div className="space-y-4 border-b border-gray-850 pb-5">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                    {activeArticle.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-500" />
                    <span>{activeArticle.readingTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>Updated: {activeArticle.lastUpdated}</span>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {activeArticle.title}
                </h1>
                
                <div className="text-xs text-gray-400 italic">
                  Authored by <strong className="text-gray-300 not-italic font-medium">{activeArticle.author}</strong>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-6 text-sm text-gray-300 font-light leading-relaxed">
                {activeArticle.sections.map((sec, idx) => (
                  <div key={idx} id={`section-${idx}`} className="space-y-3 scroll-mt-20">
                    <h3 className="text-lg font-bold text-white border-b border-gray-850 pb-1.5 pt-4">
                      {sec.title}
                    </h3>
                    <p className="whitespace-pre-wrap">{sec.body}</p>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              {activeArticle.comparisonTable && (
                <div id="section-compare" className="space-y-3 pt-6 border-t border-gray-850 scroll-mt-20">
                  <h3 className="text-lg font-bold text-white">Comparison Matrix</h3>
                  <div className="overflow-x-auto border border-gray-850 rounded-2xl">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-900/40 border-b border-gray-850 text-gray-400">
                          {activeArticle.comparisonTable.headers.map((h, i) => (
                            <th key={i} className="p-4 font-bold text-white">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-850/60">
                        {activeArticle.comparisonTable.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-gray-850/10">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4 text-gray-300">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* FAQs Accordion */}
              {activeArticle.faqs.length > 0 && (
                <div id="section-faqs" className="space-y-4 pt-8 border-t border-gray-850 scroll-mt-20">
                  <h3 className="text-xl font-bold text-white">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {activeArticle.faqs.map((faq, idx) => {
                      const isOpen = openFaqIndex === idx;
                      return (
                        <div key={idx} className="bg-gray-900/40 border border-gray-850 rounded-xl overflow-hidden">
                          <button
                            onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                            className="w-full text-left p-4 font-bold text-sm text-white flex justify-between items-center hover:bg-gray-800/10 transition-colors"
                          >
                            <span>{faq.q}</span>
                            {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                          </button>
                          {isOpen && (
                            <div className="p-4 pt-0 text-xs text-gray-300 font-light leading-relaxed border-t border-gray-850/60">
                              {faq.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Guides Panel */}
          <div className="pt-8 border-t border-gray-900 no-print space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" />
              <span>Related Educational Guides</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {getRelatedGuides(activeArticle).map((art) => (
                <div
                  key={art.id}
                  onClick={() => onSelectArticle(art.id)}
                  className="glass-panel hover:bg-gray-805/30 rounded-2xl p-5 border border-white/5 cursor-pointer flex flex-col justify-between group/related"
                >
                  <div className="space-y-2">
                    <span className="text-[9px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold">{art.category}</span>
                    <h5 className="font-bold text-white text-sm group-hover/related:text-blue-400 transition-colors line-clamp-1">{art.title}</h5>
                    <p className="text-[11px] text-gray-450 line-clamp-2 leading-relaxed">{art.description}</p>
                  </div>
                  <div className="flex items-center justify-end text-[9px] text-blue-400 font-semibold group-hover/related:translate-x-1 transition-transform pt-3 border-t border-gray-850/60 mt-4">
                    <span>Read Now</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        // --- ARTICLE INDEX LIST VIEW ---
        <div className="space-y-6">
          <div className="text-center space-y-2 py-4">
            <h1 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
              <BookOpen className="text-blue-500 w-8 h-8" />
              <span>Material Knowledge & Guides</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light">
              Read professional articles, structural engineering methodologies, and interior design buying guides.
            </p>
          </div>

          {/* Search bar & Category tabs */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="w-full md:max-w-md relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
              <input
                type="search"
                autoComplete="off"
                placeholder="Search all 120 educational guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-800/40 border border-gray-700/60 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs"
              />
            </div>

            {/* Category selection */}
            <div className="flex flex-wrap gap-1.5 justify-center md:justify-end max-w-xl">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold border transition-all ${
                    selectedCategory === cat
                      ? 'bg-blue-600 border-blue-500 text-white shadow shadow-blue-600/15'
                      : 'bg-gray-850 border-gray-700/50 text-gray-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="text-xs text-gray-500">
            Found <strong className="text-white">{filteredArticles.length}</strong> guides matching filters
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => {
              const isBookmarked = bookmarkedArticles.includes(art.id);
              return (
                <Link key={art.id} href={`/guide/${art.id}`} className="block">
                  <div
                    className="glass-panel glass-panel-hover rounded-2xl p-6 border border-white/5 cursor-pointer flex flex-col justify-between group/guide relative h-full"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] text-gray-455 bg-transparent">
                        <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                          {art.category}
                        </span>
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{art.readingTime}</span>
                          </div>
                          <button
                            onClick={(e) => toggleBookmark(art.id, e)}
                            className={`p-1 rounded border transition-all ${
                              isBookmarked
                                ? 'bg-amber-500/10 border-amber-500/20 text-amber-400'
                                : 'bg-gray-800/40 border-gray-700/50 text-gray-500 hover:text-white'
                            }`}
                            title="Bookmark Guide"
                          >
                            <Bookmark className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <h4 className="font-bold text-white group-hover/guide:text-blue-400 transition-colors text-base line-clamp-2">
                        {art.title}
                      </h4>
                      
                      <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed font-light">
                        {art.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end text-[10px] text-blue-400 font-semibold group-hover/guide:translate-x-1 transition-transform border-t border-gray-850/60 pt-4 mt-6">
                      <span>Read Guide</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1" />
                    </div>
                  </div>
                </Link>
              );
            })}

            {filteredArticles.length === 0 && (
              <div className="col-span-full py-16 text-center text-gray-400 text-sm">
                No articles found matching your query filters.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
