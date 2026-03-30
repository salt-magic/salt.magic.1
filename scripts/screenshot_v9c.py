from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit', 'v9')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    desktop = browser.new_page(viewport={'width': 1440, 'height': 900})
    desktop.goto('http://localhost:3004', wait_until='networkidle')
    desktop.wait_for_timeout(3000)

    # Hero with updated Learn More
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'hero-v9c-desktop.png'))

    # Benefits section
    desktop.evaluate('window.scrollTo(0, 4200)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'benefits-v9c-desktop.png'))

    # Testimonials
    desktop.evaluate('window.scrollTo(0, 5800)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'testimonials-v9c-desktop.png'))

    # Blog section
    desktop.evaluate('window.scrollTo(0, 8800)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'blog-v9c-desktop.png'))

    # Newsletter
    desktop.evaluate('window.scrollTo(0, 10200)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'newsletter-v9c-desktop.png'))

    # Full page
    desktop.evaluate('window.scrollTo(0, 0)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'full-v9c-desktop.png'), full_page=True)

    # Mobile
    mobile = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile.goto('http://localhost:3004', wait_until='networkidle')
    mobile.wait_for_timeout(3000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'full-v9c-mobile.png'), full_page=True)

    browser.close()
    print("Done")
