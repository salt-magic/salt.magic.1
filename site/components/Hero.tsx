'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from './Motion'
import { FadeIn } from './Motion'
import { useReducedMotion } from 'framer-motion'

const slides = [
  { src: '/images/products/taylor-hero.jpg', alt: 'Salt.Magic — Natural Electrolytes glass jar' },
  { src: '/images/products/greenery-jars.jpg', alt: 'Salt.Magic jars among tropical greenery' },
  { src: '/images/products/taylor-water.jpg', alt: 'Salt.Magic jar in tropical water setting' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), [])

  // Disable auto-advance when user prefers reduced motion
  useEffect(() => {
    if (reduced) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, reduced])

  return (
    <section className="relative min-h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[active].src}
            alt={slides[active].alt}
            fill
            priority={active === 0}
            className="object-cover object-[center_35%] scale-[1.02]"
            sizes="100vw"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {/* Warm golden-hour overlay — inspired by mood board */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(to bottom, rgba(60,48,40,0.35) 0%, rgba(30,25,20,0.45) 50%, rgba(41,75,109,0.3) 100%)',
        }}
      />
      {/* Film grain texture — masks JPEG compression on upscaled photos */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Line arrow left — Issue #6: increased from white/40 to white/55 */}
      <button
        onClick={prev}
        className="absolute left-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group flex items-center justify-center min-h-[44px] min-w-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
        aria-label="Previous slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/55 group-hover:text-white transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,.3)]">
          <line x1="72" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="1" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="15" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* Line arrow right — Issue #6: increased from white/40 to white/55 */}
      <button
        onClick={next}
        className="absolute right-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group flex items-center justify-center min-h-[44px] min-w-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
        aria-label="Next slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/55 group-hover:text-white transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,.3)]">
          <line x1="0" y1="8" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="1" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="15" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* Content — centered vertically, clean like Luxo */}
      <div className="relative z-10 h-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-[clamp(24px,5vw,64px)] pt-24">
        <FadeIn delay={0.05}>
          <p className="label-uppercase text-[11px] text-white/70 mb-5">
            Thailand&apos;s Natural Electrolyte Mineralizer
          </p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h1 className="headline-editorial text-white max-w-[900px] mb-7 tracking-[-0.01em]">
            Rediscover what your <em className="italic font-normal">water is missing</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="subheadline-light text-white/80 max-w-[560px] mb-10">
            Three natural minerals. Zero sugar. Zero additives.
            <br />
            312mg magnesium in every serving.
          </p>
        </FadeIn>
        <FadeIn delay={0.55}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#products"
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-9 py-4 rounded-pill bg-white/90 text-ink hover:bg-white transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Shop Now
            </a>
            <a
              href="#why"
              className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-9 py-4 rounded-pill text-white border border-white/40 hover:bg-white hover:text-ink transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              Learn More
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
