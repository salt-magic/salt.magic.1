import Image from 'next/image'
import { FadeIn, ScaleIn } from './Motion'

export default function CtaBanner() {
  return (
    <section className="relative">
      {/* Full-bleed background image */}
      <div className="relative h-[clamp(350px,50vh,550px)] overflow-hidden">
        <Image
          src="/images/products/greenery-duo.jpg"
          alt="Salt.Magic products in nature"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(60,48,40,0.15) 0%, rgba(41,75,109,0.25) 100%)',
          }}
        />
      </div>

      {/* Overlap card */}
      <div className="flex justify-center px-[clamp(24px,5vw,64px)]">
        <ScaleIn className="-mt-[120px] relative z-10 w-full max-w-[640px]">
          <FadeIn>
            <div className="bg-warm-white rounded-2xl shadow-[0_20px_60px_rgba(60,48,40,.08)] px-[clamp(32px,5vw,64px)] py-[clamp(48px,6vw,72px)] text-center">
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-normal leading-[1.2] text-mineral mb-4 tracking-tight">
                Start remineralizing your water <em>today</em>
              </h2>
              <p className="text-[15px] font-light text-ink-light mb-9 max-w-[420px] mx-auto">
                Three ingredients. Zero compromise. Join thousands across Thailand who&apos;ve made the switch.
              </p>
              <a
                href="#"
                className="inline-block text-[11px] font-semibold tracking-[.12em] uppercase px-10 py-4 rounded-pill text-white bg-mineral hover:bg-mineral-light transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Shop Now
              </a>
            </div>
          </FadeIn>
        </ScaleIn>
      </div>

      {/* Spacer for card overflow */}
      <div className="h-[clamp(40px,5vw,80px)]" />
    </section>
  )
}
