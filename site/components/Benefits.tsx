'use client'

import { StaggerContainer, StaggerItem } from './Motion'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M12 2C12 2 5 9 5 14a7 7 0 0 0 14 0c0-5-7-12-7-12z" />
      </svg>
    ),
    title: 'Enhanced Hydration',
    desc: 'Minerals your body needs to actually absorb the water you drink',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    title: 'Better Sleep',
    desc: 'Magnesium supports melatonin production and muscle relaxation',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" />
      </svg>
    ),
    title: 'Mental Focus',
    desc: 'Clear thinking and sustained concentration throughout the day',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: 'Digestive Support',
    desc: 'Magnesium citrate gently supports healthy digestion',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Faster Recovery',
    desc: 'Replenish electrolytes lost during illness, travel, or heat',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M8 2v4M16 2v4M3 10h18" />
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
      </svg>
    ),
    title: 'Hangover Relief',
    desc: 'Restore mineral balance after a night out — naturally',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <path d="M6 4v16M18 4v16M6 12h12M6 8h12M6 16h12" />
      </svg>
    ),
    title: 'Workout Performance',
    desc: 'Sustained energy and reduced cramping during exercise',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="18" cy="10" r="3" />
        <path d="M21 21v-1.5a3 3 0 0 0-3-3" />
      </svg>
    ),
    title: 'Safe for All Ages',
    desc: 'Pure minerals with nothing artificial — from kids to grandparents',
  },
]

export default function Benefits() {
  return (
    <section className="py-[clamp(80px,12vw,140px)] px-[clamp(24px,5vw,64px)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-[clamp(48px,8vw,80px)]">
          <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
            Daily Benefits
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            What proper minerals <em>do for you</em>
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {benefits.map((item) => (
            <StaggerItem key={item.title}>
              <div className="text-center">
                <div className="text-gold mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-display text-[17px] font-medium text-mineral mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] font-light leading-relaxed text-ink-light max-w-[260px] mx-auto">
                  {item.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
