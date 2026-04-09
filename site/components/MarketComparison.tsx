'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

export default function MarketComparison() {
  return (
    <section className="py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[1100px] mx-auto">
        <div className="text-center mb-[clamp(32px,5vw,48px)]">
          <div className="gold-line" />
          <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-5">
            The Opportunity
          </p>
          <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
            APAC is 5–7 years behind the USA
          </h2>
          <p className="text-[15px] font-normal leading-relaxed text-ink-light max-w-[640px] mx-auto">
            The US hydration market is already an <strong className="font-medium text-ink">$11.3B industry</strong> dominated by
            daily wellness brands. Asia-Pacific is at $3.0B - surging with{' '}
            <strong className="font-medium text-ink">44% projected growth</strong>. Thailand is sitting exactly where the US was 7 years ago.
          </p>
        </div>

        {/* 85% Dead Water Callout */}
        <div className="flex items-center justify-center gap-4 px-8 py-5 bg-white border border-border-warm rounded-xl mb-[clamp(32px,4vw,48px)] max-w-[600px] mx-auto">
          <span className="font-display text-[40px] font-normal text-mineral leading-none">85%</span>
          <span className="text-[14px] font-normal text-ink-light leading-snug text-left">
            of Thai bottled water is <strong className="font-medium text-ink">filtered, not mineralized</strong>.<br />
            The market is wide open for real hydration.
          </span>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          {/* USA */}
          <StaggerItem>
            <div className="rounded-2xl bg-warm-off p-8 h-full">
              <p className="text-[12px] font-medium tracking-cta uppercase text-ink-light mb-6">
                USA Today
              </p>
              <div className="font-display text-h1 font-normal text-mineral mb-2">
                $11.3B
              </div>
              <p className="text-[15px] font-normal text-ink-light mb-6">Market size (2023)</p>

              <div className="space-y-3">
                {['Full retail aisles dedicated to electrolytes', 'Daily wellness positioning dominant', 'Premium brands command high margins'].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold shrink-0 mt-0.5" aria-hidden="true">
                      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
                    </svg>
                    <span className="text-[13px] font-normal text-ink-light">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-border-warm">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-h4 font-normal text-mineral">$21.3B</span>
                  <span className="text-[13px] text-ink-light">projected by 2034</span>
                </div>
                <span className="text-[12px] font-medium text-gold">88% growth</span>
              </div>
            </div>
          </StaggerItem>

          {/* APAC */}
          <StaggerItem>
            <div className="rounded-2xl bg-mineral p-8 h-full text-white">
              <p className="text-[12px] font-medium tracking-cta uppercase text-golden-hour mb-6">
                Asia Pacific Today
              </p>
              <div className="font-display text-h1 font-normal mb-2">
                $3.0B
              </div>
              <p className="text-[15px] font-normal text-white/70 mb-6">Market size (2023)</p>

              <div className="space-y-3">
                {['Limited shelf presence in pharmacies', 'Still dominated by sugary sports drinks', 'Early stage = massive first-mover opportunity'].map((item, i) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={`w-4 h-4 shrink-0 mt-0.5 ${i === 2 ? 'text-golden-hour' : 'text-white/70'}`} aria-hidden="true">
                      {i === 2 ? (
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" />
                      ) : (
                        <path d="M8 3v10M4 8h8" strokeLinecap="round" />
                      )}
                    </svg>
                    <span className={`text-[13px] font-normal ${i === 2 ? 'text-golden-hour font-medium' : 'text-white/70'}`}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-h4 font-normal">$4.3B</span>
                  <span className="text-[13px] text-white/70">projected by 2030</span>
                </div>
                <span className="text-[12px] font-medium text-golden-hour">44% growth</span>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <FadeIn className="text-center mt-8">
          <p className="text-[16px] font-display text-mineral">
            The wave is coming.
          </p>
        </FadeIn>
      </FadeIn>
    </section>
  )
}
