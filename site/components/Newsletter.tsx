import { FadeIn } from './Motion'

export default function Newsletter() {
  return (
    <section className="bg-warm-off py-[clamp(48px,6vw,80px)] px-[clamp(24px,5vw,80px)]">
      <FadeIn className="max-w-[560px] mx-auto text-center">
        <div className="gold-line" />
        <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-5">
          Stay Connected
        </p>
        <h2 className="font-display text-h3 font-normal text-mineral mb-4 tracking-tight">
          Join the <em className="italic">Ritual</em>
        </h2>
        <p className="text-base font-light text-ink-light mb-6">
          Drop your email below for exclusive wellness tips, product drops, and community offers. No spam, just pure hydration.
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
          <button className="py-3.5 px-7 bg-mineral border-none rounded-pill text-white text-[12px] font-semibold tracking-cta uppercase cursor-pointer font-body hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold whitespace-nowrap">
            Unlock 10% Off
          </button>
        </div>
      </FadeIn>
    </section>
  )
}
