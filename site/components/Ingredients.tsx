'use client'

import { StaggerContainer, StaggerItem } from './Motion'

const ingredients = [
  {
    num: '532',
    unit: 'mg',
    name: 'Potassium Citrate',
    subtitle: '15% Daily Value',
    benefit: "For sustained energy, muscle cramp relief, and natural fluid balance. Your body's most important everyday electrolyte \u2014 depleted by sweat, heat, and stress.",
  },
  {
    num: '189',
    unit: 'mg',
    name: 'Sodium',
    subtitle: 'from Pink Himalayan Salt \u00b7 8% Daily Value',
    benefit: "For complete mineral balance. We use less than a fifth of the sodium typical electrolyte mixes pack into one serving \u2014 cardiovascularly responsible hydration that\u2019s safe to sip all day.",
  },
  {
    num: '135',
    unit: 'mg',
    name: 'Trimagnesium Citrate',
    subtitle: '32% Daily Value',
    benefit: 'For deep sleep, fast muscle recovery, and calm mental clarity. Trimagnesium Citrate Anhydrous is one of the most bioavailable forms of magnesium \u2014 your body absorbs more of every milligram.',
  },
]

export default function Ingredients() {
  return (
    <StaggerContainer>
      {ingredients.map((item, i) => (
        <StaggerItem key={item.num}>
          <div className={`flex items-center gap-4 sm:gap-6 py-6 ${
            i > 0 ? 'border-t border-gold/25' : ''
          }`}>
            {/* Large number */}
            <div className="flex items-baseline gap-[3px] min-w-[90px] sm:min-w-[110px]">
              <span className="font-display text-stat font-normal leading-none tracking-tight text-mineral">
                {item.num}
              </span>
              <span className="text-[13px] font-medium text-gold tracking-wide">
                {item.unit}
              </span>
            </div>

            {/* Name + benefit */}
            <div className="flex-1">
              <h3 className="text-[12px] font-medium tracking-eyebrow uppercase text-mineral mb-[3px]">
                {item.name}
              </h3>
              {item.subtitle && (
                <p className="text-[12px] font-normal tracking-wide text-ink-light/80 mb-1.5">
                  {item.subtitle}
                </p>
              )}
              <p className="text-[15px] font-normal text-ink/80 leading-normal">
                {item.benefit}
              </p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
