'use client'

import Image from 'next/image'
import { FadeIn } from './Motion'

export default function ForEveryone() {
  return (
    <section id="for-everyone" className="py-[clamp(48px,6vw,80px)]">
      <div className="max-w-[1400px] mx-auto px-[clamp(24px,5vw,80px)]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-[clamp(32px,5vw,64px)] items-center">
          {/* Text side */}
          <FadeIn>
            <div className="max-w-[480px]">
              <div className="gold-line" />
              <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-5">
                For Everyone
              </p>
              <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-3">
                Not a Sports Drink. A Daily Essential.
              </h2>
              <p className="text-[15px] font-normal text-ink-light mb-6">
                Pure hydration for daily life, not just game day.
              </p>
              <p className="text-[15px] font-normal leading-[1.8] text-ink-light mb-8">
                Most electrolytes are packed with sugar and designed for extreme athletes
                to use once in a while. Salt.Magic is designed for life. Whether you&apos;re
                intermittent fasting, surviving the tropical heat, traveling, or just
                navigating a busy workday, your body burns through minerals every single day.
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="border border-border-warm rounded-xl p-4 text-center">
                  <p className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light mb-2">
                    The Old Way (Sports Drinks)
                  </p>
                  <ul className="space-y-1 text-[13px] font-normal text-ink-light">
                    <li>Occasional use (3-5x a week)</li>
                    <li>Built for intense workouts</li>
                    <li>Loaded with sugar &amp; artificial colors</li>
                  </ul>
                </div>
                <div className="border border-gold/30 rounded-xl p-4 text-center">
                  <p className="text-[12px] font-medium tracking-eyebrow uppercase text-mineral mb-2">
                    The Salt.Magic Way
                  </p>
                  <ul className="space-y-1 text-[13px] font-normal text-ink-light">
                    <li>Daily essential (365 days a year)</li>
                    <li>Built for anyone who drinks water</li>
                    <li>Pure, invisible, natural minerals</li>
                  </ul>
                </div>
              </div>
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
