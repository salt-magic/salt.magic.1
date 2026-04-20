'use client'

import { useState, useEffect } from 'react'

const messages = [
  '100% Natural  \u00B7  Zero Sugar  \u00B7  Zero Flavor',
  '5 Years Trusted  \u00B7  90% Retention  \u00B7  160+ Locations',
  'Mineralize Your Water, Everywhere.',
]

export default function AnnouncementBar() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % messages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Brand announcements"
      className="bg-mineral h-9 flex items-center justify-center overflow-hidden relative z-[60]"
    >
      {messages.map((msg, i) => (
        <span
          key={i}
          className={`absolute uppercase tracking-cta text-[11px] sm:text-[12px] font-medium text-white/90 whitespace-nowrap px-3 text-center transition-[opacity,transform] duration-700 ease-out ${
            i === active
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-1.5'
          } motion-reduce:transition-none`}
        >
          {msg}
        </span>
      ))}
    </div>
  )
}
