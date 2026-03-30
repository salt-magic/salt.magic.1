import { FadeIn } from './Motion'

export default function Newsletter() {
  return (
    <section className="bg-warm-off py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[560px] mx-auto text-center">
        <div className="gold-line" />
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
          Stay Connected
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,40px)] font-normal leading-[1.2] text-mineral mb-4 tracking-tight">
          Join the Salt.Magic <em className="italic">community</em>
        </h2>
        <p className="text-[15px] font-light text-ink-light mb-6">
          Wellness tips, product updates, and exclusive offers — delivered to your inbox.
        </p>

        {/* Lead magnet incentive */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-[12px] font-medium text-mineral mb-8">
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gold shrink-0" aria-hidden="true">
            <path d="M8 1.5a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 7.793V2a.5.5 0 0 1 .5-.5z" />
            <path d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
          Get our free Mineral Guide + 10% off your first order
        </div>

        <div className="flex gap-3 max-w-[420px] mx-auto">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="your@email.com"
            className="flex-1 py-3.5 px-5 bg-white border border-border-warm rounded-pill text-[14px] font-light text-ink font-body outline-none placeholder:text-ink-faint focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          />
          <button className="py-3.5 px-7 bg-mineral border-none rounded-pill text-white text-[11px] font-semibold tracking-[.08em] uppercase cursor-pointer font-body hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="text-[11px] text-ink-faint mt-4">No spam. Unsubscribe anytime.</p>
      </FadeIn>
    </section>
  )
}
