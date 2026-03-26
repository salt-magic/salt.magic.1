'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'
import WaterBackground from './WaterBackground'

interface Row {
  value: string
  label: string
  isText?: boolean
  positive?: boolean
}

interface Column {
  name: string
  highlight: boolean
  rows: Row[]
  summary: string
}

const columns: Column[] = [
  {
    name: 'Salt.Magic',
    highlight: true,
    rows: [
      { value: '0g', label: 'sugar' },
      { value: '312mg', label: 'magnesium' },
      { value: '2g', label: 'serving size' },
      { value: 'Natural minerals', label: 'mineral source', isText: true, positive: true },
      { value: 'Designed for it', label: 'daily use', isText: true, positive: true },
      { value: 'Everyone, all ages', label: 'target', isText: true, positive: true },
    ],
    summary: 'Pure minerals, flavorless, designed for daily wellness — all ages',
  },
  {
    name: 'Sports Drinks',
    highlight: false,
    rows: [
      { value: '27g', label: 'added sugar' },
      { value: '0–25mg', label: 'magnesium' },
      { value: '10–20g', label: 'serving size' },
      { value: 'Artificial / synthetic', label: 'mineral source', isText: true },
      { value: 'Too much sugar', label: 'daily use', isText: true },
      { value: 'Athletes only', label: 'target', isText: true },
    ],
    summary: 'Added sugar, low in electrolytes, and made with artificial ingredients',
  },
  {
    name: 'Coconut Water',
    highlight: false,
    rows: [
      { value: '28g', label: 'sugar' },
      { value: '~15mg', label: 'magnesium' },
      { value: '330ml', label: 'serving size' },
      { value: 'Natural (unbalanced)', label: 'mineral source', isText: true },
      { value: 'Too much sugar', label: 'daily use', isText: true },
      { value: 'General consumers', label: 'target', isText: true },
    ],
    summary: 'Unbalanced electrolytes, high sugar, low sodium and potassium',
  },
  {
    name: 'Other Electrolyte Mixes',
    highlight: false,
    rows: [
      { value: '11g', label: 'added sugar' },
      { value: '0–50mg', label: 'magnesium' },
      { value: '7–12g', label: 'serving size' },
      { value: 'Mixed synthetic', label: 'mineral source', isText: true },
      { value: 'Artificial ingredients', label: 'daily use', isText: true },
      { value: 'Athletes & fitness', label: 'target', isText: true },
    ],
    summary: 'Synthetic ingredients, added sugars, artificial flavors and colors',
  },
]

export default function Comparison() {
  return (
    <section className="relative">
      {/* Animated water background */}
      <WaterBackground
        color="rgba(41, 75, 109, 1)"
        animation={{ scale: 80, speed: 85 }}
        style={{ position: 'absolute', inset: 0 }}
      />

      {/* Subtle dark gradient behind headline area for guaranteed readability */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(20,40,60,0.45) 0%, rgba(20,40,60,0.15) 35%, transparent 55%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-[clamp(80px,12vw,140px)] px-[clamp(24px,5vw,64px)]">
        <FadeIn className="max-w-[1200px] mx-auto">
          <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
            The Difference
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-[#1A2F42] mb-3 tracking-tight">
            Hydrating Electrolyte Mineralizer
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-[#1A2F42]/80 max-w-[520px] mb-12">
            With 7x more magnesium than leading competitors, Salt.Magic restores
            what your water is missing — so your body can operate at 100%.
          </p>

          {/* Comparison Grid */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-lg overflow-hidden">
            {columns.map((col) => (
              <StaggerItem key={col.name}>
                <div
                  className={`p-[clamp(24px,3vw,40px)] h-full flex flex-col ${
                    col.highlight
                      ? 'bg-[rgba(25,55,80,0.75)] backdrop-blur-md border border-white/15'
                      : 'bg-[rgba(25,55,80,0.60)] backdrop-blur-md border border-white/10'
                  }`}
                >
                  <h3
                    className={`text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 ${
                      col.highlight ? 'text-gold' : 'text-white'
                    }`}
                  >
                    {col.name}
                  </h3>
                  <div className={`w-10 h-px mb-7 ${col.highlight ? 'bg-gold/50' : 'bg-white/25'}`} />
                  <div className="flex flex-col gap-5 mb-8">
                    {col.rows.map((row) => (
                      <div key={row.label}>
                        {row.isText ? (
                          <div className={`text-[14px] font-medium leading-snug mb-0.5 ${
                            row.positive ? 'text-white' : 'text-white/60'
                          }`}>
                            {row.positive && (
                              <svg viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5 text-gold">
                                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                              </svg>
                            )}
                            {row.value}
                          </div>
                        ) : (
                          <div className="font-display text-[clamp(28px,3vw,36px)] font-normal leading-none mb-0.5 text-white">
                            {row.value}
                          </div>
                        )}
                        <div
                          className={`text-[12px] font-medium tracking-[0.04em] ${
                            col.highlight ? 'text-gold' : 'text-gold/70'
                          }`}
                        >
                          {row.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p
                    className={`text-[13px] font-light leading-relaxed mt-auto ${
                      col.highlight ? 'text-white/90' : 'text-white/70'
                    }`}
                  >
                    {col.summary}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="label-uppercase text-[10px] tracking-[.15em] text-white/40 mt-6">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
