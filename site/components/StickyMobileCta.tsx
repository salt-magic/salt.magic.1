'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'

export default function StickyMobileCta() {
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduced ? { opacity: 1 } : { y: 100, opacity: 0 }}
          animate={reduced ? { opacity: 1 } : { y: 0, opacity: 1 }}
          exit={reduced ? { opacity: 0 } : { y: 100, opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.25, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
        >
          <div className="bg-white border-t border-border-warm px-5 py-3 pb-[max(12px,env(safe-area-inset-bottom))]">
            <a
              href="https://www.lazada.co.th/shop/salt-magic/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-mineral text-white text-[13px] font-medium tracking-cta uppercase rounded-pill transition-colors duration-200 hover:bg-mineral-light active:bg-mineral"
            >
              Shop Now
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
