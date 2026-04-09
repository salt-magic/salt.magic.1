'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const brands = [
  {
    name: 'Liquid IV',
    desc: 'Acquired by Unilever',
    stat: '$500M+',
  },
  {
    name: 'LMNT',
    desc: 'Dominating DTC and retail',
    stat: '8-figure revenue',
  },
  {
    name: 'Liquid Death',
    desc: '100K+ retail stores',
    stat: '$1.4B',
  },
]

export default function CategoryProof() {
  return (
    <section className="py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[1100px] mx-auto">
        <div className="mb-[clamp(36px,5vw,48px)]">
          <div className="gold-line" />
          <p className="label-uppercase text-ink-light mb-5">
            Category Proof
          </p>
          <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
            Clean hydration builds unicorns.
          </h2>
          <p className="text-[15px] font-normal leading-relaxed text-ink-light max-w-[560px]">
            The biggest wellness brands of the last decade started exactly where Salt.Magic is now.
            Clean electrolytes are creating an entirely new, highly lucrative retail category.
          </p>
        </div>

        <StaggerContainer className="flex flex-col gap-px bg-border-warm rounded-2xl overflow-hidden max-w-[800px]">
          {brands.map((brand) => (
            <StaggerItem key={brand.name}>
              <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr_auto] items-center gap-2 sm:gap-6 px-6 sm:px-8 py-5 sm:py-6 bg-white">
                <h3 className="text-[14px] font-medium text-mineral">
                  {brand.name}
                </h3>
                <p className="text-[13px] font-normal text-ink-light">
                  {brand.desc}
                </p>
                <span className="font-display text-[18px] font-normal text-gold">
                  {brand.stat}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </FadeIn>
    </section>
  )
}
