'use client'

import { useState, FormEvent } from 'react'
import { FadeIn } from './Motion'

export default function PartnerForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="partner-form"
      className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]"
    >
      <FadeIn className="max-w-[640px] mx-auto">
        <div className="text-center mb-10">
          <div className="gold-line" />
          <p className="label-uppercase text-[12px] tracking-[.22em] text-ink-light mb-5">
            Get In Touch
          </p>
          <h2 className="font-display text-[clamp(32px,5vw,48px)] font-normal leading-[1.15] text-mineral tracking-tight">
            Become a <em>partner</em>
          </h2>
          <p className="text-sm font-light text-ink-light mt-3">
            We&apos;ll respond within 48 hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16">
            <h3 className="font-display text-2xl text-mineral mb-3">Thank you!</h3>
            <p className="text-sm text-ink-light">
              We&apos;ve received your inquiry and will respond within 48 hours.
            </p>
          </div>
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
      </FadeIn>
    </section>
  )
}
