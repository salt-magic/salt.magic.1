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
              <div className="font-display text-[clamp(20px,2.8vw,30px)] font-normal italic leading-[1.55] text-mineral mb-7 relative">
                <span className="absolute -top-11 left-1/2 -translate-x-1/2 font-display text-[100px] not-italic text-gold/25 leading-none">
                  &ldquo;
                </span>
                {testimonials[active].quote}
              </div>
              <div className="text-[13px] font-semibold tracking-[.08em] uppercase text-ink">
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
                className={`w-2 h-2 rounded-full border-none cursor-pointer transition-all ${
                  i === active ? 'bg-mineral scale-125' : 'bg-sand'
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
