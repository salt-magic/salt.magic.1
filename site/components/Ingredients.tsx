import { StaggerContainer, StaggerItem } from './Motion'

const ingredients = [
  {
    num: '312',
    unit: 'mg Magnesium Citrate',
    title: 'The Foundation',
    desc: 'The bioavailable form your body absorbs best. Supports muscle recovery, mental clarity, and deep sleep.',
  },
  {
    num: '160',
    unit: 'mg Potassium Citrate',
    title: 'The Regulator',
    desc: 'Essential for heart rhythm, nerve signaling, and muscle function. Works synergistically with magnesium.',
  },
  {
    num: '152',
    unit: 'mg Pink Himalayan Salt',
    title: 'The Source',
    desc: 'Unrefined salt with 84 trace minerals. Provides sodium for fluid balance without processing.',
  },
]

export default function Ingredients() {
  return (
    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)]">
      {ingredients.map((item) => (
        <StaggerItem key={item.num}>
          <div className="text-center py-[clamp(40px,5vw,72px)] px-[clamp(20px,3vw,48px)] border-b border-sand last:border-b-0 md:border-b-0">
            <div className="font-display text-[clamp(40px,5vw,64px)] font-normal text-mineral leading-none mb-1">
              {item.num}
            </div>
            <div className="text-[11px] font-medium tracking-[.15em] uppercase text-gold mb-5">
              {item.unit}
            </div>
            <h3 className="font-display text-xl font-medium text-mineral mb-3">
              {item.title}
            </h3>
            <p className="text-sm font-light leading-relaxed text-ink-light">
              {item.desc}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
