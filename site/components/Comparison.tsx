'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { FadeIn } from './Motion'

interface Column {
  name: string
  sugar: string
  sugarLabel: string
  magnesium: string
  ingredients: string
  verdict: string
}

const hero: Column = {
  name: 'Salt.Magic',
  sugar: '0g',
  sugarLabel: 'sugar',
  magnesium: '312mg',
  ingredients: '3 natural minerals',
  verdict: 'Clean, daily hydration without the sugar crash.',
}

const competitors: Column[] = [
  {
    name: 'Sports Drinks',
    sugar: '27g+',
    sugarLabel: 'added sugar',
    magnesium: '0\u201325mg',
    ingredients: 'Artificial colors & flavors',
    verdict: 'High in sugar, low in actual electrolytes.',
  },
  {
    name: 'Coconut Water',
    sugar: '28g',
    sugarLabel: 'sugar',
    magnesium: '~15mg',
    ingredients: 'Natural, but unbalanced',
    verdict: 'Too much sugar for optimal daily hydration.',
  },
  {
    name: 'Other Mixes',
    sugar: 'Up to 11g',
    sugarLabel: 'added sugar',
    magnesium: '0\u201350mg',
    ingredients: 'Synthetic blends',
    verdict: 'Under-dosed and often full of fillers.',
  },
]

/* Shared column renderer */
function ColContent({ col, isHero }: { col: Column; isHero: boolean }) {
  return (
    <>
      <h3
        role="cell"
        className={`text-[13px] font-semibold uppercase tracking-cta mb-7 pb-4 ${
          isHero
            ? 'text-mineral border-b-2 border-gold'
            : 'text-white/60 border-b border-white/[0.12]'
        }`}
      >
        {col.name}
      </h3>

      <div role="cell" className="mb-7">
        <div
          className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-none tracking-tight mb-1 ${
            isHero ? 'text-mineral' : 'text-white/95'
          }`}
        >
          {col.sugar}
        </div>
        <div className={`text-[13px] ${isHero ? 'text-ink-light' : 'text-white/70'}`}>
          {col.sugarLabel}
        </div>
      </div>

      <div role="cell" className="mb-7">
        <div
          className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-none tracking-tight mb-1 ${
            isHero ? 'text-mineral' : 'text-white/95'
          }`}
        >
          {col.magnesium}
        </div>
        <div className={`text-[13px] ${isHero ? 'text-ink-light' : 'text-white/70'}`}>
          magnesium
        </div>
      </div>

      <div role="cell" className="mb-7">
        <div
          className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-tight mb-1 ${
            isHero ? 'text-mineral' : 'text-white/95'
          }`}
        >
          {isHero ? '3' : '\u2014'}
        </div>
        <div className={`text-[13px] ${isHero ? 'text-ink-light' : 'text-white/70'}`}>
          {col.ingredients}
        </div>
      </div>

      <div className="mt-auto">
        <p
          role="cell"
          className={`text-[14px] leading-relaxed pt-5 ${
            isHero
              ? 'font-display italic text-mineral border-t border-gold/25'
              : 'font-light text-white/70 border-t border-white/[0.08]'
          }`}
        >
          {col.verdict}
        </p>
      </div>
    </>
  )
}

export default function Comparison() {
  const [activeComp, setActiveComp] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const touchStart = useRef(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])

  const next = useCallback(() => {
    setActiveComp((p) => (p + 1) % competitors.length)
  }, [])

  const prev = useCallback(() => {
    setActiveComp((p) => (p - 1 + competitors.length) % competitors.length)
  }, [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Water photo background */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/taylor-water.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(41,75,109,0.72) 0%, rgba(41,75,109,0.78) 40%, rgba(26,50,72,0.82) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)]">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <FadeIn>
            <div className="text-left mb-[clamp(40px,5vw,56px)]">
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="label-uppercase text-[12px] tracking-eyebrow text-white/70 mb-5">
                How We Compare
              </p>
              <h2 className="font-display text-h2 font-normal text-white tracking-tight mb-6">
                The Clear <em className="italic">Choice</em>
              </h2>
              <p className="text-[15px] font-light leading-relaxed text-white/70 max-w-[520px]">
                Maximum minerals. Zero junk. See how we stack up.
              </p>
            </div>
          </FadeIn>

          {/* ===== DESKTOP: 4 columns ===== */}
          <div
            className="hidden md:grid md:grid-cols-[1.15fr_1fr_1fr_1fr] rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.25)]"
            role="table"
            aria-label="Electrolyte comparison"
          >
            <div role="row" className="p-[clamp(28px,3vw,40px)] h-full flex flex-col bg-white shadow-[4px_0_24px_rgba(212,191,170,0.15)]">
              <ColContent col={hero} isHero />
            </div>
            {competitors.map((col) => (
              <div
                key={col.name}
                role="row"
                className="p-[clamp(28px,3vw,40px)] h-full flex flex-col bg-white/[0.12] backdrop-blur-lg border-l border-white/[0.12]"
              >
                <ColContent col={col} isHero={false} />
              </div>
            ))}
          </div>

          {/* ===== MOBILE: Salt.Magic + 1 competitor carousel ===== */}
          <div
            className="md:hidden rounded-3xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.25)]"
            role="table"
            aria-label="Electrolyte comparison"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="grid grid-cols-2">
              {/* Salt.Magic — always visible */}
              <div role="row" className="p-6 flex flex-col bg-white">
                <ColContent col={hero} isHero />
              </div>

              {/* Active competitor — swipeable */}
              <div
                role="row"
                className="p-6 flex flex-col bg-white/[0.12] backdrop-blur-lg border-l border-white/[0.12] relative"
              >
                {/* Chevron nav */}
                <button
                  onClick={next}
                  className="absolute top-6 right-5 min-h-[44px] min-w-[44px] flex items-center justify-center text-white/50 hover:text-white/80 transition-colors"
                  aria-label="Next competitor"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

                {/* Competitor content with slide transition */}
                <div key={competitors[activeComp].name} className="animate-[fadeIn_0.3s_ease-out]">
                  <ColContent col={competitors[activeComp]} isHero={false} />
                </div>
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 py-4 bg-white/[0.06]">
              {competitors.map((comp, i) => (
                <button
                  key={comp.name}
                  onClick={() => setActiveComp(i)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center"
                  aria-label={`Show ${comp.name}`}
                  aria-current={i === activeComp ? 'true' : undefined}
                >
                  <span
                    className={`block h-[2px] rounded-full transition-all duration-300 ${
                      i === activeComp ? 'w-8 bg-gold' : 'w-4 bg-white/30'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Footnote */}
          <p className="text-left text-[12px] tracking-cta uppercase text-white/50 mt-8">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </div>
      </div>
    </section>
  )
}
