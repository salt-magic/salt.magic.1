'use client'

import { useState } from 'react'
import { FadeIn, motion, AnimatePresence } from './Motion'

const faqs = [
  {
    q: 'What is Salt.Magic made of?',
    a: 'Exactly three ingredients: Magnesium Citrate (312mg), Potassium Citrate (160mg), and Pink Himalayan Salt (152mg). That\u2019s it. A 2-gram serving with absolutely no sugars, sweeteners, artificial flavors, colors, or preservatives.',
  },
  {
    q: 'Is Salt.Magic just salt?',
    a: 'No. Pink Himalayan salt makes up just 20% of the blend. The majority (over 50%) is Magnesium Citrate \u2014 the most highly bioavailable form of magnesium \u2014 and the rest is pure Potassium Citrate. No fillers.',
  },
  {
    q: 'How do I use it?',
    a: 'Add one scoop (2g) or one travel pouch to any drink. It dissolves instantly and is completely flavorless. The Routine: Most of our users take 1\u20132 servings per day (once in the morning, once in the evening).',
  },
  {
    q: 'How does it compare to imported brands like LMNT or Wilder?',
    a: 'We share the same zero-sugar, clean-ingredient philosophy as the premium US brands. The difference? We deliver 7x more magnesium per serving. Crafted locally in Thailand, you pay 7\u201310 THB per serving instead of the 25\u201340 THB import markup.',
  },
  {
    q: 'Is it safe for children?',
    a: 'Yes, these are natural minerals safe for all ages. We recommend a half-serving (1g) for children. As always, consult your pediatrician for specific health conditions.',
  },
  {
    q: 'Where can I buy Salt.Magic?',
    a: 'You can order directly on Lazada for nationwide delivery, or find us in 160+ locations across Thailand, including Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, and Krabi.',
  },
  {
    q: 'Why do you say 85% of Thai water is "dead water"?',
    a: 'Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs to actually absorb and use that hydration.',
  },
  {
    q: 'What\u2019s the difference between "wellness" and "sports" electrolytes?',
    a: 'Sports drinks are built for occasional, high-intensity use (3\u20135 times a week) and are usually packed with sugar and flavors. Salt.Magic is a daily wellness essential: pure, invisible minerals meant to be added to your water 365 days a year.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section>
      <FadeIn className="max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] text-center mb-12">
        <div className="gold-line" />
        <p className="label-uppercase text-ink-light mb-5">
          Questions
        </p>
        <h2 className="font-display text-h2 font-normal text-mineral tracking-tight">
          Got Questions? Let&apos;s clear <em className="italic">the water.</em>
        </h2>
      </FadeIn>

      <FadeIn className="max-w-[660px] mx-auto px-[clamp(24px,5vw,64px)]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border-warm">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-5 cursor-pointer gap-5 bg-transparent border-none text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-sm"
            >
              <h3 className="text-body-lg font-medium text-mineral leading-snug">
                {faq.q}
              </h3>
              <motion.div
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
              >
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-ink-light">
                  <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 text-[15px] font-light leading-relaxed text-ink-light">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </FadeIn>
    </section>
  )
}
