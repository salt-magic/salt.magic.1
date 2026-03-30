'use client'

import Image from 'next/image'
import { FadeIn } from './Motion'

export default function ForEveryone() {
  return (
    <section id="for-everyone" className="py-[clamp(64px,8vw,100px)]">
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[clamp(32px,5vw,64px)] items-center">
          {/* Text side */}
          <FadeIn>
            <div className="max-w-[480px]">
              <div className="w-12 h-px bg-gold mb-5" />
              <p className="text-[12px] font-medium tracking-[.22em] uppercase text-ink-light mb-5">
                For Everyone
              </p>
              <h2 className="font-display text-[clamp(28px,4vw,44px)] font-normal leading-[1.1] text-mineral tracking-tight mb-6">
                What proper hydration <em className="italic">feels like</em>
              </h2>
              <div className="space-y-4 text-[15px] font-light leading-[1.8] text-ink-light mb-6">
                <p>
                  Clearer thinking. Steadier energy without crashes. Fewer muscle cramps. Better
                  sleep. Users notice the difference within days.
                </p>
                <p>
                  Salt.Magic isn&apos;t for athletes only — it&apos;s for everyone who drinks
                  water. Office workers, parents, travelers, fasters, anyone living in
                  Thailand&apos;s heat.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="border border-gold/30 rounded-xl p-4 text-center">
                  <p className="text-[12px] font-semibold tracking-[.18em] uppercase text-mineral mb-2">
                    Wellness
                  </p>
                  <ul className="space-y-1 text-[12px] font-light text-ink-light">
                    <li>365 days / year</li>
                    <li>All ages</li>
                    <li>Daily essential</li>
                  </ul>
                </div>
                <div className="border border-border-warm rounded-xl p-4 text-center opacity-50">
                  <p className="text-[11px] font-semibold tracking-[.18em] uppercase text-ink-faint mb-2">
                    Sports
                  </p>
                  <ul className="space-y-1 text-[12px] font-light text-ink-light">
                    <li>3-5x / week</li>
                    <li>Athletes only</li>
                    <li>Occasional</li>
                  </ul>
                </div>
              </div>

              <p className="font-display text-[16px] text-mineral font-normal italic">
                Daily minerals, not occasional recovery.
              </p>
            </div>
          </FadeIn>

          {/* Image side */}
          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-auto lg:min-h-[500px]">
              <Image
                src="/images/mood/alo-1.png"
                alt="Active wellness lifestyle — daily hydration for everyone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
