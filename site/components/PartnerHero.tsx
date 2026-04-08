import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const highlights = [
  { value: '$69.1B', label: 'Market by 2032' },
  { value: '8.2%', label: 'Annual CAGR' },
  { value: '90%', label: 'Customer Retention' },
  { value: '160+', label: 'Locations' },
]

export default function PartnerHero() {
  return (
    <section className="bg-mineral pt-[clamp(180px,22vw,260px)] pb-[clamp(100px,14vw,160px)] px-[clamp(24px,5vw,64px)]">
      <div className="max-w-[1000px] mx-auto text-center">
        <FadeIn>
          <p className="label-uppercase text-[12px] tracking-eyebrow text-golden-hour mb-5">
            Distribution Partnership
          </p>
          <h1 className="headline-editorial text-white tracking-tight mb-5">
            Grow with <em>Salt.Magic</em>
          </h1>
          <p className="text-[15px] font-light leading-relaxed text-white/70 max-w-[560px] mx-auto mb-10">
            The global electrolyte market reaches $69.1B by 2032. APAC is 5-7 years behind
            USA adoption — early partners capture first-mover advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#partner-form"
              className="px-8 py-3.5 bg-white text-mineral text-[12px] font-semibold tracking-cta uppercase rounded-pill hover:bg-gold-light transition-colors duration-300"
            >
              Contact Us
            </a>
            <span className="px-8 py-3.5 border border-white/30 text-white text-[12px] font-semibold tracking-cta uppercase rounded-pill opacity-50 cursor-default">
              Download Deck (Coming Soon)
            </span>
          </div>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-12 border-t border-white/10">
          {highlights.map((item) => (
            <StaggerItem key={item.label}>
              <div className="font-display text-h3 font-normal text-white mb-1.5">
                {item.value}
              </div>
              <div className="text-[12px] font-medium tracking-cta uppercase text-gold/70">
                {item.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
