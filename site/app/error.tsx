'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section className="min-h-[calc(100vh-96px-36px)] bg-warm-off flex items-center justify-center px-[clamp(24px,5vw,64px)] py-[clamp(96px,14vw,160px)]">
      <div className="max-w-[560px] text-center">
        <div className="gold-line mx-auto" />
        <p className="label-uppercase text-ink-light mb-5">
          Something went wrong
        </p>
        <h1 className="font-display text-display font-normal text-mineral tracking-tight mb-5">
          A small ripple in the water
        </h1>
        <p className="text-[15px] font-normal leading-relaxed text-ink-light mb-10 max-w-[440px] mx-auto">
          We hit an unexpected error. Try reloading or head back to the homepage.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto text-center px-8 py-3.5 bg-mineral text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold cursor-pointer border-none"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="w-full sm:w-auto text-center px-8 py-3.5 border border-mineral/25 text-mineral text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral/5 hover:border-mineral/40 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
