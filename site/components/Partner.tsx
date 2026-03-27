import Link from 'next/link'
import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const metrics = [
  { value: '90%', label: 'Retention' },
  { value: '35-40%', label: 'Margins' },
  { value: '150+', label: 'Locations' },
]

export default function Partner() {
  return (
    <section id="partner" className="bg-mineral py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="max-w-[800px] mx-auto text-center">
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
          Distribution Partnership
        </p>
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.2] text-white mb-5">
          Want to distribute <em className="italic">Salt.Magic</em>?
        </h2>
        <p className="text-[15px] font-light leading-relaxed text-white/60 max-w-[520px] mx-auto">
          The global electrolyte market reaches $69.1B by 2032. Early partners
          capture first-mover advantage with 35-40% margins and 90% customer retention.
        </p>

        <StaggerContainer className="flex justify-center gap-10 mt-10">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="font-display text-[28px] font-medium text-gold leading-none mb-1">
                {m.value}
              </div>
              <div className="text-[11px] font-normal tracking-[.06em] uppercase text-white/35">
                {m.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10">
          <Link
            href="/partner"
            className="inline-block px-8 py-3.5 bg-white text-mineral text-[11px] font-semibold tracking-[.12em] uppercase rounded-pill hover:bg-gold-light transition-all duration-300"
          >
            Explore Partnership &rarr;
          </Link>
        </div>
      </FadeIn>
    </section>
  )
}
