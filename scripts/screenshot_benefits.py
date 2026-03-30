from playwright.sync_api import sync_playwright
import os

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), '..', 'outputs', 'visual-audit', 'v9')
os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    desktop = browser.new_page(viewport={'width': 1440, 'height': 900})
    desktop.goto('http://localhost:3004', wait_until='networkidle')
    desktop.wait_for_timeout(3000)

    # Find benefits by scrolling through
    for y in range(3800, 5500, 400):
        desktop.evaluate(f'window.scrollTo(0, {y})')
        desktop.wait_for_timeout(300)
        desktop.screenshot(path=os.path.join(OUTPUT_DIR, f'scroll-{y}-desktop.png'))

    # Testimonials with avatar
    desktop.evaluate('window.scrollTo(0, 6400)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'testimonial-avatar-desktop.png'))

    # Newsletter
    desktop.evaluate('window.scrollTo(0, 10600)')
    desktop.wait_for_timeout(500)
    desktop.screenshot(path=os.path.join(OUTPUT_DIR, 'newsletter-v9c-detail.png'))

    browser.close()
    print("Done")
