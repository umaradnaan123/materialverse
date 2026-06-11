export interface CalculatorInput {
  name: string;
  label: string;
  type: 'number' | 'select';
  defaultValue: any;
  options?: { value: string | number; label: string }[];
}

export interface CalculatorDefinition {
  id: string;
  name: string;
  category: 'Construction' | 'Flooring & Finishing' | 'Roofing' | 'Plumbing' | 'Electrical' | 'Agricultural' | 'Fabric & Textile' | 'Home Improvement' | 'Cost Estimation' | 'Unit Conversion' | 'Advanced';
  description: string;
  seoKeywords: string[];
  inputs: CalculatorInput[];
  calculate: (inputs: Record<string, any>) => Record<string, string | number>;
  outputLabels: Record<string, string>;
  explanatoryContent: string;
}

export const calculatorsList: CalculatorDefinition[] = [
  {
    id: "cement-calc",
    name: "Cement Calculator Online",
    category: "Construction",
    description: "Estimate cement bags required for masonry mortar, concrete casting, or plastering works.",
    seoKeywords: ["Cement Calculator Online", "cement bag calculator", "concrete mix estimator"],
    inputs: [
      { name: "volume", label: "Dry Mortar/Concrete Volume (Cft)", type: "number", defaultValue: 100 },
      {
        name: "ratio",
        label: "Mix Ratio (Cement:Sand)",
        type: "select",
        defaultValue: "1:4",
        options: [
          { value: "1:3", label: "1:3 (Rich Mortar)" },
          { value: "1:4", label: "1:4 (Standard Plastering)" },
          { value: "1:5", label: "1:5 (Standard Brickwork)" },
          { value: "1:6", label: "1:6 (General Base Masonry)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const vol = parseFloat(inputs.volume) || 0;
      const ratioParts = inputs.ratio.split(':').map(Number);
      const sum = ratioParts[0] + ratioParts[1];
      const cementVol = (ratioParts[0] / sum) * vol;
      const bags = Math.ceil(cementVol / 1.226); // 1 bag = 1.226 cft
      const sand = Math.round((ratioParts[1] / sum) * vol * 10) / 10;
      return { bags, sandCft: sand };
    },
    outputLabels: {
      bags: "Cement Bags Required (50kg)",
      sandCft: "Sand Quantity (Cft)"
    },
    explanatoryContent: `
### How to Calculate Cement Quantity Online
Calculating the amount of cement and sand required for a project is essential to prevent material waste and stay within budget.

#### The Cement Mixing Formula
1. **Dry Volume Factor**: Mortar shrinks by about 30% to 35% when water is added. Hence, dry volume is calculated as:
   $$\\text{Dry Volume} = \\text{Wet Volume} \\times 1.33$$
2. **Sum of Ratios**: For a mix ratio of 1:4, the sum of parts is $1 + 4 = 5$.
3. **Cement Share**:
   $$\\text{Cement Volume} = \\left(\\frac{1}{5}\\right) \\times \\text{Dry Volume}$$
4. **Bags Conversion**: One bag of standard cement (50kg) has a volume of **1.226 cubic feet (cft)** (or 0.0347 cubic meters). Therefore, the number of bags is:
   $$\\text{Bags} = \\frac{\\text{Cement Volume}}{1.226}$$

#### Practical Example
If you are plastering a wall requiring 100 cubic feet of wet mortar, applying a standard 1:4 ratio will require approximately 27 bags of cement and 108 cft of fine sand.
    `
  },
  {
    id: "concrete-calc",
    name: "Concrete Slab Column & Beam Calculator",
    category: "Construction",
    description: "Calculate concrete volume and raw ingredients (cement, sand, aggregate) for slabs, columns, and beams.",
    seoKeywords: ["concrete volume calculator", "concrete mix ratio", "slab concrete estimator"],
    inputs: [
      { name: "length", label: "Length (Ft)", type: "number", defaultValue: 20 },
      { name: "width", label: "Width / Breadth (Ft)", type: "number", defaultValue: 10 },
      { name: "depth", label: "Thickness / Depth (Inches)", type: "number", defaultValue: 6 },
      {
        name: "ratio",
        label: "Concrete Mix Design",
        type: "select",
        defaultValue: "1:2:4",
        options: [
          { value: "1:1.5:3", label: "M20 Grade (1:1.5:3 - Slab/Beams)" },
          { value: "1:2:4", label: "M15 Grade (1:2:4 - Footings/PCC)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const d = (parseFloat(inputs.depth) || 0) / 12; // inches to feet
      const wetVol = l * w * d;
      const dryVol = wetVol * 1.54; // concrete dry shrink factor is 54%
      
      const ratioParts = inputs.ratio.split(':').map(Number);
      const sum = ratioParts[0] + ratioParts[1] + ratioParts[2];
      
      const cementVol = (ratioParts[0] / sum) * dryVol;
      const bags = Math.ceil(cementVol / 1.226);
      const sand = Math.round((ratioParts[1] / sum) * dryVol * 10) / 10;
      const aggregates = Math.round((ratioParts[2] / sum) * dryVol * 10) / 10;

      return {
        volumeCft: Math.round(wetVol * 10) / 10,
        volumeCum: Math.round((wetVol / 35.315) * 100) / 100,
        bags,
        sandCft: sand,
        aggregateCft: aggregates
      };
    },
    outputLabels: {
      volumeCft: "Wet Concrete Volume (Cft)",
      volumeCum: "Wet Concrete Volume (Cu.M)",
      bags: "Cement Bags Required (50kg)",
      sandCft: "Sand Required (Cft)",
      aggregateCft: "Gravel / Coarse Aggregate (Cft)"
    },
    explanatoryContent: `
### Concrete Mix Estimation Guide
Concrete casting requires an accurate blend of three dry components: cement, sand (fine aggregate), and gravel (coarse aggregate).

#### The Formula for Concrete Mix
1. **Wet Volume Calculation**: Multiply $\\text{Length} \\times \\text{Width} \\times \\text{Depth}$ to get wet volume.
2. **Dry Volume Factor**: Dry concrete shrinks by 54% when water is added. Hence:
   $$\\text{Dry Volume} = \\text{Wet Volume} \\times 1.54$$
3. **Ratios**: M20 concrete uses a 1:1.5:3 ratio. The sum of parts is $1 + 1.5 + 3 = 5.5$.
4. **Calculations**:
   - $\\text{Cement Volume} = (1 / 5.5) \\times \\text{Dry Volume}$
   - $\\text{Sand Volume} = (1.5 / 5.5) \\times \\text{Dry Volume}$
   - $\\text{Aggregate Volume} = (3 / 5.5) \\times \\text{Dry Volume}$
    `
  },
  {
    id: "sand-calc",
    name: "Sand Quantity & Weight Estimator",
    category: "Construction",
    description: "Determine the exact volume and weight of sand required based on target masonry volume.",
    seoKeywords: ["sand calculator online", "M-sand weight calculator", "sand density estimation"],
    inputs: [
      { name: "volume", label: "Target Sand Volume (Cft)", type: "number", defaultValue: 50 }
    ],
    calculate: (inputs) => {
      const vol = parseFloat(inputs.volume) || 0;
      const weightTons = Math.round((vol * 110) / 2000 * 100) / 100; // sand density is ~110 lbs per cft
      const weightKg = Math.round(vol * 50 * 10) / 10; // ~50kg per cft
      return { cft: vol, weightTons, weightKg };
    },
    outputLabels: {
      cft: "Sand Volume (Cft)",
      weightTons: "Estimated Weight (Tons)",
      weightKg: "Estimated Weight (Kg)"
    },
    explanatoryContent: "..."
  },
  {
    id: "aggregate-calc",
    name: "Aggregate (Gravel) Calculator",
    category: "Construction",
    description: "Estimate gravel requirements in cubic feet, tons, and bags for structural sub-bases.",
    seoKeywords: ["gravel calculator", "coarse aggregate weight estimator"],
    inputs: [
      { name: "area", label: "Area to Cover (Sq.Ft)", type: "number", defaultValue: 500 },
      { name: "depth", label: "Layer Depth (Inches)", type: "number", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const depth = (parseFloat(inputs.depth) || 0) / 12;
      const cft = area * depth;
      const weightTons = Math.round((cft * 105) / 2000 * 100) / 100; // gravel density ~105 lbs/cft
      return { cft: Math.round(cft), weightTons };
    },
    outputLabels: {
      cft: "Total Aggregate Volume (Cft)",
      weightTons: "Estimated Weight (Tons)"
    },
    explanatoryContent: "..."
  },
  {
    id: "brick-calc",
    name: "Brick Calculator for House Construction",
    category: "Construction",
    description: "Estimate the number of bricks and mortar required for a masonry wall based on size and wall thickness.",
    seoKeywords: ["Brick Calculator for House Construction", "wall brick estimator", "masonry bricks calculator"],
    inputs: [
      { name: "length", label: "Wall Length (Ft)", type: "number", defaultValue: 10 },
      { name: "height", label: "Wall Height (Ft)", type: "number", defaultValue: 10 },
      {
        name: "thickness",
        label: "Wall Thickness",
        type: "select",
        defaultValue: "9",
        options: [
          { value: "4.5", label: "4.5 Inch Wall (Single Layer)" },
          { value: "9", label: "9 Inch Wall (Double Layer / Load-bearing)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const h = parseFloat(inputs.height) || 0;
      const t = parseFloat(inputs.thickness) || 9;

      const wallArea = l * h;
      
      // Standard modular brick with mortar joint is 9 x 4.5 x 3 inches
      // For a 9-inch wall, number of bricks is ~10 per sq ft.
      // For a 4.5-inch wall, number of bricks is ~5 per sq ft.
      const brickFactor = t === 4.5 ? 4.8 : 9.6;
      const totalBricks = Math.ceil(wallArea * brickFactor);
      
      // Mortar volume estimation: approx 30% of wall volume
      const wallVol = wallArea * (t / 12);
      const mortarVol = Math.round(wallVol * 0.3 * 10) / 10;
      // Cement bags: 1 bag covers approx 100 bricks at 1:5 ratio
      const bags = Math.ceil(totalBricks / 100);

      return { totalBricks, mortarVolCft: mortarVol, cementBags: bags };
    },
    outputLabels: {
      totalBricks: "Number of Bricks Required",
      mortarVolCft: "Mortar Wet Volume (Cft)",
      cementBags: "Estimated Cement Bags (For Mortar)"
    },
    explanatoryContent: `
### House Construction Brick Estimation
Accurate brick count calculation is crucial before ordering truckloads of brick blocks.

#### Estimating Formula
1. **Wall Face Area**: $\\text{Length} \\times \\text{Height}$.
2. **Thickness Multiplier**:
   - For a standard **4.5-inch partition wall**, we assume **4.8 to 5 bricks per square foot**.
   - For a **9-inch load-bearing wall**, we assume **9.6 to 10 bricks per square foot**.
3. **Mortar Allowance**: Mortar joint thickness is usually assumed as **10mm (3/8\")**. This accounts for approximately 25% to 30% of the total wall volume.
    `
  },
  {
    id: "block-calc",
    name: "Concrete Block Calculator",
    category: "Construction",
    description: "Determine the quantity of hollow/solid concrete blocks and joint mortar needed for wall construction.",
    seoKeywords: ["block count calculator", "AAC block estimator", "concrete block wall calculation"],
    inputs: [
      { name: "length", label: "Wall Length (Ft)", type: "number", defaultValue: 20 },
      { name: "height", label: "Wall Height (Ft)", type: "number", defaultValue: 10 },
      {
        name: "blockSize",
        label: "Block Dimensions (Inches)",
        type: "select",
        defaultValue: "8x8x16",
        options: [
          { value: "8x8x16", label: "8x8x16 (Standard Load-bearing)" },
          { value: "4x8x16", label: "4x8x16 (Partition Block)" },
          { value: "6x8x16", label: "6x8x16 (Medium Boundary)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const h = parseFloat(inputs.height) || 0;
      const wallArea = l * h;
      // standard 8x8x16 inch block accounts for 8/12 * 16/12 = 0.888 sq ft including mortar joints
      const blockCount = Math.ceil(wallArea / 0.89);
      const mortarCft = Math.round(blockCount * 0.1 * 10) / 10; // ~0.1 cft mortar per block
      return { blockCount, mortarCft };
    },
    outputLabels: {
      blockCount: "Total Concrete Blocks Required",
      mortarCft: "Mortar Required (Cft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "steel-calc",
    name: "Steel Weight & Rebar Calculator",
    category: "Construction",
    description: "Calculate structural reinforcement steel rebar weight in kilograms and tons based on diameter and length.",
    seoKeywords: ["Steel Weight Calculator", "rebar weight online", "steel bar density formula"],
    inputs: [
      {
        name: "diameter",
        label: "Bar Diameter (mm)",
        type: "select",
        defaultValue: "12",
        options: [
          { value: "8", label: "8 mm (Stirrups/Ties)" },
          { value: "10", label: "10 mm (Slabs)" },
          { value: "12", label: "12 mm (Beams/Slabs)" },
          { value: "16", label: "16 mm (Beams/Columns)" },
          { value: "20", label: "20 mm (Heavy Columns)" },
          { value: "25", label: "25 mm (Structural Footings)" }
        ]
      },
      { name: "length", label: "Total Length (Meters)", type: "number", defaultValue: 50 }
    ],
    calculate: (inputs) => {
      const d = parseFloat(inputs.diameter) || 0;
      const l = parseFloat(inputs.length) || 0;
      // Rebar weight formula: D^2 * L / 162
      const weightKg = Math.round(((d * d * l) / 162.2) * 100) / 100;
      const barsCount = Math.ceil(l / 12); // Standard rebar bar is 12m long
      return { weightKg, weightTons: Math.round((weightKg / 1000) * 1000) / 1000, barsCount };
    },
    outputLabels: {
      weightKg: "Total Weight (Kg)",
      weightTons: "Total Weight (Metric Tons)",
      barsCount: "Number of standard 12M bars needed"
    },
    explanatoryContent: `
### Steel Weight Estimation Formula
Reinforcing steel bars (rebar) are ordered by weight (in kilograms or metric tons) rather than count.

#### The Standard Weight Formula
The unit weight of a steel rebar can be calculated using the following engineering formula:
$$\\text{Weight per Meter} = \\frac{D^2}{162}$$
Where $D$ is the diameter of the bar in millimeters.

#### Example Calculation
For a 12mm bar of 50m length:
- Weight/m = $12^2 / 162.2 = 0.887 \\text{ kg/m}$
- Total Weight = $0.887 \\times 50 = 44.38 \\text{ kg}$
    `
  },
  {
    id: "plaster-calc",
    name: "Wall Plaster Calculator",
    category: "Construction",
    description: "Determine the bags of cement and sand required for wall plastering operations.",
    seoKeywords: ["plaster cement estimator", "wall plaster calculator online"],
    inputs: [
      { name: "area", label: "Wall Area to Plaster (Sq.Ft)", type: "number", defaultValue: 250 },
      {
        name: "thickness",
        label: "Plaster Thickness",
        type: "select",
        defaultValue: "12",
        options: [
          { value: "12", label: "12 mm (Internal Smooth Walls)" },
          { value: "20", label: "20 mm (External Rough plaster)" }
        ]
      },
      {
        name: "ratio",
        label: "Plaster Mix Ratio",
        type: "select",
        defaultValue: "1:4",
        options: [
          { value: "1:3", label: "1:3 (Ceiling Plaster)" },
          { value: "1:4", label: "1:4 (Internal Walls)" },
          { value: "1:6", label: "1:6 (External Walls)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const th = parseFloat(inputs.thickness) / 304.8; // mm to feet
      const wetVol = area * th;
      const dryVol = wetVol * 1.33; // Plaster shrink factor is 33%
      
      const ratioParts = inputs.ratio.split(':').map(Number);
      const sum = ratioParts[0] + ratioParts[1];
      const cementVol = (ratioParts[0] / sum) * dryVol;
      const bags = Math.ceil(cementVol / 1.226);
      const sand = Math.round((ratioParts[1] / sum) * dryVol * 10) / 10;
      return { bags, sandCft: sand };
    },
    outputLabels: {
      bags: "Cement Bags Required (50kg)",
      sandCft: "Sand Quantity (Cft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "mortar-calc",
    name: "Mortar Quantity & Ratio Estimator",
    category: "Construction",
    description: "Estimate the volumes of raw materials for dry mortar batches.",
    seoKeywords: ["mortar volume calculator", "masonry mortar estimation"],
    inputs: [
      { name: "cft", label: "Wet Mortar Volume (Cft)", type: "number", defaultValue: 20 },
      {
        name: "ratio",
        label: "Mix Ratio",
        type: "select",
        defaultValue: "1:5",
        options: [
          { value: "1:3", label: "1:3 Ratio" },
          { value: "1:4", label: "1:4 Ratio" },
          { value: "1:5", label: "1:5 Ratio" },
          { value: "1:6", label: "1:6 Ratio" }
        ]
      }
    ],
    calculate: (inputs) => {
      const wetVol = parseFloat(inputs.cft) || 0;
      const dryVol = wetVol * 1.33;
      const ratioParts = inputs.ratio.split(':').map(Number);
      const sum = ratioParts[0] + ratioParts[1];
      const cementVol = (ratioParts[0] / sum) * dryVol;
      const bags = Math.ceil(cementVol / 1.226);
      const sand = Math.round((ratioParts[1] / sum) * dryVol * 10) / 10;
      return { bags, sandCft: sand };
    },
    outputLabels: {
      bags: "Cement Bags (50kg)",
      sandCft: "Sand Volume (Cft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "foundation-calc",
    name: "Footing Foundation Concrete Calculator",
    category: "Construction",
    description: "Calculate concrete and material parameters for isolated pad footing foundations.",
    seoKeywords: ["isolated footing calculator", "footing concrete calculator"],
    inputs: [
      { name: "length", label: "Footing Length (Ft)", type: "number", defaultValue: 4 },
      { name: "width", label: "Footing Width (Ft)", type: "number", defaultValue: 4 },
      { name: "depth", label: "Footing Depth / Thickness (Ft)", type: "number", defaultValue: 1.5 },
      { name: "qty", label: "Number of Footings", type: "number", defaultValue: 8 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const d = parseFloat(inputs.depth) || 0;
      const q = parseFloat(inputs.qty) || 1;
      const wetVol = l * w * d * q;
      const dryVol = wetVol * 1.54;
      const bags = Math.ceil((1 / 7) * dryVol / 1.226); // assuming 1:2:4 M15 concrete
      const sand = Math.round((2 / 7) * dryVol * 10) / 10;
      const aggregate = Math.round((4 / 7) * dryVol * 10) / 10;
      return { volumeCft: Math.round(wetVol), bags, sandCft: sand, aggregateCft: aggregate };
    },
    outputLabels: {
      volumeCft: "Total Foundation Concrete Volume (Cft)",
      bags: "Cement Bags Required (50kg)",
      sandCft: "Sand Quantity (Cft)",
      aggregateCft: "Aggregate Quantity (Cft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "rcc-slab-calc",
    name: "RCC Slab Calculator",
    category: "Construction",
    description: "Estimate cement, sand, gravel, and rebar reinforcement weight for RCC roof slabs.",
    seoKeywords: ["RCC Slab Calculator", "slab concrete steel estimator", "roof slab materials"],
    inputs: [
      { name: "area", label: "Slab Floor Area (Sq.Ft)", type: "number", defaultValue: 1000 },
      { name: "thickness", label: "Slab Thickness (Inches)", type: "number", defaultValue: 5 },
      { name: "steelPct", label: "Reinforcement Steel Percentage (%)", type: "number", defaultValue: 1.0 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const th = (parseFloat(inputs.thickness) || 5) / 12;
      const wetVol = area * th;
      const dryVol = wetVol * 1.54;
      
      // Steel estimation: steel density is 7850 kg/m^3.
      // Steel percentage refers to percentage of concrete volume.
      const slabVolCum = wetVol / 35.315;
      const steelWeightKg = Math.round(slabVolCum * (parseFloat(inputs.steelPct) / 100) * 7850);
      
      const bags = Math.ceil((1 / 5.5) * dryVol / 1.226); // M20 slab concrete
      const sand = Math.round((1.5 / 5.5) * dryVol * 10) / 10;
      const gravel = Math.round((3 / 5.5) * dryVol * 10) / 10;

      return {
        volumeCum: Math.round(slabVolCum * 100) / 100,
        bags,
        sandCft: sand,
        aggregateCft: gravel,
        steelWeightKg
      };
    },
    outputLabels: {
      volumeCum: "Total Slab Volume (Cu.M)",
      bags: "Cement Bags Required (50kg)",
      sandCft: "Sand Required (Cft)",
      aggregateCft: "Aggregate Required (Cft)",
      steelWeightKg: "Estimated Steel Reinforcement Weight (Kg)"
    },
    explanatoryContent: `
### RCC Slab Estimation Guidelines
Roof slabs are constructed using reinforced cement concrete (RCC), where steel rebars are embedded to handle bending tension.

#### Equations
- **Concrete Vol**: $\\text{Area} \\times \\text{Thickness}$.
- **Steel Weight**: $\\text{Volume in Cum} \\times \\text{Steel \\%} \\times 7850 \\text{ kg/m}^3$. A standard slab uses **0.8% to 1.2%** of concrete volume as steel.
    `
  },
  {
    id: "column-calc",
    name: "RCC Column concrete Calculator",
    category: "Construction",
    description: "Determine concrete volumes and reinforcement steel for circular or rectangular columns.",
    seoKeywords: ["column concrete calculator", "column material estimator"],
    inputs: [
      { name: "height", label: "Column Height (Ft)", type: "number", defaultValue: 10 },
      { name: "width", label: "Width / Diameter (Inches)", type: "number", defaultValue: 12 },
      { name: "breadth", label: "Breadth (For rectangular, otherwise enter same) (Inches)", type: "number", defaultValue: 12 },
      { name: "qty", label: "Number of Columns", type: "number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const h = parseFloat(inputs.height) || 0;
      const w = (parseFloat(inputs.width) || 0) / 12;
      const b = (parseFloat(inputs.breadth) || 0) / 12;
      const q = parseFloat(inputs.qty) || 1;
      const wetVol = h * w * b * q;
      const dryVol = wetVol * 1.54;
      const bags = Math.ceil((1 / 5.5) * dryVol / 1.226); // M20 columns
      return { volumeCft: Math.round(wetVol * 10) / 10, bags };
    },
    outputLabels: {
      volumeCft: "Total Columns Volume (Cft)",
      bags: "Cement Bags Required (50kg)"
    },
    explanatoryContent: "..."
  },
  {
    id: "beam-calc",
    name: "RCC Beam Concrete Calculator",
    category: "Construction",
    description: "Calculate concrete and steel rebar values for horizontal structural beams.",
    seoKeywords: ["concrete beam calculator", "beam material planner"],
    inputs: [
      { name: "length", label: "Beam Span Length (Ft)", type: "number", defaultValue: 15 },
      { name: "width", label: "Beam Width (Inches)", type: "number", defaultValue: 9 },
      { name: "depth", label: "Beam Depth (Inches)", type: "number", defaultValue: 12 },
      { name: "qty", label: "Number of Beams", type: "number", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = (parseFloat(inputs.width) || 0) / 12;
      const d = (parseFloat(inputs.depth) || 0) / 12;
      const q = parseFloat(inputs.qty) || 1;
      const wetVol = l * w * d * q;
      const dryVol = wetVol * 1.54;
      const bags = Math.ceil((1 / 5.5) * dryVol / 1.226);
      return { volumeCft: Math.round(wetVol * 10) / 10, bags };
    },
    outputLabels: {
      volumeCft: "Total Beams Volume (Cft)",
      bags: "Cement Bags Required"
    },
    explanatoryContent: "..."
  },
  {
    id: "tile-calc",
    name: "Tile Calculator India",
    category: "Flooring & Finishing",
    description: "Calculate standard ceramic/vitrified floor tiles required based on room dimensions with wastage buffer.",
    seoKeywords: ["Tile Calculator India", "tiles calculator online", "floor tile count estimator"],
    inputs: [
      { name: "length", label: "Floor Length (Ft)", type: "number", defaultValue: 15 },
      { name: "width", label: "Floor Width (Ft)", type: "number", defaultValue: 12 },
      {
        name: "tileSize",
        label: "Tile Size",
        type: "select",
        defaultValue: "2x2",
        options: [
          { value: "2x2", label: "2 x 2 ft (Standard Vitrified)" },
          { value: "1x1", label: "1 x 1 ft (Bathroom floor)" },
          { value: "3x3", label: "3 x 3 ft (Large Hall)" },
          { value: "4x2", label: "4 x 2 ft (Double Charge Slabs)" }
        ]
      },
      { name: "wastage", label: "Wastage Buffer (%)", type: "number", defaultValue: 8 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const wastage = parseFloat(inputs.wastage) || 8;
      
      const area = l * w;
      const grossArea = area * (1 + wastage / 100);
      
      const [tW, tH] = inputs.tileSize.split('x').map(Number);
      const tileArea = tW * tH;
      const count = Math.ceil(grossArea / tileArea);
      const boxes = Math.ceil(count / 4); // assumes 4 tiles per box

      return { floorArea: area, tileCount: count, boxesNeeded: boxes };
    },
    outputLabels: {
      floorArea: "Net Floor Area (Sq.Ft)",
      tileCount: "Individual Tile Pieces Required",
      boxesNeeded: "Boxes of Tiles (4 tiles per box)"
    },
    explanatoryContent: `
### Indian Floor Tiles Estimation
Tiling layouts require planning for cutting offsets around wall margins, which accounts for the wastage buffer.

#### Mathematical Steps
1. **Net Floor Area**: $A = \\text{Length} \\times \\text{Width}$.
2. **Gross Tiling Area**: Include **8% to 10%** for wastage:
   $$A_{\\text{gross}} = A \\times 1.08$$
3. **Tiles Count**: Divide $A_{\\text{gross}}$ by the surface area of a single tile. E.g., a 2x2 tile covers 4 sq ft.
    `
  },
  {
    id: "grout-calc",
    name: "Epoxy & Cement Grout Calculator",
    category: "Flooring & Finishing",
    description: "Determine grout weight required based on tile dimensions and spacer joint width.",
    seoKeywords: ["tile grout calculator", "grout quantity estimation"],
    inputs: [
      { name: "area", label: "Flooring Area (Sq.Ft)", type: "number", defaultValue: 200 },
      { name: "width", label: "Spacer Joint Width (mm)", type: "number", defaultValue: 3 },
      { name: "depth", label: "Tile Thickness (mm)", type: "number", defaultValue: 8 },
      { name: "tileSize", label: "Tile Size Edge (mm)", type: "number", defaultValue: 600 }
    ],
    calculate: (inputs) => {
      const a = parseFloat(inputs.area) || 0;
      const w = parseFloat(inputs.width) || 0;
      const d = parseFloat(inputs.depth) || 0;
      const s = parseFloat(inputs.tileSize) || 600;
      // Grout formula: (A + B) * C * D * Density / (A * B)
      // converting area to sq meters and estimating grout weight in kg:
      // approx: Area * Density(1.8) * JointWidth * TileDepth / TileSize
      const areaM2 = a * 0.0929;
      const groutKg = Math.round(((s + s) * w * d * 1.8 * areaM2) / (s * s) * 100) / 100;
      return { groutKg };
    },
    outputLabels: {
      groutKg: "Grout Required (Kg)"
    },
    explanatoryContent: "..."
  },
  {
    id: "paint-calc",
    name: "Paint Calculator for Walls",
    category: "Flooring & Finishing",
    description: "Estimate the amount of primer, emulsion paint, and putty needed for standard wall surfaces.",
    seoKeywords: ["Paint Calculator for Walls", "wall paint estimator online", "room painting calculator"],
    inputs: [
      { name: "length", label: "Room Length (Ft)", type: "number", defaultValue: 15 },
      { name: "width", label: "Room Width (Ft)", type: "number", defaultValue: 12 },
      { name: "height", label: "Ceiling Height (Ft)", type: "number", defaultValue: 10 },
      { name: "openings", label: "Doors & Windows count", type: "number", defaultValue: 2 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const h = parseFloat(inputs.height) || 0;
      const op = parseFloat(inputs.openings) || 0;
      
      const perimeter = 2 * (l + w);
      const wallArea = perimeter * h;
      const ceilingArea = l * w;
      
      const totalArea = wallArea + ceilingArea;
      const netArea = Math.max(0, totalArea - (op * 21)); // deduct 21 sq ft per door/window on average
      
      // Standard emulsion paint coverage is 75 sq ft per liter (2 coats)
      const paintLiters = Math.ceil(netArea / 75);
      // Primer coverage is 100 sq ft per liter (1 coat)
      const primerLiters = Math.ceil(netArea / 100);

      return {
        paintingArea: Math.round(netArea),
        paintLiters,
        primerLiters
      };
    },
    outputLabels: {
      paintingArea: "Total Net Surface Area (Sq.Ft)",
      paintLiters: "Emulsion Paint Required (Liters - 2 coats)",
      primerLiters: "Wall Primer Required (Liters - 1 coat)"
    },
    explanatoryContent: `
### Painting Surface Calculation
A standard room has four walls and a ceiling. Estimating paint quantities requires calculating the wall surface areas while subtracting doors and window units.

#### Formulas
- **Wall Area**: $2 \\times (L + W) \\times H$.
- **Ceiling Area**: $L \\times W$.
- **Coverage**: Double-coat interior plastic emulsion paint typically covers **70 to 80 sq ft per liter**.
    `
  },
  {
    id: "wallpaper-calc",
    name: "Wallpaper Roll Estimator",
    category: "Flooring & Finishing",
    description: "Determine the exact number of wallpaper rolls required for an interior wall.",
    seoKeywords: ["wallpaper calculator", "accent wall paper estimator"],
    inputs: [
      { name: "length", label: "Wall Width (Ft)", type: "number", defaultValue: 12 },
      { name: "height", label: "Wall Height (Ft)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.length) || 0;
      const h = parseFloat(inputs.height) || 0;
      const area = w * h;
      // A standard roll is 21 inches wide by 33 feet long, covering 57 sq ft.
      // We assume actual usable area is 50 sq ft due to pattern match wastage.
      const rolls = Math.ceil(area / 50);
      return { wallArea: area, rollsRequired: rolls };
    },
    outputLabels: {
      wallArea: "Wall Area (Sq.Ft)",
      rollsRequired: "Standard Wallpaper Rolls (21\" x 33')"
    },
    explanatoryContent: "..."
  },
  {
    id: "flooring-calc",
    name: "Laminate & Wooden Flooring Calculator",
    category: "Flooring & Finishing",
    description: "Estimate wooden planks, laminate floor boards, or vinyl tiles requirements.",
    seoKeywords: ["laminate flooring calculator", "wooden floor estimator"],
    inputs: [
      { name: "length", label: "Room Length (Ft)", type: "number", defaultValue: 14 },
      { name: "width", label: "Room Width (Ft)", type: "number", defaultValue: 12 },
      { name: "wastage", label: "Wastage Buffer (%)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const was = parseFloat(inputs.wastage) || 10;
      const area = l * w;
      const grossArea = area * (1 + was / 100);
      return { netArea: area, grossArea: Math.round(grossArea) };
    },
    outputLabels: {
      netArea: "Net Flooring Area (Sq.Ft)",
      grossArea: "Gross Area with Wastage (Sq.Ft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "carpet-calc",
    name: "Carpet Area Estimator",
    category: "Flooring & Finishing",
    description: "Determine the square yard and square foot area for soft carpeting rolls.",
    seoKeywords: ["carpet calculator online", "flooring carpet estimator"],
    inputs: [
      { name: "length", label: "Room Length (Ft)", type: "number", defaultValue: 16 },
      { name: "width", label: "Room Width (Ft)", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const sqft = l * w;
      const sqyd = Math.round(sqft / 9 * 10) / 10; // 9 sq ft = 1 sq yd
      return { sqft, sqyd };
    },
    outputLabels: {
      sqft: "Total Area (Sq.Ft)",
      sqyd: "Total Area (Sq.Yards)"
    },
    explanatoryContent: "..."
  },
  {
    id: "roofing-sheet-calc",
    name: "Roofing Sheet Calculator",
    category: "Roofing",
    description: "Calculate standard corrugated metal sheets or UPVC panels required for pitched roofs.",
    seoKeywords: ["metal roofing sheet calculator", "roofing sheets online"],
    inputs: [
      { name: "length", label: "Roof Truss Length (Ft)", type: "number", defaultValue: 30 },
      { name: "slope", label: "Truss Slope Width (Ft)", type: "number", defaultValue: 15 },
      { name: "sheetWidth", label: "Sheet Width (Ft)", type: "number", defaultValue: 3.5 }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const s = parseFloat(inputs.slope) || 0;
      const sw = parseFloat(inputs.sheetWidth) || 3.5;
      
      const actualSw = sw - 0.5; // subtract 6 inches overlap
      const sheetsPerSide = Math.ceil(l / actualSw);
      // assumes standard 10ft sheet length
      const sheetsCount = Math.ceil(s / 10) * sheetsPerSide;

      return { totalSheets: sheetsCount };
    },
    outputLabels: {
      totalSheets: "Total Roofing Sheets Required (For 10ft sheets)"
    },
    explanatoryContent: "..."
  },
  {
    id: "shingle-calc",
    name: "Asphalt Shingle Estimator",
    category: "Roofing",
    description: "Estimate asphalt shingle bundles and underlayment rolls needed for sloped roofs.",
    seoKeywords: ["shingle calculator", "roofing shingle bundles estimator"],
    inputs: [
      { name: "area", label: "Roof Area (Sq.Ft)", type: "number", defaultValue: 1200 }
    ],
    calculate: (inputs) => {
      const a = parseFloat(inputs.area) || 0;
      // 1 square = 100 sq ft. 1 square = 3 bundles of shingles.
      const squares = a / 100;
      const bundles = Math.ceil(squares * 3 * 1.1); // 10% wastage
      return { squares: Math.round(squares), bundlesNeeded: bundles };
    },
    outputLabels: {
      squares: "Roof Squares (100 Sq.Ft)",
      bundlesNeeded: "Shingle Bundles Required (includes 10% wastage)"
    },
    explanatoryContent: "..."
  },
  {
    id: "roof-area-calc",
    name: "Pitched Roof Area Calculator",
    category: "Roofing",
    description: "Find the actual sloped roof surface area based on building footprint and pitch factor.",
    seoKeywords: ["sloped roof area calculator", "roof pitch factor calculator"],
    inputs: [
      { name: "length", label: "Footprint Length (Ft)", type: "number", defaultValue: 40 },
      { name: "width", label: "Footprint Width (Ft)", type: "number", defaultValue: 30 },
      {
        name: "pitch",
        label: "Roof Pitch (Rise/Run)",
        type: "select",
        defaultValue: "4:12",
        options: [
          { value: "1.054", label: "4/12 Pitch (Low slope - factor 1.054)" },
          { value: "1.118", label: "6/12 Pitch (Standard slope - factor 1.118)" },
          { value: "1.202", label: "8/12 Pitch (Pitched slope - factor 1.202)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const l = parseFloat(inputs.length) || 0;
      const w = parseFloat(inputs.width) || 0;
      const factor = parseFloat(inputs.pitch) || 1.054;
      const footprint = l * w;
      const actualArea = Math.round(footprint * factor);
      return { footprintArea: footprint, actualRoofArea: actualArea };
    },
    outputLabels: {
      footprintArea: "Flat Building Footprint (Sq.Ft)",
      actualRoofArea: "Sloped Roof Surface Area (Sq.Ft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "pipe-length-calc",
    name: "Plumbing Pipe Length Estimator",
    category: "Plumbing",
    description: "Estimate total piping lengths needed for residential plumbing installations.",
    seoKeywords: ["plumbing pipe calculator", "residential plumbing estimator"],
    inputs: [
      { name: "bathrooms", label: "Number of Bathrooms", type: "number", defaultValue: 2 },
      { name: "kitchens", label: "Number of Kitchens", type: "number", defaultValue: 1 }
    ],
    calculate: (inputs) => {
      const b = parseFloat(inputs.bathrooms) || 0;
      const k = parseFloat(inputs.kitchens) || 0;
      // average 40 feet water pipe per bathroom, 30 feet per kitchen
      const waterPipe = (b * 40) + (k * 30);
      const drainPipe = (b * 20) + (k * 15);
      return { waterPipeFt: waterPipe, drainPipeFt: drainPipe };
    },
    outputLabels: {
      waterPipeFt: "Estimated Water Supply Pipe (Ft)",
      drainPipeFt: "Estimated Waste/Drainage Pipe (Ft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "water-tank-calc",
    name: "Water Tank Capacity Calculator",
    category: "Plumbing",
    description: "Determine recommended residential overhead or underground water storage capacity.",
    seoKeywords: ["water tank capacity calculator", "home water storage calculator"],
    inputs: [
      { name: "people", label: "Members in Household", type: "number", defaultValue: 5 },
      { name: "days", label: "Backup Reserve Days", type: "number", defaultValue: 2 }
    ],
    calculate: (inputs) => {
      const p = parseFloat(inputs.people) || 0;
      const d = parseFloat(inputs.days) || 1;
      // standard Indian water usage is ~135 liters per person per day (LPCD)
      const dailyUse = p * 135;
      const totalCapacity = dailyUse * d;
      return { dailyUseLiters: dailyUse, recommendedCapacityLiters: totalCapacity };
    },
    outputLabels: {
      dailyUseLiters: "Total Daily Water Usage (Liters)",
      recommendedCapacityLiters: "Recommended Water Tank Capacity (Liters)"
    },
    explanatoryContent: "..."
  },
  {
    id: "rainwater-calc",
    name: "Rainwater Harvesting Potential Calculator",
    category: "Plumbing",
    description: "Calculate potential annual water savings from harvesting roof runoff.",
    seoKeywords: ["rainwater harvesting calculator", "roof water collection estimator"],
    inputs: [
      { name: "roofArea", label: "Roof Catchment Area (Sq.Ft)", type: "number", defaultValue: 1500 },
      { name: "rainfall", label: "Average Annual Rainfall (mm)", type: "number", defaultValue: 800 }
    ],
    calculate: (inputs) => {
      const a = parseFloat(inputs.roofArea) || 0;
      const r = parseFloat(inputs.rainfall) || 0;
      // Formula: Area (sqm) * Rainfall (m) * runoff coefficient (0.85) * filter efficiency (0.9)
      const areaSqm = a * 0.0929;
      const rainfallM = r / 1000;
      const potentialLiters = Math.round(areaSqm * rainfallM * 0.85 * 0.9 * 1000);
      return { annualPotentialLiters: potentialLiters };
    },
    outputLabels: {
      annualPotentialLiters: "Annual Rainwater Harvest Potential (Liters)"
    },
    explanatoryContent: "..."
  },
  {
    id: "wire-length-calc",
    name: "Electrical Conduit & Wire Length Calculator",
    category: "Electrical",
    description: "Estimate total electrical wire coils required for residential wiring schedules.",
    seoKeywords: ["electrical wire calculator", "house wiring length estimator"],
    inputs: [
      { name: "area", label: "Floor Built-up Area (Sq.Ft)", type: "number", defaultValue: 1000 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      // thumb rule: 3 to 4 meters of wire per sq ft of floor area
      const totalMeters = area * 3.5;
      const standardCoils = Math.ceil(totalMeters / 90); // 1 coil = 90 meters
      return { totalMeters: Math.round(totalMeters), standardCoils };
    },
    outputLabels: {
      totalMeters: "Total Wire Length (Meters)",
      standardCoils: "Number of standard 90M coils needed"
    },
    explanatoryContent: "..."
  },
  {
    id: "load-calc",
    name: "Electrical Load Calculator",
    category: "Electrical",
    description: "Determine total home power load and phase requirements.",
    seoKeywords: ["house load calculator", "AC load calculator online"],
    inputs: [
      { name: "ac", label: "Air Conditioners (1.5 Ton - Count)", type: "number", defaultValue: 2 },
      { name: "geyser", label: "Water Geysers (Count)", type: "number", defaultValue: 1 },
      { name: "appliances", label: "Other Heavy Appliances (Fridge, Washing Machine, Microwave - Count)", type: "number", defaultValue: 3 },
      { name: "lights", label: "Lights & Fans (Total count)", type: "number", defaultValue: 15 }
    ],
    calculate: (inputs) => {
      const ac = parseFloat(inputs.ac) * 1800; // 1.5 ton AC ~1800W
      const g = parseFloat(inputs.geyser) * 2000; // geyser ~2000W
      const ap = parseFloat(inputs.appliances) * 1000; // avg 1000W
      const lf = parseFloat(inputs.lights) * 50; // lights/fans ~50W
      const totalW = ac + g + ap + lf;
      const totalKW = totalW / 1000;
      const phase = totalKW > 7 ? "Three-Phase Connection Recommended" : "Single-Phase Connection Sufficient";
      return { totalKW, phaseRecommendation: phase };
    },
    outputLabels: {
      totalKW: "Calculated Peak Connected Load (kW)",
      phaseRecommendation: "Electrical Power Feed Recommendation"
    },
    explanatoryContent: "..."
  },
  {
    id: "generator-calc",
    name: "Generator Size Calculator",
    category: "Electrical",
    description: "Calculate necessary diesel/gas generator capacity to handle backup power loads.",
    seoKeywords: ["generator size calculator", "backup generator kVA estimator"],
    inputs: [
      { name: "load", label: "Calculated Load (kW)", type: "number", defaultValue: 6 }
    ],
    calculate: (inputs) => {
      const kw = parseFloat(inputs.load) || 0;
      // generator sized in kVA = kW / PowerFactor(0.8) * safety multiplier(1.25)
      const kva = Math.round((kw / 0.8) * 1.25 * 10) / 10;
      return { generatorKva: kva };
    },
    outputLabels: {
      generatorKva: "Recommended Generator Capacity (kVA)"
    },
    explanatoryContent: "..."
  },
  {
    id: "solar-calc",
    name: "Solar Panel Size Calculator",
    category: "Electrical",
    description: "Determine size of solar photovoltaic (PV) system needed to offset grid power bills.",
    seoKeywords: ["Solar Panel Size Calculator", "solar power size estimator", "off-grid solar system planner"],
    inputs: [
      { name: "billUnits", label: "Average Monthly Electricity Consumed (kWh/Units)", type: "number", defaultValue: 300 },
      { name: "sunHours", label: "Average Sunny Hours Per Day", type: "number", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      const units = parseFloat(inputs.billUnits) || 0;
      const sun = parseFloat(inputs.sunHours) || 5;
      
      const dailyUnits = units / 30;
      // solar system size in kW = daily usage / sunny hours
      const systemKw = Math.round((dailyUnits / sun) * 10) / 10;
      // Assuming 400W panels
      const panels = Math.ceil((systemKw * 1000) / 400);

      return { systemSizeKw: systemKw, panelCount: panels };
    },
    outputLabels: {
      systemSizeKw: "Required Solar PV System Size (kW)",
      panelCount: "Number of 400W Solar Panels Required"
    },
    explanatoryContent: `
### Solar PV System Size Calculation
Installing solar panels helps reduce grid power dependence and lower monthly carbon emissions.

#### Solar Calculation Model
1. **Daily Average Usage**: $\\text{Monthly Units} / 30 \\text{ days}$.
2. **System Peak Capacity**: $\\text{Daily Usage} / \\text{Sun Hours}$.
3. **Safety Factor**: Multiply by 1.2 to account for inverter and line efficiency losses.
    `
  },
  {
    id: "battery-calc",
    name: "Battery Backup Calculator",
    category: "Electrical",
    description: "Calculate Ampere-hour (Ah) capacity required for home inverter battery storage.",
    seoKeywords: ["battery capacity calculator", "inverter battery backup estimator"],
    inputs: [
      { name: "load", label: "Connected Load to Run (Watts)", type: "number", defaultValue: 400 },
      { name: "hours", label: "Required Backup Time (Hours)", type: "number", defaultValue: 4 },
      { name: "voltage", label: "System Voltage (Volts)", type: "number", defaultValue: 12 }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.load) || 0;
      const h = parseFloat(inputs.hours) || 0;
      const v = parseFloat(inputs.voltage) || 12;
      // Ah = (w * h) / (v * efficiency_factor(0.8))
      const ah = Math.ceil((w * h) / (v * 0.8));
      return { batteryAh: ah };
    },
    outputLabels: {
      batteryAh: "Required Battery Capacity (Ah)"
    },
    explanatoryContent: "..."
  },
  {
    id: "led-lighting-calc",
    name: "LED Lighting Calculator",
    category: "Electrical",
    description: "Determine the number of LED light sources needed for a room based on lux levels.",
    seoKeywords: ["room led light calculator", "lumens estimator online"],
    inputs: [
      { name: "area", label: "Room Area (Sq.Ft)", type: "number", defaultValue: 150 },
      {
        name: "roomType",
        label: "Room Type / Purpose",
        type: "select",
        defaultValue: "bedroom",
        options: [
          { value: "bedroom", label: "Bedroom (150 Lux)" },
          { value: "study", label: "Study Room / Office (300 Lux)" },
          { value: "living", label: "Living Room (200 Lux)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const type = inputs.roomType;
      const lux = type === 'study' ? 300 : type === 'living' ? 200 : 150;
      
      const areaSqm = area * 0.0929;
      const lumens = Math.round(areaSqm * lux);
      // 1W of LED bulb gives approx 90 lumens. A 9W LED bulb gives ~800 lumens.
      const bulbs = Math.ceil(lumens / 800);

      return { totalLumens: lumens, bulbsNeeded: bulbs };
    },
    outputLabels: {
      totalLumens: "Total Lumens Required (lm)",
      bulbsNeeded: "Recommended 9W LED Bulbs (800 lm each)"
    },
    explanatoryContent: "..."
  },
  {
    id: "fertilizer-calc",
    name: "Agricultural Fertilizer Calculator",
    category: "Agricultural",
    description: "Determine exact quantities of Urea, DAP, and MOP required for farm crops.",
    seoKeywords: ["fertilizer calculator", "NPK fertilizer calculator online"],
    inputs: [
      { name: "area", label: "Field Area (Acres)", type: "number", defaultValue: 2 },
      { name: "n", label: "Nitrogen Required (kg/acre)", type: "number", defaultValue: 40 },
      { name: "p", label: "Phosphorus Required (kg/acre)", type: "number", defaultValue: 20 },
      { name: "k", label: "Potassium Required (kg/acre)", type: "number", defaultValue: 20 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const n = parseFloat(inputs.n) || 0;
      const p = parseFloat(inputs.p) || 0;
      const k = parseFloat(inputs.k) || 0;
      
      // DAP (18% N, 46% P). MOP (60% K). Urea (46% N).
      const totalP = p * area;
      const dapNeeded = totalP / 0.46;
      
      const nFromDap = dapNeeded * 0.18;
      const totalN = n * area;
      const remainingN = Math.max(0, totalN - nFromDap);
      const ureaNeeded = remainingN / 0.46;
      
      const totalK = k * area;
      const mopNeeded = totalK / 0.60;

      return {
        ureaKg: Math.round(ureaNeeded),
        dapKg: Math.round(dapNeeded),
        mopKg: Math.round(mopNeeded)
      };
    },
    outputLabels: {
      ureaKg: "Urea Bags Required (Kg)",
      dapKg: "DAP Bags Required (Kg)",
      mopKg: "MOP Bags Required (Kg)"
    },
    explanatoryContent: "..."
  },
  {
    id: "seed-calc",
    name: "Seed Sowing Rate Estimator",
    category: "Agricultural",
    description: "Determine seed quantities needed based on target plant populations.",
    seoKeywords: ["seed rate calculator", "sowing seeds density calculator"],
    inputs: [
      { name: "area", label: "Field Area (Acres)", type: "number", defaultValue: 1 },
      { name: "targetPop", label: "Target Plants Per Acre", type: "number", defaultValue: 30000 },
      { name: "germination", label: "Expected Germination Rate (%)", type: "number", defaultValue: 85 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const pop = parseFloat(inputs.targetPop) || 0;
      const germ = (parseFloat(inputs.germination) || 85) / 100;
      const seedsNeeded = Math.ceil((pop * area) / germ);
      return { totalSeedsNeeded: seedsNeeded };
    },
    outputLabels: {
      totalSeedsNeeded: "Total Seeds Required for Sowing"
    },
    explanatoryContent: "..."
  },
  {
    id: "irrigation-calc",
    name: "Irrigation Water Requirement Calculator",
    category: "Agricultural",
    description: "Calculate water requirements in liters for crop fields based on evapotranspiration rates.",
    seoKeywords: ["irrigation water calculator", "farm drip water usage"],
    inputs: [
      { name: "area", label: "Field Area (Acres)", type: "number", defaultValue: 1 },
      { name: "etc", label: "Crop Evapotranspiration (mm/day)", type: "number", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const etc = parseFloat(inputs.etc) || 0;
      
      // 1 acre-mm is 4047 Liters.
      const waterLiters = Math.round(area * etc * 4047);
      return { dailyWaterLiters: waterLiters };
    },
    outputLabels: {
      dailyWaterLiters: "Daily Water Volume Required (Liters)"
    },
    explanatoryContent: "..."
  },
  {
    id: "pesticide-calc",
    name: "Pesticide Spray Mixing Calculator",
    category: "Agricultural",
    description: "Calculate volume of pesticide concentrate needed for agricultural sprays.",
    seoKeywords: ["pesticide mixture calculator", "spray dilution calculator"],
    inputs: [
      { name: "tankSize", label: "Spray Tank Capacity (Liters)", type: "number", defaultValue: 15 },
      { name: "dose", label: "Recommended Dosage (ml per Liter of water)", type: "number", defaultValue: 2 }
    ],
    calculate: (inputs) => {
      const size = parseFloat(inputs.tankSize) || 0;
      const dose = parseFloat(inputs.dose) || 0;
      const ml = size * dose;
      return { concentrateMl: ml };
    },
    outputLabels: {
      concentrateMl: "Pesticide Concentrate Needed (ml per tank)"
    },
    explanatoryContent: "..."
  },
  {
    id: "fabric-length-calc",
    name: "Garment Fabric Length Calculator",
    category: "Fabric & Textile",
    description: "Estimate fabric yards/meters needed to stitch specific garments.",
    seoKeywords: ["fabric length estimator", "curtain fabric sizing"],
    inputs: [
      {
        name: "garment",
        label: "Garment Type",
        type: "select",
        defaultValue: "shirt",
        options: [
          { value: "shirt", label: "Men's Full Sleeve Shirt" },
          { value: "trousers", label: "Men's Trousers / Pants" },
          { value: "saree", label: "Standard Saree (with blouse)" },
          { value: "suit", label: "Formal Suit Set" }
        ]
      }
    ],
    calculate: (inputs) => {
      const type = inputs.garment;
      const meters = type === 'shirt' ? 1.6 : type === 'trousers' ? 1.25 : type === 'saree' ? 6.25 : 3.5;
      return { fabricMeters: meters };
    },
    outputLabels: {
      fabricMeters: "Recommended Fabric Length (Meters)"
    },
    explanatoryContent: "..."
  },
  {
    id: "thread-converter",
    name: "Thread Count Converter",
    category: "Fabric & Textile",
    description: "Convert yarn sizes and threads per cm to threads per inch metrics.",
    seoKeywords: ["thread count converter", "warp weft converter"],
    inputs: [
      { name: "warp", label: "Warp Threads (per cm)", type: "number", defaultValue: 40 },
      { name: "weft", label: "Weft Threads (per cm)", type: "number", defaultValue: 30 }
    ],
    calculate: (inputs) => {
      const warp = parseFloat(inputs.warp) || 0;
      const weft = parseFloat(inputs.weft) || 0;
      
      // threads per inch = threads per cm * 2.54
      const tc = Math.round((warp + weft) * 2.54);
      return { threadCountPerInch: tc };
    },
    outputLabels: {
      threadCountPerInch: "Total Thread Count (per Sq.Inch)"
    },
    explanatoryContent: "..."
  },
  {
    id: "gsm-calc",
    name: "Fabric GSM Calculator",
    category: "Fabric & Textile",
    description: "Determine fabric weight in Grams per Square Meter (GSM).",
    seoKeywords: ["fabric gsm calculator", "gsm calculation online"],
    inputs: [
      { name: "weight", label: "Weight of Sample (Grams)", type: "number", defaultValue: 5 },
      { name: "length", label: "Sample Length (cm)", type: "number", defaultValue: 10 },
      { name: "width", label: "Sample Width (cm)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const wt = parseFloat(inputs.weight) || 0;
      const l = parseFloat(inputs.length) || 10;
      const w = parseFloat(inputs.width) || 10;
      
      const areaSqm = (l * w) / 10000;
      const gsm = Math.round(wt / areaSqm);
      return { gsm };
    },
    outputLabels: {
      gsm: "Fabric Weight (GSM)"
    },
    explanatoryContent: "..."
  },
  {
    id: "curtain-calc",
    name: "Curtain Fabric Estimator",
    category: "Fabric & Textile",
    description: "Calculate curtain fabric panels and yardage for custom windows.",
    seoKeywords: ["curtain yardage calculator", "curtain width sizing"],
    inputs: [
      { name: "width", label: "Window Frame Width (Inches)", type: "number", defaultValue: 60 },
      { name: "height", label: "Window Frame Height (Inches)", type: "number", defaultValue: 80 }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.width) || 0;
      const h = parseFloat(inputs.height) || 0;
      const totalWidthNeeded = w * 2.0; // 2x fullness
      const panels = Math.ceil(totalWidthNeeded / 48); // assuming 48\" fabric width
      const yards = Math.round(((h + 8) / 36) * panels * 10) / 10; // 8 inches hem allowance
      return { curtainPanels: panels, fabricYards: yards };
    },
    outputLabels: {
      curtainPanels: "Curtain Panels Required",
      fabricYards: "Total Fabric Required (Yards)"
    },
    explanatoryContent: "..."
  },
  {
    id: "upholstery-calc",
    name: "Sofa Upholstery Fabric Calculator",
    category: "Fabric & Textile",
    description: "Determine yards of fabric needed to re-upholster chairs or sofas.",
    seoKeywords: ["sofa fabric calculator", "sofa upholstery yardage"],
    inputs: [
      {
        name: "sofaSize",
        label: "Sofa Size / Seater",
        type: "select",
        defaultValue: "3",
        options: [
          { value: "1", label: "Armchair / 1-Seater" },
          { value: "3", label: "3-Seater Sofa" },
          { value: "5", label: "5-Seater Sofa Suite" }
        ]
      }
    ],
    calculate: (inputs) => {
      const size = inputs.sofaSize;
      const yards = size === '1' ? 7 : size === '3' ? 16 : 28;
      return { fabricYards: yards };
    },
    outputLabels: {
      fabricYards: "Estimated Upholstery Fabric Required (Yards)"
    },
    explanatoryContent: "..."
  },
  {
    id: "wallpaper-repeat-calc",
    name: "Wallpaper Repeat Allowance Estimator",
    category: "Home Improvement",
    description: "Calculate wallpaper roll requirements factoring pattern repeats.",
    seoKeywords: ["wallpaper pattern repeat calculator", "pattern repeat waste"],
    inputs: [
      { name: "area", label: "Wall Area (Sq.Ft)", type: "number", defaultValue: 150 },
      { name: "repeat", label: "Pattern Repeat size (Inches)", type: "number", defaultValue: 18 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const rep = parseFloat(inputs.repeat) || 0;
      const factor = rep > 0 ? 1.15 : 1.05; // 15% wastage if patterns repeat
      const rolls = Math.ceil((area * factor) / 50);
      return { rollsRequired: rolls };
    },
    outputLabels: {
      rollsRequired: "Required Wallpaper Rolls (includes repeat wastage)"
    },
    explanatoryContent: "..."
  },
  {
    id: "insulation-calc",
    name: "Insulation Material Calculator",
    category: "Home Improvement",
    description: "Determine the number of fiberglass batts or rolls for insulation projects.",
    seoKeywords: ["insulation calculator", "wall fiberglass batt estimator"],
    inputs: [
      { name: "area", label: "Area to Insulate (Sq.Ft)", type: "number", defaultValue: 600 },
      {
        name: "thickness",
        label: "Desired Insulation Value",
        type: "select",
        defaultValue: "R13",
        options: [
          { value: "R11", label: "R-11 (Standard Wall)" },
          { value: "R19", label: "R-19 (Crawl Space)" },
          { value: "R30", label: "R-30 (Attic insulation)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const rolls = Math.ceil(area / 40); // Standard roll covers ~40 sq ft
      return { totalInsulationRolls: rolls };
    },
    outputLabels: {
      totalInsulationRolls: "Total Insulation Rolls Required"
    },
    explanatoryContent: "..."
  },
  {
    id: "glass-area-calc",
    name: "Glass Area & Weight Calculator",
    category: "Home Improvement",
    description: "Determine total window glass glazing area and weight load.",
    seoKeywords: ["glass weight calculator", "window glass area estimator"],
    inputs: [
      { name: "width", label: "Glass Width (Inches)", type: "number", defaultValue: 36 },
      { name: "height", label: "Glass Height (Inches)", type: "number", defaultValue: 48 },
      { name: "thickness", label: "Glass Thickness (mm)", type: "number", defaultValue: 5 }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.width) || 0;
      const h = parseFloat(inputs.height) || 0;
      const th = parseFloat(inputs.thickness) || 5;
      
      const areaSqft = (w * h) / 144;
      const areaSqm = areaSqft * 0.0929;
      // Glass density is 2.5 kg/m^2 per mm thickness
      const weight = Math.round(areaSqm * th * 2.5 * 10) / 10;
      return { glazingAreaSqft: Math.round(areaSqft * 10) / 10, totalGlassWeightKg: weight };
    },
    outputLabels: {
      glazingAreaSqft: "Total Glazing Area (Sq.Ft)",
      totalGlassWeightKg: "Total Glass Weight (Kg)"
    },
    explanatoryContent: "..."
  },
  {
    id: "door-material-calc",
    name: "Door Wood & Shutter Calculator",
    category: "Home Improvement",
    description: "Estimate timber volumes or sheet areas required for flush/panel doors.",
    seoKeywords: ["door frame wood calculator", "timber sizing online"],
    inputs: [
      { name: "height", label: "Door Opening Height (Ft)", type: "number", defaultValue: 7 },
      { name: "width", label: "Door Opening Width (Ft)", type: "number", defaultValue: 3 }
    ],
    calculate: (inputs) => {
      const h = parseFloat(inputs.height) || 0;
      const w = parseFloat(inputs.width) || 0;
      
      const framePerimeter = (2 * h) + w;
      // standard frame cross section is 3\" x 4\" = 0.083 sq ft
      const timberVol = Math.round(framePerimeter * 0.083 * 10) / 10;
      const shutterArea = h * w;

      return { frameTimberCft: timberVol, doorShutterAreaSqft: shutterArea };
    },
    outputLabels: {
      frameTimberCft: "Required Frame Timber Volume (Cft)",
      doorShutterAreaSqft: "Door Shutter Surface Area (Sq.Ft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "window-material-calc",
    name: "Window Frame & Section Calculator",
    category: "Home Improvement",
    description: "Estimate frame profiles and glass panes requirements for custom windows.",
    seoKeywords: ["aluminium window section calculator", "upvc window estimator"],
    inputs: [
      { name: "width", label: "Window Width (Ft)", type: "number", defaultValue: 4 },
      { name: "height", label: "Window Height (Ft)", type: "number", defaultValue: 4 }
    ],
    calculate: (inputs) => {
      const w = parseFloat(inputs.width) || 0;
      const h = parseFloat(inputs.height) || 0;
      const perimeter = 2 * (w + h);
      const glass = w * h;
      return { frameProfileRunningFeet: perimeter, glassPaneAreaSqft: glass };
    },
    outputLabels: {
      frameProfileRunningFeet: "Required Frame Section (Running Feet)",
      glassPaneAreaSqft: "Glazing Glass Pane Area (Sq.Ft)"
    },
    explanatoryContent: "..."
  },
  {
    id: "construction-cost-calc",
    name: "House Construction Cost Calculator",
    category: "Cost Estimation",
    description: "Determine total building budget and raw materials breakdown based on built-up area.",
    seoKeywords: ["House Construction Cost Calculator", "house building cost per sq ft", "construction rate estimator"],
    inputs: [
      { name: "area", label: "Built-up Floor Area (Sq.Ft)", type: "number", defaultValue: 1500 },
      {
        name: "quality",
        label: "Construction Quality Standard",
        type: "select",
        defaultValue: "standard",
        options: [
          { value: "basic", label: "Basic Class (Approx ₹1600/sqft)" },
          { value: "standard", label: "Standard Class (Approx ₹2000/sqft)" },
          { value: "premium", label: "Premium Class (Approx ₹2800/sqft)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const q = inputs.quality;
      const rate = q === 'premium' ? 2800 : q === 'standard' ? 2000 : 1600;
      
      const totalCost = area * rate;
      // General thumb rule breakdowns in India
      const cementCost = Math.round(totalCost * 0.16);
      const steelCost = Math.round(totalCost * 0.12);
      const sandCost = Math.round(totalCost * 0.08);
      const aggregateCost = Math.round(totalCost * 0.06);
      const laborCost = Math.round(totalCost * 0.25);

      return {
        totalCostEstimate: "₹" + totalCost.toLocaleString('en-IN'),
        cementCostShare: "₹" + cementCost.toLocaleString('en-IN'),
        steelCostShare: "₹" + steelCost.toLocaleString('en-IN'),
        sandCostShare: "₹" + sandCost.toLocaleString('en-IN'),
        aggregateCostShare: "₹" + aggregateCost.toLocaleString('en-IN'),
        laborCostShare: "₹" + laborCost.toLocaleString('en-IN')
      };
    },
    outputLabels: {
      totalCostEstimate: "Total Construction Cost Estimate",
      cementCostShare: "Cement Material Share (16%)",
      steelCostShare: "Steel Reinforcement Share (12%)",
      sandCostShare: "Sand Material Share (8%)",
      aggregateCostShare: "Aggregate Material Share (6%)",
      laborCostShare: "Contractor Labor Share (25%)"
    },
    explanatoryContent: `
### House Construction Cost Calculation
Estimating construction cost helps secure loans and avoid financial logjams.

#### Material Share Allocation
In civil engineering projects, the total cost is divided among materials and labor according to average thumb rules:
- **Cement**: 16% of total cost
- **Steel**: 12% of total cost
- **Sand**: 8% of total cost
- **Aggregate**: 6% of total cost
- **Labor**: 25% of total cost
    `
  },
  {
    id: "budget-planner",
    name: "Material Budget Planner",
    category: "Cost Estimation",
    description: "Plan and allocate budget segments for your material purchasing schedule.",
    seoKeywords: ["building material planner", "house material budgeter"],
    inputs: [
      { name: "budget", label: "Total Target Budget (INR)", type: "number", defaultValue: 500000 }
    ],
    calculate: (inputs) => {
      const b = parseFloat(inputs.budget) || 0;
      return {
        masonryBudget: "₹" + Math.round(b * 0.45).toLocaleString('en-IN'),
        finishingBudget: "₹" + Math.round(b * 0.35).toLocaleString('en-IN'),
        utilitiesBudget: "₹" + Math.round(b * 0.20).toLocaleString('en-IN')
      };
    },
    outputLabels: {
      masonryBudget: "Masonry Materials Budget (45%)",
      finishingBudget: "Finishing & Tiling Budget (35%)",
      utilitiesBudget: "Plumbing & Electricals Budget (20%)"
    },
    explanatoryContent: "..."
  },
  {
    id: "renovation-calc",
    name: "Home Renovation Cost Calculator",
    category: "Cost Estimation",
    description: "Determine budget needs for complete home remodeling or floor renovations.",
    seoKeywords: ["home renovation cost calculator", "flat remodeling calculator"],
    inputs: [
      { name: "area", label: "Area to Renovate (Sq.Ft)", type: "number", defaultValue: 800 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const lowCost = area * 600;
      const highCost = area * 1500;
      return {
        budgetRange: "₹" + lowCost.toLocaleString('en-IN') + " - ₹" + highCost.toLocaleString('en-IN')
      };
    },
    outputLabels: {
      budgetRange: "Estimated Renovation Budget Range"
    },
    explanatoryContent: "..."
  },
  {
    id: "interior-cost-calc",
    name: "Interior Design Cost Estimator",
    category: "Cost Estimation",
    description: "Calculate complete woodwork, wardrobe, and styling budgets.",
    seoKeywords: ["interior design cost estimator", "modular wardrobe costing"],
    inputs: [
      {
        name: "bhk",
        label: "Apartment Size",
        type: "select",
        defaultValue: "2BHK",
        options: [
          { value: "1BHK", label: "1 BHK Apartment" },
          { value: "2BHK", label: "2 BHK Apartment" },
          { value: "3BHK", label: "3 BHK Apartment" }
        ]
      }
    ],
    calculate: (inputs) => {
      const bhk = inputs.bhk;
      const low = bhk === '1BHK' ? 250000 : bhk === '2BHK' ? 450000 : 700000;
      const high = bhk === '1BHK' ? 400000 : bhk === '2BHK' ? 750000 : 1200000;
      return {
        interiorCostRange: "₹" + low.toLocaleString('en-IN') + " - ₹" + high.toLocaleString('en-IN')
      };
    },
    outputLabels: {
      interiorCostRange: "Estimated Interior Cost Range"
    },
    explanatoryContent: "..."
  },
  {
    id: "room-remodel-calc",
    name: "Room Remodeling Cost & Timeline Planner",
    category: "Cost Estimation",
    description: "Estimate costs for remodeling individual bedrooms or kitchens.",
    seoKeywords: ["kitchen remodeling estimator", "bedroom remodeling budget"],
    inputs: [
      { name: "area", label: "Room Size (Sq.Ft)", type: "number", defaultValue: 150 }
    ],
    calculate: (inputs) => {
      const a = parseFloat(inputs.area) || 0;
      const cost = a * 1200;
      return {
        estimatedCost: "₹" + cost.toLocaleString('en-IN'),
        timelineDays: "15 to 25 Working Days"
      };
    },
    outputLabels: {
      estimatedCost: "Remodeling Budget Estimate",
      timelineDays: "Expected Working Timeline"
    },
    explanatoryContent: "..."
  },
  {
    id: "area-converter",
    name: "Area Unit Converter",
    category: "Unit Conversion",
    description: "Convert between square feet, square meters, square yards, acres, and gunthas.",
    seoKeywords: ["Area Converter", "sq ft to guntha converter", "sq meters to sq feet online"],
    inputs: [
      { name: "value", label: "Area Value", type: "number", defaultValue: 1000 },
      {
        name: "fromUnit",
        label: "Convert From",
        type: "select",
        defaultValue: "sqft",
        options: [
          { value: "sqft", label: "Square Feet (Sq.Ft)" },
          { value: "sqm", label: "Square Meters (Sq.M)" },
          { value: "acre", label: "Acres" }
        ]
      },
      {
        name: "toUnit",
        label: "Convert To",
        type: "select",
        defaultValue: "sqm",
        options: [
          { value: "sqft", label: "Square Feet (Sq.Ft)" },
          { value: "sqm", label: "Square Meters (Sq.M)" },
          { value: "acre", label: "Acres" }
        ]
      }
    ],
    calculate: (inputs) => {
      const val = parseFloat(inputs.value) || 0;
      const from = inputs.fromUnit;
      const to = inputs.toUnit;
      
      // normalize to sqft
      let sqft = val;
      if (from === 'sqm') sqft = val * 10.7639;
      if (from === 'acre') sqft = val * 43560;

      // convert to target
      let output = sqft;
      if (to === 'sqm') output = sqft / 10.7639;
      if (to === 'acre') output = sqft / 43560;

      return { convertedValue: Math.round(output * 100) / 100 };
    },
    outputLabels: {
      convertedValue: "Converted Area Value"
    },
    explanatoryContent: "..."
  },
  {
    id: "volume-converter",
    name: "Volume Unit Converter",
    category: "Unit Conversion",
    description: "Convert between cubic meters, cubic feet, liters, and standard construction brass.",
    seoKeywords: ["Volume Converter", "cft to cum converter", "brass to cft online"],
    inputs: [
      { name: "value", label: "Volume Value", type: "number", defaultValue: 10 },
      {
        name: "fromUnit",
        label: "Convert From",
        type: "select",
        defaultValue: "brass",
        options: [
          { value: "cft", label: "Cubic Feet (Cft)" },
          { value: "cum", label: "Cubic Meters (Cu.M)" },
          { value: "brass", label: "Construction Brass" }
        ]
      },
      {
        name: "toUnit",
        label: "Convert To",
        type: "select",
        defaultValue: "cft",
        options: [
          { value: "cft", label: "Cubic Feet (Cft)" },
          { value: "cum", label: "Cubic Meters (Cu.M)" },
          { value: "brass", label: "Construction Brass" }
        ]
      }
    ],
    calculate: (inputs) => {
      const val = parseFloat(inputs.value) || 0;
      const from = inputs.fromUnit;
      const to = inputs.toUnit;
      
      // normalize to cft
      let cft = val;
      if (from === 'cum') cft = val * 35.3147;
      if (from === 'brass') cft = val * 100; // 1 brass = 100 cft

      // convert to target
      let output = cft;
      if (to === 'cum') output = cft / 35.3147;
      if (to === 'brass') output = cft / 100;

      return { convertedVolume: Math.round(output * 100) / 100 };
    },
    outputLabels: {
      convertedVolume: "Converted Volume Value"
    },
    explanatoryContent: "..."
  },
  {
    id: "weight-converter",
    name: "Weight Unit Converter",
    category: "Unit Conversion",
    description: "Convert weight measurements (kilograms, tons, quintals, and pounds).",
    seoKeywords: ["Weight Converter", "kg to tons online", "quintal to kg converter"],
    inputs: [
      { name: "value", label: "Weight Value", type: "number", defaultValue: 1000 },
      {
        name: "fromUnit",
        label: "Convert From",
        type: "select",
        defaultValue: "kg",
        options: [
          { value: "kg", label: "Kilograms (Kg)" },
          { value: "ton", label: "Metric Tons" },
          { value: "quintal", label: "Quintals" }
        ]
      },
      {
        name: "toUnit",
        label: "Convert To",
        type: "select",
        defaultValue: "ton",
        options: [
          { value: "kg", label: "Kilograms (Kg)" },
          { value: "ton", label: "Metric Tons" },
          { value: "quintal", label: "Quintals" }
        ]
      }
    ],
    calculate: (inputs) => {
      const val = parseFloat(inputs.value) || 0;
      const from = inputs.fromUnit;
      const to = inputs.toUnit;
      
      let kg = val;
      if (from === 'ton') kg = val * 1000;
      if (from === 'quintal') kg = val * 100;

      let output = kg;
      if (to === 'ton') output = kg / 1000;
      if (to === 'quintal') output = kg / 100;

      return { convertedWeight: Math.round(output * 100) / 100 };
    },
    outputLabels: {
      convertedWeight: "Converted Weight Value"
    },
    explanatoryContent: "..."
  },
  {
    id: "length-converter",
    name: "Length Unit Converter",
    category: "Unit Conversion",
    description: "Convert lengths between meters, feet, inches, and yards.",
    seoKeywords: ["Length Converter", "meters to feet converter", "inches to meters online"],
    inputs: [
      { name: "value", label: "Length Value", type: "number", defaultValue: 100 },
      {
        name: "fromUnit",
        label: "Convert From",
        type: "select",
        defaultValue: "m",
        options: [
          { value: "m", label: "Meters (M)" },
          { value: "ft", label: "Feet (Ft)" },
          { value: "inch", label: "Inches (In)" }
        ]
      },
      {
        name: "toUnit",
        label: "Convert To",
        type: "select",
        defaultValue: "ft",
        options: [
          { value: "m", label: "Meters (M)" },
          { value: "ft", label: "Feet (Ft)" },
          { value: "inch", label: "Inches (In)" }
        ]
      }
    ],
    calculate: (inputs) => {
      const val = parseFloat(inputs.value) || 0;
      const from = inputs.fromUnit;
      const to = inputs.toUnit;
      
      let m = val;
      if (from === 'ft') m = val * 0.3048;
      if (from === 'inch') m = val * 0.0254;

      let output = m;
      if (to === 'ft') output = m / 0.3048;
      if (to === 'inch') output = m / 0.0254;

      return { convertedLength: Math.round(output * 100) / 100 };
    },
    outputLabels: {
      convertedLength: "Converted Length Value"
    },
    explanatoryContent: "..."
  },
  {
    id: "construction-unit-converter",
    name: "Construction Unit Converter",
    category: "Unit Conversion",
    description: "Specialized converter for core construction values like bags-to-cft or brass-to-cft.",
    seoKeywords: ["Construction Unit Converter", "bags to cubic feet", "brass to cft"],
    inputs: [
      { name: "bags", label: "Cement Bags Count", type: "number", defaultValue: 50 }
    ],
    calculate: (inputs) => {
      const bags = parseFloat(inputs.bags) || 0;
      // 1 cement bag is 1.226 cubic feet (or 0.0347 cubic meters)
      const cft = Math.round(bags * 1.226 * 10) / 10;
      return { volumeCft: cft, volumeCum: Math.round(bags * 0.0347 * 100) / 100 };
    },
    outputLabels: {
      volumeCft: "Equivalent Volume in Cubic Feet (Cft)",
      volumeCum: "Equivalent Volume in Cubic Meters (Cu.M)"
    },
    explanatoryContent: "..."
  },
  {
    id: "material-waste-calc",
    name: "Material Waste Calculator",
    category: "Advanced",
    description: "Determine wasted quantities and associated financial loss values.",
    seoKeywords: ["construction waste estimator", "material wastage loss"],
    inputs: [
      { name: "qty", label: "Total Material Purchased (Units/Kg/Bags)", type: "number", defaultValue: 500 },
      { name: "cost", label: "Unit Cost (INR)", type: "number", defaultValue: 400 },
      { name: "waste", label: "Expected Waste Rate (%)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const qty = parseFloat(inputs.qty) || 0;
      const cost = parseFloat(inputs.cost) || 0;
      const waste = parseFloat(inputs.waste) || 0;
      
      const wastedQty = qty * (waste / 100);
      const loss = wastedQty * cost;

      return { wastedQty: Math.round(wastedQty), financialLoss: "₹" + Math.round(loss).toLocaleString('en-IN') };
    },
    outputLabels: {
      wastedQty: "Wasted Material Volume (Units)",
      financialLoss: "Wasted Material Cost Loss"
    },
    explanatoryContent: "..."
  },
  {
    id: "project-timeline-calc",
    name: "Project Timeline Estimator",
    category: "Advanced",
    description: "Estimate construction phase durations based on crew sizes.",
    seoKeywords: ["construction schedule calculator", "project timeline planner"],
    inputs: [
      { name: "area", label: "Built-up Area (Sq.Ft)", type: "number", defaultValue: 2000 },
      { name: "crew", label: "Construction Crew Size (Workers)", type: "number", defaultValue: 10 }
    ],
    calculate: (inputs) => {
      const area = parseFloat(inputs.area) || 0;
      const crew = parseFloat(inputs.crew) || 10;
      // Rough sizing: 1 worker handles ~2 sq ft per day of complete construction stages
      const totalDays = Math.ceil(area / (crew * 2));
      return { estimatedDurationDays: totalDays, estimatedDurationMonths: Math.round(totalDays / 30 * 10) / 10 };
    },
    outputLabels: {
      estimatedDurationDays: "Expected Work Days Needed",
      estimatedDurationMonths: "Expected Calendar Months"
    },
    explanatoryContent: "..."
  },
  {
    id: "carbon-footprint-calc",
    name: "Material Carbon Footprint Calculator",
    category: "Advanced",
    description: "Estimate carbon dioxide (CO2) footprint generated by your material choices.",
    seoKeywords: ["building carbon calculator", "embodied carbon emissions estimator"],
    inputs: [
      { name: "cement", label: "Cement Bags (Count)", type: "number", defaultValue: 200 },
      { name: "steel", label: "Steel Used (Kg)", type: "number", defaultValue: 1000 }
    ],
    calculate: (inputs) => {
      const c = parseFloat(inputs.cement) || 0;
      const s = parseFloat(inputs.steel) || 0;
      // 1 bag of cement generates approx 40kg of CO2. 1kg steel generates ~1.8kg of CO2.
      const totalCO2 = (c * 40) + (s * 1.85);
      return { co2Kg: Math.round(totalCO2), co2Tons: Math.round(totalCO2 / 1000 * 100) / 100 };
    },
    outputLabels: {
      co2Kg: "Total Carbon Emissions (Kg of CO2)",
      co2Tons: "Total Carbon Emissions (Tons of CO2)"
    },
    explanatoryContent: "..."
  },
  {
    id: "material-lifespan-calc",
    name: "Material Lifespan Calculator",
    category: "Advanced",
    description: "Determine expected material operational spans based on environmental exposure.",
    seoKeywords: ["building materials life cycle", "durability exposure planner"],
    inputs: [
      {
        name: "material",
        label: "Material Base",
        type: "select",
        defaultValue: "concrete",
        options: [
          { value: "concrete", label: "Concrete / RCC structures" },
          { value: "wood", label: "Timber / Wooden joinery" },
          { value: "steel", label: "Exposed Steel structural elements" }
        ]
      },
      {
        name: "exposure",
        label: "Environmental Exposure",
        type: "select",
        defaultValue: "coastal",
        options: [
          { value: "inland", label: "Dry / Inland Mild climate" },
          { value: "coastal", label: "Humid / Coastal Marine air" }
        ]
      }
    ],
    calculate: (inputs) => {
      const mat = inputs.material;
      const exp = inputs.exposure;
      
      let life = 50;
      if (mat === 'concrete') life = exp === 'coastal' ? 60 : 100;
      if (mat === 'wood') life = exp === 'coastal' ? 15 : 30;
      if (mat === 'steel') life = exp === 'coastal' ? 10 : 40;

      return { expectedLifeYears: life, maintenanceIntervalYears: Math.round(life / 5) };
    },
    outputLabels: {
      expectedLifeYears: "Expected Operational Life (Years)",
      maintenanceIntervalYears: "Recommended Maintenance Interval (Years)"
    },
    explanatoryContent: "..."
  },
  {
    id: "roi-solar-calc",
    name: "Solar ROI Payback Calculator",
    category: "Advanced",
    description: "Calculate Return on Investment (ROI) and payback years for solar installation.",
    seoKeywords: ["solar roi calculator", "solar panel payback period"],
    inputs: [
      { name: "cost", label: "System Installation Cost (INR)", type: "number", defaultValue: 150000 },
      { name: "savings", label: "Estimated Monthly Bill Savings (INR)", type: "number", defaultValue: 3000 }
    ],
    calculate: (inputs) => {
      const cost = parseFloat(inputs.cost) || 0;
      const savings = parseFloat(inputs.savings) || 0;
      
      const annualSavings = savings * 12;
      const payback = Math.round((cost / annualSavings) * 10) / 10;
      const tenYearReturn = Math.round(((annualSavings * 10 - cost) / cost) * 100);

      return { paybackYears: payback, tenYearRoiPercent: tenYearReturn };
    },
    outputLabels: {
      paybackYears: "System Payback Period (Years)",
      tenYearRoiPercent: "Net 10-Year Return on Investment (%)"
    },
    explanatoryContent: "..."
  }
];
