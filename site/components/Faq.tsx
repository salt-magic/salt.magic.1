'use client'

import { useState } from 'react'
import { FadeIn, motion, AnimatePresence } from './Motion'
import { faqs } from '@/content/faqs'

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
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i
          const panelId = `faq-panel-${i}`
          const buttonId = `faq-button-${i}`
          return (
            <div key={i} className="border-b border-border-warm">
              <button
                type="button"
                id={buttonId}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between py-5 cursor-pointer gap-5 bg-transparent border-none text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded-sm"
              >
                <h3 className="text-body-lg font-medium text-mineral leading-snug">
                  {faq.q}
                </h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="w-5 h-5 flex-shrink-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" className="text-ink-light">
                    <path d="M1 1l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
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
          )
        })}
      </FadeIn>
    </section>
  )
}
