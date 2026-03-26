'use client'

import { useState } from 'react'

const messages = [
  "Thailand's Premium Electrolyte Mineralizer",
  '100% Natural  |  Zero Sugar  |  Zero Flavor',
  'Free Shipping on Orders Over 1,000 THB',
  '5 Years Trusted  |  90% Retention  |  200+ Locations',
]

const separator = '\u00A0\u00A0\u2022\u00A0\u00A0'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const track = messages.join(separator) + separator

  return (
    <div className="bg-mineral h-9 flex items-center overflow-hidden relative z-[60]">
      <div className="animate-marquee whitespace-nowrap flex">
        <span className="uppercase tracking-[0.12em] text-[11px] font-medium text-white/90">
          {track}
        </span>
        <span className="uppercase tracking-[0.12em] text-[11px] font-medium text-white/90">
          {track}
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors bg-transparent border-none cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        aria-label="Close announcement"
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="2" y1="2" x2="10" y2="10" />
          <line x1="10" y1="2" x2="2" y2="10" />
        </svg>
      </button>
    </div>
  )
}
