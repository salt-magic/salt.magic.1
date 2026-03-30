'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import { FadeIn } from './Motion'

const metrics = [
  { value: 90, suffix: '%', label: 'Customer retention' },
  { value: 150, suffix: '+', label: 'Wellness locations' },
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
    <section className="bg-mineral">
      <FadeIn className="max-w-[1200px] mx-auto px-[clamp(24px,5vw,80px)] py-[clamp(64px,8vw,100px)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
          {metrics.map((item, i) => (
            <div
              key={item.label}
              className={`text-center px-4 ${
                i < metrics.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <div className="font-display text-[clamp(36px,5vw,64px)] font-normal text-white leading-none mb-2 tracking-tight" style={{ fontVariantNumeric: 'tabular-nums' }}>
                <CountUp value={item.value} suffix={item.suffix} />
                {'unit' in item && item.unit && (
                  <span className="text-[clamp(20px,3vw,36px)] ml-2">{item.unit}</span>
                )}
              </div>
              <div className="text-[12px] font-medium tracking-[.18em] uppercase text-golden-hour/80">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
