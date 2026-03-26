'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface DividerProps {
  size?: 'sm' | 'md'
}

const ease = [0.23, 1, 0.32, 1] as const

export default function Divider({ size = 'md' }: DividerProps) {
  const imgSize = size === 'sm' ? 40 : 64
  const padding = size === 'sm' ? 'py-10' : 'py-16'
  const lineWidth = size === 'sm' ? 'w-[48px]' : 'w-[64px]'
  const reduced = useReducedMotion()

  return (
    <div className={`flex items-center justify-center gap-5 ${padding}`}>
      {/* Left line — slides in from left */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.8, ease, delay: 0 }}
        style={{ originX: 1 }}
        className={`${lineWidth} h-px bg-gold`}
      />
      {/* Logo — fades in and scales up */}
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.7, ease, delay: 0.15 }}
      >
        <Image
          src="/images/logos/logo-transparent.png"
          alt=""
          width={imgSize}
          height={imgSize}
          className="opacity-60"
        />
      </motion.div>
      {/* Right line — slides in from right */}
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
