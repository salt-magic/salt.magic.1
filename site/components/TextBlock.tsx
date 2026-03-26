import { ReactNode } from 'react'
import { FadeIn } from './Motion'

interface TextBlockProps {
  eyebrow?: string
  title: ReactNode
  showGoldLine?: boolean
  children?: ReactNode
}

export default function TextBlock({ eyebrow, title, showGoldLine = false, children }: TextBlockProps) {
  return (
    <FadeIn className="max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] text-center">
      {showGoldLine && <div className="gold-line" />}

      {eyebrow && (
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-[clamp(32px,5vw,56px)] font-normal leading-[1.15] text-mineral mb-6 tracking-tight [&>em]:italic [&>em]:font-normal">
        {title}
      </h2>

      {children && (
        <div className="text-base font-light leading-[1.85] text-ink-light [&>p+p]:mt-4">
          {children}
        </div>
      )}
    </FadeIn>
  )
}
