"""Visual audit v2: scroll through page to trigger all animations, then screenshot."""
from playwright.sync_api import sync_playwright
import os

OUT = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit')
os.makedirs(OUT, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={'width': 1440, 'height': 900})
    page.goto('http://localhost:3000', wait_until='domcontentloaded', timeout=60000)
    page.wait_for_timeout(3000)

    # Scroll through entire page to trigger all intersection observer animations
    height = page.evaluate('document.body.scrollHeight')
    step = 400
    for y in range(0, height, step):
        page.evaluate(f'window.scrollTo(0, {y})')
        page.wait_for_timeout(200)

    # Scroll back to top
    page.evaluate('window.scrollTo(0, 0)')
    page.wait_for_timeout(500)

    # Now take full-page screenshot with all animations triggered
    page.screenshot(path=os.path.join(OUT, 'full-desktop-animated.png'), full_page=True)
    print('Saved: full-desktop-animated.png')

    # Section-by-section screenshots by scrolling to each area
    sections = [
        (0, 'hero'),
        (650, 'trustband-socialproof'),
        (1200, 'why-section'),
        (2000, 'ingredients'),
        (2800, 'comparison'),
        (3600, 'benefits'),
        (4400, 'for-everyone'),
        (5000, 'imagebreak'),
        (5500, 'products'),
        (6200, 'testimonials'),
        (6800, 'story'),
        (7600, 'faq'),
        (8400, 'blog'),
        (9000, 'cta-banner'),
        (9500, 'newsletter-partner'),
        (10000, 'footer'),
    ]

    for y, name in sections:
        page.evaluate(f'window.scrollTo(0, {y})')
        page.wait_for_timeout(400)
        fname = f'v2-{name}.png'
        page.screenshot(path=os.path.join(OUT, fname))
        print(f'Saved: {fname}')

    # Mobile
    page_m = browser.new_page(viewport={'width': 375, 'height': 812})
    page_m.goto('http://localhost:3000', wait_until='domcontentloaded', timeout=60000)
    page_m.wait_for_timeout(3000)

    # Scroll through to trigger animations
    height_m = page_m.evaluate('document.body.scrollHeight')
    for y in range(0, height_m, 300):
        page_m.evaluate(f'window.scrollTo(0, {y})')
        page_m.wait_for_timeout(150)

    page_m.evaluate('window.scrollTo(0, 0)')
    page_m.wait_for_timeout(500)
    page_m.screenshot(path=os.path.join(OUT, 'full-mobile-animated.png'), full_page=True)
    print('Saved: full-mobile-animated.png')

    # Key mobile sections
    for y, name in [(0, 'hero'), (800, 'socialproof'), (1600, 'why'), (2800, 'ingredients'), (4000, 'comparison'), (5200, 'benefits'), (6400, 'for-everyone'), (7600, 'products'), (9000, 'story'), (10200, 'cta'), (10800, 'footer')]:
        page_m.evaluate(f'window.scrollTo(0, {y})')
        page_m.wait_for_timeout(300)
        fname = f'v2-mobile-{name}.png'
        page_m.screenshot(path=os.path.join(OUT, fname))
        print(f'Saved: {fname}')

    browser.close()
    print('Done.')
