import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const highlights = [
  { value: '90%', label: 'Customer Retention' },
  { value: '35-40%', label: 'Retailer Margins' },
  { value: '160+', label: 'Locations' },
  { value: '5 Yrs', label: 'Proven Track Record' },
]

export default function PartnerHero() {
  return (
    <section className="bg-mineral pt-[clamp(180px,22vw,260px)] pb-[clamp(100px,14vw,160px)] px-[clamp(24px,5vw,64px)]">
      <div className="max-w-[1000px] mx-auto text-center">
        <FadeIn>
          <p className="label-uppercase text-gold mb-5">
            Distribution Partnership
          </p>
          <h1 className="headline-editorial text-white tracking-tight mb-5">
            Capture the Next Wave<br className="hidden sm:inline" /> of Wellness
          </h1>
          <p className="text-[15px] font-normal leading-relaxed text-white/70 max-w-[560px] mx-auto mb-10">
            The global electrolyte market is exploding. Partner with Thailand&apos;s first
            daily mineralizer and claim your first-mover advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#partner-form"
              className="px-8 py-3.5 bg-white text-mineral text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Contact Us
            </a>
            <a
              href="/pitch-deck.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 border border-white/30 text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:border-white/60 hover:bg-white/5 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Download Pitch Deck
            </a>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
          {highlights.map((item) => (
            <StaggerItem key={item.label}>
              <div className="font-display text-h3 font-normal text-white mb-1.5">
                {item.value}
              </div>
              <div className="text-[12px] font-normal tracking-eyebrow uppercase text-gold">
                {item.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
