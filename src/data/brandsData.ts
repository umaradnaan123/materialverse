export interface Brand {
  id: string;
  name: string;
  logo: string;
  categories: string[];
  origin: string;
  established: number;
  headquarters: string;
  priceSegment: 'Budget' | 'Mid' | 'Premium';
  certifications: string[];
  products: string[];
  applications: string[];
  advantages: string[];
  limitations: string[];
  website: string;
  relatedBrands: string[];
  description: string;
  overview: string;
  faqs: { q: string; a: string }[];
}

export const brandsData: Brand[] = [
  {
    "id": "ultratech",
    "name": "UltraTech Cement",
    "logo": "🏗️",
    "categories": [
      "Cement",
      "Construction Chemicals"
    ],
    "origin": "India",
    "established": 1983,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001",
      "IS 12269"
    ],
    "products": [
      "UltraTech Premium",
      "UltraTech Super",
      "UltraTech Weather Pro"
    ],
    "applications": [
      "Foundation Concrete",
      "Structural Columns",
      "Exterior Plastering"
    ],
    "advantages": [
      "High structural strength",
      "Excellent workability",
      "Wide retail availability"
    ],
    "limitations": [
      "Slightly higher cost than local brands",
      "Initial setting time requires quick application"
    ],
    "website": "https://www.ultratechcement.com",
    "relatedBrands": [
      "acc-cement",
      "ambuja-cement"
    ],
    "description": "India's largest manufacturer of grey cement, ready-mix concrete, and building solutions.",
    "overview": "India's largest manufacturer of grey cement, ready-mix concrete, and building solutions. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of UltraTech Cement products?",
        "a": "Typically UltraTech Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does UltraTech Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "acc-cement",
    "name": "ACC Cement",
    "logo": "🧱",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1936,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001",
      "IS 269"
    ],
    "products": [
      "ACC Gold",
      "ACC Concrete+ Extra Strong",
      "ACC Suraksha"
    ],
    "applications": [
      "General Masonry",
      "Slab Construction",
      "Roof Curing"
    ],
    "advantages": [
      "Proven durability over decades",
      "Low heat of hydration option",
      "Great bonding"
    ],
    "limitations": [
      "Slow curing in cold weather conditions"
    ],
    "website": "https://www.acccement.com",
    "relatedBrands": [
      "ultratech",
      "ambuja-cement"
    ],
    "description": "One of the oldest and most trusted cement brands in India, known for heavy structural products.",
    "overview": "One of the oldest and most trusted cement brands in India, known for heavy structural products. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of ACC Cement products?",
        "a": "Typically ACC Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does ACC Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ambuja-cement",
    "name": "Ambuja Cement",
    "logo": "🛡️",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1983,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001",
      "IS 8112"
    ],
    "products": [
      "Ambuja Kawach",
      "Ambuja Plus Roof Special",
      "Ambuja Compocem"
    ],
    "applications": [
      "Waterproof Plastering",
      "Basement Foundations",
      "Roof Slabs"
    ],
    "advantages": [
      "Excellent water repellent properties",
      "Eco-friendly blend options"
    ],
    "limitations": [
      "Requires skilled mixing for waterproof grades"
    ],
    "website": "https://www.ambujacement.com",
    "relatedBrands": [
      "ultratech",
      "acc-cement"
    ],
    "description": "Highly regarded for its water-repellent cement formulations and strong structural grade cements.",
    "overview": "Highly regarded for its water-repellent cement formulations and strong structural grade cements. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Ambuja Cement products?",
        "a": "Typically Ambuja Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Ambuja Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "shree-cement",
    "name": "Shree Cement",
    "logo": "⚡",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1979,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Budget",
    "certifications": [
      "ISI Marked",
      "ISO 14001"
    ],
    "products": [
      "Shree Jung Rodhak",
      "Roofon Cement",
      "Bangur Power"
    ],
    "applications": [
      "Bricklaying",
      "Internal Wall Plastering",
      "Flooring Base Slabs"
    ],
    "advantages": [
      "Highly cost-effective",
      "Superb setting time",
      "Eco-friendly production"
    ],
    "limitations": [
      "Lower brand recall in premium segments"
    ],
    "website": "https://www.shreecement.com",
    "relatedBrands": [
      "dalmia-cement",
      "ramco-cement"
    ],
    "description": "A leading cost-efficient manufacturer of cement, operating under Shree, Bangur, and Rockstrong brands.",
    "overview": "A leading cost-efficient manufacturer of cement, operating under Shree, Bangur, and Rockstrong brands. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Shree Cement products?",
        "a": "Typically Shree Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Shree Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "dalmia-cement",
    "name": "Dalmia Cement",
    "logo": "💎",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1939,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001",
      "GRIHA GreenPro"
    ],
    "products": [
      "Dalmia DSP",
      "Dalmia Infra Pro",
      "Dalmia Supreme"
    ],
    "applications": [
      "High-performance Concrete",
      "Airport Runways",
      "Railway Sleepers"
    ],
    "advantages": [
      "Low carbon footprint",
      "Exceptional initial strength development"
    ],
    "limitations": [
      "Premium series can be expensive for residential projects"
    ],
    "website": "https://www.dalmiacement.com",
    "relatedBrands": [
      "shree-cement",
      "ramco-cement"
    ],
    "description": "Pioneers in specialized green cement manufacturing, offering superior structural concrete strength.",
    "overview": "Pioneers in specialized green cement manufacturing, offering superior structural concrete strength. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Dalmia Cement products?",
        "a": "Typically Dalmia Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Dalmia Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ramco-cement",
    "name": "Ramco Cement",
    "logo": "🏛️",
    "categories": [
      "Cement",
      "Construction Chemicals"
    ],
    "origin": "India",
    "established": 1961,
    "headquarters": "Chennai, Tamil Nadu",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001"
    ],
    "products": [
      "Ramco Supergrade",
      "Ramco Super Steel",
      "Ramco Tile Fix"
    ],
    "applications": [
      "Plastering Work",
      "Marine Construction",
      "Tile Fixing"
    ],
    "advantages": [
      "Excellent sulfate and chemical resistance",
      "High durability in coastal environments"
    ],
    "limitations": [
      "Limited retail availability in Northern India"
    ],
    "website": "https://www.ramcocements.in",
    "relatedBrands": [
      "dalmia-cement",
      "india-cements"
    ],
    "description": "Leading cement brand in Southern India, highly trusted for chemical-resistant and coastal concrete projects.",
    "overview": "Leading cement brand in Southern India, highly trusted for chemical-resistant and coastal concrete projects. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Ramco Cement products?",
        "a": "Typically Ramco Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Ramco Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jk-cement",
    "name": "JK Cement",
    "logo": "⚪",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1975,
    "headquarters": "Kanpur, Uttar Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001"
    ],
    "products": [
      "JK Super Strong",
      "JK WallMaxx White Putty",
      "JK White Cement"
    ],
    "applications": [
      "Decorative Wall Putty",
      "Mosaic Flooring",
      "Architectural Concrete"
    ],
    "advantages": [
      "World leader in white cement",
      "Excellent smooth finishing capability"
    ],
    "limitations": [
      "Grey cement has moderate penetration in Southern regions"
    ],
    "website": "https://www.jkcement.com",
    "relatedBrands": [
      "birla-cement",
      "ultratech"
    ],
    "description": "Global pioneer in white cement manufacturing and premium wall putty decorative finishes.",
    "overview": "Global pioneer in white cement manufacturing and premium wall putty decorative finishes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of JK Cement products?",
        "a": "Typically JK Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does JK Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "birla-cement",
    "name": "Birla Cement",
    "logo": "🌳",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1919,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001"
    ],
    "products": [
      "Birla Samrat",
      "Birla Unique",
      "Birla Chetak"
    ],
    "applications": [
      "General Brick Mortar",
      "Residential Slabs",
      "Paving Blocks"
    ],
    "advantages": [
      "Strong particle sizing",
      "Consistent color and texture"
    ],
    "limitations": [
      "Standard packaging is prone to moisture damage if stored poorly"
    ],
    "website": "https://www.birlacements.com",
    "relatedBrands": [
      "jk-cement",
      "nuvoco-vistas"
    ],
    "description": "A multi-decade legacy brand offering dependable building cement varieties across India.",
    "overview": "A multi-decade legacy brand offering dependable building cement varieties across India. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Birla Cement products?",
        "a": "Typically Birla Cement products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Birla Cement conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "india-cements",
    "name": "India Cements",
    "logo": "🏆",
    "categories": [
      "Cement"
    ],
    "origin": "India",
    "established": 1946,
    "headquarters": "Chennai, Tamil Nadu",
    "priceSegment": "Budget",
    "certifications": [
      "ISI Marked",
      "ISO 9001"
    ],
    "products": [
      "Sankar Super Power",
      "Coromandel King",
      "Raasi Gold"
    ],
    "applications": [
      "General Masonry",
      "Precast Concrete Blocks",
      "Road Sub-bases"
    ],
    "advantages": [
      "Economical options for bulk buyers",
      "High workability time"
    ],
    "limitations": [
      "Lower early-age strength compared to premium grades"
    ],
    "website": "https://www.indiacements.co.in",
    "relatedBrands": [
      "ramco-cement",
      "shree-cement"
    ],
    "description": "One of the largest cement manufacturers in South India, with legacy brands Sankar, Coromandel, and Raasi.",
    "overview": "One of the largest cement manufacturers in South India, with legacy brands Sankar, Coromandel, and Raasi. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of India Cements products?",
        "a": "Typically India Cements products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does India Cements conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "nuvoco-vistas",
    "name": "Nuvoco Vistas",
    "logo": "🏢",
    "categories": [
      "Cement",
      "Construction Chemicals"
    ],
    "origin": "India",
    "established": 1999,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISI Marked",
      "ISO 9001"
    ],
    "products": [
      "Duraguard",
      "Concreto",
      "Double Bull Cement"
    ],
    "applications": [
      "High-rise structural columns",
      "Damp-resistant plastering",
      "Waterproof foundations"
    ],
    "advantages": [
      "Excellent damp-proofing technology built-in",
      "Highly smooth surface finishes"
    ],
    "limitations": [
      "Slightly premium price positioning in regional pockets"
    ],
    "website": "https://www.nuvoco.com",
    "relatedBrands": [
      "birla-cement",
      "ultratech"
    ],
    "description": "Formerly Lafarge India, Nuvoco is a leading building materials manufacturer specializing in premium concrete.",
    "overview": "Formerly Lafarge India, Nuvoco is a leading building materials manufacturer specializing in premium concrete. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Nuvoco Vistas products?",
        "a": "Typically Nuvoco Vistas products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Nuvoco Vistas conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "tata-steel",
    "name": "Tata Steel",
    "logo": "🔩",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1907,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IS 1786",
      "GRIHA GreenPro",
      "ISO 9001"
    ],
    "products": [
      "Tata Tiscon TMT Rebars",
      "Tata Astrum Hot Rolled Sheets",
      "Tata Steelium Cold Rolled"
    ],
    "applications": [
      "High-rise Foundations",
      "Seismic Zone Structures",
      "Heavy Bridging"
    ],
    "advantages": [
      "Unmatched earthquake resistance (Super Ductile)",
      "Rust resistant TMT grades"
    ],
    "limitations": [
      "Premium price point compared to secondary steel brands"
    ],
    "website": "https://www.tatasteel.com",
    "relatedBrands": [
      "jsw-steel",
      "jindal-steel"
    ],
    "description": "The pioneer of steel production in India, offering Tata Tiscon rebars, the benchmark for reinforcement.",
    "overview": "The pioneer of steel production in India, offering Tata Tiscon rebars, the benchmark for reinforcement. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Tata Steel products?",
        "a": "Typically Tata Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Tata Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jsw-steel",
    "name": "JSW Steel",
    "logo": "🏭",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1982,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "JSW Neosteel TMT",
      "JSW Colouron+ Galvanized Sheets",
      "JSW Galvalume"
    ],
    "applications": [
      "Industrial Roof Sheds",
      "RCC Slabs",
      "Marine Structures"
    ],
    "advantages": [
      "High yield strength",
      "Advanced corrosion protection technology"
    ],
    "limitations": [
      "Color coating may fade after 10-15 years of harsh UV exposure"
    ],
    "website": "https://www.jsw.in",
    "relatedBrands": [
      "tata-steel",
      "jindal-steel"
    ],
    "description": "A global steel powerhouse known for high-grade TMT rebars, coated steel sheets, and structural pipes.",
    "overview": "A global steel powerhouse known for high-grade TMT rebars, coated steel sheets, and structural pipes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of JSW Steel products?",
        "a": "Typically JSW Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does JSW Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jindal-steel",
    "name": "Jindal Steel & Power",
    "logo": "🏗️",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1979,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "Jindal Panther TMT Rebars",
      "Jindal Speedflo Wire Rods",
      "Structural Beams & Columns"
    ],
    "applications": [
      "Flyovers & Bridges",
      "High-rise Framed Structures",
      "Industrial Columns"
    ],
    "advantages": [
      "High fatigue resistance",
      "Superior bendability and weldability"
    ],
    "limitations": [
      "Focuses heavily on institutional sales, lower retail presence in rural segments"
    ],
    "website": "https://www.jindalsteelpower.com",
    "relatedBrands": [
      "tata-steel",
      "jsw-steel"
    ],
    "description": "Leading infrastructure steel manufacturer, famous for Panther TMT rebars and heavy steel beams.",
    "overview": "Leading infrastructure steel manufacturer, famous for Panther TMT rebars and heavy steel beams. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Jindal Steel & Power products?",
        "a": "Typically Jindal Steel & Power products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Jindal Steel & Power conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "sail",
    "name": "SAIL (Steel Authority of India)",
    "logo": "🏛️",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1954,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "IS 2062"
    ],
    "products": [
      "SAIL TMT HCR (Corrosion Resistant)",
      "SAIL Structural Sections",
      "SAIL Plates"
    ],
    "applications": [
      "Public Sector Infrastructure",
      "Bridges",
      "Defence Installations"
    ],
    "advantages": [
      "Extremely reliable public sector quality",
      "High load-bearing capacity structural beams"
    ],
    "limitations": [
      "Procurement procedures can be complex for small private builders"
    ],
    "website": "https://www.sail.co.in",
    "relatedBrands": [
      "vizag-steel",
      "jindal-steel"
    ],
    "description": "India's largest public sector steel maker, the backbone of nation-building infrastructure.",
    "overview": "India's largest public sector steel maker, the backbone of nation-building infrastructure. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of SAIL (Steel Authority of India) products?",
        "a": "Typically SAIL (Steel Authority of India) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does SAIL (Steel Authority of India) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "vizag-steel",
    "name": "Vizag Steel (RINL)",
    "logo": "🌊",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1982,
    "headquarters": "Visakhapatnam, Andhra Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "Vizag TMT Rebars",
      "RINL Structural Steel",
      "Wire Rods"
    ],
    "applications": [
      "Marine Construction",
      "Residential Foundations",
      "Coastal Structures"
    ],
    "advantages": [
      "Excellent bonding with concrete",
      "Low sulfur and phosphorus impurities"
    ],
    "limitations": [
      "Limited retail dealer network in Northern and Western landlocked states"
    ],
    "website": "https://www.vizagsteel.com",
    "relatedBrands": [
      "sail",
      "shyam-steel"
    ],
    "description": "State-owned Vizag Steel, globally recognized for low-impurity virgin steel rebars and coastal suitability.",
    "overview": "State-owned Vizag Steel, globally recognized for low-impurity virgin steel rebars and coastal suitability. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Vizag Steel (RINL) products?",
        "a": "Typically Vizag Steel (RINL) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Vizag Steel (RINL) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kamdhenu-steel",
    "name": "Kamdhenu Steel",
    "logo": "🐂",
    "categories": [
      "Steel",
      "Paints & Coatings"
    ],
    "origin": "India",
    "established": 1994,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Budget",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "Kamdhenu Nxt TMT",
      "Kamdhenu PAS 10000",
      "Kamdhenu Structural Steel"
    ],
    "applications": [
      "Affordable Housing Slabs",
      "Residential Beams",
      "General Fabrication"
    ],
    "advantages": [
      "Highly economical",
      "Double-ribbed design for extra concrete grip"
    ],
    "limitations": [
      "Higher carbon content in cheaper grades makes them less ductile"
    ],
    "website": "https://www.kamdhenutmt.com",
    "relatedBrands": [
      "shyam-steel",
      "rathi-steel"
    ],
    "description": "A massive franchise network brand, making high-strength TMT rebars highly affordable.",
    "overview": "A massive franchise network brand, making high-strength TMT rebars highly affordable. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kamdhenu Steel products?",
        "a": "Typically Kamdhenu Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kamdhenu Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "shyam-steel",
    "name": "Shyam Steel",
    "logo": "🔥",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1953,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "Shyam TMT Flexi Strong",
      "Shyam Structural Sections",
      "Linkbo Binders"
    ],
    "applications": [
      "Bridges",
      "Residential Columns",
      "Highways"
    ],
    "advantages": [
      "Perfect balance of strength and flexibility (Flexi Strong)",
      "Very consistent weight per meter"
    ],
    "limitations": [
      "Premium cost in Eastern India compared to local furnace rebars"
    ],
    "website": "https://www.shyamsteel.com",
    "relatedBrands": [
      "srmb-steel",
      "kamdhenu-steel"
    ],
    "description": "Prominent structural steel brand, endorsed widely for high flexibility TMT rebars.",
    "overview": "Prominent structural steel brand, endorsed widely for high flexibility TMT rebars. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Shyam Steel products?",
        "a": "Typically Shyam Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Shyam Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "srmb-steel",
    "name": "SRMB Steel",
    "logo": "⚙️",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1951,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "SRMB 500+ SR TMT",
      "SRMB Realedge",
      "Realring Stirrups"
    ],
    "applications": [
      "Seismic Zone RCC Slabs",
      "Residential Masonry Frame",
      "Stirrups"
    ],
    "advantages": [
      "X-ribbed pattern for maximum bonding strength",
      "Advanced block mill manufacturing"
    ],
    "limitations": [
      "Mainly active in East and North-East India"
    ],
    "website": "https://www.srmbsteel.com",
    "relatedBrands": [
      "shyam-steel",
      "kamdhenu-steel"
    ],
    "description": "A tech-driven TMT manufacturer, famous for patented ribbed rebars and earthquake-safe steel.",
    "overview": "A tech-driven TMT manufacturer, famous for patented ribbed rebars and earthquake-safe steel. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of SRMB Steel products?",
        "a": "Typically SRMB Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does SRMB Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "rathi-steel",
    "name": "Rathi Steel",
    "logo": "🏗️",
    "categories": [
      "Steel"
    ],
    "origin": "India",
    "established": 1942,
    "headquarters": "New Delhi",
    "priceSegment": "Budget",
    "certifications": [
      "IS 1786",
      "ISO 9001"
    ],
    "products": [
      "Rathi Eurotherm TMT",
      "Rathi Shaktiman TMT",
      "Rathi Wire Rods"
    ],
    "applications": [
      "Low-rise Residential Buildings",
      "Trusses",
      "Foundation Pillars"
    ],
    "advantages": [
      "Extremely popular in North India",
      "Budget-friendly bulk rates"
    ],
    "limitations": [
      "Variable quality checks in lower tier franchise mills"
    ],
    "website": "https://www.rathisteel.com",
    "relatedBrands": [
      "kamdhenu-steel",
      "electrosteel"
    ],
    "description": "A legacy steel brand, dominant in Northern India's residential TMT rebar markets.",
    "overview": "A legacy steel brand, dominant in Northern India's residential TMT rebar markets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Rathi Steel products?",
        "a": "Typically Rathi Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Rathi Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "electrosteel",
    "name": "Electrosteel Steels",
    "logo": "⚡",
    "categories": [
      "Steel",
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1994,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "IS 8329"
    ],
    "products": [
      "Electrosteel Ductile Iron Pipes",
      "Electrosteel TMT Rebars"
    ],
    "applications": [
      "Water Main Pipelines",
      "Sewerage Infrastructure",
      "Pillar Rebars"
    ],
    "advantages": [
      "World leader in Ductile Iron (DI) pipes",
      "High corrosion resistance"
    ],
    "limitations": [
      "Limited retail TMT presence outside industrial hubs"
    ],
    "website": "https://www.electrosteel.com",
    "relatedBrands": [
      "rathi-steel",
      "jsw-steel"
    ],
    "description": "Part of the Vedanta group, a dominant global supplier of ductile iron pipes and high-durability TMT.",
    "overview": "Part of the Vedanta group, a dominant global supplier of ductile iron pipes and high-durability TMT. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Electrosteel Steels products?",
        "a": "Typically Electrosteel Steels products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Electrosteel Steels conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "asian-paints",
    "name": "Asian Paints",
    "logo": "🎨",
    "categories": [
      "Paints & Coatings",
      "Waterproofing Materials"
    ],
    "origin": "India",
    "established": 1942,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 14001",
      "IS 15489"
    ],
    "products": [
      "Royale Glitz Luxury Interior Emulsion",
      "Apex Ultima Protek Exterior Paint",
      "SmartCare Damp Proof"
    ],
    "applications": [
      "Luxury Interiors",
      "Extreme Weather Exteriors",
      "Terrace Waterproofing"
    ],
    "advantages": [
      "Unmatched shade spectrum and consistency",
      "10-year durability warranties on premium exterior paints"
    ],
    "limitations": [
      "Premium emulsions are expensive",
      "Requires primer coats for correct color matching"
    ],
    "website": "https://www.asianpaints.com",
    "relatedBrands": [
      "berger-paints",
      "dulux-paints"
    ],
    "description": "The undisputed market leader in Indian decorative coatings, providing advanced smart textures.",
    "overview": "The undisputed market leader in Indian decorative coatings, providing advanced smart textures. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Asian Paints products?",
        "a": "Typically Asian Paints products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Asian Paints conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "berger-paints",
    "name": "Berger Paints",
    "logo": "🖌️",
    "categories": [
      "Paints & Coatings",
      "Waterproofing Materials"
    ],
    "origin": "India",
    "established": 1923,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "IS 5410"
    ],
    "products": [
      "Easy Clean Interior Emulsion",
      "WeatherCoat Long Life",
      "Homeshield Waterproofing"
    ],
    "applications": [
      "Kids Bedrooms (Washable Paint)",
      "High-rainfall Exterior Walls",
      "Basement Waterproofing"
    ],
    "advantages": [
      "High stain washability",
      "Excellent anti-dust exterior properties"
    ],
    "limitations": [
      "Slightly lower brand prestige in ultra-luxury finishes"
    ],
    "website": "https://www.bergerpaints.com",
    "relatedBrands": [
      "asian-paints",
      "nerolac-paints"
    ],
    "description": "India's second-largest paint company, renowned for easy-to-clean interior finishes and weather protection.",
    "overview": "India's second-largest paint company, renowned for easy-to-clean interior finishes and weather protection. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Berger Paints products?",
        "a": "Typically Berger Paints products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Berger Paints conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "nerolac-paints",
    "name": "Kansai Nerolac Paints",
    "logo": "🎨",
    "categories": [
      "Paints & Coatings"
    ],
    "origin": "Japan / India",
    "established": 1920,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "JIS Certification"
    ],
    "products": [
      "Nerolac Impressions Eco Clean",
      "Excel Everlast Exterior Emulsion",
      "Nerolac Beauty Acrylic Distemper"
    ],
    "applications": [
      "Healthy Living Spaces (Low-odor)",
      "Industrial Automotive Paint",
      "Eco-friendly Plaster Paint"
    ],
    "advantages": [
      "Pioneer of lead-free and low-VOC healthy paints",
      "Superb metal and automotive coatings"
    ],
    "limitations": [
      "Smaller decorative design studio network than Asian Paints"
    ],
    "website": "https://www.nerolac.com",
    "relatedBrands": [
      "asian-paints",
      "berger-paints"
    ],
    "description": "A subsidiary of Kansai Paint Japan, leading in industrial coatings and ultra-low VOC interior emulsions.",
    "overview": "A subsidiary of Kansai Paint Japan, leading in industrial coatings and ultra-low VOC interior emulsions. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kansai Nerolac Paints products?",
        "a": "Typically Kansai Nerolac Paints products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kansai Nerolac Paints conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "indigo-paints",
    "name": "Indigo Paints",
    "logo": "🦄",
    "categories": [
      "Paints & Coatings"
    ],
    "origin": "India",
    "established": 2000,
    "headquarters": "Pune, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Indigo Metallic Sleek Floor Paint",
      "Indigo Bright Ceiling Coat",
      "Indigo Dirtproof Exterior Lamination"
    ],
    "applications": [
      "Concrete Floors",
      "Ceilings",
      "High Dust Exterior Areas"
    ],
    "advantages": [
      "Unique niche products (floor paints, dirtproof lamination)",
      "Aggressive pricing"
    ],
    "limitations": [
      "Lower retail coverage in tier-3 cities"
    ],
    "website": "https://www.indigopaints.com",
    "relatedBrands": [
      "nerolac-paints",
      "shalimar-paints"
    ],
    "description": "A fast-growing disrupter in the paints market, famous for category-creating specialty paint offerings.",
    "overview": "A fast-growing disrupter in the paints market, famous for category-creating specialty paint offerings. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Indigo Paints products?",
        "a": "Typically Indigo Paints products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Indigo Paints conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "dulux-paints",
    "name": "Dulux Paints (AkzoNobel)",
    "logo": "🐶",
    "categories": [
      "Paints & Coatings",
      "Waterproofing Materials"
    ],
    "origin": "Netherlands / India",
    "established": 1931,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001",
      "GRIHA certified"
    ],
    "products": [
      "Dulux Velvet Touch Pearl Glow",
      "Dulux Weathershield Max",
      "Dulux Aquashield waterproof coating"
    ],
    "applications": [
      "Ultra-luxury living rooms",
      "High UV exterior walls",
      "Wet bathrooms"
    ],
    "advantages": [
      "Velvet-like touch finish quality",
      "Superb breathable waterproof membranes"
    ],
    "limitations": [
      "Premium cost",
      "Color mixing tints are highly proprietary"
    ],
    "website": "https://www.dulux.in",
    "relatedBrands": [
      "asian-paints",
      "berger-paints"
    ],
    "description": "Owned by AkzoNobel, global color trends specialist known for luxury velvet finishes and weather shields.",
    "overview": "Owned by AkzoNobel, global color trends specialist known for luxury velvet finishes and weather shields. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Dulux Paints (AkzoNobel) products?",
        "a": "Typically Dulux Paints (AkzoNobel) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Dulux Paints (AkzoNobel) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "shalimar-paints",
    "name": "Shalimar Paints",
    "logo": "🎨",
    "categories": [
      "Paints & Coatings"
    ],
    "origin": "India",
    "established": 1902,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Budget",
    "certifications": [
      "ISO 9001",
      "IS 133"
    ],
    "products": [
      "Shalimar Signature interior emulsion",
      "Shalimar Weather Pro",
      "Shalimar Superlac Distemper"
    ],
    "applications": [
      "Rental Housing Walls",
      "General Metal Structures (Enamels)",
      "Low-cost ceilings"
    ],
    "advantages": [
      "Highly economical pricing",
      "Excellent rustic metal primers and enamels"
    ],
    "limitations": [
      "Lower durability in high moisture areas on walls"
    ],
    "website": "https://www.shalimarpaints.com",
    "relatedBrands": [
      "indigo-paints",
      "nerolac-paints"
    ],
    "description": "One of India's oldest paint companies, highly preferred for budget-conscious projects and industrial primers.",
    "overview": "One of India's oldest paint companies, highly preferred for budget-conscious projects and industrial primers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Shalimar Paints products?",
        "a": "Typically Shalimar Paints products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Shalimar Paints conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kajaria-ceramics",
    "name": "Kajaria Ceramics",
    "logo": "🧱",
    "categories": [
      "Tiles & Flooring"
    ],
    "origin": "India",
    "established": 1988,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 15622",
      "CE Certified",
      "ISO 9001"
    ],
    "products": [
      "Kajaria Eternity Glazed Vitrified Tiles",
      "Kajaria Ceramic Wall Tiles",
      "Polished Vitrified Tiles (PVT)"
    ],
    "applications": [
      "Living Room Floors",
      "Bathroom Walls",
      "Kitchen Backsplash"
    ],
    "advantages": [
      "Huge design catalog",
      "Extremely low water absorption (<0.05% on vitrified)",
      "Scratch resistant surface"
    ],
    "limitations": [
      "Higher fragility in transit of large slab sizes"
    ],
    "website": "https://www.kajariaceramics.com",
    "relatedBrands": [
      "somany-ceramics",
      "johnson-tiles"
    ],
    "description": "India's largest manufacturer of ceramic and vitrified tiles, boasting high-resolution digital prints.",
    "overview": "India's largest manufacturer of ceramic and vitrified tiles, boasting high-resolution digital prints. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kajaria Ceramics products?",
        "a": "Typically Kajaria Ceramics products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kajaria Ceramics conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "somany-ceramics",
    "name": "Somany Ceramics",
    "logo": "🧱",
    "categories": [
      "Tiles & Flooring",
      "Sanitary Ware"
    ],
    "origin": "India",
    "established": 1969,
    "headquarters": "Noida, Uttar Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "IS 15622",
      "Patent for Slip Shield"
    ],
    "products": [
      "Somany Duragres GVT",
      "Somany Slip Shield Tiles",
      "Somany VC Shield Tiles"
    ],
    "applications": [
      "Heavy Traffic Commercial Floors",
      "Bathrooms (Anti-skid)",
      "Outdoor Parking Paths"
    ],
    "advantages": [
      "Slip Shield technology prevents bathroom falls",
      "VC Shield coating prevents glaze wear"
    ],
    "limitations": [
      "Digital prints can wear under abrasive heavy chemical washing"
    ],
    "website": "https://www.somanyceramics.com",
    "relatedBrands": [
      "kajaria-ceramics",
      "johnson-tiles"
    ],
    "description": "Renowned tile innovator, famous for patented slip-resistant and abrasion-resistant glaze coatings.",
    "overview": "Renowned tile innovator, famous for patented slip-resistant and abrasion-resistant glaze coatings. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Somany Ceramics products?",
        "a": "Typically Somany Ceramics products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Somany Ceramics conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "johnson-tiles",
    "name": "H & R Johnson Tiles",
    "logo": "💎",
    "categories": [
      "Tiles & Flooring",
      "Sanitary Ware"
    ],
    "origin": "UK / India",
    "established": 1958,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IS 15622",
      "ISO 14001"
    ],
    "products": [
      "Johnson Marbonite Glazed Vitrified",
      "Johnson Porselano",
      "Johnson Endura Anti-Static Floor"
    ],
    "applications": [
      "Industrial Server Rooms (Anti-static)",
      "Luxury Bathrooms",
      "Exterior Cladding"
    ],
    "advantages": [
      "Pioneers of anti-bacterial germ-free tiles",
      "Excellent heavy-duty industrial tiles (Endura)"
    ],
    "limitations": [
      "Premium cost for specialized industrial and marbonite slabs"
    ],
    "website": "https://www.hrjohnsonindia.com",
    "relatedBrands": [
      "kajaria-ceramics",
      "somany-ceramics"
    ],
    "description": "A subsidiary of Prism Johnson Limited, highly regarded for germ-free, anti-static, and heavy-duty tiles.",
    "overview": "A subsidiary of Prism Johnson Limited, highly regarded for germ-free, anti-static, and heavy-duty tiles. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of H & R Johnson Tiles products?",
        "a": "Typically H & R Johnson Tiles products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does H & R Johnson Tiles conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "orientbell-tiles",
    "name": "Orientbell Tiles",
    "logo": "📐",
    "categories": [
      "Tiles & Flooring"
    ],
    "origin": "India",
    "established": 1977,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 15622",
      "ISO 9001"
    ],
    "products": [
      "OBL Forever Tiles (Scratch Free)",
      "Orientbell ODH Ceramic Tiles",
      "Orientbell Cool Tiles (Heat Reflective)"
    ],
    "applications": [
      "Roof Terraces (Cool tiles)",
      "Kitchen Counters",
      "Bathroom Floorings"
    ],
    "advantages": [
      "Cool tiles reflect UV to lower building temperature",
      "Forever tiles are highly scratch resistant"
    ],
    "limitations": [
      "Fewer luxury large-slab sizes compared to Kajaria"
    ],
    "website": "https://www.orientbell.com",
    "relatedBrands": [
      "somany-ceramics",
      "nitco-tiles"
    ],
    "description": "Orientbell is famous for cool heat-reflective roof tiles and scratch-free glazed finishes.",
    "overview": "Orientbell is famous for cool heat-reflective roof tiles and scratch-free glazed finishes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Orientbell Tiles products?",
        "a": "Typically Orientbell Tiles products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Orientbell Tiles conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "nitco-tiles",
    "name": "Nitco Tiles",
    "logo": "🏛️",
    "categories": [
      "Tiles & Flooring",
      "Marble & Granite"
    ],
    "origin": "India",
    "established": 1953,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IS 15622",
      "ISO 9001"
    ],
    "products": [
      "Nitco GVT Floorings",
      "Nitco Natural Italian Marble",
      "Nitco Clay Tiles"
    ],
    "applications": [
      "Luxury Hotel Lobbies",
      "Premium Residential Pavements",
      "Living Rooms"
    ],
    "advantages": [
      "Superb collection of natural Italian marble and stone lookalikes",
      "Unique vitrified designs"
    ],
    "limitations": [
      "Higher lead time on custom marble cuts and shipments"
    ],
    "website": "https://www.nitco.in",
    "relatedBrands": [
      "orientbell-tiles",
      "simpolo-tiles"
    ],
    "description": "A premium design tile and natural marble brand, preferred by luxury architects and interior designers.",
    "overview": "A premium design tile and natural marble brand, preferred by luxury architects and interior designers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Nitco Tiles products?",
        "a": "Typically Nitco Tiles products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Nitco Tiles conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "simpolo-tiles",
    "name": "Simpolo Ceramics",
    "logo": "🎨",
    "categories": [
      "Tiles & Flooring"
    ],
    "origin": "India",
    "established": 1977,
    "headquarters": "Morbi, Gujarat",
    "priceSegment": "Premium",
    "certifications": [
      "IS 15622",
      "CE Certified"
    ],
    "products": [
      "Simpolo Sintered Slabs",
      "Simpolo Rock Deck (Outdoor)",
      "Simpolo Glazed Vitrified Tiles"
    ],
    "applications": [
      "Kitchen Countertops",
      "High-traffic Outdoor Decks",
      "Living Room Feature Walls"
    ],
    "advantages": [
      "Pioneers of thin sintered stone slabs",
      "Stain proof and heat resistant slabs"
    ],
    "limitations": [
      "High installation cost; requires specialized tile cutters"
    ],
    "website": "https://www.simpolo.net",
    "relatedBrands": [
      "kajaria-ceramics",
      "nitco-tiles"
    ],
    "description": "Leading luxury tile producer based in Morbi, renowned for large-format sintered slabs and outdoor rock tiles.",
    "overview": "Leading luxury tile producer based in Morbi, renowned for large-format sintered slabs and outdoor rock tiles. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Simpolo Ceramics products?",
        "a": "Typically Simpolo Ceramics products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Simpolo Ceramics conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "polycab",
    "name": "Polycab India",
    "logo": "⚡",
    "categories": [
      "Electrical Wires & Cables",
      "Lighting Solutions (LED, CFL)",
      "Switches & Sockets"
    ],
    "origin": "India",
    "established": 1964,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 694",
      "IS 1554",
      "CE Marked",
      "RoHS"
    ],
    "products": [
      "Polycab Green Wire FRLSH",
      "Polycab Armoured Power Cables",
      "Polycab Etira Switches"
    ],
    "applications": [
      "Whole-house Conduit Wiring",
      "Industrial Power Mains",
      "Modular Switches"
    ],
    "advantages": [
      "High electrolytic copper purity (99.97%)",
      "Flame retardant low smoke (FRLSH) safety"
    ],
    "limitations": [
      "Modular switches have plain aesthetic designs compared to boutique brands"
    ],
    "website": "https://www.polycab.com",
    "relatedBrands": [
      "havells",
      "finolex"
    ],
    "description": "India's largest manufacturer of wires and cables, synonymous with safety and conductivity.",
    "overview": "India's largest manufacturer of wires and cables, synonymous with safety and conductivity. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Polycab India products?",
        "a": "Typically Polycab India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Polycab India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "havells",
    "name": "Havells India",
    "logo": "💡",
    "categories": [
      "Electrical Wires & Cables",
      "Lighting Solutions (LED, CFL)",
      "Switches & Sockets",
      "Home Appliances"
    ],
    "origin": "India",
    "established": 1958,
    "headquarters": "Noida, Uttar Pradesh",
    "priceSegment": "Premium",
    "certifications": [
      "IS 694",
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Havells Life Line Plus S3 Wires",
      "Havells Crabtree Modular Switches",
      "Havells Adonia Water Heaters"
    ],
    "applications": [
      "Premium Smart Homes",
      "Designer Kitchens",
      "Water Heating Systems"
    ],
    "advantages": [
      "Excellent premium design aesthetic (Crabtree switches)",
      "Wide product diversity"
    ],
    "limitations": [
      "Highly priced product variants compared to generic brands"
    ],
    "website": "https://www.havells.com",
    "relatedBrands": [
      "polycab",
      "legrand"
    ],
    "description": "A premier electrical goods company, highly preferred for aesthetic switches (Crabtree) and smart appliances.",
    "overview": "A premier electrical goods company, highly preferred for aesthetic switches (Crabtree) and smart appliances. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Havells India products?",
        "a": "Typically Havells India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Havells India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "finolex",
    "name": "Finolex Cables",
    "logo": "🔌",
    "categories": [
      "Electrical Wires & Cables",
      "Switches & Sockets"
    ],
    "origin": "India",
    "established": 1958,
    "headquarters": "Pune, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 694",
      "RoHS Compliant",
      "ISO 9001"
    ],
    "products": [
      "Finolex Flame Retardant Wires",
      "Finolex 3-Core Flat Cables",
      "Finolex Telephone & Coaxial Cables"
    ],
    "applications": [
      "Submersible Pump Powering",
      "Residential Wiring",
      "Coaxial TV Cabling"
    ],
    "advantages": [
      "Extremely durable insulation sheath",
      "Outstanding water resistance in flat pump cables"
    ],
    "limitations": [
      "Slow adaptation to smart automation switches"
    ],
    "website": "https://www.finolexcables.com",
    "relatedBrands": [
      "polycab",
      "rr-kabel"
    ],
    "description": "Highly respected cable brand, famous for high-durability insulation sheaths and agricultural cables.",
    "overview": "Highly respected cable brand, famous for high-durability insulation sheaths and agricultural cables. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Finolex Cables products?",
        "a": "Typically Finolex Cables products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Finolex Cables conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "rr-kabel",
    "name": "RR Kabel",
    "logo": "⚡",
    "categories": [
      "Electrical Wires & Cables"
    ],
    "origin": "India",
    "established": 1995,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 694",
      "VDE Germany",
      "BASEC UK"
    ],
    "products": [
      "RR Kabel Ratna FRLSH Wires",
      "RR Kabel Unilay Core Wires"
    ],
    "applications": [
      "High-rise Condominium Wiring",
      "Commercial Building Ducts"
    ],
    "advantages": [
      "International safety certifications (VDE, BASEC)",
      "Unilay conductor technology prevents wire breakage"
    ],
    "limitations": [
      "Lower direct retail consumer recognition than Polycab in rural areas"
    ],
    "website": "https://www.rrkabel.com",
    "relatedBrands": [
      "polycab",
      "kei-industries"
    ],
    "description": "A global cable company, holding multiple international quality marks for premium safe wiring.",
    "overview": "A global cable company, holding multiple international quality marks for premium safe wiring. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of RR Kabel products?",
        "a": "Typically RR Kabel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does RR Kabel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kei-industries",
    "name": "KEI Industries",
    "logo": "🏗️",
    "categories": [
      "Electrical Wires & Cables"
    ],
    "origin": "India",
    "established": 1968,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 694",
      "IS 7098",
      "ISO 9001"
    ],
    "products": [
      "KEI Homecab Wires",
      "KEI HT & LT Armoured Cables",
      "KEI Extra High Voltage Cables"
    ],
    "applications": [
      "Metro Rail Power Supply",
      "Heavy Industrial Plants",
      "Residential Distribution Boards"
    ],
    "advantages": [
      "Industry leader in high-voltage industrial cabling",
      "Good retail flexibility"
    ],
    "limitations": [
      "Mainly known for B2B/industrial sectors, limited consumer modular switches"
    ],
    "website": "https://www.kei-ind.com",
    "relatedBrands": [
      "rr-kabel",
      "polycab"
    ],
    "description": "Leading manufacturer of high and low-voltage heavy-duty power cables and residential Homecab wires.",
    "overview": "Leading manufacturer of high and low-voltage heavy-duty power cables and residential Homecab wires. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of KEI Industries products?",
        "a": "Typically KEI Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does KEI Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "anchor-panasonic",
    "name": "Anchor by Panasonic",
    "logo": "🏠",
    "categories": [
      "Switches & Sockets",
      "Electrical Wires & Cables",
      "Lighting Solutions (LED, CFL)"
    ],
    "origin": "Japan / India",
    "established": 1963,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 3854",
      "IS 694",
      "ISO 9001"
    ],
    "products": [
      "Anchor Roma Modular Switches",
      "Anchor Penta Switches",
      "Panasonic Smart Home Automation"
    ],
    "applications": [
      "Residential Living Rooms",
      "Commercial Offices",
      "Affordable Modular Renovations"
    ],
    "advantages": [
      "Anchor Roma is the most widely sold modular switch range in India",
      "Panasonic backing for smart tech"
    ],
    "limitations": [
      "Standard Penta/Roma switches look conventional in ultra-modern interiors"
    ],
    "website": "https://lsa.panasonic.com",
    "relatedBrands": [
      "havells",
      "legrand"
    ],
    "description": "Owned by Panasonic, famous for the iconic Roma modular switches, blending Japanese tech with Indian trust.",
    "overview": "Owned by Panasonic, famous for the iconic Roma modular switches, blending Japanese tech with Indian trust. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Anchor by Panasonic products?",
        "a": "Typically Anchor by Panasonic products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Anchor by Panasonic conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "legrand",
    "name": "Legrand India",
    "logo": "🔘",
    "categories": [
      "Switches & Sockets",
      "Electrical Wires & Cables"
    ],
    "origin": "France / India",
    "established": 1996,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IS 3854",
      "IEC Standards"
    ],
    "products": [
      "Legrand Arteor Switches",
      "Legrand Myrius Modular range",
      "Legrand DX3 MCB Circuit Breakers"
    ],
    "applications": [
      "Smart Offices",
      "Luxury Villas",
      "Electrical Distribution Boards"
    ],
    "advantages": [
      "Top-class safety gear (DX3 MCBs)",
      "Stunning premium switch materials (wood, leather finishes)"
    ],
    "limitations": [
      "Very high premium cost for custom Arteor series"
    ],
    "website": "https://www.legrand.co.in",
    "relatedBrands": [
      "anchor-panasonic",
      "schneider-electric"
    ],
    "description": "French multinational, the global benchmark for high-end luxury switches and circuit breakers (MCBs).",
    "overview": "French multinational, the global benchmark for high-end luxury switches and circuit breakers (MCBs). Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Legrand India products?",
        "a": "Typically Legrand India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Legrand India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "schneider-electric",
    "name": "Schneider Electric",
    "logo": "🤖",
    "categories": [
      "Switches & Sockets",
      "Electrical Wires & Cables",
      "Inverters & UPS Systems"
    ],
    "origin": "France / India",
    "established": 1836,
    "headquarters": "Rueil-Malmaison, France",
    "priceSegment": "Premium",
    "certifications": [
      "IEC Standards",
      "CE marked",
      "ISO 9001"
    ],
    "products": [
      "Schneider Livia Switches",
      "Schneider Unica System+",
      "Schneider Acti9 MCB Boards"
    ],
    "applications": [
      "Commercial Office Automation",
      "Data Centers",
      "Luxury Residences"
    ],
    "advantages": [
      "Global leader in energy management and automation",
      "Extremely reliable circuit breakers"
    ],
    "limitations": [
      "Complex configuration options require specialized electrical contractors"
    ],
    "website": "https://www.se.com/in",
    "relatedBrands": [
      "legrand",
      "havells"
    ],
    "description": "A global giant in digital transformation of energy management, popular for high-grade commercial switchboards.",
    "overview": "A global giant in digital transformation of energy management, popular for high-grade commercial switchboards. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Schneider Electric products?",
        "a": "Typically Schneider Electric products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Schneider Electric conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "astral-pipes",
    "name": "Astral Pipes",
    "logo": "💧",
    "categories": [
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1996,
    "headquarters": "Ahmedabad, Gujarat",
    "priceSegment": "Premium",
    "certifications": [
      "IS 4985",
      "NSF Certified"
    ],
    "products": [
      "Astral CPVC Pro (Hot/Cold Water)",
      "Astral Silencio (Acoustic Drainage)",
      "Astral Foamcore Pipes"
    ],
    "applications": [
      "Residential Hot Water Supply",
      "Luxury Apartment Drainage (Soundproof)",
      "Sewer Lines"
    ],
    "advantages": [
      "Pioneers of CPVC in India",
      "Acoustic drainage pipes dampen water flow sounds"
    ],
    "limitations": [
      "Premium pricing over standard local PVC pipes"
    ],
    "website": "https://www.astralpipes.com",
    "relatedBrands": [
      "supreme-industries",
      "ashirvad-pipes"
    ],
    "description": "Market leader in plumbing innovations, famous for high-durability CPVC pipes and acoustic drainage.",
    "overview": "Market leader in plumbing innovations, famous for high-durability CPVC pipes and acoustic drainage. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Astral Pipes products?",
        "a": "Typically Astral Pipes products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Astral Pipes conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "supreme-pipes",
    "name": "Supreme Industries",
    "logo": "🛠️",
    "categories": [
      "Pipes & Fittings",
      "Furniture Material"
    ],
    "origin": "India",
    "established": 1942,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 4985",
      "ISO 9001"
    ],
    "products": [
      "Supreme Lifeline CPVC",
      "Supreme Aqua Gold uPVC",
      "Supreme Nu-Drain Underground drainage"
    ],
    "applications": [
      "High-rise Pluvia Drainage",
      "Agricultural Water Distribution",
      "Underground Sewers"
    ],
    "advantages": [
      "Huge product range across agriculture and plumbing",
      "Great structural ring-stiffness"
    ],
    "limitations": [
      "Heavy weight in larger diameters requires mechanical loaders"
    ],
    "website": "https://www.supreme.co.in",
    "relatedBrands": [
      "astral-pipes",
      "prince-pipes"
    ],
    "description": "One of India's largest plastics processors, providing highly robust plumbing and agricultural pipes.",
    "overview": "One of India's largest plastics processors, providing highly robust plumbing and agricultural pipes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Supreme Industries products?",
        "a": "Typically Supreme Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Supreme Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "finolex-pipes",
    "name": "Finolex Pipes",
    "logo": "🌊",
    "categories": [
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1981,
    "headquarters": "Pune, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 4985",
      "IS 13592"
    ],
    "products": [
      "Finolex ASTM PVC Pipes",
      "Finolex Column Pipes",
      "Finolex Agricultural Drip Pipes"
    ],
    "applications": [
      "Borewell Column Placements",
      "Drip Irrigation Channels",
      "Rainwater Drainage"
    ],
    "advantages": [
      "Exceptional tensile strength for deep borewells",
      "Highly flexible drip tubes"
    ],
    "limitations": [
      "Lower focus on specialized indoor noise-reduction acoustic pipes"
    ],
    "website": "https://www.finolexpipes.com",
    "relatedBrands": [
      "supreme-pipes",
      "ashirvad-pipes"
    ],
    "description": "A major player in agricultural columns and drip irrigation pipes, holding huge rural trust.",
    "overview": "A major player in agricultural columns and drip irrigation pipes, holding huge rural trust. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Finolex Pipes products?",
        "a": "Typically Finolex Pipes products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Finolex Pipes conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "prince-pipes",
    "name": "Prince Pipes",
    "logo": "💧",
    "categories": [
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1987,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 4985",
      "ISO 9001"
    ],
    "products": [
      "Prince Ultrafit SWR Systems",
      "Prince Easyfit iFit (Push-fit)",
      "Prince Greenfit PP-R Plumbing"
    ],
    "applications": [
      "Rainwater Drainage (SWR)",
      "Fast DIY Maintenance Plumbing",
      "Industrial Fluid Flow"
    ],
    "advantages": [
      "Push-fit technology enables rapid leak-free joint assembly",
      "Budget friendly"
    ],
    "limitations": [
      "Standard PVC joints require careful solvent cement curing time"
    ],
    "website": "https://www.princepipes.com",
    "relatedBrands": [
      "astral-pipes",
      "supreme-pipes"
    ],
    "description": "Famous for SWR drainage pipes and push-fit plumbing, Prince is highly preferred by plumbing contractors.",
    "overview": "Famous for SWR drainage pipes and push-fit plumbing, Prince is highly preferred by plumbing contractors. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Prince Pipes products?",
        "a": "Typically Prince Pipes products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Prince Pipes conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ashirvad-pipes",
    "name": "Ashirvad Pipes",
    "logo": "⛲",
    "categories": [
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1998,
    "headquarters": "Bengaluru, Karnataka",
    "priceSegment": "Premium",
    "certifications": [
      "IS 498Pro",
      "NSF 14/61",
      "ISO 9001"
    ],
    "products": [
      "Ashirvad FlowGuard CPVC",
      "Ashirvad Aqualife uPVC",
      "Ashirvad column pipes for submersible pumps"
    ],
    "applications": [
      "High-pressure Domestic Water Supply",
      "Borewell Pump Support",
      "Industrial Chemical Flow"
    ],
    "advantages": [
      "NSF certified clean drinking water safety",
      "Triple-layered insulation option"
    ],
    "limitations": [
      "Requires strict adhesion to Ashirvad solvent cements for warranty claims"
    ],
    "website": "https://www.ashirvad.com",
    "relatedBrands": [
      "astral-pipes",
      "supreme-pipes"
    ],
    "description": "Owned by Aliaxis group, highly respected for certified clean drinking water CPVC systems.",
    "overview": "Owned by Aliaxis group, highly respected for certified clean drinking water CPVC systems. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Ashirvad Pipes products?",
        "a": "Typically Ashirvad Pipes products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Ashirvad Pipes conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jain-irrigation",
    "name": "Jain Irrigation Systems",
    "logo": "🌱",
    "categories": [
      "Pipes & Fittings",
      "Irrigation Equipment"
    ],
    "origin": "India",
    "established": 1986,
    "headquarters": "Jalgaon, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 12786",
      "ISO 9001"
    ],
    "products": [
      "Jain Drip Tubing",
      "Jain HDPE Pipes",
      "Jain Solar Agricultural Pumps"
    ],
    "applications": [
      "Micro-drip Farming Channels",
      "High-density Water Supply Mainlines",
      "Subsurface Irrigation"
    ],
    "advantages": [
      "Global pioneer in micro-irrigation systems",
      "Extremely weather and UV resistant HDPE pipes"
    ],
    "limitations": [
      "High upfront installation planning required for micro-drip networks"
    ],
    "website": "https://www.jains.com",
    "relatedBrands": [
      "finolex-pipes",
      "supreme-pipes"
    ],
    "description": "A multinational corporation specializing in drip and sprinkler irrigation, supporting smart agriculture.",
    "overview": "A multinational corporation specializing in drip and sprinkler irrigation, supporting smart agriculture. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Jain Irrigation Systems products?",
        "a": "Typically Jain Irrigation Systems products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Jain Irrigation Systems conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "greenply",
    "name": "Greenply Industries",
    "logo": "🌲",
    "categories": [
      "Plywood",
      "Laminates"
    ],
    "origin": "India",
    "established": 1990,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Premium",
    "certifications": [
      "IS 710",
      "IS 303",
      "FSC Certified"
    ],
    "products": [
      "Green Club Plus Seven Star Plywood",
      "Green Gold BWP Ply",
      "Green Ecotec MR Ply"
    ],
    "applications": [
      "Modular Kitchen Cabinets",
      "Bathroom Vanities",
      "Living Room TV Units"
    ],
    "advantages": [
      "Extremely low formaldehyde emissions (E0 grade)",
      "Lifetime warranty against borers/termites on Club range"
    ],
    "limitations": [
      "Very expensive compared to local commercial plywoods"
    ],
    "website": "https://www.greenply.com",
    "relatedBrands": [
      "centuryply",
      "kitply"
    ],
    "description": "A premium name in building wood panels, highly recommended for zero-emission safe homes.",
    "overview": "A premium name in building wood panels, highly recommended for zero-emission safe homes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Greenply Industries products?",
        "a": "Typically Greenply Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Greenply Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "centuryply",
    "name": "CenturyPly",
    "logo": "🪵",
    "categories": [
      "Plywood",
      "Laminates"
    ],
    "origin": "India",
    "established": 1986,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Premium",
    "certifications": [
      "IS 710",
      "IS 303",
      "Sena-Weld patent"
    ],
    "products": [
      "Century Club Prime BWP Plywood",
      "Century Sainik 710 Plywood",
      "Century Virokill Anti-viral laminates"
    ],
    "applications": [
      "Dining Tables",
      "Wet Wardrobes",
      "High-contact Commercial Counters"
    ],
    "advantages": [
      "Virokill technology kills 99.9% surface bacteria/viruses",
      "Boiling water proof (BWP) assurance"
    ],
    "limitations": [
      "Imitation counter-feits in local markets; requires verifying QR codes on sheets"
    ],
    "website": "https://www.centuryply.com",
    "relatedBrands": [
      "greenply",
      "national-plywood"
    ],
    "description": "Market leader in boiling water proof (BWP) plywood and anti-viral laminate technology.",
    "overview": "Market leader in boiling water proof (BWP) plywood and anti-viral laminate technology. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of CenturyPly products?",
        "a": "Typically CenturyPly products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does CenturyPly conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kitply",
    "name": "Kitply Industries",
    "logo": "🏗️",
    "categories": [
      "Plywood"
    ],
    "origin": "India",
    "established": 1982,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IS 710",
      "IS 303"
    ],
    "products": [
      "Kitply Gold BWP",
      "Kitply Vista MR",
      "Kitply Curvy (Flexi)"
    ],
    "applications": [
      "Office Partitions",
      "Curved Furniture Columns",
      "Ceiling Panels"
    ],
    "advantages": [
      "Highly flexible options for curved furniture shapes",
      "Good value for money"
    ],
    "limitations": [
      "Slightly lower brand presence in premium residential sectors recently"
    ],
    "website": "https://www.kitply.com",
    "relatedBrands": [
      "greenply",
      "centuryply"
    ],
    "description": "A legacy plywood brand, credited with popularizing branded structural plywood across India.",
    "overview": "A legacy plywood brand, credited with popularizing branded structural plywood across India. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kitply Industries products?",
        "a": "Typically Kitply Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kitply Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "austin-plywood",
    "name": "Austin Plywood",
    "logo": "🦘",
    "categories": [
      "Plywood"
    ],
    "origin": "India",
    "established": 2006,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IS 710",
      "ISO 9001"
    ],
    "products": [
      "Austin Platinum BWP Ply",
      "Austin Defender Anti-termite",
      "Austin Club Plus"
    ],
    "applications": [
      "Boat Interior Cabins",
      "Luxury Beds",
      "Kitchen Chimney Backing"
    ],
    "advantages": [
      "Excellent structural load-bearing capacity",
      "Strictly calipered (even thickness) sheets"
    ],
    "limitations": [
      "Limited retail coverage in South India"
    ],
    "website": "https://www.austinply.com",
    "relatedBrands": [
      "centuryply",
      "national-plywood"
    ],
    "description": "A premium manufacturer of plywood, heavily certified and trusted for load-bearing structures.",
    "overview": "A premium manufacturer of plywood, heavily certified and trusted for load-bearing structures. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Austin Plywood products?",
        "a": "Typically Austin Plywood products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Austin Plywood conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "national-plywood",
    "name": "National Plywood",
    "logo": "🌳",
    "categories": [
      "Plywood"
    ],
    "origin": "India",
    "established": 1951,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IS 710",
      "IS 303"
    ],
    "products": [
      "National Club Plus BWP",
      "National Pioneer MR",
      "National Flush Doors"
    ],
    "applications": [
      "Office Cabinet Doors",
      "Balcony Overhead Panels",
      "Bed Slabs"
    ],
    "advantages": [
      "Decades of structural trust",
      "Superb resistance to wrap deformation"
    ],
    "limitations": [
      "Conventional design catalogs for decorative laminates"
    ],
    "website": "https://www.nationalplywood.net",
    "relatedBrands": [
      "centuryply",
      "austin-plywood"
    ],
    "description": "A legacy plywood manufacturer, highly respected for standard flush doors and BWP boards.",
    "overview": "A legacy plywood manufacturer, highly respected for standard flush doors and BWP boards. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of National Plywood products?",
        "a": "Typically National Plywood products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does National Plywood conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "action-tesa",
    "name": "Action Tesa",
    "logo": "🪵",
    "categories": [
      "Plywood",
      "Laminates"
    ],
    "origin": "India",
    "established": 2010,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "IS 14587"
    ],
    "products": [
      "Action Tesa HDMR (High Density Water Resistant)",
      "Action Tesa MDF Boards",
      "Action Tesa Wooden Laminated Flooring"
    ],
    "applications": [
      "Modular Furniture carcasses",
      "Laminated Room Floorings",
      "Wall Paneling"
    ],
    "advantages": [
      "HDMR boards replace plywood at lower cost with higher water resistance",
      "Termite resistant"
    ],
    "limitations": [
      "Cannot be carved or edge-polished easily without edge banding tape"
    ],
    "website": "https://www.actiontesa.com",
    "relatedBrands": [
      "greenply",
      "merino-laminates"
    ],
    "description": "Pioneers of HDMR (High Density Moisture Resistant) fiberboards, redefining modular kitchen core panels.",
    "overview": "Pioneers of HDMR (High Density Moisture Resistant) fiberboards, redefining modular kitchen core panels. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Action Tesa products?",
        "a": "Typically Action Tesa products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Action Tesa conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "cera",
    "name": "Cera Sanitaryware",
    "logo": "🚽",
    "categories": [
      "Sanitary Ware",
      "Bathroom Fittings"
    ],
    "origin": "India",
    "established": 1980,
    "headquarters": "Ahmedabad, Gujarat",
    "priceSegment": "Mid",
    "certifications": [
      "IS 2556",
      "ISO 9001"
    ],
    "products": [
      "Cera One-piece Water Closets",
      "Cera Sensor Faucets",
      "Cera Quartz Kitchen Sinks"
    ],
    "applications": [
      "General Bathrooms",
      "Commercial Toilets (Sensor type)",
      "Utility Wash basins"
    ],
    "advantages": [
      "Wide range of affordable designs",
      "Great customer service network in India"
    ],
    "limitations": [
      "Chrome plating on budget faucets can tarnish under hard borewell water"
    ],
    "website": "https://www.cera-india.com",
    "relatedBrands": [
      "hindware",
      "parryware"
    ],
    "description": "A massive household name, offering modular sanitaryware, premium washbasins, and smart faucets.",
    "overview": "A massive household name, offering modular sanitaryware, premium washbasins, and smart faucets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Cera Sanitaryware products?",
        "a": "Typically Cera Sanitaryware products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Cera Sanitaryware conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "hindware",
    "name": "Hindware (HSIL)",
    "logo": "🛁",
    "categories": [
      "Sanitary Ware",
      "Bathroom Fittings"
    ],
    "origin": "India",
    "established": 1960,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Mid",
    "certifications": [
      "IS 2556",
      "ISO 9001"
    ],
    "products": [
      "Hindware Italian Collection",
      "Hindware Auto-flush Closets",
      "Hindware Snowcrest Air Coolers"
    ],
    "applications": [
      "Modern Apartments",
      "Public Malls",
      "Kitchen Chimneys"
    ],
    "advantages": [
      "Italian design shapes at competitive pricing",
      "Excellent wall-mounted commodes"
    ],
    "limitations": [
      "Service delays in remote tier-3 towns for electronic sanitary parts"
    ],
    "website": "https://www.hindwarehomes.com",
    "relatedBrands": [
      "cera",
      "parryware"
    ],
    "description": "A market leader with six decades of trust, known for the Hindware Italian Collection sanitary fixtures.",
    "overview": "A market leader with six decades of trust, known for the Hindware Italian Collection sanitary fixtures. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Hindware (HSIL) products?",
        "a": "Typically Hindware (HSIL) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Hindware (HSIL) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jaquar",
    "name": "Jaquar Group",
    "logo": "🚿",
    "categories": [
      "Bathroom Fittings",
      "Sanitary Ware",
      "Lighting Solutions (LED, CFL)"
    ],
    "origin": "India",
    "established": 1960,
    "headquarters": "Manesar, Haryana",
    "priceSegment": "Premium",
    "certifications": [
      "IS 8931",
      "CE Certified",
      "ISO 9001"
    ],
    "products": [
      "Jaquar Artize (Luxury Series)",
      "Jaquar Continental/Florentine (Standard)",
      "Jaquar Essco (Value Series)"
    ],
    "applications": [
      "Master bathrooms",
      "Luxury hotels",
      "Shower enclosures"
    ],
    "advantages": [
      "Unmatched domestic warranty (10 years) and on-site repair service",
      "Superb chrome finishes"
    ],
    "limitations": [
      "Artize luxury line has extremely long delivery times for custom finishes like Rose Gold"
    ],
    "website": "https://www.jaquar.com",
    "relatedBrands": [
      "kohler",
      "cera"
    ],
    "description": "The undisputed leader in Indian bathroom fittings, commanding major market share in faucets.",
    "overview": "The undisputed leader in Indian bathroom fittings, commanding major market share in faucets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Jaquar Group products?",
        "a": "Typically Jaquar Group products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Jaquar Group conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "parryware",
    "name": "Parryware Roca",
    "logo": "🚽",
    "categories": [
      "Sanitary Ware",
      "Bathroom Fittings"
    ],
    "origin": "Spain / India",
    "established": 1952,
    "headquarters": "Chennai, Tamil Nadu",
    "priceSegment": "Budget",
    "certifications": [
      "IS 2556",
      "ISO 9001"
    ],
    "products": [
      "Parryware Retro Closet",
      "Parryware Slim rim washbasins",
      "Parryware Escala Faucets"
    ],
    "applications": [
      "Affordable Housing Toilets",
      "School Restrooms",
      "Public Wash areas"
    ],
    "advantages": [
      "Extremely durable vitreous China body",
      "Most economical branded sanitaryware option"
    ],
    "limitations": [
      "Limited advanced sensor automation ranges compared to Kohler/Toto"
    ],
    "website": "https://www.parryware.in",
    "relatedBrands": [
      "cera",
      "hindware"
    ],
    "description": "Owned by Roca Spain, Parryware is a household legacy brand, widely preferred for entry-level sanitary ware.",
    "overview": "Owned by Roca Spain, Parryware is a household legacy brand, widely preferred for entry-level sanitary ware. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Parryware Roca products?",
        "a": "Typically Parryware Roca products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Parryware Roca conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kohler",
    "name": "Kohler Co.",
    "logo": "🚿",
    "categories": [
      "Bathroom Fittings",
      "Sanitary Ware"
    ],
    "origin": "USA / India",
    "established": 1873,
    "headquarters": "Kohler, Wisconsin, USA",
    "priceSegment": "Premium",
    "certifications": [
      "ASME Standards",
      "CE marked",
      "ISO 9001"
    ],
    "products": [
      "Kohler Veil Intelligent Toilet",
      "Kohler Artifacts Faucets",
      "Kohler DTV Prompt Digital Shower"
    ],
    "applications": [
      "High-end Luxury Bathrooms",
      "5-Star Hotels",
      "Smart Bathroom Integrations"
    ],
    "advantages": [
      "Outstanding architectural designs and bold colors",
      "Intelligent touch-free sanitization toilet systems"
    ],
    "limitations": [
      "Very high cost of spare parts and replacement valves"
    ],
    "website": "https://www.kohler.co.in",
    "relatedBrands": [
      "jaquar",
      "toto"
    ],
    "description": "Global luxury brand, famous for 'Bold Look of Kohler' sanitary collections and digital showering.",
    "overview": "Global luxury brand, famous for 'Bold Look of Kohler' sanitary collections and digital showering. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kohler Co. products?",
        "a": "Typically Kohler Co. products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kohler Co. conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "toto",
    "name": "Toto Ltd.",
    "logo": "🚽",
    "categories": [
      "Sanitary Ware",
      "Bathroom Fittings"
    ],
    "origin": "Japan / India",
    "established": 1917,
    "headquarters": "Kitakyushu, Japan",
    "priceSegment": "Premium",
    "certifications": [
      "JIS Standards",
      "ISO 9001"
    ],
    "products": [
      "Toto Washlet (Electronic Bidet)",
      "Toto Neorest Intelligent Toilet",
      "Toto Tornado Flush Closets"
    ],
    "applications": [
      "Smart Luxury Bathrooms",
      "VIP Lounge Restrooms",
      "Aged Care toilets"
    ],
    "advantages": [
      "Global benchmark for electronic bidets (Washlet)",
      "Tornado flush cleaning uses minimal water"
    ],
    "limitations": [
      "Highly dependent on steady clean electricity and water softening plants"
    ],
    "website": "https://in.toto.com",
    "relatedBrands": [
      "kohler",
      "jaquar"
    ],
    "description": "The world's leading manufacturer of high-tech toilets, renowned for inventing the electronic Washlet.",
    "overview": "The world's leading manufacturer of high-tech toilets, renowned for inventing the electronic Washlet. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Toto Ltd. products?",
        "a": "Typically Toto Ltd. products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Toto Ltd. conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "hettich",
    "name": "Hettich",
    "logo": "🔩",
    "categories": [
      "Modular Kitchen Materials"
    ],
    "origin": "Germany / India",
    "established": 1888,
    "headquarters": "Kirchlengern, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "LGA Germany",
      "EN Standards"
    ],
    "products": [
      "Hettich Sensys Hinges (Soft-close)",
      "Hettich InnoTech Atira Drawer Systems",
      "Hettich WingLine Folding doors"
    ],
    "applications": [
      "Kitchen Cabinets",
      "Bedroom Wardrobe Drawers",
      "Sliding Wardrobe systems"
    ],
    "advantages": [
      "Unmatched durability (tested for 80,000+ cycles)",
      "Perfect soft-closing action"
    ],
    "limitations": [
      "Highly complex DIY installation; requires professional template drillers"
    ],
    "website": "https://www.hettich.com",
    "relatedBrands": [
      "hafele",
      "ebco"
    ],
    "description": "German engineering specialist, the gold standard for soft-close cabinet hinges and drawer runners.",
    "overview": "German engineering specialist, the gold standard for soft-close cabinet hinges and drawer runners. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Hettich products?",
        "a": "Typically Hettich products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Hettich conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "hafele",
    "name": "Hafele",
    "logo": "🚪",
    "categories": [
      "Modular Kitchen Materials",
      "Lighting Solutions (LED, CFL)"
    ],
    "origin": "Germany / India",
    "established": 1923,
    "headquarters": "Nagold, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "DIN Standards",
      "ISO 9001"
    ],
    "products": [
      "Hafele Loox LED Lighting",
      "Hafele Matrix Drawer Systems",
      "Hafele Architectural sliding fittings"
    ],
    "applications": [
      "Under-cabinet Kitchen Lighting",
      "Walk-in Wardrobe Sliding Doors",
      "Glass partitions"
    ],
    "advantages": [
      "Huge product integration capability",
      "Superior load bearing capacity for heavy wardrobes"
    ],
    "limitations": [
      "Expensive accessories and custom configurations"
    ],
    "website": "https://www.hafeleindia.com",
    "relatedBrands": [
      "hettich",
      "ebco"
    ],
    "description": "Leading German supplier of architectural hardware, modular fittings, and premium smart locks.",
    "overview": "Leading German supplier of architectural hardware, modular fittings, and premium smart locks. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Hafele products?",
        "a": "Typically Hafele products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Hafele conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ebco",
    "name": "Ebco",
    "logo": "⚙️",
    "categories": [
      "Modular Kitchen Materials"
    ],
    "origin": "India",
    "established": 1963,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "BIFMA Certified"
    ],
    "products": [
      "Ebco Soft-Close Drawer Slides",
      "Ebco Kitchen Pull-outs",
      "Ebco Gas Lift Bed Fittings"
    ],
    "applications": [
      "Bed Storage Lift systems",
      "Modular Kitchen Pullout trays",
      "Office Desks"
    ],
    "advantages": [
      "Highly affordable premium hardware options",
      "Strong local distribution and availability"
    ],
    "limitations": [
      "Slightly less smooth sliding motion compared to Hettich on heavy loads"
    ],
    "website": "https://www.ebco.in",
    "relatedBrands": [
      "hettich",
      "hafele"
    ],
    "description": "India's leading manufacturer of drawer slides, kitchen pullouts, and smart office furniture hardware.",
    "overview": "India's leading manufacturer of drawer slides, kitchen pullouts, and smart office furniture hardware. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Ebco products?",
        "a": "Typically Ebco products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Ebco conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "godrej-interio",
    "name": "Godrej Interio",
    "logo": "🛋️",
    "categories": [
      "Modular Kitchen Materials",
      "Home Appliances"
    ],
    "origin": "India",
    "established": 1897,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "GreenCo Rated"
    ],
    "products": [
      "Godrej Interio Steel Wardrobes",
      "Godrej Modular Kitchens",
      "Ergonomic Office Chairs"
    ],
    "applications": [
      "Home Kitchen Renovations",
      "Secure Bedroom storage",
      "Corporate offices"
    ],
    "advantages": [
      "Pioneers of rust-resistant steel modular kitchens",
      "Highly durable paint finishes"
    ],
    "limitations": [
      "Less flexibility for custom odd-shaped architectural layouts"
    ],
    "website": "https://www.godrejinterio.com",
    "relatedBrands": [
      "sleek-kitchens",
      "nilkamal"
    ],
    "description": "The furniture division of Godrej & Boyce, trusted for durable steel cabinets and home furniture.",
    "overview": "The furniture division of Godrej & Boyce, trusted for durable steel cabinets and home furniture. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Godrej Interio products?",
        "a": "Typically Godrej Interio products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Godrej Interio conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "sleek-kitchens",
    "name": "Sleek Kitchens (Asian Paints)",
    "logo": "🍳",
    "categories": [
      "Modular Kitchen Materials"
    ],
    "origin": "India",
    "established": 1993,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Sleek Modular Kitchen Cabinets",
      "Sleek Kitchen Chimneys",
      "Sleek Wire baskets"
    ],
    "applications": [
      "Complete Modular Kitchen Renovations",
      "Kitchen Ventilation"
    ],
    "advantages": [
      "Asian Paints design warranty",
      "One-stop service from design layout to final install"
    ],
    "limitations": [
      "High package installation pricing"
    ],
    "website": "https://www.sleekworld.com",
    "relatedBrands": [
      "godrej-interio",
      "hafele"
    ],
    "description": "A subsidiary of Asian Paints, specializing in stylish, customized modular kitchen setups.",
    "overview": "A subsidiary of Asian Paints, specializing in stylish, customized modular kitchen setups. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Sleek Kitchens (Asian Paints) products?",
        "a": "Typically Sleek Kitchens (Asian Paints) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Sleek Kitchens (Asian Paints) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "tata-bluescope",
    "name": "Tata BlueScope Steel",
    "logo": "⛺",
    "categories": [
      "Roofing Materials"
    ],
    "origin": "India / Australia",
    "established": 2005,
    "headquarters": "Pune, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IS 15965",
      "ISO 9001"
    ],
    "products": [
      "Durashine Color Coated Sheets",
      "Zincalume Steel",
      "Lysaght Roofing profiles"
    ],
    "applications": [
      "Industrial Warehouse Roofing",
      "Residential Terraces",
      "Architectural Wall Cladding"
    ],
    "advantages": [
      "Outstanding paint adhesion (Thermatech solar technology)",
      "Corrosion resistance"
    ],
    "limitations": [
      "Premium cost compared to local color coated galvalume sheets"
    ],
    "website": "https://www.tatabluescopesteel.com",
    "relatedBrands": [
      "jsw-roofing",
      "everest-roofing"
    ],
    "description": "Joint venture between Tata Steel and BlueScope Steel Australia, offering premium color coated sheets.",
    "overview": "Joint venture between Tata Steel and BlueScope Steel Australia, offering premium color coated sheets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Tata BlueScope Steel products?",
        "a": "Typically Tata BlueScope Steel products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Tata BlueScope Steel conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "everest-roofing",
    "name": "Everest Industries",
    "logo": "⛺",
    "categories": [
      "Roofing Materials",
      "Insulation Materials"
    ],
    "origin": "India",
    "established": 1934,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 459 (Asbestos free)",
      "ISO 9001"
    ],
    "products": [
      "Everest Evergold Roofing Sheets",
      "Everest Fiber Cement boards",
      "Everest Drywall panels"
    ],
    "applications": [
      "Industrial Shed Roofings",
      "External Wall Claddings",
      "False Ceilings"
    ],
    "advantages": [
      "100% asbestos-free safe fiber cement",
      "Fire and water resistant sheets"
    ],
    "limitations": [
      "Requires careful support spans; can crack if walked on without crawl boards"
    ],
    "website": "https://www.everestind.com",
    "relatedBrands": [
      "tata-bluescope",
      "bhushan-roofing"
    ],
    "description": "Pioneers of fiber-cement building products, widely trusted for budget and industrial shed roofs.",
    "overview": "Pioneers of fiber-cement building products, widely trusted for budget and industrial shed roofs. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Everest Industries products?",
        "a": "Typically Everest Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Everest Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "jsw-roofing",
    "name": "JSW Roofing",
    "logo": "🏗️",
    "categories": [
      "Roofing Materials"
    ],
    "origin": "India",
    "established": 1982,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IS 277",
      "ISO 9001"
    ],
    "products": [
      "JSW Pragati Color Coated Sheets",
      "JSW Colouron Plus Sheets"
    ],
    "applications": [
      "Rural Residential Sheds",
      "Poultry Farms",
      "Factory Roofings"
    ],
    "advantages": [
      "Excellent zinc coating thickness",
      "Highly anti-corrosive in chemical areas"
    ],
    "limitations": [
      "Color gloss can dull under constant high-temperature desert environments"
    ],
    "website": "https://www.jsw.in",
    "relatedBrands": [
      "tata-bluescope",
      "bhushan-roofing"
    ],
    "description": "Leading domestic color-coated sheet provider, holding massive trust in rural roofing markets.",
    "overview": "Leading domestic color-coated sheet provider, holding massive trust in rural roofing markets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of JSW Roofing products?",
        "a": "Typically JSW Roofing products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does JSW Roofing conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bhushan-roofing",
    "name": "Bhushan Roofing (Tata Steel BSL)",
    "logo": "⛺",
    "categories": [
      "Roofing Materials"
    ],
    "origin": "India",
    "established": 1989,
    "headquarters": "New Delhi",
    "priceSegment": "Budget",
    "certifications": [
      "IS 277",
      "ISO 9001"
    ],
    "products": [
      "Bhushan Galvalume Sheets",
      "Bhushan GC Sheets"
    ],
    "applications": [
      "Low-cost Factory Sheds",
      "Temporary construction site cabins"
    ],
    "advantages": [
      "Highly budget friendly",
      "Decent tensile strength"
    ],
    "limitations": [
      "Thinner color coatings compared to Tata BlueScope"
    ],
    "website": "https://www.tatasteel.com",
    "relatedBrands": [
      "jsw-roofing",
      "everest-roofing"
    ],
    "description": "Acquired by Tata Steel, providing economical galvanized corrugated sheets for mass market use.",
    "overview": "Acquired by Tata Steel, providing economical galvanized corrugated sheets for mass market use. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bhushan Roofing (Tata Steel BSL) products?",
        "a": "Typically Bhushan Roofing (Tata Steel BSL) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bhushan Roofing (Tata Steel BSL) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "dr-fixit",
    "name": "Dr. Fixit (Pidilite)",
    "logo": "💧",
    "categories": [
      "Waterproofing Materials",
      "Construction Chemicals"
    ],
    "origin": "India",
    "established": 1990,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "ASTM Standards"
    ],
    "products": [
      "Dr. Fixit Raincoat (Exterior walls)",
      "Dr. Fixit LW+ (Concrete mortar additive)",
      "Dr. Fixit Fastflex (Roofing)"
    ],
    "applications": [
      "Concrete Slab Mixing",
      "Balcony Waterproofing",
      "Exterior Wall paint coat"
    ],
    "advantages": [
      "Household name with easily available mixing manuals",
      "Excellent concrete additive (LW+)"
    ],
    "limitations": [
      "Liquid membranes require strict multiple-cross coats to be effective"
    ],
    "website": "https://www.drfixit.co.in",
    "relatedBrands": [
      "sika",
      "fosroc"
    ],
    "description": "India's leading waterproofing brand under Pidilite, offering smart damp proofing solutions.",
    "overview": "India's leading waterproofing brand under Pidilite, offering smart damp proofing solutions. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Dr. Fixit (Pidilite) products?",
        "a": "Typically Dr. Fixit (Pidilite) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Dr. Fixit (Pidilite) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "sika",
    "name": "Sika AG",
    "logo": "🇨🇭",
    "categories": [
      "Waterproofing Materials",
      "Construction Chemicals",
      "Adhesives & Sealants"
    ],
    "origin": "Switzerland / India",
    "established": 1910,
    "headquarters": "Baar, Switzerland",
    "priceSegment": "Premium",
    "certifications": [
      "ASTM Standards",
      "CE marked",
      "ISO 9001"
    ],
    "products": [
      "SikaSwell (Waterstop profiles)",
      "Sika Latex Power (SBR polymer)",
      "Sikaflex PU Sealants"
    ],
    "applications": [
      "Metro Tunnel Joint Sealings",
      "Swimming Pool Waterproofing",
      "Expansion Joint fills"
    ],
    "advantages": [
      "World leader in concrete admixtures and industrial polyurethane sealants",
      "Extreme lifespan"
    ],
    "limitations": [
      "Mainly focused on B2B engineering projects, lower local retail distribution"
    ],
    "website": "https://ind.sika.com",
    "relatedBrands": [
      "dr-fixit",
      "fosroc"
    ],
    "description": "A Swiss specialty chemical giant, the benchmark for infrastructure waterproofing and structural joints.",
    "overview": "A Swiss specialty chemical giant, the benchmark for infrastructure waterproofing and structural joints. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Sika AG products?",
        "a": "Typically Sika AG products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Sika AG conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "fosroc",
    "name": "Fosroc",
    "logo": "🇬🇧",
    "categories": [
      "Construction Chemicals",
      "Waterproofing Materials"
    ],
    "origin": "UK / India",
    "established": 1934,
    "headquarters": "Tamworth, UK",
    "priceSegment": "Premium",
    "certifications": [
      "EN Standards",
      "ISO 9001"
    ],
    "products": [
      "Conbextra GP2 (Non-shrink grout)",
      "Nitoproof 600 (Liquid membrane)",
      "Fosroc Renderoc (Repair mortar)"
    ],
    "applications": [
      "Heavy Machine Foundation grouting",
      "Basement retaining walls",
      "Bridge column repairs"
    ],
    "advantages": [
      "Outstanding heavy grout strength (Conbextra)",
      "Superior structural repair chemicals"
    ],
    "limitations": [
      "High professional expertise required for mix ratios"
    ],
    "website": "https://www.fosroc.com",
    "relatedBrands": [
      "sika",
      "mapei"
    ],
    "description": "British multinational, specializing in structural concrete repair grout, coatings, and sealants.",
    "overview": "British multinational, specializing in structural concrete repair grout, coatings, and sealants. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Fosroc products?",
        "a": "Typically Fosroc products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Fosroc conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "basf-construction",
    "name": "Master Builders Solutions (ex-BASF)",
    "logo": "🇩🇪",
    "categories": [
      "Construction Chemicals",
      "Waterproofing Materials"
    ],
    "origin": "Germany / India",
    "established": 1909,
    "headquarters": "Mannheim, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "EN Standards",
      "ISO 9001"
    ],
    "products": [
      "MasterGlenium (Superplasticizers)",
      "MasterSeal Waterproofing",
      "MasterFlow grouts"
    ],
    "applications": [
      "Ready Mix Concrete Plants",
      "Dam retaining structures",
      "Industrial floors"
    ],
    "advantages": [
      "Pioneers of polycarboxylate ether superplasticizers for concrete flowability",
      "Highly advanced labs"
    ],
    "limitations": [
      "Almost exclusively sold in industrial bulk, not available in small retail retail tins"
    ],
    "website": "https://www.master-builders-solutions.com/en-in",
    "relatedBrands": [
      "sika",
      "fosroc"
    ],
    "description": "Formerly BASF Construction Chemicals, now Master Builders, the pioneer in high-flow concrete admixtures.",
    "overview": "Formerly BASF Construction Chemicals, now Master Builders, the pioneer in high-flow concrete admixtures. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Master Builders Solutions (ex-BASF) products?",
        "a": "Typically Master Builders Solutions (ex-BASF) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Master Builders Solutions (ex-BASF) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "mapei",
    "name": "Mapei",
    "logo": "🇮🇹",
    "categories": [
      "Construction Chemicals",
      "Adhesives & Sealants",
      "Waterproofing Materials"
    ],
    "origin": "Italy / India",
    "established": 1937,
    "headquarters": "Milan, Italy",
    "priceSegment": "Premium",
    "certifications": [
      "EN 12004 (Tile adhesives)",
      "ISO 9001"
    ],
    "products": [
      "Mapei Kerabond (Tile Adhesive)",
      "Mapei Keraflex",
      "Mapelastic (Elastic waterproofing)"
    ],
    "applications": [
      "Luxury Swimming Pool Tiling",
      "Large format tile pasting",
      "Under-tile waterproofing"
    ],
    "advantages": [
      "Global leader in tile adhesives and grouts",
      "High elasticity under extreme temperature shifts"
    ],
    "limitations": [
      "Highly priced compared to local sand-cement mortar mixes"
    ],
    "website": "https://www.mapei.com/in",
    "relatedBrands": [
      "sika",
      "myk-laticrete"
    ],
    "description": "Italian multinational, highly preferred for high-strength tile adhesives, grouts, and pool waterproofing.",
    "overview": "Italian multinational, highly preferred for high-strength tile adhesives, grouts, and pool waterproofing. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Mapei products?",
        "a": "Typically Mapei products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Mapei conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "myk-laticrete",
    "name": "MYK Laticrete",
    "logo": "🇺🇸",
    "categories": [
      "Construction Chemicals",
      "Adhesives & Sealants"
    ],
    "origin": "USA / India",
    "established": 1999,
    "headquarters": "Hyderabad, Telangana",
    "priceSegment": "Mid",
    "certifications": [
      "ANSI Standards",
      "IS 15477"
    ],
    "products": [
      "Laticrete 307 (Tile adhesive)",
      "Laticrete Latapoxy 300 (Epoxy grout)",
      "Laticrete 290 (Premium mortar)"
    ],
    "applications": [
      "Bathroom Tile Grouting",
      "Granite Slab pasting",
      "Glass Mosaic Wall tiles"
    ],
    "advantages": [
      "Epoxy grouts are completely stain and acid proof",
      "Great tile adhesion ratings"
    ],
    "limitations": [
      "Epoxy grout requires rapid clean-up during installation before it cures on tile face"
    ],
    "website": "https://www.myklaticrete.com",
    "relatedBrands": [
      "mapei",
      "pidilite"
    ],
    "description": "A joint venture with Laticrete USA, the pioneer of stain-free epoxy tile grouts and thin-set adhesives.",
    "overview": "A joint venture with Laticrete USA, the pioneer of stain-free epoxy tile grouts and thin-set adhesives. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of MYK Laticrete products?",
        "a": "Typically MYK Laticrete products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does MYK Laticrete conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "fevicol",
    "name": "Fevicol (Pidilite)",
    "logo": "🐘",
    "categories": [
      "Adhesives & Sealants"
    ],
    "origin": "India",
    "established": 1959,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Fevicol SH (Standard Wood Glue)",
      "Fevicol Marine (Water resistant)",
      "Fevicol HeatX (Heat resistant)"
    ],
    "applications": [
      "Laminate pasting on wood",
      "Kitchen Cabinets",
      "Sofas and general woodworking"
    ],
    "advantages": [
      "Synonymous with bonding in India",
      "HeatX resists heat up to 170°C, ideal for kitchen laminates"
    ],
    "limitations": [
      "Standard Fevicol SH loses bond if exposed to continuous water pooling"
    ],
    "website": "https://www.pidilite.com",
    "relatedBrands": [
      "araldite",
      "bostik"
    ],
    "description": "The iconic flagship adhesive brand of Pidilite, the absolute market leader in carpentry glues.",
    "overview": "The iconic flagship adhesive brand of Pidilite, the absolute market leader in carpentry glues. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Fevicol (Pidilite) products?",
        "a": "Typically Fevicol (Pidilite) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Fevicol (Pidilite) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "araldite",
    "name": "Araldite",
    "logo": "⚡",
    "categories": [
      "Adhesives & Sealants"
    ],
    "origin": "Switzerland / India",
    "established": 1946,
    "headquarters": "Basel, Switzerland",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Araldite Standard (Epoxy)",
      "Araldite Klear (Fast curing)",
      "Araldite Builder epoxy"
    ],
    "applications": [
      "Broken Marble repairs",
      "Metal-to-Glass bonding",
      "Bathroom accessory fixing"
    ],
    "advantages": [
      "Exceptional bonding strength across metal, glass, stone, and wood",
      "Waterproof and chemical resistant"
    ],
    "limitations": [
      "Requires mixing resin and hardener in exact 1:1 ratios; slow curing (24 hours for Standard)"
    ],
    "website": "https://www.huntsman.com",
    "relatedBrands": [
      "fevicol",
      "bostik"
    ],
    "description": "Owned by Huntsman, the world's most famous heavy-duty epoxy adhesive brand, highly trusted for stone.",
    "overview": "Owned by Huntsman, the world's most famous heavy-duty epoxy adhesive brand, highly trusted for stone. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Araldite products?",
        "a": "Typically Araldite products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Araldite conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "pidilite",
    "name": "Pidilite Industries",
    "logo": "🐘",
    "categories": [
      "Adhesives & Sealants",
      "Construction Chemicals"
    ],
    "origin": "India",
    "established": 1959,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "Green Label"
    ],
    "products": [
      "Fevikwik (Instant adhesive)",
      "M-Seal (Epoxy putty)",
      "Fevicol",
      "Dr. Fixit"
    ],
    "applications": [
      "Emergency pipe leak repairs",
      "Instant plastic bonding",
      "Carpentry & construction"
    ],
    "advantages": [
      "Unmatched brand portfolio in craft, consumer, and industrial bonding",
      "Highly innovative"
    ],
    "limitations": [
      "Virtually zero branded competition, leading to absolute market pricing power"
    ],
    "website": "https://www.pidilite.com",
    "relatedBrands": [
      "fevicol",
      "dr-fixit"
    ],
    "description": "The parent company of Fevicol, M-Seal, Fevikwik, and Dr. Fixit, the giant of bonding and waterproofing.",
    "overview": "The parent company of Fevicol, M-Seal, Fevikwik, and Dr. Fixit, the giant of bonding and waterproofing. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Pidilite Industries products?",
        "a": "Typically Pidilite Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Pidilite Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bostik",
    "name": "Bostik (Arkema)",
    "logo": "🦎",
    "categories": [
      "Adhesives & Sealants"
    ],
    "origin": "France / India",
    "established": 1889,
    "headquarters": "Colombes, France",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001",
      "EN Standards"
    ],
    "products": [
      "Bostik Supergrout",
      "Bostik Boscos sealants",
      "Bostik Blu-Tack"
    ],
    "applications": [
      "Industrial Floor joints",
      "Glass window silicone sealing",
      "Craft bonding"
    ],
    "advantages": [
      "Superb quality polyurethane and silicone sealants",
      "High UV resistance for glass facades"
    ],
    "limitations": [
      "Premium pricing, mostly B2B focused in India"
    ],
    "website": "https://www.bostik.com/india/en",
    "relatedBrands": [
      "fevicol",
      "araldite"
    ],
    "description": "A subsidiary of Arkema, specializing in high-performance industrial adhesives and silicone sealants.",
    "overview": "A subsidiary of Arkema, specializing in high-performance industrial adhesives and silicone sealants. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bostik (Arkema) products?",
        "a": "Typically Bostik (Arkema) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bostik (Arkema) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "tata-solar",
    "name": "Tata Power Solar",
    "logo": "☀️",
    "categories": [
      "Solar Panels"
    ],
    "origin": "India",
    "established": 1989,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "IEC 61215",
      "MNRE Approved",
      "ISO 9001"
    ],
    "products": [
      "Tata Power Solar Panels",
      "Tata Solar Water Heaters",
      "Tata Solar Off-grid Systems"
    ],
    "applications": [
      "Residential Rooftop Solar",
      "Agricultural Solar Water Pumps",
      "Large Utility Scale Solar Farms"
    ],
    "advantages": [
      "25-year performance warranties",
      "Highly efficient monocrystalline PERC modules",
      "Legacy trust"
    ],
    "limitations": [
      "Upfront setup cost is higher than imported Chinese solar panels"
    ],
    "website": "https://www.tatapowersolar.com",
    "relatedBrands": [
      "adani-solar",
      "vikram-solar"
    ],
    "description": "India's leading integrated solar power company, known for premium high-durability solar cells.",
    "overview": "India's leading integrated solar power company, known for premium high-durability solar cells. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Tata Power Solar products?",
        "a": "Typically Tata Power Solar products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Tata Power Solar conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "adani-solar",
    "name": "Adani Solar",
    "logo": "☀️",
    "categories": [
      "Solar Panels"
    ],
    "origin": "India",
    "established": 2015,
    "headquarters": "Mundra, Gujarat",
    "priceSegment": "Mid",
    "certifications": [
      "IEC 61215",
      "ALMM listed",
      "ISO 9001"
    ],
    "products": [
      "Adani Elan (Bifacial Modules)",
      "Adani Eternal (Monofacial Panels)"
    ],
    "applications": [
      "Commercial rooftop grids",
      "Utility solar installations",
      "Solar park farms"
    ],
    "advantages": [
      "Bifacial panels generate power from both sides",
      "Mundra factory is one of the largest in India"
    ],
    "limitations": [
      "Heavy focus on B2B utility scale projects; B2C home solar installations are dealer-driven"
    ],
    "website": "https://www.adanisolar.com",
    "relatedBrands": [
      "tata-solar",
      "waaree-energies"
    ],
    "description": "The solar manufacturing arm of Adani Group, pioneering high-efficiency bifacial PERC modules.",
    "overview": "The solar manufacturing arm of Adani Group, pioneering high-efficiency bifacial PERC modules. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Adani Solar products?",
        "a": "Typically Adani Solar products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Adani Solar conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "vikram-solar",
    "name": "Vikram Solar",
    "logo": "☀️",
    "categories": [
      "Solar Panels"
    ],
    "origin": "India",
    "established": 2006,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "IEC 61215",
      "MNRE Approved"
    ],
    "products": [
      "Vikram Somera (Mono-PERC)",
      "Vikram Preva (Polycrystalline)"
    ],
    "applications": [
      "Residential Rooftops",
      "Commercial Buildings",
      "Solar Street Lights"
    ],
    "advantages": [
      "Excellent low-light performance models",
      "Good thermal coefficient (performs well in high heat)"
    ],
    "limitations": [
      "Polycrystalline ranges have lower efficiency (~16-17%) compared to new PERC cell structures"
    ],
    "website": "https://www.vikramsolar.com",
    "relatedBrands": [
      "tata-solar",
      "waaree-energies"
    ],
    "description": "A highly regarded solar manufacturer, exporting panels globally and recognized for high quality.",
    "overview": "A highly regarded solar manufacturer, exporting panels globally and recognized for high quality. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Vikram Solar products?",
        "a": "Typically Vikram Solar products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Vikram Solar conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "waaree-energies",
    "name": "Waaree Energies",
    "logo": "☀️",
    "categories": [
      "Solar Panels"
    ],
    "origin": "India",
    "established": 1989,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IEC 61215",
      "ALMM Approved"
    ],
    "products": [
      "Waaree Arun (Flexible Panels)",
      "Waaree Aditya Series",
      "Waaree Solar Water Pumps"
    ],
    "applications": [
      "Caravans & Curved roofs (Flexible panels)",
      "Domestic Net-metering grids"
    ],
    "advantages": [
      "India's largest solar panel manufacturing capacity",
      "Lightweight flexible solar panel options"
    ],
    "limitations": [
      "After-sales service network in remote rural locations can be slow"
    ],
    "website": "https://www.waaree.com",
    "relatedBrands": [
      "adani-solar",
      "renewsys-solar"
    ],
    "description": "India's largest solar module manufacturer, famous for innovative flexible and portable solar solutions.",
    "overview": "India's largest solar module manufacturer, famous for innovative flexible and portable solar solutions. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Waaree Energies products?",
        "a": "Typically Waaree Energies products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Waaree Energies conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "renewsys-solar",
    "name": "RenewSys",
    "logo": "☀️",
    "categories": [
      "Solar Panels"
    ],
    "origin": "India",
    "established": 2012,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "IEC 61215",
      "ISO 9001"
    ],
    "products": [
      "RenewSys DESERV (Mono & Poly)",
      "Solar PV Encapsulants (EVA sheets)"
    ],
    "applications": [
      "Rooftop Solar Installations",
      "BIPV (Building Integrated Solar)"
    ],
    "advantages": [
      "Integrated manufacturer of solar components (EVA sheets, backsheets, cells)",
      "Strict testing"
    ],
    "limitations": [
      "Fewer retail brand promotions, leading to lower direct consumer awareness"
    ],
    "website": "https://www.renewsysworld.com",
    "relatedBrands": [
      "waaree-energies",
      "tata-solar"
    ],
    "description": "A global manufacturer of solar modules and key component encapsulants, supplying major solar brands.",
    "overview": "A global manufacturer of solar modules and key component encapsulants, supplying major solar brands. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of RenewSys products?",
        "a": "Typically RenewSys products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does RenewSys conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "exide",
    "name": "Exide Industries",
    "logo": "🔋",
    "categories": [
      "Batteries",
      "Inverters & UPS Systems"
    ],
    "origin": "India",
    "established": 1947,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "BEE Star Certified"
    ],
    "products": [
      "Exide Tubular (Inverter Battery)",
      "Exide Mileage (Car Battery)",
      "Exide Gel Batteries"
    ],
    "applications": [
      "Home Inverter Backups",
      "Car and Two-wheeler starters",
      "Solar power bank arrays"
    ],
    "advantages": [
      "Vast dealer network; replacement service is exceptionally quick",
      "Superb tubular plate lifespan"
    ],
    "limitations": [
      "Requires regular distilled water topping for tubular batteries (except maintenance-free gel)"
    ],
    "website": "https://www.exideindustries.com",
    "relatedBrands": [
      "amaron",
      "luminous"
    ],
    "description": "India's largest lead-acid storage battery manufacturer, providing power backup for cars and homes.",
    "overview": "India's largest lead-acid storage battery manufacturer, providing power backup for cars and homes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Exide Industries products?",
        "a": "Typically Exide Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Exide Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "amaron",
    "name": "Amaron (Amara Raja)",
    "logo": "🔋",
    "categories": [
      "Batteries"
    ],
    "origin": "India",
    "established": 2000,
    "headquarters": "Tirupati, Andhra Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "QS 9000",
      "ISO 14001"
    ],
    "products": [
      "Amaron Hi-Life (Car Battery)",
      "Amaron Shield (Inverter battery)",
      "Amaron Volt (Industrial)"
    ],
    "applications": [
      "Automotive engine starting",
      "Home UPS systems",
      "Telecom tower backups"
    ],
    "advantages": [
      "Pioneers of Silver-Calcium alloy grid for zero-maintenance (no water top-ups for car battery)"
    ],
    "limitations": [
      "Slightly higher initial price than basic unbranded batteries"
    ],
    "website": "https://www.amaron.in",
    "relatedBrands": [
      "exide",
      "livguard"
    ],
    "description": "Famous for green-cased 'zero-maintenance' automotive batteries, leading in durability.",
    "overview": "Famous for green-cased 'zero-maintenance' automotive batteries, leading in durability. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Amaron (Amara Raja) products?",
        "a": "Typically Amaron (Amara Raja) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Amaron (Amara Raja) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "luminous",
    "name": "Luminous Power Technologies",
    "logo": "🔋",
    "categories": [
      "Inverters & UPS Systems",
      "Batteries",
      "Solar Panels"
    ],
    "origin": "India",
    "established": 1988,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "BEE Star Certified"
    ],
    "products": [
      "Luminous Zelio (Smart Inverter)",
      "Luminous Red Charge Tubular Battery",
      "Luminous Solar Inverters"
    ],
    "applications": [
      "Smart Home Inverters",
      "Prolonged Power Cut Backups"
    ],
    "advantages": [
      "User-friendly LCD displays showing backup hours",
      "Excellent solar-hybrid inverter integration"
    ],
    "limitations": [
      "Battery casing is bulky, requires dedicated storage trolley"
    ],
    "website": "https://www.luminousindia.com",
    "relatedBrands": [
      "exide",
      "okaya"
    ],
    "description": "Owned by Schneider Electric, Luminous is a household brand for smart home inverters and batteries.",
    "overview": "Owned by Schneider Electric, Luminous is a household brand for smart home inverters and batteries. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Luminous Power Technologies products?",
        "a": "Typically Luminous Power Technologies products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Luminous Power Technologies conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "okaya",
    "name": "Okaya Power",
    "logo": "🔋",
    "categories": [
      "Batteries",
      "Inverters & UPS Systems"
    ],
    "origin": "India",
    "established": 1980,
    "headquarters": "New Delhi",
    "priceSegment": "Budget",
    "certifications": [
      "ISO 9001",
      "ISO 14001"
    ],
    "products": [
      "Okaya PowerMax Tubular",
      "Okaya EV Batteries (Lithium)",
      "Okaya Solar Battery"
    ],
    "applications": [
      "Budget Home Power Backups",
      "Electric Rickshaws & Scooters",
      "Off-grid Solar systems"
    ],
    "advantages": [
      "Highly economical pricing for high capacity (Ah) batteries",
      "Very long warranty periods"
    ],
    "limitations": [
      "Fewer smart Bluetooth monitoring features in budget home inverter lineups"
    ],
    "website": "https://www.okayapower.com",
    "relatedBrands": [
      "luminous",
      "livguard"
    ],
    "description": "Highly preferred for affordable heavy-duty tubular batteries, expanding rapidly into EV lithium packs.",
    "overview": "Highly preferred for affordable heavy-duty tubular batteries, expanding rapidly into EV lithium packs. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Okaya Power products?",
        "a": "Typically Okaya Power products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Okaya Power conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "livguard",
    "name": "Livguard",
    "logo": "🔋",
    "categories": [
      "Batteries",
      "Inverters & UPS Systems",
      "Solar Panels"
    ],
    "origin": "India",
    "established": 2014,
    "headquarters": "Gurugram, Haryana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Livguard Supertuf Inverter Battery",
      "Livguard Smart Inverters",
      "Livguard Automotive Batteries"
    ],
    "applications": [
      "Residential Inverter Slabs",
      "SUV Battery replacements"
    ],
    "advantages": [
      "Highly modern design aesthetics",
      "Fast-charging battery designs built for areas with frequent cuts"
    ],
    "limitations": [
      "Relatively new brand compared to industry giants Exide and Amaron"
    ],
    "website": "https://www.livguard.com",
    "relatedBrands": [
      "amaron",
      "exide"
    ],
    "description": "A fast-growing energetic power backup brand, offering stylish high-durability home energy systems.",
    "overview": "A fast-growing energetic power backup brand, offering stylish high-durability home energy systems. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Livguard products?",
        "a": "Typically Livguard products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Livguard conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "lg-appliances",
    "name": "LG Electronics",
    "logo": "📺",
    "categories": [
      "Home Appliances"
    ],
    "origin": "South Korea / India",
    "established": 1958,
    "headquarters": "Seoul, South Korea",
    "priceSegment": "Premium",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "LG Smart Inverter Refrigerators",
      "LG AI DD Washing Machines",
      "LG Dual Cool ACs"
    ],
    "applications": [
      "Kitchen Food Preservation",
      "Laundry",
      "Home Climate Control"
    ],
    "advantages": [
      "Pioneers of Linear Compressor tech (ultra quiet, energy saving)",
      "Exceptional smart app integration"
    ],
    "limitations": [
      "Premium smart models are costly to repair after the warranty period"
    ],
    "website": "https://www.lg.com/in",
    "relatedBrands": [
      "samsung-appliances",
      "bosch-appliances"
    ],
    "description": "South Korean giant, highly trusted in India for durable home appliances and smart inverter technology.",
    "overview": "South Korean giant, highly trusted in India for durable home appliances and smart inverter technology. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of LG Electronics products?",
        "a": "Typically LG Electronics products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does LG Electronics conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "samsung-appliances",
    "name": "Samsung",
    "logo": "📱",
    "categories": [
      "Home Appliances"
    ],
    "origin": "South Korea / India",
    "established": 1938,
    "headquarters": "Suwon, South Korea",
    "priceSegment": "Premium",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Samsung Curd Maestro Refrigerators",
      "Samsung Ecobubble Washers",
      "Samsung WindFree Air Conditioners"
    ],
    "applications": [
      "Smart Kitchens",
      "Modern Laundries",
      "Climate Comfort (Draft-free AC)"
    ],
    "advantages": [
      "Highly innovative feature sets (e.g. built-in curd maker refrigerator)",
      "Sleek modern aesthetics"
    ],
    "limitations": [
      "Service center response times can vary in rural tier-3 segments"
    ],
    "website": "https://www.samsung.com/in",
    "relatedBrands": [
      "lg-appliances",
      "whirlpool-appliances"
    ],
    "description": "Leading global innovator, famous for merging high-end digital tech with premium kitchen appliances.",
    "overview": "Leading global innovator, famous for merging high-end digital tech with premium kitchen appliances. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Samsung products?",
        "a": "Typically Samsung products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Samsung conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "whirlpool-appliances",
    "name": "Whirlpool",
    "logo": "🌀",
    "categories": [
      "Home Appliances"
    ],
    "origin": "USA / India",
    "established": 1911,
    "headquarters": "Benton Harbor, Michigan, USA",
    "priceSegment": "Mid",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Whirlpool Protton 3-Door Refrigerator",
      "Whirlpool 6th Sense Washing Machine"
    ],
    "applications": [
      "General Household Laundries",
      "Compact Kitchens"
    ],
    "advantages": [
      "6th Sense smart sensors adjust water/energy dynamically",
      "Unique 3-door layout isolates veggies"
    ],
    "limitations": [
      "Plain plastic handle designs on entry-level models"
    ],
    "website": "https://www.whirlpoolindia.com",
    "relatedBrands": [
      "samsung-appliances",
      "haier-appliances"
    ],
    "description": "American legacy brand, heavily trusted in India for reliable, family-sized washing machines.",
    "overview": "American legacy brand, heavily trusted in India for reliable, family-sized washing machines. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Whirlpool products?",
        "a": "Typically Whirlpool products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Whirlpool conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ifb-appliances",
    "name": "IFB Industries",
    "logo": "🌀",
    "categories": [
      "Home Appliances"
    ],
    "origin": "India",
    "established": 1974,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001",
      "CE marked"
    ],
    "products": [
      "IFB Front Load Washing Machines",
      "IFB Convection Microwaves",
      "IFB Dishwashers"
    ],
    "applications": [
      "Heavy-duty Laundry Care",
      "Modern Kitchen Dishwashing",
      "Baking & Grilling"
    ],
    "advantages": [
      "The absolute benchmark for front-load washing stability and fabric care in India",
      "4-year super warranty"
    ],
    "limitations": [
      "Premium pricing; drum descaling is required regularly due to hard water sensitivity"
    ],
    "website": "https://www.ifbappliances.com",
    "relatedBrands": [
      "bosch-appliances",
      "lg-appliances"
    ],
    "description": "Indian brand renowned for engineering high-performance front-load washing machines and dishwashers.",
    "overview": "Indian brand renowned for engineering high-performance front-load washing machines and dishwashers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of IFB Industries products?",
        "a": "Typically IFB Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does IFB Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bosch-appliances",
    "name": "Bosch Appliances",
    "logo": "🇩🇪",
    "categories": [
      "Home Appliances"
    ],
    "origin": "Germany / India",
    "established": 1886,
    "headquarters": "Gerlingen, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "CE marked",
      "ISO 9001"
    ],
    "products": [
      "Bosch Serie 6 Front Loader",
      "Bosch Free-standing Dishwashers",
      "Bosch Built-in Ovens"
    ],
    "applications": [
      "Eco-friendly laundry",
      "Luxury built-in kitchen setups",
      "Automatic dishwashing"
    ],
    "advantages": [
      "German engineering precision, extremely quiet EcoSilence drive motor",
      "Heavy load build quality"
    ],
    "limitations": [
      "Spare parts are highly expensive and imported, leading to potential repair delays"
    ],
    "website": "https://www.bosch-home.in",
    "relatedBrands": [
      "ifb-appliances",
      "lg-appliances"
    ],
    "description": "German engineering leader, famous for quiet, highly durable dishwashers and built-in luxury appliances.",
    "overview": "German engineering leader, famous for quiet, highly durable dishwashers and built-in luxury appliances. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bosch Appliances products?",
        "a": "Typically Bosch Appliances products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bosch Appliances conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "haier-appliances",
    "name": "Haier",
    "logo": "❄️",
    "categories": [
      "Home Appliances"
    ],
    "origin": "China / India",
    "established": 1984,
    "headquarters": "Qingdao, China",
    "priceSegment": "Budget",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Haier Bottom Mounted Refrigerator",
      "Haier Self-Cleaning ACs",
      "Haier Top Load Washers"
    ],
    "applications": [
      "Affordable Kitchens",
      "Quick Air Cooling",
      "Compact Laundry Rooms"
    ],
    "advantages": [
      "Pioneers of bottom-mounted refrigerators (reduces bending)",
      "Highly competitive budget pricing"
    ],
    "limitations": [
      "Cabinet metal sheets on budget ranges are thinner than competitors"
    ],
    "website": "https://www.haier.com/in",
    "relatedBrands": [
      "whirlpool-appliances",
      "samsung-appliances"
    ],
    "description": "Global home appliance major, famous for category innovations like bottom-mounted fridges.",
    "overview": "Global home appliance major, famous for category innovations like bottom-mounted fridges. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Haier products?",
        "a": "Typically Haier products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Haier conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "upl-limited",
    "name": "UPL Limited",
    "logo": "🌱",
    "categories": [
      "Agricultural Fertilizers",
      "Pesticides & Herbicides"
    ],
    "origin": "India",
    "established": 1969,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "ISO 14001"
    ],
    "products": [
      "UPL Saaf Fungicide",
      "UPL Phoskill (Insecticide)",
      "UPL Lancer Gold"
    ],
    "applications": [
      "Crop Disease Protection",
      "Fungal infections in Soil",
      "Pest Management"
    ],
    "advantages": [
      "Global leader in sustainable bio-solutions",
      "Extremely effective broad-spectrum protection"
    ],
    "limitations": [
      "Chemical drift requires strict personal protective gear during spraying"
    ],
    "website": "https://www.upl-ltd.com",
    "relatedBrands": [
      "bayer-crop",
      "rallis-india"
    ],
    "description": "A global agriculture leader providing crop protection products, seeds, and bio-solutions.",
    "overview": "A global agriculture leader providing crop protection products, seeds, and bio-solutions. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of UPL Limited products?",
        "a": "Typically UPL Limited products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does UPL Limited conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bayer-crop",
    "name": "Bayer Crop Science",
    "logo": "🇩🇪",
    "categories": [
      "Agricultural Fertilizers",
      "Pesticides & Herbicides",
      "Seeds & Crop Varieties"
    ],
    "origin": "Germany / India",
    "established": 1863,
    "headquarters": "Leverkusen, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001",
      "EPA Standards"
    ],
    "products": [
      "Bayer Confidor Insecticide",
      "Bayer Regent (Pest control)",
      "Arize Hybrid Rice Seeds"
    ],
    "applications": [
      "High-yield paddy cultivation",
      "Systemic sucking pest control",
      "Foliar crop sprays"
    ],
    "advantages": [
      "Top-tier scientific research backing",
      "Highly targeted systemic action (minimizes crop toxicity)"
    ],
    "limitations": [
      "High cost per liter/kg compared to local generic chemical brands"
    ],
    "website": "https://www.cropscience.bayer.in",
    "relatedBrands": [
      "upl-limited",
      "syngenta-seeds"
    ],
    "description": "The agriculture division of Bayer Germany, offering science-driven pest control and hybrid seeds.",
    "overview": "The agriculture division of Bayer Germany, offering science-driven pest control and hybrid seeds. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bayer Crop Science products?",
        "a": "Typically Bayer Crop Science products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bayer Crop Science conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "coromandel-intl",
    "name": "Coromandel International",
    "logo": "🌾",
    "categories": [
      "Agricultural Fertilizers",
      "Organic Fertilizers"
    ],
    "origin": "India",
    "established": 1961,
    "headquarters": "Secunderabad, Telangana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "FCO Certified"
    ],
    "products": [
      "Gromor 14-35-14 (NPK)",
      "Gromor Urea",
      "Parry Gold Organic Manure"
    ],
    "applications": [
      "Soil Basal Dressing",
      "Root Development stimulation",
      "Organic soil enrichment"
    ],
    "advantages": [
      "Part of Murugappa Group, highly trusted FCO-certified nutrients",
      "Excellent organic blends"
    ],
    "limitations": [
      "High weight bags (50kg) are labor-intensive to transport and handle manually"
    ],
    "website": "https://www.coromandel.biz",
    "relatedBrands": [
      "iffco-fertilizer",
      "rallis-india"
    ],
    "description": "India's pioneer in phosphatic fertilizers and organic nutrients, serving millions of farmers.",
    "overview": "India's pioneer in phosphatic fertilizers and organic nutrients, serving millions of farmers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Coromandel International products?",
        "a": "Typically Coromandel International products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Coromandel International conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "iffco-fertilizer",
    "name": "IFFCO",
    "logo": "🌾",
    "categories": [
      "Agricultural Fertilizers",
      "Organic Fertilizers"
    ],
    "origin": "India",
    "established": 1967,
    "headquarters": "New Delhi",
    "priceSegment": "Budget",
    "certifications": [
      "ISO 9001",
      "FCO Standards"
    ],
    "products": [
      "IFFCO NPK 12-32-16",
      "IFFCO Nano Urea (Liquid)",
      "IFFCO DAP (Di-Ammonium Phosphate)"
    ],
    "applications": [
      "Crop leaf spraying (Nano Urea)",
      "Broad-field soil dressing",
      "Seedling root nutrition"
    ],
    "advantages": [
      "World's first Nano Urea (increases efficiency, reduces soil pollution)",
      "Huge cooperative trust"
    ],
    "limitations": [
      "Nano Urea requires accurate water-dilution ratios to avoid foliage burning"
    ],
    "website": "https://www.iffco.in",
    "relatedBrands": [
      "coromandel-intl",
      "upl-limited"
    ],
    "description": "The world's largest cooperative society, famous for introducing revolutionary Nano Liquid Urea.",
    "overview": "The world's largest cooperative society, famous for introducing revolutionary Nano Liquid Urea. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of IFFCO products?",
        "a": "Typically IFFCO products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does IFFCO conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "rallis-india",
    "name": "Rallis India (Tata)",
    "logo": "🌱",
    "categories": [
      "Pesticides & Herbicides",
      "Agricultural Fertilizers"
    ],
    "origin": "India",
    "established": 1948,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "NABL accredited lab"
    ],
    "products": [
      "Rallis Contaf Plus (Fungicide)",
      "Rallis Asataf (Insecticide)",
      "Rallis Soluban"
    ],
    "applications": [
      "Wheat and Rice farming protection",
      "Soil conditioning"
    ],
    "advantages": [
      "Tata group trust, highly reliable chemical composition",
      "Excellent farm advisory network"
    ],
    "limitations": [
      "Slightly slower roll-out of biological bio-pesticides compared to UPL"
    ],
    "website": "https://www.rallis.com",
    "relatedBrands": [
      "upl-limited",
      "bayer-crop"
    ],
    "description": "A Tata Enterprise, leading in crop protection chemicals, soil conditioners, and contract farming.",
    "overview": "A Tata Enterprise, leading in crop protection chemicals, soil conditioners, and contract farming. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Rallis India (Tata) products?",
        "a": "Typically Rallis India (Tata) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Rallis India (Tata) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "syngenta-seeds",
    "name": "Syngenta",
    "logo": "🇨🇭",
    "categories": [
      "Seeds & Crop Varieties",
      "Pesticides & Herbicides"
    ],
    "origin": "Switzerland / India",
    "established": 2000,
    "headquarters": "Basel, Switzerland",
    "priceSegment": "Premium",
    "certifications": [
      "ISTA certified",
      "ISO 9001"
    ],
    "products": [
      "Syngenta NK30 Corn Seeds",
      "Syngenta Habanero/Vegetable Seeds",
      "Syngenta Amistar Fungicide"
    ],
    "applications": [
      "High-density maize farming",
      "Commercial greenhouse vegetable growing",
      "Premium crop protection"
    ],
    "advantages": [
      "Outstanding germination rates (>90%)",
      "Disease-resistant seed breeding"
    ],
    "limitations": [
      "Hybrid seeds cannot be harvested and saved for replanting next season; requires fresh purchase"
    ],
    "website": "https://www.syngenta.co.in",
    "relatedBrands": [
      "bayer-crop",
      "mahyco-seeds"
    ],
    "description": "Swiss agriculture giant, pioneering hybrid field crops, high-value vegetables, and crop disease controls.",
    "overview": "Swiss agriculture giant, pioneering hybrid field crops, high-value vegetables, and crop disease controls. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Syngenta products?",
        "a": "Typically Syngenta products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Syngenta conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "mahyco-seeds",
    "name": "Mahyco",
    "logo": "🌾",
    "categories": [
      "Seeds & Crop Varieties"
    ],
    "origin": "India",
    "established": 1964,
    "headquarters": "Jalna, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "DST Recognized R&D"
    ],
    "products": [
      "Mahyco Bt Cotton Seeds",
      "Mahyco Hybrid Pearl Millet",
      "Mahyco Tomato/Chilli seeds"
    ],
    "applications": [
      "Dryland cotton farming",
      "Arid millet sowing",
      "Open-field vegetable farming"
    ],
    "advantages": [
      "Pioneers of Bt Cotton in India, highly pest-resistant seeds",
      "Great drought tolerance"
    ],
    "limitations": [
      "Subject to strict regional regulatory licensing approvals"
    ],
    "website": "https://www.mahyco.com",
    "relatedBrands": [
      "syngenta-seeds",
      "kaveri-seeds"
    ],
    "description": "Maharashtra Hybrid Seeds Company, credited with sparking India's green revolution in cotton.",
    "overview": "Maharashtra Hybrid Seeds Company, credited with sparking India's green revolution in cotton. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Mahyco products?",
        "a": "Typically Mahyco products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Mahyco conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "kaveri-seeds",
    "name": "Kaveri Seeds",
    "logo": "🌾",
    "categories": [
      "Seeds & Crop Varieties"
    ],
    "origin": "India",
    "established": 1986,
    "headquarters": "Secunderabad, Telangana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "DSIR recognized R&D"
    ],
    "products": [
      "Kaveri 50 (Hybrid Maize)",
      "Kaveri Paddy Jadoo",
      "Kaveri Sun-flower seeds"
    ],
    "applications": [
      "Southern India rice paddies",
      "Rainfed maize fields"
    ],
    "advantages": [
      "Highly suitable for Indian tropical soil profiles",
      "Excellent lodging resistance (stems don't break in wind)"
    ],
    "limitations": [
      "Performance drop if sown in waterlogged lowlands without drainage"
    ],
    "website": "https://www.kaveriseeds.in",
    "relatedBrands": [
      "mahyco-seeds",
      "nuziveedu-seeds"
    ],
    "description": "A premier seed company, holding huge market share in hybrid maize, paddy, and pearl millets.",
    "overview": "A premier seed company, holding huge market share in hybrid maize, paddy, and pearl millets. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Kaveri Seeds products?",
        "a": "Typically Kaveri Seeds products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Kaveri Seeds conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "nuziveedu-seeds",
    "name": "Nuziveedu Seeds",
    "logo": "🌾",
    "categories": [
      "Seeds & Crop Varieties"
    ],
    "origin": "India",
    "established": 1973,
    "headquarters": "Hyderabad, Telangana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Bhakthi Hybrid Paddy",
      "Bunny Bt Cotton",
      "Mallika Cotton Seeds"
    ],
    "applications": [
      "Black cotton soil tracts",
      "Wet delta rice farming"
    ],
    "advantages": [
      "Very high staple length cotton output (Bunny)",
      "Excellent milling recovery in paddy"
    ],
    "limitations": [
      "Limited catalog of cold-region temperate vegetable seeds"
    ],
    "website": "https://www.nuziveeduseeds.com",
    "relatedBrands": [
      "kaveri-seeds",
      "advanta-seeds"
    ],
    "description": "One of India's largest cotton seed companies, famous for Bunny and Mallika Bt cotton hybrids.",
    "overview": "One of India's largest cotton seed companies, famous for Bunny and Mallika Bt cotton hybrids. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Nuziveedu Seeds products?",
        "a": "Typically Nuziveedu Seeds products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Nuziveedu Seeds conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "advanta-seeds",
    "name": "Advanta Seeds (UPL)",
    "logo": "🌾",
    "categories": [
      "Seeds & Crop Varieties"
    ],
    "origin": "India",
    "established": 1994,
    "headquarters": "Hyderabad, Telangana",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "ISTA certified"
    ],
    "products": [
      "Advanta PAC 751 (Mustard)",
      "Advanta Nutrifeed (Forage Grass)",
      "Advanta Sweet Corn"
    ],
    "applications": [
      "Edible oil mustard cultivation",
      "Dairy cattle forage grass crops",
      "Food processing sweet corn"
    ],
    "advantages": [
      "World leader in tropical forage grass seeds (Nutrifeed)",
      "High oil content mustard seeds"
    ],
    "limitations": [
      "Forage grass requires high nitrogen fertilization for multiple cuts"
    ],
    "website": "https://www.advantaseeds.com",
    "relatedBrands": [
      "nuziveedu-seeds",
      "syngenta-seeds"
    ],
    "description": "A subsidiary of UPL, specializing in high-yield mustard, sweet corn, and dairy forage grass.",
    "overview": "A subsidiary of UPL, specializing in high-yield mustard, sweet corn, and dairy forage grass. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Advanta Seeds (UPL) products?",
        "a": "Typically Advanta Seeds (UPL) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Advanta Seeds (UPL) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "raymond",
    "name": "Raymond Limited",
    "logo": "🧥",
    "categories": [
      "Fabrics & Textiles"
    ],
    "origin": "India",
    "established": 1925,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "ISO 9001",
      "Woolmark Certified"
    ],
    "products": [
      "Raymond Fine Suiting (Wool/Cashmere)",
      "Raymond Premium Cotton",
      "Raymond Ready-to-Wear"
    ],
    "applications": [
      "Bespoke Luxury Suits",
      "Executive Shirts",
      "Wedding Wear"
    ],
    "advantages": [
      "Synonymous with premium suiting",
      "Woolmark certification guarantees genuine virgin merino wool"
    ],
    "limitations": [
      "High cost per meter; requires specialized dry cleaning for wool blends"
    ],
    "website": "https://www.raymond.in",
    "relatedBrands": [
      "arvind-limited",
      "siyarams"
    ],
    "description": "India's iconic luxury suiting brand, famous for high-count wool, linen, and executive styling.",
    "overview": "India's iconic luxury suiting brand, famous for high-count wool, linen, and executive styling. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Raymond Limited products?",
        "a": "Typically Raymond Limited products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Raymond Limited conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "arvind-limited",
    "name": "Arvind Limited",
    "logo": "👖",
    "categories": [
      "Fabrics & Textiles"
    ],
    "origin": "India",
    "established": 1931,
    "headquarters": "Ahmedabad, Gujarat",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "Oeko-Tex Standard 100"
    ],
    "products": [
      "Arvind Denim Fabrics",
      "Arvind Organic Cottons",
      "Arvind Khadi collection"
    ],
    "applications": [
      "Casual Jeanswear",
      "Eco-friendly retail clothing",
      "Sustainable fashion labels"
    ],
    "advantages": [
      "One of the world's largest denim manufacturers",
      "Certified organic and sustainable supply chains"
    ],
    "limitations": [
      "Mainly operates as B2B mill supplier; lower direct custom-tailoring retail outlets than Raymond"
    ],
    "website": "https://www.arvind.com",
    "relatedBrands": [
      "raymond",
      "vardhman-textiles"
    ],
    "description": "A global textile giant, pioneering sustainable cotton, indigo denim, and retail fashion brands.",
    "overview": "A global textile giant, pioneering sustainable cotton, indigo denim, and retail fashion brands. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Arvind Limited products?",
        "a": "Typically Arvind Limited products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Arvind Limited conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "siyarams",
    "name": "Siyaram's (SRSL)",
    "logo": "👔",
    "categories": [
      "Fabrics & Textiles"
    ],
    "origin": "India",
    "established": 1978,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Siyaram's Royale Kabir suiting",
      "Siyarams J. Hampstead",
      "Siyarams Cadini (Italian blend)"
    ],
    "applications": [
      "Daily Office Trouser/Shirts",
      "Casual Blended Blazers",
      "Uniform fabrics"
    ],
    "advantages": [
      "Extremely durable polyester-viscose (PV) blended fabrics",
      "Highly wrinkle resistant"
    ],
    "limitations": [
      "Blended synthetic fabrics are less breathable than pure linens and fine cottons"
    ],
    "website": "https://www.siyarams.com",
    "relatedBrands": [
      "raymond",
      "bombay-dyeing"
    ],
    "description": "A household suiting brand, famous for durable, affordable, and wrinkle-resistant blended fabrics.",
    "overview": "A household suiting brand, famous for durable, affordable, and wrinkle-resistant blended fabrics. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Siyaram's (SRSL) products?",
        "a": "Typically Siyaram's (SRSL) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Siyaram's (SRSL) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "vardhman-textiles",
    "name": "Vardhman Textiles",
    "logo": "🧵",
    "categories": [
      "Fabrics & Textiles"
    ],
    "origin": "India",
    "established": 1965,
    "headquarters": "Ludhiana, Punjab",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "Oeko-Tex Standard 100"
    ],
    "products": [
      "Vardhman Specialized Yarns",
      "Vardhman Piece-Dyed Fabrics",
      "Vardhman Sewing Threads"
    ],
    "applications": [
      "Industrial garment sewing",
      "Woven shirts fabric supply",
      "B2B apparel design"
    ],
    "advantages": [
      "Largest manufacturer of sewing threads and dyed yarns in India",
      "Outstanding color fastness"
    ],
    "limitations": [
      "Minimal direct B2C custom-tailoring brand presence"
    ],
    "website": "https://www.vardhman.com",
    "relatedBrands": [
      "arvind-limited",
      "raymond"
    ],
    "description": "The premier spinning and yarn manufacturer, the backbone thread supplier to global garment brands.",
    "overview": "The premier spinning and yarn manufacturer, the backbone thread supplier to global garment brands. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Vardhman Textiles products?",
        "a": "Typically Vardhman Textiles products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Vardhman Textiles conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bombay-dyeing",
    "name": "Bombay Dyeing",
    "logo": "🛏️",
    "categories": [
      "Fabrics & Textiles"
    ],
    "origin": "India",
    "established": 1879,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001"
    ],
    "products": [
      "Bombay Dyeing Bed sheets & Linens",
      "Bombay Dyeing Bath Towels",
      "Home Furnishing Fabrics"
    ],
    "applications": [
      "Home Bedroom Makeovers",
      "Hotel Linen Supplies",
      "Upholstery backing"
    ],
    "advantages": [
      "Legacy household trust for high thread count cotton bed sheets",
      "Vibrant colors"
    ],
    "limitations": [
      "Fierce competition from cheaper unbranded local handloom weavers"
    ],
    "website": "https://www.bombaydyeing.com",
    "relatedBrands": [
      "siyarams",
      "arvind-limited"
    ],
    "description": "One of India's oldest textile brands, synonymous with premium bed sheets, towels, and home linens.",
    "overview": "One of India's oldest textile brands, synonymous with premium bed sheets, towels, and home linens. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bombay Dyeing products?",
        "a": "Typically Bombay Dyeing products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bombay Dyeing conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "bosch-tools",
    "name": "Bosch Power Tools",
    "logo": "⚙️",
    "categories": [
      "Industrial Tools"
    ],
    "origin": "Germany / India",
    "established": 1886,
    "headquarters": "Gerlingen, Germany",
    "priceSegment": "Premium",
    "certifications": [
      "CE marked",
      "ISO 9001"
    ],
    "products": [
      "Bosch Professional Rotary Hammer (GBH)",
      "Bosch Cordless Drill (GSR)",
      "Bosch Angle Grinder (GWS)"
    ],
    "applications": [
      "Concrete Core Drilling",
      "Fastener Tightening",
      "Metal/Stone Grinding"
    ],
    "advantages": [
      "Exceptional torque control and motor cooling",
      "Huge global service and carbon-brush replacement network"
    ],
    "limitations": [
      "Batteries for cordless tools are proprietary and highly expensive to replace"
    ],
    "website": "https://www.bosch-pt.in",
    "relatedBrands": [
      "dewalt-tools",
      "makita-tools"
    ],
    "description": "The global leader in professional power tools, renowned for the robust 'Blue' professional tool line.",
    "overview": "The global leader in professional power tools, renowned for the robust 'Blue' professional tool line. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Bosch Power Tools products?",
        "a": "Typically Bosch Power Tools products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Bosch Power Tools conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "stanley-tools",
    "name": "Stanley",
    "logo": "🧰",
    "categories": [
      "Industrial Tools"
    ],
    "origin": "USA / India",
    "established": 1843,
    "headquarters": "New Britain, Connecticut, USA",
    "priceSegment": "Mid",
    "certifications": [
      "ANSI Standards",
      "ISO 9001"
    ],
    "products": [
      "Stanley Hand Tool Kit",
      "Stanley FatMax Tape Measure",
      "Stanley Retractable Utility Knife"
    ],
    "applications": [
      "DIY Home repairs",
      "Carpentry measuring and cutting",
      "Mechanical socket assembly"
    ],
    "advantages": [
      "World leader in high-grade chrome-vanadium steel hand tools",
      "Extremely accurate measuring tapes"
    ],
    "limitations": [
      "Hand tools are prone to rust if stored in damp garages without anti-rust oiling"
    ],
    "website": "https://www.stanleytools.in",
    "relatedBrands": [
      "bosch-tools",
      "dewalt-tools"
    ],
    "description": "The gold standard for hand tools, famous for tape measures, utility knives, and vanadium steel spanners.",
    "overview": "The gold standard for hand tools, famous for tape measures, utility knives, and vanadium steel spanners. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Stanley products?",
        "a": "Typically Stanley products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Stanley conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "dewalt-tools",
    "name": "DeWalt",
    "logo": "💛",
    "categories": [
      "Industrial Tools"
    ],
    "origin": "USA / India",
    "established": 1924,
    "headquarters": "Towson, Maryland, USA",
    "priceSegment": "Premium",
    "certifications": [
      "ANSI Standards",
      "CE marked"
    ],
    "products": [
      "DeWalt XR Cordless Brushless Drill",
      "DeWalt Mitre Saw",
      "DeWalt ToughSystem Storage"
    ],
    "applications": [
      "Heavy-duty Construction framing",
      "Precision wood mitre cutting",
      "Contractor site tool transport"
    ],
    "advantages": [
      "Extremely durable brushless motors (longer runtime, no carbon brushes to wear)",
      "Distinct yellow/black housing"
    ],
    "limitations": [
      "Chargers and batteries are priced at a premium; heavy weight design builds fatigue during overhead drilling"
    ],
    "website": "https://www.dewalt.in",
    "relatedBrands": [
      "bosch-tools",
      "makita-tools"
    ],
    "description": "Acquired by Stanley Black & Decker, DeWalt is the heavy-duty contractor brand of choice.",
    "overview": "Acquired by Stanley Black & Decker, DeWalt is the heavy-duty contractor brand of choice. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of DeWalt products?",
        "a": "Typically DeWalt products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does DeWalt conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "makita-tools",
    "name": "Makita",
    "logo": " Teal ",
    "categories": [
      "Industrial Tools"
    ],
    "origin": "Japan / India",
    "established": 1915,
    "headquarters": "Anjo, Japan",
    "priceSegment": "Premium",
    "certifications": [
      "JIS Standards",
      "CE marked"
    ],
    "products": [
      "Makita LXT Cordless Impact Driver",
      "Makita Demolition Hammer",
      "Makita Cordless Planer/Router"
    ],
    "applications": [
      "Precision Japanese woodworking",
      "Concrete Demolition",
      "High-torque structural fastening"
    ],
    "advantages": [
      "Widely praised for having the smoothest motor bearings and precision vibration control (AVT)"
    ],
    "limitations": [
      "Slightly lower local hardware store parts stocking in Tier-2/3 towns compared to Bosch"
    ],
    "website": "https://www.makita.in",
    "relatedBrands": [
      "bosch-tools",
      "dewalt-tools"
    ],
    "description": "Japanese engineering giant, favored by premium woodworkers for smooth bearings and durability.",
    "overview": "Japanese engineering giant, favored by premium woodworkers for smooth bearings and durability. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Makita products?",
        "a": "Typically Makita products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Makita conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ingco-tools",
    "name": "Ingco Tools",
    "logo": "🧡",
    "categories": [
      "Industrial Tools"
    ],
    "origin": "China / India",
    "established": 2002,
    "headquarters": "Suzhou, China",
    "priceSegment": "Budget",
    "certifications": [
      "ISO 9001",
      "CE marked"
    ],
    "products": [
      "Ingco 20V Cordless Drill",
      "Ingco Screwdriver Set",
      "Ingco Digital Multimeter"
    ],
    "applications": [
      "Budget DIY renovations",
      "Appliance repairs",
      "Basic metal grinding"
    ],
    "advantages": [
      "Extremely affordable cordless platform (share one battery across 100+ tools)",
      "Vast budget range"
    ],
    "limitations": [
      "Plastic casings and triggers are less impact-resistant than DeWalt or Bosch Professional"
    ],
    "website": "https://www.ingco.in",
    "relatedBrands": [
      "stanley-tools",
      "bosch-tools"
    ],
    "description": "A fast-growing value brand, offering comprehensive home power tools at highly aggressive prices.",
    "overview": "A fast-growing value brand, offering comprehensive home power tools at highly aggressive prices. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Ingco Tools products?",
        "a": "Typically Ingco Tools products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Ingco Tools conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "3m-safety",
    "name": "3M Safety",
    "logo": "🛡️",
    "categories": [
      "Safety Equipment (PPE)"
    ],
    "origin": "USA / India",
    "established": 1902,
    "headquarters": "Saint Paul, Minnesota, USA",
    "priceSegment": "Premium",
    "certifications": [
      "NIOSH approved",
      "EN 149",
      "IS 9473"
    ],
    "products": [
      "3M N95 Respirator Mask (8210)",
      "3M Peltor Ear Muffs",
      "3M Speedglas Auto-Darkening Welding Helmet"
    ],
    "applications": [
      "Construction site dust protection",
      "High-noise cutting shops",
      "Metal Arc welding protection"
    ],
    "advantages": [
      "Industry standard NIOSH respirator filtration",
      "Patented Cool Flow exhalation valves prevent sweating"
    ],
    "limitations": [
      "High recurring cost for disposable filters and single-use masks"
    ],
    "website": "https://www.3mindia.in",
    "relatedBrands": [
      "honeywell-safety",
      "karam-safety"
    ],
    "description": "The science-based safety leader, setting global standards for respirator masks and ear protection.",
    "overview": "The science-based safety leader, setting global standards for respirator masks and ear protection. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of 3M Safety products?",
        "a": "Typically 3M Safety products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does 3M Safety conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "honeywell-safety",
    "name": "Honeywell Safety",
    "logo": "🛡️",
    "categories": [
      "Safety Equipment (PPE)"
    ],
    "origin": "USA / India",
    "established": 1906,
    "headquarters": "Charlotte, North Carolina, USA",
    "priceSegment": "Premium",
    "certifications": [
      "EN Standards",
      "ANSI Standards",
      "ISO 9001"
    ],
    "products": [
      "Honeywell Safety Goggles",
      "Honeywell Rig Dog impact gloves",
      "Honeywell Fall Protection Harnesses"
    ],
    "applications": [
      "Chemical splash shielding",
      "Heavy rigging hand protection",
      "High-altitude scaffolding safety"
    ],
    "advantages": [
      "High-durability impact resistant polycarbonate lenses",
      "Comfortable harness padding"
    ],
    "limitations": [
      "Slightly complex sizing charts for safety gloves and harnesses"
    ],
    "website": "https://www.honeywell.com",
    "relatedBrands": [
      "3m-safety",
      "karam-safety"
    ],
    "description": "A global industrial giant, famous for rig safety gloves, fall protection harnesses, and chemical goggles.",
    "overview": "A global industrial giant, famous for rig safety gloves, fall protection harnesses, and chemical goggles. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Honeywell Safety products?",
        "a": "Typically Honeywell Safety products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Honeywell Safety conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "karam-safety",
    "name": "Karam",
    "logo": "🛡️",
    "categories": [
      "Safety Equipment (PPE)"
    ],
    "origin": "India",
    "established": 1999,
    "headquarters": "Noida, Uttar Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "IS 3521",
      "CE marked",
      "DGMS approved"
    ],
    "products": [
      "Karam Full Body Safety Harness",
      "Karam Safety Shoes (Flylite)",
      "Karam Safety Helmets"
    ],
    "applications": [
      "Tower construction fall arrest",
      "Factory floor foot protection",
      "Debris impact shielding"
    ],
    "advantages": [
      "India's largest fall protection manufacturer",
      "Excellent steel-toe and composite-toe light safety shoes"
    ],
    "limitations": [
      "Traditional leather safety shoes can be hot and sweat-prone in peak summer conditions"
    ],
    "website": "https://www.karam.in",
    "relatedBrands": [
      "3m-safety",
      "udyogi-safety"
    ],
    "description": "India's leading homegrown safety brand, specializing in fall arrest harnesses and certified footwear.",
    "overview": "India's leading homegrown safety brand, specializing in fall arrest harnesses and certified footwear. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Karam products?",
        "a": "Typically Karam products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Karam conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "udyogi-safety",
    "name": "Udyogi Safety",
    "logo": "🛡️",
    "categories": [
      "Safety Equipment (PPE)"
    ],
    "origin": "India",
    "established": 1977,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Budget",
    "certifications": [
      "IS Standards",
      "ISO 9001"
    ],
    "products": [
      "Udyogi Safety Helmets (Class E)",
      "Udyogi Chemical Splash Suits",
      "Udyogi Cotton Safety Gloves"
    ],
    "applications": [
      "Electrical insulation head protection",
      "Chemical cleaning plants",
      "General cargo handling"
    ],
    "advantages": [
      "Very economical bulk pricing for large construction workforces",
      "Strong industrial presence"
    ],
    "limitations": [
      "Budget helmets have simpler suspension harnesses, leading to lower long-wear comfort"
    ],
    "website": "https://www.udyogisafety.com",
    "relatedBrands": [
      "karam-safety",
      "honeywell-safety"
    ],
    "description": "A trusted manufacturer of economical personal protective equipment (PPE) for mass construction forces.",
    "overview": "A trusted manufacturer of economical personal protective equipment (PPE) for mass construction forces. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Udyogi Safety products?",
        "a": "Typically Udyogi Safety products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Udyogi Safety conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "sintex",
    "name": "Sintex Plastics",
    "logo": "🛢️",
    "categories": [
      "Water Tanks"
    ],
    "origin": "India",
    "established": 1975,
    "headquarters": "Kalol, Gujarat",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "FDA Approved (Food Grade)"
    ],
    "products": [
      "Sintex Triple Layer PVC Tank",
      "Sintex Loft Tanks",
      "Sintex Titus (Premium Active Antibacterial)"
    ],
    "applications": [
      "Residential Overhead Storage",
      "Under-stairs Loft storage",
      "Smart Antibacterial Water Storage"
    ],
    "advantages": [
      "Household synonym for water tanks in India",
      "FDA approved food-grade polymer prevents plastic smell in water"
    ],
    "limitations": [
      "Standard black tanks absorb high heat, making water hot in summers; requires white triple-layer tanks"
    ],
    "website": "https://www.sintex-plastics.com",
    "relatedBrands": [
      "supreme-tanks",
      "vectus-tanks"
    ],
    "description": "The pioneer of plastic water storage in India, leading in multi-layer overhead and underground tanks.",
    "overview": "The pioneer of plastic water storage in India, leading in multi-layer overhead and underground tanks. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Sintex Plastics products?",
        "a": "Typically Sintex Plastics products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Sintex Plastics conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "supreme-tanks",
    "name": "Supreme Tanks",
    "logo": "🛢️",
    "categories": [
      "Water Tanks",
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1942,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "FDA Compliant"
    ],
    "products": [
      "Supreme Siloplast Tanks (4 Layers)",
      "Supreme Loft Tanks"
    ],
    "applications": [
      "Overhead Drinking Water Storage",
      "Apartment Complex Water Reservoirs"
    ],
    "advantages": [
      "4-layered insulation shields water from extreme summer heat",
      "Threaded airtight lids prevent dust entering"
    ],
    "limitations": [
      "Bulk design requires structural column support on roof slabs due to high weight when filled"
    ],
    "website": "https://www.supreme.co.in",
    "relatedBrands": [
      "sintex",
      "vectus-tanks"
    ],
    "description": "A division of Supreme Industries, offering heavily insulated, high-strength threaded water tanks.",
    "overview": "A division of Supreme Industries, offering heavily insulated, high-strength threaded water tanks. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Supreme Tanks products?",
        "a": "Typically Supreme Tanks products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Supreme Tanks conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "vectus-tanks",
    "name": "Vectus Industries",
    "logo": "🛢️",
    "categories": [
      "Water Tanks",
      "Pipes & Fittings"
    ],
    "origin": "India",
    "established": 1989,
    "headquarters": "Noida, Uttar Pradesh",
    "priceSegment": "Mid",
    "certifications": [
      "ISO 9001",
      "FDA approved materials"
    ],
    "products": [
      "Vectus Granito Tanks (6 Layers)",
      "Vectus Cool (Heat insulated)"
    ],
    "applications": [
      "Overhead Roof Water Storage",
      "Industrial Acid/Chemical Storage"
    ],
    "advantages": [
      "Pioneers of 6-layered tanks for advanced UV and thermal protection",
      "Stunning granite-look design"
    ],
    "limitations": [
      "Premium 6-layer model carries a high cost per liter compared to standard 3-layer tanks"
    ],
    "website": "https://www.vectus.in",
    "relatedBrands": [
      "sintex",
      "penguin-tanks"
    ],
    "description": "Part of Wavin group, famous for polymer piping and advanced multi-layered insulated water tanks.",
    "overview": "Part of Wavin group, famous for polymer piping and advanced multi-layered insulated water tanks. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Vectus Industries products?",
        "a": "Typically Vectus Industries products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Vectus Industries conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "penguin-tanks",
    "name": "Penguin Tanks",
    "logo": "🐧",
    "categories": [
      "Water Tanks"
    ],
    "origin": "India",
    "established": 2013,
    "headquarters": "Kolkata, West Bengal",
    "priceSegment": "Budget",
    "certifications": [
      "ISO 9001",
      "FDA Approved"
    ],
    "products": [
      "Penguin Maxx (Polyurethane foam insulated)",
      "Penguin Classic 3-Layer"
    ],
    "applications": [
      "Domestic Rooftop storage",
      "Rural Rainwater harvesting collection"
    ],
    "advantages": [
      "Excellent polyurethane (PUF) insulation layer keeps water cool",
      "Affordable pricing structures"
    ],
    "limitations": [
      "Dealer network is highly concentrated in Eastern India, limited retail presence in Western India"
    ],
    "website": "https://www.penguintanks.com",
    "relatedBrands": [
      "vectus-tanks",
      "sintex"
    ],
    "description": "Highly popular in East India for innovative PUF-insulated water tanks that fight high summer heat.",
    "overview": "Highly popular in East India for innovative PUF-insulated water tanks that fight high summer heat. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Penguin Tanks products?",
        "a": "Typically Penguin Tanks products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Penguin Tanks conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "saint-gobain",
    "name": "Saint-Gobain Glass",
    "logo": "🏢",
    "categories": [
      "Glass Products"
    ],
    "origin": "France / India",
    "established": 1665,
    "headquarters": "Courbevoie, France",
    "priceSegment": "Premium",
    "certifications": [
      "EN Standards",
      "ISO 9001",
      "GRIHA certified"
    ],
    "products": [
      "Saint-Gobain Planilux (Clear Glass)",
      "Saint-Gobain SGG Seta (Lacquered Glass)",
      "E-Lite Low-E Glass"
    ],
    "applications": [
      "Structural Glass Facades",
      "Kitchen Cabinet Shutters (Lacquered)",
      "Insulated double glazed windows"
    ],
    "advantages": [
      "World leader in low-E (low-emissivity) energy-saving glasses",
      "Stunning color clarity in mirrors"
    ],
    "limitations": [
      "High premium cost; requires specialized structural glazing installers"
    ],
    "website": "https://www.saint-gobain.co.in",
    "relatedBrands": [
      "ais-glass",
      "goldplus-glass"
    ],
    "description": "The oldest French glass giant, setting the global standard for smart architectural and lacquered glass.",
    "overview": "The oldest French glass giant, setting the global standard for smart architectural and lacquered glass. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Saint-Gobain Glass products?",
        "a": "Typically Saint-Gobain Glass products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Saint-Gobain Glass conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "ais-glass",
    "name": "Asahi India Glass (AIS)",
    "logo": "🚗",
    "categories": [
      "Glass Products"
    ],
    "origin": "Japan / India",
    "established": 1984,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 2553",
      "ISO 9001"
    ],
    "products": [
      "AIS Opal (Solar Control Glass)",
      "AIS Stronglas (Toughened)",
      "AIS Acoustic (Sound dampening glass)"
    ],
    "applications": [
      "Car Windshields",
      "Balcony Glass Railings",
      "Office Cabin soundproofing partitions"
    ],
    "advantages": [
      "Leader in automotive glass in India",
      "Opal glass blocks solar heat without blocking light"
    ],
    "limitations": [
      "Toughened glass cannot be cut or drilled on site after heat treatment; requires precise factory sizing"
    ],
    "website": "https://www.aisglass.com",
    "relatedBrands": [
      "saint-gobain",
      "goldplus-glass"
    ],
    "description": "A joint venture with Asahi Glass Japan, leading in automotive windshields and solar-control window glass.",
    "overview": "A joint venture with Asahi Glass Japan, leading in automotive windshields and solar-control window glass. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Asahi India Glass (AIS) products?",
        "a": "Typically Asahi India Glass (AIS) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Asahi India Glass (AIS) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "goldplus-glass",
    "name": "Gold Plus Glass Industry",
    "logo": "🏢",
    "categories": [
      "Glass Products"
    ],
    "origin": "India",
    "established": 1985,
    "headquarters": "Noida, Uttar Pradesh",
    "priceSegment": "Budget",
    "certifications": [
      "IS 14900",
      "ISO 9001"
    ],
    "products": [
      "Gold Plus Float Glass",
      "Gold Plus Frosted Glass",
      "Gold Plus Tinted Glass"
    ],
    "applications": [
      "Residential Window Panes",
      "Shower Cubicle Partitions",
      "Bathroom Ventilators"
    ],
    "advantages": [
      "Highly economical float glass sheets",
      "Strong distributor network in North India"
    ],
    "limitations": [
      "Lower selection of high-end active smart electrochromic glasses compared to Saint-Gobain"
    ],
    "website": "https://www.goldplusgroup.com",
    "relatedBrands": [
      "ais-glass",
      "saint-gobain"
    ],
    "description": "India's leading homegrown float glass manufacturer, providing affordable quality glass plates.",
    "overview": "India's leading homegrown float glass manufacturer, providing affordable quality glass plates. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Gold Plus Glass Industry products?",
        "a": "Typically Gold Plus Glass Industry products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Gold Plus Glass Industry conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "rockwool-insulation",
    "name": "Rockwool Technical Insulation",
    "logo": "🧱",
    "categories": [
      "Insulation Materials"
    ],
    "origin": "Denmark / India",
    "established": 1937,
    "headquarters": "Hedehusene, Denmark",
    "priceSegment": "Premium",
    "certifications": [
      "EN 13162",
      "ASTM Standards",
      "ISO 9001"
    ],
    "products": [
      "Rockwool ProRox (Industrial)",
      "Rockwool Safe'n'Silent (Soundproofing)"
    ],
    "applications": [
      "Acoustic Home Theater soundproofing",
      "Industrial Boiler insulation",
      "HVAC Ducts"
    ],
    "advantages": [
      "Outstanding fire safety (withstands temperatures >1000°C)",
      "Excellent sound absorption"
    ],
    "limitations": [
      "Fibers can cause temporary skin itching during manual handling; requires gloves and dust masks"
    ],
    "website": "https://www.rockwoolasia.com",
    "relatedBrands": [
      "owens-corning",
      "lloyd-insulation"
    ],
    "description": "Danish multinational, the global leader in stone wool insulation for acoustics, fire, and thermal barriers.",
    "overview": "Danish multinational, the global leader in stone wool insulation for acoustics, fire, and thermal barriers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Rockwool Technical Insulation products?",
        "a": "Typically Rockwool Technical Insulation products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Rockwool Technical Insulation conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "owens-corning",
    "name": "Owens Corning",
    "logo": "🛡️",
    "categories": [
      "Insulation Materials"
    ],
    "origin": "USA / India",
    "established": 1938,
    "headquarters": "Toledo, Ohio, USA",
    "priceSegment": "Premium",
    "certifications": [
      "ASTM Standards",
      "ISO 9001"
    ],
    "products": [
      "Owens Corning Pink Fiberglass Insulation",
      "Foamular XPS (Extruded Polystyrene)"
    ],
    "applications": [
      "Cold Storage wall insulation",
      "Roof thermal insulation layers",
      "Drywall cavities"
    ],
    "advantages": [
      "Pink fiberglass is highly lightweight and easy to install",
      "XPS boards have excellent moisture resistance"
    ],
    "limitations": [
      "Fiberglass can settle or sag over decades if not pinned properly inside wall cavities"
    ],
    "website": "https://www.owenscorning.com",
    "relatedBrands": [
      "rockwool-insulation",
      "lloyd-insulation"
    ],
    "description": "The inventor of fiberglass insulation, famous for the iconic 'Pink' thermal batts and moisture-resistant XPS.",
    "overview": "The inventor of fiberglass insulation, famous for the iconic 'Pink' thermal batts and moisture-resistant XPS. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Owens Corning products?",
        "a": "Typically Owens Corning products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Owens Corning conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "lloyd-insulation",
    "name": "Lloyd Insulations",
    "logo": "🏢",
    "categories": [
      "Insulation Materials"
    ],
    "origin": "India",
    "established": 1956,
    "headquarters": "New Delhi",
    "priceSegment": "Mid",
    "certifications": [
      "IS 8183",
      "ISO 9001"
    ],
    "products": [
      "Lloyd Rockwool Slabs",
      "Lloyd Glasswool Mattresses",
      "Lloyd PUF Panels"
    ],
    "applications": [
      "Prefabricated Cabin Walls",
      "Factory Shed ceiling thermal wraps"
    ],
    "advantages": [
      "Decades of experience in heavy industrial thermal turnkey contracting",
      "Strong local manufacturing"
    ],
    "limitations": [
      "Lower consumer brand retail packaging; focuses primarily on B2B contractors"
    ],
    "website": "http://www.lloydinsulation.com",
    "relatedBrands": [
      "rockwool-insulation",
      "owens-corning"
    ],
    "description": "A pioneer in Indian thermal insulation and acoustics, supplying bulk glasswool and PUF panels.",
    "overview": "A pioneer in Indian thermal insulation and acoustics, supplying bulk glasswool and PUF panels. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Lloyd Insulations products?",
        "a": "Typically Lloyd Insulations products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Lloyd Insulations conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "daikin-hvac",
    "name": "Daikin India",
    "logo": "❄️",
    "categories": [
      "HVAC Materials",
      "Home Appliances"
    ],
    "origin": "Japan / India",
    "established": 1924,
    "headquarters": "Osaka, Japan",
    "priceSegment": "Premium",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Daikin Inverter AC (FTKF Series)",
      "Daikin VRV System (Variable Refrigerant Volume)",
      "Air Purifiers"
    ],
    "applications": [
      "Large Office Building Central Cooling",
      "Residential Bedrooms",
      "Smart Apartments"
    ],
    "advantages": [
      "World leader in VRF/VRV central AC technology",
      "Extremely quiet indoor units (19 dB)",
      "High power saving"
    ],
    "limitations": [
      "Premium installation charges; repairs must be done by authorized service personnel to maintain warranty"
    ],
    "website": "https://www.daikinindia.com",
    "relatedBrands": [
      "voltas-hvac",
      "blue-star"
    ],
    "description": "Japanese global HVAC pioneer, holding the patent for inventing the highly energy-efficient VRV system.",
    "overview": "Japanese global HVAC pioneer, holding the patent for inventing the highly energy-efficient VRV system. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Daikin India products?",
        "a": "Typically Daikin India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Daikin India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "voltas-hvac",
    "name": "Voltas (Tata)",
    "logo": "❄️",
    "categories": [
      "HVAC Materials",
      "Home Appliances"
    ],
    "origin": "India",
    "established": 1954,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Voltas Adjustable Inverter AC",
      "Voltas Maha Adjustable AC",
      "Voltas Water Dispensers"
    ],
    "applications": [
      "Living Rooms",
      "Small offices",
      "Retail Shops"
    ],
    "advantages": [
      "Designed for extreme Indian summers (cools even at 52°C)",
      "Excellent budget-friendly inverter models"
    ],
    "limitations": [
      "Remote controller lacks backlighting on standard mid-range models"
    ],
    "website": "https://www.myvoltas.com",
    "relatedBrands": [
      "daikin-hvac",
      "blue-star"
    ],
    "description": "A Tata Enterprise, the household leader in window and split ACs, built for Indian weather extremes.",
    "overview": "A Tata Enterprise, the household leader in window and split ACs, built for Indian weather extremes. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Voltas (Tata) products?",
        "a": "Typically Voltas (Tata) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Voltas (Tata) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "blue-star",
    "name": "Blue Star Limited",
    "logo": "❄️",
    "categories": [
      "HVAC Materials",
      "Home Appliances"
    ],
    "origin": "India",
    "established": 1943,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "BEE Star Certified",
      "ISO 9001"
    ],
    "products": [
      "Blue Star Inverter Split AC",
      "Blue Star Deep Freezers",
      "Blue Star Water Purifiers"
    ],
    "applications": [
      "Ice Cream Parlors (Deep freezers)",
      "Commercial Server Rooms",
      "Residential Bedrooms"
    ],
    "advantages": [
      "Unmatched expertise in industrial refrigeration and cold storage cooling",
      "Robust copper condensers"
    ],
    "limitations": [
      "Aesthetic chassis panel designs are highly conservative compared to LG/Samsung"
    ],
    "website": "https://www.bluestarindia.com",
    "relatedBrands": [
      "daikin-hvac",
      "voltas-hvac"
    ],
    "description": "A premier commercial refrigeration and AC company, highly preferred for deep freezers and heavy cooling.",
    "overview": "A premier commercial refrigeration and AC company, highly preferred for deep freezers and heavy cooling. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Blue Star Limited products?",
        "a": "Typically Blue Star Limited products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Blue Star Limited conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "carrier-hvac",
    "name": "Carrier",
    "logo": "❄️",
    "categories": [
      "HVAC Materials",
      "Home Appliances"
    ],
    "origin": "USA / India",
    "established": 1915,
    "headquarters": "Palm Beach Gardens, Florida, USA",
    "priceSegment": "Premium",
    "certifications": [
      "ARI Standards",
      "ISO 9001"
    ],
    "products": [
      "Carrier Superia Inverter AC",
      "Carrier Ducted Systems",
      "Carrier Chillers"
    ],
    "applications": [
      "Shopping Mall Central Cooling",
      "Large Villa ducted ACs"
    ],
    "advantages": [
      "Inventor of modern air conditioning",
      "Heavy-duty compressor reliability and fast cooling induction"
    ],
    "limitations": [
      "Higher maintenance service checklist than domestic brands"
    ],
    "website": "https://www.carrier.com/commercial/en/in",
    "relatedBrands": [
      "daikin-hvac",
      "blue-star"
    ],
    "description": "Founded by Willis Carrier, the inventor of modern AC, leading globally in heavy commercial chillers.",
    "overview": "Founded by Willis Carrier, the inventor of modern AC, leading globally in heavy commercial chillers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Carrier products?",
        "a": "Typically Carrier products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Carrier conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "castrol-lubricants",
    "name": "Castrol India",
    "logo": "🛢️",
    "categories": [
      "Automotive Oils & Lubricants"
    ],
    "origin": "UK / India",
    "established": 1899,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "API Standards",
      "SAE Ratings",
      "ISO 9001"
    ],
    "products": [
      "Castrol Edge (Synthetic Engine Oil)",
      "Castrol Active (2-Wheelers)",
      "Castrol Magnatec (Intelligent Molecules)"
    ],
    "applications": [
      "Luxury Car Engine Lubrication",
      "Commuter Motorcycle Engine protection"
    ],
    "advantages": [
      "Intelligent molecules cling to engine parts during start-up to reduce wear",
      "Outstanding thermal protection"
    ],
    "limitations": [
      "High pricing compared to public sector lubricants like Servo"
    ],
    "website": "https://www.castrol.com/en_in/india",
    "relatedBrands": [
      "shell-lubricants",
      "servo-lubricants"
    ],
    "description": "Global lubricant giant, famous for Magnatec and Edge synthetic oils, holding massive retail trust.",
    "overview": "Global lubricant giant, famous for Magnatec and Edge synthetic oils, holding massive retail trust. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Castrol India products?",
        "a": "Typically Castrol India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Castrol India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "shell-lubricants",
    "name": "Shell India",
    "logo": "🛢️",
    "categories": [
      "Automotive Oils & Lubricants"
    ],
    "origin": "Netherlands / India",
    "established": 1907,
    "headquarters": "Bengaluru, Karnataka",
    "priceSegment": "Premium",
    "certifications": [
      "API SN",
      "JASO MA2",
      "ISO 9001"
    ],
    "products": [
      "Shell Helix Ultra (Fully Synthetic)",
      "Shell Advance (Bikes)",
      "Shell Rimula (Heavy Trucks)"
    ],
    "applications": [
      "High-performance Sports Car Engines",
      "Heavy Duty Transport Trucks"
    ],
    "advantages": [
      "PurePlus technology converts natural gas to crystal-clear base oil (zero crude impurities)"
    ],
    "limitations": [
      "Limited physical retail petrol pump presence in rural interior India"
    ],
    "website": "https://www.shell.in",
    "relatedBrands": [
      "castrol-lubricants",
      "mobil-lubricants"
    ],
    "description": "Famous for Helix synthetic engine oils made from natural gas, providing maximum engine cleanliness.",
    "overview": "Famous for Helix synthetic engine oils made from natural gas, providing maximum engine cleanliness. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Shell India products?",
        "a": "Typically Shell India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Shell India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "mobil-lubricants",
    "name": "Mobil India",
    "logo": "🛢️",
    "categories": [
      "Automotive Oils & Lubricants"
    ],
    "origin": "USA / India",
    "established": 1882,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Premium",
    "certifications": [
      "API SP",
      "ILSAC GF-6",
      "ISO 9001"
    ],
    "products": [
      "Mobil 1 (Fully Synthetic Engine Oil)",
      "Mobil Super",
      "Mobil Delvac (Diesel Engines)"
    ],
    "applications": [
      "Formula 1 Racing Engines",
      "Luxury SUV Engines",
      "Heavy Industrial Gearboxes"
    ],
    "advantages": [
      "The pioneer of synthetic oils (Mobil 1), unmatched shear stability under extreme high-rpm pressure"
    ],
    "limitations": [
      "Highly priced; overkill for low-speed commuter scooter models"
    ],
    "website": "https://www.mobil.co.in/en-in",
    "relatedBrands": [
      "castrol-lubricants",
      "shell-lubricants"
    ],
    "description": "The gold standard in synthetic lubricants, chosen as factory-fill oil by major premium car manufacturers.",
    "overview": "The gold standard in synthetic lubricants, chosen as factory-fill oil by major premium car manufacturers. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Mobil India products?",
        "a": "Typically Mobil India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Mobil India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "servo-lubricants",
    "name": "Servo (Indian Oil)",
    "logo": "🛢️",
    "categories": [
      "Automotive Oils & Lubricants"
    ],
    "origin": "India",
    "established": 1959,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Budget",
    "certifications": [
      "API Standards",
      "IS Standards"
    ],
    "products": [
      "Servo Futura Synthetic",
      "Servo Pride (Diesel)",
      "Servo Super Multigrade"
    ],
    "applications": [
      "Public transport buses",
      "General passenger cars",
      "Agricultural Tractors"
    ],
    "advantages": [
      "Extremely economical pricing",
      "Available at every Indian Oil petrol station across the country"
    ],
    "limitations": [
      "Lower brand appeal for ultra-premium sports car segments"
    ],
    "website": "https://www.iocl.com",
    "relatedBrands": [
      "castrol-lubricants",
      "gulf-lubricants"
    ],
    "description": "The mega homegrown brand by Indian Oil Corporation, the largest selling lubricant label in India.",
    "overview": "The mega homegrown brand by Indian Oil Corporation, the largest selling lubricant label in India. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Servo (Indian Oil) products?",
        "a": "Typically Servo (Indian Oil) products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Servo (Indian Oil) conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  },
  {
    "id": "gulf-lubricants",
    "name": "Gulf Oil India",
    "logo": "🛢️",
    "categories": [
      "Automotive Oils & Lubricants"
    ],
    "origin": "India",
    "established": 1901,
    "headquarters": "Mumbai, Maharashtra",
    "priceSegment": "Mid",
    "certifications": [
      "API Standards",
      "ISO 9001"
    ],
    "products": [
      "Gulf Pride 4T (Bikes)",
      "Gulf Formula (Cars)",
      "Gulf Super Duty (Commercial)"
    ],
    "applications": [
      "Heavy Freight Trucks",
      "Commuter Motorcycles"
    ],
    "advantages": [
      "Long-drain interval formulations (saves oil replacement costs)",
      "Excellent clutch grip in bikes"
    ],
    "limitations": [
      "Lower consumer retail stocking compared to Castrol in local independent garages"
    ],
    "website": "https://www.gulfoilindia.com",
    "relatedBrands": [
      "servo-lubricants",
      "castrol-lubricants"
    ],
    "description": "Famous for long-drain interval engine lubricants and aggressive motorsport sponsorship credentials.",
    "overview": "Famous for long-drain interval engine lubricants and aggressive motorsport sponsorship credentials. Trusted market leader known for high reliability, quality standards, and broad distribution network.",
    "faqs": [
      {
        "q": "What is the warranty or lifespan of Gulf Oil India products?",
        "a": "Typically Gulf Oil India products carry industry-standard warranties ranging from 1 to 10 years depending on the specific product grade and installation practices."
      },
      {
        "q": "Does Gulf Oil India conform to BIS standards?",
        "a": "Yes, all structural and main products are fully certified under national standards and carry necessary safety/quality markings."
      }
    ]
  }
];
