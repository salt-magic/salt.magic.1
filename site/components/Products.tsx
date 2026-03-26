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
  },
  {
    image: '/images/products/sachet.jpg',
    alt: 'Salt.Magic Paper Sachet Pouch',
    tag: 'Most Popular',
    name: 'Paper Sachet',
    price: '290 THB',
    meta: '30 servings — 9.6 THB each',
    desc: 'Portable, resealable paper pouch. GMP/HACCP certified. For your bag, gym, travel.',
  },
]

export default function Products() {
  return (
    <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(16px,3vw,40px)] max-w-[1100px] mx-auto px-[clamp(24px,5vw,64px)]">
      {products.map((product) => (
        <StaggerItem key={product.name}>
          <motion.div
            className="text-center group"
            whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(60,48,40,0.08)' }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="overflow-hidden rounded-2xl mb-7">
              <motion.div whileHover={{ scale: 1.04 }} transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={550}
                  height={733}
                  className="w-full aspect-[3/4] object-cover"
                />
              </motion.div>
            </div>
            <div className="text-[10px] font-semibold tracking-[.18em] uppercase text-gold mb-2">
              {product.tag}
            </div>
            <h3 className="font-display text-[clamp(22px,2.5vw,30px)] font-medium text-mineral mb-1.5">
              {product.name}
            </h3>
            <div className="font-display text-lg text-mineral font-normal mb-1">
              {product.price}
            </div>
            <div className="text-[13px] text-ink-faint mb-4">
              {product.meta}
            </div>
            <p className="text-sm font-light leading-relaxed text-ink-light max-w-[340px] mx-auto mb-6">
              {product.desc}
            </p>
            <a
              href="#"
              className="inline-block text-[11px] font-semibold tracking-[.12em] uppercase px-10 py-4 rounded-pill border border-mineral text-mineral hover:bg-mineral hover:text-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Shop on Lazada
            </a>
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  )
}
