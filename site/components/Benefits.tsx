'use client'

import { StaggerContainer, StaggerItem } from './Motion'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M16 3C16 3 7 12 7 18a9 9 0 0 0 18 0c0-6-9-15-9-15z" />
        <path d="M12 20a4 4 0 0 0 4 4" opacity="0.4" />
      </svg>
    ),
    title: 'True Hydration',
    desc: 'Stop flushing water straight through your system. Real cellular hydration means your body absorbs every drop \u2014 sip one liter from morning to night for steady, all-day balance.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M27 16.4A12 12 0 1 1 14.6 4 9 9 0 0 0 27 16.4z" />
      </svg>
    ),
    title: 'Deeper Sleep',
    desc: "Magnesium is nature\u2019s relaxant. Ease muscle tension, calm your nervous system, and wake up restored.",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" opacity="0.4" />
      </svg>
    ),
    title: 'Sustained Focus',
    desc: 'Clear the brain fog. Keep your mind sharp and your concentration steady without the caffeine crash.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M29 16h-6l-4 12L11 4l-4 12H1" />
      </svg>
    ),
    title: 'Travel & Heat Recovery',
    desc: 'Replenish vital electrolytes lost to tropical heat, long flights, or simply running empty.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M8 6v20M24 6v20" />
        <path d="M8 16h16" strokeWidth="2" />
        <circle cx="5" cy="16" r="3" opacity="0.3" fill="currentColor" />
        <circle cx="27" cy="16" r="3" opacity="0.3" fill="currentColor" />
      </svg>
    ),
    title: 'Peak Performance',
    desc: 'Push harder and recover faster. Maintain your energy and prevent muscle cramps before, during, and after training.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M22 4L18 14h8L10 28l4-10H6L14 4h8z" opacity="0.15" fill="currentColor" />
        <path d="M22 4L18 14h8L10 28l4-10H6L14 4h8z" />
      </svg>
    ),
    title: 'Natural Hangover Defense',
    desc: 'Woke up wrecked? Alcohol strips magnesium, potassium, and sodium overnight. Salt.Magic restores the exact minerals you lost \u2014 fast, natural recovery.',
  },
]

export default function Benefits() {
  return (
    <section className="bg-warm-off py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-left mb-[clamp(40px,6vw,64px)]">
          <div className="gold-line" />
          <p className="label-uppercase text-ink-light mb-5">
            Daily Benefits
          </p>
          <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
            Feel the Difference
          </h2>
          <p className="text-[15px] font-normal leading-relaxed text-ink-light max-w-[480px]">
            What happens when your water actually works.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {benefits.map((item) => (
            <StaggerItem key={item.title}>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-body text-[15px] font-medium text-mineral mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[15px] font-normal leading-relaxed text-ink-light max-w-[420px]">
                    {item.desc}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
