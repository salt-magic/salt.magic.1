'use client'

import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

export default function RevenueComparison() {
  return (
    <section className="bg-warm-off py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="max-w-[1000px] mx-auto">
        <div className="text-center mb-[clamp(36px,5vw,48px)]">
          <div className="gold-line" />
          <p className="label-uppercase text-ink-light mb-5">
            The Revenue Difference
          </p>
          <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
            The Bottom Line: 4.4x More Revenue
          </h2>
          <p className="text-[15px] font-normal leading-relaxed text-ink-light max-w-[600px] mx-auto">
            We aren&apos;t selling an occasional sports recovery drink. We are selling a 365-day habit.
            Daily wellness positioning isn&apos;t just better for your customers - it&apos;s significantly
            better for your bottom line.
          </p>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {/* Wellness - Salt.Magic */}
          <StaggerItem>
            <div className="rounded-2xl bg-mineral p-8 text-white h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[12px] font-medium uppercase tracking-cta text-gold">Wellness</span>
                <span className="text-[12px] font-medium tracking-cta uppercase px-2.5 py-1 rounded-full bg-gold/20 text-gold">
                  Salt.Magic
                </span>
              </div>

              <div className="font-display text-stat font-normal text-white mb-1">
                365
              </div>
              <p className="text-[15px] font-normal text-white/70 mb-8">days per year - every single day</p>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-[13px] text-white/70">Purchase frequency</span>
                  <span className="text-[15px] font-medium text-white">Monthly</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-[13px] text-white/70">Customer LTV (1 year)</span>
                  <span className="text-[15px] font-medium text-gold">4,200 THB</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[13px] text-white/70">Retention rate</span>
                  <span className="text-[15px] font-medium text-white">90%</span>
                </div>
              </div>
            </div>
          </StaggerItem>

          {/* Fitness - Traditional */}
          <StaggerItem>
            <div className="rounded-2xl bg-white border border-border-warm p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[12px] font-medium uppercase tracking-cta text-ink-light">Fitness</span>
                <span className="text-[12px] font-medium tracking-cta uppercase px-2.5 py-1 rounded-full bg-ink-faint/10 text-ink-light">
                  Traditional
                </span>
              </div>

              <div className="font-display text-stat font-normal text-ink-light mb-1">
                3–5
              </div>
              <p className="text-[15px] font-normal text-ink-light mb-8">days per week - only after workouts</p>

              <div className="space-y-4">
                <div className="flex justify-between items-baseline border-b border-border-warm pb-3">
                  <span className="text-[13px] text-ink-light">Purchase frequency</span>
                  <span className="text-[15px] font-medium text-ink-light">Irregular</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-border-warm pb-3">
                  <span className="text-[13px] text-ink-light">Customer LTV (1 year)</span>
                  <span className="text-[15px] font-medium text-ink-light">800 THB</span>
                </div>
                <div className="flex justify-between items-baseline">
                  <span className="text-[13px] text-ink-light">Retention rate</span>
                  <span className="text-[15px] font-medium text-ink-light">25–35%</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>

      </FadeIn>
    </section>
  )
}
