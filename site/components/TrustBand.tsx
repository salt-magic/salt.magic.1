import { FadeIn } from './Motion'

const locations = ['Koh Samui', 'Bangkok', 'Chiang Mai', 'Phuket', 'Hua Hin', 'Koh Phangan']

export default function TrustBand() {
  return (
    <FadeIn>
      <div className="py-10 px-[clamp(24px,5vw,64px)] text-center border-y border-border-warm/50">
        <p className="text-[11px] font-medium tracking-[.18em] uppercase text-ink-faint mb-3">
          Trusted by 150+ wellness locations across Thailand
        </p>
        <p className="text-[13px] font-light text-ink-faint/70">
          {locations.join('  \u2022  ')}
        </p>
      </div>
    </FadeIn>
  )
}
