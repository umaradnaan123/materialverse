const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/calculatorsData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// Map of calculator id -> HTML explanatory content
const contentMap = {
  'sand-calc': `<b>Sand Volume &amp; Weight Estimation</b><br/><br/>Sand is measured in cubic feet (cft) for ordering but billed in tonnes.<br/><br/><b>Key Density Values:</b><br/>• River/M-sand density: ~1600–1700 kg/m³ (≈50 kg per cft)<br/>• 1 tonne of sand ≈ 20 cft (loose volume)<br/><br/><b>Formula:</b><br/>Weight (kg) = Volume (cft) × 50<br/>Weight (tons) = Volume (cft) × 110 lbs ÷ 2000<br/><br/><i>BIS Standard: IS 383 governs fine aggregate specifications for concrete.</i>`,
  'aggregate-calc': `<b>Aggregate (Coarse Gravel) Estimation</b><br/><br/>Gravel or crushed stone is used as coarse aggregate in concrete and as sub-base in roads and floors.<br/><br/><b>Key Values:</b><br/>• Gravel density: ~1680 kg/m³ (~105 lbs per cft)<br/>• 1 tonne gravel ≈ 19 cft<br/><br/><b>Formula:</b><br/>Volume (cft) = Area (sq.ft) × Depth (ft)<br/>Weight (tons) = Volume × 105 ÷ 2000<br/><br/><i>BIS Standard: IS 383 specifies aggregate grading zones.</i>`,
  'block-calc': `<b>Concrete Block Wall Estimation</b><br/><br/>Concrete hollow blocks are faster to lay than bricks and offer superior thermal insulation.<br/><br/><b>Standard Block Sizes:</b><br/>• 8×8×16 inch block covers ~0.89 sq.ft wall face<br/>• Mortar consumption: ~0.1 cft per block<br/><br/><b>Formula:</b><br/>Block Count = Wall Area (sq.ft) ÷ 0.89<br/>Mortar (cft) = Block Count × 0.10<br/><br/><i>BIS Standard: IS 2185 covers solid and hollow concrete blocks.</i>`,
  'plaster-calc': `<b>Wall Plastering Material Estimation</b><br/><br/>Plastering creates a smooth, durable surface for painting and protects masonry from weathering.<br/><br/><b>Standard Plaster Ratios:</b><br/>• 1:3 – Ceiling (rich mix)<br/>• 1:4 – Internal walls (standard)<br/>• 1:6 – External rough coat<br/><br/><b>Formula:</b><br/>Dry Volume = Area × Thickness × 1.33 (shrinkage factor)<br/>Cement Bags = (1/Sum) × Dry Vol ÷ 1.226<br/><br/><i>BIS Standard: IS 2116 covers sand for masonry mortars.</i>`,
  'mortar-calc': `<b>Dry Mortar Batch Estimation</b><br/><br/>Mortar binds masonry units. Wet mortar volume shrinks 25–33% when dry ingredients are mixed with water.<br/><br/><b>Shrinkage Factor:</b><br/>Dry Volume = Wet Volume × 1.33<br/><br/><b>Proportioning (1:5 ratio):</b><br/>• Cement = 1/6 of dry volume<br/>• Sand = 5/6 of dry volume<br/>• 1 cement bag = 1.226 cft<br/><br/><i>BIS Standard: IS 2250 specifies preparation and use of masonry mortars.</i>`,
  'foundation-calc': `<b>Isolated Pad Footing Concrete Estimation</b><br/><br/>Isolated footings distribute column loads to soil. Designed in M15 (1:2:4) grade concrete.<br/><br/><b>Formula:</b><br/>Volume = L × W × D × No. of Footings<br/>Dry Volume = Wet Volume × 1.54<br/>For M15 (1:2:4), sum = 7:<br/>• Cement = (1/7) × Dry Vol ÷ 1.226<br/>• Sand = (2/7) × Dry Vol (cft)<br/>• Aggregate = (4/7) × Dry Vol (cft)<br/><br/><i>BIS Standard: IS 456 governs plain and reinforced concrete design.</i>`,
  'column-calc': `<b>RCC Column Concrete Estimation</b><br/><br/>Columns transfer loads from beams/slabs to the foundation. M20 (1:1.5:3) is the standard for columns.<br/><br/><b>Formula:</b><br/>Volume = Height × Width (ft) × Breadth (ft) × No. of Columns<br/>Dry Volume = Wet Volume × 1.54<br/>Cement bags = (1/5.5) × Dry Vol ÷ 1.226<br/><br/><b>Note:</b> Provide minimum 40mm clear cover for main bars in columns.<br/><br/><i>BIS Standard: IS 456 and SP-16 govern column design.</i>`,
  'beam-calc': `<b>RCC Beam Concrete Estimation</b><br/><br/>Beams span horizontally between columns to carry floor/roof loads. M20 (1:1.5:3) is the minimum recommended grade.<br/><br/><b>Formula:</b><br/>Volume = Length × Width (ft) × Depth (ft) × No. of Beams<br/>Dry Volume = Wet Vol × 1.54<br/>Cement Bags = (1/5.5) × Dry Vol ÷ 1.226<br/><br/><b>Typical Cross-sections:</b><br/>• Floor beams: 9×12 inches<br/>• Plinth beams: 9×9 inches<br/><br/><i>BIS Standard: IS 456 governs limit state design of beams.</i>`,
  'grout-calc': `<b>Tile Grout Quantity Estimation</b><br/><br/>Grout fills gaps between tiles preventing water infiltration. Epoxy grout is preferred in wet areas.<br/><br/><b>Formula:</b><br/>Grout (kg) = [(TileLen + TileWid) × JointWidth × TileDepth × 1.8 Density] ÷ (TileLen × TileWid) × Area<br/>• Typical joint width: 2–5 mm<br/><br/><b>Types:</b><br/>• Cement grout: General use (IS 712)<br/>• Epoxy grout: Chemical-resistant for kitchens/bathrooms<br/><br/><i>BIS Standard: IS 712 covers Portland cement for tile jointing.</i>`,
  'wallpaper-calc': `<b>Wallpaper Roll Estimation</b><br/><br/>A standard roll is 21 inches wide × 33 feet long (~57 sq.ft gross). After pattern matching, effective yield is ~50 sq.ft.<br/><br/><b>Formula:</b><br/>Net Wall Area = Wall Width × Wall Height<br/>Rolls Required = Area ÷ 50<br/><br/><b>Tips:</b><br/>• Add 10% for pattern repeats<br/>• Buy from same print batch<br/>• Non-woven wallpaper is easiest for DIY<br/><br/><i>ASTM F793 governs wallpaper performance standards.</i>`,
  'flooring-calc': `<b>Laminate &amp; Wooden Flooring Estimation</b><br/><br/>Wood/laminate flooring boards expand with humidity. Add 10% wastage buffer (15% for diagonal layouts).<br/><br/><b>Formula:</b><br/>Net Floor Area = Length × Width (sq.ft)<br/>Gross Area = Net Area × (1 + Wastage% ÷ 100)<br/><br/><b>Standard Board Coverage:</b><br/>• 1 pack of laminate ≈ 20–25 sq.ft<br/>• Thicknesses available: 3mm/5mm/8mm/12mm<br/><br/><i>BIS Standard: IS 12823 covers pre-laminated particle boards.</i>`,
  'carpet-calc': `<b>Carpet Area Estimation</b><br/><br/>Carpets are typically sold by the square yard. Note the difference between carpet area and super built-up area used by real estate developers.<br/><br/><b>Formula:</b><br/>Total Area (sq.ft) = Room Length × Width<br/>Total Area (sq.yd) = sq.ft ÷ 9 (1 sq.yd = 9 sq.ft)<br/><br/><b>Order Tips:</b><br/>• Add 10% for walls and cuts<br/>• Broadloom carpets come in 12ft width rolls<br/>• Check pile direction before installation<br/><br/><i>BIS Standard: IS 6524 covers pile carpets made of wool.</i>`,
  'roofing-sheet-calc': `<b>Metal Roofing Sheet Estimation</b><br/><br/>Metal roofing sheets (GI, Colour Coated, UPVC) are installed with side laps and end laps of minimum 6 inches.<br/><br/><b>Formula:</b><br/>Effective Sheet Width = Nominal Width − 0.5 ft (overlap)<br/>Sheets per Row = Ridge Length ÷ Effective Width<br/>Total Sheets = Rows × Sheets per Row<br/><br/><i>BIS Standard: IS 277 covers galvanized steel sheets; IS 2379 covers UPVC panels.</i>`,
  'shingle-calc': `<b>Asphalt Shingle Bundle Estimation</b><br/><br/>Asphalt shingles are measured in "squares" — 1 roofing square = 100 sq.ft of finished roof area.<br/><br/><b>Formula:</b><br/>Squares = Roof Area (sq.ft) ÷ 100<br/>Bundles = Squares × 3 (3-tab shingles: 3 bundles per square)<br/>With 10% Wastage: Bundles × 1.10<br/><br/><b>Types:</b><br/>• 3-Tab: Budget, flat appearance<br/>• Architectural: Dimensional look, longer warranty<br/><br/><i>ASTM D3462 governs asphalt shingle performance.</i>`,
  'roof-area-calc': `<b>Pitched Roof Surface Area Calculation</b><br/><br/>A pitched roof has more surface area than the flat building footprint. A pitch factor converts footprint to sloped surface.<br/><br/><b>Pitch Factors:</b><br/>• 4/12 pitch → 1.054<br/>• 6/12 pitch → 1.118<br/>• 8/12 pitch → 1.202<br/>• 12/12 pitch → 1.414<br/><br/><b>Formula:</b><br/>Actual Roof Area = Footprint Area × Pitch Factor<br/><br/><i>Consistent with IS 875 (Part 3) – Wind loads on buildings.</i>`,
  'pipe-length-calc': `<b>Residential Plumbing Pipe Length Estimation</b><br/><br/>Indian residential plumbing uses CPVC or uPVC pipes for hot/cold supply and SWR/PVC for drainage.<br/><br/><b>Thumb Rule:</b><br/>• Water supply per bathroom: ~40 ft<br/>• Water supply per kitchen: ~30 ft<br/>• Drainage per bathroom: ~20 ft<br/>• Drainage per kitchen: ~15 ft<br/><br/><b>Pipe Standards:</b><br/>• CPVC for hot water: IS 15778<br/>• uPVC for cold water: IS 4985<br/>• SWR drain pipes: IS 13592<br/><br/><i>Always add 15% extra for fittings and bends.</i>`,
  'water-tank-calc': `<b>Residential Water Tank Capacity Estimation</b><br/><br/>BIS recommends 135 LPCD (litres per capita per day) for domestic water supply in urban India.<br/><br/><b>Formula:</b><br/>Daily Use (L) = Household Members × 135 LPCD<br/>Tank Capacity = Daily Use × Backup Days<br/><br/><b>Common Tank Sizes:</b><br/>• Sintex plastic tanks: 500L, 750L, 1000L, 2000L<br/>• Underground sump: 5,000–20,000L<br/><br/><i>BIS Standard: IS 12701 covers polyethylene water storage tanks.</i>`,
  'rainwater-calc': `<b>Rainwater Harvesting Potential</b><br/><br/>Collecting rooftop runoff reduces potable water demand and recharges groundwater.<br/><br/><b>Formula:</b><br/>Potential (L) = Roof Area (m²) × Rainfall (m) × Runoff Coefficient × Filter Efficiency<br/>• Runoff coefficient for RCC roof ≈ 0.85<br/>• First-flush filter efficiency ≈ 0.90<br/><br/><b>State Mandates:</b> Mandatory in Chennai, Bengaluru, Delhi NCR for plots above 200 sq.m.<br/><br/><i>NBC 2016 and IS 15797 govern rainwater harvesting systems.</i>`,
  'wire-length-calc': `<b>Electrical Wire Length Estimation</b><br/><br/>Thumb rule: 3–4 meters of wire per sq.ft of built-up area, covering lighting, sockets, and appliance circuits.<br/><br/><b>Formula:</b><br/>Total Wire (m) = Floor Area (sq.ft) × 3.5<br/>Standard coil = 90 meters → Coils = Total Wire ÷ 90<br/><br/><b>Wire Types Required:</b><br/>• 1.5 sq.mm – Lighting circuits<br/>• 2.5 sq.mm – Power sockets<br/>• 4 sq.mm – AC/geyser<br/><br/><i>BIS Standard: IS 694 covers PVC insulated cables for house wiring.</i>`,
  'load-calc': `<b>Home Electrical Load Calculation</b><br/><br/>Calculate sanctioned load based on connected appliances before applying for a power connection.<br/><br/><b>Typical Wattages:</b><br/>• 1.5 Ton AC: ~1800W<br/>• Electric Geyser: ~2000W<br/>• Refrigerator: ~200W, Washing Machine: ~500W<br/>• Ceiling fan: 50–75W, LED light: 7–15W<br/><br/><b>Phase Selection:</b><br/>• Up to 7 kW → Single-phase (230V)<br/>• Above 7 kW → Three-phase (415V)<br/><br/><i>CEA Regulations 2010 and IS 732 govern residential electrical installations.</i>`,
  'generator-calc': `<b>Backup Generator Sizing</b><br/><br/>Generators are rated in kVA. The relationship to kW depends on power factor.<br/><br/><b>Formula:</b><br/>kVA = (Load kW ÷ Power Factor 0.8) × Safety Multiplier 1.25<br/><br/><b>Common Sizes:</b><br/>• 5 kVA – Small apartments/shops<br/>• 10 kVA – Medium residences<br/>• 25–50 kVA – Commercial/offices<br/><br/><i>BIS Standard: IS 10000 governs diesel generating sets.</i>`,
};

