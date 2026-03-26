'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from './Motion'
import { FadeIn } from './Motion'

const slides = [
  { src: '/images/products/taylor-hero.jpg', alt: 'Salt.Magic — Natural Electrolytes glass jar' },
  { src: '/images/products/greenery-jars.jpg', alt: 'Salt.Magic jars among tropical greenery' },
  { src: '/images/products/taylor-water.jpg', alt: 'Salt.Magic jar in tropical water setting' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

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
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Very subtle gradient — like Luxo */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,.04) 0%, rgba(0,0,0,.10) 40%, rgba(0,0,0,.32) 100%)',
        }}
      />

      {/* Line arrow left */}
      <button
        onClick={prev}
        className="absolute left-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group flex items-center justify-center min-h-[44px] min-w-[44px]"
        aria-label="Previous slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/40 group-hover:text-white transition-colors duration-300">
          <line x1="72" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="1" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="15" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* Line arrow right */}
      <button
        onClick={next}
        className="absolute right-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group flex items-center justify-center min-h-[44px] min-w-[44px]"
        aria-label="Next slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/40 group-hover:text-white transition-colors duration-300">
          <line x1="0" y1="8" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="1" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="15" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* Content — centered vertically */}
      <div className="relative z-10 h-full min-h-[100dvh] flex flex-col items-center justify-center text-center px-[clamp(24px,5vw,64px)] pt-24">
        <FadeIn delay={0.1}>
          <h1 className="font-display text-[clamp(44px,8vw,110px)] font-normal leading-[1.05] text-white max-w-[1000px] mb-7 tracking-[-0.01em]">
            Rediscover what your <em className="italic">water is missing</em>
          </h1>
        </FadeIn>
        <FadeIn delay={0.35}>
          <p className="text-[clamp(14px,1.3vw,17px)] font-light leading-[1.7] text-white/70 max-w-[560px] mb-10">
            Three natural minerals. Zero sugar. Zero additives.
            <br />
            312mg magnesium in every serving.
          </p>
        </FadeIn>
        <FadeIn delay={0.55}>
          <a
            href="#why"
            className="inline-block text-[14px] font-normal tracking-[.02em] px-9 py-[14px] text-white border border-white/40 hover:bg-white hover:text-ink hover:scale-[1.02] transition-all duration-300"
          >
            Learn more
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
