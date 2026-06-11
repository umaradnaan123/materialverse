export interface RecommendationScenario {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'Construction' | 'Agricultural' | 'Solar & Energy' | 'Paint' | 'Tile & Flooring' | 'Sanitary & Bathroom' | 'Modular Kitchen' | 'Electrical' | 'Textile & Fabric' | 'Industrial & Safety';
  recommendedMaterials: string[];
  suggestedGrades: string[];
  certifications: string[];
  popularBrands: string[];
  priceRange: string;
  requiredTools: string[];
  calculatorLink: string;
  buyingChecklist: string[];
  relatedGuides: string[];
  commonMistakes: string[];
  budgetAlternatives: string[];
  maintenanceTips: string;
}

export const recommendationsData: RecommendationScenario[] = [
  {
    "id": "build-new-home",
    "title": "Building a New Home",
    "description": "Comprehensive guidance for gray structures, masonry, plumbing, electrical, and finishing for custom residential builds.",
    "icon": "🏠",
    "category": "Construction",
    "recommendedMaterials": [
      "OPC/PPC Cement",
      "TMT Reinforcement Steel",
      "Red Clay Bricks / AAC Blocks",
      "FRLSH Copper Wires",
      "CPVC/uPVC Plumbing Pipes",
      "Acrylic Emulsion Paint"
    ],
    "suggestedGrades": [
      "OPC 43/53 Grade, Fe 500D TMT Steel, Class I Red Bricks"
    ],
    "certifications": [
      "IS 12269 (Cement), IS 1786 (Steel), IS 694 (Wires), IS 15622 (Tiles)"
    ],
    "popularBrands": [
      "UltraTech, Tata Tiscon, Kajaria, Polycab, Dr. Fixit, Asian Paints"
    ],
    "priceRange": "₹1,500 - ₹2,500 per sq. ft. (construction cost range)",
    "requiredTools": [
      "Concrete Mixer",
      "Rebar Cutter",
      "Spirit Level",
      "Trowels",
      "Wire Strippers"
    ],
    "calculatorLink": "house-construction",
    "buyingChecklist": [
      "Perform soil bearing capacity test before deciding foundation depth.",
      "Ensure steel rebars are clear of rust before pouring concrete.",
      "Maintain a 50mm cover block for foundation reinforcement grids."
    ],
    "relatedGuides": [
      "best-steel-house-construction",
      "beginners-guide-to-construction-materials",
      "steel-weight-calculation-guide"
    ],
    "commonMistakes": [
      "Using PPC cement for columns and beams instead of OPC (OPC sets faster for load-bearing structures).",
      "Skipping waterproofing in basements and toilets."
    ],
    "budgetAlternatives": [
      "Use fly ash bricks instead of red clay bricks (saves mortar and cost).",
      "Choose high-quality local granite instead of premium Italian marble for flooring."
    ],
    "maintenanceTips": "Cure concrete slabs for a minimum of 14 to 21 days by ponding water to reach full structural design strength."
  },
  {
    "id": "construct-highway",
    "title": "Constructing a Highway",
    "description": "Heavy civil road materials, sub-grade soil reinforcements, high-strength concrete, and site safety setups.",
    "icon": "🛣️",
    "category": "Construction",
    "recommendedMaterials": [
      "OPC 53 Cement",
      "Heavy Reinforcement Rebars (Fe 550)",
      "Aggregates (Gravel, Sand)",
      "Bitumen (VG-30/VG-40)",
      "Geotextiles",
      "Safety Barriers"
    ],
    "suggestedGrades": [
      "OPC 53 Structural Cement, Fe 550D Steel, VG-40 Bitumen for heavy traffic"
    ],
    "certifications": [
      "IS 12269 (OPC 53), IS 1786 (Rebar), IRC Standards (Bitumen)"
    ],
    "popularBrands": [
      "L&T, SAIL, JSW Steel, Vizag Steel, UltraTech, Sika"
    ],
    "priceRange": "₹8 Crores - ₹15 Crores per Kilometer (depending on lanes and soil terrain)",
    "requiredTools": [
      "Asphalt Paver",
      "Road Roller",
      "Concrete Batching Plant",
      "Transit Mixer",
      "Pneumatic Drills"
    ],
    "calculatorLink": "concrete",
    "buyingChecklist": [
      "Ensure sub-grade soil compaction density reaches at least 98% Proctor Density.",
      "Test aggregate impact and abrasion value before bulk procurement.",
      "Verify bitumen viscosity grades conform to IRC road specifications."
    ],
    "relatedGuides": [
      "best-cement-for-highways",
      "types-of-steel-in-construction",
      "workplace-safety-checklist"
    ],
    "commonMistakes": [
      "Poor sub-grade compaction leading to premature road cracking or settlement under load.",
      "Improper drainage design causing water accumulation on bitumen."
    ],
    "budgetAlternatives": [
      "Use local aggregates for sub-base courses to reduce heavy transport costs.",
      "Blend fly ash in concrete pavements."
    ],
    "maintenanceTips": "Maintain side-drains clear of debris to prevent water ingress beneath the asphalt which destroys the binder bond."
  },
  {
    "id": "build-commercial",
    "title": "Building a Commercial Complex",
    "description": "Multi-story commercial cores, fire-resistant HVAC systems, smart glass facades, and structural waterproofing.",
    "icon": "🏢",
    "category": "Construction",
    "recommendedMaterials": [
      "OPC 53 Cement",
      "High Tensile Structural Columns (Fe 550)",
      "Double Glazed low-E Glass",
      "Fire-resistant Ducting",
      "Waterproofing Membranes",
      "Commercial HVAC Systems"
    ],
    "suggestedGrades": [
      "OPC 53 Grade, Fe 550 Structural steel, Double-glazed Low-E low emissivity glass"
    ],
    "certifications": [
      "IS 12269 (Cement), IS 2553 (Glass), IS 3854 (Switches), EN Fire Safety Standards"
    ],
    "popularBrands": [
      "Tata Steel, JSW Steel, Saint-Gobain, Daikin, Legrand, Fosroc"
    ],
    "priceRange": "₹2,500 - ₹4,500 per sq. ft. (high-spec finishes included)",
    "requiredTools": [
      "Crane Towers",
      "Scaffolding rigs",
      "Structural Glazing Lifters",
      "HVAC Duct Folders"
    ],
    "calculatorLink": "concrete",
    "buyingChecklist": [
      "Check glass U-value and Solar Heat Gain Coefficient (SHGC) for energy savings.",
      "Verify HVAC duct sealants are certified fire-retardant.",
      "Use non-shrink high-performance grouts for heavy steel column bases."
    ],
    "relatedGuides": [
      "structural-steel-applications",
      "hvac-materials-buying-guide",
      "fire-resistant-products-standards"
    ],
    "commonMistakes": [
      "Under-sizing electrical conduits for heavy commercial loads.",
      "Inadequate mechanical ventilation in underground basement parkings."
    ],
    "budgetAlternatives": [
      "Optimize window-to-wall ratio to reduce costly low-E glass facade areas.",
      "Use VRV AC systems to lower running power costs."
    ],
    "maintenanceTips": "Conduct annual inspections of structural glass sealants and roof waterproofing membranes to catch micro-leaks early."
  },
  {
    "id": "build-apartment",
    "title": "Constructing an Apartment Building",
    "description": "Residential high-rise RCC framing, soundproof SWR drainage, multi-family electrical panels, and tile finishings.",
    "icon": "🏢",
    "category": "Construction",
    "recommendedMaterials": [
      "PPC Cement (for masonry/plaster)",
      "OPC 53 Cement (for slab/columns)",
      "TMT Rebars (Fe 500D)",
      "Ceramic & Vitrified Tiles",
      "CPVC water pipes",
      "SWR drainage pipes"
    ],
    "suggestedGrades": [
      "OPC 53 structural, Fe 500D (high ductility), BWP Plywood for shuttering"
    ],
    "certifications": [
      "IS 12269 (Cement), IS 1786 (Steel Rebar), IS 13592 (SWR Pipes), IS 15622 (Tiles)"
    ],
    "popularBrands": [
      "UltraTech, JSW Steel, Kajaria, Astral, Finolex, Jaquar, Cera"
    ],
    "priceRange": "₹1,800 - ₹3,000 per sq. ft. (multi-story RCC structure)",
    "requiredTools": [
      "Concrete Boom Placer",
      "Tower Crane",
      "Rebar Bender",
      "Tile Cutters",
      "Pipe Welders"
    ],
    "calculatorLink": "house-construction",
    "buyingChecklist": [
      "Verify stirrup spacing and hooks are bent at 135 degrees for seismic safety.",
      "Acoustically insulate SWR vertical drain pipes to reduce water flow sounds in shafts.",
      "Ensure proper slope in balcony and bathroom tile surfaces."
    ],
    "relatedGuides": [
      "types-of-steel-in-construction",
      "ceramic-vs-vitrified-tiles",
      "waterproofing-cost-guide"
    ],
    "commonMistakes": [
      "Using standard structural steel without corrosion-resistant coatings in humid or coastal zones.",
      "Skipping pressure testing of water lines before plastering walls."
    ],
    "budgetAlternatives": [
      "Substitute imported Italian marble with large-format double-charge vitrified tiles.",
      "Use precast concrete blocks instead of bricks."
    ],
    "maintenanceTips": "Routinely test auto-start diesel generators and inspect rainwater harvesting shafts before the monsoon begins."
  },
  {
    "id": "build-warehouse",
    "title": "Building a Warehouse",
    "description": "Large span industrial steel structures, galvalume roof sheeting, heat insulation, and heavy industrial flooring.",
    "icon": "🏭",
    "category": "Construction",
    "recommendedMaterials": [
      "Pre-Engineered Building (PEB) Steel",
      "Color Coated Galvalume Roof Sheets",
      "High-density Rockwool Insulation Slabs",
      "Vacuum Dewatered Concrete (IPS Flooring)",
      "Industrial LED high-bay lighting",
      "PPE Gear"
    ],
    "suggestedGrades": [
      "Fe 345 PEB structural plates, 0.50mm Galvalume AZ150 sheets, M25 concrete floor"
    ],
    "certifications": [
      "IS 2062 (Structural Steel), IS 277 (Galvanized Sheets), IS 15678 (Bamboo sheets)"
    ],
    "popularBrands": [
      "Tata BlueScope, JSW Steel, Everest, Rockwool, Bosch Tools, Karam Safety"
    ],
    "priceRange": "₹800 - ₹1,500 per sq. ft. (industrial flooring and PEB structure)",
    "requiredTools": [
      "Crane Lifters",
      "Vacuum Dewatering Screed",
      "Sheet Profiling Machines",
      "Welding Transformers"
    ],
    "calculatorLink": "steel",
    "buyingChecklist": [
      "Check floor load capacity (typically minimum 5 to 8 tons per square meter).",
      "Verify roofing sheets have a minimum AZ150 zinc-aluminum coating density.",
      "Ensure rockwool insulation is safely sandwiched with flame-resistant mesh."
    ],
    "relatedGuides": [
      "metal-roofing-vs-concrete-roofing",
      "industrial-tool-selection-guide",
      "insulation-materials-guide"
    ],
    "commonMistakes": [
      "Under-designing foundation bolts for high wind-uplift pressures on roof sheets.",
      "Using standard residential concrete floor finishes that crack under forklift wheel loads."
    ],
    "budgetAlternatives": [
      "Use single-layer roof sheets with under-deck reflective foil instead of double sandwich sheets.",
      "Deploy local PEB builders."
    ],
    "maintenanceTips": "Clear roof valley gutters of leaves and debris regularly to prevent standing water from corroding sheet joints."
  },
  {
    "id": "renovate-house",
    "title": "Renovating an Existing House",
    "description": "Structural masonry repairs, wall dampness remedies, acrylic wall paints, and modular upgrade preparations.",
    "icon": "🏡",
    "category": "Construction",
    "recommendedMaterials": [
      "Polymer Modified Mortar",
      "SBR Latex Bonding Agent",
      "Acrylic Wall Crack Fillers",
      "Interior Emulsion Paint",
      "Damp-proof Coating",
      "Modular Fittings"
    ],
    "suggestedGrades": [
      "SBR Polymer additives, Low-VOC washable interior paints, MR Grade plywood for dry rooms"
    ],
    "certifications": [
      "IS 15489 (Interior Paint), ASTM Standards (Crack Fillers)"
    ],
    "popularBrands": [
      "Dr. Fixit, Asian Paints, Fevicol, Hettich, Stanley Tools"
    ],
    "priceRange": "₹300 - ₹800 per sq. ft. (depending on extent of masonry and plumbing changes)",
    "requiredTools": [
      "Paint Rollers",
      "Sanding Blocks",
      "Putty Blades",
      "Chisels & Hammers",
      "Chasing Tool"
    ],
    "calculatorLink": "renovation",
    "buyingChecklist": [
      "Rout out wall cracks to a V-shape, clean dust, and fill with acrylic putty.",
      "Check water lines for active pressure drop to catch hidden pipe leaks.",
      "Apply SBR latex bonding slurry between old and new cement plaster layers."
    ],
    "relatedGuides": [
      "paint-maintenance-tips",
      "laminate-selection-guide",
      "tile-maintenance-guide"
    ],
    "commonMistakes": [
      "Painting directly over wet wall plaster or active leakage areas without correcting the source of dampness.",
      "Using cheap white cement putty on external surfaces (prone to flaking)."
    ],
    "budgetAlternatives": [
      "Repaint walls with high-grade wash distempers if interior emulsions exceed budget.",
      "Refurbish existing solid wood doors instead of buying new engineered frames."
    ],
    "maintenanceTips": "Clean exterior paint surfaces with low-pressure water annually to prevent dirt-clogging and prolong sheen."
  },
  {
    "id": "build-boundary-wall",
    "title": "Building a Boundary Wall",
    "description": "Economical external wall footings, brick masonry, and weather-resistant cement plasters.",
    "icon": "🧱",
    "category": "Construction",
    "recommendedMaterials": [
      "Red Clay Bricks",
      "PPC Cement",
      "M-Sand (Manufacturing Sand)",
      "Mild Steel rebar",
      "Weatherproof External Paint"
    ],
    "suggestedGrades": [
      "Class II bricks, PPC cement for high cohesion mortar, M20 grade columns"
    ],
    "certifications": [
      "IS 2185 (Concrete blocks), IS 1786 (Steel), IS 269 (Cement)"
    ],
    "popularBrands": [
      "UltraTech, Ambuja Cement, Kamdhenu Steel, JSW Steel, Berger Paints"
    ],
    "priceRange": "₹800 - ₹1,400 per running foot (6 feet height with concrete pillars)",
    "requiredTools": [
      "Mortar Pan",
      "Trowel",
      "Shovel",
      "Plumb Bob",
      "Measuring Tape"
    ],
    "calculatorLink": "brick",
    "buyingChecklist": [
      "Provide expansion joints every 10 to 15 meters to prevent thermal cracks.",
      "Apply a damp-proof course (DPC) slab at the ground level to block rising moisture.",
      "Cure brickwork for a minimum of 7 to 10 days."
    ],
    "relatedGuides": [
      "red-bricks-vs-fly-ash-bricks",
      "how-to-choose-bricks",
      "brick-quality-testing-methods"
    ],
    "commonMistakes": [
      "Skipping concrete column anchors, causing the wall to lean under heavy wind or soil shift.",
      "Using fine river sand with high silt content, causing plaster shrinkage cracks."
    ],
    "budgetAlternatives": [
      "Use fly ash bricks or hollow concrete blocks instead of red clay bricks (saves cement mortar).",
      "Omit exterior paint and apply a rustic exposed brick finish with transparent sealer."
    ],
    "maintenanceTips": "Inspect the boundary wall foundation line after monsoon seasons for soil erosion or footing washouts."
  },
  {
    "id": "construct-basement",
    "title": "Constructing a Basement",
    "description": "Critical underground retaining structures, thick waterproofing membranes, and sump drainage systems.",
    "icon": "📉",
    "category": "Construction",
    "recommendedMaterials": [
      "OPC 53 Cement",
      "Heavy Reinforcement Rebars",
      "Crystalline Waterproofing Additive",
      "APP Modified Bituminous Membrane",
      "Perforated Drainage Pipes",
      "Sump Pump"
    ],
    "suggestedGrades": [
      "M30 Concrete mix, 4mm thick APP membrane, Fe 500D Steel"
    ],
    "certifications": [
      "IS 12269 (Cement), IS 1786 (Steel), ASTM Waterproofing Standards"
    ],
    "popularBrands": [
      "Sika, Fosroc, Dr. Fixit, JSW Steel, Tata Steel"
    ],
    "priceRange": "₹2,200 - ₹3,500 per sq. ft. (due to extensive retaining structures and waterproofing sheet costs)",
    "requiredTools": [
      "Submersible Sump Pumps",
      "Retaining Shuttering Plates",
      "Bituminous Torches",
      "Concrete Vibrator"
    ],
    "calculatorLink": "concrete",
    "buyingChecklist": [
      "Apply waterproofing membrane externally on the retaining wall, not internally.",
      "Install a gravel envelope around perforated French drain pipes at the footing base.",
      "Ensure concrete is compacted using mechanical needle vibrators to eliminate voids."
    ],
    "relatedGuides": [
      "basement-waterproofing-guide",
      "types-of-waterproofing-materials",
      "concrete-admixtures-guide"
    ],
    "commonMistakes": [
      "Relying only on internal waterproof plaster (groundwater pressure easily detaches it).",
      "Backfilling with clayey soil that retains water pressure against retaining walls."
    ],
    "budgetAlternatives": [
      "Use crystalline waterproofing admixtures mixed directly into concrete to save membrane cost.",
      "Use localized clay brick retaining walls only if ground water table is extremely low."
    ],
    "maintenanceTips": "Perform monthly tests of the sump pump automatic float switch to guarantee immediate activation during high water tables."
  },
  {
    "id": "build-terrace",
    "title": "Building a Terrace",
    "description": "Exposed concrete slab waterproofing, heat-reflective coatings, and weather-resistant outdoor tiles.",
    "icon": "🌇",
    "category": "Construction",
    "recommendedMaterials": [
      "PPC Cement",
      "Polyurethane Liquid Waterproofing Membrane",
      "Cool Roof Heat Reflective Paint",
      "Anti-skid Ceramic Tiles",
      "PU joint sealants"
    ],
    "suggestedGrades": [
      "PPC cement for low thermal cracks, PU membrane, outdoor-grade ceramic tiles"
    ],
    "certifications": [
      "IS 15622 (Tiles), IS 269 (Cement), ASTM Waterproofing Standards"
    ],
    "popularBrands": [
      "Dr. Fixit, Asian Paints, Sika, Kajaria Tiles, Orientbell Tiles"
    ],
    "priceRange": "₹400 - ₹900 per sq. ft. (waterproofing layer and tile finishing included)",
    "requiredTools": [
      "PU Roller Brushes",
      "Notch Trowels",
      "Tile Spacers",
      "Angle Grinders"
    ],
    "calculatorLink": "tile",
    "buyingChecklist": [
      "Ensure a minimum slope of 1 in 100 towards the rainwater drain pipes.",
      "Create expansion joints in tile flooring and fill with flexible PU sealant.",
      "Apply primer on concrete slab before laying the elastomeric membrane."
    ],
    "relatedGuides": [
      "terrace-waterproofing-guide",
      "best-roofing-hot-climates",
      "tile-installation-tips"
    ],
    "commonMistakes": [
      "Laying tiles directly over waterproofing membrane without a protective mortar layer.",
      "Clogging rainwater inlets due to accumulation of grouting mortar during tiles layout."
    ],
    "budgetAlternatives": [
      "Apply two coats of elastomeric cool roof paint directly over cement screed instead of laying tiles.",
      "Use economical terracotta tiles."
    ],
    "maintenanceTips": "Clean terrace drainage gratings monthly to prevent stagnant water pooling which deteriorates tile grout."
  },
  {
    "id": "design-interior",
    "title": "Designing an Interior Space",
    "description": "Modular wardrobe materials, boiling water resistant plywood, decorative laminates, and low-VOC emulsions.",
    "icon": "🎨",
    "category": "Construction",
    "recommendedMaterials": [
      "BWR/BWP Plywood",
      "Medium Density Fiberboard (MDF)",
      "Decorative Laminates (Sunmica)",
      "Low-VOC Interior Emulsion Paint",
      "Soft-close Hinges",
      "Wood Glue"
    ],
    "suggestedGrades": [
      "BWP Plywood for kitchens/bathrooms, BWR Plywood for wardrobes, E0 grade laminates"
    ],
    "certifications": [
      "IS 710 (BWP Ply), IS 303 (BWR Ply), IS 15489 (Interior Paint)"
    ],
    "popularBrands": [
      "Greenply, CenturyPly, Action Tesa, Merino Laminates, Hettich, Asian Paints"
    ],
    "priceRange": "₹800 - ₹2,200 per sq. ft. (highly customizable based on woodwork design and material choice)",
    "requiredTools": [
      "Mitre Saw",
      "Pneumatic Nailer",
      "Laminate Trimmer",
      "Drill Machine",
      "Edge-banding iron"
    ],
    "calculatorLink": "renovation",
    "buyingChecklist": [
      "Always use Boiling Water Proof (IS 710) plywood for kitchen cabinets (water splashes).",
      "Verify laminates are pasted using heat-resistant glue (Fevicol HeatX) near stoves.",
      "Ensure edges of plywood are sealed with PVC edge-bands to prevent moisture ingress."
    ],
    "relatedGuides": [
      "laminate-selection-guide",
      "types-of-plywood-explained",
      "matte-vs-satin-vs-gloss"
    ],
    "commonMistakes": [
      "Using commercial MR-grade plywood in high-moisture kitchen or bathroom areas (causes wood warping).",
      "Buying laminates without checking scratch resistance ratings."
    ],
    "budgetAlternatives": [
      "Use HDMR or MDF boards for dry area wardrobe panels to save up to 30% over plywood.",
      "Apply high-grade paint finishes directly on calibrated plywood instead of pasting laminates."
    ],
    "maintenanceTips": "Wipe laminate surfaces with a damp micro-fiber cloth; avoid using highly abrasive chemical cleaning powders."
  },
  {
    "id": "start-vegetable-farm",
    "title": "Starting a Vegetable Farm",
    "description": "High-germination hybrid seeds, balanced NPK organic fertilizers, and drip irrigation planning.",
    "icon": "🌾",
    "category": "Agricultural",
    "recommendedMaterials": [
      "Hybrid Vegetable Seeds",
      "Organic Manure (Compost)",
      "Chemical Fertilizers (NPK / Urea)",
      "Drip Irrigation Tubes",
      "Pesticides",
      "Fungicides"
    ],
    "suggestedGrades": [
      "High germination hybrid seeds, FCO-certified organic compost"
    ],
    "certifications": [
      "FCO Standards (Fertilizers), ISTA Standards (Seeds)"
    ],
    "popularBrands": [
      "Syngenta, Mahyco, Kaveri Seeds, IFFCO, Bayer Crop Science, Jain Irrigation"
    ],
    "priceRange": "₹40,000 - ₹80,000 per Acre (initial land preparation, seed, and drip system setup)",
    "requiredTools": [
      "Rotavator",
      "Seed Sowing Drill",
      "Foliar Sprayer",
      "PH Meter",
      "Spade"
    ],
    "calculatorLink": "seed-rate",
    "buyingChecklist": [
      "Conduct soil PH testing before sowing (ideal vegetable PH range is 6.0 to 7.0).",
      "Provide raised soil beds for vegetables to prevent waterlogged root rot.",
      "Apply basal compost manure mixed thoroughly in topsoil during tilling."
    ],
    "relatedGuides": [
      "seed-selection-guide",
      "fertilizer-selection-guide",
      "soil-testing-explained"
    ],
    "commonMistakes": [
      "Sowing seeds too deep in soil, which limits seedling emergence and causes rot.",
      "Over-fertilizing with nitrogen (Urea) causing heavy leaf growth but poor vegetable yield."
    ],
    "budgetAlternatives": [
      "Utilize farm-yard cow manure (compost) instead of costly packaged organic store compost.",
      "Use manual furrow flooding if drip pipes exceed initial budget limit."
    ],
    "maintenanceTips": "Clear weed growth around vegetable plant bases weekly to eliminate nutrient competition."
  },
  {
    "id": "setup-drip-irrigation",
    "title": "Setting Up Drip Irrigation",
    "description": "Water-saving lateral drip tubes, inline emitters, sand filters, and venture fertilizer injectors.",
    "icon": "💧",
    "category": "Agricultural",
    "recommendedMaterials": [
      "LLDPE Lateral Tubes (16mm/20mm)",
      "Inline/Online Drip Emitters",
      "Venturi Injector",
      "Screen / Disc Filters",
      "PVC Mainlines",
      "Borewell Pumps"
    ],
    "suggestedGrades": [
      "Class 2 LLDPE tubes, UV-stabilized emitters, ISI marked mainlines"
    ],
    "certifications": [
      "IS 12786 (LLDPE Lateral), IS 13487 (Emitters), IS 4985 (PVC Pipe)"
    ],
    "popularBrands": [
      "Jain Irrigation, Supreme Pipes, Finolex Pipes, Netafim"
    ],
    "priceRange": "₹25,000 - ₹45,000 per Acre (depending on crop spacing and row length)",
    "requiredTools": [
      "Tube Punch",
      "Pipe Cutter",
      "Teflon Tape",
      "Grommet Installer",
      "Pressure Gauge"
    ],
    "calculatorLink": "irrigation",
    "buyingChecklist": [
      "Install a disc or sand filter at the pump head to prevent clogging of fine dripper holes.",
      "Place lateral pipes on flat terrain or slight downslopes, not climbing up steep slopes.",
      "Flush lateral lines once a week by opening the end caps under pressure."
    ],
    "relatedGuides": [
      "irrigation-system-basics",
      "pipe-sizing-basics",
      "water-tank-selection-guide"
    ],
    "commonMistakes": [
      "Forgetting to clean the main filters, causing pressure drop and clogging of lateral lines.",
      "Buying cheap non-UV-stabilized LLDPE pipes that crack under summer sun within a year."
    ],
    "budgetAlternatives": [
      "Use online drippers only where crop spacing is wide (orchards), reducing the number of emitters.",
      "Deploy localized gravity-fed drip kit for small garden plots."
    ],
    "maintenanceTips": "Perform acid treatment (using diluted hydrochloric acid) annually if irrigation water contains high calcium hardness to clear lime scaling in drippers."
  },
  {
    "id": "organic-farming",
    "title": "Organic Farming Setup",
    "description": "Pure organic compost manures, neem-based botanical pesticides, and bio-fertilizer cultures.",
    "icon": "🌾",
    "category": "Agricultural",
    "recommendedMaterials": [
      "Vermicompost",
      "Neem Seed Kernel Extract",
      "Bio-fertilizers (Azotobacter, Rhizobium)",
      "Panchagavya (Organic spray)",
      "Mulching Sheets"
    ],
    "suggestedGrades": [
      "FCO certified vermicompost, 100% cold-pressed neem formulations"
    ],
    "certifications": [
      "FCO Organic Standards, NPOP India Standards"
    ],
    "popularBrands": [
      "Coromandel International, IFFCO, Bayer, local organic cooperatives"
    ],
    "priceRange": "₹15,000 - ₹30,000 per Acre (compost and biological inputs)",
    "requiredTools": [
      "Compost Spreader",
      "Farm Sprayer (dedicated for bio-inputs)",
      "Mulching Roller",
      "Soil Thermometer"
    ],
    "calculatorLink": "fertilizer",
    "buyingChecklist": [
      "Apply nitrogen-fixing bio-fertilizers like Rhizobium as seed treatment before sowing.",
      "Verify vermicompost is fully decomposed and free of live weed seeds.",
      "Use organic straw mulching to conserve moisture and suppress weed growth."
    ],
    "relatedGuides": [
      "organic-vs-chemical-fertilizers",
      "crop-nutrition-guide",
      "soil-testing-explained"
    ],
    "commonMistakes": [
      "Using fresh cow dung directly in fields (contains high heat and pathogens that burn roots).",
      "Assuming organic means zero pest spraying (requires preventive botanical sprays)."
    ],
    "budgetAlternatives": [
      "Produce vermicompost on-site using farm crop residue and cow dung to cut purchase costs.",
      "Use dried leaves/straw for mulching instead of plastic mulching sheets."
    ],
    "maintenanceTips": "Apply neem oil preventive sprays once in 15 days in early morning or late evening hours to avoid leaf burning."
  },
  {
    "id": "install-solar",
    "title": "Installing a Solar Power System",
    "description": "High-efficiency monocrystalline solar panels, pure sine-wave inverters, and tubular/lithium solar batteries.",
    "icon": "☀️",
    "category": "Solar & Energy",
    "recommendedMaterials": [
      "Monocrystalline Solar Panels",
      "Solar Hybrid Inverter",
      "Tubular / Lithium solar batteries",
      "Hot-dip Galvanized Structure",
      "DC Cables & MC4 Connectors",
      "Lightning Arrester"
    ],
    "suggestedGrades": [
      "Mono-PERC cell modules, Pure Sine Wave inverter, C10 rating tubular batteries"
    ],
    "certifications": [
      "IEC 61215 (Solar Panel), IS 16242 (Inverter), IS 13369 (Battery)"
    ],
    "popularBrands": [
      "Tata Power Solar, Adani Solar, Luminous, Exide, Okaya, Waaree"
    ],
    "priceRange": "₹60,000 - ₹95,000 per kW (installed rooftop system with battery backup)",
    "requiredTools": [
      "Solar Panel Angles finder",
      "Digital Multimeter",
      "Crimping Tool",
      "Impact Drill",
      "Insulated Spanners"
    ],
    "calculatorLink": "solar-panel",
    "buyingChecklist": [
      "Face solar panels towards True South (in Northern hemisphere) at an angle equal to your latitude.",
      "Use dedicated double-insulated copper DC cables to minimize power loss.",
      "Install a dedicated earth pit and lightning arrester to protect the inverter."
    ],
    "relatedGuides": [
      "solar-panel-buying-guide",
      "monocrystalline-vs-polycrystalline-panels",
      "battery-selection-solar-systems"
    ],
    "commonMistakes": [
      "Installing solar panels under shadows of trees, water tanks, or adjacent high-rise walls.",
      "Under-sizing the battery bank, causing the inverter to shut down during peak power starting loads."
    ],
    "budgetAlternatives": [
      "Use polycrystalline panels instead of monocrystalline if space is abundant (saves 20-30% on panels).",
      "Install an on-grid system without batteries if power cuts are minimal (saves battery costs)."
    ],
    "maintenanceTips": "Wipe dust and bird droppings off panel glass surface weekly with clean water to prevent hot-spots and maintain peak generation."
  },
  {
    "id": "energy-efficient-home",
    "title": "Creating an Energy-Efficient Home",
    "description": "Thermal wall insulation, heat reflective roof coatings, energy-saving LED lighting, and smart appliances.",
    "icon": "🏠",
    "category": "Solar & Energy",
    "recommendedMaterials": [
      "Glasswool / Rockwool Insulation",
      "Heat-reflective Cool Roof paint",
      "LED Lighting Solutions",
      "BEE Star Certified Appliances",
      "Double-glazed uPVC Windows"
    ],
    "suggestedGrades": [
      "R-value insulation batts, 5-Star BEE appliances, double-glazed windows"
    ],
    "certifications": [
      "BEE Star Certification, IS 16102 (LED Lights), IS 15678 (Composite sheets)"
    ],
    "popularBrands": [
      "Daikin, Voltas, Havells, Philips, Saint-Gobain, Rockwool, Bosch"
    ],
    "priceRange": "₹150 - ₹450 per sq. ft. (appliance upgrades, wall insulation, and double glazing installation)",
    "requiredTools": [
      "Infrared Thermal Camera",
      "Digital Lux Meter",
      "Caulking Gun",
      "Ladder"
    ],
    "calculatorLink": "solar-roi",
    "buyingChecklist": [
      "Install thermal insulation slabs inside drywall cavities to block summer heat.",
      "Apply white cool-roof paint on the roof slab to reflect up to 85% of solar heat.",
      "Seal window and door frame joints with silicone caulk to prevent cool air leaks."
    ],
    "relatedGuides": [
      "energy-efficient-homes-guide",
      "roof-insulation-guide",
      "insulation-materials-guide"
    ],
    "commonMistakes": [
      "Buying appliances based on look without checking the BEE energy saving sticker rating.",
      "Leaving glass windows single-glazed in hot direct-sun zones (acts like a greenhouse heat trap)."
    ],
    "budgetAlternatives": [
      "Install thick blackout curtains to block sun heat instead of expensive double-glazed window glass.",
      "Use ceiling exhaust fans instead of running air conditioners at high fan speeds."
    ],
    "maintenanceTips": "Descale HVAC cooling coils and wash AC filters monthly to maintain peak energy-efficient compressor operation."
  },
  {
    "id": "paint-house",
    "title": "Painting a House",
    "description": "Washable interior acrylic emulsions, weatherproof exterior coatings, primers, and application rollers.",
    "icon": "🎨",
    "category": "Paint",
    "recommendedMaterials": [
      "Acrylic Interior Emulsion",
      "Exterior Weatherproof Emulsion",
      "Wall Primer",
      "Acrylic Wall Putty",
      "Wall Sanding paper"
    ],
    "suggestedGrades": [
      "Washable interior sheen finish, low-VOC paint, anti-fungal exterior paint"
    ],
    "certifications": [
      "IS 15489 (Plastic Emulsion), IS 5410 (Cement Paint)"
    ],
    "popularBrands": [
      "Asian Paints, Berger Paints, Nerolac, Dulux, Shalimar Paints"
    ],
    "priceRange": "₹12 - ₹35 per sq. ft. (including labor, putty, primer, and double top coats)",
    "requiredTools": [
      "Paint Rollers",
      "Serrated Putty Blades",
      "Sanding Emery Paper (120/220 grit)",
      "Drop Cloths"
    ],
    "calculatorLink": "paint",
    "buyingChecklist": [
      "Ensure wall moisture content is below 12% before painting using a moisture meter.",
      "Apply one coat of primer before putty, and one coat after putty for paint grip.",
      "Sand the wall putty smooth with 220-grit emery paper before paint coats."
    ],
    "relatedGuides": [
      "interior-paint-buying-guide",
      "exterior-paint-buying-guide",
      "emulsion-vs-distemper"
    ],
    "commonMistakes": [
      "Applying top paint coats directly on bare plaster without primer (causes paint to peel off).",
      "Painting during high-humidity monsoon weeks (prevents paint from drying and curing correctly)."
    ],
    "budgetAlternatives": [
      "Use acrylic distemper instead of emulsion paint for ceiling areas to cut costs.",
      "Repaint without putty if walls are already flat and crack-free."
    ],
    "maintenanceTips": "Wipe interior paint walls with a damp sponge and mild liquid soap for stains; avoid scrub brushes."
  },
  {
    "id": "install-flooring",
    "title": "Installing New Flooring",
    "description": "Double-charge vitrified tiles, polymer-modified tile adhesives, and stain-proof epoxy grouts.",
    "icon": "🧱",
    "category": "Tile & Flooring",
    "recommendedMaterials": [
      "Vitrified Tiles",
      "Tile Adhesive Mortar",
      "Epoxy Grout",
      "Tile Spacers",
      "Self-leveling Screed Cement"
    ],
    "suggestedGrades": [
      "Double Charge vitrified tiles (highly durable), Class C2 tile adhesive, waterproof epoxy grout"
    ],
    "certifications": [
      "IS 15622 (Tiles), IS 15477 (Tile Adhesives)"
    ],
    "popularBrands": [
      "Kajaria, Somany, Johnson, Mapei, MYK Laticrete, Orientbell Tiles"
    ],
    "priceRange": "₹120 - ₹250 per sq. ft. (including tile purchase, premium adhesive, epoxy grout, and installation labor)",
    "requiredTools": [
      "Notched Trowel",
      "Rubber Mallet",
      "Tile Spacer Clips",
      "Angle Grinder with diamond wheel"
    ],
    "calculatorLink": "tile",
    "buyingChecklist": [
      "Ensure the floor bed is completely level using self-leveling cement screed before tiling.",
      "Maintain a minimum 2mm joint gap between tiles using plastic spacers.",
      "Apply adhesive back-buttering on large format tiles to avoid hollow sound pockets."
    ],
    "relatedGuides": [
      "floor-tile-buying-checklist",
      "tile-installation-tips",
      "tile-maintenance-guide"
    ],
    "commonMistakes": [
      "Grouting tiles with white cement instead of epoxy (white cement turns black and absorbs grease).",
      "Walking on newly laid tiles before the adhesive cures (minimum 24 hours)."
    ],
    "budgetAlternatives": [
      "Use standard sand-cement mortar instead of packaged adhesives if tiling small dry floors.",
      "Choose ceramic tiles instead of vitrified for light traffic rooms."
    ],
    "maintenanceTips": "Clean tile joints with a pH-neutral cleaner; avoid using strong hydrochloric acid which degrades grout."
  },
  {
    "id": "upgrade-bathroom",
    "title": "Upgrading the Bathroom",
    "description": "Vitreous china closets, brass body faucets, under-tile waterproofing membranes, and anti-skid ceramic floorings.",
    "icon": "🛁",
    "category": "Sanitary & Bathroom",
    "recommendedMaterials": [
      "Vitreous China Closet",
      "Brass body chrome plated Faucets",
      "Anti-skid Ceramic floor tiles",
      "Under-tile Waterproofing Polyurethane",
      "CPVC plumbing pipe fittings",
      "Epoxy grout"
    ],
    "suggestedGrades": [
      "Class I vitreous china, brass spindle faucets, R-10 slip resistance floor tiles"
    ],
    "certifications": [
      "IS 2556 (Sanitaryware), IS 8931 (Faucets), IS 15622 (Tiles)"
    ],
    "popularBrands": [
      "Jaquar, Cera, Hindware, Parryware, Kohler, Toto, Mapei, Astral Pipes"
    ],
    "priceRange": "₹40,000 - ₹1,20,000 per Bathroom (faucets, commode, wall tiling, and plumbing piping replacement)",
    "requiredTools": [
      "Pipe Wrench",
      "Teflon Tape thread seals",
      "Notched trowel",
      "PU membrane roller"
    ],
    "calculatorLink": "tile",
    "buyingChecklist": [
      "Perform water pooling test (minimum 48 hours) after applying the waterproofing membrane.",
      "Verify bathroom floor tiles have a slip-resistance rating of R-10 or above.",
      "Ensure plumbing fittings use lead-free thread joint sealants."
    ],
    "relatedGuides": [
      "bathroom-waterproofing-tips",
      "leak-prevention-tips",
      "tile-maintenance-guide"
    ],
    "commonMistakes": [
      "Installing a wall-mounted closet on weak brick partitions without a strong steel support frame.",
      "Skipping pressure testing of plumbing joints behind the wall before laying tiles."
    ],
    "budgetAlternatives": [
      "Install a floor-mounted closet instead of a wall-hung one (saves support frame cost).",
      "Choose value faucet ranges (Essco by Jaquar) which carry the same warranty."
    ],
    "maintenanceTips": "Clean brass chrome faucets with vinegar and water mixture to dissolve hard water scale; avoid steel scrubbers."
  },
  {
    "id": "setup-modular-kitchen",
    "title": "Setting Up a Modular Kitchen",
    "description": "Boiling water proof plywood carcasses, scratch-resistant laminates, and soft-close German hardware.",
    "icon": "🍳",
    "category": "Modular Kitchen",
    "recommendedMaterials": [
      "BWP Plywood (Boiling Water Proof)",
      "Decorative Laminate Sheets",
      "Soft-close Hinge runners",
      "Kitchen Pull-out Wire baskets",
      "Heat-resistant Glue"
    ],
    "suggestedGrades": [
      "BWP Grade IS 710 plywood (strictly for kitchen sink areas), BWR Grade for shelves, 1.0mm thickness laminates"
    ],
    "certifications": [
      "IS 710 (BWP Plywood), IS 303 (BWR Plywood), LGA Germany certifications (Hinges)"
    ],
    "popularBrands": [
      "CenturyPly, Greenply, Action Tesa, Fevicol, Hettich, Hafele, Ebco, Sleek"
    ],
    "priceRange": "₹80,000 - ₹2,50,000 (depending on kitchen run length, basket options, and hardware brands)",
    "requiredTools": [
      "Mitre Saw",
      "Piston drill",
      "Laminate cutter",
      "Clamping rigs"
    ],
    "calculatorLink": "renovation",
    "buyingChecklist": [
      "Always use Boiling Water Proof (IS 710) plywood for the sink cabinet carcass.",
      "Laminate both the inner and outer surfaces of the plywood sheets to balance tension and prevent warping.",
      "Ensure all edges are wrapped with PVC edge-banding tapes using hot-melt glues."
    ],
    "relatedGuides": [
      "plywood-buying-checklist",
      "laminate-selection-guide",
      "furniture-material-comparison"
    ],
    "commonMistakes": [
      "Using commercial MR-grade plywood or standard particle boards near sink and stove areas.",
      "Buying local unbranded soft-close runners that sag after 6 months of heavy pot loads."
    ],
    "budgetAlternatives": [
      "Use high-moisture resistant HDMR boards instead of BWP plywood for dry tall storage cabinets.",
      "Use standard drawer runners instead of custom kitchen tandem boxes."
    ],
    "maintenanceTips": "Lubricate soft-close hinges and drawer ball-bearings annually with silicone spray; do not overload cargo trays."
  },
  {
    "id": "replace-electrical-wiring",
    "title": "Replacing Electrical Wiring",
    "description": "High-purity electrolytic copper wires, flame retardant sheaths, MCBs, and modular switches.",
    "icon": "🔌",
    "category": "Electrical",
    "recommendedMaterials": [
      "Electrolytic Copper Wires",
      "Flame Retardant (FRLSH) Insulation Wires",
      "Modular Switches & Sockets",
      "Miniature Circuit Breakers (MCB)",
      "PVC conduits"
    ],
    "suggestedGrades": [
      "99.97% pure copper, FRLSH insulation, Class I MCB switches"
    ],
    "certifications": [
      "IS 694 (Wires), IS 3854 (Switches), IS 8828 (MCBs)"
    ],
    "popularBrands": [
      "Polycab, Havells, Finolex Cables, RR Kabel, Legrand, Anchor, Schneider"
    ],
    "priceRange": "₹15,000 - ₹35,000 (rewiring cost for a standard 2-BHK apartment, materials only)",
    "requiredTools": [
      "Wire Stripper",
      "Conduit Bender",
      "Electrical Tape",
      "Neon Line Tester",
      "Screw Driver set"
    ],
    "calculatorLink": "wire-length",
    "buyingChecklist": [
      "Calculate proper wire gauge: use 1.0 sq. mm for lighting, 2.5 sq. mm for sockets, and 4.0 sq. mm for AC/geysers.",
      "Always run phase, neutral, and ground wires separately in PVC conduits.",
      "Install a Residual Current Circuit Breaker (RCCB) in the main DB to prevent shocks."
    ],
    "relatedGuides": [
      "how-to-choose-electrical-wires",
      "electrical-load-calculation-guide",
      "home-electrical-safety-checklist"
    ],
    "commonMistakes": [
      "Mixing copper and aluminum wires directly in joints (causes galvanic corrosion and fire risks).",
      "Using cheap sub-standard non-FRLS wires that release heavy toxic black smoke during short circuits."
    ],
    "budgetAlternatives": [
      "Purchase standard FR (Flame Retardant) wires instead of costly FRLSH wires if budget is tight.",
      "Choose basic modular switch plates."
    ],
    "maintenanceTips": "Check all distribution board terminal screws for tightness annually; loose wires cause sparking and energy leaks."
  },
  {
    "id": "buy-bed-sheets",
    "title": "Buying Bed Sheets",
    "description": "High thread count cotton fabrics, sateen/percale weaves, and gentle fabric laundry care.",
    "icon": "🧵",
    "category": "Textile & Fabric",
    "recommendedMaterials": [
      "Pure Cotton Fabric",
      "High Thread Count Cotton",
      "Linen sheets",
      "Non-toxic Fabric dyes"
    ],
    "suggestedGrades": [
      "200 to 400 Thread Count (TC) pure Egyptian or long-staple cotton"
    ],
    "certifications": [
      "Oeko-Tex Standard 100 (harmful chemical testing), Cotton Council India"
    ],
    "popularBrands": [
      "Raymond, Arvind Limited, Bombay Dyeing, boutique fabric mills"
    ],
    "priceRange": "₹800 - ₹2,500 per Double Bed sheet set (fabric quality dependent)",
    "requiredTools": [
      "Measuring Tape",
      "Soft fabric scissors",
      "Stitch needles"
    ],
    "calculatorLink": "thread-count",
    "buyingChecklist": [
      "Choose 200 to 300 Thread Count (TC) cotton sheets for the best balance of softness and breathability.",
      "Select percale weave for a crisp cool feel, or sateen weave for a silky smooth feel.",
      "Look for Oeko-Tex certified fabrics that guarantee safety from heavy metals/toxic dyes."
    ],
    "relatedGuides": [
      "what-is-thread-count",
      "thread-count-cotton-comparison",
      "gsm-in-fabrics-explained"
    ],
    "commonMistakes": [
      "Buying cheap microfiber polyester sheets advertised as high thread count (polyester doesn't breathe and causes sweat).",
      "Washing fine cotton sheets in hot water with chlorine bleach (damages fibers)."
    ],
    "budgetAlternatives": [
      "Choose standard long-staple cotton sheets (144-180 TC) if premium Egyptian cotton is out of budget.",
      "Use cotton-polyester blends (60/40) for easy ironing and budget savings."
    ],
    "maintenanceTips": "Wash bed sheets separately in lukewarm water using a mild liquid detergent. Line-dry in shade to retain fiber strength."
  },
  {
    "id": "select-upholstery-fabric",
    "title": "Selecting Upholstery Fabric",
    "description": "High Wyzenbeek wear ratings, polyester-cotton blends, and stain protection finishes.",
    "icon": "🛋️",
    "category": "Textile & Fabric",
    "recommendedMaterials": [
      "Polyester-Cotton Blends",
      "Jacquard Fabrics",
      "Leatherette / Vinyl",
      "Stain Protection Spray"
    ],
    "suggestedGrades": [
      "Heavy-duty commercial grade (minimum 15,000 to 30,000 double rubs on Wyzenbeek method)"
    ],
    "certifications": [
      "ASTM Textile Standards, ISO 105 color fastness ratings"
    ],
    "popularBrands": [
      "Raymond, Siyarams, Durian, local upholstery mills"
    ],
    "priceRange": "₹250 - ₹900 per meter (fabric width typically 54 inches)",
    "requiredTools": [
      "Fabric Scissors",
      "Stretching pliers",
      "Staple gun",
      "Fabric adhesive"
    ],
    "calculatorLink": "upholstery",
    "buyingChecklist": [
      "Check the Wyzenbeek or Martindale double-rub rating; select at least 15,000 rubs for active family sofas.",
      "Use blended fabrics (polyester-cotton) for high tear resistance and easy washing.",
      "Verify color fastness to light to ensure the sofa fabric doesn't fade near sunny windows."
    ],
    "relatedGuides": [
      "upholstery-fabric-buying-guide",
      "cotton-vs-polyester",
      "fabric-care-guide"
    ],
    "commonMistakes": [
      "Using delicate fabrics like pure silk or 100% thin cotton for high-traffic living room sofas.",
      "Ignoring fabric stretch, causing the fabric to sag and wrinkle after sitting on it for a few weeks."
    ],
    "budgetAlternatives": [
      "Use heavy-duty woven polyester upholstery fabric (looks like linen but is highly durable and cheap).",
      "Use slipcovers instead of expensive upholstery replacement."
    ],
    "maintenanceTips": "Vacuum clean upholstery weekly with a soft brush attachment. Apply fabric stain protection spray (like Scotchgard) preventively."
  },
  {
    "id": "school-uniform-fabric",
    "title": "Choosing School Uniform Fabric",
    "description": "High breathability polyester-viscose blends, anti-pilling finishes, and budget-friendly bulk cuts.",
    "icon": "👔",
    "category": "Textile & Fabric",
    "recommendedMaterials": [
      "Polyester-Viscose (PV) Blend",
      "Polyester-Cotton (PC) Blend",
      "Anti-pilling Yarns",
      "Colorfast Dyes"
    ],
    "suggestedGrades": [
      "67/33 Polyester-Viscose blend (ideal balance of durability and sweat absorption)"
    ],
    "certifications": [
      "ISO 105 (Colorfastness), IS Standards for uniforms"
    ],
    "popularBrands": [
      "Siyarams, Raymond, Vardhman Textiles, Arvind Limited"
    ],
    "priceRange": "₹120 - ₹300 per meter (bulk uniform rates)",
    "requiredTools": [
      "Measuring tape",
      "Fabric shear scissors",
      "Industrial sewing machines"
    ],
    "calculatorLink": "fabric-length",
    "buyingChecklist": [
      "Select a 67% Polyester / 33% Viscose blend for high durability and daily machine washing.",
      "Check anti-pilling test ratings to prevent fuzzy lint balls forming on collars/trouser seats.",
      "Verify fabric has 'Vat-Dyed' color specification so the uniform colors do not run or fade."
    ],
    "relatedGuides": [
      "cotton-vs-polyester",
      "gsm-in-fabrics-explained",
      "fabric-care-guide"
    ],
    "commonMistakes": [
      "Choosing 100% synthetic polyester (uncomfortable and sticky in warm classrooms).",
      "Skipping shrinkage test; always buy pre-shrunk fabrics or allow a half-inch shrinkage margin in stitching."
    ],
    "budgetAlternatives": [
      "Buy PC (Polyester-Cotton) blends if PV blends are unavailable or slightly high priced in bulk.",
      "Use medium weight fabrics (180-200 GSM) that last longer than thin ones."
    ],
    "maintenanceTips": "Wash school uniforms in cold water, avoid brush scrubbing on collars, and iron under moderate heat setting."
  },
  {
    "id": "setup-workshop",
    "title": "Setting Up a Workshop",
    "description": "Professional hand tools, brushless power tools, protective PPE, and steel tool chests.",
    "icon": "🛠️",
    "category": "Industrial & Safety",
    "recommendedMaterials": [
      "Hardened Hand Tools",
      "Brushless Power Tools (Drills, Grinders)",
      "Personal Protective Equipment (PPE)",
      "Steel Tool Cabinet",
      "Extension cords"
    ],
    "suggestedGrades": [
      "Chrome Vanadium steel hand tools, 18V-20V Lithium-ion brushless power tools, Class I safety gear"
    ],
    "certifications": [
      "ANSI standards (Hand tools), CE markings (Power tools), IS Standards (PPE)"
    ],
    "popularBrands": [
      "Bosch Tools, Stanley, DeWalt, Makita, Ingco, 3M, Karam Safety"
    ],
    "priceRange": "₹15,000 - ₹50,000 (basic tool kit, entry-level cordless tools, and safety gear)",
    "requiredTools": [
      "Angle Grinder",
      "Impact Drill",
      "Measuring Tape",
      "Wrenches & Sockets",
      "PPE Masks & Glasses"
    ],
    "calculatorLink": "insulation",
    "buyingChecklist": [
      "Choose cordless brushless motor power tools for longer runtimes and zero maintenance.",
      "Keep tools organized in a lockable steel cabinet with dehumidifier silica gels to prevent rust.",
      "Always wear ANSI Z87.1 certified safety glasses during grinding and drilling."
    ],
    "relatedGuides": [
      "industrial-tool-selection-guide",
      "hand-tools-vs-power-tools",
      "tool-maintenance-best-practices"
    ],
    "commonMistakes": [
      "Using standard drill bits on concrete (masonry drill bits are mandatory).",
      "Overloading cordless tool battery chargers in high-temperature environments."
    ],
    "budgetAlternatives": [
      "Purchase an all-in-one corded power tool kit instead of expensive lithium battery cordless platforms.",
      "Buy a basic carbon-steel hand tool kit if use is infrequent."
    ],
    "maintenanceTips": "Wipe hand tools with a light coat of WD-40 anti-rust oil monthly. Clean power tool motor vents using dry compressed air to blow out dust."
  },
  {
    "id": "equip-factory",
    "title": "Equipping a Manufacturing Unit",
    "description": "Heavy-duty epoxy floorings, high-lumen industrial LED lights, and full body PPE setups.",
    "icon": "🏭",
    "category": "Industrial & Safety",
    "recommendedMaterials": [
      "Self-leveling Epoxy Flooring",
      "High-Bay LED Industrial Lights",
      "PPE (Helmets, Safety boots, Gloves)",
      "Machine Guardings",
      "Fire Extinguishers"
    ],
    "suggestedGrades": [
      "3mm self-leveling heavy wear epoxy floor, IP65 waterproof high-bay lights, Class E helmets"
    ],
    "certifications": [
      "IS 2572 (Industrial Floors), IS 3521 (Safety Harnesses), IS 2925 (Helmets)"
    ],
    "popularBrands": [
      "Mapei, Sika, Philips Lighting, Havells, 3M Safety, Karam, Udyogi"
    ],
    "priceRange": "₹1,500 - ₹4,000 per sq. meter (including heavy industrial flooring, ventilation, and lighting arrays)",
    "requiredTools": [
      "Epoxy roller trowel",
      "Lux meter",
      "Air quality monitors",
      "Flame sensors"
    ],
    "calculatorLink": "insulation",
    "buyingChecklist": [
      "Verify epoxy floor coating has a minimum thickness of 3mm to handle heavy forklift wheel movement.",
      "Use IP65 rated dustproof and waterproof LED high-bay fixtures in assembly areas.",
      "Ensure all entry points display mandatory PPE checklist signs."
    ],
    "relatedGuides": [
      "workplace-safety-checklist",
      "ppe-safety-equipment-guide",
      "industrial-tool-selection-guide"
    ],
    "commonMistakes": [
      "Using standard house floor tiles (they shatter immediately under heavy machine vibrations and loads).",
      "Under-designing local ventilation ducts in welding or painting areas."
    ],
    "budgetAlternatives": [
      "Use vacuum dewatered concrete (IPS) flooring instead of costly epoxy if chemical spills are not expected.",
      "Deploy regional high-lumen LED arrays."
    ],
    "maintenanceTips": "Wash industrial floors with alkaline cleansers weekly to remove grease and prevent workplace slip hazards."
  },
  {
    "id": "select-safety-gear",
    "title": "Selecting Safety Gear",
    "description": "Certified safety helmets, high-traction steel-toe boots, anti-impact gloves, and polycarbonate goggles.",
    "icon": "🛡️",
    "category": "Industrial & Safety",
    "recommendedMaterials": [
      "Safety Helmets (Hard hats)",
      "Steel-toe Safety Shoes",
      "Anti-impact Gloves",
      "Polycarbonate Safety Goggles",
      "Ear Plugs"
    ],
    "suggestedGrades": [
      "Class E electrical insulation hard hats, steel-toe shoes with slip resistance, ANSI Z87.1 goggles"
    ],
    "certifications": [
      "IS 2925 (Helmets), IS 15298 (Safety Shoes), ANSI Z87.1 (Eye protection)"
    ],
    "popularBrands": [
      "3M Safety, Honeywell, Karam, Udyogi Safety"
    ],
    "priceRange": "₹1,500 - ₹4,000 per Worker set (helmet, steel-toe boots, impact gloves, and protective glasses)",
    "requiredTools": [
      "Helmet suspension checker",
      "Safety shoe sole flex tester",
      "Sound level decibel meter"
    ],
    "calculatorLink": "insulation",
    "buyingChecklist": [
      "Select Class E helmets for electrical hazard zones (tested up to 20,000 Volts protection).",
      "Ensure safety shoes have an steel toe cap capable of resisting 200 Joules impact.",
      "Verify safety goggles have anti-fog and anti-scratch coatings for clear hot weather vision."
    ],
    "relatedGuides": [
      "ppe-safety-equipment-guide",
      "workplace-safety-checklist",
      "tool-maintenance-best-practices"
    ],
    "commonMistakes": [
      "Using standard running sports shoes on active construction floors (exposed nails can easily pierce standard soles).",
      "Reusing a safety helmet that has already taken a heavy impact (suspension micro-cracks render it useless)."
    ],
    "budgetAlternatives": [
      "Buy PVC safety boots instead of leather safety shoes in wet, muddy agricultural or pipe excavation fields.",
      "Buy basic safety kits in bulk."
    ],
    "maintenanceTips": "Store safety harnesses and helmets away from direct sunlight; UV radiation degrades plastic shells over time."
  }
];
