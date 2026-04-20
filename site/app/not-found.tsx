import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - Salt.Magic',
  description: 'The page you are looking for could not be found.',
  robots: 'noindex, follow',
}

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-96px-36px)] bg-warm-off flex items-center justify-center px-[clamp(24px,5vw,64px)] py-[clamp(96px,14vw,160px)]">
      <div className="max-w-[560px] text-center">
        <div className="gold-line mx-auto" />
        <p className="label-uppercase text-ink-light mb-5">
          Error 404
        </p>
        <h1 className="font-display text-display font-normal text-mineral tracking-tight mb-5">
          This page drifted away
        </h1>
        <p className="text-[15px] font-normal leading-relaxed text-ink-light mb-10 max-w-[440px] mx-auto">
          The page you are looking for has moved or no longer exists. Let&apos;s get you back to hydrated territory.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-mineral text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Back to Home
          </Link>
          <Link
            href="/#products"
            className="w-full sm:w-auto text-center px-8 py-3.5 border border-mineral/25 text-mineral text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral/5 hover:border-mineral/40 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Shop Salt.Magic
          </Link>
        </div>
      </div>
    </section>
  )
}
