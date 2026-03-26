'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface DividerProps {
  size?: 'sm' | 'md'
}

function BotanicalSvg({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const w = size === 'sm' ? 110 : 140
  const h = size === 'sm' ? 70 : 90
  return (
    <svg width={w} height={h} viewBox="0 0 100 64" fill="none" className="text-gold opacity-50">
      {/* Left: Parsley/herb sprig */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 60 L20 35" />
        <path d="M20 48 Q14 44 12 38" />
        <path d="M12 38 Q10 35 8 36 Q6 38 9 40 Q11 41 12 38" />
        <path d="M20 42 Q15 38 14 32" />
        <path d="M14 32 Q12 29 10 30 Q8 32 11 34 Q13 35 14 32" />
        <path d="M20 36 Q24 32 26 36 Q28 40 24 38 Q22 37 20 36" />
        <path d="M20 36 Q16 30 18 26 Q20 23 22 26 Q23 29 20 36" />
      </g>
      {/* Center: Lavender stalks */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M48 60 L46 28" />
        <path d="M52 60 L54 30" />
        <path d="M46 28 L45 25" />
        <circle cx="45" cy="23" r="1.2" fill="currentColor" />
        <circle cx="44.5" cy="20" r="1" fill="currentColor" />
        <circle cx="45.5" cy="17" r="1.2" fill="currentColor" />
        <circle cx="45" cy="14" r="1" fill="currentColor" />
        <circle cx="45.5" cy="11" r="0.8" fill="currentColor" />
        <path d="M54 30 L55 27" />
        <circle cx="55.5" cy="25" r="1.2" fill="currentColor" />
        <circle cx="55" cy="22" r="1" fill="currentColor" />
        <circle cx="55.5" cy="19" r="1.2" fill="currentColor" />
        <circle cx="55" cy="16" r="1" fill="currentColor" />
        <circle cx="55.5" cy="13" r="0.8" fill="currentColor" />
        <path d="M48 44 Q44 42 43 44 Q42 46 44 46" />
        <path d="M52 42 Q56 40 57 42 Q58 44 56 44" />
      </g>
      {/* Right: Wildflower stem */}
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M80 60 L80 24" />
        <path d="M80 44 Q86 40 88 36" />
        <path d="M80 36 Q74 32 72 28" />
        <path d="M80 28 Q84 24 86 20" />
        <circle cx="88" cy="34" r="2" fill="none" />
        <circle cx="88" cy="34" r="0.8" fill="currentColor" />
        <circle cx="72" cy="26" r="2" fill="none" />
        <circle cx="72" cy="26" r="0.8" fill="currentColor" />
        <circle cx="86" cy="18" r="2" fill="none" />
        <circle cx="86" cy="18" r="0.8" fill="currentColor" />
        <circle cx="80" cy="22" r="2" fill="none" />
        <circle cx="80" cy="22" r="0.8" fill="currentColor" />
      </g>
    </svg>
  )
}

const ease = [0.23, 1, 0.32, 1] as const

export default function Divider({ size = 'md' }: DividerProps) {
  const padding = size === 'sm' ? 'py-10' : 'py-16'
  const lineWidth = size === 'sm' ? 'w-[48px]' : 'w-[64px]'
  const reduced = useReducedMotion()

  return (
    <div className={`flex items-center justify-center gap-5 ${padding}`}>
      {/* Left line */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease, delay: 0 }}
        style={{ originX: 1 }}
        className={`${lineWidth} h-px bg-gold`}
      />
      {/* Botanical illustration */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
      >
        <BotanicalSvg size={size} />
      </motion.div>
      {/* Right line */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease, delay: 0 }}
        style={{ originX: 0 }}
        className={`${lineWidth} h-px bg-gold`}
      />
    </div>
  )
}
