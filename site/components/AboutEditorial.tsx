'use client'

import Image from 'next/image'
import { FadeIn, StaggerContainer, StaggerItem } from './Motion'

const team = [
  {
    name: 'Leo',
    role: 'Founder & CEO',
    desc: 'Brand strategy, B2B partnerships, and the vision behind Salt.Magic. Started the company after discovering that the water he drank daily on Koh Samui had virtually zero minerals.',
    initials: 'L',
  },
  {
    name: 'Kawin',
    role: 'Head of Operations',
    desc: 'Production, logistics, and quality control. Manages the Samui Hub and ensures every batch meets the standard — from sourcing to shelf.',
    initials: 'K',
  },
]

export default function AboutEditorial() {
  return (
    <section className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,80px)]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[clamp(40px,6vw,80px)] items-center">
          {/* Text side with offset portraits */}
          <FadeIn>
            <div>
              <div className="gold-line" />
              <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
                The Team
              </p>
              <h2 className="font-display text-[clamp(32px,4.5vw,48px)] font-normal leading-[1.1] text-mineral tracking-tight mb-12">
                The people behind <em className="italic">Salt.Magic</em>
              </h2>

              <StaggerContainer className="space-y-10">
                {team.map((person, i) => (
                  <StaggerItem key={person.name}>
                    <div className="flex items-start gap-5">
                      {/* Round portrait placeholder */}
                      <div className="w-[72px] h-[72px] shrink-0 rounded-full bg-warm-off flex items-center justify-center">
                        <span className="font-display text-[28px] font-normal text-mineral/30">
                          {person.initials}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-[22px] font-normal text-mineral mb-1">
                          {person.name}
                        </h3>
                        <p className="text-[12px] font-medium tracking-[.15em] uppercase text-gold mb-3">
                          {person.role}
                        </p>
                        <p className="text-[15px] font-light leading-relaxed text-ink-light max-w-[380px]">
                          {person.desc}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </FadeIn>

          {/* Image side — team photo placeholder */}
          <FadeIn delay={0.15}>
            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] lg:aspect-auto lg:min-h-[520px]">
              <Image
                src="/images/mood/alo-2.png"
                alt="The Salt.Magic team — Leo and Kawin, Koh Samui"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
