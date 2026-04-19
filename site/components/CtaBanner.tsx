import Image from 'next/image'
import { FadeIn } from './Motion'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden">
      {/* Editorial lifestyle background */}
      <div className="absolute inset-0">
        <Image
          src="/images/mood/cta-banner-bg.webp"
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
        <div className="gold-line" />
        <p className="label-uppercase text-gold mb-5">
          Start Today
        </p>
        <h2 className="font-display text-h2 font-normal text-white tracking-tight mb-6">
          Bring Your Water Back to Life
        </h2>
        <p className="text-[15px] font-normal text-white/80 mb-10 max-w-[420px] mx-auto leading-relaxed">
          Three ingredients. Zero compromise. Thousands across Thailand sip this clean mineral formula every day &mdash; and never go back.
        </p>
        <a
          href="https://www.lazada.co.th/shop/salt-magic/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[12px] font-medium tracking-cta uppercase px-10 py-4 rounded-pill bg-gold/90 text-mineral hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          Shop Salt.Magic on Lazada
        </a>
      </FadeIn>
    </section>
  )
}
