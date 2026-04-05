'use client'

import { useState, useEffect } from 'react'
import { FadeIn, StaggerContainer, StaggerItem } from './Motion'
import WaterBackground from './WaterBackground'

interface Column {
  name: string
  highlight: boolean
  sugar: string
  magnesium: string
  ingredients: string
  verdict: string
}

const columns: Column[] = [
  {
    name: 'Salt.Magic',
    highlight: true,
    sugar: '0g',
    magnesium: '312mg',
    ingredients: '3 natural minerals',
    verdict: 'Clean, daily hydration without the sugar crash.',
  },
  {
    name: 'Sports Drinks',
    highlight: false,
    sugar: '27g+',
    magnesium: '0–25mg',
    ingredients: 'Artificial colors & flavors',
    verdict: 'Glorified syrup. High in sugar, low in actual electrolytes.',
  },
  {
    name: 'Coconut Water',
    highlight: false,
    sugar: '28g',
    magnesium: '~15mg',
    ingredients: 'Natural, but unbalanced',
    verdict: 'A tasty treat, but too much sugar for optimal daily hydration.',
  },
  {
    name: 'Other Electrolyte Mixes',
    highlight: false,
    sugar: 'Up to 11g',
    magnesium: '0–50mg',
    ingredients: 'Synthetic blends',
    verdict: 'Overpriced, under-dosed, and often full of fillers.',
  },
]

const rows = ['Sugar', 'Magnesium', 'Ingredients'] as const
const rowKeys = ['sugar', 'magnesium', 'ingredients'] as const

export default function Comparison() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: isDesktop
          ? undefined
          : 'linear-gradient(180deg, #7EB0D4 0%, #A8CDE2 35%, #C8DFED 65%, #E4EFF6 100%)',
      }}
    >
      {/* Animated water background — desktop only */}
      {isDesktop && (
        <WaterBackground
          color="rgba(41, 75, 109, 1)"
          animation={{ scale: 80, speed: 85 }}
          style={{ position: 'absolute', inset: 0 }}
        />
      )}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: isDesktop
            ? 'linear-gradient(180deg, rgba(20,40,60,0.45) 0%, rgba(20,40,60,0.2) 35%, rgba(20,40,60,0.15) 100%)'
            : 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]">
        <FadeIn className="max-w-[1200px] mx-auto">
          <div className="text-left mb-[clamp(40px,5vw,56px)]">
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="label-uppercase text-[12px] tracking-[.22em] text-white/70 mb-5">
              How We Compare
            </p>
            <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-white mb-6 tracking-tight">
              The Clear <em>Choice</em>
            </h2>
            <p className="text-base font-light leading-relaxed text-white/70 max-w-[520px]">
              Maximum minerals. Zero junk. See how we stack up.
            </p>
          </div>

          {/* Comparison grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" role="table" aria-label="Electrolyte comparison">
              {columns.map((col) => (
                <StaggerItem key={col.name}>
                  <div role="row" className={`rounded-2xl p-[clamp(20px,3vw,32px)] h-full flex flex-col ${
                    col.highlight
                      ? 'bg-white/90 md:bg-white/95 border-2 border-gold/40'
                      : 'bg-white/50 md:bg-white/[0.65] md:backdrop-blur-md border border-white/30'
                  }`}>
                    <h3 className={`text-[13px] font-semibold uppercase tracking-[0.1em] mb-6 ${
                      col.highlight ? 'text-mineral' : 'text-deep-navy/60'
                    }`}>
                      {col.name}
                    </h3>

                    <dl className="space-y-4 flex-1">
                      {rowKeys.map((key, i) => (
                        <div key={key} className="flex justify-between items-baseline">
                          <dt className="text-[13px] text-deep-navy/70">{rows[i]}</dt>
                          <dd className={`text-[15px] font-display font-normal ${
                            col.highlight ? 'text-mineral' : 'text-deep-navy/80'
                          }`}>
                            {col[key]}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <div className="w-full h-px bg-deep-navy/10 my-5" />

                    <p className={`text-[13px] leading-relaxed ${
                      col.highlight
                        ? 'font-medium text-mineral'
                        : 'font-normal text-deep-navy/70'
                    }`}>
                      {col.verdict}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <p className="text-left text-[12px] tracking-[.15em] uppercase text-white/70 mt-8">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
