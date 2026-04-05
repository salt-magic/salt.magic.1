'use client'

import Image from 'next/image'
import { StaggerContainer, StaggerItem, motion } from './Motion'

const products = [
  {
    image: '/images/products/taylor-closeup.jpg',
    alt: 'Salt.Magic Signature Glass Jar close-up',
    tag: 'Best Value',
    name: 'The Signature Glass Jar',
    price: '490 THB',
    meta: 'Over 2 months of daily hydration (70 servings) — Just 7 THB per day',
    desc: 'A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Proudly crafted at our Koh Samui hub.',
    href: 'https://www.lazada.co.th/shop/salt-magic/',
  },
  {
    image: '/images/products/sachet.jpg',
    alt: 'Salt.Magic Travel Pouch',
    tag: 'Most Popular',
    name: 'The Travel Pouch',
    price: '290 THB',
    meta: "A full month's supply (30 servings) — Just 9.6 THB per day",
    desc: 'Your daily minerals, perfectly portable. A resealable, GMP/HACCP-certified pouch built for your gym bag, office drawer, or long flights.',
    href: 'https://www.lazada.co.th/shop/salt-magic/',
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
    <div className="max-w-[800px] mx-auto px-[clamp(24px,5vw,64px)]">
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
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(24px,3vw,40px)]">
        {products.map((product) => (
            <StaggerItem key={product.name}>
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="block text-center group">
                {/* Image */}
                <div className="overflow-hidden rounded-2xl mb-8 bg-warm-off">
                  <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}>
                    <Image
                      src={product.image}
                      alt={product.alt}
                      width={550}
                      height={733}
                      className="w-full aspect-[3/4] object-cover"
                    />
                  </motion.div>
                </div>

                {/* Tag */}
                <div className="text-[12px] font-semibold tracking-[.2em] uppercase mb-3 text-ink-light">
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
                <div className="text-[14px] font-light text-ink-light mb-4">
                  {product.meta}
                </div>

                {/* Description */}
                <p className="text-[13px] font-light leading-relaxed text-ink-light max-w-[280px] mx-auto mb-6">
                  {product.desc}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[.12em] uppercase text-mineral border-b border-mineral/40 pb-1 group-hover:border-mineral transition-colors duration-300">
                  Shop on Lazada
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </StaggerItem>
          ))}
      </StaggerContainer>
    </div>
  )
}
