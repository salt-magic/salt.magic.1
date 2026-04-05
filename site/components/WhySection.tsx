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
  // Scale disabled — causes GPU jank on mobile with large images
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1])
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.35], reduced ? [1, 1] : [0, 1])
  const textY = useTransform(scrollYProgress, [0.1, 0.35], reduced ? [0, 0] : [30, 0])

  return (
    <section id="why" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(64px,8vw,100px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-[clamp(40px,6vw,80px)] items-center">
          {/* Lifestyle photo — left side, rounded like Sakara */}
          <div className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-auto lg:min-h-[600px]">
            <motion.div style={{ scale: imageScale }} className="absolute inset-0">
              <Image
                src="/images/products/taylor-poolside.jpg"
                alt="Salt.Magic glass jar by the pool — natural electrolytes for daily wellness"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
          </div>

          {/* Content — right side */}
          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className="flex flex-col justify-center"
          >
            <div className="max-w-[480px]">
              <div className="w-12 h-px bg-gold mb-6" />
              <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-6">
                The Problem
              </p>

              <h2 className="font-display text-[clamp(32px,4.5vw,52px)] font-normal leading-[1.1] text-mineral tracking-tight mb-8">
                Your water is missing what your body needs <em className="italic">most</em>
              </h2>

              <div className="space-y-5 text-base font-light leading-[1.85] text-ink-light">
                <p>
                  85% of bottled water in Thailand goes through reverse osmosis, stripping
                  away essential natural minerals. The result is &ldquo;dead water&rdquo; — purified,
                  but nutritionally empty.
                </p>
                <p>
                  Your body needs magnesium for energy, recovery, and daily vitality. Yet, the
                  water you drink provides almost none of it, leaving you constantly depleted.
                </p>
              </div>

              <p className="font-display text-[clamp(17px,2vw,21px)] italic text-mineral/80 font-normal leading-relaxed mt-8 border-l-2 border-gold/40 pl-6">
                50% of people worldwide are magnesium deficient. Your water could be why.
              </p>

              {/* Cure-style icon badges */}
              <div className="flex gap-8 mt-10">
                {badges.map((badge) => (
                  <div key={badge.label} className="text-center">
                    <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center text-gold mx-auto mb-2.5">
                      {badge.icon}
                    </div>
                    <p className="text-[12px] font-semibold tracking-[.15em] uppercase text-ink-light">
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
