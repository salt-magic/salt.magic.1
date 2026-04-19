const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, ImageRun, AlignmentType, BorderStyle, Header, Footer, PageNumber } = require('docx');

const IMG_DIR = String.raw`c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic\outputs\section-screenshots`;
const OUT = String.raw`c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic\outputs\Salt-Magic-Copy-Review.docx`;

// All copy extracted directly from the live site (https://salt-magic-website.vercel.app)
const sections = [
  // === HOMEPAGE ===
  {
    title: "1. Navigation + Announcement Bar",
    screenshots: ["home-01-nav-hero.png"],
    copy: [
      "[Announcement Bar marquee]",
      "100% NATURAL | ZERO SUGAR | ZERO FLAVOR | FREE SHIPPING ON ORDERS OVER 1,000 THB | 5 YEARS TRUSTED | 90% RETENTION | 200+ LOCATIONS | THAILAND'S PREMIUM ELECTROLYTE MINERALIZER",
      "",
      "[Nav]",
      "WHY | PRODUCTS — Salt.Magic Logo — STORY | BLOG | PARTNER | SHOP NOW"
    ],
    note: "Client feedback: Navigation fonts aren't my favorite."
  },
  {
    title: "2. Hero",
    screenshots: ["home-01-nav-hero.png"],
    copy: [
      "[Eyebrow] THAILAND'S PREMIER MINERAL ELECTROLYTE",
      "[H1] Remineralize Your Water. Revitalize Your Life.",
      "[Body] Pure minerals. Zero sugar. Every glass. Every day.",
      "[CTA] SHOP NOW | Learn More",
      "[Background] Product jar in tropical greenery, dark overlay"
    ],
    note: "Client feedback: Likes fluid/dynamic feel of scrolling hero. Prefers PANPURI style — text UNDER imagery, not overlaid."
  },
  {
    title: "3. Trust Band",
    screenshots: ["home-02-trustband.png"],
    copy: [
      "TRUSTED BY 150+ WELLNESS LOCATIONS ACROSS THAILAND",
      "Koh Samui \u00B7 Bangkok \u00B7 Chiang Mai \u00B7 Phuket \u00B7 Hua Hin \u00B7 Koh Phangan"
    ],
    note: ""
  },
  {
    title: "4. Why Section (The Problem)",
    screenshots: ["home-03-why-section.png"],
    copy: [
      "[Eyebrow] THE PROBLEM",
      "[H2] Your water is missing what your body needs most",
      "[Body] 85% of bottled water in Thailand goes through reverse osmosis, stripping all natural minerals. The result is \u201Cdead water\u201D \u2014 purified but nutritionally empty.",
      "[Body] Your body depends on magnesium for over 300 enzymatic reactions. Yet the water you drink every day provides almost none of it.",
      "[Pull Quote] 50% of people worldwide are magnesium deficient. Your water could be why.",
      "[Badges] ZERO SUGAR | 100% NATURAL | 7X MAGNESIUM",
      "[Layout] Product jar image (left) + text (right)"
    ],
    note: ""
  },
  {
    title: "5. The Formula (Ingredients)",
    screenshots: ["home-04-formula.png"],
    copy: [
      "[Eyebrow] THE FORMULA",
      "[H2] What\u2019s inside every serving",
      "[Subline] Just 2 grams of pure minerals \u2014 flavorless, invisible in any drink, and 7x more magnesium than leading competitors. Three natural ingredients including Pink Himalayan Salt with 84 trace minerals.",
      "",
      "312mg \u2014 MAGNESIUM CITRATE \u2014 Muscle recovery, mental clarity, deep sleep",
      "160mg \u2014 POTASSIUM CITRATE \u2014 Heart rhythm, nerve signaling, fluid balance",
      "152mg \u2014 PINK HIMALAYAN SALT \u2014 84 trace minerals, sodium for hydration"
    ],
    note: ""
  },
  {
    title: "6. Comparison Table",
    screenshots: ["home-05-comparison.png"],
    copy: [
      "[Eyebrow] HOW WE COMPARE",
      "[H2] Not all electrolytes are created equal",
      "[Subline] 7x more magnesium than leading competitors. Zero sugar. Zero additives.",
      "",
      "[Tab: SALT.MAGIC] 0g sugar | 312mg magnesium | 2g serving size | Natural minerals | Designed for daily use | Everyone, all ages",
      "[Tab: OUR FORMULA] (toggle view)",
      "",
      "SPORTS DRINKS: added sugar 27g, magnesium 0\u201325mg, serving 10\u201320g \u2014 Added sugar, low in electrolytes, artificial ingredients",
      "COCONUT WATER: sugar 28g, magnesium ~15mg, serving 330ml \u2014 Unbalanced electrolytes, high sugar, low sodium and potassium",
      "OTHER ELECTROLYTE MIXES: added sugar 11g, magnesium 0\u201350mg, serving 7\u201312g \u2014 Synthetic ingredients, added sugars, artificial flavors",
      "",
      "[Footer] BASED ON A 2G SERVING OF SALT.MAGIC VS TYPICAL 16OZ SERVINGS"
    ],
    note: ""
  },
  {
    title: "7. Benefits",
    screenshots: ["home-06-benefits.png"],
    copy: [
      "[Eyebrow] DAILY BENEFITS",
      "[H2] What proper minerals do for you",
      "",
      "Enhanced Hydration \u2014 Minerals your body needs to actually absorb the water you drink",
      "Better Sleep \u2014 Magnesium supports melatonin production and muscle relaxation",
      "Mental Focus \u2014 Clear thinking and sustained concentration throughout the day",
      "Digestive Support \u2014 Magnesium citrate gently supports healthy digestion",
      "Faster Recovery \u2014 Replenish electrolytes lost during illness, travel, or heat",
      "Hangover Relief \u2014 Restore mineral balance after a night out \u2014 naturally",
      "Workout Performance \u2014 Sustained energy and reduced cramping during exercise",
      "Safe for All Ages \u2014 Pure minerals with nothing artificial \u2014 from kids to grandparents"
    ],
    note: ""
  },
  {
    title: "8. For Everyone",
    screenshots: ["home-07-for-everyone.png"],
    copy: [
      "[Eyebrow] FOR EVERYONE",
      "[H2] What proper hydration feels like",
      "[Body] Clearer thinking. Steadier energy without crashes. Fewer muscle cramps. Better sleep. Users notice the difference within days.",
      "[Body] Salt.Magic isn\u2019t for athletes only \u2014 it\u2019s for everyone who drinks water. Office workers, parents, travelers, fasters, anyone living in Thailand\u2019s heat.",
      "",
      "[Comparison] WELLNESS: 365 days/year, All ages, Daily essential",
      "[Comparison] SPORTS: 3-5x/week, Athletes only, Occasional",
      "",
      "[Statement] Daily minerals, not occasional recovery.",
      "[Layout] Text (left) + lifestyle image (right)"
    ],
    note: ""
  },
  {
    title: "9. Image Break",
    screenshots: ["home-08-imagebreak.png"],
    copy: [
      "[Full-width lifestyle image \u2014 Moroccan beach scene placeholder]"
    ],
    note: "Placeholder image needs replacing with actual brand photography."
  },
  {
    title: "10. Products",
    screenshots: ["home-09-products.png"],
    copy: [
      "[Eyebrow] SHOP SALT.MAGIC",
      "[H2] Three formats, one formula",
      "[Badges] Zero Sugar | 100% Natural | 7x Magnesium",
      "",
      "HERITAGE LINE \u2014 Glass Jar \u2014 490 THB \u2014 70 servings, 7 THB each \u2014 Premium reusable glass jar with gold lid. Produced at our Koh Samui hub. \u2014 SHOP ON LAZADA",
      "MOST POPULAR \u2014 Paper Sachet \u2014 290 THB \u2014 30 servings, 9.6 THB each \u2014 Portable, resealable paper pouch. GMP/HACCP certified. For your bag, gym, travel. \u2014 SHOP ON LAZADA",
      "COMING 2026 \u2014 Single Sachet \u2014 9\u201312 THB \u2014 1 serving, trial & impulse format \u2014 Single-serve 2g sachet. Perfect for trial, travel, and pharmacy counters. \u2014 NOTIFY ME WHEN AVAILABLE"
    ],
    note: ""
  },
  {
    title: "11. Testimonials",
    screenshots: ["home-10-testimonials.png"],
    copy: [
      "[H2] Look what our customers say",
      "[CTA] SHOP NOW",
      "",
      "[Carousel with rotating quotes:]",
      "\u201CI\u2019ve tried every electrolyte on the market. Salt.Magic is the only one I actually use every single day. No taste, no sugar, just works.\u201D \u2014 Sarah C., Wellness Enthusiast, Bangkok",
      "\u201CAs a yoga instructor, I recommend Salt.Magic to all my students. The cleanest electrolyte I\u2019ve found.\u201D \u2014 Sarah McLaughlin, Koh Samui",
      "(+ more testimonials in carousel)"
    ],
    note: ""
  },
  {
    title: "12. Social Proof (Stats)",
    screenshots: ["home-11-socialproof.png"],
    copy: [
      "[Animated counters \u2014 Note: numbers animate from 0 on scroll]",
      "XX% CUSTOMER RETENTION",
      "XX+ WELLNESS LOCATIONS",
      "X Years ESTABLISHED TRACK RECORD",
      "XXX Days DESIGNED FOR DAILY USE"
    ],
    note: "Stats animate on scroll. Target values may need verification against brand docs (expected: 90%, 150+, 5 Years, 365 Days)."
  },
  {
    title: "13. Story Section",
    screenshots: ["home-12-story.png"],
    copy: [
      "[Eyebrow] OUR ORIGIN",
      "[H2] Five years ago, we noticed something wrong with our water",
      "[Body] Living on a tropical island, we drank more water than most \u2014 but still felt depleted. A TDS meter confirmed it: our \u201Cpurified\u201D water had virtually zero minerals.",
      "[Body] We couldn\u2019t find a clean electrolyte that was sugar-free, flavorless, and affordable for daily use. So we made one.",
      "[Body] What started in a kitchen on Koh Samui is now in over 150 wellness hubs across Thailand.",
      "[CTA] SHOP NOW | Read the full story"
    ],
    note: ""
  },
  {
    title: "14. About / Team",
    screenshots: ["home-13-about-team.png"],
    copy: [
      "[Eyebrow] THE TEAM",
      "[H2] The people behind Salt.Magic",
      "",
      "Leo \u2014 FOUNDER & CEO \u2014 Brand strategy, B2B partnerships, and the vision behind Salt.Magic. Started the company after discovering that the water he drank daily on Koh Samui had virtually zero minerals.",
      "Kawin \u2014 HEAD OF OPERATIONS \u2014 Production, logistics, and quality control. Manages the Samui Hub and ensures every batch meets the standard \u2014 from sourcing to shelf."
    ],
    note: "Image is a placeholder (ornate interior) \u2014 needs real team photo."
  },
  {
    title: "15. Partner Teaser",
    screenshots: ["home-14-partner-teaser.png"],
    copy: [
      "[Eyebrow] FOR BUSINESS",
      "[H2] Bring Salt.Magic to your customers",
      "[Body] Join the fastest-growing electrolyte brand in Thailand.",
      "[CTA] EXPLORE PARTNERSHIP",
      "[Stats] 35\u201340% RETAILER MARGINS | 90% CUSTOMER RETENTION | 150+ PARTNER LOCATIONS"
    ],
    note: ""
  },
  {
    title: "16. FAQ",
    screenshots: ["home-15-faq.png"],
    copy: [
      "[Eyebrow] QUESTIONS",
      "[H2] Common questions",
      "",
      "What is Salt.Magic made of?",
      "Is Salt.Magic just salt?",
      "How do I use it?",
      "How does it compare to LMNT or Wilder?",
      "Is it safe for children?",
      "Where can I buy Salt.Magic?",
      "Why is 85% of Thai water \u201Cdead water\u201D?",
      "What\u2019s the difference between wellness and sports electrolytes?",
      "",
      "[Accordion \u2014 answers expand on click]"
    ],
    note: ""
  },
  {
    title: "17. Blog Section",
    screenshots: ["home-16-blog.png"],
    copy: [
      "[Eyebrow] SALT.MAGIC BLOG",
      "[H2] Science-backed insights for better hydration",
      "",
      "March 26, 2026 \u2014 Why 85% of Thai Water is Dead Water \u2014 Most bottled water in Thailand goes through reverse osmosis, stripping away the very minerals your body needs.",
      "March 24, 2026 \u2014 Wellness vs Sports Electrolytes: Why Daily Minerals Matter More \u2014 Sports electrolytes are designed for athletes recovering from intense workouts. But what about the other 360 days a year?",
      "",
      "[CTA] View all articles"
    ],
    note: ""
  },
  {
    title: "18. CTA Banner",
    screenshots: ["home-17-cta-banner.png"],
    copy: [
      "[Eyebrow] START TODAY",
      "[H2] Start remineralizing your water today",
      "[Body] Three ingredients. Zero compromise. Join thousands across Thailand who\u2019ve made the switch.",
      "[CTA] SHOP NOW",
      "[Background] Dark mineral-blue gradient with product silhouette imagery"
    ],
    note: "Client feedback: Prefers PANPURI style \u2014 text under image, not overlaid."
  },
  {
    title: "19. Newsletter",
    screenshots: ["home-18-newsletter.png"],
    copy: [
      "[Eyebrow] STAY CONNECTED",
      "[H2] Join the Salt.Magic community",
      "[Body] Wellness tips, product updates, and exclusive offers \u2014 delivered to your inbox.",
      "[Offer] Get our free Mineral Guide + 10% off your first order",
      "[Input] Email address",
      "[CTA] SUBSCRIBE",
      "[Note] No spam. Unsubscribe anytime."
    ],
    note: ""
  },
  {
    title: "20. Footer",
    screenshots: ["home-19-footer.png"],
    copy: [
      "Salt.Magic",
      "Clean Electrolytes. Naturally Powerful. No sugar. No flavors. No waste.",
      "[Social] Facebook | Instagram | X",
      "[Navigate] Why Salt.Magic | Products | Blog | Partner With Us",
      "[Connect] info@salt-magic.com | +66 826 020 486 | WhatsApp",
      "[Stay Hydrated] Newsletter signup",
      "[Bottom] Made on Koh Samui, Thailand | \u00A9 Salt.Magic"
    ],
    note: ""
  },

  // === BLOG SEPARATOR ===
  { title: "BLOG", screenshots: [], copy: [], note: "", isSeparator: true, subPath: "/blog" },

  // === BLOG LISTING ===
  {
    title: "B1. Blog Listing Page",
    screenshots: ["blog-01-listing-top.png", "blog-02-listing-bottom.png"],
    copy: [
      "[Eyebrow] SALT.MAGIC BLOG",
      "[H1] Hydration science & daily wellness",
      "[Body] Evidence-based insights on minerals, hydration, and why what you drink every day matters more than you think.",
      "",
      "March 26, 2026 \u2014 Why 85% of Thai Water is Dead Water \u2014 Most bottled water in Thailand goes through reverse osmosis, stripping away the very minerals your body needs. Here\u2019s what that means for your health.",
      "March 24, 2026 \u2014 Wellness vs Sports Electrolytes: Why Daily Minerals Matter More \u2014 Sports electrolytes are designed for athletes recovering from intense workouts. But what about the other 360 days a year?"
    ],
    note: ""
  },

  // === BLOG ARTICLE 1 ===
  {
    title: "B2. Article: Why 85% of Thai Water is Dead Water",
    screenshots: ["blog-03-article1-hero.png", "blog-04-article1-body.png", "blog-05-article1-end.png"],
    copy: [
      "[Category] HYDRATION SCIENCE",
      "[Date] March 26, 2026",
      "[H1] Why 85% of Thai Water is Dead Water",
      "[Read time] 4 min read",
      "",
      "[Intro] Walk into any convenience store in Thailand and you\u2019ll find shelves lined with \u201Cpurified\u201D water. Crystal clear. Lab-tested. Safe to drink. But there\u2019s something missing \u2014 literally.",
      "",
      "[H2] The Reverse Osmosis Problem",
      "Approximately 85% of bottled water in Thailand undergoes reverse osmosis (RO) filtration. This process forces water through a semi-permeable membrane, removing contaminants like bacteria, heavy metals, and pesticides. That\u2019s the good part.",
      "The problem? RO doesn\u2019t discriminate. It strips out everything \u2014 including the essential minerals your body depends on. Calcium, magnesium, potassium, sodium \u2014 all reduced to near-zero levels. The result is what scientists call \u201Cdead water\u201D: purified but nutritionally empty.",
      "",
      "[H2] Why Minerals in Water Matter",
      "Your body uses magnesium in over 300 enzymatic reactions. It regulates muscle function, nerve signaling, blood sugar, and blood pressure. Potassium keeps your heart rhythm steady. Sodium maintains fluid balance.",
      "The WHO has raised concerns about demineralized water, noting that long-term consumption may contribute to mineral deficiency. A 2019 study found that populations drinking low-mineral water showed higher rates of cardiovascular issues.",
      "[Pull Quote] 50% of people worldwide are magnesium deficient. In Thailand, where RO water dominates and tropical heat increases mineral loss through sweat, the number is likely higher.",
      "",
      "[H2] The Hidden Cost of \u201CPure\u201D Water",
      "Most people assume that if their water is clean, it\u2019s healthy. But clean and healthy aren\u2019t the same thing. You can drink 2-3 liters of RO water per day and still be chronically under-mineralized.",
      "Symptoms of mineral deficiency are easy to dismiss: fatigue, muscle cramps, poor sleep, brain fog, irregular heartbeat. They creep in slowly. Most people blame stress, age, or lifestyle \u2014 never their water.",
      "",
      "[H2] What You Can Do",
      "The simplest solution is to add minerals back. Not through sugary sports drinks or flavored electrolyte packets designed for athletes \u2014 but through a clean, daily mineral supplement that dissolves invisibly in any water.",
      "Salt.Magic was created for exactly this purpose: 312mg of magnesium, plus potassium and sodium, in a flavorless 2-gram serving. No sugar, no additives, no taste. Just the minerals your water should have had in the first place.",
      "Because the water you drink every day shouldn\u2019t be working against you."
    ],
    note: ""
  },

  // === BLOG ARTICLE 2 ===
  {
    title: "B3. Article: Wellness vs Sports Electrolytes",
    screenshots: ["blog-06-article2-hero.png", "blog-07-article2-body.png", "blog-08-article2-end.png"],
    copy: [
      "[Category] LIFESTYLE",
      "[Date] March 24, 2026",
      "[H1] Wellness vs Sports Electrolytes: Why Daily Minerals Matter More",
      "[Read time] 3 min read",
      "",
      "[Intro] When most people think \u201Celectrolytes,\u201D they picture sports drinks, gym bags, and post-workout recovery. But electrolytes aren\u2019t just for athletes \u2014 they\u2019re for everyone, every day.",
      "",
      "[H2] The 365 vs 3-5 Problem",
      "Sports electrolyte brands market to a specific use case: intense exercise. Their products are formulated for 3-5 workouts per week. They contain sugar for quick energy, artificial flavors to mask mineral taste, and doses calibrated for acute recovery.",
      "But your body doesn\u2019t only need electrolytes when you exercise. Magnesium, potassium, and sodium are required for hundreds of daily functions \u2014 from nerve signaling to muscle relaxation to maintaining heart rhythm. These processes happen 365 days a year, not just on gym days.",
      "[Pull Quote] Wellness electrolytes are a daily essential. Sports electrolytes are an occasional supplement. The difference in customer lifetime value? 4.4x.",
      "",
      "[H2] The Sugar Question",
      "Most sports electrolytes contain 11-27 grams of added sugar per serving. That\u2019s by design \u2014 athletes need rapid glucose during and after exercise. But for daily wellness use, that sugar becomes a liability.",
      "Drinking a sugary electrolyte mix every morning isn\u2019t hydration \u2014 it\u2019s a habit that adds 100+ grams of unnecessary sugar to your weekly intake. Over a year, that\u2019s over 5 kilograms of sugar from your \u201Chealth\u201D drink alone.",
      "",
      "[H2] Who Needs Daily Minerals?",
      "The short answer: everyone. But some groups feel the impact more acutely:",
      "\u2022 Office workers spending 8+ hours in air conditioning lose minerals through dehydration without realizing it",
      "\u2022 Parents managing kids, meals, and schedules rarely drink enough mineralized water",
      "\u2022 Travelers and expats in tropical climates lose electrolytes through sweat at 2-3x the rate",
      "\u2022 Older adults absorb fewer minerals from food and need supplementation",
      "\u2022 Fasting practitioners deplete minerals rapidly without food intake",
      "",
      "[H2] The Daily Mineral Approach",
      "A wellness electrolyte should be invisible in your routine: no taste, no sugar, no complicated mixing. Just add it to your morning water and forget about it.",
      "Salt.Magic is formulated for this exact use case \u2014 312mg magnesium, zero sugar, zero flavor, designed to dissolve completely in any beverage. It\u2019s not a sports recovery product. It\u2019s a daily mineral essential for everyone who drinks water."
    ],
    note: ""
  },

  // === PARTNER SEPARATOR ===
  { title: "PARTNER PAGE", screenshots: [], copy: [], note: "", isSeparator: true, subPath: "/partner" },

  // === PARTNER PAGE ===
  {
    title: "P1. Partner Hero",
    screenshots: ["partner-01-hero.png"],
    copy: [
      "[Eyebrow] DISTRIBUTION PARTNERSHIP",
      "[H1] Grow with Salt.Magic",
      "[Body] The global electrolyte market reaches $69.1B by 2032. APAC is 5-7 years behind USA adoption \u2014 early partners capture first-mover advantage.",
      "[CTA] CONTACT US | DOWNLOAD DECK (COMING SOON)",
      "[Stats] $69.1B MARKET BY 2032 | 8.2% ANNUAL CAGR | 90% CUSTOMER RETENTION | 150+ LOCATIONS"
    ],
    note: ""
  },
  {
    title: "P2. The Opportunity (Market Stats)",
    screenshots: ["partner-02-opportunity.png"],
    copy: [
      "[Eyebrow] THE OPPORTUNITY",
      "[H2] A market ready for real hydration",
      "",
      "85% DEAD WATER \u2014 of Thai bottled water is filtered, not mineralized",
      "$69.1B GLOBAL MARKET \u2014 Electrolyte market projected size by 2032",
      "8.2% ANNUAL GROWTH \u2014 CAGR \u2014 one of the fastest-growing wellness categories"
    ],
    note: ""
  },
  {
    title: "P3. USA vs APAC Comparison",
    screenshots: ["partner-03-usa-vs-apac.png"],
    copy: [
      "[Eyebrow] MARKET OPPORTUNITY",
      "[H2] APAC is 5\u20137 years behind the USA",
      "",
      "USA TODAY: $11.3B market (2023) \u2014 Full retail aisles dedicated to electrolytes, daily wellness positioning dominant, premium brands ($2\u20133/serving), multiple formats \u2014 $21.3B projected by 2034 (88% growth)",
      "ASIA PACIFIC TODAY: $3.0B market (2023) \u2014 Limited shelf presence in pharmacies, still dominated by sports positioning, mostly sugary options, early stage = massive opportunity \u2014 $4.3B projected by 2030 (44% growth)",
      "",
      "Thailand is where the USA was 7 years ago."
    ],
    note: ""
  },
  {
    title: "P4. Category Proof (Billion-Dollar Brands)",
    screenshots: ["partner-04-category-proof.png"],
    copy: [
      "[Eyebrow] CATEGORY PROOF",
      "[H2] Clean electrolytes are creating a new category",
      "[Body] The biggest wellness brands of the last decade started exactly where Salt.Magic is now.",
      "",
      "Glac\u00E9au Vitaminwater \u2014 Acquired for $4.1B by Coca-Cola",
      "Liquid Death \u2014 $1.4B valuation \u2014 100K+ retail stores",
      "LMNT \u2014 8-figure revenue \u2014 DTC to retail everywhere",
      "Liquid IV \u2014 Acquired by Unilever \u2014 $500M+ deal",
      "",
      "Thailand is where the USA was 7 years ago. Salt.Magic is positioned to lead the wellness electrolytes category in APAC."
    ],
    note: ""
  },
  {
    title: "P5. The Product (Editorial Split)",
    screenshots: ["partner-05-the-product.png"],
    copy: [
      "[Eyebrow] THE PRODUCT",
      "[H3] Why distribute Salt.Magic?",
      "[Body] Thailand\u2019s first sugar-free, flavorless daily electrolyte mineralizer. 312mg magnesium per serving \u2014 7x more than competitors.",
      "[Body] 90% customer retention. Zero plastic waste. A category shift from occasional sports recovery to daily wellness essential.",
      "[Stats] 90% RETENTION | 7x MAGNESIUM | 0g SUGAR",
      "[Layout] Product image (left) + text (right)"
    ],
    note: ""
  },
  {
    title: "P6. The Shift",
    screenshots: ["partner-06-the-shift.png"],
    copy: [
      "[Eyebrow] THE SHIFT",
      "[H3] From occasional sports drink to daily wellness essential",
      "[Body] The brands that win this decade aren\u2019t selling recovery \u2014 they\u2019re selling a daily habit. Salt.Magic is built for 365 days a year, not 3-5 workouts a week.",
      "[Layout] Dark mineral-blue panel (left) + lifestyle image (right)"
    ],
    note: ""
  },
  {
    title: "P7. Revenue Comparison",
    screenshots: ["partner-07-revenue.png"],
    copy: [
      "[Eyebrow] THE REVENUE DIFFERENCE",
      "[H2] Daily wellness creates 4.4x more revenue",
      "",
      "WELLNESS (SALT.MAGIC): 365 days/year \u2014 Monthly purchase frequency \u2014 4,200 THB Customer LTV (1 year) \u2014 90% retention",
      "FITNESS (TRADITIONAL): 3\u20135 days/week \u2014 Irregular purchase \u2014 800 THB Customer LTV (1 year) \u2014 25\u201335% retention",
      "",
      "365 days/year = 4.4x more revenue per customer. Daily wellness positioning isn\u2019t just better for customers \u2014 it\u2019s better for your bottom line."
    ],
    note: ""
  },
  {
    title: "P8. Comparison Table",
    screenshots: ["partner-08-comparison.png"],
    copy: [
      "[Same comparison as homepage]",
      "[Eyebrow] HOW WE COMPARE",
      "[H2] Not all electrolytes are created equal",
      "SALT.MAGIC: 0g sugar, 312mg magnesium, 2g serving, natural minerals, daily use, all ages",
      "SPORTS DRINKS: 27g sugar, 0\u201325mg magnesium, 10\u201320g serving",
      "COCONUT WATER: 28g sugar, ~15mg magnesium, 330ml serving",
      "OTHER MIXES: 11g sugar, 0\u201350mg magnesium, 7\u201312g serving"
    ],
    note: ""
  },
  {
    title: "P9. Product Formats (Image Break)",
    screenshots: ["partner-09-product-formats.png"],
    copy: [
      "[3-column product image grid]",
      "Glass Jars | Paper Sachet | Duo Jars"
    ],
    note: ""
  },
  {
    title: "P10. Distribution Tiers",
    screenshots: ["partner-10-distribution.png"],
    copy: [
      "[Eyebrow] DISTRIBUTION MODEL",
      "[H2] Three paths to partnership",
      "",
      "TIER 1 \u2014 National Distributors \u2014 Full national coverage through established distribution networks. Margin 30-40%, Min. Order 10,000+ units \u2014 Examples: DKSH, Central Group",
      "TIER 2 \u2014 Regional Chains \u2014 50-store pilot programs with regional pharmacy chains and wellness retailers. Margin 35-40%, Min. Order 1,000+ units \u2014 Examples: Boots, Lab Pharmacy",
      "TIER 3 \u2014 Boutique & Clinics \u2014 Immediate purchase orders for organic shops, yoga studios, wellness clinics, hotel spas. Margin 35-40%, Min. Order 100+ units \u2014 Examples: Organic Village, Lemon Farm"
    ],
    note: ""
  },
  {
    title: "P11. Revenue Model",
    screenshots: ["partner-11-revenue-model.png"],
    copy: [
      "[Eyebrow] REVENUE MODEL",
      "[H2] Built for healthy margins",
      "",
      "[Table]",
      "Glass Jar (160g) \u2014 MSRP 490 THB \u2014 Wholesale 294-343 THB \u2014 Margin 30-40%",
      "Paper Sachet (16g) \u2014 MSRP 290 THB \u2014 Wholesale 174-203 THB \u2014 Margin 30-40%",
      "Single Sachet (2g) \u2014 MSRP 9-12 THB \u2014 Wholesale 5-8 THB \u2014 Margin 30-40%",
      "",
      "Customer lifetime value: 3,600-4,800 THB \u2014 Based on daily use at 365 days/year with 90% retention"
    ],
    note: ""
  },
  {
    title: "P12. Social Proof (Stats)",
    screenshots: ["partner-12-socialproof.png"],
    copy: [
      "[Animated counters \u2014 same as homepage]",
      "XX% CUSTOMER RETENTION | XX+ WELLNESS LOCATIONS | X Years ESTABLISHED | XXX Days DAILY USE"
    ],
    note: ""
  },
  {
    title: "P13. Location Map",
    screenshots: ["partner-13-locations.png"],
    copy: [
      "[Eyebrow] OUR NETWORK",
      "[H2] 150+ wellness locations across Thailand",
      "Bangkok | Phuket | Koh Samui | Chiang Mai | Hua Hin | Pattaya | Krabi | Koh Phangan | Pai | Koh Tao"
    ],
    note: ""
  },
  {
    title: "P14. Partner Contact Form",
    screenshots: ["partner-14-contact-form.png"],
    copy: [
      "[Eyebrow] GET IN TOUCH",
      "[H2] Become a partner",
      "[Body] We\u2019ll respond within 48 hours.",
      "[Fields] NAME | COMPANY | ROLE | EMAIL | MESSAGE",
      "[CTA] SUBMIT INQUIRY"
    ],
    note: ""
  }
];

