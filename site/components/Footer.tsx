import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-footer-dark pt-[clamp(40px,8vw,96px)] pb-8 px-[clamp(24px,5vw,64px)]">
      <div className="max-w-[1200px] mx-auto">

        {/* Mobile layout */}
        <div className="lg:hidden">
          {/* Logo + tagline — compact */}
          <div className="flex items-center gap-4 mb-8">
            <Image
              src="/images/logos/logo-transparent.png"
              alt="Salt.Magic"
              width={56}
              height={56}
              className="h-14 w-auto brightness-0 invert opacity-80"
            />
            <p className="text-[13px] font-light leading-relaxed text-white/70">
              Clean Electrolytes. Naturally Powerful.
            </p>
          </div>

          {/* Navigate + Connect side by side */}
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-4 font-display">
                Navigate
              </div>
              <a href="/#why" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">About</a>
              <a href="/#products" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">Products</a>
              <a href="/#story" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">Our Story</a>
              <Link href="/blog" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">Blog</Link>
              <Link href="/partner" className="block text-[13px] font-light text-white/70 hover:text-gold transition-colors">Partner With Us</Link>
            </div>
            <div>
              <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-4 font-display">
                Connect
              </div>
              <a href="mailto:leo@salt-magic.com" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">leo@salt-magic.com</a>
              <a href="tel:+66826020486" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors">+66 826 020 486</a>
              <a href="https://www.instagram.com/saltmagic.electrolytes" className="block text-[13px] font-light text-white/70 hover:text-gold transition-colors">@saltmagic.electrolytes</a>
            </div>
          </div>

          {/* Newsletter — full width */}
          <div className="border-t border-white/[.07] pt-8 mb-8">
            <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-3 font-display">
              Stay Hydrated
            </div>
            <div className="flex gap-2">
              <label htmlFor="footer-email-mobile" className="sr-only">Email address</label>
              <input
                id="footer-email-mobile"
                type="email"
                placeholder="Your email"
                className="flex-1 min-h-[44px] py-3 px-4 bg-white/5 border border-white/10 rounded-pill text-[14px] font-light text-white font-body outline-none placeholder:text-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
              />
              <button className="min-h-[44px] py-3 px-5 bg-mineral border-none rounded-pill text-white text-[11px] font-semibold tracking-[.08em] uppercase cursor-pointer font-body hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">
                Join
              </button>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[.07] pt-6 flex justify-between text-xs font-light text-white/70">
            <span>Made on Koh Samui</span>
            <span>&copy; 2026 Salt.Magic</span>
          </div>
        </div>

        {/* Desktop layout — unchanged */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[2fr_1fr_1fr_1.5fr] gap-[clamp(24px,4vw,56px)] pb-12 border-b border-white/[.07]">
            {/* Brand */}
            <div>
              <Image
                src="/images/logos/logo-transparent.png"
                alt="Salt.Magic"
                width={120}
                height={120}
                className="h-24 w-auto brightness-0 invert opacity-80 mb-4"
              />
              <p className="text-[13px] font-light leading-relaxed text-white/70">
                Clean Electrolytes. Naturally Powerful.
                <br />
                No sugar. No flavors. No waste.
              </p>
              <div className="flex gap-2 mt-5">
                <a href="https://www.instagram.com/saltmagic.electrolytes" className="text-white/70 hover:text-gold transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold rounded-sm" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </a>
{/* TODO: Add Facebook link when URL is available from Leo */}
              </div>
            </div>

            {/* Navigate */}
            <div>
              <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-4 font-display">Navigate</div>
              <a href="/#why" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">About</a>
              <a href="/#products" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">Products</a>
              <a href="/#story" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">Our Story</a>
              <Link href="/blog" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">Blog</Link>
              <Link href="/partner" className="block text-[13px] font-light text-white/70 mb-2.5 hover:text-gold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold">Partner With Us</Link>
            </div>

            {/* Connect */}
            <div>
              <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-4 font-display">Connect</div>
              <span className="block text-[13px] font-light text-white/70 mb-2.5">leo@salt-magic.com</span>
              <span className="block text-[13px] font-light text-white/70 mb-2.5">+66 826 020 486</span>
              <span className="block text-[13px] font-light text-white/70 mb-2.5">@saltmagic.electrolytes</span>
            </div>

            {/* Newsletter */}
            <div>
              <div className="text-[12px] font-semibold tracking-[.18em] uppercase text-golden-hour mb-4 font-display">Stay Hydrated</div>
              <p className="text-[13px] font-light text-white/70 mb-1.5">No spam, just pure hydration.</p>
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
          <div className="flex justify-between pt-6 text-xs font-light text-white/70">
            <span>Made on Koh Samui, Thailand</span>
            <span>&copy; 2026 Salt.Magic</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
