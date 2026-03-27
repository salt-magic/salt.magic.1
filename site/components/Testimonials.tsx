'use client'

import { useState, useEffect, useCallback } from 'react'
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

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [next, isPaused])

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <FadeIn className="max-w-[800px] mx-auto px-[clamp(24px,5vw,64px)] text-center">
        {/* Large decorative quote mark */}
        <div className="relative">
          <span className="font-display text-[120px] md:text-[160px] text-gold/15 leading-none select-none absolute -top-16 md:-top-20 left-1/2 -translate-x-1/2">
            &ldquo;
          </span>
        </div>

        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center pt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="text-center"
            >
              <blockquote className="font-display text-[clamp(20px,3vw,30px)] font-normal italic leading-[1.5] text-mineral max-w-[640px] mx-auto mb-10">
                {testimonials[active].quote}
              </blockquote>
              <div className="text-[12px] font-medium tracking-[.18em] uppercase text-ink">
                {testimonials[active].author}
              </div>
              <div className="text-[13px] font-light text-ink-faint mt-1">
                {testimonials[active].role} &middot; {testimonials[active].location}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Gold bar indicators */}
        <div className="flex justify-center gap-2 mt-8">
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
      </FadeIn>
    </section>
  )
}
