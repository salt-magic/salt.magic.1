import { FadeIn } from './Motion'

const locations = ['Koh Samui', 'Bangkok', 'Chiang Mai', 'Phuket', 'Hua Hin', 'Koh Phangan', 'Pai', 'Koh Tao', 'Krabi', 'Khanom']

export default function TrustBand() {
  return (
    <FadeIn>
      <div className="py-10 px-[clamp(24px,5vw,64px)] text-center border-y border-border-warm/50">
        <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-3">
          Trusted by 160+ locations across Thailand
        </p>
        <p className="text-[13px] font-normal text-ink-light/80">
          {locations.join('  \u2022  ')}
        </p>
      </div>
    </FadeIn>
  )
}
