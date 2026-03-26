import type { Metadata } from 'next'
import PartnerHero from '@/components/PartnerHero'
import MarketStats from '@/components/MarketStats'
import TextBlock from '@/components/TextBlock'
import Comparison from '@/components/Comparison'
import DistributionTiers from '@/components/DistributionTiers'
import RevenueModel from '@/components/RevenueModel'
import SocialProof from '@/components/SocialProof'
import LocationMap from '@/components/LocationMap'
import PartnerForm from '@/components/PartnerForm'
import Divider from '@/components/Divider'

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
      <section className="bg-warm-white py-[clamp(80px,12vw,140px)]">
        <div className="text-center mb-[clamp(48px,8vw,80px)] px-[clamp(24px,5vw,64px)]">
          <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
            The Opportunity
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            A market ready for <em>real hydration</em>
          </h2>
        </div>
        <MarketStats />
      </section>

      {/* 3. Why Salt.Magic */}
      <TextBlock title={<>Why distribute <em>Salt.Magic</em>?</>}>
        <p>
          Salt.Magic is Thailand&apos;s first sugar-free, flavorless daily electrolyte mineralizer.
          With 312mg of magnesium per serving — 7x more than leading competitors — and a product
          designed for daily use by all ages, not just athletes.
        </p>
        <p>
          90% customer retention, zero plastic waste, and a category shift from occasional sports
          recovery to daily wellness essential. This is where the market is going.
        </p>
      </TextBlock>

      <div className="h-[clamp(80px,10vw,120px)]" />

      {/* 4. Comparison */}
      <Comparison />

      {/* 5. Distribution Tiers */}
      <DistributionTiers />

      <Divider size="sm" />

      {/* 6. Revenue Model */}
      <RevenueModel />

      {/* 7. Social Proof */}
      <SocialProof />

      {/* 8. Locations */}
      <LocationMap />

      <Divider size="sm" />

      {/* 9. Contact Form */}
      <PartnerForm />
    </>
  )
}
