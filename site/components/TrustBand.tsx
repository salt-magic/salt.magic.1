'use client'

const items = [
  '160+ Locations',
  '5 Years Trusted',
  '90% Retention',
  '100% Natural',
  'Zero Sugar',
  'Zero Flavor',
  'Koh Samui',
  'Bangkok',
  'Chiang Mai',
  'Phuket',
  'Hua Hin',
  'Koh Phangan',
  'Pai',
  'Koh Tao',
  'Krabi',
  'Khanom',
]

function MarqueeSet() {
  return (
    <div className="flex items-center shrink-0">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-10 px-10">
          <span className="text-[12px] font-medium tracking-[.1em] uppercase text-ink-light whitespace-nowrap">
            {item}
          </span>
          <span className="w-1 h-1 rounded-full bg-gold shrink-0" aria-hidden="true" />
        </div>
      ))}
    </div>
  )
}

export default function TrustBand() {
  return (
    <div
      className="bg-warm-off border-y border-border-warm overflow-hidden py-3.5"
      role="marquee"
      aria-label="Trust indicators"
    >
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        <MarqueeSet />
        <MarqueeSet />
      </div>
    </div>
  )
}
