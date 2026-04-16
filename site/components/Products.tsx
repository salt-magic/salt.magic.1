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
    meta: 'Premium daily mineralizer in eco-friendly glass \u2014 made to live on your kitchen counter',
    desc: 'A beautiful, premium glass jar with a gold lid, designed to live on your kitchen counter. Inside: a clean mineral salt complex that brings your water back to life. Three ingredients. Zero compromise. Proudly crafted at our Koh Samui hub.',
    badge: 'Eco-friendly & reusable',
    href: 'https://www.lazada.co.th/shop/salt-magic/',
  },
  {
    image: '/images/products/sachet-clean.webp',
    alt: 'Salt.Magic Travel Sachet',
    tag: 'Most Popular',
    name: 'The Travel Sachet',
    price: '290 THB',
    meta: 'One sachet, 20 days of optimized hydration \u2014 just 14.5 THB per day',
    desc: 'Your daily minerals, perfectly portable. An unflavored mineral blend in a resealable, GMP/HACCP-certified pouch \u2014 built for the gym bag, office drawer, or long flights. Drop one scoop in any liter of water and sip all day, anywhere life takes you.',
    badge: 'Lightweight & travel-ready',
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
    label: 'Three Ingredients',
  },
]

export default function Products() {
  return (
    <div className="max-w-[1000px] mx-auto px-[clamp(24px,5vw,80px)]">
      {/* USP Badges */}
      <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-[clamp(40px,6vw,64px)]">
        {usps.map((usp) => (
          <div key={usp.label} className="flex items-center gap-2.5 text-mineral">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
            <span className="text-[13px] font-medium tracking-wide">{usp.label}</span>
          </div>
        ))}
      </div>

      {/* Product Cards */}
      <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(40px,5vw,80px)]">
        {products.map((product) => (
            <StaggerItem key={product.name}>
              <a href={product.href} target="_blank" rel="noopener noreferrer" className="block text-center group">
                {/* Image */}
                <div className="overflow-hidden rounded-[20px] mb-8 bg-warm-off shadow-[0_2px_20px_rgba(60,48,40,0.06)]">
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
                <div className="text-[12px] font-medium tracking-eyebrow uppercase mb-2 text-ink-light">
                  {product.tag}
                </div>

                {/* Name */}
                <h3 className="font-display text-h3 font-normal text-mineral mb-4 tracking-tight">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="text-[18px] font-medium text-ink mb-1">
                  {product.price}
                </div>
                <div className="text-[13px] font-normal text-ink-light mb-5">
                  {product.meta}
                </div>

                {/* Description */}
                <p className="text-[13px] font-normal leading-[1.7] text-ink-light max-w-[280px] mx-auto mb-2">
                  {product.desc}
                </p>

                {/* Badge */}
                <p className="text-[12px] font-medium tracking-wide uppercase text-gold mb-6">
                  {product.badge}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-[12px] font-medium tracking-cta uppercase text-mineral border-b border-mineral/40 pb-1 group-hover:border-mineral transition-colors duration-300">
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
