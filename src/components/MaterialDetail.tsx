"use client";

import React, { useState, useEffect } from 'react';
import { Material, materialsData } from '../data/materialsData';
import { translations, Language } from '../data/translations';
import { 
  ArrowLeft, Star, Leaf, Award, ShieldCheck, 
  Wrench, CheckSquare, Sparkles, AlertTriangle, 
  Download, Bookmark, BookmarkCheck, Scale, Send, ShieldAlert, AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

interface MaterialDetailProps {
  materialId: string;
  lang: Language;
  onBack: () => void;
  onAddToCompare: (material: Material) => void;
  onToggleBookmark: (id: string) => void;
  bookmarks: string[];
  onSelectMaterial: (id: string) => void;
}

interface UserReview {
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export default function MaterialDetail({
  materialId,
  lang,
  onBack,
  onAddToCompare,
  onToggleBookmark,
  bookmarks,
  onSelectMaterial,
}: MaterialDetailProps) {
  const t = translations[lang];
  const material = materialsData.find((m) => m.id === materialId);
  const isBookmarked = bookmarks.includes(materialId);

  const [reviews, setReviews] = useState<UserReview[]>([]);
  const [reviewName, setReviewName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (!material) return;
    const storedReviews = localStorage.getItem(`reviews_${material.id}`);
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      const defaultMock: UserReview[] = [
        {
          userName: "Quality Inspector",
          rating: material.durability,
          comment: `Verified specimen match. Conforms to ${material.standards[0] || 'national standards'} standard specifications. Fully robust.`,
          date: "2026-05-15",
        }
      ];
      setReviews(defaultMock);
    }

    const storedChecklist = localStorage.getItem(`checklist_${material.id}`);
    if (storedChecklist) {
      setCheckedItems(JSON.parse(storedChecklist));
    } else {
      setCheckedItems({});
    }
  }, [materialId, material]);

  if (!material) {
    return (
      <div className="py-12 text-center text-red-400 font-bold">
        Material not found!
      </div>
    );
  }

  const handleCheckChange = (index: number) => {
    const newChecked = { ...checkedItems, [index.toString()]: !checkedItems[index.toString()] };
    setCheckedItems(newChecked);
    localStorage.setItem(`checklist_${material.id}`, JSON.stringify(newChecked));

    const allChecked = material.checklist.every((_, idx) => newChecked[idx.toString()]);
    if (allChecked) {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) return;

    const newReview: UserReview = {
      userName: reviewName,
      rating: reviewRating,
      comment: reviewText,
      date: new Date().toISOString().split('T')[0],
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem(`reviews_${material.id}`, JSON.stringify(updatedReviews));

    setReviewName('');
    setReviewText('');
    setReviewRating(5);
    
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.85 }
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const relatedMats = materialsData.filter((m) => material.related.includes(m.id));

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 26,
        staggerChildren: 0.08
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 300, damping: 25 } }
  };

  return (
    <motion.div 
      variants={pageVariants}
      initial="hidden"
      animate="show"
      className="space-y-8 px-4 md:px-8 max-w-5xl mx-auto"
    >
      {/* Top Navigation */}
      <div className="flex justify-between items-center no-print">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-905/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition-all text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Library</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onToggleBookmark(material.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl border transition-all text-xs font-semibold ${
              isBookmarked
                ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                : 'bg-gray-900/60 border-gray-800 text-gray-300 hover:text-white'
            }`}
          >
            {isBookmarked ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
            <span>{isBookmarked ? t.removeBookmark : t.addBookmark}</span>
          </button>

          <button
            onClick={() => onAddToCompare(material)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900/60 hover:bg-gray-800 text-gray-300 hover:text-white border border-gray-800 transition-all text-xs font-semibold"
          >
            <Scale className="w-4 h-4" />
            <span>{t.addToCompare}</span>
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-650 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 border border-blue-500/30 transition-all text-xs font-semibold"
          >
            <Download className="w-4 h-4" />
            <span>{t.downloadPdf}</span>
          </button>
        </div>
      </div>

      {/* Main Material Header Card */}
      <motion.div 
        variants={childVariants}
        className="glass-panel rounded-3xl p-6 md:p-8 space-y-6 relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

        <div className="space-y-3 relative">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {material.category}
            </span>
            <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-900 text-gray-400 border border-gray-800">
              Group: {material.group}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-none">
            {material.name}
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
            {material.description}
          </p>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1 shadow-inner">
            <span className="text-[10px] text-gray-450 uppercase tracking-wider font-bold block">{t.lifespan}</span>
            <div className="flex items-center gap-2 text-white font-black text-base md:text-lg">
              <ShieldCheck className="w-4.5 h-4.5 text-blue-400" />
              <span>{material.lifespan}</span>
            </div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1 shadow-inner">
            <span className="text-[10px] text-gray-450 uppercase tracking-wider font-bold block">{t.durability}</span>
            <div className="flex items-center gap-2 text-white font-black text-base md:text-lg">
              <Star className="w-4.5 h-4.5 text-amber-400 fill-amber-400 animate-pulse" />
              <span>{material.durability} / 5</span>
            </div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1 shadow-inner">
            <span className="text-[10px] text-gray-450 uppercase tracking-wider font-bold block">{t.priceRange}</span>
            <div className="text-white font-black text-base md:text-lg flex items-baseline gap-1">
              <span className="text-blue-400">{material.priceRange}</span>
            </div>
          </div>

          <div className="bg-gray-950/60 border border-gray-900 rounded-2xl p-4.5 space-y-1 shadow-inner">
            <span className="text-[10px] text-gray-455 uppercase tracking-wider font-bold block">{t.ecoScore}</span>
            <div className="flex items-center gap-2 text-emerald-450 font-black text-base md:text-lg">
              <Leaf className="w-4.5 h-4.5" />
              <span>{material.ecoScore} / 5</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid: Specifications & Guidelines */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Quick Metadata Specifications */}
        <motion.div variants={childVariants} className="md:col-span-1 space-y-6">
          {/* Price & Availability */}
          <div className="glass-panel rounded-2xl p-5 space-y-4 shadow-md">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Estimated Price Index</h4>
            <div className="space-y-1">
              <span className="text-xl font-extrabold text-emerald-400">{material.priceEstimation}</span>
              <p className="text-[10px] text-gray-450 leading-relaxed font-light">Approximate standard rate across dealers.</p>
            </div>
            <hr className="border-gray-900" />
            <div className="space-y-1">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.availability}</h5>
              <p className="text-xs text-gray-300 font-light leading-relaxed">{material.availability}</p>
            </div>
          </div>

          {/* BIS Standards & Grades */}
          <div className="glass-panel rounded-2xl p-5 space-y-4 shadow-md">
            <div className="flex items-center gap-2 text-blue-400">
              <Award className="w-4.5 h-4.5" />
              <h4 className="font-bold text-xs uppercase tracking-wider text-white">{t.standards}</h4>
            </div>
            <div className="flex flex-wrap gap-1">
              {material.standards.map((std, idx) => (
                <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded bg-gray-900 border border-gray-850 text-gray-300 font-mono">
                  {std}
                </span>
              ))}
            </div>
            <hr className="border-gray-900" />
            <div className="space-y-2">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.grades}</h5>
              <ul className="list-disc list-inside text-xs text-gray-300 space-y-1 font-light leading-relaxed">
                {material.grades.map((grade, idx) => (
                  <li key={idx}>{grade}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Top Brands */}
          <div className="glass-panel rounded-2xl p-5 space-y-4 shadow-md">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{t.brands}</h4>
            <div className="flex flex-wrap gap-1.5">
              {material.brands.map((brand, idx) => (
                <span key={idx} className="text-[10px] px-2.5 py-1 rounded bg-blue-950/20 text-blue-300 border border-blue-900/30 font-medium">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Descriptions & Details */}
        <motion.div variants={childVariants} className="md:col-span-2 space-y-6">
          {/* Pros & Cons Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-emerald-500 bg-emerald-950/5 shadow-md">
              <h4 className="font-bold text-emerald-450 flex items-center gap-1.5 mb-3 text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span>{t.pros}</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed font-light">
                {material.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-500 font-bold shrink-0">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-panel rounded-2xl p-5 border-l-4 border-l-rose-500 bg-rose-955/5 shadow-md">
              <h4 className="font-bold text-rose-450 flex items-center gap-1.5 mb-3 text-xs uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4 animate-bounce" />
                <span>{t.cons}</span>
              </h4>
              <ul className="space-y-2 text-xs text-gray-300 leading-relaxed font-light">
                {material.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-500 font-bold shrink-0">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Eco Impact */}
          <div className="glass-panel rounded-2xl p-6 space-y-3 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-gray-850 pb-2">
              <Leaf className="w-4.5 h-4.5 text-emerald-400" />
              <span>{t.ecoImpact}</span>
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed font-light">
              {material.ecoImpact}
            </p>
          </div>

          {/* DIY & Installation */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-gray-850 pb-2">
              <Wrench className="w-4.5 h-4.5 text-blue-400" />
              <span>{t.diyGuide}</span>
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed bg-gray-900/40 p-4 rounded-xl border border-gray-850">
              {material.diyGuide}
            </p>
            <div className="space-y-1 pt-1">
              <h5 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.maintenance}</h5>
              <p className="text-xs text-gray-300 leading-relaxed font-light">
                {material.maintenance}
              </p>
            </div>
          </div>

          {/* Interactive Verification Checklist */}
          <div className="glass-panel rounded-2xl p-6 space-y-4 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2 border-b border-gray-850 pb-2">
              <CheckSquare className="w-4.5 h-4.5 text-indigo-400" />
              <span>Interactive Material Verification Checklist</span>
            </h4>
            <p className="text-[10px] text-gray-450 leading-relaxed font-light">Tick the parameters below during logistics delivery inspection to ensure high-fidelity compliance.</p>
            <div className="space-y-2">
              {material.checklist.map((item, idx) => {
                const isChecked = !!checkedItems[idx.toString()];
                return (
                  <label
                    key={idx}
                    className={`flex items-start gap-3 p-3 rounded-xl border transition-all cursor-pointer select-none ${
                      isChecked
                        ? 'bg-indigo-500/5 border-indigo-500/20 text-gray-500'
                        : 'bg-gray-900/40 border-gray-850 text-gray-250 hover:border-gray-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckChange(idx)}
                      className="mt-0.5 w-4.5 h-4.5 text-indigo-650 border-gray-800 rounded focus:ring-indigo-550 focus:ring-offset-gray-950 focus:ring-2 bg-gray-900"
                    />
                    <span className={`text-xs ${isChecked ? 'line-through' : ''} leading-relaxed`}>{item}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Related Materials */}
          {relatedMats.length > 0 && (
            <div className="glass-panel rounded-2xl p-6 space-y-3 no-print shadow-md">
              <h4 className="text-[10px] font-bold text-gray-450 uppercase tracking-wider">{t.relatedMaterials}</h4>
              <div className="flex flex-wrap gap-2">
                {relatedMats.map((rm) => (
                  <button
                    key={rm.id}
                    onClick={() => onSelectMaterial(rm.id)}
                    className="px-3.5 py-1.5 rounded-xl bg-gray-900 border border-gray-800 hover:border-blue-500 text-xs text-gray-300 hover:text-white transition-all font-semibold shadow-sm"
                  >
                    {rm.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reviews */}
          <div className="glass-panel rounded-2xl p-6 space-y-6 shadow-md">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-gray-850 pb-3">
              {t.reviewsTitle}
            </h4>

            <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
              {reviews.map((rev, idx) => (
                <div key={idx} className="bg-gray-900/60 p-4 rounded-xl border border-gray-850 space-y-2 shadow-inner">
                  <div className="flex justify-between items-center text-[10px]">
                    <span className="font-bold text-blue-400">{rev.userName}</span>
                    <span className="text-gray-500">{rev.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-800'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed font-light">{rev.comment}</p>
                </div>
              ))}
              {reviews.length === 0 && (
                <p className="text-xs text-gray-500 italic text-center py-4">{t.noReviewsYet}</p>
              )}
            </div>

            {/* Leave a review form */}
            <form onSubmit={handleSubmitReview} className="space-y-4 pt-4 border-t border-gray-850">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-455 uppercase tracking-wider mb-1">{t.userName}</label>
                  <input
                    type="text"
                    required
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    placeholder="e.g. Inspector Raj"
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-455 uppercase tracking-wider mb-1">Rating Stars</label>
                  <select
                    value={reviewRating}
                    onChange={(e) => setReviewRating(Number(e.target.value))}
                    className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-white focus:border-blue-500 outline-none text-xs transition-colors cursor-pointer"
                  >
                    <option value={5}>5 Stars - Perfect Quality</option>
                    <option value={4}>4 Stars - Standard Quality</option>
                    <option value={3}>3 Stars - Average Grade</option>
                    <option value={2}>2 Stars - Substandard</option>
                    <option value={1}>1 Star - Defective</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-455 uppercase tracking-wider mb-1">Audit Feedback Summary</label>
                <textarea
                  rows={3}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={t.reviewPlaceholder}
                  className="w-full bg-gray-900 border border-gray-800 rounded-xl px-3.5 py-2.5 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-xs resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-650 hover:bg-blue-500 text-white font-bold transition-all w-full text-xs shadow-md shadow-blue-500/10"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{t.submitReview}</span>
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}
