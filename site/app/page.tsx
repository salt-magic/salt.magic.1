import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import TextBlock from '@/components/TextBlock'
import ImageBreak from '@/components/ImageBreak'
import Ingredients from '@/components/Ingredients'
import Comparison from '@/components/Comparison'
import Benefits from '@/components/Benefits'
import SocialProof from '@/components/SocialProof'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import BlogSection from '@/components/BlogSection'
import Partner from '@/components/Partner'
import Faq from '@/components/Faq'
import CtaBanner from '@/components/CtaBanner'

export default function Home() {
  return (
    <>
      {/* ── ATTENTION ── */}

      {/* 1. Hero — emotional hook + primary CTA */}
      <Hero />

      {/* ── INTEREST ── */}

      {/* 2. The Dead Water Crisis (#why) — problem awareness */}
      <section id="why">
        <TextBlock title={<>Why does your water need <em>minerals</em>?</>}>
          <p>
            Most bottled water in Thailand goes through reverse osmosis, removing virtually
            all natural minerals. The result is &ldquo;dead water&rdquo; — purified but
            nutritionally empty.
          </p>
          <p>
            Your body depends on magnesium for over 300 enzymatic reactions, potassium for
            heart rhythm and nerve signaling, sodium for fluid balance. Yet the water you
            drink every day provides almost none of them.
          </p>
          <p className="font-display text-[19px] italic text-mineral font-normal leading-relaxed mt-7">
            50% of people worldwide are magnesium deficient. Your water could be why.
          </p>
        </TextBlock>
      </section>

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* 3. What's inside — the solution */}
      <section className="bg-warm-white py-[clamp(80px,12vw,140px)]">
        <TextBlock title={<>What&apos;s inside <em>every serving</em></>}>
          <p>
            Just 2 grams of pure minerals — flavorless, invisible in any drink, and 7x
            more magnesium than leading competitors.
          </p>
        </TextBlock>
        <div className="h-[clamp(80px,12vw,140px)]" />
        <Ingredients />
      </section>

      {/* 4. Comparison — why better than alternatives */}
      <Comparison />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── DESIRE ── */}

      {/* 5. Products (#products) — what can I buy? EARLY in the funnel */}
      <section id="products">
        <TextBlock title={<>Two formats, <em>same formula</em></>} />
        <div className="h-[clamp(80px,12vw,140px)]" />
        <Products />
      </section>

      {/* Inline CTA after products */}
      <div className="text-center py-[clamp(48px,8vw,80px)]">
        <a
          href="#"
          className="inline-block text-[11px] font-semibold tracking-[.12em] uppercase px-10 py-4 rounded-pill text-white bg-mineral hover:bg-mineral-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Shop Now
        </a>
      </div>

      {/* 6. Benefits — what changes for me? */}
      <Benefits />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* Product image break */}
      <ImageBreak
        src="/images/products/greenery-jars.jpg"
        alt="Salt.Magic jars among tropical greenery"
        padded
      />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── TRUST ── */}

      {/* 7. Testimonials — social proof from real people */}
      <section className="bg-warm-white py-[clamp(80px,12vw,140px)]">
        <Testimonials />
      </section>

      {/* 8. SocialProof numbers band */}
      <SocialProof />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* 9. For Everyone — broadening the audience */}
      <section>
        <TextBlock title={<>What proper hydration <em>feels like</em></>}>
          <p>
            Clearer thinking. Steadier energy without crashes. Fewer muscle cramps. Better
            sleep. Users notice the difference within days.
          </p>
          <p>
            Salt.Magic isn&apos;t for athletes only — it&apos;s for everyone who drinks
            water. Office workers, parents, travelers, fasters, anyone living in
            Thailand&apos;s heat.
          </p>
        </TextBlock>

        {/* Wellness vs Fitness comparison — consumer-focused */}
        <div className="max-w-[800px] mx-auto px-[clamp(24px,5vw,64px)] mt-[clamp(48px,6vw,80px)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="border border-gold/30 rounded-xl p-6 sm:p-8 text-center">
              <p className="text-[11px] font-medium tracking-[.15em] uppercase text-gold mb-4">
                Wellness Hydration
              </p>
              <ul className="space-y-2.5 text-[15px] font-light text-ink-light">
                <li>365 days / year</li>
                <li>All ages</li>
                <li>Daily essential</li>
                <li>Habit-forming</li>
              </ul>
            </div>
            <div className="border border-border-warm rounded-xl p-6 sm:p-8 text-center opacity-60">
              <p className="text-[11px] font-medium tracking-[.15em] uppercase text-ink-light mb-4">
                Sports Recovery
              </p>
              <ul className="space-y-2.5 text-[15px] font-light text-ink-light">
                <li>3-5x / week</li>
                <li>Athletes only</li>
                <li>Occasional</li>
                <li>Irregular</li>
              </ul>
            </div>
          </div>
          <p className="font-display text-[clamp(17px,2.5vw,21px)] text-mineral text-center mt-8 font-normal">
            Daily minerals, not occasional recovery.
          </p>
        </div>
      </section>

      {/* Mid-page CTA */}
      <div className="text-center py-[clamp(56px,8vw,88px)]">
        <a
          href="#"
          className="inline-block text-[11px] font-semibold tracking-[.12em] uppercase px-10 py-4 rounded-pill text-white bg-mineral hover:bg-mineral-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Start Your Daily Mineral Routine
        </a>
      </div>

      <Divider size="sm" />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── BRAND ── */}

      {/* 10. Story (#story) — authenticity */}
      <section id="story">
        <TextBlock title={<>Five years ago, we noticed something <em>wrong with our water</em></>}>
          <p>
            Living on a tropical island, we drank more water than most — but still felt
            depleted. A TDS meter confirmed it: our &ldquo;purified&rdquo; water had
            virtually zero minerals.
          </p>
          <p>
            We couldn&apos;t find a clean electrolyte that was sugar-free, flavorless, and
            affordable for daily use. So we made one.
          </p>
          <p>
            What started in a kitchen on Koh Samui is now in over 150 wellness hubs across
            Thailand.
          </p>
        </TextBlock>
      </section>

      <div className="h-[clamp(80px,12vw,140px)]" />

      <ImageBreak
        src="/images/products/taylor-story.jpg"
        alt="Salt.Magic in tropical setting"
        padded
      />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── OBJECTION HANDLING ── */}

      {/* 11. FAQ */}
      <Faq />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── CONTENT / SEO ── */}

      {/* 12. Blog Teaser */}
      <BlogSection />

      {/* ── B2B (separate channel) ── */}

      {/* 13. Partner Teaser */}
      <Partner />

      <div className="h-[clamp(80px,12vw,140px)]" />

      {/* ── FINAL ACTION ── */}

      {/* 14. CTA Banner — last push */}
      <CtaBanner />
    </>
  )
}
