from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = r"c:\Users\offic\Desktop\Claude\claude-workspace-vorlage - Salt Magic\claude-workspace-vorlage-salt-magic\outputs\section-screenshots"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE = "https://salt-magic-website.vercel.app"

def capture_sections(page_url, prefix, sections_config):
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1440, "height": 900})
        page.goto(page_url, wait_until="networkidle")
        page.wait_for_timeout(4000)

        total = page.evaluate("() => document.body.scrollHeight")
        print(f"Page: {page_url}, height: {total}px")

        for name, y_start, height in sections_config:
            page.set_viewport_size({"width": 1440, "height": height})
            page.evaluate(f"window.scrollTo(0, {y_start})")
            page.wait_for_timeout(800)
            fname = f"{prefix}-{name}.png"
            page.screenshot(path=os.path.join(OUTPUT_DIR, fname))
            print(f"  OK: {fname}")

        browser.close()

# Homepage - adjusted Y values for live site
homepage = [
    ("01-nav-hero",         0,     950),
    ("02-trustband",        870,   150),
    ("03-why-section",      980,   900),
    ("04-formula",          1850,  950),
    ("05-comparison",       2750,  900),
    ("06-benefits",         3600,  700),
    ("07-for-everyone",     4200,  900),
    ("08-imagebreak",       5050,  450),
    ("09-products",         5400,  1300),
    ("10-testimonials",     6650,  600),
    ("11-socialproof",      7200,  400),
    ("12-story",            7500,  850),
    ("13-about-team",       8300,  900),
    ("14-partner-teaser",   9100,  500),
    ("15-faq",              9500,  900),
    ("16-blog",             10350, 750),
    ("17-cta-banner",       11050, 550),
    ("18-newsletter",       11500, 600),
    ("19-footer",           12100, 600),
]

partner = [
    ("01-hero",             0,     1050),
    ("02-opportunity",      1000,  700),
    ("03-usa-vs-apac",      1650,  900),
    ("04-category-proof",   2500,  800),
    ("05-the-product",      3200,  900),
    ("06-the-shift",        4000,  700),
    ("07-revenue",          4600,  800),
    ("08-comparison",       5300,  900),
    ("09-product-formats",  6100,  450),
    ("10-distribution",     6500,  900),
    ("11-revenue-model",    7300,  700),
    ("12-socialproof",      7900,  400),
    ("13-locations",        8200,  500),
    ("14-contact-form",     8600,  700),
]

capture_sections(f"{BASE}", "home", homepage)
capture_sections(f"{BASE}/partner", "partner", partner)
print("All done!")
