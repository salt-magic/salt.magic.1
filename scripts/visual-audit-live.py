"""Visual audit v3: use live Vercel URL, scroll to trigger animations."""
from playwright.sync_api import sync_playwright
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit')
os.makedirs(OUT, exist_ok=True)
URL = 'https://salt-magic-website-v2.vercel.app'

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto(URL, wait_until='networkidle', timeout=60000)
    page.wait_for_timeout(2000)

    # Scroll through entire page to trigger all intersection observer animations
    height = page.evaluate('document.body.scrollHeight')
    for y in range(0, height, 400):
        page.evaluate(f'window.scrollTo(0, {y})')
        page.wait_for_timeout(200)

    # Scroll back to top and wait
    page.evaluate('window.scrollTo(0, 0)')
    page.wait_for_timeout(800)

    # Full page
    page.screenshot(path=os.path.join(OUT, 'live-full-desktop.png'), full_page=True)
    print('Saved: live-full-desktop.png')

    # Key sections
    sections = [
        (0, 'hero'),
        (700, 'trustband-socialproof'),
        (1300, 'why-section'),
        (2100, 'ingredients'),
        (2900, 'comparison-top'),
        (3500, 'comparison-cards'),
        (4100, 'benefits'),
        (4900, 'for-everyone'),
        (5500, 'products'),
        (6300, 'testimonials'),
        (7000, 'story'),
        (7800, 'faq'),
        (8600, 'blog-cta'),
        (9400, 'newsletter-footer'),
    ]

    for y, name in sections:
        page.evaluate(f'window.scrollTo(0, {y})')
        page.wait_for_timeout(500)
        page.screenshot(path=os.path.join(OUT, f'live-{name}.png'))
        print(f'Saved: live-{name}.png')

    # Mobile
    page_m = browser.new_page(viewport={'width': 375, 'height': 812})
    page_m.goto(URL, wait_until='networkidle', timeout=60000)
    page_m.wait_for_timeout(2000)

    height_m = page_m.evaluate('document.body.scrollHeight')
    for y in range(0, height_m, 300):
        page_m.evaluate(f'window.scrollTo(0, {y})')
        page_m.wait_for_timeout(150)

    page_m.evaluate('window.scrollTo(0, 0)')
    page_m.wait_for_timeout(500)
    page_m.screenshot(path=os.path.join(OUT, 'live-full-mobile.png'), full_page=True)
    print('Saved: live-full-mobile.png')

    browser.close()
    print('Done.')
