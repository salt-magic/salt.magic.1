"""Visual audit: screenshot every section of the Salt.Magic homepage + key pages."""
from playwright.sync_api import sync_playwright
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit')
os.makedirs(OUT, exist_ok=True)

SECTIONS = [
    ('hero', '#__next > section:first-of-type', None),
    ('trustband', None, 600),
    ('socialproof', None, 800),
    ('why-section', '#why', None),
    ('ingredients', None, 1800),
    ('comparison', None, 2600),
    ('benefits', None, 3400),
    ('for-everyone', None, 4200),
    ('image-break', None, 4800),
    ('products', '#products', None),
    ('testimonials', None, 5800),
    ('story', '#story', None),
    ('faq', None, 7200),
    ('blog-section', None, 7800),
    ('cta-banner', None, 8400),
    ('newsletter', None, 8800),
    ('partner-teaser', None, 9200),
    ('footer', None, 9600),
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop viewport
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:3000')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(2000)  # Let animations settle

    # Full page screenshot
    page.screenshot(path=os.path.join(OUT, '00-homepage-full-desktop.png'), full_page=True)
    print('Saved: 00-homepage-full-desktop.png')

    # Scroll through sections and capture
    for i, (name, selector, scroll_y) in enumerate(SECTIONS, 1):
        if selector:
            try:
                el = page.locator(selector).first
                el.scroll_into_view_if_needed()
                page.wait_for_timeout(800)
            except:
                if scroll_y:
                    page.evaluate(f'window.scrollTo(0, {scroll_y})')
                    page.wait_for_timeout(800)
        elif scroll_y:
            page.evaluate(f'window.scrollTo(0, {scroll_y})')
            page.wait_for_timeout(800)

        fname = f'{i:02d}-{name}-desktop.png'
        page.screenshot(path=os.path.join(OUT, fname))
        print(f'Saved: {fname}')

    # Mobile viewport
    page_m = browser.new_page(viewport={'width': 375, 'height': 812})
    page_m.goto('http://localhost:3000')
    page_m.wait_for_load_state('networkidle')
    page_m.wait_for_timeout(2000)

    page_m.screenshot(path=os.path.join(OUT, '00-homepage-full-mobile.png'), full_page=True)
    print('Saved: 00-homepage-full-mobile.png')

    # Mobile: key sections
    for scroll_y, name in [(0, 'hero'), (400, 'trust'), (1200, 'why'), (2000, 'ingredients'), (2800, 'comparison'), (3600, 'benefits'), (4400, 'products'), (6000, 'cta'), (6400, 'footer')]:
        page_m.evaluate(f'window.scrollTo(0, {scroll_y})')
        page_m.wait_for_timeout(600)
        fname = f'mobile-{name}.png'
        page_m.screenshot(path=os.path.join(OUT, fname))
        print(f'Saved: {fname}')

    # Partner page
    page.goto('http://localhost:3000/partner')
    page.wait_for_load_state('networkidle')
    page.wait_for_timeout(1500)
    page.screenshot(path=os.path.join(OUT, 'partner-full-desktop.png'), full_page=True)
    print('Saved: partner-full-desktop.png')

    browser.close()
    print(f'\nDone. All screenshots in: {OUT}')
