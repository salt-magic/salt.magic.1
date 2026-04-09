import type { Metadata } from 'next'
import Image from 'next/image'
import PartnerHero from '@/components/PartnerHero'
import MarketComparison from '@/components/MarketComparison'
import CategoryProof from '@/components/CategoryProof'
import RevenueComparison from '@/components/RevenueComparison'
import TextBlock from '@/components/TextBlock'
import Comparison from '@/components/Comparison'
import DistributionTiers from '@/components/DistributionTiers'
import RevenueModel from '@/components/RevenueModel'
import SocialProof from '@/components/SocialProof'
import LocationMap from '@/components/LocationMap'
import PartnerForm from '@/components/PartnerForm'

export const metadata: Metadata = {
  title: 'Partner With Us — Salt.Magic Distribution',
  description:
    "Join Thailand's fastest-growing electrolyte brand. 35-40% margins, 90% customer retention, 160+ locations.",
}

export default function PartnerPage() {
  return (
    <>
      {/* 1. Hero */}
      <PartnerHero />

      {/* 2. Market Opportunity (merged — Leo's Copy) */}
      <section className="bg-warm-off">
        <MarketComparison />
      </section>

      {/* 4. Category Proof — billion-dollar brands */}
      <CategoryProof />

      {/* 5. Why Distribute — Leo's Copy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
        <div className="relative h-[50vh] lg:h-auto overflow-hidden">
          <Image
            src="/images/products/taylor-closeup.jpg"
            alt="Salt.Magic glass jar — natural electrolytes in tropical setting"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex items-center px-[clamp(32px,6vw,80px)] py-[clamp(56px,8vw,100px)]">
          <div className="max-w-[460px]">
            <div className="gold-line" />
            <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
              Why Distribute
            </p>
            <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
              Why distribute <em className="italic">Salt.Magic?</em>
            </h2>
            <p className="text-[15px] font-light leading-relaxed text-ink-light mb-8">
              Bring Thailand&apos;s first sugar-free, flavorless daily electrolyte mineralizer to your customers.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[15px] font-light text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">35–40% retailer margins</strong></span>
              </li>
              <li className="flex items-start gap-3 text-[15px] font-light text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">90% customer retention</strong> across 160+ partner locations</span>
              </li>
              <li className="flex items-start gap-3 text-[15px] font-light text-ink-light leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-2.5" />
                <span><strong className="font-medium text-ink">7x more magnesium</strong> than competitors. Zero sugar. Zero plastic waste.</span>
              </li>
            </ul>
            <div className="mt-10">
              <a
                href="#partner-form"
                className="inline-block px-8 py-3.5 bg-mineral text-white text-[12px] font-semibold tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300"
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
      <section className="grid grid-cols-1 sm:grid-cols-3 min-h-[320px]">
        <div className="relative h-[280px] sm:h-auto overflow-hidden">
          <Image
            src="/images/products/greenery-jars.jpg"
            alt="Salt.Magic glass jars — premium product packaging"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="relative h-[280px] sm:h-auto overflow-hidden">
          <Image
            src="/images/products/sachet.jpg"
            alt="Salt.Magic paper sachet — portable electrolyte format"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
        <div className="relative h-[280px] sm:h-auto overflow-hidden">
          <Image
            src="/images/products/greenery-duo.jpg"
            alt="Salt.Magic duo jars — retail display format"
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      </section>

      {/* 10. Distribution Tiers */}
      <DistributionTiers />

      {/* 11. Revenue Model */}
      <section className="bg-warm-off">
        <RevenueModel />
      </section>

      {/* 12. Social Proof */}
      <SocialProof />

      {/* 13. Locations */}
      <LocationMap />

      {/* 14. Contact Form */}
      <section className="bg-warm-off">
        <PartnerForm />
      </section>
    </>
  )
}
