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
]

export default function Products() {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(24px,4vw,56px)] max-w-[1100px] mx-auto px-[clamp(24px,5vw,64px)]">
      {products.map((product) => (
        <StaggerItem key={product.name}>
          <a href={product.href} className="block group text-center">
            {/* Image — no border, no shadow, clean like PANPURI */}
            <div className="overflow-hidden rounded-xl mb-8">
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
            <div className="text-[10px] font-semibold tracking-[.2em] uppercase text-gold mb-3">
              {product.tag}
            </div>

            {/* Name — Playfair Regular */}
            <h3 className="font-display text-[clamp(24px,3vw,32px)] font-normal text-mineral mb-2 tracking-tight">
              {product.name}
            </h3>

            {/* Price */}
            <div className="text-[18px] font-body font-semibold text-ink mb-1">
              {product.price}
            </div>
            <div className="text-[13px] font-light text-ink-faint mb-4">
              {product.meta}
            </div>

            {/* Description */}
            <p className="text-[14px] font-light leading-relaxed text-ink-light max-w-[320px] mx-auto mb-6">
              {product.desc}
            </p>

            {/* CTA — underline link style like PANPURI */}
            <span className="text-[11px] font-semibold tracking-[.12em] uppercase text-mineral border-b border-mineral/40 pb-1 group-hover:border-mineral transition-all duration-300">
              Shop on Lazada
            </span>
          </a>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
