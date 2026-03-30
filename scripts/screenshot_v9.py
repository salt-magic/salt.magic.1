from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit', 'v9')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop
    desktop = browser.new_page(viewport={'width': 1440, 'height': 900})
    desktop.goto('http://localhost:3003', wait_until='networkidle')
    desktop.wait_for_timeout(2000)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-full-desktop.png'), full_page=True)

    # Scroll to products section
    desktop.evaluate('document.getElementById("products")?.scrollIntoView({behavior: "instant"})')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'products-desktop.png'))

    # Scroll to comparison (section after products)
    desktop.evaluate('window.scrollTo(0, document.getElementById("products").offsetTop + 1200)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'comparison-desktop.png'))

    # Mobile
    mobile = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile.goto('http://localhost:3003', wait_until='networkidle')
    mobile.wait_for_timeout(2000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-full-mobile.png'), full_page=True)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'hero-mobile.png'))

    # Scroll past hero to trigger sticky CTA
    mobile.evaluate('window.scrollTo(0, window.innerHeight * 1.5)')
    mobile.wait_for_timeout(800)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'sticky-cta-mobile.png'))

    # Products mobile
    mobile.evaluate('document.getElementById("products")?.scrollIntoView({behavior: "instant"})')
    mobile.wait_for_timeout(500)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'products-mobile.png'))

    browser.close()
    print("Done")
