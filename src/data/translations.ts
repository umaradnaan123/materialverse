export type Language = 'en' | 'hi' | 'te';

export interface TranslationSchema {
  // Navigation & General
  brandName: string;
  searchPlaceholder: string;
  compareTab: string;
  calculatorTab: string;
  selectorTab: string;
  bisTab: string;
  glossaryTab: string;
  bookmarksTab: string;
  langSelect: string;
  allMaterials: string;

  // Group Names
  group_Construction: string;
  group_Interior: string;
  group_Electrical: string;
  group_Tools: string;
  group_Agriculture: string;
  group_Textiles: string;
  group_Eco: string;
  group_Medical: string;

  // Detail Fields
  lifespan: string;
  durability: string;
  priceRange: string;
  ecoScore: string;
  ecoImpact: string;
  grades: string;
  standards: string;
  brands: string;
  availability: string;
  pros: string;
  cons: string;
  diyGuide: string;
  maintenance: string;
  buyingChecklist: string;
  relatedMaterials: string;
  bestFor: string;

  // Interactive Features
  addToCompare: string;
  removeFromCompare: string;
  addBookmark: string;
  removeBookmark: string;
  downloadPdf: string;
  submitReview: string;
  reviewPlaceholder: string;
  userName: string;
  reviewsTitle: string;
  noReviewsYet: string;

  // Comparison Engine
  compareTitle: string;
  compareSubtitle: string;
  selectToCompare: string;
  maxCompareLimit: string;
  compareClear: string;

  // Selector ("Best Material For...")
  selectorTitle: string;
  selectorSubtitle: string;
  purposeLabel: string;
  budgetLabel: string;
  durabilityLabel: string;
  ecoLabel: string;
  findBestButton: string;
  resultsTitle: string;

  // Calculators Hub
  calcTitle: string;
  calcSubtitle: string;
  cementCalc: string;
  paintCalc: string;
  tilesCalc: string;
  calculateBtn: string;
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    brandName: "Materialpedia",
    searchPlaceholder: "Search 60+ materials (e.g. Cement, Silk, Solar panels)...",
    compareTab: "Compare Engine",
    calculatorTab: "Calculators",
    selectorTab: "Material Finder",
    bisTab: "BIS Reference",
    glossaryTab: "Glossary & FAQ",
    bookmarksTab: "My Bookmarks",
    langSelect: "Language",
    allMaterials: "All Materials",

    group_Construction: "Construction",
    group_Interior: "Interior & Finishes",
    group_Electrical: "Electrical & Utilities",
    group_Tools: "Tools & Hardware",
    group_Agriculture: "Agriculture",
    group_Textiles: "Textiles & Fashion",
    group_Eco: "Eco, Smart & Stationery",
    group_Medical: "Medical & Laboratory",

    lifespan: "Estimated Lifespan",
    durability: "Durability Rating",
    priceRange: "Price Segment",
    ecoScore: "Sustainability (Eco Score)",
    ecoImpact: "Environmental Impact",
    grades: "Quality Grades",
    standards: "BIS / ISI Certification Standards",
    brands: "Top Manufacturers & Brands",
    availability: "Regional Availability",
    pros: "Advantages",
    cons: "Disadvantages",
    diyGuide: "DIY Installation Guide",
    maintenance: "Maintenance & Troubleshooting Tips",
    buyingChecklist: "Buying Verification Checklist",
    relatedMaterials: "Related Materials",
    bestFor: "Best Utilized For",

    addToCompare: "Add to Compare",
    removeFromCompare: "Remove Compare",
    addBookmark: "Bookmark Material",
    removeBookmark: "Bookmarked",
    downloadPdf: "Download PDF Guide",
    submitReview: "Post Static Review",
    reviewPlaceholder: "Share your experience with this material...",
    userName: "Your Name",
    reviewsTitle: "Community & Expert Reviews",
    noReviewsYet: "No reviews yet. Be the first to add your static feedback!",

    compareTitle: "Material Comparison Matrix",
    compareSubtitle: "Compare specs, ratings, and certifications side-by-side to make the right choice.",
    selectToCompare: "Select a material to compare",
    maxCompareLimit: "You can compare up to 3 materials at once.",
    compareClear: "Reset Matrix",

    selectorTitle: "Best Material For...",
    selectorSubtitle: "Answer a few questions to find the ideal material for your project.",
    purposeLabel: "Select Project Purpose / Use Case",
    budgetLabel: "Target Budget Level",
    durabilityLabel: "Required Durability Priority",
    ecoLabel: "Eco-Friendly / Sustainability Priority",
    findBestButton: "Find Best Materials",
    resultsTitle: "Recommended Materials For You",

