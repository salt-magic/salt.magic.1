'use client'

import Link from 'next/link'
import { FadeIn } from './Motion'

const stats = [
  { value: '35–40%', label: 'Retailer Margins' },
  { value: '90%', label: 'Customer Retention' },
  { value: '160+', label: 'Partner Locations' },
]

export default function PartnerTeaser() {
  return (
    <section className="bg-warm-off px-[clamp(24px,5vw,80px)] py-[clamp(56px,8vw,80px)]">
      <FadeIn className="max-w-[1200px] mx-auto bg-mineral rounded-2xl px-[clamp(32px,5vw,56px)] py-[clamp(40px,5vw,48px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 items-center">

          {/* Left - Text */}
          <div>
            <p className="label-uppercase text-golden-hour mb-5">
              For Business
            </p>
            <h2 className="font-display text-h2 font-normal text-white tracking-tight mb-3">
              Stock Salt.Magic
            </h2>
            <p className="text-[15px] font-normal leading-[1.7] text-white/70 max-w-[440px] mb-5">
              Join Thailand&apos;s fastest-growing daily hydration brand.
            </p>
            <Link
              href="/partner"
              className="inline-block text-[12px] font-medium uppercase tracking-cta px-8 py-3.5 rounded-pill bg-gold/90 text-footer-dark hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Explore Partnership
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="flex gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < stats.length - 1 ? 'pr-8 lg:pr-12 border-r border-white/15' : ''
                }`}
              >
                <div className="font-display text-h3 font-normal text-golden-hour leading-none mb-1.5 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[12px] font-medium tracking-eyebrow uppercase text-white/50">
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
