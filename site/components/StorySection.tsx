'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

export default function StorySection() {
  const sectionRef = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], reduced ? ['0%', '0%'] : ['-5%', '5%'])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], reduced ? [1, 1] : [0, 1])
  const textY = useTransform(scrollYProgress, [0, 0.3], reduced ? [0, 0] : [40, 0])

  return (
    <section
      id="story"
      ref={sectionRef}
      className="relative overflow-hidden bg-mineral"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        {/* Image side - full bleed */}
        <div className="relative h-[50vh] min-h-[280px] lg:h-auto lg:min-h-0 overflow-hidden">
          <motion.div style={{ y: imageY }} className="absolute inset-[-10%]">
            <Image
              src="/images/products/taylor-water-nature.jpg"
              alt="Salt.Magic jar in tropical water among natural plants - Koh Samui, Thailand"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          {/* Subtle gradient to blend into text side */}
          <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-transparent to-mineral/60 pointer-events-none" />
        </div>

        {/* Text side */}
        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="flex flex-col justify-center px-[clamp(32px,6vw,80px)] py-[clamp(48px,6vw,80px)] lg:py-0"
        >
          <div className="max-w-[480px]">
            <div className="gold-line" />
            <p className="label-uppercase text-gold mb-5">
              Our Origin
            </p>

            <h2 className="font-display text-h2 font-normal text-white/90 tracking-tight mb-3">
              The Koh Samui Story
            </h2>
            <p className="text-[15px] font-normal text-white/75 mb-8">
              We noticed something was wrong with our water.
            </p>

            <div className="space-y-5 text-[15px] font-normal leading-[1.85] text-white/70">
              <p>
                Living on a tropical island, we drank more water than most - but still felt
                constantly depleted. We finally tested it with a TDS meter, and the results
                confirmed it: our daily &ldquo;purified&rdquo; water had virtually zero minerals.
              </p>
              <p>
                We couldn&apos;t find a clean electrolyte that was sugar-free, flavorless, and
                affordable enough for daily use. So, we made it ourselves.
              </p>
              <p className="text-white/90 font-normal bg-white/10 border border-gold/20 rounded-xl px-6 py-4">
                What started in a kitchen on Koh Samui is now trusted by over 160 locations
                across Thailand.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="#products"
                className="inline-block text-[12px] font-medium tracking-cta uppercase px-8 py-3.5 rounded-pill text-mineral bg-gold/90 hover:bg-gold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                Shop Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
