'use client'

import { useState, useEffect } from 'react'
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
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section className="relative overflow-hidden bg-mineral md:bg-transparent">
      {/* Animated water background — desktop only for performance */}
      {isDesktop && (
        <WaterBackground
          color="rgba(41, 75, 109, 1)"
          animation={{ scale: 80, speed: 85 }}
          style={{ position: 'absolute', inset: 0 }}
        />
      )}

      {/* Dark overlay — keeps water animation vibrant */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(20,40,60,0.45) 0%, rgba(20,40,60,0.2) 35%, rgba(20,40,60,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]">
        <FadeIn className="max-w-[1200px] mx-auto">
          <div className="text-left mb-[clamp(40px,5vw,56px)]">
            <div className="gold-line" />
            <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
              How We Compare
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-deep-navy mb-3 tracking-tight">
              Not all electrolytes are <em>created equal</em>
            </h2>
            <p className="text-[15px] font-light leading-relaxed text-deep-navy/80 max-w-[520px]">
              7x more magnesium than leading competitors. Zero sugar. Zero additives.
            </p>
          </div>

          {/* Salt.Magic highlight card — glass effect */}
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <div className="rounded-2xl bg-[rgba(25,55,80,0.75)] backdrop-blur-md border border-white/15 p-[clamp(24px,4vw,40px)]">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold">Salt.Magic</span>
                  <span className="text-[10px] font-medium tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-gold/20 text-gold">
                    Our Formula
                  </span>
                </div>

                <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-4">
                  {columns[0].rows.map((row) => (
                    <div key={row.label}>
                      <div className="font-display text-[clamp(22px,3vw,32px)] font-normal leading-none text-white mb-1">
                        {row.isText ? (
                          <span className="text-[15px] font-medium leading-snug flex items-center gap-1.5">
                            <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold shrink-0" aria-hidden="true">
                              <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                            </svg>
                            {row.value}
                          </span>
                        ) : row.value}
                      </div>
                      <div className="text-[11px] font-medium tracking-[0.04em] text-gold/80 mt-1">
                        {row.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>

            {/* Competitor cards — frosted glass */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {columns.slice(1).map((col) => (
                <StaggerItem key={col.name}>
                  <div className="rounded-2xl bg-white/[0.65] backdrop-blur-md border border-white/30 p-[clamp(20px,3vw,32px)] h-full">
                    <h3 className="text-[12px] font-semibold uppercase tracking-[0.1em] text-deep-navy/60 mb-5">
                      {col.name}
                    </h3>

                    <div className="space-y-4">
                      {col.rows.slice(0, 3).map((row) => (
                        <div key={row.label} className="flex justify-between items-baseline">
                          <span className="text-[12px] text-deep-navy/50">{row.label}</span>
                          <span className="text-[15px] font-display font-normal text-deep-navy/80">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="w-full h-px bg-deep-navy/10 my-4" />

                    <p className="text-[12px] font-light leading-relaxed text-deep-navy/50">
                      {col.summary}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <p className="text-left text-[10px] tracking-[.15em] uppercase text-deep-navy/40 mt-8">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
