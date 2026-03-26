import Hero from '@/components/Hero'
import Divider from '@/components/Divider'
import TextBlock from '@/components/TextBlock'
import ImageBreak from '@/components/ImageBreak'
import Ingredients from '@/components/Ingredients'
import Products from '@/components/Products'
import Testimonials from '@/components/Testimonials'
import Partner from '@/components/Partner'
import Faq from '@/components/Faq'
import CtaBanner from '@/components/CtaBanner'

export default function Home() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Divider */}
      <Divider />

      {/* 3. The Dead Water Crisis (#why) */}
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

      {/* Spacer + Image (Greenery Jars, padded + rounded) */}
      <div className="h-[clamp(100px,14vw,160px)]" />
      <ImageBreak
        src="/images/products/greenery-jars.jpg"
        alt="Salt.Magic jars among tropical greenery"
        padded
      />
      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 5. Three Ingredients + Ingredients grid */}
      <section>
        <TextBlock title={<>What&apos;s inside <em>every serving</em></>}>
          <p>
            Just 2 grams of pure minerals — flavorless, invisible in any drink, and 7x
            more magnesium than leading competitors.
          </p>
        </TextBlock>
        <div className="h-[clamp(60px,8vw,100px)]" />
        <Ingredients />
      </section>

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 6. Full-bleed image break (Taylor Water, tall) */}
      <ImageBreak
        src="/images/products/taylor-water.jpg"
        alt="Salt.Magic jar in tropical water setting"
        tall
      />

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 7. For Everyone, Every Day */}
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
      </section>

      <div className="h-[clamp(60px,8vw,100px)]" />

      {/* 8. Divider (sm) */}
      <Divider size="sm" />

      {/* 9. Find Your Format + Products (#products) */}
      <section id="products">
        <TextBlock title={<>Two formats, <em>same formula</em></>} />
        <div className="h-[clamp(60px,8vw,100px)]" />
        <Products />
      </section>

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 11. Testimonials */}
      <Testimonials />

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 12. Divider (sm) */}
      <Divider size="sm" />

      {/* 13. Born on Koh Samui (#story) */}
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

      <div className="h-[clamp(60px,8vw,100px)]" />

      <ImageBreak
        src="/images/products/taylor-story.jpg"
        alt="Salt.Magic in tropical setting"
        padded
      />

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 14. Partner (#partner) */}
      <Partner />

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 15. FAQ */}
      <Faq />

      <div className="h-[clamp(100px,14vw,160px)]" />

      {/* 16. CTA Banner */}
      <CtaBanner />
    </>
  )
}
