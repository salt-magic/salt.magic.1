const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, BorderStyle, Header, Footer, PageNumber } = require('docx');

const BASE = String.raw`c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic`;
const OUT = path.join(BASE, 'outputs', 'Salt-Magic-SEO-Copy-Review-V2.docx');
const IMG_DIR_V2 = path.join(BASE, 'outputs', 'v2-screenshots');
const IMG_DIR_SCREENSHOTS = path.join(BASE, 'outputs', 'section-screenshots');
const IMG_DIR_VISUAL = path.join(BASE, 'outputs', 'visual-audit');

// Load image helper — tries multiple directories
function loadImage(filename) {
  const paths = [
    path.join(IMG_DIR_V2, filename),
    path.join(IMG_DIR_VISUAL, filename),
    path.join(IMG_DIR_SCREENSHOTS, filename),
  ];
  for (const p of paths) {
    if (fs.existsSync(p)) return fs.readFileSync(p);
  }
  console.warn(`  MISSING: ${filename}`);
  return null;
}

function imageToRun(data, title, imgW = 620) {
  if (!data) return null;
  let imgH = Math.round(imgW * 0.625); // default aspect
  if (data.length > 24 && data[0] === 0x89 && data[1] === 0x50) {
    const w = data.readUInt32BE(16), h = data.readUInt32BE(20);
    imgH = Math.round((h / w) * imgW);
  }
  return new ImageRun({
    type: "png", data,
    transformation: { width: imgW, height: imgH },
    altText: { title, description: `Screenshot of ${title}`, name: title }
  });
}

// ============================================================
// KEYWORD CLUSTERS
// ============================================================
const CLUSTERS = {
  fasting: "Fasting & Clean Keto",
  heat: "Heavy Sweaters & Hot Climates",
  purity: "Clean Ingredients & Purity",
  formulation: "Specific Formulation",
  travel: "Travel, Recovery & Wellness",
  geo: "Geo-Targeting Thailand (recommended)"
};

