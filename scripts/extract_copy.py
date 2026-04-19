from playwright.sync_api import sync_playwright
import json

def extract_text(page, url):
    page.goto(url, wait_until="networkidle")
    page.wait_for_timeout(3000)

    # Get all text content section by section using the page structure
    sections = page.evaluate('''() => {
        const results = [];
        // Get all direct children of main or body that are sections/divs
        const main = document.querySelector('main') || document.body;
        const children = main.children;

        for (let i = 0; i < children.length; i++) {
            const el = children[i];
            const text = el.innerText.trim();
            if (text.length > 5) {
                // Get first heading or identifiable text
                const h1 = el.querySelector('h1');
                const h2 = el.querySelector('h2');
                const h3 = el.querySelector('h3');
                const heading = h1 ? h1.innerText : (h2 ? h2.innerText : (h3 ? h3.innerText : ''));
                const eyebrow = el.querySelector('[class*="label-uppercase"], [class*="tracking-"]');
                const eyebrowText = eyebrow ? eyebrow.innerText : '';

                results.push({
                    index: i,
                    tag: el.tagName,
                    id: el.id || '',
                    heading: heading,
                    eyebrow: eyebrowText,
                    fullText: text.substring(0, 2000)
                });
            }
        }
        return results;
    }''')
    return sections

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1440, "height": 900})

    print("=== HOMEPAGE ===")
    home = extract_text(page, "http://localhost:3000")
    for s in home:
        print(f"\n--- Section {s['index']} ({s['tag']}, id={s['id']}) ---")
        if s['eyebrow']:
            print(f"Eyebrow: {s['eyebrow']}")
        if s['heading']:
            print(f"Heading: {s['heading']}")
        print(f"Text:\n{s['fullText'][:1500]}")
        print("---")

    print("\n\n=== PARTNER PAGE ===")
    partner = extract_text(page, "http://localhost:3000/partner")
    for s in partner:
        print(f"\n--- Section {s['index']} ({s['tag']}, id={s['id']}) ---")
        if s['eyebrow']:
            print(f"Eyebrow: {s['eyebrow']}")
        if s['heading']:
            print(f"Heading: {s['heading']}")
        print(f"Text:\n{s['fullText'][:1500]}")
        print("---")

    browser.close()
