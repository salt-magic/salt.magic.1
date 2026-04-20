'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'
import { FadeIn } from './Motion'
import { useReducedMotion } from 'framer-motion'

const slides = [
  {
    src: '/images/products/hero-sachet.webp',
    alt: 'Salt.Magic sachet tucked in yoga leggings pocket',
    imgClass: 'object-cover object-[22%_50%] md:object-[25%_35%]',
  },
  {
    src: '/images/products/hero-new-2.webp',
    alt: 'Salt.Magic glass jar on beach at sunset',
    imgClass: 'object-cover object-[62%_62%] md:object-[60%_55%]',
  },
  {
    src: '/images/products/hero-new-3.webp',
    alt: 'Woman stretching poolside for daily hydration ritual',
    imgClass: 'object-cover object-[50%_32%] md:object-[center_35%]',
  },
]

export default function Hero() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const touchStart = useRef(0)

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), [])
  const prev = useCallback(() => setActive((p) => (p - 1 + slides.length) % slides.length), [])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX
  }

  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev()
    }
  }

  useEffect(() => {
    if (reduced) return
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next, reduced])

  return (
    <section
      className="relative overflow-hidden flex flex-col h-[100dvh] min-h-[620px] md:block md:h-auto md:min-h-[max(100dvh,600px)]"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Image stage: flex-1 on mobile (fills remaining viewport), absolute fill on desktop */}
      <div className="relative flex-1 min-h-[240px] md:absolute md:inset-0 md:flex-none md:min-h-0">
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
              className={slide.imgClass}
              sizes="100vw"
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Warm overlay - desktop only, mobile shows clean image */}
      <div
        className="hidden md:block absolute inset-0 z-[1]"
        style={{
          background: 'linear-gradient(180deg, rgba(30,20,10,0.05) 0%, rgba(30,20,10,0.18) 30%, rgba(30,20,10,0.40) 55%, rgba(30,20,10,0.60) 100%)',
        }}
      />
      {/* Film grain texture - desktop only */}
      <div
        className="hidden md:block absolute inset-0 z-[2] pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }}
      />

      {/* Top scrim - ensures Nav/logo contrast against warm Hero slides */}
      <div
        className="absolute top-0 inset-x-0 h-[140px] md:h-[180px] z-[3] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0,0,0,0.38) 0%, rgba(0,0,0,0.16) 50%, transparent 100%)',
        }}
      />

      {/* Arrows - desktop only */}
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

      {/* Content - stacked below image on mobile (warm-off card), overlayed on desktop */}
      <div className="relative z-10 bg-warm-off md:bg-transparent md:absolute md:inset-0 md:min-h-[100dvh] flex flex-col flex-shrink-0 md:items-center md:justify-end text-left md:text-center px-6 md:px-[clamp(24px,6vw,80px)] pt-5 pb-5 md:pt-0 md:pb-[clamp(40px,6vw,80px)]">
        <div className="w-full md:max-w-[720px] md:mx-auto">
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-3 md:mb-5 md:justify-center">
              <span className="block md:hidden h-px w-6 bg-gold flex-shrink-0" />
              <p className="label-uppercase text-ink-light md:text-white/70 md:[text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
                Natural Electrolytes - Mineralize Your Water, Everywhere.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-display font-normal text-[clamp(26px,7.5vw,32px)] leading-[1.15] tracking-tight md:text-display md:leading-[1.05] md:tracking-normal text-mineral md:text-white mb-3 md:mb-6 md:[text-shadow:0_2px_20px_rgba(0,0,0,0.5),0_1px_6px_rgba(0,0,0,0.4)]">
              Your water is missing what
              <br />
              your body needs most.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-[13.5px] sm:text-[14.5px] leading-[1.5] md:text-[15px] md:leading-relaxed font-normal text-ink-light md:text-white/90 mb-4 md:mb-10 md:max-w-[520px] md:mx-auto md:[text-shadow:0_1px_8px_rgba(0,0,0,0.4)]">
              85% of bottled water in Thailand is &ldquo;dead water&rdquo; - purified, but nutritionally empty. One scoop brings it back to life. Three ingredients. Zero compromise. Just minerals your body actually absorbs.
            </p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center md:justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
              <a
                href="#products"
                className="inline-block w-full sm:w-auto text-center text-[12px] font-medium uppercase tracking-cta px-8 py-3 md:py-3.5 rounded-pill bg-mineral md:bg-gold/90 text-white md:text-mineral hover:bg-mineral-light md:hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Bring Your Water Back to Life
              </a>
              <a
                href="#why"
                className="inline-block w-full sm:w-auto text-center text-[12px] font-medium uppercase tracking-cta px-8 py-3 md:py-3.5 rounded-pill border border-mineral/30 md:border-white/25 text-mineral md:text-white hover:bg-mineral md:hover:bg-white hover:text-white md:hover:text-mineral transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Learn More
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Slide indicators */}
        <div className="mt-4 md:mt-8 flex gap-2 justify-start md:justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center border-none cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              aria-label={`Slide ${i + 1}`}
              aria-current={i === active ? 'true' : undefined}
            >
              <span className={`block h-[2px] rounded-full transition-[width,background-color] duration-500 ${
                i === active
                  ? 'w-10 bg-mineral md:bg-gold'
                  : 'w-6 bg-mineral/25 md:bg-white/30'
              }`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
