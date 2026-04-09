'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2C12 2 5 9 5 14a7 7 0 0 0 14 0c0-5-7-12-7-12z" />
      </svg>
    ),
    label: 'Zero Sugar',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10A15 15 0 0 1 12 2z" />
      </svg>
    ),
    label: '100% Natural',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    label: '7x Magnesium',
  },
]

export default function WhySection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const reduced = useReducedMotion()
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], reduced ? [1, 1] : [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.35], reduced ? [0, 0] : [30, 0])

  return (
    <section id="why" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(40px,6vw,80px)] items-center">
          {/* Lifestyle photo - left side, rounded like Sakara */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-auto lg:min-h-[600px]">
            <div className="absolute inset-0">
              <Image
                src="/images/products/taylor-poolside.jpg"
                alt="Salt.Magic glass jar by the pool - natural electrolytes for daily wellness"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

          {/* Content - right side */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="flex flex-col justify-center"
          >
            <div className="max-w-[480px]">
              <div className="gold-line" />
              <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-6">
                The Problem
              </p>

              <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-8">
                Your water is missing what your body needs most
              </h2>

              <div className="space-y-5 text-[15px] font-normal leading-[1.85] text-ink-light">
                <p>
                  85% of bottled water in Thailand goes through reverse osmosis, stripping
                  away essential natural minerals. The result is &ldquo;dead water&rdquo; - purified,
                  but nutritionally empty.
                </p>
                <p>
                  Your body needs magnesium for energy, recovery, and daily vitality. Yet, the
                  water you drink provides almost none of it, leaving you constantly depleted.
                </p>
              </div>

              <p className="font-display text-h5 text-mineral font-normal leading-relaxed mt-8 border-l-2 border-gold/40 pl-6">
                50% of people worldwide are magnesium deficient. Your water could be why.
              </p>

              {/* Cure-style icon badges */}
              <div className="flex flex-wrap gap-6 sm:gap-8 mt-10">
                {badges.map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-2.5">
                      {badge.icon}
                    </div>
                    <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light">
                      {badge.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
