from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Mobile homepage
    mobile = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile.goto('http://localhost:3002', wait_until='networkidle')
    mobile.wait_for_timeout(2000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-full-mobile.png'), full_page=True)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-hero-mobile.png'))

    # Blog desktop
    desktop = browser.new_page(viewport={'width': 1440, 'height': 900})
    desktop.goto('http://localhost:3002/blog', wait_until='networkidle')
    desktop.wait_for_timeout(1000)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'blog-full-desktop.png'), full_page=True)

    # Blog mobile
    mobile.goto('http://localhost:3002/blog', wait_until='networkidle')
    mobile.wait_for_timeout(1000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'blog-full-mobile.png'), full_page=True)

    # Partner mobile
    mobile.goto('http://localhost:3002/partner', wait_until='networkidle')
    mobile.wait_for_timeout(1000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'partner-full-mobile.png'), full_page=True)

    browser.close()
    print("Done")
