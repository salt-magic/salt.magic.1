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
  const [activeSection, setActiveSection] = useState('')

  // Anchor links: prefix with / on subpages
  const anchor = (hash: string) => (isHome ? hash : `/${hash}`)

  const leftLinks = [
    { href: anchor('#why'), label: 'About' },
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
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Track active section on homepage via IntersectionObserver
  useEffect(() => {
    if (!isHome) return
    const sectionIds = ['why', 'products', 'story']
    const observers: IntersectionObserver[] = []
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((obs) => obs.disconnect())
  }, [isHome])

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

  // Check if a nav link is currently active
  const isActive = (href: string) => {
    // Subpage routes: /blog, /partner
    if (href.startsWith('/') && !href.startsWith('/#') && href !== '/') {
      return pathname.startsWith(href)
    }
    // Anchor links on homepage: #why, #products, #story
    if (isHome && href.startsWith('#')) {
      const id = href.replace('#', '')
      return activeSection === id
    }
    return false
  }

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
      className={`fixed left-0 right-0 z-50 transition-[top,background-color,box-shadow] duration-500 ${
        scrolled
          ? 'top-0 bg-white shadow-[0_1px_0_rgba(0,0,0,.06)] lg:bg-white/90 lg:backdrop-blur-[20px]'
          : mobileOpen
            ? 'top-9 bg-white'
            : isHome
              ? 'top-9'
              : 'top-9 bg-white shadow-[0_1px_0_rgba(0,0,0,.06)]'
      }`}
    >
      <div className="relative w-full max-w-[1400px] mx-auto px-[clamp(24px,5vw,64px)] h-24 flex items-center justify-between">
        {/* Left links (desktop) */}
        <div className="hidden lg:flex items-center gap-[clamp(20px,2.5vw,40px)] flex-1">
          {leftLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`text-[13px] font-medium uppercase tracking-cta transition-colors duration-300 underline-offset-4 decoration-1 ${focusRing} ${
                useDarkNav ? linkClassScrolled : linkClassTransparent
              } ${isActive(link.href) ? 'underline decoration-gold' : 'hover:underline'}`}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden flex items-center justify-center bg-transparent border-none cursor-pointer min-h-[44px] min-w-[44px] ${focusRing}`}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className={useDarkNav ? 'text-ink' : 'text-ink'}>
              <line x1="3" y1="3" x2="15" y2="15" />
              <line x1="15" y1="3" x2="3" y2="15" />
            </svg>
          ) : (
            <div className="flex flex-col justify-center items-center gap-1.5">
              <span className={`block w-5 h-[1.5px] ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'}`} />
              <span className={`block w-5 h-[1.5px] ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'}`} />
              <span className={`block w-5 h-[1.5px] ${useDarkNav || mobileOpen ? 'bg-ink' : 'bg-white'}`} />
            </div>
          )}
        </button>

        {/* Center logo — PNG with scroll color transition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-shrink-0 relative h-[100px] w-[100px]"
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
              width={100}
              height={100}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 brightness-0 invert drop-shadow-[0_1px_6px_rgba(0,0,0,.4)] ${
                useDarkNav || mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
              priority
            />
            {/* Original blue logo (visible when scrolled) */}
            <Image
              src="/images/logos/logo-transparent.png"
              alt="Salt.Magic"
              width={100}
              height={100}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                useDarkNav || mobileOpen ? 'opacity-100' : 'opacity-0'
              }`}
              priority
            />
          </Link>
        </motion.div>

        {/* Right links + CTA (desktop) */}
        <div className="hidden lg:flex items-center justify-end gap-[clamp(20px,2.5vw,40px)] flex-1">
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
                  className={`text-[13px] font-medium uppercase tracking-cta transition-colors duration-300 underline-offset-4 decoration-1 ${focusRing} ${
                    useDarkNav ? linkClassScrolled : linkClassTransparent
                  } ${isActive(link.href) ? 'underline decoration-gold' : 'hover:underline'}`}
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
              className={`text-[12px] font-medium uppercase tracking-cta px-6 py-2.5 rounded-pill bg-mineral text-white hover:bg-mineral-light transition-colors duration-300 ${focusRing}`}
            >
              Shop Now
            </a>
          </motion.div>
        </div>

        {/* Mobile shop icon — links to products, avoids duplicate "Shop Now" with menu CTA */}
        <a
          href="#products"
          className={`lg:hidden flex items-center justify-center min-h-[44px] min-w-[44px] transition-colors duration-300 ${focusRing} ${
            useDarkNav || mobileOpen ? 'text-ink' : 'text-white [filter:drop-shadow(0_1px_4px_rgba(0,0,0,.4))]'
          }`}
          aria-label="Shop Salt.Magic"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
        </a>
      </div>

      {/* Mobile menu — fullscreen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 top-0 bg-white z-[-1] lg:hidden flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-2">
              {allLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                >
                  <LinkOrAnchor
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-center font-display text-[28px] font-normal tracking-[-0.01em] text-ink hover:text-mineral transition-colors py-3 ${focusRing}`}
                  >
                    {link.label}
                  </LinkOrAnchor>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + allLinks.length * 0.06 }}
                className="mt-6"
              >
                <a
                  href="#products"
                  onClick={() => setMobileOpen(false)}
                  className={`inline-block text-[12px] font-medium uppercase tracking-cta px-10 py-4 rounded-pill bg-mineral text-white min-h-[48px] ${focusRing}`}
                >
                  Shop Now
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
