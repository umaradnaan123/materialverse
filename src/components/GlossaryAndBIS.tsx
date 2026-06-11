import React, { useState } from 'react';
import { translations, Language } from '../data/translations';
import { BookOpen, Search, HelpCircle, ChevronDown, ChevronUp, FileText } from 'lucide-react';

interface GlossaryAndBISProps {
  lang: Language;
}

export default function GlossaryAndBIS({ lang }: GlossaryAndBISProps) {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'bis' | 'faq' | 'glossary'>('bis');
  const [searchQuery, setSearchQuery] = useState('');

  // BIS Standards list
  const bisStandards = [
    { code: "IS 269", title: "Ordinary Portland Cement (33 Grade) Specification", material: "Cement" },
    { code: "IS 8112", title: "Ordinary Portland Cement (43 Grade) Specification", material: "Cement" },
    { code: "IS 12269", title: "Ordinary Portland Cement (53 Grade) Specification", material: "Cement" },
    { code: "IS 1489", title: "Portland Pozzolana Cement Specification", material: "Cement" },
    { code: "IS 1786", title: "High Strength Deformed Steel Bars for Concrete Reinforcement", material: "Steel" },
    { code: "IS 2062", title: "Hot Rolled Medium and High Tensile Structural Steel", material: "Steel" },
    { code: "IS 1077", title: "Common Burnt Clay Building Bricks Specification", material: "Bricks" },
    { code: "IS 12894", title: "Pulverized Fuel Ash Lime Bricks Specification", material: "Bricks" },
    { code: "IS 383", title: "Coarse and Fine Aggregates from Natural Sources for Concrete", material: "Aggregates" },
    { code: "IS 2185", title: "Concrete Masonry Units Specification (Solid/Hollow Blocks)", material: "Concrete Blocks" },
    { code: "IS 9103", title: "Admixtures for Concrete Specification", material: "Construction Chemicals" },
    { code: "IS 2645", title: "Integral Waterproofing Compounds for Cement Mortar/Concrete", material: "Waterproofing" },
    { code: "IS 654", title: "Clay Roofing Tiles specification", material: "Roofing" },
    { code: "IS 15489", title: "Plastic Emulsion Paint for Interior Use Specification", material: "Paints" },
    { code: "IS 15622", title: "Ceramic Tiles - Press-glazed and Vitrified Specification", material: "Tiles" },
    { code: "IS 710", title: "Marine Plywood Specification", material: "Plywood" },
    { code: "IS 303", title: "Plywood for General Purposes Specification", material: "Plywood" },
    { code: "IS 2046", title: "Decorative High-Pressure Laminates Specification", material: "Laminates" },
    { code: "IS 694", title: "PVC Insulated Cables for Working Voltages up to 1100V", material: "Electrical Wires" },
    { code: "IS 3854", title: "Switches for Domestic and Similar Fixed Electrical Installations", material: "Switches & Sockets" },
    { code: "IS 15778", title: "Chlorinated Polyvinyl Chloride (CPVC) Pipes for Potable Water", material: "Pipes & Fittings" },
    { code: "IS 12701", title: "Rotational Moulded Polyethylene Water Storage Tanks", material: "Water Tanks" },
    { code: "IS 2556", title: "Vitreous Sanitary Appliances Specification", material: "Sanitary Ware" },
    { code: "IS 8931", title: "Copper Alloy Fancy Single Taps & Valves specification", material: "Bathroom Fittings" },
  ];

  // FAQ list
  const faqs = [
    {
      q: "What is the difference between OPC and PPC cement?",
      a: "OPC (Ordinary Portland Cement) sets faster and gets high early strength, which makes it ideal for structural elements like columns and beams. PPC (Portland Pozzolana Cement) contains fly ash, has low hydration heat, resists cracks and chemical attacks better, and is highly recommended for brickwork masonry, plastering, and marine environments."
    },
    {
      q: "Why is M-Sand preferred over natural river sand?",
      a: "Manufactured Sand (M-Sand) is produced by crushing hard granite rocks. Unlike river sand, it has no organic particles, clay or silt content, which ensures stronger concrete. Additionally, choosing M-Sand prevents ecological damage to riverbeds caused by heavy sand mining."
    },
    {
      q: "What does thread count mean in sheets and fabrics?",
      a: "Thread count is the total number of horizontal (weft) and vertical (warp) threads in one square inch of fabric. Generally, higher thread counts (200-400) mean softer and tighter fabrics, but thread counts above 800 are often marketing gimmicks created by twisting multi-ply low-grade yarns together."
    },
    {
      q: "What is the difference between vitrified and ceramic tiles?",
      a: "Vitrified tiles are made of clay and silica dust fired at extreme temperatures, forming a glass-like, non-porous tile that is highly durable, stain-proof, and suitable for high-traffic floor areas. Ceramic tiles are baked at lower temperatures, are softer, absorb more water, and are best suited for indoor walls."
    },
    {
      q: "Are AAC blocks stronger than red clay bricks?",
      a: "Red clay bricks have higher compressive strengths and load-bearing properties. However, AAC blocks are 1/3rd the weight of bricks, offer vastly superior thermal insulation (keeping interiors cooler), and speed up construction significantly."
    }
  ];

  // Glossary list
  const glossary = [
    { term: "Admixture", definition: "A chemical substance added to a concrete mix to change its setting rate, strength, or workability." },
    { term: "Ductility", definition: "The physical property of a material (like steel rebar) to stretch or bend without breaking during earthquakes or structural shifts." },
    { term: "Formaldehyde Emission", definition: "The gaseous release of toxic chemicals from resins used to bind engineered woods like MDF, chipboard, or plywood." },
    { term: "Patina", definition: "A natural glossy film or color change that develops on surfaces like copper, brass, and full-grain leather over time." },
    { term: "Grout", definition: "A dense fluid paste used to fill joints between tiles or seal gaps around structural elements." },
    { term: "Vapor Barrier", definition: "Any thin material (like polyethylene sheeting) designed to prevent water vapor from moving through walls or foundations." },
    { term: "FSC Certified", definition: "Forest Stewardship Council mark ensuring that wood, plywood, or paper products were sourced from responsibly managed forests." }
  ];

  // Accordion active index
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Filters
  const filteredBis = bisStandards.filter(item => 
    item.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.material.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl mx-auto px-4">
      {/* Title */}
      <div className="text-center space-y-2 py-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
          <BookOpen className="text-blue-500 w-8 h-8" />
          <span>Information Bureau</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm font-light">
          Search the official Indian standards library (BIS/ISI), glossary terms, and common material FAQs.
        </p>
      </div>

      {/* Selector Tabs */}
      <div className="flex bg-gray-900/40 p-1.5 rounded-2xl max-w-md mx-auto border border-gray-800">
        {[
          { id: 'bis', label: 'BIS/ISI Standards' },
          { id: 'faq', label: 'FAQ Accordion' },
          { id: 'glossary', label: 'Glossary Terms' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id as any);
              setSearchQuery('');
            }}
            className={`flex-1 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-blue-600 text-white shadow'
                : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Input for BIS or Glossary */}
      {activeTab !== 'faq' && (
        <div className="max-w-md mx-auto relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4.5 h-4.5" />
          <input
            type="text"
            placeholder={activeTab === 'bis' ? "Search standards code or title..." : "Search terms..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-800/40 border border-gray-700/60 text-white placeholder-gray-500 focus:border-blue-500 outline-none text-sm"
          />
        </div>
      )}

      {/* BIS Tab Content */}
      {activeTab === 'bis' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredBis.map((item, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-5 border border-white/5 space-y-2 flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                    {item.code}
                  </span>
                  <span className="text-xs text-gray-400 font-semibold">{item.material}</span>
                </div>
                <h4 className="font-bold text-white text-sm pt-1 leading-snug">{item.title}</h4>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-wider text-right flex items-center justify-end gap-1 pt-3">
                <FileText className="w-3.5 h-3.5" />
                <span>Bureau of Indian Standards Code</span>
              </div>
            </div>
          ))}
          {filteredBis.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400 text-sm">
              No matching standards found.
            </div>
          )}
        </div>
      )}

      {/* FAQ Tab Content */}
      {activeTab === 'faq' && (
        <div className="space-y-4 max-w-2xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full flex justify-between items-center p-5 text-left text-white font-bold text-sm hover:bg-gray-800/20 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-blue-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 border-t border-gray-850/60 text-xs text-gray-300 leading-relaxed font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Glossary Tab Content */}
      {activeTab === 'glossary' && (
        <div className="space-y-4 max-w-2xl mx-auto">
          {filteredGlossary.map((item, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-5 border border-white/5 space-y-2">
              <h4 className="font-bold text-white text-base">{item.term}</h4>
              <p className="text-xs text-gray-300 font-light leading-relaxed">
                {item.definition}
              </p>
            </div>
          ))}
          {filteredGlossary.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-400 text-sm">
              No glossary terms match your search query.
            </div>
          )}
        </div>
      )}
    </div>
  );
}
