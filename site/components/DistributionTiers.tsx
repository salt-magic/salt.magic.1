import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const tiers = [
  {
    tier: 'Tier 1',
    name: 'National Distributors',
    description:
      'Full national coverage through established distribution networks. Ideal for reaching scale across all channels.',
    margin: '30-40%',
    minOrder: '10,000+ units',
    examples: 'DKSH, Central Group',
    featured: false,
  },
  {
    tier: 'Tier 2',
    name: 'Regional Chains',
    description:
      '50-store pilot programs with regional pharmacy chains and wellness retailers. Fast time-to-shelf.',
    margin: '35-40%',
    minOrder: '1,000+ units',
    examples: 'Boots, Lab Pharmacy',
    featured: true,
  },
  {
    tier: 'Tier 3',
    name: 'Boutique & Clinics',
    description:
      'Immediate purchase orders for organic shops, yoga studios, wellness clinics, and hotel spas.',
    margin: '35-40%',
    minOrder: '100+ units',
    examples: 'Organic Village, Lemon Farm',
    featured: false,
  },
]

export default function DistributionTiers() {
  return (
    <section className="py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,64px)]">
      <FadeIn className="text-center mb-[clamp(48px,8vw,80px)]">
        <div className="gold-line" />
        <p className="label-uppercase text-[12px] tracking-eyebrow text-ink-light mb-5">
          Distribution Model
        </p>
        <h2 className="font-display text-h2 font-normal text-mineral tracking-tight">
          Three paths to <em>partnership</em>
        </h2>
      </FadeIn>

      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {tiers.map((tier) => (
          <StaggerItem key={tier.name}>
            <div className={`rounded-xl p-[clamp(28px,3vw,40px)] h-full flex flex-col ${
              tier.featured
                ? 'bg-mineral text-white border border-mineral shadow-lg'
                : 'border border-border-warm'
            }`}>
              <p className={`text-[12px] font-semibold tracking-cta uppercase mb-3 ${
                tier.featured ? 'text-gold' : 'text-gold'
              }`}>
                {tier.tier}
              </p>
              <h3 className={`font-display text-h4 font-normal mb-3 ${
                tier.featured ? 'text-white' : 'text-mineral'
              }`}>
                {tier.name}
              </h3>
              <p className={`text-[15px] font-light leading-relaxed mb-6 flex-1 ${
                tier.featured ? 'text-white/70' : 'text-ink-light'
              }`}>
                {tier.description}
              </p>
              <div className={`space-y-3 pt-5 border-t ${
                tier.featured ? 'border-white/20' : 'border-border-warm'
              }`}>
                <div className="flex justify-between text-[13px]">
                  <span className={tier.featured ? 'font-light text-white/70' : 'font-light text-ink-light'}>Margin</span>
                  <span className={tier.featured ? 'font-medium text-gold' : 'font-medium text-mineral'}>{tier.margin}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className={tier.featured ? 'font-light text-white/70' : 'font-light text-ink-light'}>Min. Order</span>
                  <span className={tier.featured ? 'font-medium text-white' : 'font-medium text-mineral'}>{tier.minOrder}</span>
                </div>
                <div className="flex justify-between text-[13px]">
                  <span className={tier.featured ? 'font-light text-white/70' : 'font-light text-ink-light'}>Examples</span>
                  <span className={tier.featured ? 'font-medium text-white' : 'font-medium text-mineral'}>{tier.examples}</span>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
