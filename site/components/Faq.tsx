'use client'

import { useState } from 'react'
import { FadeIn, motion, AnimatePresence } from './Motion'

const faqs = [
  {
    q: 'What is Salt.Magic made of?',
    a: 'Exactly three ingredients: magnesium citrate (312mg), potassium citrate (160mg), and pink Himalayan salt (152mg). No sugars, sweeteners, flavors, colors, or preservatives. Each serving is 2 grams.',
  },
  {
    q: 'Is Salt.Magic just salt?',
    a: 'No. Pink Himalayan salt is only 20% of the blend. The majority (50%) is magnesium citrate — the most bioavailable form of magnesium.',
  },
  {
    q: 'How do I use it?',
    a: 'Add one scoop (2g) to any drink. It dissolves instantly with no taste. Most users take 1-2 servings per day — morning and evening.',
  },
  {
    q: 'How does it compare to LMNT or Wilder?',
    a: '312mg magnesium per serving (7x more than most) at 7-10 THB vs 25-40 THB for imports. Same clean philosophy, dramatically better value.',
  },
  {
    q: 'Is it safe for children?',
    a: 'Natural minerals safe for all ages. Half serving (1g) recommended for children. Consult your pediatrician for specific health conditions.',
  },
  {
    q: 'Where can I buy Salt.Magic?',
    a: 'On Lazada and in 150+ wellness locations across Thailand — Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, Krabi, and more. We\'re expanding to pharmacies and retail chains nationwide.',
  },
  {
    q: 'Why is 85% of Thai water "dead water"?',
    a: 'Most bottled water in Thailand uses reverse osmosis filtration, which removes bacteria but also strips all natural minerals. The result is ultra-pure but nutritionally empty water — your body gets hydration without the electrolytes it needs to actually use it.',
  },
  {
    q: 'What\'s the difference between wellness and sports electrolytes?',
    a: 'Sports electrolytes are designed for occasional, high-intensity use — typically 3–5 times per week. Salt.Magic is a wellness electrolyte: pure minerals meant for daily use, 365 days a year. No sugar, no flavors, no artificial ingredients — just what your water is missing.',
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
        <h2 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-[1.15] text-mineral tracking-tight">
          Common <em>questions</em>
        </h2>
      </FadeIn>

      <FadeIn className="max-w-[660px] mx-auto px-[clamp(24px,5vw,64px)]">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-border-warm">
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between py-7 cursor-pointer gap-5 bg-transparent border-none text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-sm"
            >
              <h3 className="font-display text-[17px] font-normal text-mineral leading-[1.4]">
                {faq.q}
              </h3>
              <div className="w-5 h-5 flex-shrink-0 relative">
                <span className="absolute w-3.5 h-[1.5px] bg-gold rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                <motion.span
                  animate={{ rotate: openIndex === i ? 90 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="absolute w-[1.5px] h-3.5 bg-gold rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center"
                />
              </div>
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
