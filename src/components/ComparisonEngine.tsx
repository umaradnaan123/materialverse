import React, { useState } from 'react';
import { Material, materialsData } from '../data/materialsData';
import { translations, Language } from '../data/translations';
import { Star, Leaf, Award, ShieldCheck, Scale, X, HelpCircle } from 'lucide-react';

interface ComparisonEngineProps {
  lang: Language;
  compareList: Material[];
  onRemoveFromCompare: (id: string) => void;
  onClearCompare: () => void;
  onSelectMaterial: (id: string) => void;
}

export default function ComparisonEngine({
  lang,
  compareList,
  onRemoveFromCompare,
  onClearCompare,
  onSelectMaterial,
}: ComparisonEngineProps) {
  const t = translations[lang];

  // States to assign selected materials to specific columns (up to 3)
  const [col1, setCol1] = useState<string>(compareList[0]?.id || '');
  const [col2, setCol2] = useState<string>(compareList[1]?.id || '');
  const [col3, setCol3] = useState<string>(compareList[2]?.id || '');

  const m1 = materialsData.find((m) => m.id === col1);
  const m2 = materialsData.find((m) => m.id === col2);
  const m3 = materialsData.find((m) => m.id === col3);

  const activeCols = [m1, m2, m3].filter((x): x is Material => !!x);

  const handleClear = () => {
    setCol1('');
    setCol2('');
    setCol3('');
    onClearCompare();
  };

  return (
    <div className="space-y-8 animate-fade-in max-w-6xl mx-auto px-4">
      {/* Title */}
      <div className="text-center space-y-2 py-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <Scale className="text-blue-500 w-8 h-8" />
          <span>{t.compareTitle}</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light">
          {t.compareSubtitle}
        </p>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { id: col1, setter: setCol1, label: "Slot 1" },
          { id: col2, setter: setCol2, label: "Slot 2" },
          { id: col3, setter: setCol3, label: "Slot 3" },
        ].map((slot, index) => {
          const selectedMat = materialsData.find((m) => m.id === slot.id);
          return (
            <div key={index} className="glass-panel rounded-2xl p-5 space-y-4 relative border border-white/5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{slot.label}</span>
                {selectedMat && (
                  <button
                    onClick={() => {
                      slot.setter('');
                      onRemoveFromCompare(selectedMat.id);
                    }}
                    className="p-1 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <select
                value={slot.id}
                suppressHydrationWarning={true}
                onChange={(e) => slot.setter(e.target.value)}
                className="w-full bg-gray-800/60 border border-gray-700/60 rounded-xl px-3 py-2.5 text-white outline-none focus:border-blue-500 text-sm"
              >
                <option value="">{t.selectToCompare}...</option>
                {materialsData.map((m) => (
                  <option key={m.id} value={m.id}>
                    [{m.category}] {m.name}
                  </option>
                ))}
              </select>

              {selectedMat && (
                <div className="space-y-1">
                  <span className="text-xs text-blue-400 font-semibold">{selectedMat.category}</span>
                  <h4 className="font-bold text-white line-clamp-1">{selectedMat.name}</h4>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Clear Button */}
      {activeCols.length > 0 && (
        <div className="flex justify-end px-2">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-xs font-semibold text-rose-400 bg-rose-500/10 border border-rose-500/25 rounded-xl hover:bg-rose-500/20 transition-all"
          >
            {t.compareClear}
          </button>
        </div>
      )}

      {/* Comparison Grid Table */}
      {activeCols.length > 0 ? (
        <div className="glass-panel rounded-3xl overflow-hidden border border-white/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-850 bg-gray-900/40">
                  <th className="p-5 text-sm font-semibold text-gray-400 w-1/4">Specification</th>
                  {activeCols.map((col, idx) => (
                    <th key={idx} className="p-5 text-sm font-bold text-white w-1/4">
                      <button 
                        onClick={() => onSelectMaterial(col.id)}
                        className="hover:text-blue-400 transition-colors text-left"
                      >
                        {col.name}
                      </button>
                    </th>
                  ))}
                  {/* Fill empty columns up to 3 */}
                  {[...Array(3 - activeCols.length)].map((_, i) => (
                    <th key={i} className="p-5 text-gray-600 w-1/4 italic font-normal text-sm">Empty Slot</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-850/60 text-sm">
                {/* Category Group */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Category Group</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-200">{col.group}</td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Estimated Lifespan */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Estimated Lifespan</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-200 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-blue-400" />
                      <span>{col.lifespan}</span>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Durability Rating */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Durability Rating</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-200">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < col.durability ? 'text-amber-400 fill-amber-400' : 'text-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Price Segment */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Price Segment</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-200">
                      <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        col.priceRange === 'Premium' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                        col.priceRange === 'Mid' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {col.priceRange}
                      </span>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Price Estimation */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Price Estimate</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-emerald-400 font-bold">{col.priceEstimation}</td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Sustainability (Eco Score) */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Sustainability (Eco Score)</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-emerald-400 flex items-center gap-1.5">
                      <Leaf className="w-4 h-4" />
                      <span>{col.ecoScore} / 5</span>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Environmental Impact */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Environmental Impact</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-300 text-xs leading-relaxed max-w-[200px]">{col.ecoImpact}</td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Quality Grades */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Quality Grades</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-300 text-xs">
                      <ul className="list-disc list-inside space-y-1">
                        {col.grades.map((grade, gIdx) => <li key={gIdx}>{grade}</li>)}
                      </ul>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* BIS Standards */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">BIS / ISI Standards</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-300 text-xs font-mono">
                      {col.standards.join(', ') || 'N/A'}
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Advantages */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Key Advantages</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-300 text-xs">
                      <ul className="list-disc list-inside space-y-1 text-emerald-400">
                        {col.pros.slice(0, 3).map((p, pIdx) => <li key={pIdx} className="text-gray-300"><span className="text-emerald-500">•</span> {p}</li>)}
                      </ul>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>

                {/* Disadvantages */}
                <tr>
                  <td className="p-5 text-gray-400 font-medium">Disadvantages</td>
                  {activeCols.map((col, idx) => (
                    <td key={idx} className="p-5 text-gray-300 text-xs">
                      <ul className="list-disc list-inside space-y-1 text-rose-400">
                        {col.cons.slice(0, 3).map((c, cIdx) => <li key={cIdx} className="text-gray-300"><span className="text-rose-500">•</span> {c}</li>)}
                      </ul>
                    </td>
                  ))}
                  {[...Array(3 - activeCols.length)].map((_, i) => <td key={i} className="p-5"></td>)}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="glass-panel rounded-3xl p-12 text-center text-gray-400 max-w-md mx-auto space-y-3">
          <HelpCircle className="w-12 h-12 text-gray-500 mx-auto" />
          <h4 className="font-bold text-white">Compare Matrix is Empty</h4>
          <p className="text-xs leading-relaxed">
            Select materials from the slots above or navigate the library and tap "Add to Compare" on any material.
          </p>
        </div>
      )}
    </div>
  );
}
