export interface Category {
  id: string;
  name: string;
  description: string;
  overview: string;
  subcategories: string[];
  materials: string[];
  faqs: { q: string; a: string }[];
}

export const categoriesData: Category[] = [
  {
    id: "construction",
    name: "Construction Materials",
    description: "Raw structural building materials, bonding agents, rebar reinforcement, aggregates, and masonry blocks.",
    overview: "Explore core civil construction materials including Portland cement, TMT steel rebars, masonry bricks, AAC blocks, and waterproofing sealants verified against BIS and international codes.",
    subcategories: ["Binding Agents", "Steel Reinforcement", "Masonry & Walling", "Chemicals & Sealants"],
    materials: ["cement", "steel", "bricks", "concrete-blocks", "aac-blocks", "waterproofing", "roofing"],
    faqs: [
      { q: "What are the most commonly specified construction materials in India?", a: "Ordinary Portland Cement (OPC), Portland Pozzolana Cement (PPC), Thermo-Mechanically Treated (TMT) steel reinforcement bars, and clay/concrete bricks represent the core structural specifications." },
      { q: "Which standards regulate building materials quality?", a: "The Bureau of Indian Standards (BIS) publishes specific IS codes (such as IS 456 for structural concrete and IS 1786 for rebar steel) that define licensing compliance." }
    ]
  },
  {
    id: "interior-finishes",
    name: "Interior Finishes & Flooring",
    description: "Surface materials, flooring tiles, wood panels, laminates, marbles, granites, and wall coatings.",
    overview: "Browse premium interior surfacing options including ceramic and vitrified floor tiles, architectural marbles, natural granite slabs, interior plywood grades, laminates, and decorative paints.",
    subcategories: ["Flooring & Cladding", "Wood & Panels", "Laminates & Veneers", "Paints & Coatings"],
    materials: ["tiles", "marble", "granite", "plywood", "laminates", "glass", "paints-coatings"],
    faqs: [
      { q: "What is the difference between vitrified tiles and ceramic tiles?", a: "Vitrified tiles are made using hydraulic dust pressing, forming a glass-like dense structure that makes them stronger, less porous, and highly stain-resistant compared to traditional ceramic tiles." },
      { q: "Which plywood grade is recommended for kitchen cabinets?", a: "Boiling Water Resistant (BWR) or Boiling Water Proof (BWP) marine grade plywood (IS 710) is specified for areas with high moisture exposure." }
    ]
  },
  {
    id: "electrical",
    name: "Electrical Materials",
    description: "Power cabling, wiring ducts, circuit protection breakers, switches, lighting, and solar photovoltaic systems.",
    overview: "Examine safe electrical hardware standards: FR/FRLS insulated copper wiring, MCCBs, modular distribution switchgear, LED systems, and green solar panels.",
    subcategories: ["Wiring & Cabling", "Switchgear & Protection", "Luminaires & Lighting", "Solar Energy Systems"],
    materials: ["electrical-wires", "switches-switchgear", "lighting-luminaires", "solar-panels"],
    faqs: [
      { q: "What do FR and FRLS mean in electrical wiring insulation?", a: "FR stands for Flame Retardant, and FRLS stands for Flame Retardant Low Smoke. FRLS wires emit significantly less toxic acid smoke during fire accidents, aiding visibility." },
      { q: "How are solar panels categorized for residential installations?", a: "They are primarily divided into Monocrystalline (highest efficiency, dark tone) and Polycrystalline (mid-efficiency, blue tint) panels." }
    ]
  },
  {
    id: "plumbing",
    name: "Plumbing & Sanitaryware",
    description: "Water distribution piping, drainage systems, sanitary fittings, valves, and water storage tanks.",
    overview: "Explore plumbing networks: lead-free PVC, CPVC, and UPVC pipe configurations, fittings, valves, water storage tanks, and premium sanitaryware fixtures.",
    subcategories: ["Distribution Pipes", "Drainage & Sewerage", "Valves & Fittings", "Sanitary Fixtures"],
    materials: ["pipes-fittings", "valves-controls", "sanitaryware-fixtures", "water-tanks"],
    faqs: [
      { q: "When should I choose CPVC over standard PVC pipes?", a: "CPVC (Chlorinated Polyvinyl Chloride) is treated to withstand temperatures up to 93°C, making it ideal for hot and cold potable water distribution, whereas PVC is only rated for cold water." },
      { q: "What are the common water tank materials?", a: "Rotomolded Linear Low-Density Polyethylene (LLDPE) is highly popular due to its food-grade safety, UV stabilization, and structural durability." }
    ]
  },
  {
    id: "tools-hardware",
    name: "Tools & Hardware",
    description: "Hand tools, power tools, structural fasteners, hinges, drawer slides, and locks.",
    overview: "Access specification checklists for manual hand tools, dynamic power tools, industrial fasteners, architectural hinges, locks, and furniture hardware fittings.",
    subcategories: ["Hand Tools", "Power Tools", "Fasteners & Fixing", "Cabinet Hardware"],
    materials: ["hand-tools", "power-tools", "fasteners-fixtures", "furniture-hardware"],
    faqs: [
      { q: "What is the recommended material for high-strength fasteners?", a: "Grade 8.8 or Grade 10.9 medium carbon steel alloys (quenched and tempered) are specified for heavy structural loads." },
      { q: "What is the advantage of soft-close hinges?", a: "They contain hydraulic dampeners that control closure speed, protecting cabinetry frames from impact wear and reducing noise." }
    ]
  },
  {
    id: "agriculture",
    name: "Agricultural Materials",
    description: "Drip irrigation kits, sprinklers, shade nets, geotextiles, seeds, and fertilizers.",
    overview: "Audit agricultural engineering inputs: micro-drip irrigation setups, climate shade nets, soil stabilization geotextiles, verified seeds, and organic/inorganic soil nutrients.",
    subcategories: ["Micro Irrigation", "Crop Protection", "Soil Geotextiles", "Seeds & Nutrients"],
    materials: ["drip-irrigation", "shade-nets", "geotextiles", "seeds-fertilizers"],
    faqs: [
      { q: "What is the life expectancy of HDPE drip irrigation pipes?", a: "High-Density Polyethylene (HDPE) lines containing carbon black UV stabilizers typically last between 10 to 15 years under direct field sunlight." },
      { q: "How do woven geotextiles benefit agricultural roads?", a: "They distribute heavy wheel loads, prevent subgrade soil mixing, and allow water drainage while retaining soil structure." }
    ]
  },
  {
    id: "textiles",
    name: "Textile Materials",
    description: "Natural fibers, synthetic fibers, blended yarns, weaving structures, and technical fabrics.",
    overview: "Compare textile engineering fiber parameters: organic cotton, high-strength polyester filaments, blended yarns, and technical flame-resistant fabric composites.",
    subcategories: ["Natural Fibers", "Synthetic Fibers", "Blended Yarns", "Technical Fabrics"],
    materials: ["natural-fibers", "synthetic-fibers", "blended-yarns", "technical-textiles"],
    faqs: [
      { q: "What makes technical textiles different from standard fabrics?", a: "Technical textiles are engineered for functional performance (such as flame retardancy, high tensile strength, chemical barrier properties, or filtration) rather than aesthetics." },
      { q: "How is polyester fiber manufactured?", a: "It is synthesized via a chemical reaction between ethylene glycol and terephthalic acid (PET polymerization), extruded into continuous filament strands." }
    ]
  },
  {
    id: "eco-friendly-materials",
    name: "Eco-Friendly & Green Materials",
    description: "Low-carbon building components, bamboo, hempcrete, recycled composites, and green insulation.",
    overview: "Explore sustainable building composites: bio-based hempcrete blocks, rapid-renewable structural bamboo, recycled glass insulations, and fly-ash blended geopolymer cements.",
    subcategories: ["Bio-Based Composites", "Recycled Aggregates", "Natural Insulators", "Low-Carbon Binders"],
    materials: ["bamboo-structural", "hempcrete-blocks", "recycled-composites", "green-insulation"],
    faqs: [
      { q: "Why is hempcrete considered carbon-negative?", a: "Hemp plants absorb more CO2 during growth than the emissions generated while processing and curing the lime-based hempcrete binder." },
      { q: "Can structural bamboo replace reinforcing steel?", a: "Bamboo has high tensile strength, but because of shrinkage, vulnerability to decay, and connection challenges, it is used as a stand-alone framing element rather than a direct rebar substitute in high-stress concrete." }
    ]
  },
  {
    id: "medical-laboratory",
    name: "Medical & Laboratory Materials",
    description: "Sterile surgical polymers, chemical-resistant glass, cleanroom metals, and biological safety barriers.",
    overview: "Review medical-grade materials: Borosilicate glassware, chemical-inert cleanroom stainless steel alloys, biocompatible polymers, and biosafety shielding.",
    subcategories: ["Inert Glassware", "Cleanroom Metals", "Medical Polymers", "Biosafety Shielding"],
    materials: ["medical-glassware", "cleanroom-metals", "medical-polymers", "biosafety-barriers"],
    faqs: [
      { q: "Why is Borosilicate 3.3 glass standard in chemistry laboratories?", a: "It has a very low coefficient of thermal expansion, making it highly resistant to thermal shock cracking when exposed to rapid heating or cooling." },
      { q: "Which grade of stainless steel is used in surgical cleanrooms?", a: "Grade 316L (Low Carbon containing Molybdenum) is specified due to its superior resistance to pitting corrosion from sterilization chemicals." }
    ]
  }
];
