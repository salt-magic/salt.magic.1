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
    title: 'Enhanced Hydration',
    desc: 'Minerals your body needs to actually absorb the water you drink',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M27 16.4A12 12 0 1 1 14.6 4 9 9 0 0 0 27 16.4z" />
      </svg>
    ),
    title: 'Better Sleep',
    desc: 'Magnesium supports melatonin production and muscle relaxation',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="16" cy="16" r="12" />
        <circle cx="16" cy="16" r="4" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" opacity="0.4" />
      </svg>
    ),
    title: 'Mental Focus',
    desc: 'Clear thinking and sustained concentration throughout the day',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M16 4c-4 6-8 10-8 16a8 8 0 0 0 16 0c0-6-4-10-8-16z" opacity="0.2" fill="currentColor" />
        <path d="M16 4c-4 6-8 10-8 16a8 8 0 0 0 16 0c0-6-4-10-8-16z" />
        <path d="M12 22c0-2 2-4 4-6" opacity="0.4" />
      </svg>
    ),
    title: 'Digestive Support',
    desc: 'Magnesium citrate gently supports healthy digestion',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M29 16h-6l-4 12L11 4l-4 12H1" />
      </svg>
    ),
    title: 'Faster Recovery',
    desc: 'Replenish electrolytes lost during illness, travel, or heat',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <path d="M22 4L18 14h8L10 28l4-10H6L14 4h8z" opacity="0.15" fill="currentColor" />
        <path d="M22 4L18 14h8L10 28l4-10H6L14 4h8z" />
      </svg>
    ),
    title: 'Hangover Relief',
    desc: 'Restore mineral balance after a night out — naturally',
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
    title: 'Workout Performance',
    desc: 'Sustained energy and reduced cramping during exercise',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8" aria-hidden="true">
        <circle cx="12" cy="10" r="5" />
        <path d="M4 28v-3a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v3" />
        <circle cx="23" cy="13" r="4" />
        <path d="M28 28v-2a4 4 0 0 0-4-4" />
      </svg>
    ),
    title: 'Safe for All Ages',
    desc: 'Pure minerals with nothing artificial — from kids to grandparents',
  },
]

export default function Benefits() {
  return (
    <section className="bg-warm-off py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-left mb-[clamp(40px,6vw,64px)]">
          <div className="gold-line" />
          <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
            Daily Benefits
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,52px)] font-normal leading-[1.1] text-mineral tracking-tight">
            What proper minerals <em className="italic">do for you</em>
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {benefits.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group flex items-start gap-4">
                <div className="w-12 h-12 shrink-0 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-mineral/10 group-hover:text-mineral transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-body text-[15px] font-medium text-mineral mb-1 tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[14px] font-light leading-relaxed text-ink-light">
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
