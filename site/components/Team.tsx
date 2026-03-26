'use client'

import { StaggerContainer, StaggerItem } from './Motion'

const team = [
  {
    name: 'Leo',
    role: 'Founder & CEO',
    initials: 'L',
  },
  {
    name: 'Kawin',
    role: 'Head of Operations',
    initials: 'K',
  },
]

export default function Team() {
  return (
    <section className="px-[clamp(24px,5vw,64px)]">
      <StaggerContainer className="max-w-[900px] mx-auto">
        <StaggerItem className="text-center mb-16">
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            The people behind <em>the magic</em>
          </h2>
        </StaggerItem>

        <div className="flex justify-center gap-[clamp(48px,8vw,120px)]">
          {team.map((member, i) => (
            <StaggerItem key={member.name} className="text-center">
              <div className={`${i === 1 ? 'mt-12' : ''}`}>
                {/* Placeholder circle with initials */}
                <div className="w-[clamp(160px,20vw,220px)] h-[clamp(160px,20vw,220px)] rounded-full bg-cream border border-border-warm mx-auto mb-7 flex items-center justify-center">
                  <span className="font-display text-[clamp(48px,6vw,72px)] font-normal text-mineral/30">
                    {member.initials}
                  </span>
                </div>
                <h3 className="font-display text-[clamp(20px,2.5vw,28px)] font-normal text-mineral mb-1.5">
                  {member.name}
                </h3>
                <p className="text-[13px] font-light text-ink-faint">
                  {member.role}
                </p>
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerContainer>
    </section>
  )
}
