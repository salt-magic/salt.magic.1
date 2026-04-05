'use client'

import Image from 'next/image'
import { StaggerContainer, StaggerItem } from './Motion'

const ingredients = [
  {
    num: '312',
    unit: 'mg',
    name: 'Magnesium Citrate',
    benefit: 'For deep sleep, fast muscle recovery, and calm, mental clarity.',
  },
  {
    num: '160',
    unit: 'mg',
    name: 'Potassium Citrate',
    benefit: 'For sustained energy, cramp prevention, and perfect hydration.',
  },
  {
    num: '152',
    unit: 'mg',
    name: 'Pink Himalayan Salt',
    benefit: 'For complete balance, delivering essential sodium and 84 vital trace minerals.',
  },
]

export default function Ingredients() {
  return (
    <div className="relative">
      {/* Botanical illustration as subtle background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <Image
          src="/images/mood/botanical-illustration.png"
          alt=""
          width={800}
          height={500}
          className="opacity-[0.04] object-contain"
          aria-hidden="true"
        />
      </div>

      <StaggerContainer className="relative z-10 max-w-[900px] mx-auto px-[clamp(24px,5vw,80px)]">
        {ingredients.map((item, i) => (
          <StaggerItem key={item.num}>
            <div className={`flex items-center gap-6 sm:gap-10 py-8 ${
              i < ingredients.length - 1 ? 'border-b border-gold/20' : ''
            }`}>
              {/* Large number */}
              <div className="flex items-baseline gap-1 min-w-[120px] sm:min-w-[140px]">
                <span className="font-display text-[clamp(48px,7vw,72px)] font-normal text-mineral leading-none tracking-tight">
                  {item.num}
                </span>
                <span className="text-[13px] font-medium text-gold tracking-wide">
                  {item.unit}
                </span>
              </div>

              {/* Name + benefit */}
              <div className="flex-1">
                <h3 className="text-[15px] font-semibold tracking-[.08em] uppercase text-mineral mb-1">
                  {item.name}
                </h3>
                <p className="text-[14px] font-light text-ink-light leading-relaxed">
                  {item.benefit}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  )
}
