import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
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
import Partner from '@/components/Partner'
import Faq from '@/components/Faq'
import TrustBand from '@/components/TrustBand'
import Newsletter from '@/components/Newsletter'
import CtaBanner from '@/components/CtaBanner'
import StorySection from '@/components/StorySection'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      <TrustBand />

      {/* 2. Why — asymmetric split */}
      <WhySection />

      {/* 3. Formula + Ingredients */}
      <section className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <TextBlock eyebrow="The Formula" showGoldLine title={<>What&apos;s inside <em>every serving</em></>}>
          <p>
            Just 2 grams of pure minerals — flavorless, invisible in any drink, and 7x
            more magnesium than leading competitors.
          </p>
        </TextBlock>
        <div className="h-[clamp(32px,4vw,48px)]" />
        <Ingredients />
      </section>

      {/* 4. Comparison */}
      <Comparison />

      {/* 5. Products */}
      <section id="products" className="py-[clamp(64px,8vw,100px)]">
        <TextBlock eyebrow="Shop Salt.Magic" showGoldLine title={<>Two formats, <em>same formula</em></>} />
        <div className="h-[clamp(32px,4vw,48px)]" />
        <Products />
      </section>

      {/* 6. Benefits */}
      <Benefits />

      {/* Image break */}
      <ImageBreak
        src="/images/mood/marocmaroc-2.png"
        alt="Artisanal wellness products by the beach — natural beauty ritual"
      />

      {/* 7. Testimonials */}
      <section className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <Testimonials />
      </section>

      {/* 8. SocialProof */}
      <SocialProof />

      {/* 9. For Everyone — reversed split */}
      <ForEveryone />

      {/* 10. Story (UNCHANGED) */}
      <StorySection />

      {/* 11. FAQ */}
      <div className="bg-warm-off py-[clamp(64px,8vw,100px)]">
        <Faq />
      </div>

      {/* 12. Blog */}
      <section className="py-[clamp(64px,8vw,100px)]">
        <BlogSection />
      </section>

      {/* 13. Partner */}
      <Partner />

      {/* 14. CTA Banner */}
      <CtaBanner />

      {/* 15. Newsletter */}
      <Newsletter />
    </>
  )
}
