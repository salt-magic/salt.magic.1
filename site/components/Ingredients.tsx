'use client'

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
    <StaggerContainer>
      {ingredients.map((item, i) => (
        <StaggerItem key={item.num}>
          <div className={`flex items-center gap-6 py-6 ${
            i > 0 ? 'border-t border-gold/25' : ''
          }`}>
            {/* Large number */}
            <div className="flex items-baseline gap-[3px] min-w-[110px]">
              <span className="font-display text-[clamp(40px,5vw,52px)] font-normal leading-none tracking-tight text-mineral">
                {item.num}
              </span>
              <span className="text-[13px] font-medium text-gold tracking-wide">
                {item.unit}
              </span>
            </div>

            {/* Name + benefit */}
            <div className="flex-1">
              <h3 className="text-[13px] font-semibold tracking-cta uppercase text-mineral mb-[3px]">
                {item.name}
              </h3>
              <p className="text-[15px] font-light text-ink/80 leading-normal">
                {item.benefit}
              </p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
