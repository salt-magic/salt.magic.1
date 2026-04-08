'use client'

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
    magnesium: '0–25mg',
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
    name: 'Other Electrolyte Mixes',
    highlight: false,
    sugar: 'Up to 11g',
    sugarLabel: 'added sugar',
    magnesium: '0–50mg',
    ingredients: 'Synthetic blends',
    verdict: 'Under-dosed and often full of fillers.',
  },
]

export default function Comparison() {
  return (
    <section className="bg-white">
      <div className="py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)]">
        <FadeIn className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-left mb-[clamp(40px,5vw,56px)]">
            <div className="w-12 h-px bg-gold mb-6" />
            <p className="label-uppercase text-[12px] tracking-eyebrow text-ink-light mb-5">
              How We Compare
            </p>
            <h2 className="font-display text-h2 font-normal text-ink tracking-tight mb-6">
              The Clear <em className="italic">Choice</em>
            </h2>
            <p className="text-[15px] font-light leading-relaxed text-ink-light max-w-[520px]">
              Maximum minerals. Zero junk. See how we stack up.
            </p>
          </div>

          {/* Comparison Grid */}
          <StaggerContainer>
            <div
              className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1fr_1fr] rounded-2xl overflow-hidden"
              role="table"
              aria-label="Electrolyte comparison"
            >
              {columns.map((col) => (
                <StaggerItem key={col.name}>
                  <div
                    role="row"
                    className={`p-[clamp(24px,3vw,40px)] h-full flex flex-col ${
                      col.highlight
                        ? 'bg-white md:border-r md:border-gold/25'
                        : 'bg-mineral text-white md:border-r md:border-white/10 md:last:border-r-0'
                    }`}
                  >
                    {/* Name */}
                    <h3
                      role="cell"
                      className={`text-[13px] font-semibold uppercase tracking-cta mb-7 pb-4 ${
                        col.highlight
                          ? 'text-mineral border-b-2 border-gold'
                          : 'text-white/70 border-b border-white/15'
                      }`}
                    >
                      {col.name}
                    </h3>

                    {/* Sugar */}
                    <div role="cell" className="mb-7">
                      <div
                        className={`font-display text-[clamp(36px,4.5vw,52px)] font-normal leading-none tracking-tight mb-1 ${
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
                        className={`font-display text-[clamp(36px,4.5vw,52px)] font-normal leading-none tracking-tight mb-1 ${
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
                        className={`font-display text-[clamp(20px,2.5vw,28px)] font-normal leading-tight mb-1 ${
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
                            : 'font-light text-white/70 border-t border-white/10'
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
          <p className="text-left text-[12px] tracking-cta uppercase text-ink-faint mt-8">
            Based on a 2g serving of Salt.Magic vs typical 16oz servings
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
