export interface RegionalPrice {
  region: 'North India' | 'South India' | 'East India' | 'West India';
  min: number;
  avg: number;
  max: number;
}

export interface MaterialPrice {
  id: string;
  name: string;
  category: 'Construction' | 'Electrical' | 'Plumbing' | 'Paint' | 'Furniture' | 'Agricultural' | 'Fabric' | 'Solar' | 'Automotive';
  unit: string;
  minPrice: number;
  avgPrice: number;
  maxPrice: number;
  trend: 'Increasing' | 'Stable' | 'Decreasing';
  lastUpdated: string;
  regionalPrices: RegionalPrice[];
  disclaimer?: string;
}

export const pricesData: MaterialPrice[] = [
  // --- CONSTRUCTION ---
  {
    id: "cement-bag",
    name: "Cement",
    category: "Construction",
    unit: "per 50 kg bag",
    minPrice: 380,
    avgPrice: 415,
    maxPrice: 450,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 380, avg: 410, max: 440 },
      { region: "South India", min: 390, avg: 425, max: 450 },
      { region: "East India", min: 375, avg: 405, max: 435 },
      { region: "West India", min: 385, avg: 420, max: 445 }
    ]
  },
  {
    id: "steel-kg",
    name: "Steel / TMT Bars (per kg)",
    category: "Construction",
    unit: "per kg",
    minPrice: 62,
    avgPrice: 68,
    maxPrice: 75,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 63, avg: 69, max: 75 },
      { region: "South India", min: 61, avg: 67, max: 73 },
      { region: "East India", min: 60, avg: 66, max: 72 },
      { region: "West India", min: 64, avg: 70, max: 76 }
    ]
  },
  {
    id: "steel-ton",
    name: "Steel / TMT Bars (per ton)",
    category: "Construction",
    unit: "per ton",
    minPrice: 62000,
    avgPrice: 68000,
    maxPrice: 75000,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 63000, avg: 69000, max: 75000 },
      { region: "South India", min: 61000, avg: 67000, max: 73000 },
      { region: "East India", min: 60000, avg: 66000, max: 72000 },
      { region: "West India", min: 64000, avg: 70000, max: 76000 }
    ]
  },
  {
    id: "bricks-1000",
    name: "Red Clay Bricks",
    category: "Construction",
    unit: "per 1,000 units",
    minPrice: 6500,
    avgPrice: 7500,
    maxPrice: 9000,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 6000, avg: 7000, max: 8500 },
      { region: "South India", min: 7000, avg: 8000, max: 9500 },
      { region: "East India", min: 5800, avg: 6800, max: 8000 },
      { region: "West India", min: 6800, avg: 7800, max: 9200 }
    ]
  },
  {
    id: "sand-cft",
    name: "Construction Sand (M-Sand)",
    category: "Construction",
    unit: "per cubic foot",
    minPrice: 55,
    avgPrice: 65,
    maxPrice: 80,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 50, avg: 60, max: 75 },
      { region: "South India", min: 60, avg: 70, max: 85 },
      { region: "East India", min: 48, avg: 58, max: 70 },
      { region: "West India", min: 58, avg: 68, max: 82 }
    ]
  },
  {
    id: "aggregates-ton",
    name: "Aggregates (Gravel)",
    category: "Construction",
    unit: "per ton",
    minPrice: 1200,
    avgPrice: 1450,
    maxPrice: 1800,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 1100, avg: 1350, max: 1700 },
      { region: "South India", min: 1300, avg: 1550, max: 1900 },
      { region: "East India", min: 1150, avg: 1400, max: 1750 },
      { region: "West India", min: 1250, avg: 1500, max: 1850 }
    ]
  },
  {
    id: "concrete-blocks-piece",
    name: "Concrete Blocks (AAC Blocks)",
    category: "Construction",
    unit: "per block",
    minPrice: 45,
    avgPrice: 55,
    maxPrice: 70,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 42, avg: 52, max: 65 },
      { region: "South India", min: 48, avg: 58, max: 72 },
      { region: "East India", min: 40, avg: 50, max: 62 },
      { region: "West India", min: 46, avg: 56, max: 68 }
    ]
  },
  {
    id: "tiles-sqft",
    name: "Vitrified Tiles",
    category: "Construction",
    unit: "per sq.ft",
    minPrice: 45,
    avgPrice: 75,
    maxPrice: 150,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 45, avg: 70, max: 140 },
      { region: "South India", min: 50, avg: 80, max: 160 },
      { region: "East India", min: 42, avg: 68, max: 130 },
      { region: "West India", min: 48, avg: 76, max: 150 }
    ]
  },
  {
    id: "marble-sqft",
    name: "Indian Marble",
    category: "Construction",
    unit: "per sq.ft",
    minPrice: 80,
    avgPrice: 150,
    maxPrice: 350,
    trend: "Decreasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 70, avg: 130, max: 300 },
      { region: "South India", min: 90, avg: 160, max: 370 },
      { region: "East India", min: 85, avg: 155, max: 360 },
      { region: "West India", min: 80, avg: 150, max: 350 }
    ]
  },
  {
    id: "granite-sqft",
    name: "Granite",
    category: "Construction",
    unit: "per sq.ft",
    minPrice: 120,
    avgPrice: 220,
    maxPrice: 500,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 110, avg: 200, max: 450 },
      { region: "South India", min: 120, avg: 230, max: 520 },
      { region: "East India", min: 130, avg: 240, max: 540 },
      { region: "West India", min: 115, avg: 210, max: 490 }
    ]
  },
  {
    id: "waterproofing-litre",
    name: "Waterproofing Chemicals",
    category: "Construction",
    unit: "per litre/kg",
    minPrice: 140,
    avgPrice: 220,
    maxPrice: 380,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 135, avg: 215, max: 360 },
      { region: "South India", min: 145, avg: 225, max: 395 },
      { region: "East India", min: 130, avg: 210, max: 370 },
      { region: "West India", min: 140, avg: 220, max: 380 }
    ]
  },

  // --- ELECTRICAL ---
  {
    id: "copper-wires-metre",
    name: "Copper Wires (1.5 sq mm)",
    category: "Electrical",
    unit: "per metre",
    minPrice: 18,
    avgPrice: 24,
    maxPrice: 32,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 18, avg: 24, max: 31 },
      { region: "South India", min: 19, avg: 25, max: 33 },
      { region: "East India", min: 17, avg: 23, max: 30 },
      { region: "West India", min: 18, avg: 24, max: 32 }
    ]
  },
  {
    id: "aluminium-wires-metre",
    name: "Aluminium Wires (Service Cables)",
    category: "Electrical",
    unit: "per metre",
    minPrice: 8,
    avgPrice: 12,
    maxPrice: 18,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 8, avg: 12, max: 17 },
      { region: "South India", min: 9, avg: 13, max: 19 },
      { region: "East India", min: 7, avg: 11, max: 16 },
      { region: "West India", min: 8, avg: 12, max: 18 }
    ]
  },
  {
    id: "switches-unit",
    name: "Modular Switches",
    category: "Electrical",
    unit: "per unit",
    minPrice: 25,
    avgPrice: 55,
    maxPrice: 140,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 22, avg: 52, max: 130 },
      { region: "South India", min: 27, avg: 58, max: 145 },
      { region: "East India", min: 24, avg: 50, max: 125 },
      { region: "West India", min: 25, avg: 55, max: 140 }
    ]
  },
  {
    id: "mcb-unit",
    name: "Circuit Breakers (MCB)",
    category: "Electrical",
    unit: "per unit",
    minPrice: 180,
    avgPrice: 320,
    maxPrice: 550,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 175, avg: 310, max: 530 },
      { region: "South India", min: 185, avg: 330, max: 560 },
      { region: "East India", min: 170, avg: 300, max: 520 },
      { region: "West India", min: 180, avg: 320, max: 550 }
    ]
  },
  {
    id: "led-lights-unit",
    name: "LED Downlights (9W)",
    category: "Electrical",
    unit: "per unit",
    minPrice: 90,
    avgPrice: 160,
    maxPrice: 320,
    trend: "Decreasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 85, avg: 150, max: 300 },
      { region: "South India", min: 95, avg: 170, max: 340 },
      { region: "East India", min: 80, avg: 145, max: 290 },
      { region: "West India", min: 90, avg: 160, max: 320 }
    ]
  },

  // --- PLUMBING ---
  {
    id: "pvc-pipes-metre",
    name: "PVC Drainage Pipes",
    category: "Plumbing",
    unit: "per metre",
    minPrice: 70,
    avgPrice: 110,
    maxPrice: 180,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 68, avg: 105, max: 170 },
      { region: "South India", min: 72, avg: 115, max: 185 },
      { region: "East India", min: 65, avg: 100, max: 165 },
      { region: "West India", min: 70, avg: 110, max: 180 }
    ]
  },
  {
    id: "cpvc-pipes-metre",
    name: "CPVC Water Pipes",
    category: "Plumbing",
    unit: "per metre",
    minPrice: 95,
    avgPrice: 140,
    maxPrice: 220,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 90, avg: 135, max: 210 },
      { region: "South India", min: 100, avg: 145, max: 230 },
      { region: "East India", min: 88, avg: 130, max: 200 },
      { region: "West India", min: 95, avg: 140, max: 220 }
    ]
  },
  {
    id: "water-tanks-litre",
    name: "Water Tanks (Triple Layer)",
    category: "Plumbing",
    unit: "per litre capacity",
    minPrice: 6,
    avgPrice: 8.5,
    maxPrice: 12,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 5.8, avg: 8.0, max: 11.0 },
      { region: "South India", min: 6.2, avg: 9.0, max: 12.5 },
      { region: "East India", min: 5.5, avg: 7.8, max: 10.5 },
      { region: "West India", min: 6.0, avg: 8.5, max: 12.0 }
    ]
  },
  {
    id: "faucets-unit",
    name: "Brass Water Faucets",
    category: "Plumbing",
    unit: "per unit",
    minPrice: 350,
    avgPrice: 850,
    maxPrice: 2400,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 320, avg: 800, max: 2200 },
      { region: "South India", min: 380, avg: 900, max: 2600 },
      { region: "East India", min: 330, avg: 780, max: 2100 },
      { region: "West India", min: 350, avg: 850, max: 2400 }
    ]
  },

  // --- PAINT ---
  {
    id: "interior-paint-litre",
    name: "Interior Acrylic Emulsion",
    category: "Paint",
    unit: "per litre",
    minPrice: 120,
    avgPrice: 280,
    maxPrice: 550,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 110, avg: 260, max: 520 },
      { region: "South India", min: 130, avg: 300, max: 580 },
      { region: "East India", min: 115, avg: 270, max: 530 },
      { region: "West India", min: 120, avg: 280, max: 550 }
    ]
  },
  {
    id: "exterior-paint-litre",
    name: "Exterior Weatherproof Paint",
    category: "Paint",
    unit: "per litre",
    minPrice: 160,
    avgPrice: 340,
    maxPrice: 680,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 150, avg: 320, max: 640 },
      { region: "South India", min: 175, avg: 360, max: 720 },
      { region: "East India", min: 155, avg: 330, max: 650 },
      { region: "West India", min: 160, avg: 340, max: 680 }
    ]
  },
  {
    id: "primers-litre",
    name: "Wall Primer (Water-based)",
    category: "Paint",
    unit: "per litre",
    minPrice: 90,
    avgPrice: 140,
    maxPrice: 210,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 85, avg: 130, max: 195 },
      { region: "South India", min: 95, avg: 150, max: 220 },
      { region: "East India", min: 88, avg: 135, max: 200 },
      { region: "West India", min: 90, avg: 140, max: 210 }
    ]
  },
  {
    id: "putty-kg",
    name: "Wall Putty (Acrylic)",
    category: "Paint",
    unit: "per kg",
    minPrice: 15,
    avgPrice: 25,
    maxPrice: 40,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 14, avg: 23, max: 37 },
      { region: "South India", min: 16, avg: 27, max: 42 },
      { region: "East India", min: 13, avg: 22, max: 35 },
      { region: "West India", min: 15, avg: 25, max: 40 }
    ]
  },

  // --- FURNITURE ---
  {
    id: "plywood-sheet",
    name: "Commercial Plywood (18mm, 8x4 ft)",
    category: "Furniture",
    unit: "per sheet",
    minPrice: 1800,
    avgPrice: 2800,
    maxPrice: 4500,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 1750, avg: 2700, max: 4300 },
      { region: "South India", min: 1900, avg: 2950, max: 4700 },
      { region: "East India", min: 1700, avg: 2600, max: 4100 },
      { region: "West India", min: 1800, avg: 2800, max: 4500 }
    ]
  },
  {
    id: "laminates-sheet",
    name: "Decorative Laminate (1mm, 8x4 ft)",
    category: "Furniture",
    unit: "per sheet",
    minPrice: 900,
    avgPrice: 1600,
    maxPrice: 3500,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 850, avg: 1500, max: 3300 },
      { region: "South India", min: 950, avg: 1700, max: 3700 },
      { region: "East India", min: 880, avg: 1450, max: 3200 },
      { region: "West India", min: 900, avg: 1600, max: 3500 }
    ]
  },
  {
    id: "mdf-sheet",
    name: "MDF Board (18mm, 8x4 ft)",
    category: "Furniture",
    unit: "per sheet",
    minPrice: 1200,
    avgPrice: 1950,
    maxPrice: 2800,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 1150, avg: 1900, max: 2700 },
      { region: "South India", min: 1250, avg: 2050, max: 2900 },
      { region: "East India", min: 1100, avg: 1850, max: 2600 },
      { region: "West India", min: 1200, avg: 1950, max: 2800 }
    ]
  },

  // --- AGRICULTURAL ---
  {
    id: "fertilizer-kg",
    name: "NPK Chemical Fertilizer",
    category: "Agricultural",
    unit: "per kg",
    minPrice: 20,
    avgPrice: 32,
    maxPrice: 50,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 19, avg: 30, max: 48 },
      { region: "South India", min: 21, avg: 34, max: 52 },
      { region: "East India", min: 18, avg: 29, max: 45 },
      { region: "West India", min: 20, avg: 32, max: 50 }
    ]
  },
  {
    id: "seeds-kg",
    name: "Hybrid Vegetable Seeds",
    category: "Agricultural",
    unit: "per kg",
    minPrice: 250,
    avgPrice: 600,
    maxPrice: 1500,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 240, avg: 580, max: 1400 },
      { region: "South India", min: 260, avg: 620, max: 1600 },
      { region: "East India", min: 230, avg: 550, max: 1350 },
      { region: "West India", min: 250, avg: 600, max: 1500 }
    ]
  },
  {
    id: "pesticides-litre",
    name: "Neem Bio-Pesticide",
    category: "Agricultural",
    unit: "per litre",
    minPrice: 280,
    avgPrice: 420,
    maxPrice: 750,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 270, avg: 400, max: 700 },
      { region: "South India", min: 290, avg: 440, max: 800 },
      { region: "East India", min: 265, avg: 390, max: 680 },
      { region: "West India", min: 280, avg: 420, max: 750 }
    ]
  },

  // --- FABRIC ---
  {
    id: "cotton-fabrics-metre",
    name: "Pure Cotton Fabric",
    category: "Fabric",
    unit: "per metre",
    minPrice: 85,
    avgPrice: 160,
    maxPrice: 380,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 80, avg: 150, max: 350 },
      { region: "South India", min: 90, avg: 170, max: 400 },
      { region: "East India", min: 82, avg: 155, max: 370 },
      { region: "West India", min: 85, avg: 160, max: 380 }
    ]
  },
  {
    id: "polyester-fabrics-metre",
    name: "Polyester Fabric",
    category: "Fabric",
    unit: "per metre",
    minPrice: 45,
    avgPrice: 80,
    maxPrice: 180,
    trend: "Decreasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 40, avg: 75, max: 170 },
      { region: "South India", min: 48, avg: 85, max: 190 },
      { region: "East India", min: 42, avg: 78, max: 175 },
      { region: "West India", min: 45, avg: 80, max: 180 }
    ]
  },
  {
    id: "silk-fabrics-metre",
    name: "Pure Mulberry Silk",
    category: "Fabric",
    unit: "per metre",
    minPrice: 650,
    avgPrice: 1200,
    maxPrice: 3500,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 620, avg: 1150, max: 3300 },
      { region: "South India", min: 680, avg: 1250, max: 3700 },
      { region: "East India", min: 630, avg: 1180, max: 3400 },
      { region: "West India", min: 650, avg: 1200, max: 3500 }
    ]
  },
  {
    id: "bed-sheets-set",
    name: "Cotton Bed Sheets (Double Bed)",
    category: "Fabric",
    unit: "per set",
    minPrice: 450,
    avgPrice: 950,
    maxPrice: 2800,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 420, avg: 900, max: 2600 },
      { region: "South India", min: 480, avg: 1000, max: 3000 },
      { region: "East India", min: 430, avg: 920, max: 2700 },
      { region: "West India", min: 450, avg: 950, max: 2800 }
    ]
  },

  // --- SOLAR ---
  {
    id: "solar-panels-watt",
    name: "Solar Panels (Mono PERC)",
    category: "Solar",
    unit: "per watt",
    minPrice: 24,
    avgPrice: 32,
    maxPrice: 42,
    trend: "Decreasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 23, avg: 31, max: 40 },
      { region: "South India", min: 25, avg: 33, max: 44 },
      { region: "East India", min: 24, avg: 32, max: 42 },
      { region: "West India", min: 24, avg: 32, max: 42 }
    ]
  },
  {
    id: "inverters-unit",
    name: "Solar Inverter (3kVA)",
    category: "Solar",
    unit: "per unit",
    minPrice: 18000,
    avgPrice: 26000,
    maxPrice: 38000,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 17500, avg: 25000, max: 37000 },
      { region: "South India", min: 18500, avg: 27000, max: 39500 },
      { region: "East India", min: 17000, avg: 24500, max: 36000 },
      { region: "West India", min: 18000, avg: 26000, max: 38000 }
    ]
  },
  {
    id: "batteries-unit",
    name: "Solar Tubular Battery (150Ah)",
    category: "Solar",
    unit: "per unit",
    minPrice: 11000,
    avgPrice: 14500,
    maxPrice: 19000,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 10500, avg: 14000, max: 18500 },
      { region: "South India", min: 11500, avg: 15000, max: 19500 },
      { region: "East India", min: 10800, avg: 14200, max: 18000 },
      { region: "West India", min: 11000, avg: 14500, max: 19000 }
    ]
  },

  // --- AUTOMOTIVE ---
  {
    id: "engine-oil-litre",
    name: "Synthetic Engine Oil (5W-30)",
    category: "Automotive",
    unit: "per litre",
    minPrice: 450,
    avgPrice: 650,
    maxPrice: 950,
    trend: "Increasing",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 440, avg: 630, max: 920 },
      { region: "South India", min: 460, avg: 670, max: 980 },
      { region: "East India", min: 440, avg: 640, max: 940 },
      { region: "West India", min: 450, avg: 650, max: 950 }
    ]
  },
  {
    id: "lubricants-litre",
    name: "Automotive Grease / Lubricant",
    category: "Automotive",
    unit: "per litre/kg",
    minPrice: 220,
    avgPrice: 340,
    maxPrice: 480,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 210, avg: 330, max: 460 },
      { region: "South India", min: 230, avg: 350, max: 500 },
      { region: "East India", min: 215, avg: 325, max: 450 },
      { region: "West India", min: 220, avg: 340, max: 480 }
    ]
  },
  {
    id: "tires-unit",
    name: "Passenger Car Tire (15-inch)",
    category: "Automotive",
    unit: "per unit",
    minPrice: 3200,
    avgPrice: 4800,
    maxPrice: 7500,
    trend: "Stable",
    lastUpdated: "2026-06-10",
    regionalPrices: [
      { region: "North India", min: 3100, avg: 4700, max: 7300 },
      { region: "South India", min: 3300, avg: 4900, max: 7700 },
      { region: "East India", min: 3150, avg: 4600, max: 7200 },
      { region: "West India", min: 3200, avg: 4800, max: 7500 }
    ]
  }
];
