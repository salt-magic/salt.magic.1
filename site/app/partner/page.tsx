import type { Metadata } from 'next'
import Image from 'next/image'
import PartnerHero from '@/components/PartnerHero'
import MarketStats from '@/components/MarketStats'
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
    "Join Thailand's fastest-growing electrolyte brand. 35-40% margins, 90% customer retention, 150+ locations.",
}

export default function PartnerPage() {
  return (
    <>
      {/* 1. Hero */}
      <PartnerHero />

      {/* 2. Market Opportunity */}
      <section className="py-[clamp(64px,8vw,100px)]">
        <div className="text-center mb-[clamp(48px,8vw,80px)] px-[clamp(24px,5vw,64px)]">
          <div className="gold-line" />
          <p className="label-uppercase text-[12px] tracking-[.22em] text-ink-light mb-5">
            The Opportunity
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            A market ready for <em>real hydration</em>
          </h2>
        </div>
        <MarketStats />
      </section>

      {/* 3. USA vs APAC Comparison */}
      <section className="bg-warm-off">
        <MarketComparison />
      </section>

      {/* 4. Category Proof — billion-dollar brands */}
      <CategoryProof />

      {/* 5. Product Editorial Split — The Product */}
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
        <div className="flex items-center px-[clamp(32px,6vw,80px)] py-[clamp(56px,8vw,100px)] bg-warm-off">
          <div className="max-w-[440px]">
            <div className="gold-line" />
            <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
              The Product
            </p>
            <h3 className="font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-[1.15] text-mineral tracking-tight mb-6">
              Why distribute <em className="italic">Salt.Magic</em>?
            </h3>
            <div className="space-y-4 text-[15px] font-light leading-relaxed text-ink-light">
              <p>
                Thailand&apos;s first sugar-free, flavorless daily electrolyte mineralizer.
                312mg magnesium per serving — 7x more than competitors.
              </p>
              <p>
                90% customer retention. Zero plastic waste. A category shift from occasional
                sports recovery to daily wellness essential.
              </p>
            </div>
            <div className="flex gap-6 mt-8">
              <div>
                <div className="font-display text-[28px] font-normal text-mineral">90%</div>
                <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light">Retention</div>
              </div>
              <div className="w-px bg-border-warm" />
              <div>
                <div className="font-display text-[28px] font-normal text-mineral">7x</div>
                <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light">Magnesium</div>
              </div>
              <div className="w-px bg-border-warm" />
              <div>
                <div className="font-display text-[28px] font-normal text-mineral">0g</div>
                <div className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light">Sugar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The Shift — Editorial Split (reversed) */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[50vh]">
        <div className="flex items-center px-[clamp(32px,6vw,80px)] py-[clamp(56px,8vw,100px)] bg-mineral order-2 lg:order-1">
          <div className="max-w-[440px]">
            <div className="w-12 h-px bg-golden-hour/50 mb-6" />
            <p className="text-[11px] font-medium tracking-[.22em] uppercase text-golden-hour mb-5">
              The Shift
            </p>
            <h3 className="font-display text-[clamp(28px,3.5vw,40px)] font-normal leading-[1.15] text-white tracking-tight mb-6">
              From occasional sports drink to <em className="italic text-golden-hour/80">daily wellness essential</em>
            </h3>
            <p className="text-base font-light leading-relaxed text-white/70">
              The brands that win this decade aren&apos;t selling recovery — they&apos;re selling
              a daily habit. Salt.Magic is built for 365 days a year, not 3-5 workouts a week.
            </p>
          </div>
        </div>
        <div className="relative h-[50vh] lg:h-auto overflow-hidden order-1 lg:order-2">
          <Image
            src="/images/mood/alo-2.png"
            alt="Premium wellness setting — luxury yoga studio"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
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
