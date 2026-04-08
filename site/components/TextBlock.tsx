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
        <p className="label-uppercase text-ink-light mb-5">
          {eyebrow}
        </p>
      )}

      <h2 className="font-display text-h2 font-normal text-mineral mb-6 tracking-tight [&>em]:italic [&>em]:font-normal">
        {title}
      </h2>

      {children && (
        <div className="text-[15px] font-light leading-[1.85] text-ink-light [&>p+p]:mt-5">
          {children}
        </div>
      )}
    </FadeIn>
  )
}
