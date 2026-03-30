'use client'

import { useState, useEffect, useCallback } from 'react'
import { useReducedMotion } from 'framer-motion'
import { FadeIn, motion, AnimatePresence } from './Motion'

const testimonials = [
  {
    quote:
      "I've tried every electrolyte on the market. Salt.Magic is the only one I actually use every single day. No taste, no sugar, just works.",
    author: 'Sarah C.',
    role: 'Wellness Enthusiast',
    location: 'Bangkok',
  },
  {
    quote:
      "As a yoga instructor, I recommend Salt.Magic to all my students. The cleanest electrolyte I've found.",
    author: 'Sarah McLaughlin',
    role: 'Yoga Instructor',
    location: 'Koh Samui',
  },
  {
    quote:
      "My whole family uses it — even my kids don't notice it in their water. That's the whole point.",
    author: 'Ploy',
    role: 'Mother of Three',
    location: 'Chiang Mai',
  },
  {
    quote:
      'One jar lasts two months and creates zero plastic waste. Finally, a brand that matches my values.',
    author: 'Shannon Diablo',
    role: 'Sustainability Advocate',
    location: 'Phuket',
  },
  {
    quote:
      'I take it before every dive. The difference in how I feel after 2-3 hours in saltwater is massive.',
    author: 'Tom W.',
    role: 'Dive Instructor',
    location: 'Koh Tao',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const reduced = useReducedMotion()

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused || reduced) return
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next, isPaused, reduced])

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FadeIn className="max-w-[1100px] mx-auto px-[clamp(24px,5vw,64px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1.4fr] gap-0 lg:gap-[clamp(40px,5vw,64px)] items-start">

          {/* Left — Headline + CTA */}
          <div className="mb-10 lg:mb-0">
            <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-normal leading-[1.1] text-mineral tracking-tight">
              Look what our <em className="italic">customers say</em>
            </h2>
            <div className="mt-6">
              <a
                href="#products"
                className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] px-8 py-3.5 rounded-pill bg-mineral text-white hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Shop Now
              </a>
            </div>
          </div>

          {/* Divider line — desktop only */}
          <div className="hidden lg:block w-px bg-border-warm self-stretch" />

          {/* Right — Quote */}
          <div className="relative">
            {/* Decorative quote mark */}
            <span className="font-display text-[80px] md:text-[100px] text-gold/20 leading-none select-none absolute -top-6 left-0">
              &ldquo;
            </span>

            <div className="min-h-[240px] md:min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                  className="pt-14"
                >
                  <blockquote className="font-body text-[clamp(16px,2vw,18px)] font-light leading-[1.75] text-ink-light mb-8">
                    {testimonials[active].quote}
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-[13px] font-semibold text-mineral tracking-wide">
                      {testimonials[active].author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-[14px] font-medium text-mineral">
                        {testimonials[active].author}
                      </div>
                      <div className="text-[12px] font-light text-ink-light">
                        {testimonials[active].role} &middot; {testimonials[active].location}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Indicators — desktop below quote */}
            <div className="hidden lg:flex gap-2 mt-4">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center border-none cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                  aria-label={`Testimonial ${i + 1}`}
                  aria-current={i === active ? 'true' : undefined}
                >
                  <span className={`block h-[2px] rounded-full transition-[width,background-color] duration-500 ${
                    i === active ? 'w-10 bg-gold' : 'w-6 bg-border-warm'
                  }`} />
                </button>
              ))}
            </div>
          </div>

          {/* Indicators — mobile below quote */}
          <div className="flex lg:hidden gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center border-none cursor-pointer bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
                aria-label={`Testimonial ${i + 1}`}
              >
                <span className={`block h-[2px] rounded-full transition-[width,background-color] duration-500 ${
                  i === active ? 'w-10 bg-gold' : 'w-6 bg-border-warm'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