// ============================================================
// HIGHLIGHT HELPER — splits text at keyword boundaries,
// returns TextRun[] with green-bold for keyword matches
// ============================================================
function highlightKeywords(text, keywords) {
  if (!keywords || keywords.length === 0) {
    return [new TextRun({ text, font: "Arial", size: 20, color: "333333" })];
  }
  // Sort keywords longest-first to avoid partial matches
  const sorted = [...keywords].sort((a, b) => b.length - a.length);
  const escaped = sorted.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escaped.join('|')})`, 'gi');
  const parts = text.split(regex);
  const runs = [];
  for (const part of parts) {
    if (!part) continue;
    const isKw = sorted.some(k => k.toLowerCase() === part.toLowerCase());
    if (isKw) {
      runs.push(new TextRun({ text: part, font: "Arial", size: 20, color: "2E7D32", bold: true, underline: { type: "single" } }));
    } else {
      runs.push(new TextRun({ text: part, font: "Arial", size: 20, color: "333333" }));
    }
  }
  return runs.length ? runs : [new TextRun({ text, font: "Arial", size: 20, color: "333333" })];
}

// ============================================================
// SECTION DATA — current copy (from live V2 site) + suggested SEO copy
// ============================================================
const sections = [

  // ===== 1. META / SEO TAGS =====
  {
    title: "1. Meta / SEO Tags",
    screenshots: ["v2-01-nav-hero.png"],
    infoBox: [
      "WHAT ARE THESE? These are invisible text fields in your website's code that control how your site appears across different platforms:",
      "",
      "Title — The clickable headline shown in Google search results. Should be under 60 characters.",
      "Meta Description — The preview text below the title in Google search results. Should be under 160 characters.",
      "OG (Open Graph) Description — The text that appears when someone shares your website link on Facebook, LinkedIn, WhatsApp, iMessage, or Slack. Controls the link preview card.",
      "Twitter Description — Same as OG, but specifically for X/Twitter link preview cards.",
      "JSON-LD — Invisible structured data that Google reads to show rich snippets (product prices, star ratings, company info) in search results. Visitors never see this text on your website — it's only for search engines and AI search tools.",
    ],
    currentCopy: [
      "[Title] Salt.Magic - Thailand's Natural Electrolyte Mineralizer",
      "[Meta Description] Salt.Magic restores essential minerals to your water with 3 natural ingredients - 312mg magnesium, zero sugar, zero additives. Trusted daily by thousands across Thailand.",
      "[OG Description] 3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving. The daily electrolyte Thailand trusts.",
      "[Twitter Description] 3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving.",
      "",
      "[JSON-LD Organization] Thailand's premier all-natural daily electrolyte mineralizer. Three natural ingredients, zero sugar, zero additives.",
      "[JSON-LD Product 1] Premium glass jar with 70 servings of natural electrolyte mineralizer. 312mg magnesium, zero sugar, flavorless. Crafted on Koh Samui.",
      "[JSON-LD Product 2] Portable resealable pouch with 30 servings of natural electrolyte mineralizer. 312mg magnesium, zero sugar, GMP/HACCP certified."
    ],
    suggestedCopy: [
      "[Title] Salt.Magic | Natural Electrolyte Powder - Thailand",
      "[Meta Description] Salt.Magic is Thailand's best natural electrolyte powder. 312mg magnesium, potassium, and Himalayan pink salt. Zero sugar, unflavored, additive free. Buy electrolytes in Thailand.",
      "[OG Description] Natural electrolyte powder with 312mg magnesium, potassium, and pink Himalayan salt. Zero sugar, zero additives. Thailand's trusted daily electrolyte supplement.",
      "[Twitter Description] Natural electrolyte powder - 312mg magnesium, zero sugar, unflavored. Thailand's clean hydration mix.",
      "",
      "[JSON-LD Organization] Thailand's premier natural electrolyte powder and daily mineral supplement. A balanced electrolyte formula with three natural ingredients, zero sugar, zero additives. The best electrolytes in Thailand for daily wellness.",
      "[JSON-LD Product 1] Signature Glass Jar - 70 servings of natural electrolyte powder with Himalayan pink salt. A magnesium potassium electrolyte mix with 312mg magnesium citrate, sugar free, flavorless. Crafted on Koh Samui.",
      "[JSON-LD Product 2] Travel Sachet - 30 servings of portable electrolyte powder for travel. A sugar free hydration powder with 312mg magnesium citrate, GMP/HACCP certified. Perfect hydration packets for flying and on-the-go wellness."
    ],
    keywordsInText: [
      "natural electrolyte powder", "sugar free hydration powder", "balanced electrolyte formula",
      "magnesium potassium electrolyte mix", "electrolyte powder with magnesium citrate",
      "daily electrolyte supplement", "clean hydration mix", "unflavored electrolyte powder",
      "additive free", "electrolyte powder for travel", "hydration packets for flying",
      "himalayan pink salt",
      "best electrolytes in Thailand", "buy electrolytes in Thailand"
    ],
    keywords: [
      { keyword: "natural electrolyte powder", cluster: "purity" },
      { keyword: "sugar free hydration powder", cluster: "purity" },
      { keyword: "balanced electrolyte formula", cluster: "formulation" },
      { keyword: "magnesium potassium electrolyte mix", cluster: "formulation" },
      { keyword: "electrolyte powder with magnesium citrate", cluster: "formulation" },
      { keyword: "daily electrolyte supplement", cluster: "travel" },
      { keyword: "clean hydration mix", cluster: "purity" },
      { keyword: "unflavored electrolyte powder", cluster: "purity" },
      { keyword: "additive free", cluster: "purity" },
      { keyword: "electrolyte powder for travel", cluster: "travel" },
      { keyword: "hydration packets for flying", cluster: "travel" },
      { keyword: "himalayan pink salt", cluster: "formulation" },
      { keyword: "best electrolytes in Thailand", cluster: "geo" },
      { keyword: "buy electrolytes in Thailand", cluster: "geo" }
    ],
    rationale: "Meta tags are the highest-impact SEO lever. Title and description are displayed in search results and must contain the top keywords. JSON-LD product descriptions are used by Google for rich snippets. GEO-TARGETING: Added 'best electrolytes in Thailand' and 'buy electrolytes in Thailand' to capture local purchase-intent searches."
  },

  // ===== 2. ANNOUNCEMENT BAR =====
  {
    title: "2. Announcement Bar",
    screenshots: ["v2-01-nav-hero.png"],
    currentCopy: [
      "[Marquee Message 1] 100% Natural - Zero Sugar - Zero Flavor",
      "[Marquee Message 2] 5 Years Trusted - 90% Retention - 160+ Locations",
      "[Marquee Message 3] Mineralize Your Water, Everywhere."
    ],
    suggestedCopy: [
      "[No changes recommended]",
      "[Marquee Message 1] 100% Natural - Zero Sugar - Zero Flavor",
      "[Marquee Message 2] 5 Years Trusted - 90% Retention - 160+ Locations",
      "[Marquee Message 3] Mineralize Your Water, Everywhere."
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "No changes. The marquee is JS-rendered and rarely indexed by crawlers. Keep it focused on trust signals and brand messaging rather than SEO keywords."
  },

  // ===== 3. HERO =====
  {
    title: "3. Hero",
    screenshots: ["v2-01-hero.png"],
    currentCopy: [
      "[Eyebrow] Mineralize Your Water, Everywhere.",
      "[H1] Your water is missing what your body needs most.",
      "[Body] 85% of bottled water in Thailand is \"dead water\" - purified, but nutritionally empty. Your body deserves better.",
      "[Primary CTA] Bring Your Water Back to Life",
      "[Secondary CTA] Learn More"
    ],
    suggestedCopy: [
      "[Eyebrow] Natural Electrolyte Powder - Mineralize Your Water, Everywhere.",
      "[H1] Your water is missing what your body needs most.",
      "[Body] 85% of bottled water in Thailand is \"dead water\" - purified, but nutritionally empty. One scoop of pure hydration powder brings it back. No sugar. No flavor. Just minerals your body actually absorbs.",
      "[Primary CTA] Bring Your Water Back to Life",
      "[Secondary CTA] Learn More"
    ],
    keywordsInText: [
      "natural electrolyte powder", "pure hydration powder"
    ],
    keywords: [
      { keyword: "natural electrolyte powder", cluster: "purity" },
      { keyword: "pure hydration powder", cluster: "purity" }
    ],
    rationale: "H1 stays unchanged (emotionally strong). Eyebrow and body text absorb the most important purity keywords without losing the premium tone."
  },

  // ===== 4. WHY SECTION =====
  {
    title: "4. Why Section (The Problem)",
    screenshots: ["v2-03-why-section.png"],
    currentCopy: [
      "[Eyebrow] The Problem",
      "[H2] Your water is missing what your body needs most",
      "[Body] 85% of bottled water in Thailand goes through reverse osmosis, stripping away essential natural minerals. The result is \"dead water\" - purified, but nutritionally empty.",
      "[Body] Your body needs magnesium for energy, recovery, and daily vitality. Yet, the water you drink provides almost none of it, leaving you constantly depleted.",
      "[Pull Quote] 50% of people worldwide are magnesium deficient. Your water could be why.",
      "[Badges] Zero Sugar | 100% Natural | 7x Magnesium"
    ],
    suggestedCopy: [
      "[Eyebrow] The Problem",
      "[H2] Your water is missing what your body needs most",
      "[Body] 85% of bottled water in Thailand goes through reverse osmosis, stripping away essential natural minerals. The result is \"dead water\" - purified, but nutritionally empty. When hydration for hot weather matters most, the water you rely on delivers the least.",
      "[Body] Your body needs magnesium for energy, recovery, and daily vitality. Without it, true cellular hydration never happens - you lose trace minerals through sweat, air conditioning, and everyday stress, and your body can't replace them from water alone.",
      "[Pull Quote] 50% of people worldwide are magnesium deficient. Your water could be why.",
      "[Badges] Zero Sugar | 100% Natural | 7x Magnesium"
    ],
    keywordsInText: [
      "hydration for hot weather", "cellular hydration", "trace minerals"
    ],
    keywords: [
      { keyword: "hydration for hot weather", cluster: "heat" },
      { keyword: "cellular hydration powder", cluster: "travel" },
      { keyword: "trace minerals electrolyte powder", cluster: "formulation" }
    ],
    rationale: "The tropical context allows natural integration of hot-climate and cellular-hydration keywords. Pull quote and badges remain unchanged."
  },

  // ===== 4B. GEO: KEY FACTS BLOCK (NEW) =====
  {
    title: "4B. GEO Recommendation: Key Facts Block (NEW)",
    screenshots: [],
    currentCopy: [
      "[No existing section — this is a new addition recommended for AI search visibility]"
    ],
    suggestedCopy: [
      "[Placement] After WhySection or after TrustBand — as a structured, citable block",
      "[Format] Bullet list or definition list in HTML",
      "",
      "Key Facts about Salt.Magic:",
      "- 3 natural ingredients: Magnesium Citrate (312mg), Potassium Citrate (160mg), Pink Himalayan Salt (152mg)",
      "- Zero sugar, zero sweeteners, unflavored electrolyte powder",
      "- 7x more magnesium than leading competitors",
      "- 490 THB / 70 servings (Signature Glass Jar) or 290 THB / 30 servings (Travel Sachet)",
      "- Trusted by 160+ locations across Thailand since 2021",
      "- Fasting-safe, keto-friendly, suitable for all ages",
      "",
      "[Implementation] Add as visually minimal section or sr-only structured data block"
    ],
    keywordsInText: [
      "unflavored electrolyte powder"
    ],
    keywords: [
      { keyword: "unflavored electrolyte powder", cluster: "purity" }
    ],
    rationale: "GEO recommendation: Structured fact blocks increase AI citation rate by ~35% (Generative Engine Optimization framework). AI search engines (ChatGPT, Perplexity, Google AI Overviews) extract and cite self-contained fact lists. This block gives AI crawlers a clean, citable summary of Salt.Magic's core attributes. Can be implemented as a visible section or as sr-only structured data."
  },

  // ===== 5. THE FORMULA + INGREDIENTS =====
  {
    title: "5. The Formula + Ingredients",
    screenshots: ["v2-04-formula-ingredients.png"],
    currentCopy: [
      "[Eyebrow] The Formula",
      "[H2] The Invisible Upgrade",
      "[Body] Everything your water is missing. Nothing you can taste.",
      "[Body] Just 2 grams of pure, highly bioavailable minerals. It dissolves instantly, is completely flavorless, and delivers 7x more magnesium than leading competitors. Three natural ingredients. Zero junk.",
      "",
      "[Ingredient 1] 312mg - Magnesium Citrate - For deep sleep, fast muscle recovery, and calm, mental clarity.",
      "[Ingredient 2] 160mg - Potassium Citrate - For sustained energy, cramp prevention, and perfect hydration.",
      "[Ingredient 3] 152mg - Pink Himalayan Salt - For complete balance, delivering essential sodium and 84 vital trace minerals."
    ],
    suggestedCopy: [
      "[Eyebrow] The Formula",
      "[H2] Balanced Electrolyte Formula You Can't Taste",
      "[Body] Everything your water is missing. Nothing you can taste.",
      "[Body] Just 2 grams - a balanced formula of magnesium, potassium, and Himalayan pink salt. This magnesium potassium electrolyte mix dissolves instantly, is completely unflavored and additive free, and delivers 7x more magnesium than leading competitors. Three natural ingredients. Zero junk.",
      "",
      "[Ingredient 1] 312mg - Magnesium Citrate - For deep sleep, fast muscle recovery, and calm mental clarity. The most bioavailable form of magnesium citrate.",
      "[Ingredient 2] 160mg - Potassium Citrate - For sustained energy, muscle cramp relief, and natural fluid balance. A potassium-rich mineral your body depletes every day.",
      "[Ingredient 3] 152mg - Pink Himalayan Salt - For complete balance, delivering essential sodium and 84 vital trace minerals. Natural rehydration salts your body recognizes instantly."
    ],
    keywordsInText: [
      "balanced electrolyte formula", "magnesium potassium electrolyte mix",
      "unflavored", "additive free", "electrolyte powder with magnesium citrate",
      "potassium rich hydration powder", "muscle cramp relief",
      "natural fluid balance", "natural rehydration salts",
      "himalayan pink salt", "trace minerals"
    ],
    keywords: [
      { keyword: "balanced electrolyte formula", cluster: "formulation" },
      { keyword: "magnesium potassium electrolyte mix", cluster: "formulation" },
      { keyword: "electrolyte powder with magnesium citrate", cluster: "formulation" },
      { keyword: "potassium rich hydration powder", cluster: "formulation" },
      { keyword: "natural rehydration salts", cluster: "heat" },
      { keyword: "muscle cramp relief powder", cluster: "heat" },
      { keyword: "natural fluid balance supplement", cluster: "travel" },
      { keyword: "additive free electrolytes", cluster: "purity" },
      { keyword: "unflavored electrolyte powder", cluster: "purity" },
      { keyword: "himalayan pink salt electrolyte powder", cluster: "formulation" },
      { keyword: "trace minerals electrolyte powder", cluster: "formulation" }
    ],
    rationale: "The ingredients section is the most natural place for formulation keywords. Each ingredient receives matching long-tail keywords that refine the existing benefit descriptions."
  },

  // ===== 6. COMPARISON =====
  {
    title: "6. Comparison",
    screenshots: ["v2-05-comparison.png"],
    currentCopy: [
      "[Eyebrow] How We Compare",
      "[H2] The Clear Choice",
      "[Body] Maximum minerals. Zero junk. See how we stack up.",
      "",
      "[Salt.Magic] 0g sugar | 312mg magnesium | 3 natural minerals",
      "[Verdict] Clean, daily hydration without the sugar crash.",
      "",
      "[Sports Drinks] 27g+ added sugar | 0-25mg magnesium | Artificial colors & flavors",
      "[Verdict] High in sugar, low in actual electrolytes.",
      "",
      "[Coconut Water] 28g sugar | ~15mg magnesium | Natural, but unbalanced",
      "[Verdict] Too much sugar for optimal daily hydration.",
      "",
      "[Other Mixes] Up to 11g added sugar | 0-50mg magnesium | Synthetic blends",
      "[Verdict] Under-dosed and often full of fillers.",
      "",
      "[Footnote] Based on a 2g serving of Salt.Magic vs typical 16oz servings"
    ],
    suggestedCopy: [
      "[Eyebrow] How We Compare",
      "[H2] Clean Hydration, Clear Winner",
      "[Body] Whether you want the best electrolyte powder for athletes, fasting, or daily wellness in Thailand - here's how we stack up. Maximum minerals. Zero junk.",
      "",
      "[Salt.Magic] 0g sugar | 312mg magnesium | 3 natural minerals | Zero calorie electrolyte powder",
      "[Verdict] A clean hydration mix you can take every day. No sweeteners. No artificial anything. Additive free - the way electrolytes should be.",
      "",
      "[Sports Drinks] 27g+ added sugar | 0-25mg magnesium | Artificial colors & flavors",
      "[Verdict] High in sugar, low in actual electrolytes. Not a healthy electrolyte drink.",
      "",
      "[Coconut Water] 28g sugar | ~15mg magnesium | Natural, but unbalanced",
      "[Verdict] Too much sugar for optimal daily hydration. Not suitable for fasting or keto.",
      "",
      "[Other Mixes] Up to 11g added sugar | 0-50mg magnesium | Synthetic blends",
      "[Verdict] Under-dosed, artificial, and not a pure hydration powder. Often full of fillers.",
      "",
      "[Footnote] Based on a 2g serving of Salt.Magic vs typical 16oz servings"
    ],
    keywordsInText: [
      "clean hydration", "best electrolyte powder for athletes", "zero calorie electrolyte powder",
      "clean hydration mix", "additive free",
      "healthy electrolyte drink", "pure hydration powder"
    ],
    keywords: [
      { keyword: "best electrolyte powder for athletes", cluster: "heat" },
      { keyword: "zero calorie electrolyte powder", cluster: "fasting" },
      { keyword: "clean hydration mix", cluster: "purity" },
      { keyword: "no sweetener electrolytes", cluster: "fasting" },
      { keyword: "additive free electrolytes", cluster: "purity" },
      { keyword: "healthy electrolyte drink", cluster: "purity" },
      { keyword: "pure hydration powder", cluster: "purity" }
    ],
    rationale: "The comparison section is ideal for differentiating keywords. The verdicts are enriched with keyword phrases that naturally work as evaluations."
  },

  // ===== 7. BENEFITS =====
  {
    title: "7. Benefits (6 Cards)",
    screenshots: ["v2-06-benefits.png"],
    currentCopy: [
      "[Eyebrow] Daily Benefits",
      "[H2] Feel the Difference",
      "[Body] What happens when your water actually works.",
      "",
      "[Card 1] True Hydration - Stop flushing water straight through your system. Give your body the minerals it needs to actually absorb every drop.",
      "[Card 2] Deeper Sleep - Magnesium is nature's relaxant. Ease muscle tension, calm your nervous system, and wake up restored.",
      "[Card 3] Sustained Focus - Clear the brain fog. Keep your mind sharp and your concentration steady without the caffeine crash.",
      "[Card 4] Travel & Heat Recovery - Replenish vital electrolytes lost to tropical heat, long flights, or simply running empty.",
      "[Card 5] Peak Performance - Push harder and recover faster. Maintain your energy and banish muscle cramps during exercise.",
      "[Card 6] Natural Hangover Defense - Woke up severely dehydrated? Instantly restore your mineral balance and bounce back faster."
    ],
    suggestedCopy: [
      "[Eyebrow] Daily Benefits",
      "[H2] Feel the Difference",
      "[Body] What happens when your water actually works.",
      "",
      "[Card 1] True Hydration - Stop flushing water straight through your system. Real cellular hydration means your body absorbs every drop - not just passes it through.",
      "[Card 2] Deeper Sleep - Magnesium is nature's relaxant. Ease muscle tension, calm your nervous system, and wake up restored.",
      "[Card 3] Sustained Focus - Clear the brain fog. Keep your mind sharp and your concentration steady without the caffeine crash.",
      "[Card 4] Travel & Heat Recovery - Tropical heat, long flights, running empty - your body loses electrolytes faster than you replace them. The hydration for hot weather and travel you actually need.",
      "[Card 5] Peak Performance - Push harder and recover faster. Maintain your energy and prevent muscle cramps before, during, and after training.",
      "[Card 6] Natural Hangover Defense - Woke up wrecked? Alcohol strips magnesium, potassium, and sodium overnight. Salt.Magic works as a natural hangover recovery drink - restoring the exact minerals you lost, fast."
    ],
    keywordsInText: [
      "cellular hydration",
      "hydration for hot weather",
      "muscle cramps", "training",
      "natural hangover recovery drink"
    ],
    keywords: [
      { keyword: "cellular hydration powder", cluster: "travel" },
      { keyword: "hydration for hot weather", cluster: "heat" },
      { keyword: "muscle cramp relief powder", cluster: "heat" },
      { keyword: "natural hangover recovery drink", cluster: "travel" }
    ],
    rationale: "Trimmed from 11 to 4 keywords. Each card gets max 1 keyword, stays under 30 words. Cards 2 and 3 unchanged — they already read naturally. Remaining keywords (post workout, training hydration mix, travel hydration supplements) are better placed in FAQ and blog content."
  },

  // ===== 8. FOR EVERYONE =====
  {
    title: "8. For Everyone",
    screenshots: ["v2-07-for-everyone.png"],
    currentCopy: [
      "[Eyebrow] For Everyone",
      "[H2] Not a Sports Drink. A Daily Essential.",
      "[Body] Pure hydration for daily life, not just game day.",
      "[Extended] Most electrolytes are packed with sugar and designed for extreme athletes to use once in a while. Salt.Magic is designed for life. Whether you're intermittent fasting, surviving the tropical heat, traveling, or just navigating a busy workday, your body burns through minerals every single day.",
      "",
      "[The Old Way - Sports Drinks]",
      "Occasional use (3-5x a week) | Built for intense workouts | Loaded with sugar & artificial colors",
      "",
      "[The Salt.Magic Way]",
      "Daily essential (365 days a year) | Built for anyone who drinks water | Pure, invisible, natural minerals"
    ],
    suggestedCopy: [
      "[Eyebrow] For Everyone",
      "[H2] Not a Sports Drink. A Daily Essential.",
      "[Body] Pure hydration for daily life, not just game day.",
      "[Extended] Most electrolytes are packed with sugar and designed for extreme athletes. Salt.Magic is different. Whether you're intermittent fasting, training Muay Thai in the tropical heat, heavy sweating through hot yoga, or simply navigating a busy workday, your body burns through minerals every single day. One clean, invisible formula for all of it.",
      "",
      "[The Old Way - Sports Drinks]",
      "Occasional use (3-5x a week) | Built for intense workouts | Loaded with sugar & artificial colors",
      "",
      "[The Salt.Magic Way]",
      "Daily essential (365 days a year) | Built for anyone who drinks water | Pure, invisible, natural minerals"
    ],
    keywordsInText: [
      "intermittent fasting", "muay thai", "hot yoga", "heavy sweating"
    ],
    keywords: [
      { keyword: "best electrolytes for intermittent fasting", cluster: "fasting" },
      { keyword: "muay thai hydration", cluster: "heat" },
      { keyword: "hot yoga electrolytes", cluster: "heat" },
      { keyword: "electrolytes for heavy sweaters", cluster: "heat" }
    ],
    rationale: "Reduced from 10 to 4 keywords. Use cases (fasting, Muay Thai, hot yoga, heavy sweating) are woven naturally into the existing sentence structure. Remaining fasting/keto keywords are better placed in FAQ Q8. H2 keeps the original 'Daily Essential' — cleaner than 'Daily Electrolyte Supplement'."
  },

  // ===== 9. PRODUCTS =====
  {
    title: "9. Products",
    screenshots: ["v2-08-products.png"],
    currentCopy: [
      "[Eyebrow] Shop Salt.Magic",
      "[H2] Ready to upgrade your water?",
      "[Body] Choose your daily ritual. Less than the cost of your morning coffee.",
      "[Badges] Zero Sugar | 100% Natural | 7x Magnesium",
      "",
      "[Product 1] The Signature Glass Jar",
      "[Tag] Best Value | 490 THB",
      "[Meta] Over 2 months of daily hydration (70 servings) - Just 7 THB per day",
      "[Description] A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Proudly crafted at our Koh Samui hub.",
      "[Badge] Eco-friendly & reusable",
      "[CTA] Shop on Lazada",
      "",
      "[Product 2] The Travel Sachet",
      "[Tag] Most Popular | 290 THB",
      "[Meta] A full month's supply (30 servings) - Just 9.6 THB per day",
      "[Description] Your daily minerals, perfectly portable. A resealable, GMP/HACCP-certified pouch built for your gym bag, office drawer, or long flights.",
      "[Badge] Lightweight & travel-ready",
      "[CTA] Shop on Lazada"
    ],
    suggestedCopy: [
      "[Eyebrow] Shop Salt.Magic",
      "[H2] Ready to Try Natural Electrolyte Powder?",
      "[Body] Choose your daily ritual. Your natural electrolyte powder in Thailand - less than the cost of your morning coffee.",
      "[Badges] Zero Sugar | 100% Natural | 7x Magnesium",
      "",
      "[Product 1] The Signature Glass Jar",
      "[Tag] Best Value | 490 THB",
      "[Meta] Over 2 months of daily hydration (70 servings) - Just 7 THB per day",
      "[Description] A beautiful glass jar with a gold lid, designed to live on your kitchen counter. Inside: Himalayan pink salt electrolyte powder - the cleanest start to your pink salt morning drink ritual. Proudly crafted at our Koh Samui hub.",
      "[Badge] Eco-friendly & reusable",
      "[CTA] Shop on Lazada",
      "",
      "[Product 2] The Travel Sachet",
      "[Tag] Most Popular | 290 THB",
      "[Meta] A full month's supply (30 servings) - Just 9.6 THB per day. Perfect travel hydration supplements.",
      "[Description] Your daily minerals, perfectly portable. An unflavored electrolyte powder in a resealable, GMP/HACCP-certified pouch - built as the electrolyte powder for travel you'll actually pack. Think of them as hydration packets for flying, the gym, the office, or anywhere life takes you.",
      "[Badge] Lightweight & travel-ready",
      "[CTA] Shop on Lazada"
    ],
    keywordsInText: [
      "natural electrolyte powder", "himalayan salt hydration drink",
      "pink salt morning drink", "unflavored electrolyte powder",
      "electrolyte powder for travel", "hydration packets for flying",
      "travel hydration supplements"
    ],
    keywords: [
      { keyword: "natural electrolyte powder", cluster: "purity" },
      { keyword: "himalayan salt hydration drink", cluster: "formulation" },
      { keyword: "pink salt morning drink", cluster: "formulation" },
      { keyword: "unflavored electrolyte powder", cluster: "purity" },
      { keyword: "electrolyte powder for travel", cluster: "travel" },
      { keyword: "hydration packets for flying", cluster: "travel" },
      { keyword: "travel hydration supplements", cluster: "travel" }
    ],
    rationale: "Product descriptions are SEO gold for transactional keywords. Glass Jar gets formulation keywords (Pink Salt, Morning Drink), Travel Sachet gets travel keywords."
  },

  // ===== 10. TESTIMONIALS =====
  {
    title: "10. Testimonials",
    screenshots: ["v2-09-testimonials.png"],
    currentCopy: [
      "[H2] Look what our customers say",
      "[CTA] Shop Now",
      "",
      "\"I've tried every electrolyte on the market. Salt.Magic is the only one I actually use every single day. No taste, no sugar, just works.\" - Sarah C., Wellness Enthusiast, Bangkok",
      "\"As a yoga instructor, I recommend Salt.Magic to all my students. The cleanest electrolyte I've found.\" - Sarah McLaughlin, Yoga Instructor, Koh Samui",
      "\"My whole family uses it - even my kids don't notice it in their water. That's the whole point.\" - Ploy, Mother of Three, Chiang Mai",
      "\"One jar lasts two months and creates zero plastic waste. Finally, a brand that matches my values.\" - Shannon Diablo, Sustainability Advocate, Phuket",
      "\"I take it before every dive. The difference in how I feel after 2-3 hours in saltwater is massive.\" - Tom W., Dive Instructor, Koh Tao"
    ],
    suggestedCopy: [
      "[H2] Look what our customers say",
      "[CTA] Shop Now",
      "",
      "[No changes - real customer quotes are not modified]"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "Testimonials are real customer quotes and are NOT changed. The existing quotes already contain naturally relevant terms (yoga, daily, cleanest electrolyte, no sugar)."
  },

  // ===== 11. STORY SECTION =====
  {
    title: "11. Story Section",
    screenshots: ["v2-10-story.png"],
    currentCopy: [
      "[Eyebrow] Our Origin",
      "[H2] The Koh Samui Story",
      "[Subheading] We noticed something was wrong with our water.",
      "[Body] Living on a tropical island, we drank more water than most - but still felt constantly depleted. We finally tested it with a TDS meter, and the results confirmed it: our daily \"purified\" water had virtually zero minerals.",
      "[Body] We couldn't find a clean electrolyte that was sugar-free, flavorless, and affordable enough for daily use. So, we made it ourselves.",
      "[Callout] What started in a kitchen on Koh Samui is now trusted by over 160 locations across Thailand.",
      "[CTA] Shop Now"
    ],
    suggestedCopy: [
      "[No changes recommended]",
      "[Eyebrow] Our Origin",
      "[H2] The Koh Samui Story",
      "[Subheading] We noticed something was wrong with our water.",
      "[Body] Living on a tropical island, we drank more water than most - but still felt constantly depleted. We finally tested it with a TDS meter, and the results confirmed it: our daily \"purified\" water had virtually zero minerals.",
      "[Body] We couldn't find a clean electrolyte that was sugar-free, flavorless, and affordable enough for daily use. So, we made it ourselves.",
      "[Callout] What started in a kitchen on Koh Samui is now trusted by over 160 locations across Thailand.",
      "[CTA] Shop Now"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "No changes. The origin story is Salt.Magic's strongest E-A-T (Expertise, Authority, Trust) signal. Keyword insertions break the authentic founder-narrative tone. The current copy already contains natural LSI keywords ('clean electrolyte,' 'sugar-free,' 'flavorless'). Protect this section."
  },

  // ===== 12. FAQ =====
  {
    title: "12. FAQ (7 existing + 3 new)",
    screenshots: ["v2-11-faq.png"],
    currentCopy: [
      "[H2] Got Questions? Let's clear the water.",
      "[Eyebrow] Questions",
      "",
      "[Q1] Is Salt.Magic just salt?",
      "[A1] No. Pink Himalayan salt makes up just 20% of the blend. The majority (over 50%) is Magnesium Citrate - the most highly bioavailable form of magnesium - and the rest is pure Potassium Citrate. No fillers.",
      "",
      "[Q2] How do I use it?",
      "[A2] Add one scoop (2g) or one travel sachet to any drink. It dissolves instantly and is completely flavorless. The Routine: Most of our users take 1-2 servings per day (once in the morning, once in the evening).",
      "",
      "[Q3] How does it compare to imported brands like LMNT or Wilder?",
      "[A3] We share the same zero-sugar, clean-ingredient philosophy as the premium US brands. The difference? We deliver 7x more magnesium per serving. Crafted locally in Thailand, you pay 7-10 THB per serving instead of the 25-40 THB import markup.",
      "",
      "[Q4] Is it safe for children?",
      "[A4] Yes, these are natural minerals safe for all ages. We recommend a half-serving (1g) for children. As always, consult your pediatrician for specific health conditions.",
      "",
      "[Q5] Where can I buy Salt.Magic?",
      "[A5] You can order directly on Lazada for nationwide delivery, or find us in 160+ locations across Thailand, including Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, and Krabi.",
      "",
      "[Q6] Why do you say 85% of Thai water is \"dead water\"?",
      "[A6] Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs to actually absorb and use that hydration.",
      "",
      "[Q7] What's the difference between \"wellness\" and \"sports\" electrolytes?",
      "[A7] Sports drinks are built for occasional, high-intensity use (3-5 times a week) and are usually packed with sugar and flavors. Salt.Magic is a daily wellness essential: pure, invisible minerals meant to be added to your water 365 days a year."
    ],
    suggestedCopy: [
      "[H2] Got Questions? Let's clear the water.",
      "[Eyebrow] Questions",
      "",
      "[Q1] Is Salt.Magic just salt?",
      "[A1] No. Himalayan pink salt makes up just 20% of the blend. The majority (over 50%) is Magnesium Citrate - the most highly bioavailable form of magnesium - and the rest is pure Potassium Citrate. Think of it as a natural pink salt hydration formula, not just salt. No fillers, no additives, nothing artificial.",
      "",
      "[Q2] How do I use it?",
      "[A2] Add one scoop (2g) or one travel sachet to any drink. It dissolves instantly and has zero taste - a genuinely unflavored electrolyte powder, not 'lightly flavored' like most brands claim. The Routine: Most of our users start with a pink salt morning drink and add a second serving in the evening. 1-2 servings per day for optimal hydration.",
      "",
      "[Q3] How does it compare to imported brands like LMNT or Wilder?",
      "[A3] We share the same zero-sugar, clean-ingredient philosophy as the premium US brands. The difference? Salt.Magic's magnesium potassium electrolyte mix delivers 7x more magnesium per serving. Crafted locally in Thailand, you pay 7-10 THB per serving instead of the 25-40 THB import markup.",
      "",
      "[Q4] Is it safe for children?",
      "[A4] Yes, these are natural minerals safe for all ages. We recommend a half-serving (1g) for children. As always, consult your pediatrician for specific health conditions.",
      "",
      "[Q5] Where can I buy electrolytes in Thailand?",
      "[A5] You can buy Salt.Magic on Lazada for nationwide delivery, or find us in 160+ locations across Thailand - including Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, and Krabi. The best electrolytes in Thailand, available wherever you are.",
      "",
      "[Q6] Why do you say 85% of Thai water is \"dead water\"?",
      "[A6] Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs for proper cellular hydration - to actually absorb and use that hydration at a cellular level.",
      "",
      "[Q7] What's the difference between \"wellness\" and \"sports\" electrolytes?",
      "[A7] Sports drinks are built for occasional, high-intensity use (3-5 times a week) and are usually packed with sugar and flavors. Salt.Magic is a daily electrolyte supplement - pure, invisible minerals meant to be added to your water 365 days a year.",
      "",
      "--- NEW FAQ ENTRIES ---",
      "",
      "[Q8 - NEW] Does Salt.Magic break a fast?",
      "[A8] No. Salt.Magic has zero calories, zero sugar, and zero sweeteners, so it will not break your fast or trigger an insulin response. Many of our customers use it as their daily fasting electrolyte - it dissolves without flavor and keeps headaches, fatigue, and cramps at bay during intermittent or extended fasts. Fasting-safe and keto-friendly by design.",
      "",
      "[Q9 - NEW] Can I take Salt.Magic while traveling or flying?",
      "[A9] Absolutely. Our Travel Sachet was designed as a portable electrolyte powder for travel. Flights and tropical heat deplete your electrolytes rapidly. Drop a sachet in your water before boarding - lightweight hydration packets for flying that keep you balanced across time zones.",
      "",
      "[Q10 - NEW] Is Salt.Magic good for hangover recovery?",
      "[A10] Yes. Alcohol is a powerful diuretic that strips your body of essential minerals - especially magnesium, potassium, and sodium. Salt.Magic works as a natural hangover recovery drink by restoring the exact minerals alcohol depletes. Take one serving before bed and one in the morning for the fastest recovery. The same minerals that support natural fluid balance and cellular hydration are exactly what your body needs after a night out."
    ],
    keywordsInText: [
      "himalayan pink salt", "natural pink salt hydration",
      "unflavored electrolyte powder",
      "pink salt morning drink", "magnesium potassium electrolyte mix",
      "cellular hydration",
      "daily electrolyte supplement",
      "fasting electrolyte", "intermittent", "keto-friendly",
      "electrolyte powder for travel", "hydration packets for flying",
      "natural hangover recovery drink", "natural fluid balance",
      "buy electrolytes in Thailand", "best electrolytes in Thailand"
    ],
    keywords: [
      { keyword: "natural pink salt hydration", cluster: "formulation" },
      { keyword: "unflavored electrolyte powder", cluster: "purity" },
      { keyword: "pink salt morning drink", cluster: "formulation" },
      { keyword: "magnesium potassium electrolyte mix", cluster: "formulation" },
      { keyword: "cellular hydration powder", cluster: "travel" },
      { keyword: "daily electrolyte supplement", cluster: "travel" },
      { keyword: "electrolytes for fasting", cluster: "fasting" },
      { keyword: "best electrolytes for intermittent fasting", cluster: "fasting" },
      { keyword: "keto electrolytes no sugar", cluster: "fasting" },
      { keyword: "electrolyte powder for travel", cluster: "travel" },
      { keyword: "hydration packets for flying", cluster: "travel" },
      { keyword: "natural hangover recovery drink", cluster: "travel" },
      { keyword: "natural fluid balance supplement", cluster: "travel" },
      { keyword: "buy electrolytes in Thailand", cluster: "geo" },
      { keyword: "best electrolytes in Thailand", cluster: "geo" }
    ],
    rationale: "FAQ is the most important SEO keyword magnet. Existing answers are enriched with formulation + purity keywords. 3 new FAQs capture the strongest long-tail keywords: Fasting (Q8, reduced from 7 to 3 keywords), Travel (Q9, trimmed to ~50 words), Hangover (Q10). 'Organic electrolyte powder' removed — Salt.Magic is not certified organic. Note: JSON-LD FAQPage schema must be updated to include Q8-Q10. Also update '150+ locations' to '160+ locations' across all schemas."
  },

  // ===== 13. CTA BANNER =====
  {
    title: "13. CTA Banner",
    screenshots: ["v2-13-cta-banner.png"],
    currentCopy: [
      "[Eyebrow] Start Today",
      "[H2] Bring Your Water Back to Life",
      "[Body] Three ingredients. Zero compromise. Join thousands across Thailand who've made the daily switch.",
      "[CTA] Shop Salt.Magic on Lazada"
    ],
    suggestedCopy: [
      "[Eyebrow] Start Today",
      "[H2] Bring Your Water Back to Life",
      "[Body] Three ingredients. Zero compromise. Thousands across Thailand drink this clean electrolyte blend for daily wellness - and never go back.",
      "[CTA] Shop Salt.Magic on Lazada"
    ],
    keywordsInText: [
      "clean electrolyte blend"
    ],
    keywords: [],
    rationale: "CTA Banner uses a semantic variation ('clean electrolyte blend') instead of repeating 'natural electrolyte powder.' Focus stays on conversion. One subtle keyword integration, no stuffing."
  },

  // ===== 14. NEWSLETTER =====
  {
    title: "14. Newsletter",
    screenshots: ["v2-14-newsletter.png"],
    currentCopy: [
      "[Eyebrow] Stay Connected",
      "[H2] Join the Ritual",
      "[Body] Drop your email below for exclusive wellness tips, product drops, and community offers. No spam, just pure hydration.",
      "[Badge] Get our free Mineral Guide + 10% off your first order",
      "[CTA] Unlock 10% Off"
    ],
    suggestedCopy: [
      "[Eyebrow] Stay Connected",
      "[H2] Join the Natural Hydration Ritual",
      "[Body] Drop your email for wellness tips, hydration science, and member-only offers. No spam, no fluff, just what works.",
      "[Badge] Get our free Mineral Guide + 10% off your first order",
      "[CTA] Unlock 10% Off"
    ],
    keywordsInText: [
      "natural hydration"
    ],
    keywords: [
      { keyword: "natural hydration drink", cluster: "purity" }
    ],
    rationale: "Newsletter section has low SEO impact. One keyword ('natural hydration') woven into a topic statement. Dropped 'holistic hydration' - doesn't match Salt.Magic's science-backed brand voice. 'No spam, no fluff, just what works' echoes the brand's signature rhythm."
  },

  // ===== 15. FOOTER =====
  {
    title: "15. Footer",
    screenshots: ["v2-16-footer.png"],
    currentCopy: [
      "[Tagline] Clean Electrolytes. Naturally Powerful.",
      "[Tagline Desktop] No sugar. No flavors. No waste.",
      "[Navigate] About | Products | Our Story | Blog | Partner With Us",
      "[Connect] leo@salt-magic.com | +66 826 020 486 | @saltmagic.electrolytes",
      "[Copyright] Made on Koh Samui, Thailand"
    ],
    suggestedCopy: [
      "[No changes recommended]",
      "[Tagline] Clean Electrolytes. Naturally Powerful.",
      "[Tagline Desktop] No sugar. No flavors. No waste.",
      "[Navigate] About | Products | Our Story | Blog | Partner With Us",
      "[Connect] leo@salt-magic.com | +66 826 020 486 | @saltmagic.electrolytes",
      "[Copyright] Made on Koh Samui, Thailand"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "No changes. The footer tagline 'Clean Electrolytes. Naturally Powerful.' is already strong and on-brand. Adding 'natural electrolyte powder' here would be over-optimization (keyword already appears in meta title, hero eyebrow, products, and JSON-LD)."
  },

  // ===== PARTNER PAGE =====

  // --- Partner Page Separator ---
  {
    title: "PARTNER PAGE",
    screenshots: [],
    currentCopy: [],
    suggestedCopy: [],
    keywordsInText: [],
    keywords: [],
    rationale: "",
    isSeparator: true,
    subPath: "/partner"
  },

  // ===== P1. PARTNER META =====
  {
    title: "P1. Partner Page - Meta Tags",
    screenshots: [],
    infoBox: [
      "GEO-TARGETING NOTE: The partner page targets B2B distributors searching for wellness product distribution opportunities in Thailand. Different keyword strategy than the consumer homepage."
    ],
    currentCopy: [
      "[Title] Partner With Us - Salt.Magic Distribution",
      "[Meta Description] Join Thailand's fastest-growing electrolyte brand. 35-40% margins, 90% customer retention, 160+ locations."
    ],
    suggestedCopy: [
      "[Title] Electrolyte Distribution Thailand | Partner With Salt.Magic",
      "[Meta Description] Distribute Thailand's fastest-growing electrolyte brand. 35-40% retailer margins, 90% customer retention, 160+ locations. Become a wellness product distributor today."
    ],
    keywordsInText: [
      "electrolyte distribution Thailand", "wellness product distributor"
    ],
    keywords: [
      { keyword: "electrolyte distribution Thailand", cluster: "geo" },
      { keyword: "wellness product distributor", cluster: "geo" }
    ],
    rationale: "Partner page meta tags target B2B search intent. 'Electrolyte distribution Thailand' captures distributors actively looking for products to carry. Title restructured to lead with the keyword (more SEO weight on the first words)."
  },

  // ===== P2. PARTNER HERO =====
  {
    title: "P2. Partner Hero",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] Distribution Partnership",
      "[H1] Capture the Next Wave of Wellness",
      "[Body] The global electrolyte market is exploding. Partner with Thailand's first daily mineralizer and claim your first-mover advantage.",
      "[CTA] Contact Us | Download Pitch Deck",
      "[Stats] 90% Customer Retention | 35-40% Retailer Margins | 160+ Locations | 5 Yrs Proven Track Record"
    ],
    suggestedCopy: [
      "[Eyebrow] Distribution Partnership",
      "[H1] Capture the Next Wave of Wellness",
      "[Body] The global electrolyte market is exploding. Partner with Thailand's first daily mineralizer and claim your first-mover advantage as an electrolyte distributor in Thailand's fastest-growing wellness category.",
      "[CTA] Contact Us | Download Pitch Deck",
      "[Stats] 90% Customer Retention | 35-40% Retailer Margins | 160+ Locations | 5 Yrs Proven Track Record"
    ],
    keywordsInText: [
      "electrolyte distributor", "Thailand"
    ],
    keywords: [
      { keyword: "electrolyte distribution Thailand", cluster: "geo" }
    ],
    rationale: "H1 stays unchanged (strong hook). One natural B2B keyword added to the body — 'electrolyte distributor in Thailand's fastest-growing wellness category' reads as a benefit, not a label."
  },

  // ===== P3. MARKET COMPARISON =====
  {
    title: "P3. Market Opportunity",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] The Opportunity",
      "[H2] APAC is 5-7 years behind the USA",
      "[Body] The US hydration market is already an $11.3B industry dominated by daily wellness brands. Asia-Pacific is at $3.0B - surging with 44% projected growth. Thailand is sitting exactly where the US was 7 years ago.",
      "[Callout] 85% of Thai bottled water is filtered, not mineralized. The market is wide open for real hydration.",
      "[USA] $11.3B (2023) - $21.3B projected by 2034 (88% growth)",
      "[APAC] $3.0B (2023) - $4.3B projected by 2030 (44% growth)",
      "[Closing] The wave is coming."
    ],
    suggestedCopy: [
      "[Eyebrow] The Opportunity",
      "[H2] APAC is 5-7 years behind the USA",
      "[Body] The US hydration product market is already an $11.3B industry dominated by daily wellness brands. Asia-Pacific is at $3.0B - surging with 44% projected growth. Thailand's hydration market is sitting exactly where the US was 7 years ago.",
      "[Callout] 85% of Thai bottled water is filtered, not mineralized. The market is wide open for a clean hydration brand.",
      "[USA] $11.3B (2023) - $21.3B projected by 2034 (88% growth)",
      "[APAC] $3.0B (2023) - $4.3B projected by 2030 (44% growth)",
      "[Closing] The wave is coming."
    ],
    keywordsInText: [
      "hydration product market", "Thailand's hydration market", "clean hydration brand"
    ],
    keywords: [
      { keyword: "hydration product wholesale", cluster: "geo" }
    ],
    rationale: "Minimal keyword additions. The market data already carries the section. 'Hydration product market' and 'Thailand's hydration market' are natural B2B terms that distributors search for."
  },

  // ===== P4. CATEGORY PROOF =====
  {
    title: "P4. Category Proof",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] Category Proof",
      "[H2] Clean hydration builds unicorns.",
      "[Body] The biggest wellness brands of the last decade started exactly where Salt.Magic is now. Clean electrolytes are creating an entirely new, highly lucrative retail category.",
      "[Brands] Liquid IV - $500M+ (Acquired by Unilever) | LMNT - 8-figure revenue (Dominating DTC and retail) | Liquid Death - $1.4B (100K+ retail stores)"
    ],
    suggestedCopy: [
      "[No changes recommended]",
      "[Eyebrow] Category Proof",
      "[H2] Clean hydration builds unicorns.",
      "[Body] The biggest wellness brands of the last decade started exactly where Salt.Magic is now. Clean electrolytes are creating an entirely new, highly lucrative retail category.",
      "[Brands] Liquid IV - $500M+ (Acquired by Unilever) | LMNT - 8-figure revenue (Dominating DTC and retail) | Liquid Death - $1.4B (100K+ retail stores)"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "No changes. This section is pure proof — the brand names and valuations speak for themselves. Adding keywords here would dilute the impact of the social proof."
  },

  // ===== P5. WHY DISTRIBUTE =====
  {
    title: "P5. Why Distribute Salt.Magic",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] Why Distribute",
      "[H2] Why distribute Salt.Magic?",
      "[Body] Bring Thailand's first sugar-free, flavorless daily electrolyte mineralizer to your customers.",
      "[Bullet 1] 35-40% retailer margins",
      "[Bullet 2] 90% customer retention across 160+ partner locations",
      "[Bullet 3] 7x more magnesium than competitors. Zero sugar. Zero plastic waste.",
      "[CTA] Become a Distribution Partner"
    ],
    suggestedCopy: [
      "[Eyebrow] Why Distribute",
      "[H2] Why distribute Salt.Magic?",
      "[Body] Bring Thailand's first sugar-free, flavorless daily electrolyte mineralizer to your customers. A wellness brand partnership with built-in demand.",
      "[Bullet 1] 35-40% retailer margins - among the highest in the health product category",
      "[Bullet 2] 90% customer retention across 160+ partner locations - a product that sells itself",
      "[Bullet 3] 7x more magnesium than competitors. Zero sugar. Zero plastic waste.",
      "[CTA] Become a Distribution Partner"
    ],
    keywordsInText: [
      "wellness brand partnership", "health product", "retailer margins"
    ],
    keywords: [
      { keyword: "wellness brand partnership Thailand", cluster: "geo" },
      { keyword: "electrolyte retailer margins", cluster: "geo" },
      { keyword: "health product distributor Thailand", cluster: "geo" }
    ],
    rationale: "B2B keywords woven into benefit extensions. 'Wellness brand partnership with built-in demand' reads as a value proposition, not SEO. Bullet extensions add context that strengthens the pitch while hitting search terms distributors use."
  },

  // ===== P6. REVENUE COMPARISON =====
  {
    title: "P6. Revenue Comparison",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] The Revenue Difference",
      "[H2] The Bottom Line: 4.4x More Revenue",
      "[Body] We aren't selling an occasional sports recovery drink. We are selling a 365-day habit. Daily wellness positioning isn't just better for your customers - it's significantly better for your bottom line.",
      "[Wellness / Salt.Magic] 365 days/year | Monthly purchase | 4,200 THB LTV | 90% retention",
      "[Fitness / Traditional] 3-5 days/week | Irregular purchase | 800 THB LTV | 25-35% retention"
    ],
    suggestedCopy: [
      "[No changes recommended]",
      "[Eyebrow] The Revenue Difference",
      "[H2] The Bottom Line: 4.4x More Revenue",
      "[Body] We aren't selling an occasional sports recovery drink. We are selling a 365-day habit. Daily wellness positioning isn't just better for your customers - it's significantly better for your bottom line.",
      "[Wellness / Salt.Magic] 365 days/year | Monthly purchase | 4,200 THB LTV | 90% retention",
      "[Fitness / Traditional] 3-5 days/week | Irregular purchase | 800 THB LTV | 25-35% retention"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "No changes. The revenue data is the conversion driver. The 4.4x comparison and specific LTV numbers are the strongest B2B arguments on the page. Keywords would weaken the numbers."
  },

  // ===== P7. PARTNER FORM =====
  {
    title: "P7. Partner Contact Form",
    screenshots: [],
    currentCopy: [
      "[Eyebrow] Get In Touch",
      "[H2] Become a partner",
      "[Body] We'll respond within 48 hours.",
      "[Fields] Name | Company | Role | Email | Message",
      "[CTA] Become a Distribution Partner"
    ],
    suggestedCopy: [
      "[Eyebrow] Get In Touch",
      "[H2] Become an electrolyte distribution partner in Thailand",
      "[Body] We'll respond within 48 hours.",
      "[Fields] Name | Company | Role | Email | Message",
      "[CTA] Become a Distribution Partner"
    ],
    keywordsInText: [
      "electrolyte distribution partner", "Thailand"
    ],
    keywords: [
      { keyword: "electrolyte distribution Thailand", cluster: "geo" }
    ],
    rationale: "One keyword in the H2 — the form page often ranks independently for transactional B2B queries. 'Become an electrolyte distribution partner in Thailand' reads as a clear call to action, not a keyword insertion."
  },

  // ===== APPENDIX =====
  {
    title: "APPENDIX: Blog Topics for Unused Keywords",
    screenshots: [],
    currentCopy: [
      "The following keywords were not fully integrated into the homepage copy and are ideal as standalone blog articles:"
    ],
    suggestedCopy: [
      "[Blog 1] \"The Best Electrolytes for Muay Thai Training in Thailand\"",
      "Keywords: muay thai hydration, training hydration mix, best electrolyte powder for athletes, electrolytes for heavy sweaters",
      "",
      "[Blog 2] \"Why Fasting Without Electrolytes is a Mistake\"",
      "Keywords: electrolytes for fasting, fasting salt water drink, keto hydration powder, clean electrolytes no sugar, best electrolytes for intermittent fasting",
      "",
      "[Blog 3] \"Electrolytes for Hot Yoga: What Your Instructor Won't Tell You\"",
      "Keywords: hot yoga electrolytes, hydration for hot weather, natural rehydration salts, muscle cramp relief powder",
      "",
      "[Blog 4] \"Natural Hangover Recovery: The Science Behind Electrolyte Rehydration\"",
      "Keywords: natural hangover recovery drink, natural hydration for food poisoning, cellular hydration powder",
      "",
      "[Blog 5] \"The Complete Guide to Natural Hydration for Travel\"",
      "Keywords: electrolyte powder for travel, hydration packets for flying, travel hydration supplements, natural fluid balance supplement"
    ],
    keywordsInText: [],
    keywords: [],
    rationale: "Blog articles can cover keywords that would feel forced on the homepage. Each article suggestion targets a specific keyword cluster and can rank independently."
  }
];

// ============================================================
// BUILD DOCUMENT
// ============================================================

const children = [];

// ===== TITLE PAGE =====
children.push(
  new Paragraph({ spacing: { before: 2400 }, children: [] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Salt.Magic", font: "Georgia", size: 72, color: "294B6D", bold: true })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "SEO Copy Review V2", font: "Arial", size: 36, color: "666666" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Keyword-Integration Strategy", font: "Arial", size: 28, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Homepage - Section by Section", font: "Arial", size: 24, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Live site: salt-magic-website-v2.vercel.app", font: "Arial", size: 22, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 800 }, children: [new TextRun({ text: "April 2026", font: "Arial", size: 24, color: "999999" })] })
);

// Instructions
children.push(
  new Paragraph({ spacing: { before: 600, after: 200 }, children: [new TextRun({ text: "How to use this document:", font: "Arial", size: 24, bold: true, color: "294B6D" })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "1. Each section shows the CURRENT COPY from the live website", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "2. Below that is the SUGGESTED COPY with SEO keywords integrated naturally", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "3. Keywords are highlighted in ", font: "Arial", size: 22 }), new TextRun({ text: "green bold underline", font: "Arial", size: 22, color: "2E7D32", bold: true, underline: { type: "single" } }), new TextRun({ text: " so you can spot them easily", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "4. Each section lists which keywords were integrated and from which cluster", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "5. Review, approve, edit, or reject suggestions before they go live", font: "Arial", size: 22 })] })
);

// Keyword cluster overview
children.push(
  new Paragraph({ spacing: { before: 600, after: 200 }, children: [new TextRun({ text: "Keyword Clusters (50 Keywords total):", font: "Arial", size: 24, bold: true, color: "294B6D" })] })
);
for (const [key, name] of Object.entries(CLUSTERS)) {
  children.push(new Paragraph({ spacing: { after: 80 }, children: [
    new TextRun({ text: `  ${name}`, font: "Arial", size: 20, color: "333333" }),
    new TextRun({ text: " (10 keywords)", font: "Arial", size: 20, color: "999999" })
  ] }));
}

// ===== SECTIONS =====
for (const section of sections) {
  children.push(new Paragraph({ pageBreakBefore: true, children: [] }));

  // Separator pages (e.g., "PARTNER PAGE")
  if (section.isSeparator) {
    children.push(
      new Paragraph({ spacing: { before: 3600 }, children: [] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: section.title, font: "Georgia", size: 56, bold: true, color: "294B6D" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: section.subPath || "", font: "Arial", size: 28, color: "999999" })] })
    );
    continue;
  }

  // Section title
  children.push(new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: section.title, font: "Georgia", size: 36, bold: true, color: "294B6D" })] }));

  // Info box (optional explainer for non-technical readers)
  if (section.infoBox && section.infoBox.length > 0) {
    children.push(new Paragraph({ spacing: { before: 100, after: 80 }, children: [
      new TextRun({ text: "\u2139\uFE0F  ", font: "Arial", size: 18 }),
      new TextRun({ text: section.infoBox[0], font: "Arial", size: 18, bold: true, color: "1565C0" })
    ] }));
    for (let i = 1; i < section.infoBox.length; i++) {
      const line = section.infoBox[i];
      if (line === "") {
        children.push(new Paragraph({ spacing: { after: 40 }, children: [new TextRun({ text: " ", font: "Arial", size: 14 })] }));
      } else {
        // Bold the term before the dash, regular after
        const dashIdx = line.indexOf(' — ');
        if (dashIdx > -1) {
          children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [
            new TextRun({ text: "\u2022 ", font: "Arial", size: 18, color: "1565C0" }),
            new TextRun({ text: line.substring(0, dashIdx), font: "Arial", size: 18, bold: true, color: "1565C0" }),
            new TextRun({ text: " — " + line.substring(dashIdx + 3), font: "Arial", size: 18, color: "1565C0" })
          ] }));
        } else {
          children.push(new Paragraph({ spacing: { after: 60 }, indent: { left: 360 }, children: [
            new TextRun({ text: line, font: "Arial", size: 18, color: "1565C0" })
          ] }));
        }
      }
    }
    // Bottom border for the info box
    children.push(new Paragraph({ spacing: { after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "90CAF9" } }, children: [] }));
  }

  // Screenshots
  if (section.screenshots && section.screenshots.length > 0) {
    for (const imgName of section.screenshots) {
      const data = loadImage(imgName);
      if (data) {
        const run = imageToRun(data, section.title);
        if (run) {
          children.push(new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
            children: [run]
          }));
        }
      }
    }
  }

  // === CURRENT COPY ===
  children.push(
    new Paragraph({ spacing: { before: 200, after: 150 }, children: [new TextRun({ text: "CURRENT COPY", font: "Arial", size: 22, bold: true, color: "294B6D" })] }),
    new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] })
  );

  for (const line of section.currentCopy) {
    if (line === "") {
      children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: " ", font: "Arial", size: 16 })] }));
    } else if (line.startsWith("[")) {
      const bracketEnd = line.indexOf("]");
      children.push(new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun({ text: line.substring(0, bracketEnd + 1) + " ", font: "Arial", size: 20, bold: true, color: "666666" }),
        new TextRun({ text: line.substring(bracketEnd + 2), font: "Arial", size: 20, color: "333333" })
      ] }));
    } else {
      children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: line, font: "Arial", size: 20, color: "333333" })] }));
    }
  }

  // === SUGGESTED COPY (SEO) ===
  children.push(
    new Paragraph({ spacing: { before: 400, after: 150 }, children: [new TextRun({ text: "SUGGESTED COPY (SEO-OPTIMIZED)", font: "Arial", size: 22, bold: true, color: "2E7D32" })] }),
    new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "2E7D32" } }, children: [] })
  );

  for (const line of section.suggestedCopy) {
    if (line === "") {
      children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: " ", font: "Arial", size: 16 })] }));
    } else if (line.startsWith("[")) {
      const bracketEnd = line.indexOf("]");
      const label = line.substring(0, bracketEnd + 1) + " ";
      const content = line.substring(bracketEnd + 2);
      const runs = [new TextRun({ text: label, font: "Arial", size: 20, bold: true, color: "666666" })];
      runs.push(...highlightKeywords(content, section.keywordsInText));
      children.push(new Paragraph({ spacing: { after: 80 }, children: runs }));
    } else if (line.startsWith("---")) {
      children.push(new Paragraph({ spacing: { before: 200, after: 200 }, border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "D4BFAA" } }, children: [new TextRun({ text: line.replace(/---/g, "").trim(), font: "Arial", size: 22, bold: true, color: "294B6D" })] }));
    } else {
      const runs = highlightKeywords(line, section.keywordsInText);
      children.push(new Paragraph({ spacing: { after: 80 }, children: runs }));
    }
  }

  // === KEYWORDS INTEGRATED ===
  if (section.keywords.length > 0) {
    children.push(
      new Paragraph({ spacing: { before: 300, after: 100 }, children: [new TextRun({ text: "KEYWORDS INTEGRATED:", font: "Arial", size: 18, bold: true, color: "CC6600" })] })
    );
    for (const kw of section.keywords) {
      children.push(new Paragraph({ spacing: { after: 40 }, children: [
        new TextRun({ text: `  \u2022 ${kw.keyword}`, font: "Arial", size: 18, color: "CC6600", italics: true }),
        new TextRun({ text: `  [${CLUSTERS[kw.cluster]}]`, font: "Arial", size: 16, color: "999999" })
      ] }));
    }
  }

  // === RATIONALE ===
  if (section.rationale) {
    children.push(
      new Paragraph({ spacing: { before: 200, after: 100 }, children: [
        new TextRun({ text: "NOTE:", font: "Arial", size: 18, bold: true, color: "666666" }),
        new TextRun({ text: section.rationale, font: "Arial", size: 18, color: "666666", italics: true })
      ] })
    );
  }

  // === YOUR NOTES ===
  children.push(
    new Paragraph({ spacing: { before: 400, after: 150 }, children: [new TextRun({ text: "YOUR NOTES / EDITS", font: "Arial", size: 22, bold: true, color: "294B6D" })] }),
    new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] })
  );
  for (let i = 0; i < 6; i++) {
    children.push(new Paragraph({ spacing: { after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "EEEEEE" } }, children: [new TextRun({ text: " ", font: "Arial", size: 20 })] }));
  }
}

// ============================================================
// GENERATE DOCUMENT
// ============================================================
const doc = new Document({
  styles: { default: { document: { run: { font: "Arial", size: 22 } } } },
  sections: [{
    properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Salt.Magic \u2014 SEO Copy Review V2", font: "Arial", size: 16, color: "999999" })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
      new TextRun({ text: "Page ", font: "Arial", size: 16, color: "999999" }),
      new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: "999999" }),
      new TextRun({ text: " of ", font: "Arial", size: 16, color: "999999" }),
      new TextRun({ children: [PageNumber.TOTAL_PAGES], font: "Arial", size: 16, color: "999999" })
    ] })] }) },
    children
  }]
});

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUT, buffer);
  console.log(`\nSalt.Magic SEO Copy Review V2 generated!`);
  console.log(`File: ${OUT}`);
  console.log(`Size: ${(buffer.length / 1024).toFixed(0)} KB`);
  console.log(`Sections: ${sections.length}`);
  console.log(`Total keywords integrated: ${sections.reduce((sum, s) => sum + s.keywords.length, 0)}`);
}).catch(err => {
  console.error('Error generating document:', err);
  process.exit(1);
});
