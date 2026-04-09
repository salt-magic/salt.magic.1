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
        'display': ['clamp(40px, 5.5vw, 64px)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'stat': ['clamp(36px, 4.5vw, 52px)', { lineHeight: '1' }],
        'h1': ['clamp(32px, 4.5vw, 48px)', { lineHeight: '1.1' }],
        'h2': ['clamp(28px, 4vw, 42px)', { lineHeight: '1.1' }],
        'h3': ['clamp(24px, 3.5vw, 36px)', { lineHeight: '1.15' }],
        'h4': ['clamp(20px, 2.5vw, 26px)', { lineHeight: '1.2' }],
        'h5': ['clamp(17px, 2vw, 20px)', { lineHeight: '1.3' }],
        'body-lg': ['clamp(16px, 1.8vw, 18px)', { lineHeight: '1.6' }],
      },
      letterSpacing: {
        'eyebrow': '0.2em',
        'cta': '0.12em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
