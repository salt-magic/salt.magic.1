import Image from 'next/image'
import Hero from '@/components/Hero'
import TextBlock from '@/components/TextBlock'
import ImageBreak from '@/components/ImageBreak'
import WhySection from '@/components/WhySection'
import ForEveryone from '@/components/ForEveryone'
import Ingredients from '@/components/Ingredients'
import Comparison from '@/components/Comparison'
import Benefits from '@/components/Benefits'
import SocialProof from '@/components/SocialProof'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import Faq from '@/components/Faq'
import TrustBand from '@/components/TrustBand'
import Newsletter from '@/components/Newsletter'
import CtaBanner from '@/components/CtaBanner'
import StorySection from '@/components/StorySection'
import PartnerTeaser from '@/components/PartnerTeaser'

export default function Home() {
  return (
    <>
      {/* ===== ATTENTION ===== */}

      {/* 1. Hero — Emotional hook + primary CTA */}
      <Hero />

      {/* 2. Trust Band — Subtle social proof */}
      <TrustBand />

      {/* ===== INTEREST ===== */}

      {/* 3. The Problem — Why your water is "dead" */}
      <WhySection />

      {/* 4. Social Proof — Numbers (after problem = credibility) */}
      <SocialProof />

      {/* 4. The Formula — Split layout: image left, ingredients right */}
      <section className="bg-warm-off">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:min-h-[800px]">
          {/* Image — left side */}
          <div className="relative min-h-[300px] overflow-hidden">
            <Image
              src="/images/products/taylor-closeup.jpg"
              alt="Salt.Magic glass jar with natural electrolytes"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Subtle fade into content on desktop */}
            <div
              className="hidden lg:block absolute top-0 bottom-0 right-0 w-[25%]"
              style={{ background: 'linear-gradient(to right, transparent, #F9F7F4)' }}
            />
            {/* Bottom fade on mobile */}
            <div
              className="lg:hidden absolute left-0 right-0 bottom-0 h-[60px]"
              style={{ background: 'linear-gradient(to bottom, transparent, #F9F7F4)' }}
            />
          </div>

          {/* Content — right side */}
          <div className="flex flex-col justify-center py-[56px] px-[24px] lg:pl-[40px] lg:pr-[64px]">
            <div className="gold-line" />
            <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-[20px]">
              The Formula
            </p>
            <h2 className="font-display text-h2 font-normal text-mineral mb-3 tracking-tight">
              The Invisible <em className="italic font-normal">Upgrade</em>
            </h2>
            <p className="text-[17px] font-light leading-relaxed text-ink/80 max-w-[460px] mb-[16px]">
              Everything your water is missing. Nothing you can taste.
            </p>
            <p className="text-[15px] font-light leading-[1.75] text-ink max-w-[460px] mb-[8px]">
              Just 2 grams of pure, highly bioavailable minerals. It dissolves instantly, is completely flavorless, and delivers 7x more magnesium than leading competitors. Three natural ingredients. Zero junk.
            </p>
            <Ingredients />
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="py-[clamp(40px,5vw,56px)] flex items-center justify-center bg-warm-off" aria-hidden="true">
        <div className="w-12 h-px bg-gold" />
      </div>

      {/* 5. Comparison — How we're different */}
      <Comparison />

      {/* ===== DESIRE ===== */}

      {/* 6. Benefits — What it does for YOU */}
      <Benefits />

      {/* 7. For Everyone — Not just athletes */}
      <ForEveryone />

      {/* 8. Image Break — Visual desire moment */}
      <ImageBreak
        src="/images/mood/marocmaroc-2.png"
        alt="Artisanal wellness products by the beach — natural beauty ritual"
      />

      {/* ===== ACTION ===== */}

      {/* 9. Products — Shop now */}
      <section id="products" className="py-[clamp(48px,6vw,80px)]">
        <TextBlock eyebrow="Shop Salt.Magic" showGoldLine title={<>Ready to upgrade <em>your water?</em></>}>
          <p>Choose your daily ritual. Less than the cost of your morning coffee.</p>
        </TextBlock>
        <div className="h-[clamp(32px,4vw,48px)]" />
        <Products />
      </section>

      {/* ===== TRUST ===== */}

      {/* 10. Testimonials — Real people */}
      <section className="bg-warm-off py-[clamp(48px,6vw,80px)]">
        <Testimonials />
      </section>

      {/* ===== BRAND ===== */}

      {/* 12. Origin Story */}
      <StorySection />

      {/* ===== OBJECTION HANDLING ===== */}

      {/* 13. FAQ */}
      <div className="bg-warm-off py-[clamp(48px,6vw,80px)]">
        <Faq />
      </div>

      {/* ===== EDUCATION ===== */}

      {/* 14. Blog */}
      <section className="py-[clamp(48px,6vw,80px)]">
        <BlogSection />
      </section>

      {/* ===== FINAL CONVERSION ===== */}

      {/* 15. CTA Banner — Last push */}
      <CtaBanner />

      {/* 16. Newsletter — Retention */}
      <Newsletter />

      {/* 17. Partner Teaser — B2B hook (bottom placement) */}
      <PartnerTeaser />

      {/* Bottom safe-area for sticky mobile CTA */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  )
}