// Generic fallback generator
function generateGenericContent(name, category, description) {
  return `<b>${name}</b><br/><br/>${description}<br/><br/><b>Category:</b> ${category}<br/><br/><b>How to Use:</b><br/>1. Enter your values in the input fields on the left panel.<br/>2. Click "Run Real-time Calculation" to generate estimates.<br/>3. Results are based on standard engineering formulas and IS codes.<br/><br/><b>Note:</b> All calculations are approximate estimates for planning and budgeting. Consult a licensed engineer before placing bulk material orders.<br/><br/><i>Results are approximate estimates intended for planning and budgeting purposes only.</i>`;
}

// Split content into calculator blocks by finding each { id: "..." block
// We'll use a state machine approach to process each calculator entry
const lines = content.split('\n');
const result = [];
let i = 0;
let currentId = null;
let currentName = null;
let currentCategory = null;
let currentDescription = null;
let insideCalc = false;

while (i < lines.length) {
  const line = lines[i];
  
  // Detect start of a new calculator entry
  const idMatch = line.match(/^\s*id:\s*["']([^"']+)["']/);
  if (idMatch) {
    currentId = idMatch[1];
  }
  
  const nameMatch = line.match(/^\s*name:\s*["']([^"']+)["']/);
  if (nameMatch) {
    currentName = nameMatch[1];
  }
  
  const categoryMatch = line.match(/^\s*category:\s*["']([^"']+)["']/);
  if (categoryMatch) {
    currentCategory = categoryMatch[1];
  }
  
  const descMatch = line.match(/^\s*description:\s*["']([^"']+)["']/);
  if (descMatch) {
    currentDescription = descMatch[1];
  }
  
  // Detect placeholder explanatory content
  const placeholderMatch = line.match(/^(\s*explanatoryContent:\s*)"\.\.\."(,?)$/);
  if (placeholderMatch && currentId) {
    const indent = placeholderMatch[1];
    const trailingComma = placeholderMatch[2];
    
    const specificContent = contentMap[currentId];
    const finalContent = specificContent || generateGenericContent(currentName || currentId, currentCategory || 'General', currentDescription || '');
    
    // Escape backticks in content
    const escaped = finalContent.replace(/`/g, "'");
    
    result.push(`${indent}\`${escaped}\`${trailingComma}`);
    console.log(`✓ Replaced: ${currentId} (${currentName})`);
    i++;
    continue;
  }
  
  result.push(line);
  i++;
}

const newContent = result.join('\n');
fs.writeFileSync(filePath, newContent, 'utf-8');

const remaining = (newContent.match(/explanatoryContent:\s*"\.\.\."/) || []).length;
console.log(`\nDone! ${remaining} placeholders remaining.`);
console.log('calculatorsData.ts updated successfully.');
