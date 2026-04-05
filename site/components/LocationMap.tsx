import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const locations = [
  'Bangkok',
  'Phuket',
  'Koh Samui',
  'Chiang Mai',
  'Hua Hin',
  'Pattaya',
  'Krabi',
  'Koh Phangan',
  'Pai',
  'Koh Tao',
]

export default function LocationMap() {
  return (
    <section className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="text-center mb-[clamp(48px,8vw,80px)]">
        <div className="gold-line" />
        <p className="label-uppercase text-[12px] tracking-[.22em] text-ink-light mb-5">
          Our Network
        </p>
        <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
          160+ locations across <em>Thailand</em>
        </h2>
      </FadeIn>

      <StaggerContainer className="flex flex-wrap justify-center gap-3 max-w-[800px] mx-auto">
        {locations.map((city) => (
          <StaggerItem key={city}>
            <span className="inline-block px-5 py-2.5 border border-border-warm rounded-pill text-[13px] font-medium text-mineral hover:border-gold hover:text-gold transition-colors">
              {city}
            </span>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