function loadImage(filename) {
  const path = `${IMG_DIR}\\${filename}`;
  if (fs.existsSync(path)) return fs.readFileSync(path);
  console.warn(`  MISSING: ${filename}`);
  return null;
}

const children = [];

// Title page
children.push(
  new Paragraph({ spacing: { before: 2400 }, children: [] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Salt.Magic", font: "Georgia", size: 72, color: "294B6D", bold: true })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: "Website Copy Review", font: "Arial", size: 36, color: "666666" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Homepage + Partner Page \u2014 Section-by-section", font: "Arial", size: 24, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new TextRun({ text: "Live site: salt-magic-website.vercel.app", font: "Arial", size: 22, color: "999999" })] }),
  new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 800 }, children: [new TextRun({ text: "March 2026", font: "Arial", size: 24, color: "999999" })] }),
  new Paragraph({ spacing: { before: 600, after: 200 }, children: [new TextRun({ text: "How to use this document:", font: "Arial", size: 24, bold: true, color: "294B6D" })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "1. Each section shows a screenshot from the live website", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "2. Below the screenshot is the exact current copy on the site", font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: '3. Use the "YOUR NOTES" area to write feedback, edits, or new copy', font: "Arial", size: 22 })] }),
  new Paragraph({ spacing: { after: 100 }, children: [new TextRun({ text: "4. Edit the copy directly or leave comments about what to change", font: "Arial", size: 22 })] })
);

