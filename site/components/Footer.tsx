import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-footer-dark pt-[clamp(56px,8vw,96px)] pb-8 px-[clamp(24px,5vw,64px)]">
      <div className="max-w-[1200px] mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-[clamp(24px,4vw,56px)] pb-12 border-b border-white/[.07]">
          {/* Brand — logo + tagline */}
          <div>
            <Image
              src="/images/logos/logo-transparent.png"
              alt="Salt.Magic"
              width={120}
              height={120}
              className="h-24 w-auto brightness-0 invert opacity-80 mb-4"
            />
            <p className="text-[13px] font-light leading-relaxed text-white/50">
              Clean Electrolytes. Naturally Powerful.
              <br />
              No sugar. No flavors. No waste.
            </p>
            {/* Social icons */}
            <div className="flex gap-2 mt-5">
              <a href="https://www.instagram.com/saltmagic.electrolytes" className="text-white/50 hover:text-gold transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a href="#" className="text-white/50 hover:text-gold transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <div className="text-[10px] font-semibold tracking-[.18em] uppercase text-gold mb-4 font-display">
              Navigate
            </div>
            <a href="/#why" className="block text-[13px] font-light text-white/55 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Why Salt.Magic
            </a>
            <a href="/#products" className="block text-[13px] font-light text-white/55 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Products
            </a>
            <a href="/#story" className="block text-[13px] font-light text-white/55 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Our Story
            </a>
            <Link href="/blog" className="block text-[13px] font-light text-white/55 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Blog
            </Link>
            <Link href="/partner" className="block text-[13px] font-light text-white/55 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
              Partner With Us
            </Link>
          </div>

          {/* Connect */}
          <div>
            <div className="text-[10px] font-semibold tracking-[.18em] uppercase text-gold mb-4 font-display">
              Connect
            </div>
            <span className="block text-[13px] font-light text-white/55 mb-2.5">
              info@salt-magic.com
            </span>
            <span className="block text-[13px] font-light text-white/55 mb-2.5">
              +66 826 020 486
            </span>
            <span className="block text-[13px] font-light text-white/55 mb-2.5">
              @saltmagic.electrolytes
            </span>
          </div>

          {/* Newsletter */}
          <div>
            <div className="text-[10px] font-semibold tracking-[.18em] uppercase text-gold mb-4 font-display">
              Stay Hydrated
            </div>
            <p className="text-[13px] font-light text-white/50 mb-1.5">
              Tips &amp; product updates.
            </p>
            <div className="flex gap-2 mt-2.5">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="flex-1 min-h-[44px] py-3 px-4 bg-white/5 border border-white/10 rounded-pill text-[14px] font-light text-white font-body outline-none placeholder:text-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
              <button className="min-h-[44px] py-3 px-5 bg-mineral border-none rounded-pill text-white text-[11px] font-semibold tracking-[.08em] uppercase cursor-pointer font-body hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between pt-6 text-xs font-light text-white/40 gap-1.5">
          <span>Made on Koh Samui, Thailand</span>
          <span>&copy; 2026 Salt.Magic</span>
        </div>
      </div>
    </footer>
  )
}
