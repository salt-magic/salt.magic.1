'use client'

import { useState, FormEvent } from 'react'
import { SlideIn, StaggerContainer, StaggerItem, FadeIn } from './Motion'

const metrics = [
  { value: '90%', label: 'Retention' },
  { value: '35-40%', label: 'Margins' },
  { value: '150+', label: 'Locations' },
  { value: '4.4x', label: 'vs Fitness Revenue' },
]

export default function Partner() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="partner" className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      {/* Dark info panel */}
      <SlideIn from="left" className="bg-mineral p-[clamp(56px,7vw,110px)_clamp(40px,5vw,88px)] flex flex-col justify-center">
        <p className="text-[11px] font-medium tracking-[.22em] uppercase text-gold mb-5">
          Distribution Partnership
        </p>
        <h2 className="font-display text-[clamp(28px,3.5vw,44px)] font-normal leading-[1.2] text-white mb-5">
          Want to distribute <em className="italic">Salt.Magic</em>?
        </h2>
        <p className="text-[15px] font-light leading-relaxed text-white/60 max-w-[440px]">
          The global electrolyte market reaches $69.1B by 2032. APAC is 5-7 years behind
          USA adoption — early partners capture first-mover advantage.
        </p>
        <StaggerContainer className="grid grid-cols-2 gap-7 mt-11">
          {metrics.map((m) => (
            <StaggerItem key={m.label}>
              <div className="font-display text-[28px] font-medium text-gold leading-none mb-1">
                {m.value}
              </div>
              <div className="text-[11px] font-normal tracking-[.06em] uppercase text-white/35">
                {m.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SlideIn>

      {/* Form panel */}
      <SlideIn from="right" className="bg-cream p-[clamp(56px,7vw,110px)_clamp(40px,5vw,88px)] flex flex-col justify-center">
        <h3 className="font-display text-[26px] font-medium text-mineral mb-1.5">
          Become a partner
        </h3>
        <p className="text-sm font-light text-ink-faint mb-8">
          We&apos;ll respond within 48 hours.
        </p>

        {submitted ? (
          <FadeIn>
            <div className="text-center py-12">
              <h4 className="font-display text-2xl text-mineral mb-3">Thank you!</h4>
              <p className="text-sm text-ink-light">
                We&apos;ve received your inquiry and will respond within 48 hours.
              </p>
            </div>
          </FadeIn>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-medium tracking-[.1em] uppercase text-ink-light mb-1.5">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full py-3.5 px-4 bg-white border border-sand rounded-lg font-body text-sm font-light text-ink outline-none focus:border-mineral transition-colors placeholder:text-ink-faint"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[.1em] uppercase text-ink-light mb-1.5">
                  Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="Company name"
                  className="w-full py-3.5 px-4 bg-white border border-sand rounded-lg font-body text-sm font-light text-ink outline-none focus:border-mineral transition-colors placeholder:text-ink-faint"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
              <div>
                <label className="block text-[11px] font-medium tracking-[.1em] uppercase text-ink-light mb-1.5">
                  Role
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your role"
                  className="w-full py-3.5 px-4 bg-white border border-sand rounded-lg font-body text-sm font-light text-ink outline-none focus:border-mineral transition-colors placeholder:text-ink-faint"
                />
              </div>
              <div>
                <label className="block text-[11px] font-medium tracking-[.1em] uppercase text-ink-light mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full py-3.5 px-4 bg-white border border-sand rounded-lg font-body text-sm font-light text-ink outline-none focus:border-mineral transition-colors placeholder:text-ink-faint"
                />
              </div>
            </div>
            <div className="mb-3.5">
              <label className="block text-[11px] font-medium tracking-[.1em] uppercase text-ink-light mb-1.5">
                Message
              </label>
              <textarea
                rows={3}
                placeholder="Tell us about your distribution interest..."
                className="w-full py-3.5 px-4 bg-white border border-sand rounded-lg font-body text-sm font-light text-ink outline-none focus:border-mineral transition-colors placeholder:text-ink-faint resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-mineral text-white font-body text-[11px] font-semibold tracking-[.12em] uppercase border-none rounded-pill cursor-pointer hover:bg-mineral-light transition-all duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        )}
      </SlideIn>
    </section>
  )
}
