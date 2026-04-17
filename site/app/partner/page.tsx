import type { Metadata } from 'next'
import Image from 'next/image'
import PartnerHero from '@/components/PartnerHero'
import MarketComparison from '@/components/MarketComparison'
import CategoryProof from '@/components/CategoryProof'
import RevenueComparison from '@/components/RevenueComparison'
import Comparison from '@/components/Comparison'
import PartnerForm from '@/components/PartnerForm'

export const metadata: Metadata = {
  title: 'Partner With Us - Salt.Magic Distribution',
  description:
    "Join Thailand's fastest-growing electrolyte brand. 35-40% margins, 90% customer retention, 160+ locations.",
}

export default function PartnerPage() {
  return (
    <>
      {/* 1. Hero */}
      <PartnerHero />

      {/* 2. Market Opportunity (merged - Leo's Copy) */}
      <section className="bg-warm-off">
        <MarketComparison />
      </section>

      {/* 4. Category Proof - billion-dollar brands */}
      <CategoryProof />

      {/* 5. Why Distribute - Leo's Copy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
        <div className="relative h-[50vh] min-h-[280px] lg:h-auto lg:min-h-0 overflow-hidden">
          <Image
            src="/images/products/taylor-closeup.jpg"
            alt="Salt.Magic glass jar - natural electrolytes in tropical setting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-[clamp(32px,6vw,80px)] py-[clamp(56px,8vw,100px)]">
          <div className="max-w-[460px]">
            <div className="gold-line" />
            <p className="label-uppercase text-ink-light mb-5">
              Why Distribute
            </p>
            <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
              Why distribute Salt.Magic?
            </h2>
            <p className="text-[15px] font-normal leading-relaxed text-ink-light mb-8">
              Bring Thailand&apos;s first sugar-free, flavorless daily electrolyte mineralizer to your customers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[15px] font-normal text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">35–40% retailer margins</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[15px] font-normal text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">90% customer retention</strong> across 160+ partner locations</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] font-normal text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">Cardiovascularly responsible sodium (189mg)</strong> &mdash; safe for daily, all-day use. Three ingredients. Zero compromise.</span>
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="#partner-form"
                className="inline-block px-8 py-3.5 bg-mineral text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Become a Distribution Partner
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Daily vs Sporadic Revenue */}
      <RevenueComparison />

      {/* 8. Comparison */}
      <Comparison />

      {/* 9. Product Formats Break */}
      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-[320px]">
        <div className="relative h-[280px] sm:h-auto overflow-hidden">
          <Image
            src="/images/products/greenery-jars.jpg"
            alt="Signature Glass Jar - 160g, 70 servings, 490 THB"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 bg-gradient-to-t from-[rgba(26,50,72,0.85)] via-[rgba(26,50,72,0.4)] to-transparent">
            <h3 className="font-display text-[20px] font-normal text-white mb-1">Signature Glass Jar</h3>
            <p className="text-[12px] font-normal text-white/70">160g - 70 servings</p>
            <p className="text-[13px] font-medium text-gold mt-1">MSRP 490 THB</p>
          </div>
        </div>
        <div className="relative h-[280px] sm:h-auto overflow-hidden">
          <Image
            src="/images/products/sachet.jpg"
            alt="Travel Sachet - 60g, 20 servings, 290 THB"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-6 pt-16 bg-gradient-to-t from-[rgba(26,50,72,0.85)] via-[rgba(26,50,72,0.4)] to-transparent">
            <h3 className="font-display text-[20px] font-normal text-white mb-1">Travel Sachet</h3>
            <p className="text-[12px] font-normal text-white/70">60g - 20 servings</p>
            <p className="text-[13px] font-medium text-gold mt-1">MSRP 290 THB</p>
          </div>
        </div>
      </section>

      {/* 9b. Inline CTA */}
      <section className="py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)] text-center">
        <p className="text-[15px] font-normal text-ink-light mb-6">
          Ready to bring real hydration to your customers?
        </p>
        <a
          href="#partner-form"
          className="inline-block px-8 py-3.5 bg-mineral text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Become a Distribution Partner
        </a>
      </section>

      {/* 10. Contact Form */}
      <section className="bg-warm-off">
        <PartnerForm />
      </section>
    </>
  )
}
