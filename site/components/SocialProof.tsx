'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { FadeIn } from './Motion'

const metrics = [
  { value: 90, suffix: '%', label: 'Customer retention' },
  { value: 160, suffix: '+', label: 'Locations across Thailand' },
  { value: 5, suffix: '', unit: 'Years', label: 'Established track record' },
  { value: 365, suffix: '', unit: 'Days', label: 'Designed for daily use' },
]

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)
  const animRef = useRef<number>(0)

  useEffect(() => {
    if (!isInView) return
    if (reduced) { setDisplay(value); return }

    const duration = 1800
    const start = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(eased * value))
      if (progress < 1) {
        animRef.current = requestAnimationFrame(step)
      }
    }
    animRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animRef.current)
  }, [isInView, value, reduced])

  return <span ref={ref}>{display}{suffix}</span>
}

export default function SocialProof() {
  return (
    <section className="bg-warm-off">
      <FadeIn className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {metrics.map((item, i) => (
            <div
              key={item.label}
              className={`text-center px-4 ${
                i < metrics.length - 1 ? 'lg:border-r lg:border-border-warm' : ''
              }`}
            >
              <div className="font-display text-h1 font-normal text-mineral leading-none mb-2 tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <CountUp value={item.value} suffix={item.suffix} />
                {'unit' in item && item.unit && (
                  <span className="text-h4 ml-2">{item.unit}</span>
                )}
              </div>
              <div className="text-[12px] font-medium tracking-eyebrow uppercase text-ink-light">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
