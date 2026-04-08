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
        'warm-off': '#F9F7F4',
        'footer-dark': '#1D3347',
        'deep-navy': '#1A3248',
        'golden-hour': '#E8C9A0',
      },
      borderRadius: {
        'pill': '30px',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(44px, 6.5vw, 72px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'stat': ['clamp(48px, 6vw, 64px)', { lineHeight: '1' }],
        'h1': ['clamp(36px, 5.5vw, 56px)', { lineHeight: '1.1' }],
        'h2': ['clamp(32px, 5vw, 48px)', { lineHeight: '1.1' }],
        'h3': ['clamp(28px, 4.5vw, 40px)', { lineHeight: '1.15' }],
        'h4': ['clamp(22px, 3vw, 28px)', { lineHeight: '1.2' }],
        'h5': ['clamp(17px, 2vw, 20px)', { lineHeight: '1.3' }],
      },
      letterSpacing: {
        'eyebrow': '0.2em',
        'cta': '0.12em',
      },
    },
  },
  plugins: [],
}

export default config
