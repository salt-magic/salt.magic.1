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
        'cream': '#F2EDE6',
        'amber-warm': '#FDF8F0',
        'ink': '#3C3028',
        'ink-light': '#5A4A3C',
        'ink-faint': '#9B8E82',
        'mineral': '#294B6D',
        'mineral-light': '#3D6588',
        'gold': '#D4BFAA',
        'gold-light': '#E2D5C5',
        'sand': '#E5DDD2',
        'border-warm': '#E8DFD3',
        'footer-dark': '#1D3347',
      },
      borderRadius: {
        'pill': '30px',
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
