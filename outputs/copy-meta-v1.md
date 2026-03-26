# Salt.Magic Meta Tags & Structured Data V1

**Created:** 2026-03-26
**Status:** V1 Draft
**Purpose:** GEO-optimized page titles, meta descriptions, Open Graph tags, and structured data markup for salt-magic.com.

---

## 1. Homepage

### Title Tag (55 chars)
```
Salt.Magic — Thailand's Natural Electrolyte Mineralizer
```

### Meta Description (155 chars)
```
Salt.Magic restores essential minerals to your water with 3 natural ingredients — 312mg magnesium, zero sugar, zero additives. Trusted daily by thousands across Thailand.
```

### Open Graph Tags
```html
<meta property="og:title" content="Salt.Magic — Thailand's Natural Electrolyte Mineralizer">
<meta property="og:description" content="3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving. The daily electrolyte Thailand trusts.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://salt-magic.com">
<meta property="og:image" content="https://salt-magic.com/images/og-homepage.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:site_name" content="Salt.Magic">
<meta property="og:locale" content="en_US">
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Salt.Magic — Thailand's Natural Electrolyte Mineralizer">
<meta name="twitter:description" content="3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving.">
<meta name="twitter:image" content="https://salt-magic.com/images/og-homepage.jpg">
```

### Additional Meta
```html
<meta name="robots" content="index, follow">
<meta name="author" content="Salt.Magic">
<meta name="geo.region" content="TH">
<meta name="geo.placename" content="Koh Samui, Thailand">
<link rel="canonical" href="https://salt-magic.com">
```

---

## 2. Blog Listing Page (/blog)

### Title Tag (52 chars)
```
Hydration Science & Wellness — Salt.Magic Blog
```

### Meta Description (148 chars)
```
Science-backed insights on hydration, electrolytes, mineral deficiency, and daily wellness. Research and practical guides from Salt.Magic Thailand.
```

### Open Graph Tags
```html
<meta property="og:title" content="Hydration Science & Wellness — Salt.Magic Blog">
<meta property="og:description" content="Science-backed insights on hydration, electrolytes, and daily wellness from Salt.Magic Thailand.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://salt-magic.com/blog">
<meta property="og:image" content="https://salt-magic.com/images/og-blog.jpg">
```

---

## 3. Blog Article (Current: Hydration Guide)

### Title Tag (76 chars)
```
The Ultimate Guide to Hydration and Remineralization in Thailand — Salt.Magic
```

### Meta Description (158 chars)
```
Why 85% of Thai bottled water lacks minerals, how it affects your health, and what to do about it. A complete guide to remineralization in tropical climates.
```

### Open Graph Tags
```html
<meta property="og:title" content="The Ultimate Guide to Hydration and Remineralization in Thailand">
<meta property="og:description" content="Why 85% of Thai bottled water lacks minerals and how remineralization solves the problem.">
<meta property="og:type" content="article">
<meta property="og:url" content="https://salt-magic.com/blog/ultimate-guide-hydration-remineralization-thailand">
<meta property="og:image" content="https://salt-magic.com/images/og-hydration-guide.jpg">
<meta property="article:published_time" content="2026-01-15T00:00:00Z">
<meta property="article:author" content="Salt.Magic">
<meta property="article:section" content="Hydration Science">
```

---

## 4. 404 Page

### Title Tag
```
Page Not Found — Salt.Magic
```

### Meta
```html
<meta name="robots" content="noindex, follow">
```

---

## 5. Structured Data (JSON-LD)

### 5.1 Organization Schema (All Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Salt.Magic",
  "url": "https://salt-magic.com",
  "logo": "https://salt-magic.com/images/logo.png",
  "description": "Thailand's premier all-natural daily electrolyte mineralizer. Three natural ingredients, zero sugar, zero additives.",
  "foundingDate": "2021",
  "foundingLocation": {
    "@type": "Place",
    "name": "Koh Samui, Thailand"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "info@salt-magic.com",
    "telephone": "+66826020486",
    "contactType": "customer service",
    "availableLanguage": ["English", "Thai"]
  },
  "sameAs": [
    "https://www.instagram.com/saltmagic.electrolytes"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Thailand"
  }
}
```

### 5.2 Product Schema — Glass Jar

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Salt.Magic Glass Jar — Electrolyte Mineralizer",
  "description": "Premium reusable glass jar with 70 servings of natural electrolyte mineralizer. Contains magnesium citrate (312mg), potassium citrate (160mg), and pink Himalayan salt (152mg). Zero sugar, zero additives.",
  "brand": {
    "@type": "Brand",
    "name": "Salt.Magic"
  },
  "image": "https://salt-magic.com/images/product-glass-jar.jpg",
  "offers": {
    "@type": "Offer",
    "price": "490",
    "priceCurrency": "THB",
    "availability": "https://schema.org/InStock",
    "url": "https://www.lazada.co.th/shop/salt-magic",
    "seller": {
      "@type": "Organization",
      "name": "Salt.Magic"
    }
  },
  "nutrition": {
    "@type": "NutritionInformation",
    "servingSize": "2g"
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Servings", "value": "70" },
    { "@type": "PropertyValue", "name": "Magnesium per serving", "value": "312mg" },
    { "@type": "PropertyValue", "name": "Potassium per serving", "value": "160mg" },
    { "@type": "PropertyValue", "name": "Sodium per serving", "value": "152mg" }
  ]
}
```

