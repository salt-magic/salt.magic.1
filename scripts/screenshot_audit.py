from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop viewport
    page = browser.new_page(viewport={'width': 1440, 'height': 900})

    # Homepage full page
    page.goto('http://localhost:3001', wait_until='networkidle')
    page.wait_for_timeout(2000)  # Let animations settle
    page.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-full-desktop.png'), full_page=True)

    # Homepage above-the-fold
    page.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-hero-desktop.png'))

    # Scroll through sections and capture key areas
    sections = [
        ('trust-band', 1000),
        ('why-section', 1800),
        ('products', 3200),
        ('benefits', 4500),
        ('testimonials', 5500),
        ('cta-banner', 6500),
        ('ingredients', 7500),
        ('faq', 8500),
        ('footer', 9500),
    ]

    for name, scroll_y in sections:
        page.evaluate(f'window.scrollTo(0, {scroll_y})')
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(OUTPUT_DIR, f'section-{name}-desktop.png'))

    # Partner page
    page.goto('http://localhost:3001/partner', wait_until='networkidle')
    page.wait_for_timeout(2000)
    page.screenshot(path=os.path.join(OUTPUT_DIR, 'partner-full-desktop.png'), full_page=True)

    # Blog page
    page.goto('http://localhost:3001/blog', wait_until='networkidle')
    page.wait_for_timeout(1000)
    page.screenshot(path=os.path.join(OUTPUT_DIR, 'blog-full-desktop.png'), full_page=True)

    # Mobile viewport
    mobile = browser.new_page(viewport={'width': 390, 'height': 844})

    # Mobile homepage
    mobile.goto('http://localhost:3001', wait_until='networkidle')
    mobile.wait_for_timeout(2000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-full-mobile.png'), full_page=True)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'homepage-hero-mobile.png'))

    # Mobile partner
    mobile.goto('http://localhost:3001/partner', wait_until='networkidle')
    mobile.wait_for_timeout(1000)
    mobile.screenshot(path=os.path.join(OUTPUT_DIR, 'partner-full-mobile.png'), full_page=True)

    browser.close()
    print(f"Screenshots saved to {OUTPUT_DIR}")
