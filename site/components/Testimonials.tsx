'use client'

import { useState, useEffect, useCallback } from 'react'
import { FadeIn, motion, AnimatePresence } from './Motion'

const testimonials = [
  {
    quote:
      "I've tried every electrolyte on the market. Salt.Magic is the only one I actually use every single day. No taste, no sugar, just works.",
    author: 'Sarah C.',
    location: 'Bangkok',
  },
  {
    quote:
      "As a yoga instructor, I recommend Salt.Magic to all my students. The cleanest electrolyte I've found.",
    author: 'Sarah McLaughlin',
    location: 'Koh Samui',
  },
  {
    quote:
      "My whole family uses it — even my kids don't notice it in their water. That's the whole point.",
    author: 'Ploy',
    location: 'Chiang Mai',
  },
  {
    quote:
      'One jar lasts two months and creates zero plastic waste. Finally, a brand that matches my values.',
    author: 'Shannon Diablo',
    location: 'Phuket',
  },
  {
    quote:
      'I take it before every dive. The difference in how I feel after 2-3 hours in saltwater is massive.',
    author: 'Tom W.',
    location: 'Koh Tao',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section>
      <FadeIn className="max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] text-center mb-12">
        <div className="gold-line" />
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold">
          What Our Customers Say
        </p>
      </FadeIn>

      <FadeIn>
        <div className="max-w-[740px] mx-auto px-[clamp(24px,5vw,64px)] text-center relative min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            >
              <div className="font-display text-2xl md:text-3xl font-normal italic leading-relaxed text-mineral mb-7 relative">
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[120px] not-italic text-gold/30 leading-none">
                  &ldquo;
                </span>
                {testimonials[active].quote}
              </div>
              <div className="label-uppercase text-[12px] text-ink-light">
                {testimonials[active].author}
              </div>
              <div className="text-[13px] font-light text-ink-faint mt-1">
                {testimonials[active].location}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative w-8 h-8 rounded-full border-none cursor-pointer transition-all flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold bg-transparent after:block after:w-2 after:h-2 after:rounded-full after:transition-all ${
                  i === active ? 'after:bg-gold after:scale-125' : 'after:bg-border-warm'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
