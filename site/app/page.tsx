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
import AboutEditorial from '@/components/AboutEditorial'
import PartnerTeaser from '@/components/PartnerTeaser'

export default function Home() {
  return (
    <>
      {/* ===== ATTENTION ===== */}

      {/* 1. Hero — Emotional hook + primary CTA */}
      <Hero />

      {/* 2. Trust Band — Subtle social proof */}
      <TrustBand />

      {/* 3. Social Proof — Numbers (moved up for early trust) */}
      <SocialProof />

      {/* ===== INTEREST ===== */}

      {/* 3. The Problem — Why your water is "dead" */}
      <WhySection />

      {/* 4. The Formula — What we put in */}
      <section className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <div className="max-w-[900px] mx-auto px-[clamp(24px,5vw,80px)]">
          <div className="gold-line" />
          <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
            The Formula
          </p>
          <h2 className="font-display text-[clamp(36px,5.5vw,56px)] font-normal leading-[1.1] text-mineral mb-6 tracking-tight">
            Everything your water is missing.{' '}
            <em className="italic font-normal">Nothing you can taste.</em>
          </h2>
          <p className="text-base font-light leading-[1.85] text-ink max-w-[520px]">
            Just 2 grams of pure, highly bioavailable minerals. It dissolves instantly,
            is completely flavorless, and delivers 7x more magnesium than leading
            competitors. Three natural ingredients. Zero junk.
          </p>
        </div>
        <div className="h-[clamp(32px,4vw,48px)]" />
        <Ingredients />
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
        <TextBlock eyebrow="Shop Salt.Magic" showGoldLine title={<>Three formats, <em>one formula</em></>} />
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

      {/* 13. About — The Team */}
      <AboutEditorial />

      {/* 14. Partner Teaser — B2B hook */}
      <PartnerTeaser />

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

      {/* Bottom safe-area for sticky mobile CTA */}
      <div className="h-20 lg:hidden" aria-hidden="true" />
    </>
  )
}
