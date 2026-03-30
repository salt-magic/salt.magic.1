import { ReactNode } from 'react'
import { FadeIn } from './Motion'

interface TextBlockProps {
  eyebrow?: string
  title: ReactNode
  showGoldLine?: boolean
  children?: ReactNode
  align?: 'center' | 'left'
}

export default function TextBlock({ eyebrow, title, showGoldLine = false, children, align = 'center' }: TextBlockProps) {
  return (
    <FadeIn className={`max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] ${align === 'left' ? 'text-left' : 'text-center'}`}>
      {showGoldLine && <div className="gold-line" />}

      {eyebrow && (
        <p className="label-uppercase text-[11px] tracking-[.22em] text-gold mb-5">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-[clamp(36px,5.5vw,56px)] font-normal leading-[1.1] text-mineral mb-6 tracking-tight [&>em]:italic [&>em]:font-normal">
        {title}
      </h2>

      {children && (
        <div className="text-base font-light leading-[1.85] text-ink-light [&>p+p]:mt-5">
          {children}
        </div>
      )}
    </FadeIn>
  )
}
