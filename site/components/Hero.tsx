'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { FadeIn } from './Motion'
import { useReducedMotion } from 'framer-motion'

const slides = [
  { src: '/images/products/taylor-hero.jpg', alt: 'Salt.Magic — Natural Electrolytes glass jar in tropical water' },
  { src: '/images/products/greenery-jars.jpg', alt: 'Salt.Magic jars among tropical greenery' },
  { src: '/images/products/taylor-water-nature.jpg', alt: 'Salt.Magic jar in natural water among tropical plants' },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, reduced])

  return (
    <section className="relative min-h-[100dvh] min-h-[600px] overflow-hidden">
      {/* Slides — CSS transitions for mobile performance */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-[center_35%]"
            sizes="100vw"
            quality={85}
          />
        </div>
      ))}

      {/* Warm overlay — lighter to let product imagery breathe */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(30,20,10,0.05) 0%, rgba(30,20,10,0.18) 30%, rgba(30,20,10,0.40) 55%, rgba(30,20,10,0.60) 100%)',
        }}
      />
      {/* Film grain texture — hidden on mobile for performance */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none opacity-[0.04] mix-blend-overlay hidden md:block"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Arrows — hidden on mobile (too small, overlap text) */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group items-center justify-center min-h-[44px] min-w-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
        aria-label="Previous slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/40 group-hover:text-white transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,.3)]">
          <line x1="72" y1="8" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="1" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="12" y1="15" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>
      <button
        onClick={next}
        className="hidden md:flex absolute right-[clamp(20px,4vw,56px)] top-1/2 -translate-y-1/2 z-10 bg-transparent border-none cursor-pointer group items-center justify-center min-h-[44px] min-w-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm"
        aria-label="Next slide"
      >
        <svg width="72" height="16" viewBox="0 0 72 16" fill="none" className="text-white/40 group-hover:text-white transition-colors duration-300 drop-shadow-[0_1px_3px_rgba(0,0,0,.3)]">
          <line x1="0" y1="8" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="1" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
          <line x1="60" y1="15" x2="68" y2="8" stroke="currentColor" strokeWidth="1" />
        </svg>
      </button>

      {/* Content — centered */}
      <div className="relative z-10 h-full min-h-[100dvh] flex flex-col items-center justify-end text-center px-[clamp(24px,6vw,80px)] pb-[clamp(80px,12vw,140px)]">
        <div className="max-w-[720px]">
          <FadeIn delay={0.1}>
            <p className="text-[12px] font-medium tracking-eyebrow uppercase text-white/70 mb-4" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
              Mineralize Your Water, Everywhere.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="headline-editorial text-white mb-6" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.5), 0 1px 6px rgba(0,0,0,0.4)' }}>
              Your water is missing what
              <br />
              <em className="italic font-normal">your body needs most.</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-[17px] font-normal leading-relaxed text-white/90 mb-10 max-w-[520px] mx-auto" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}>
              85% of bottled water in Thailand is &ldquo;dead water&rdquo; &mdash; purified, but nutritionally empty. Your body deserves better.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#products"
                className="inline-block text-[12px] font-semibold uppercase tracking-cta px-9 py-4 rounded-pill bg-gold/90 text-footer-dark hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Bring Your Water Back to Life
              </a>
              <a
                href="#why"
                className="inline-block text-[12px] font-semibold uppercase tracking-cta px-9 py-4 rounded-pill border border-white/25 text-white hover:bg-white hover:text-mineral transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Slide indicators */}
        <div className="mt-8 flex gap-2 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center border-none cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
            >
              <span className={`block h-[2px] rounded-full transition-[width,background-color] duration-500 ${
                i === active ? 'w-10 bg-gold' : 'w-6 bg-white/30'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