for (const section of sections) {
  children.push(new Paragraph({ pageBreakBefore: true, children: [] }));
  if (section.isSeparator) {
    children.push(
      new Paragraph({ spacing: { before: 3600 }, children: [] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [new TextRun({ text: section.title, font: "Georgia", size: 56, bold: true, color: "294B6D" })] }),
      new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: section.subPath || "", font: "Arial", size: 28, color: "999999" })] })
    );
    continue;
  }
  // Title
  children.push(new Paragraph({ spacing: { after: 300 }, children: [new TextRun({ text: section.title, font: "Georgia", size: 36, bold: true, color: "294B6D" })] }));
  // Screenshot
  for (const img of section.screenshots) {
    const data = loadImage(img);
    if (data) {
      let imgW = 680, imgH = 425;
      if (data.length > 24 && data[0] === 0x89 && data[1] === 0x50) {
        const w = data.readUInt32BE(16), h = data.readUInt32BE(20);
        imgH = Math.round((h / w) * imgW);
      }
      children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: [new ImageRun({ type: "png", data, transformation: { width: imgW, height: imgH }, altText: { title: section.title, description: `Screenshot of ${section.title}`, name: img } })] }));
    }
  }
  // Copy header
  children.push(new Paragraph({ spacing: { before: 300, after: 150 }, children: [new TextRun({ text: "CURRENT COPY", font: "Arial", size: 22, bold: true, color: "294B6D" })] }));
  children.push(new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] }));
  // Copy lines
  for (const line of section.copy) {
    if (line === "") {
      children.push(new Paragraph({ spacing: { after: 60 }, children: [new TextRun({ text: " ", font: "Arial", size: 16 })] }));
    } else if (line.startsWith("[")) {
      // Structure labels in bold
      const bracketEnd = line.indexOf("]");
      children.push(new Paragraph({ spacing: { after: 80 }, children: [
        new TextRun({ text: line.substring(0, bracketEnd + 1) + " ", font: "Arial", size: 20, bold: true, color: "666666" }),
        new TextRun({ text: line.substring(bracketEnd + 2), font: "Arial", size: 20, color: "333333" })
      ] }));
    } else {
      children.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: line, font: "Arial", size: 20, color: "333333" })] }));
    }
  }
  // Note
  if (section.note) {
    children.push(new Paragraph({ spacing: { before: 200, after: 100 }, children: [
      new TextRun({ text: "NOTE: ", font: "Arial", size: 20, bold: true, color: "CC6600" }),
      new TextRun({ text: section.note, font: "Arial", size: 20, color: "CC6600", italics: true })
    ] }));
  }
  // Your notes
  children.push(new Paragraph({ spacing: { before: 400, after: 150 }, children: [new TextRun({ text: "YOUR NOTES / EDITS", font: "Arial", size: 22, bold: true, color: "294B6D" })] }));
  children.push(new Paragraph({ spacing: { after: 150 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "D4BFAA" } }, children: [] }));
  for (let i = 0; i < 8; i++) {
    children.push(new Paragraph({ spacing: { after: 100 }, border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "EEEEEE" } }, children: [new TextRun({ text: " ", font: "Arial", size: 20 })] }));
  }
}

const doc = new Document({
  styles: { default: { document: { run: { font: "Arial", size: 22 } } } },
  sections: [{
    properties: { page: { margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: "Salt.Magic \u2014 Copy Review", font: "Arial", size: 16, color: "999999" })] })] }) },
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
  console.log(`Done! ${(buffer.length / 1024).toFixed(0)} KB`);
});
