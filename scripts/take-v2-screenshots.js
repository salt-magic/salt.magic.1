const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const URL = 'https://salt-magic-website-v2.vercel.app/';
const OUT_DIR = path.join(__dirname, '..', 'outputs', 'v2-screenshots');

async function run() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  console.log(`Loading ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(4000);

  // Pre-scroll for lazy images
  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${fullHeight}px`);
  for (let y = 0; y < fullHeight; y += 600) {
    await page.evaluate(sy => window.scrollTo(0, sy), y);
    await page.waitForTimeout(200);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(1000);

  // Get all section positions by analyzing the DOM structure
  const sectionData = await page.evaluate(() => {
    const pageH = document.body.scrollHeight;

    // Get all top-level children of main#main-content
    const main = document.getElementById('main-content');
    if (!main) return [];

    const sections = [];
    const children = main.children;

    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rect = child.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = rect.height;
      // Get text hint
      const text = child.textContent.substring(0, 200).replace(/\s+/g, ' ').trim();
      sections.push({ index: i, top, height, text, tag: child.tagName });
    }

    // Also get announcement bar, nav, and footer
    const annoBar = document.querySelector('[role="marquee"]');
    const footer = document.querySelector('footer');

    return {
      sections,
      annoBar: annoBar ? (() => { const r = annoBar.getBoundingClientRect(); return { top: r.top + window.scrollY, height: r.height }; })() : null,
      footer: footer ? (() => { const r = footer.getBoundingClientRect(); return { top: r.top + window.scrollY, height: r.height }; })() : null,
      pageHeight: pageH,
    };
  });

  console.log(`Found ${sectionData.sections.length} main children\n`);

  // Debug: print all sections
  for (const s of sectionData.sections) {
    console.log(`  [${s.index}] y:${Math.round(s.top)} h:${Math.round(s.height)} <${s.tag}> "${s.text.substring(0, 80)}..."`);
  }
  console.log('');

  // Map sections to filenames based on their content/order
  // The homepage structure (from page.tsx) is:
  // 0: Hero
  // 1: TrustBand
  // 2: WhySection
  // 3: Formula (section with bg-warm-off containing TextBlock+Ingredients)
  // 4: Gold divider (small)
  // 5: Comparison
  // 6: Benefits
  // 7: ForEveryone
  // 8: ImageBreak
  // 9: Products section
  // 10: Testimonials section (bg-warm-off)
  // 11: StorySection
  // 12: FAQ (bg-warm-off)
  // 13: Blog section
  // 14: CtaBanner
  // 15: Newsletter
  // 16: PartnerTeaser
  // 17: Bottom spacer

  const mapping = [
    { idx: 0, name: 'hero', file: 'v2-01-hero.png' },
    { idx: 1, name: 'trustband', file: 'v2-02-trustband.png' },
    { idx: 2, name: 'why-section', file: 'v2-03-why-section.png' },
    { idx: 3, name: 'formula-ingredients', file: 'v2-04-formula-ingredients.png' },
    // skip idx 4 (gold divider)
    { idx: 5, name: 'comparison', file: 'v2-05-comparison.png' },
    { idx: 6, name: 'benefits', file: 'v2-06-benefits.png' },
    { idx: 7, name: 'for-everyone', file: 'v2-07-for-everyone.png' },
    // skip idx 8 (image break)
    { idx: 9, name: 'products', file: 'v2-08-products.png' },
    { idx: 10, name: 'testimonials', file: 'v2-09-testimonials.png' },
    { idx: 11, name: 'story', file: 'v2-10-story.png' },
    { idx: 12, name: 'faq', file: 'v2-11-faq.png' },
    { idx: 13, name: 'blog-section', file: 'v2-12-blog-section.png' },
    { idx: 14, name: 'cta-banner', file: 'v2-13-cta-banner.png' },
    { idx: 15, name: 'newsletter', file: 'v2-14-newsletter.png' },
    { idx: 16, name: 'partner-teaser', file: 'v2-15-partner-teaser.png' },
  ];

  const pageWidth = 1440;

  // Capture announcement bar + nav + hero together as first screenshot
  // (just the viewport at top)
  const navHeroPath = path.join(OUT_DIR, 'v2-01-nav-hero.png');
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);
  await page.screenshot({ path: navHeroPath });
  console.log(`  v2-01-nav-hero.png (${(fs.statSync(navHeroPath).size / 1024).toFixed(0)} KB) — viewport top`);

  // Capture each mapped section
  for (const m of mapping) {
    const sec = sectionData.sections[m.idx];
    if (!sec) {
      console.log(`  SKIP ${m.file} — section index ${m.idx} not found`);
      continue;
    }

    const outPath = path.join(OUT_DIR, m.file);
    const clipTop = Math.max(0, Math.round(sec.top - 10));
    const clipHeight = Math.min(Math.round(sec.height + 20), sectionData.pageHeight - clipTop, 3000);

    if (clipHeight <= 0) {
      console.log(`  SKIP ${m.file} — invalid clip`);
      continue;
    }

    try {
      await page.screenshot({
        path: outPath,
        fullPage: true,
        clip: { x: 0, y: clipTop, width: pageWidth, height: clipHeight },
      });
      const size = fs.statSync(outPath).size;
      console.log(`  ${m.file} (${(size / 1024).toFixed(0)} KB) — y:${clipTop} h:${clipHeight}`);
    } catch (err) {
      console.error(`  FAILED ${m.file}: ${err.message}`);
    }
  }

  // Footer
  if (sectionData.footer) {
    const outPath = path.join(OUT_DIR, 'v2-16-footer.png');
    const clipTop = Math.max(0, Math.round(sectionData.footer.top - 10));
    const clipHeight = Math.min(Math.round(sectionData.footer.height + 20), sectionData.pageHeight - clipTop);
    try {
      await page.screenshot({
        path: outPath,
        fullPage: true,
        clip: { x: 0, y: clipTop, width: pageWidth, height: clipHeight },
      });
      console.log(`  v2-16-footer.png (${(fs.statSync(outPath).size / 1024).toFixed(0)} KB) — y:${clipTop} h:${clipHeight}`);
    } catch (err) {
      console.error(`  FAILED v2-16-footer.png: ${err.message}`);
    }
  }

  await browser.close();
  console.log(`\nDone! Screenshots saved to ${OUT_DIR}`);
}

run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
