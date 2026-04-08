'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const brands = [
  {
    name: 'Glacéau Vitaminwater',
    stat: 'Acquired for $4.1B',
    desc: 'by Coca-Cola',
  },
  {
    name: 'Liquid Death',
    stat: '$1.4B valuation',
    desc: '100K+ retail stores',
  },
  {
    name: 'LMNT',
    stat: '8-figure revenue',
    desc: 'DTC to retail everywhere',
  },
  {
    name: 'Liquid IV',
    stat: 'Acquired by Unilever',
    desc: '$500M+ deal',
  },
]

export default function CategoryProof() {
  return (
    <section className="bg-deep-navy py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[clamp(36px,5vw,56px)]">
          <div className="w-12 h-px bg-golden-hour/50 mx-auto mb-6" />
          <p className="text-[12px] font-medium tracking-eyebrow uppercase text-golden-hour mb-5">
            Category Proof
          </p>
          <h2 className="font-display text-h2 font-normal text-white tracking-tight mb-4">
            Clean electrolytes are creating <em>a new category</em>
          </h2>
          <p className="text-[15px] font-light leading-relaxed text-white/70 max-w-[520px] mx-auto">
            The biggest wellness brands of the last decade started exactly where Salt.Magic is now.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <StaggerItem key={brand.name}>
              <div className="rounded-2xl bg-white/[0.06] backdrop-blur-sm border border-white/[0.08] p-6 h-full text-center">
                <h3 className="font-display text-h3 font-normal text-white mb-3">
                  {brand.name}
                </h3>
                <div className="font-display text-h5 font-normal text-golden-hour leading-tight mb-2">
                  {brand.stat}
                </div>
                <p className="text-[12px] font-light text-white/70">
                  {brand.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center mt-10">
          <p className="text-[15px] font-light text-white/70 max-w-[480px] mx-auto">
            Thailand is where the USA was 7 years ago. Salt.Magic is positioned to lead the wellness electrolytes category in APAC.
          </p>
        </FadeIn>
      </FadeIn>
    </section>
  )
}
