'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from './Motion'

const leftLinks = [
  { href: '#why', label: 'Why' },
  { href: '#products', label: 'Products' },
]

const rightLinks = [
  { href: '#story', label: 'Story' },
  { href: '#partner', label: 'Partner' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-[20px] shadow-[0_1px_0_rgba(0,0,0,.06)]'
          : ''
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)] h-24 flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden md:flex items-center gap-10 flex-1">
          {leftLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`text-[14px] font-normal tracking-[.01em] transition-colors ${
                scrolled ? 'text-ink-light hover:text-mineral' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px]"
          aria-label="Menu"
        >
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${scrolled ? 'bg-ink' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
        </button>

        {/* Center logo — text like Luxo */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`font-display text-[32px] font-medium tracking-[.01em] flex-shrink-0 transition-colors ${
            scrolled ? 'text-mineral' : 'text-white'
          }`}
        >
          Salt.Magic
        </motion.a>

        {/* Right links + CTA (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-10 flex-1">
          {rightLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16 + i * 0.08 }}
              className={`text-[14px] font-normal tracking-[.01em] transition-colors ${
                scrolled ? 'text-ink-light hover:text-mineral' : 'text-white/85 hover:text-white'
              }`}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className={`text-[14px] font-normal tracking-[.01em] transition-colors ${
              scrolled ? 'text-ink-light hover:text-mineral' : 'text-white/85 hover:text-white'
            }`}
          >
            Shop Now
          </motion.a>
        </div>

        {/* Mobile CTA */}
        <a
          href="#"
          className={`md:hidden text-[14px] font-normal tracking-[.01em] transition-colors min-h-[44px] flex items-center ${
            scrolled ? 'text-mineral' : 'text-white/85'
          }`}
        >
          Shop
        </a>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-[20px] border-b border-sand md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 py-8">
              {allLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[15px] font-normal text-ink-light hover:text-mineral transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a href="#" className="text-[15px] font-normal text-ink-light hover:text-mineral transition-colors">
                Shop Now
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
