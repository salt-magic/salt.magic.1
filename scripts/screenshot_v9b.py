from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit', 'v9')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    # Desktop - comparison section specifically
    desktop = browser.new_page(viewport={'width': 1440, 'height': 900})
    desktop.goto('http://localhost:3003', wait_until='networkidle')
    desktop.wait_for_timeout(2000)

    # Find comparison section by scrolling to the water background area
    desktop.evaluate('window.scrollTo(0, 2400)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'comparison-top-desktop.png'))

    desktop.evaluate('window.scrollTo(0, 3000)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'comparison-cards-desktop.png'))

    # Mobile - comparison section
    mobile = browser.new_page(viewport={'width': 390, 'height': 844})
    mobile.goto('http://localhost:3003', wait_until='networkidle')
    mobile.wait_for_timeout(2000)

    # Scroll through key mobile sections
    for name, y in [('comparison', 3500), ('comparison-cards', 4200), ('benefits', 5500), ('testimonials', 7000)]:
        mobile.evaluate(f'window.scrollTo(0, {y})')
        mobile.wait_for_timeout(400)
        mobile.screenshot(path=os.path.join(OUTPUT_DIR, f'{name}-mobile.png'))

    browser.close()
    print("Done")
