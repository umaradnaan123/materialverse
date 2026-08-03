export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  lastUpdated: string;
  author: string;
  authorBio: string;
  description: string;
  content: string;
  faqs: { q: string; a: string }[];
  references: string[];
}

export const blogData: BlogPost[] = [
  {
    id: "carbon-steel-vs-stainless-steel",
    title: "Carbon Steel vs Stainless Steel: Complete Engineering Guide",
    category: "Metallurgy",
    readingTime: "12 min read",
    lastUpdated: "August 2026",
    author: "Dr. Arjan Mehta, PhD",
    authorBio: "Senior Material Scientist and metallurgy audit specialist.",
    description: "An in-depth metallurgical comparison between carbon steel and stainless steel. Learn differences in yield strength, corrosion resistance, alloying elements, and cost profiles.",
    content: "Carbon steel and stainless steel represent two of the most widely specified metallic families in structural civil engineering, manufacturing, and industrial tooling. While both alloys derive their properties primarily from iron, their specific chemical formulations, microstructure configurations, and environmental performance vectors vary drastically.\n\n### 1. Alloying Composition & Chromium Threshold\nThe structural differentiator lies in the chemical composition. Carbon steel is categorized by carbon concentrations ranging from 0.05% to 2.1% by weight. Stainless steel, on the other hand, requires a minimum chromium content of 10.5% by weight. This chromium creates an invisible, self-healing passive layer of chromium oxide, preventing oxygen from reaching the underlying iron, thereby stopping rust.\n\n### 2. Corrosion Behavior & Lifespan\n- **Carbon Steel**: Lacks chromium; highly susceptible to oxidation (rusting) if exposed to water and ambient oxygen. Often requires protective galvanization, powder coatings, or epoxy sealers. Typical lifespan in corrosive environments ranges from 15 to 40 years without intervention.\n- **Stainless Steel**: Extremely resistant to wet environments, chemical splashes, and organic acids. Perfect for food processing plants, surgical tools, and marine environments. Typical lifespan ranges from 80 to 100+ years.\n\n### 3. Mechanical & Structural Comparison\nCarbon steel generally displays superior heat treatment flexibility, allowing engineers to temper, harden, or anneal it to exact specification thresholds. For extreme structural loads, carbon steel offers highly efficient yield strength per dollar compared to premium austenitic stainless steel.",
    faqs: [
      { q: "Which steel has higher tensile strength?", a: "High carbon steels generally have higher tensile strength and hardness when heat-treated, but stainless steel retains strength better at high temperatures." },
      { q: "Is stainless steel fully rustproof?", a: "It is highly rust-resistant, but can corrode under extreme saline or high-chloride environments without proper maintenance." }
    ],
    references: [
      "ASTM A36 Standard Specification for Carbon Structural Steel",
      "ASTM A240 Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plates"
    ]
  },
  {
    id: "opc-vs-ppc-cement",
    title: "OPC vs PPC Cement: Structural Selection for Modern Civil Projects",
    category: "Civil Engineering",
    readingTime: "10 min read",
    lastUpdated: "August 2026",
    author: "Dr. Arjan Mehta, PhD",
    authorBio: "Senior Material Scientist specializing in structural concrete and compliance.",
    description: "Compare Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC) based on heat of hydration, curing times, compressive strength curves, and BIS specifications.",
    content: "In structural civil engineering, selection of the appropriate binding agent determines the structural lifespan and load characteristics of the concrete matrix. The choice between Ordinary Portland Cement (OPC) and Portland Pozzolana Cement (PPC) is one of the most critical decisions during structural planning.\n\n### 1. Ordinary Portland Cement (OPC)\nOPC is the most common cement grade globally. It consists of clinker ground with gypsum. OPC is available in three grades: OPC 33, OPC 43, and OPC 53, denoting the compressive strength after 28 days of curing. OPC exhibits a rapid rate of early strength gain, making it the choice for fast-track construction, high-rise framing, and precast concrete beams.\n\n### 2. Portland Pozzolana Cement (PPC)\nPPC incorporates pozzolanic materials (such as fly ash, volcanic ash, or calcined clay) up to 15% to 35% by weight. While PPC gains strength slower than OPC in the first 7 days, its long-term strength (at 28 days and beyond) is comparable or superior due to the secondary hydration reactions. Additionally, PPC generates lower heat of hydration, making it ideal for mass concrete work (such as dams and retaining walls).",
    faqs: [
      { q: "When should I specify OPC 53 over PPC?", a: "Specify OPC 53 for structural elements needing rapid early strength (e.g., high-rise column shuttering removal) and PPC for plastering, brickwork, and foundations." },
      { q: "Is PPC more environmentally sustainable?", a: "Yes, PPC incorporates industrial waste products like fly ash, reducing limestone extraction and lowering carbon footprint by up to 25%." }
    ],
    references: [
      "IS 12269: Specification for 53 Grade Ordinary Portland Cement",
      "IS 1489: Specification for Portland Pozzolana Cement (Part 1 - Fly Ash based)"
    ]
  },
  {
    id: "sustainable-materials-engineering",
    title: "Sustainable Engineering Materials: Lifecycle Analysis & Eco-Audits",
    category: "Sustainable Development",
    readingTime: "15 min read",
    lastUpdated: "August 2026",
    author: "Dr. Arjan Mehta, PhD",
    authorBio: "Expert auditor for industrial ecology and environmental life cycle parameters.",
    description: "A comprehensive analysis of green engineering materials. Learn lifecycle analysis (LCA), circular economy principles, and low-carbon alternatives for concrete, steel, and plastics.",
    content: `The global construction and manufacturing industries account for over 40% of carbon emissions. Transitioning to sustainable engineering materials is no longer optional—it is a regulatory and ethical requirement. An eco-audit involves calculating raw extraction energy, transportation overheads, carbon footprint, and circular recycle options.

### 1. Low-Carbon Concrete Alternatives
Cement production is responsible for ~8% of global CO2 emissions. Sustainable engineering utilizes:
- **Geopolymer Concrete**: Replaces cement entirely with fly ash or slag activated by alkaline solutions, reducing emissions by 80%.
- **Recycled Concrete Aggregate (RCA)**: Reclaims crushed structural debris to replace virgin granite aggregate, preventing landfill overflow.

### 2. Circular Metallurgy & Metals Recycling
Steel and aluminum are energy-intensive but display infinite recyclability. Processing scrap steel in an Electric Arc Furnace (EAF) consumes 75% less energy than processing raw iron ore in a Blast Furnace. Specifying circular recycled steel significantly reduces project carbon footprints.`,
    faqs: [
      { q: "What is a Life Cycle Assessment (LCA)?", a: "LCA is a standardized methodology to evaluate the environmental impacts associated with all stages of a material's life from cradle to grave." },
      { q: "Are bio-composites strong enough for load-bearing use?", a: "Currently, most bio-composites are restricted to secondary structures (interior panels, packaging) due to lower tensile strength and moisture absorption compared to carbon-fiber alloys." }
    ],
    references: [
      "ISO 14040: Environmental Management - Life Cycle Assessment - Principles and Framework",
      "World Steel Association Circular Economy Report"
    ]
  }
];