    calcTitle: "Material Estimation Calculators",
    calcSubtitle: "Accurate physical quantity estimators for standard residential works.",
    cementCalc: "Cement & Sand Calculator (Mortar/Concrete)",
    paintCalc: "Wall Paint Quantity Estimator",
    tilesCalc: "Floor Tiles & Spacers Estimator",
    calculateBtn: "Calculate Quantities"
  },
  hi: {
    brandName: "मटेरियलपीडिया",
    searchPlaceholder: "60+ सामग्रियों को खोजें (जैसे: सीमेंट, रेशम, सोलर पैनल)...",
    compareTab: "तुलना इंजन",
    calculatorTab: "कैलकुलेटर",
    selectorTab: "सामग्री खोजक",
    bisTab: "BIS मानक",
    glossaryTab: "शब्दावली और FAQ",
    bookmarksTab: "मेरे बुकमार्क",
    langSelect: "भाषा",
    allMaterials: "सभी सामग्रियां",

    group_Construction: "निर्माण सामग्री",
    group_Interior: "इंटीरियर और फिनिशिंग",
    group_Electrical: "इलेक्ट्रिकल और उपयोगिता",
    group_Tools: "औजार और हार्डवेयर",
    group_Agriculture: "कृषि और बागवानी",
    group_Textiles: "कपड़ा और फैशन",
    group_Eco: "इको, स्मार्ट और स्टेशनरी",
    group_Medical: "चिकित्सा और प्रयोगशाला",

    lifespan: "अनुमानित जीवनकाल",
    durability: "स्थायित्व रेटिंग",
    priceRange: "मूल्य श्रेणी",
    ecoScore: "पर्यावरण अनुकूलता (इको स्कोर)",
    ecoImpact: "पर्यावरणीय प्रभाव",
    grades: "गुणवत्ता ग्रेड",
    standards: "BIS / ISI राष्ट्रीय मानक",
    brands: "शीर्ष निर्माता और ब्रांड",
    availability: "क्षेत्रीय उपलब्धता",
    pros: "लाभ (फायदे)",
    cons: "हानि (नुकसान)",
    diyGuide: "DIY स्थापना गाइड",
    maintenance: "रखरखाव और समस्या निवारण",
    buyingChecklist: "खरीदारी सत्यापन चेकलिस्ट",
    relatedMaterials: "संबंधित सामग्रियां",
    bestFor: "सर्वोत्तम उपयोग",

    addToCompare: "तुलना में जोड़ें",
    removeFromCompare: "तुलना से हटाएं",
    addBookmark: "बुकमार्क करें",
    removeBookmark: "बुकमार्क किया गया",
    downloadPdf: "PDF गाइड डाउनलोड करें",
    submitReview: "समीक्षा पोस्ट करें",
    reviewPlaceholder: "इस सामग्री के साथ अपना अनुभव साझा करें...",
    userName: "आपका नाम",
    reviewsTitle: "समुदाय और विशेषज्ञ समीक्षाएं",
    noReviewsYet: "अभी तक कोई समीक्षा नहीं। अपनी प्रतिक्रिया जोड़ने वाले पहले व्यक्ति बनें!",

    compareTitle: "सामग्री तुलना मैट्रिक्स",
    compareSubtitle: "सही चुनाव करने के लिए विशिष्टताओं, रेटिंगों और प्रमाणपत्रों की तुलना करें।",
    selectToCompare: "तुलना करने के लिए सामग्री चुनें",
    maxCompareLimit: "आप एक बार में अधिकतम 3 सामग्रियों की तुलना कर सकते हैं।",
    compareClear: "मैट्रिक्स रीसेट करें",

    selectorTitle: "सर्वश्रेष्ठ सामग्री किसके लिए...",
    selectorSubtitle: "अपने प्रोजेक्ट के लिए आदर्श सामग्री खोजने के लिए कुछ प्रश्नों के उत्तर दें।",
    purposeLabel: "प्रोजेक्ट का उद्देश्य / उपयोग चुनें",
    budgetLabel: "लक्षित बजट स्तर",
    durabilityLabel: "आवश्यक स्थायित्व प्राथमिकता",
    ecoLabel: "पर्यावरण अनुकूलता प्राथमिकता",
    findBestButton: "सर्वश्रेष्ठ सामग्री खोजें",
    resultsTitle: "आपके लिए अनुशंसित सामग्रियां",

    calcTitle: "सामग्री अनुमान कैलकुलेटर",
    calcSubtitle: "मानक आवासीय कार्यों के लिए सटीक भौतिक मात्रा अनुमानक।",
    cementCalc: "सीमेंट और रेत कैलकुलेटर (मसाला/कंक्रीट)",
    paintCalc: "दीवार पेंट मात्रा अनुमानक",
    tilesCalc: "फर्श टाइल्स और स्पेसर्स अनुमानक",
    calculateBtn: "मात्रा की गणना करें"
  },
  te: {
    brandName: "మెటీరియల్‌పీడియా",
    searchPlaceholder: "60+ మెటీరియల్స్ వెతకండి (ఉదా: సిమెంట్, పట్టు, సోలార్ ప్యానెల్స్)...",
    compareTab: "పోలిక ఇంజిన్",
    calculatorTab: "కాలిక్యులేటర్లు",
    selectorTab: "మెటీరియల్ ఫైండర్",
    bisTab: "BIS రెఫరెన్స్",
    glossaryTab: "పదకోశం & FAQ",
    bookmarksTab: "నా బుక్‌మార్క్‌లు",
    langSelect: "భాష",
    allMaterials: "అన్ని మెటీరియల్స్",

    group_Construction: "నిర్మాణ రంగం",
    group_Interior: "ఇంటి అలంకరణలు",
    group_Electrical: "ఎలక్ట్రికల్ & సేవలు",
    group_Tools: "పరికరాలు & హార్డ్‌వేర్",
    group_Agriculture: "వ్యవసాయ రంగం",
    group_Textiles: "దుస్తులు & ఫ్యాషన్",
    group_Eco: "పర్యావరణం & స్మార్ట్ హోమ్",
    group_Medical: "వైద్య & ల్యాబ్ పరికరాలు",

    lifespan: "అంచనా వేసిన ఆయుష్షు",
    durability: "మన్నిక రేటింగ్",
    priceRange: "ధర విభాగం",
    ecoScore: "పర్యావరణ అనుకూలత (ఎకో స్కోర్)",
    ecoImpact: "పర్యావరణ ప్రభావం",
    grades: "నాణ్యత గ్రేడ్లు",
    standards: "BIS / ISI ప్రమాణపత్రాలు",
    brands: "ప్రముఖ బ్రాండ్లు",
    availability: "ప్రాంతీయ లభ్యత",
    pros: "ప్రయోజనాలు",
    cons: "ప్రతికూలతలు",
    diyGuide: "DIY ఇన్‌స్టాలేషన్ గైడ్",
    maintenance: "నిర్వహణ మరియు చిట్కాలు",
    buyingChecklist: "కొనుగోలు వెరిఫికేషన్ చెక్‌లిస్ట్",
    relatedMaterials: "సంబంధిత మెటీరియల్స్",
    bestFor: "అత్యుత్తమ వినియోగం",

    addToCompare: "పోలికకు జోడించు",
    removeFromCompare: "పోలికను తీసివేయి",
    addBookmark: "బుక్‌మార్క్ చేయి",
    removeBookmark: "బుక్‌మార్క్ చేయబడింది",
    downloadPdf: "PDF గైడ్ డౌన్‌లోడ్",
    submitReview: "సమీక్షను పోస్ట్ చేయి",
    reviewPlaceholder: "ఈ మెటీరియల్‌తో మీ అనుభవాన్ని పంచుకోండి...",
    userName: "మీ పేరు",
    reviewsTitle: "కమ్యూనిటీ & నిపుణుల సమీక్షలు",
    noReviewsYet: "ఇంకా సమీక్షలు లేవు. మీ సమీక్షను మొదటగా జోడించండి!",

    compareTitle: "మెటీరియల్స్ పోలిక పట్టిక",
    compareSubtitle: "సరైన నిర్ణయం తీసుకోవడానికి స్పెసిఫికేషన్స్ మరియు రేటింగ్‌లను సరిపోల్చండి.",
    selectToCompare: "పోల్చడానికి ఒక మెటీరియల్‌ని ఎంచుకోండి",
    maxCompareLimit: "మీరు ఒకేసారి గరిష్టంగా 3 మెటీరియల్‌లను పోల్చవచ్చు.",
    compareClear: "పట్టికను రీసెట్ చేయి",

    selectorTitle: "దేనికి ఏ మెటీరియల్ బెస్ట్...",
    selectorSubtitle: "మీ ప్రాజెక్ట్ కోసం సరైన మెటీరియల్‌ని కనుగొనడానికి కొన్ని ప్రశ్నలకు సమాధానం ఇవ్వండి.",
    purposeLabel: "ప్రాజెక్ట్ ఉద్దేశాన్ని ఎంచుకోండి",
    budgetLabel: "బడ్జెట్ పరిమితి",
    durabilityLabel: "మన్నిక ప్రాధాన్యత",
    ecoLabel: "ఎకో-ఫ్రెండ్లీ ప్రాధాన్యత",
    findBestButton: "ఉత్తమ మెటీరియల్స్ కనుగొను",
    resultsTitle: "మీ కోసం సిఫార్సు చేయబడిన మెటీరియల్స్",

    calcTitle: "మెటీరియల్ ఎస్టిమేషన్ కాలిక్యులేటర్లు",
    calcSubtitle: "నివాస నిర్మాణ పనుల కొరకు ఖచ్చితమైన పరిమాణ అంచనా సాధనాలు.",
    cementCalc: "సిమెంట్ & ఇసుక కాలిక్యులేటర్ (మట్టి/కాంక్రీట్)",
    paintCalc: "గోడ పెయింట్ పరిమాణ అంచనా",
    tilesCalc: "ఫ్లోర్ టైల్స్ అంచనా సాధనం",
    calculateBtn: "పరిమాణాన్ని లెక్కించు"
  }
};
