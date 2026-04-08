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

      {/* Visual break between trust sections */}
      <div className="h-[clamp(24px,3vw,40px)]" aria-hidden="true" />

      {/* 3. Social Proof — Numbers (moved up for early trust) */}
      <SocialProof />

      {/* ===== INTEREST ===== */}

      {/* 3. The Problem — Why your water is "dead" */}
      <WhySection />

      {/* 4. The Formula — Split layout: image left, ingredients right */}
      <section className="bg-warm-off">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Image — left side */}
          <div className="relative min-h-[350px] lg:min-h-0">
            <Image
              src="/images/products/taylor-closeup.jpg"
              alt="Salt.Magic glass jar with natural electrolytes"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            {/* Subtle fade into content on desktop */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-warm-off" style={{ right: 0, width: '30%' }} />
          </div>

          {/* Content — right side */}
          <div className="flex flex-col justify-center py-[clamp(48px,6vw,80px)] px-[clamp(32px,4vw,64px)]">
            <div className="gold-line" />
            <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-5">
              The Formula
            </p>
            <h2 className="font-display text-h2 font-normal text-mineral mb-4 tracking-tight">
              Everything your water is missing.{' '}
              <em className="italic font-normal">Nothing you can taste.</em>
            </h2>
            <p className="text-base font-light leading-[1.85] text-ink max-w-[480px] mb-2">
              Just 2 grams of pure, highly bioavailable minerals. Three natural ingredients. Zero junk.
            </p>
            <Ingredients />
          </div>
        </div>
      </section>

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
      <section id="products" className="py-[clamp(64px,8vw,100px)]">
        <TextBlock eyebrow="Shop Salt.Magic" showGoldLine title={<>Ready to upgrade <em>your water?</em></>}>
          <p>Choose your daily ritual. Less than the cost of your morning coffee.</p>
        </TextBlock>
        <div className="h-[clamp(32px,4vw,48px)]" />
        <Products />
      </section>

      {/* ===== TRUST ===== */}

      {/* 10. Testimonials — Real people */}
      <section className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <Testimonials />
      </section>

      {/* ===== BRAND ===== */}

      {/* 12. Origin Story */}
      <StorySection />

      {/* ===== OBJECTION HANDLING ===== */}

      {/* 13. FAQ */}
      <div className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <Faq />
      </div>

      {/* ===== EDUCATION ===== */}

      {/* 14. Blog */}
      <section className="py-[clamp(64px,8vw,100px)]">
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
