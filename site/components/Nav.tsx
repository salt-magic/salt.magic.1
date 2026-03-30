'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from './Motion'

/* Shared link classes for focus-visible states (Issue #3) */
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold'

export default function Nav() {
  const pathname = usePathname()
  const isHome = pathname === '/'

  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Anchor links: prefix with / on subpages
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`)

  const leftLinks = [
    { href: anchor('#why'), label: 'Why' },
    { href: anchor('#products'), label: 'Products' },
  ]

  const rightLinks = [
    { href: anchor('#story'), label: 'Story' },
    { href: '/blog', label: 'Blog' },
    { href: '/partner', label: 'Partner' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  useEffect(() => {
    const threshold = isHome ? 60 : 10
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [isHome])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Dark nav on subpages (white bg) or when scrolled on homepage
  const useDarkNav = scrolled || !isHome

  /* Issue #2: full white + text-shadow when transparent for readability on any hero image */
  const linkClassTransparent = `text-white hover:text-white/80 [text-shadow:_0_1px_8px_rgba(0,0,0,.5)]`
  const linkClassScrolled = 'text-ink hover:text-mineral [text-shadow:none]'

  const isRouteLink = (href: string) => href.startsWith('/')

  const LinkOrAnchor = ({ href, className, children, onClick, ...props }: {
    href: string
    className: string
    children: React.ReactNode
    onClick?: () => void
    [key: string]: unknown
  }) => {
    if (isRouteLink(href) && !href.startsWith('/#')) {
      return (
        <Link href={href} className={className} onClick={onClick} {...props}>
          {children}
        </Link>
      )
    }
    return (
      <a href={href} className={className} onClick={onClick} {...props}>
        {children}
      </a>
    )
  }

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'top-0 bg-white shadow-[0_1px_0_rgba(0,0,0,.06)] md:bg-white/90 md:backdrop-blur-[20px]'
          : isHome
            ? 'top-9'
            : 'top-9 bg-white shadow-[0_1px_0_rgba(0,0,0,.06)]'
      }`}
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)] h-24 flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden md:flex items-center gap-10 flex-1">
          {leftLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:underline underline-offset-4 decoration-1 ${focusRing} ${
                useDarkNav ? linkClassScrolled : linkClassTransparent
              }`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden flex flex-col justify-center items-center gap-1.5 bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px] ${focusRing}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'rotate-45 translate-y-[4.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] transition-all duration-300 ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'} ${mobileOpen ? '-rotate-45 -translate-y-[4.5px]' : ''}`} />
        </button>

        {/* Center logo — PNG with scroll color transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative h-20 w-20"
        >
          <Link
            href="/"
            className={`block h-full w-full ${focusRing}`}
            aria-label="Salt.Magic — Back to top"
          >
            {/* White logo (visible when not scrolled) — with drop-shadow for readability */}
            <Image
              src="/images/logos/logo-transparent.png"
              alt="Salt.Magic"
              width={80}
              height={80}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 brightness-0 invert drop-shadow-[0_1px_6px_rgba(0,0,0,.4)] ${
                useDarkNav || mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
            {/* Original blue logo (visible when scrolled) */}
            <Image
              src="/images/logos/logo-transparent.png"
              alt="Salt.Magic"
              width={80}
              height={80}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                useDarkNav || mobileOpen ? 'opacity-100' : 'opacity-0'
              }`}
              priority
            />
          </Link>
        </motion.div>

        {/* Right links + CTA (desktop) */}
        <div className="hidden md:flex items-center justify-end gap-10 flex-1">
          {rightLinks.map((link, i) => {
            const isRoute = isRouteLink(link.href) && !link.href.startsWith('/#')
            const El = isRoute ? Link : 'a'
            return (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 + i * 0.08 }}
              >
                <El
                  href={link.href}
                  className={`text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:underline underline-offset-4 decoration-1 ${focusRing} ${
                    useDarkNav ? linkClassScrolled : linkClassTransparent
                  }`}
                >
                  {link.label}
                </El>
              </motion.div>
            )
          })}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
          >
            <a
              href="#products"
              className={`text-[11px] font-semibold uppercase tracking-[0.12em] px-6 py-2.5 rounded-pill bg-mineral text-white hover:bg-mineral-light transition-colors duration-300 ${focusRing}`}
            >
              Shop Now
            </a>
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <a
          href="#products"
          className={`md:hidden text-[11px] font-semibold uppercase tracking-[0.12em] px-5 py-2 rounded-pill bg-mineral text-white min-h-[44px] flex items-center ${focusRing}`}
        >
          Shop
        </a>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 top-0 bg-black/20 backdrop-blur-sm md:hidden z-[-1]"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-24 left-0 right-0 bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)] md:hidden"
            >
              <nav className="flex flex-col items-center gap-1 py-8 px-6">
                {allLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                    className="w-full"
                  >
                    <LinkOrAnchor
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block w-full text-center text-[15px] font-medium uppercase tracking-[0.08em] text-ink-light hover:text-mineral transition-colors py-4 border-b border-border-warm last:border-b-0 ${focusRing}`}
                    >
                      {link.label}
                    </LinkOrAnchor>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + allLinks.length * 0.06 }}
                  className="w-full mt-4"
                >
                  <a
                    href="#products"
                    onClick={() => setMobileOpen(false)}
                    className={`block w-full text-center text-[11px] font-semibold uppercase tracking-[0.12em] px-6 py-4 rounded-pill bg-mineral text-white min-h-[48px] flex items-center justify-center ${focusRing}`}
                  >
                    Shop Now
                  </a>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
