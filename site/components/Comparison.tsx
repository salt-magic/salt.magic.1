'use client'

import Image from 'next/image'
import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

interface Column {
  name: string
  highlight: boolean
  sugar: string
  sugarLabel: string
  magnesium: string
  ingredients: string
  verdict: string
}

const columns: Column[] = [
  {
    name: 'Salt.Magic',
    highlight: true,
    sugar: '0g',
    sugarLabel: 'sugar',
    magnesium: '312mg',
    ingredients: '3 natural minerals',
    verdict: 'Clean, daily hydration without the sugar crash.',
  },
  {
    name: 'Sports Drinks',
    highlight: false,
    sugar: '27g+',
    sugarLabel: 'added sugar',
    magnesium: '0\u201325mg',
    ingredients: 'Artificial colors & flavors',
    verdict: 'High in sugar, low in actual electrolytes.',
  },
  {
    name: 'Coconut Water',
    highlight: false,
    sugar: '28g',
    sugarLabel: 'sugar',
    magnesium: '~15mg',
    ingredients: 'Natural, but unbalanced',
    verdict: 'Too much sugar for optimal daily hydration.',
  },
  {
    name: 'Other Mixes',
    highlight: false,
    sugar: 'Up to 11g',
    sugarLabel: 'added sugar',
    magnesium: '0\u201350mg',
    ingredients: 'Synthetic blends',
    verdict: 'Under-dosed and often full of fillers.',
  },
]

export default function Comparison() {
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
        {/* Mineral blue overlay for consistent brand color */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(41,75,109,0.82) 0%, rgba(41,75,109,0.88) 40%, rgba(26,50,72,0.92) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)]">
        <FadeIn className="max-w-[1200px] mx-auto">
          {/* Header */}
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

          {/* Comparison Grid */}
          <StaggerContainer>
            <div
              className="grid grid-cols-1 md:grid-cols-[1.15fr_1fr_1fr_1fr] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
              role="table"
              aria-label="Electrolyte comparison"
            >
              {columns.map((col) => (
                <StaggerItem key={col.name}>
                  <div
                    role="row"
                    className={`p-[clamp(28px,3vw,40px)] h-full flex flex-col ${
                      col.highlight
                        ? 'bg-white'
                        : 'bg-white/[0.08] backdrop-blur-md md:border-l md:border-white/10'
                    }`}
                  >
                    {/* Name */}
                    <h3
                      role="cell"
                      className={`text-[13px] font-semibold uppercase tracking-cta mb-7 pb-4 ${
                        col.highlight
                          ? 'text-mineral border-b-2 border-gold'
                          : 'text-white/60 border-b border-white/[0.12]'
                      }`}
                    >
                      {col.name}
                    </h3>

                    {/* Sugar */}
                    <div role="cell" className="mb-7">
                      <div
                        className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-none tracking-tight mb-1 ${
                          col.highlight ? 'text-mineral' : 'text-white/95'
                        }`}
                      >
                        {col.sugar}
                      </div>
                      <div
                        className={`text-[13px] ${
                          col.highlight ? 'text-ink-light' : 'text-white/70'
                        }`}
                      >
                        {col.sugarLabel}
                      </div>
                    </div>

                    {/* Magnesium */}
                    <div role="cell" className="mb-7">
                      <div
                        className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-none tracking-tight mb-1 ${
                          col.highlight ? 'text-mineral' : 'text-white/95'
                        }`}
                      >
                        {col.magnesium}
                      </div>
                      <div
                        className={`text-[13px] ${
                          col.highlight ? 'text-ink-light' : 'text-white/70'
                        }`}
                      >
                        magnesium
                      </div>
                    </div>

                    {/* Ingredients */}
                    <div role="cell" className="mb-7">
                      <div
                        className={`font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-tight mb-1 ${
                          col.highlight ? 'text-mineral' : 'text-white/95'
                        }`}
                      >
                        {col.highlight ? '3' : '\u2014'}
                      </div>
                      <div
                        className={`text-[13px] ${
                          col.highlight ? 'text-ink-light' : 'text-white/70'
                        }`}
                      >
                        {col.ingredients}
                      </div>
                    </div>

                    {/* Verdict */}
                    <div className="mt-auto">
                      <p
                        role="cell"
                        className={`text-[14px] leading-relaxed pt-5 ${
                          col.highlight
                            ? 'font-display italic text-mineral border-t border-gold/25'
                            : 'font-light text-white/70 border-t border-white/[0.08]'
                        }`}
                      >
                        {col.verdict}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          {/* Footnote */}
          <p className="text-left text-[12px] tracking-cta uppercase text-white/50 mt-8">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
