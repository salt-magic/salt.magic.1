'use client'

import Image from 'next/image'
import { StaggerContainer, StaggerItem, motion } from './Motion'

const products = [
  {
    image: '/images/products/taylor-closeup.jpg',
    alt: 'Salt.Magic Glass Jar close-up',
    tag: 'Heritage Line',
    name: 'Glass Jar',
    price: '490 THB',
    meta: '70 servings — 7 THB each',
    desc: 'Premium reusable glass jar with gold lid. Produced at our Koh Samui hub.',
    href: 'https://www.lazada.co.th/shop/salt-magic/',
  },
  {
    image: '/images/products/sachet.jpg',
    alt: 'Salt.Magic Paper Sachet Pouch',
    tag: 'Most Popular',
    name: 'Paper Sachet',
    price: '290 THB',
    meta: '30 servings — 9.6 THB each',
    desc: 'Portable, resealable paper pouch. GMP/HACCP certified. For your bag, gym, travel.',
    href: 'https://www.lazada.co.th/shop/salt-magic/',
  },
  {
    image: null,
    alt: 'Salt.Magic Single Sachet',
    tag: 'Coming 2026',
    name: 'Single Sachet',
    price: '9–12 THB',
    meta: '1 serving — trial & impulse format',
    desc: 'Single-serve 2g sachet. Perfect for trial, travel, and pharmacy counters.',
    href: null,
  },
]

const usps = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2.5 2.5L16 9" />
      </svg>
    ),
    label: 'Zero Sugar',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M12 2C12 2 5 9 5 14a7 7 0 0 0 14 0c0-5-7-12-7-12z" />
      </svg>
    ),
    label: '100% Natural',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    label: '7x Magnesium',
  },
]

export default function Products() {
  return (
    <div className="max-w-[1100px] mx-auto px-[clamp(24px,5vw,64px)]">
      {/* USP Badges */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-[clamp(40px,6vw,64px)]">
        {usps.map((usp) => (
          <div key={usp.label} className="flex items-center gap-2.5 text-mineral">
            <span className="text-gold">{usp.icon}</span>
            <span className="text-[13px] font-medium tracking-wide">{usp.label}</span>
          </div>
        ))}
      </div>

      {/* Product Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-3 gap-[clamp(24px,3vw,40px)]">
        {products.map((product) => {
          const isComingSoon = !product.href
          const Wrapper = isComingSoon ? 'div' : 'a'
          const wrapperProps = isComingSoon ? {} : { href: product.href }

          return (
            <StaggerItem key={product.name}>
              <Wrapper {...wrapperProps} className={`block text-center ${isComingSoon ? 'opacity-75' : 'group'}`}>
                {/* Image or Placeholder */}
                <div className="overflow-hidden rounded-2xl mb-8 bg-warm-off">
                  {product.image ? (
                    <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}>
                      <Image
                        src={product.image}
                        alt={product.alt}
                        width={550}
                        height={733}
                        className="w-full aspect-[3/4] object-cover"
                      />
                    </motion.div>
                  ) : (
                    <div className="w-full aspect-[3/4] flex flex-col items-center justify-center bg-gradient-to-b from-warm-off to-sand/30">
                      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1" className="w-16 h-16 text-gold/40 mb-4" aria-hidden="true">
                        <rect x="14" y="8" width="20" height="32" rx="3" />
                        <path d="M20 16h8M20 22h8M20 28h5" opacity="0.5" />
                        <circle cx="24" cy="36" r="1.5" fill="currentColor" opacity="0.3" />
                      </svg>
                      <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-ink-faint">Coming 2026</span>
                    </div>
                  )}
                </div>

                {/* Tag */}
                <div className={`text-[10px] font-semibold tracking-[.2em] uppercase mb-3 ${isComingSoon ? 'text-ink-faint' : 'text-gold'}`}>
                  {product.tag}
                </div>

                {/* Name */}
                <h3 className="font-display text-[clamp(22px,2.5vw,28px)] font-normal text-mineral mb-2 tracking-tight">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="text-[17px] font-body font-semibold text-ink mb-1">
                  {product.price}
                </div>
                <div className="text-[13px] font-light text-ink-faint mb-4">
                  {product.meta}
                </div>

                {/* Description */}
                <p className="text-[13px] font-light leading-relaxed text-ink-light max-w-[280px] mx-auto mb-6">
                  {product.desc}
                </p>

                {/* CTA */}
                {!isComingSoon ? (
                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[.12em] uppercase text-mineral border-b border-mineral/40 pb-1 group-hover:border-mineral transition-colors duration-300">
                    Shop on Lazada
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[.12em] uppercase text-ink-faint">
                    Notify me when available
                  </span>
                )}
              </Wrapper>
            </StaggerItem>
          )
        })}
      </StaggerContainer>
    </div>
  )
}
