import React, { useState } from 'react';
import { Material, materialsData } from '../data/materialsData';
import { translations, Language } from '../data/translations';
import { Star, Leaf, Award, CheckCircle, HelpCircle, RefreshCw, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MaterialSelectorProps {
  lang: Language;
  onSelectMaterial: (id: string) => void;
}

export default function MaterialSelector({ lang, onSelectMaterial }: MaterialSelectorProps) {
  const t = translations[lang];

  // Form states
  const [purpose, setPurpose] = useState<string>('');
  const [budget, setBudget] = useState<'Budget' | 'Mid' | 'Premium'>('Mid');
  const [durability, setDurability] = useState<number>(3); // 1-5 scale
  const [ecoFriendly, setEcoFriendly] = useState<boolean>(false);

  const [results, setResults] = useState<Material[]>([]);
  const [searched, setSearched] = useState(false);

  const handleRecommend = (e: React.FormEvent) => {
    e.preventDefault();

    // Matching logic
    const recommendations = materialsData.map((mat) => {
      let score = 0;

      // Match group/purpose keywords
      const matSearchText = [
        mat.group,
        mat.category,
        mat.name,
        ...mat.bestFor
      ].join(' ').toLowerCase();

      if (purpose && matSearchText.includes(purpose.toLowerCase())) {
        score += 40;
      }

      // Budget check
      if (mat.priceRange === budget) {
        score += 30;
      } else if (
        (budget === 'Premium' && mat.priceRange === 'Mid') ||
        (budget === 'Mid' && mat.priceRange === 'Budget')
      ) {
        score += 15; // partial match
      }

      // Durability check
      if (mat.durability >= durability) {
        score += 20;
      } else {
        score += (mat.durability / durability) * 10;
      }

      // Eco Check
      if (ecoFriendly) {
        if (mat.ecoScore >= 4) {
          score += 10;
        } else if (mat.ecoScore >= 3) {
          score += 5;
        }
      } else {
        score += 10; // neutral
      }

      return { mat, score };
    })
    .sort((a, b) => b.score - a.score)
    .filter((item) => item.score > 25)
    .map((item) => item.mat)
    .slice(0, 5); // top 5 recommendations

    setResults(recommendations);
    setSearched(true);

    // Confetti!
    if (recommendations.length > 0) {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 }
      });
    }
  };

  const handleReset = () => {
    setPurpose('');
    setBudget('Mid');
    setDurability(3);
    setEcoFriendly(false);
    setResults([]);
    setSearched(false);
  };

  const purposes = [
    { key: 'foundation', label: 'Heavy Foundation & Structural Support' },
    { key: 'wall', label: 'Wall Masonry & Partitions' },
    { key: 'roofing', label: 'Roofing & Weatherproofing' },
    { key: 'cabinet', label: 'Kitchen Cabinets & Furniture' },
    { key: 'water', label: 'Plumbing & Water Management' },
    { key: 'electrical', label: 'Electrical Wiring & Power Outlets' },
    { key: 'solar', label: 'Alternative Solar Power Generation' },
    { key: 'tools', label: 'Repair & Craft Hand/Power Tools' },
    { key: 'fertilizers', label: 'Agricultural Soil & Crop Fertilization' },
    { key: 'fabrics', label: 'Clothing, Bedsheets & Textiles' },
    { key: 'medical', label: 'Sterile Consumables & Lab Ware' },
    { key: 'crafts', label: 'Educational DIY School Projects' },
  ];

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto px-4">
      {/* Title */}
      <div className="text-center space-y-2 py-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <Compass className="text-blue-500 w-8 h-8" />
          <span>{t.selectorTitle}</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light">
          {t.selectorSubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        
        {/* Wizard Form */}
        <form onSubmit={handleRecommend} className="glass-panel rounded-2xl p-6 space-y-5 md:col-span-2 border border-white/5">
          {/* Purpose */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t.purposeLabel}
            </label>
            <select
              value={purpose}
              required
              suppressHydrationWarning={true}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full bg-gray-800/60 border border-gray-700/60 rounded-xl px-3 py-2.5 text-white outline-none focus:border-blue-500 text-sm"
            >
              <option value="">Choose application...</option>
              {purposes.map((p) => (
                <option key={p.key} value={p.key}>{p.label}</option>
              ))}
            </select>
          </div>

          {/* Budget */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {t.budgetLabel}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Budget', 'Mid', 'Premium'] as const).map((level) => (
                <button
                  type="button"
                  key={level}
                  onClick={() => setBudget(level)}
                  className={`py-2 px-1 text-xs font-semibold rounded-lg border transition-all ${
                    budget === level
                      ? 'bg-blue-600 border-blue-500 text-white'
                      : 'bg-gray-800/40 border-gray-700/60 text-gray-400 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Durability */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider flex justify-between">
              <span>Required Durability</span>
              <span className="text-blue-400 font-bold">{durability}/5</span>
            </label>
            <input
              type="range"
              min="1"
              max="5"
              value={durability}
              onChange={(e) => setDurability(Number(e.target.value))}
              className="w-full h-1.5 bg-gray-850 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
          </div>

          {/* Eco Friendly */}
          <div className="space-y-1.5">
            <label className="flex items-center gap-2 cursor-pointer py-1 select-none text-sm text-gray-300">
              <input
                type="checkbox"
                checked={ecoFriendly}
                onChange={(e) => setEcoFriendly(e.target.checked)}
                className="w-4.5 h-4.5 text-emerald-600 border-gray-700 rounded focus:ring-emerald-500 focus:ring-offset-gray-950"
              />
              <span>Prioritize Eco-friendly Materials</span>
            </label>
          </div>

          {/* Submit */}
          <div className="pt-2 flex gap-3">
            <button
              type="submit"
              className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all text-sm shadow-md shadow-blue-600/10"
            >
              {t.findBestButton}
            </button>
            {searched && (
              <button
                type="button"
                onClick={handleReset}
                className="p-2.5 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 text-gray-400 hover:text-white transition-all"
                title="Reset"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>

        {/* Results Block */}
        <div className="md:col-span-3 space-y-4">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <span>{t.resultsTitle}</span>
          </h3>

          {searched ? (
            <div className="space-y-4">
              {results.map((mat, idx) => (
                <div
                  key={mat.id}
                  onClick={() => onSelectMaterial(mat.id)}
                  className="glass-panel hover:bg-gray-800/40 rounded-2xl p-5 border border-white/5 flex flex-col sm:flex-row justify-between sm:items-center gap-4 cursor-pointer transition-all"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-400">
                        {idx + 1}. Recommended Match
                      </span>
                      <span className="text-xs text-gray-400">{mat.category}</span>
                    </div>
                    <h4 className="text-lg font-bold text-white hover:text-blue-400 transition-colors">
                      {mat.name}
                    </h4>
                    <p className="text-xs text-gray-400 line-clamp-2">
                      {mat.description}
                    </p>
                  </div>

                  <div className="flex sm:flex-col items-end gap-3 sm:gap-1.5 text-xs text-right shrink-0 border-t sm:border-t-0 border-gray-850 pt-2 sm:pt-0">
                    <div className="flex items-center gap-1.5 text-gray-300">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{mat.durability}/5 Star</span>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-400">
                      <Leaf className="w-3.5 h-3.5" />
                      <span>Eco: {mat.ecoScore}/5</span>
                    </div>
                    <span className="text-gray-400">Price: <strong className="text-gray-200">{mat.priceRange}</strong></span>
                  </div>
                </div>
              ))}

              {results.length === 0 && (
                <div className="glass-panel rounded-2xl p-8 text-center text-gray-400 text-sm">
                  No materials matched your filter requirements. Try expanding your search options or resetting filters.
                </div>
              )}
            </div>
          ) : (
            <div className="glass-panel rounded-2xl p-12 text-center text-gray-400 text-sm space-y-2">
              <HelpCircle className="w-10 h-10 mx-auto text-gray-600" />
              <p>Configure the Selector parameters on the left and tap "Find Best Materials" to analyze recommended materials.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
