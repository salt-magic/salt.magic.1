'use client'

import Link from 'next/link'
import { FadeIn } from './Motion'

const stats = [
  { value: '35–40%', label: 'Retailer Margins' },
  { value: '90%', label: 'Customer Retention' },
  { value: '150+', label: 'Partner Locations' },
]

export default function PartnerTeaser() {
  return (
    <section className="bg-footer-dark">
      <FadeIn className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(56px,8vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

          {/* Left — Text */}
          <div>
            <p className="text-[11px] font-medium tracking-[.22em] uppercase text-golden-hour mb-4">
              For Business
            </p>
            <h2 className="font-display text-[clamp(24px,3.5vw,36px)] font-normal leading-[1.2] text-white tracking-tight mb-3">
              Bring Salt.Magic to <em className="italic font-normal">your customers</em>
            </h2>
            <p className="text-[15px] font-light leading-[1.7] text-white/60 max-w-[440px] mb-5">
              Join the fastest-growing electrolyte brand in Thailand.
            </p>
            <Link
              href="/partner"
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-8 py-3.5 rounded-pill border border-white/25 text-white hover:bg-white hover:text-mineral transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Explore Partnership
            </Link>
          </div>

          {/* Right — Stats */}
          <div className="flex gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < stats.length - 1 ? 'pr-8 lg:pr-12 border-r border-white/10' : ''
                }`}
              >
                <div className="font-display text-[clamp(24px,3vw,36px)] font-normal text-white leading-none mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] font-medium tracking-[.16em] uppercase text-golden-hour/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </FadeIn>
    </section>
  )
}