### 5.3 Product Schema — Paper Sachet

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Salt.Magic Paper Sachet — Electrolyte Mineralizer",
  "description": "Portable paper sachet pouch with 30 servings of natural electrolyte mineralizer. Same formula as the glass jar — magnesium citrate, potassium citrate, pink Himalayan salt. GMP/HACCP certified.",
  "brand": {
    "@type": "Brand",
    "name": "Salt.Magic"
  },
  "image": "https://salt-magic.com/images/product-paper-sachet.jpg",
  "offers": {
    "@type": "Offer",
    "price": "290",
    "priceCurrency": "THB",
    "availability": "https://schema.org/InStock",
    "url": "https://www.lazada.co.th/shop/salt-magic",
    "seller": {
      "@type": "Organization",
      "name": "Salt.Magic"
    }
  },
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Servings", "value": "30" },
    { "@type": "PropertyValue", "name": "Magnesium per serving", "value": "312mg" }
  ]
}
```

### 5.4 FAQ Schema (Homepage #faq)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Salt.Magic made of?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt.Magic contains exactly three ingredients: magnesium citrate (312mg), potassium citrate (160mg), and pink Himalayan salt (152mg). There are no added sugars, sweeteners, flavors, colors, or preservatives. Each serving is 2 grams."
      }
    },
    {
      "@type": "Question",
      "name": "Is Salt.Magic just salt?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Despite the name, Salt.Magic is a balanced electrolyte mineralizer. Pink Himalayan salt is only one of three ingredients and provides just 20% of the mineral blend. The majority (50%) is magnesium citrate — the most bioavailable form of magnesium."
      }
    },
    {
      "@type": "Question",
      "name": "How do I use Salt.Magic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Add one scoop (2g) to any glass of water or beverage. Stir or shake. It dissolves instantly and has no taste. Most users take 1-2 servings per day — morning and evening."
      }
    },
    {
      "@type": "Question",
      "name": "Can I take Salt.Magic every day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Salt.Magic is designed as a daily essential, not an occasional supplement. The dosage (312mg magnesium, 160mg potassium, 152mg sodium) is within safe daily intake levels for adults. 90% of our customers use it daily."
      }
    },
    {
      "@type": "Question",
      "name": "Is Salt.Magic safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The ingredients are natural minerals safe for all ages. For children, we recommend half a serving (1g). As with any supplement, consult your pediatrician if your child has specific health conditions."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Salt.Magic?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt.Magic is available on Lazada (online) and in 150+ health and wellness locations across Thailand — including Bangkok, Chiang Mai, Koh Samui, Phuket, Hua Hin, Koh Phangan, and more."
      }
    },
    {
      "@type": "Question",
      "name": "How does Salt.Magic compare to LMNT or Wilder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Salt.Magic delivers 312mg of magnesium per serving (7x more than most competitors) at 7-10 THB per serving vs. 25-40 THB for imported brands like LMNT or Wilder. Same clean-ingredient philosophy, dramatically better value."
      }
    },
    {
      "@type": "Question",
      "name": "How do I become a Salt.Magic distributor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Fill out the Partnership Inquiry Form on our website or email info@salt-magic.com. Salt.Magic offers 35-40% distributor margins with full brand and marketing support."
      }
    }
  ]
}
```

### 5.5 Article Schema (Blog Posts)

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "The Ultimate Guide to Hydration and Remineralization in Thailand's Tropical Climate",
  "author": {
    "@type": "Organization",
    "name": "Salt.Magic"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Salt.Magic",
    "logo": {
      "@type": "ImageObject",
      "url": "https://salt-magic.com/images/logo.png"
    }
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "image": "https://salt-magic.com/images/blog/hydration-guide.jpg",
  "description": "Why 85% of Thai bottled water lacks minerals, how it affects your health, and what to do about it."
}
```

### 5.6 WebSite Schema (Sitelinks Search)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Salt.Magic",
  "url": "https://salt-magic.com",
  "description": "Thailand's all-natural daily electrolyte mineralizer. Three ingredients, zero sugar, zero additives.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://salt-magic.com/blog?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## 6. GEO-Specific Technical Requirements

### AI Crawler Access
```
# robots.txt additions
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /
```

### Content Rendering
- All critical content must be in initial HTML (not client-side rendered only)
- FAQ answers must be in DOM on page load (not loaded via JS accordion interaction)
- Product data must be in JSON-LD on page load
- Comparison table data must be in HTML `<table>` elements (not CSS grid/divs only)

### Citable Content Structure
- Each major section should render as a semantic `<section>` with an `id` attribute
- H2 headings inside `<h2>` tags (not styled divs)
- Key Takeaway callouts in `<blockquote>` or `<aside>` elements
- Stats in `<table>` with proper `<thead>` and `<tbody>`
- FAQ in proper `<details>/<summary>` or equivalent with FAQ schema

---

## 7. Fixes for Current SEO Issues

| Issue | Current State | Fix |
|---|---|---|
| Duplicate page titles | Blog and article share same title | Unique titles per page (see sections above) |
| Product price in schema | Shows 890 THB | Corrected: Jar 490 THB, Sachet 290 THB |
| Broken blog internal link | Links to non-existent article | Remove or link to existing article |
| Newsletter without email capture | "Delivered to your inbox" but links to Instagram | Implement actual email capture form |
| Missing alt text on images | Product images lack descriptive alt | Add descriptive alt: "Salt.Magic glass jar with gold lid on natural stone surface" |
| No canonical URLs | Missing | Add `<link rel="canonical">` to all pages |
| No hreflang | Missing | Add if multi-language support is planned (English/Thai) |
