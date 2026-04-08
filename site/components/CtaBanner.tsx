import Image from 'next/image'
import { FadeIn } from './Motion'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* PANPURI-inspired silhouette background */}
      <div className="absolute inset-0">
        <Image
          src="/images/mood/panpuri-3.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          aria-hidden="true"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(26,50,72,0.88) 0%, rgba(41,75,109,0.85) 50%, rgba(61,101,136,0.82) 100%)',
          }}
        />
      </div>

      <FadeIn className="relative z-10 max-w-[600px] mx-auto text-center px-[clamp(32px,6vw,80px)] py-[clamp(80px,10vw,120px)]">
        <div className="w-12 h-px bg-golden-hour/50 mx-auto mb-6" />
        <p className="text-[12px] font-medium tracking-eyebrow uppercase text-golden-hour mb-5">
          Start Today
        </p>
        <h2 className="font-display text-h2 font-normal text-white tracking-tight mb-6">
          Bring Your Water <em className="italic">Back to Life</em>
        </h2>
        <p className="text-[15px] font-light text-white/80 mb-10 max-w-[420px] mx-auto leading-relaxed">
          Three ingredients. Zero compromise. Join thousands across Thailand who&apos;ve made the daily switch.
        </p>
        <a
          href="https://www.lazada.co.th/shop/salt-magic/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[12px] font-semibold tracking-cta uppercase px-10 py-4 rounded-pill text-mineral bg-white hover:bg-golden-hour hover:text-ink transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Shop Salt.Magic on Lazada
        </a>
      </FadeIn>
    </section>
  )
}
