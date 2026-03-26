import { FadeIn } from './Motion'

const metrics = [
  { value: '90%', label: 'Customer retention' },
  { value: '150+', label: 'Wellness locations' },
  { value: '5 Years', label: 'Established track record' },
  { value: '365 Days', label: 'Designed for daily use' },
]

export default function SocialProof() {
  return (
    <section className="bg-mineral">
      <FadeIn className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,64px)] py-[clamp(40px,6vw,64px)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          {metrics.map((item, i) => (
            <div
              key={item.label}
              className={`text-center px-4 ${
                i < metrics.length - 1 ? 'lg:border-r lg:border-white/15' : ''
              }`}
            >
              <div className="font-display text-[clamp(28px,4vw,40px)] font-normal text-white leading-none mb-1.5">
                {item.value}
              </div>
              <div className="text-[11px] font-medium tracking-[.12em] uppercase text-gold/70">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
