import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'warm-white': '#FFFFFF',
        'cream': '#FAF8F5',
        'ink': '#2C2421',
        'ink-light': '#6B5D4F',
        'ink-faint': '#9B8E82',
        'mineral': '#294B6D',
        'gold': '#C4A882',
        'gold-light': '#D4BFAA',
        'terra': '#B86B3E',
        'sand': '#E5DDD2',
        'footer-dark': '#1D3347',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
