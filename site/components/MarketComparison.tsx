'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

export default function MarketComparison() {
  return (
    <section className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[clamp(40px,6vw,56px)]">
          <div className="gold-line" />
          <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
            Market Opportunity
          </p>
          <h2 className="font-display text-[clamp(28px,4.5vw,44px)] font-normal leading-[1.15] text-mineral tracking-tight">
            APAC is 5–7 years behind <em>the USA</em>
          </h2>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* USA */}
          <StaggerItem>
            <div className="rounded-2xl bg-warm-off p-8 h-full">
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-ink-light mb-6">
                USA Today
              </p>
              <div className="font-display text-[clamp(36px,5vw,52px)] font-normal text-mineral leading-none mb-2">
                $11.3B
              </div>
              <p className="text-[14px] font-light text-ink-light mb-6">Market size (2023)</p>

              <div className="space-y-3">
                {['Full retail aisles dedicated to electrolytes', 'Daily wellness positioning dominant', 'Premium brands ($2–3 per serving)', 'Multiple formats: RTD, powders, tablets'].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                    </svg>
                    <span className="text-[13px] font-light text-ink-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border-warm">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[24px] font-normal text-mineral">$21.3B</span>
                  <span className="text-[13px] text-ink-light">projected by 2034</span>
                </div>
                <span className="text-[12px] font-medium text-gold">88% growth</span>
              </div>
            </div>
          </StaggerItem>

          {/* APAC */}
          <StaggerItem>
            <div className="rounded-2xl bg-mineral p-8 h-full text-white">
              <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-golden-hour mb-6">
                Asia Pacific Today
              </p>
              <div className="font-display text-[clamp(36px,5vw,52px)] font-normal leading-none mb-2">
                $3.0B
              </div>
              <p className="text-[14px] font-light text-white/70 mb-6">Market size (2023)</p>

              <div className="space-y-3">
                {['Limited shelf presence in pharmacies', 'Still dominated by sports positioning', 'Mostly sugary options available', 'Early stage = massive opportunity'].map((item, i) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-4 h-4 shrink-0 mt-0.5 ${i === 3 ? 'text-golden-hour' : 'text-white/70'}`} aria-hidden="true">
                      {i === 3 ? (
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                      ) : (
                        <path d="M8 3v10M4 8h8" strokeLinecap="round" />
                      )}
                    </svg>
                    <span className={`text-[13px] font-light ${i === 3 ? 'text-golden-hour font-medium' : 'text-white/70'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-[24px] font-normal">$4.3B</span>
                  <span className="text-[13px] text-white/70">projected by 2030</span>
                </div>
                <span className="text-[12px] font-medium text-golden-hour">44% growth</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn className="text-center mt-8">
          <p className="text-[15px] font-display italic text-mineral">
            Thailand is where the USA was 7 years ago.
          </p>
        </FadeIn>
      </FadeIn>
    </section>
  )
}
