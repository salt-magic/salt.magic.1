import { StaggerContainer, StaggerItem } from './Motion'

const stats = [
  {
    value: '85%',
    label: 'Dead Water',
    desc: 'of Thai bottled water is filtered, not mineralized',
  },
  {
    value: '$69.1B',
    label: 'Global Market',
    desc: 'Electrolyte market projected size by 2032',
  },
  {
    value: '8.2%',
    label: 'Annual Growth',
    desc: 'CAGR - one of the fastest-growing wellness categories',
  },
]

export default function MarketStats() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)]">
      {stats.map((item) => (
        <StaggerItem key={item.label}>
          <div className="text-center py-[clamp(48px,6vw,88px)] px-[clamp(24px,4vw,56px)] border-b border-border-warm last:border-b-0 md:border-b-0">
            <div className="font-display text-stat font-normal text-mineral mb-1">
              {item.value}
            </div>
            <div className="text-[12px] font-medium tracking-cta uppercase text-ink-light mb-5">
              {item.label}
            </div>
            <p className="text-sm font-normal leading-relaxed text-ink-light max-w-[280px] mx-auto">
              {item.desc}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
