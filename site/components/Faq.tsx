'use client'

import { useState } from 'react'
import { FadeIn, motion, AnimatePresence } from './Motion'

const faqs = [
  {
    q: 'Is Salt.Magic just salt?',
    a: 'No \u2014 quite the opposite. Salt.Magic is a magnesium- and potassium-rich mineral formula. Pink Himalayan Salt is intentionally the smallest portion (just 189mg sodium per 3g serving \u2014 about a fifth of what typical electrolyte mixes pack in). The bulk of the formula is Potassium Citrate (532mg) and Trimagnesium Citrate (135mg). Three ingredients. No fillers, no additives, nothing artificial.',
  },
  {
    q: 'How do I use it?',
    a: 'Add 3 grams (one scoop or one sachet) to 1 to 1.5 liters of water \u2014 more or less depending how much you sweat. It dissolves instantly and is completely flavorless. Sip all day rather than gulping it down. The more you sweat, the more you need. Stay hydrated.',
  },
  {
    q: 'How does Salt.Magic compare to imported electrolyte brands?',
    a: "We share the same zero-sugar, clean-ingredient philosophy as the premium imported brands \u2014 but with two important differences. First, our sodium load is roughly a fifth of theirs (189mg vs 1000mg+ per serving), which makes Salt.Magic safe to sip all day rather than as a one-shot recovery drink. Second, you'll never find maltodextrin or other carb fillers in our formula. Crafted locally in Thailand, you also pay 7\u201314 THB per serving instead of the 25\u201340 THB import markup.",
  },
  {
    q: 'Is it safe for children?',
    a: 'Yes, these are natural minerals safe for all ages. We recommend a half-serving (1.5g) for children. As always, consult your pediatrician for specific health conditions.',
  },
  {
    q: 'Where can I buy electrolytes in Thailand?',
    a: 'You can buy Salt.Magic on Lazada for nationwide delivery, or find us in 160+ locations across Thailand \u2014 including Bangkok, Phuket, Koh Samui, Chiang Mai, Hua Hin, Pattaya, and Krabi. The best electrolytes in Thailand, available wherever you are.',
  },
  {
    q: 'Why do you say 85% of Thai water is "dead water"?',
    a: 'Most bottled water in Thailand is filtered using reverse osmosis. This removes bacteria, but it also strips away all the natural minerals. The result is ultra-pure but nutritionally empty water. It hydrates you, but lacks the electrolytes your body needs for proper cellular hydration. Salt.Magic puts those minerals back \u2014 restoring filtered water to a natural spring water profile.',
  },
  {
    q: 'What\u2019s the difference between "wellness" and "sports" electrolytes?',
    a: 'Sports drinks are built for occasional, high-intensity use (3\u20135 times a week) and are usually packed with sugar, flavors, and a heavy sodium dump designed for extreme sweat loss. Salt.Magic is the opposite: a daily wellness essential \u2014 pure, invisible minerals at safe daily doses, meant to be added to your water 365 days a year. Think water optimization, not sports recovery.',
  },
  {
    q: 'Does Salt.Magic break a fast?',
    a: 'No. Salt.Magic has zero calories, zero sugar, and zero sweeteners, so it will not break your fast or trigger an insulin response. Many of our customers use it as their daily fasting electrolyte \u2014 it dissolves without flavor and keeps headaches, fatigue, and cramps at bay during intermittent or extended fasts. Fasting-safe and keto-friendly by design.',
  },
  {
    q: 'Can I take Salt.Magic while traveling or flying?',
    a: 'Absolutely. Our Travel Sachet was designed as portable natural electrolytes for travel. Flights and tropical heat deplete your minerals rapidly. Drop a sachet in your water bottle before boarding and sip throughout the flight \u2014 gentle, low-sodium hydration that keeps you balanced across time zones.',
  },
  {
    q: 'Is Salt.Magic good for hangover recovery?',
    a: 'Yes. Alcohol is a powerful diuretic that strips your body of essential minerals \u2014 especially magnesium, potassium, and sodium. Salt.Magic restores the exact minerals alcohol depletes. Take one serving before bed and one in the morning for the fastest recovery.',
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
          Got Questions? Let&apos;s clear the water.
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
                  <div className="pb-6 text-[15px] font-normal leading-relaxed text-ink-light">
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
