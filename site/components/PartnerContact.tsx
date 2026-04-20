import { FadeIn } from './Motion'

const MAILTO_HREF =
  'mailto:info@salt-magic.com' +
  '?subject=Partner%20Inquiry%20-%20%5BCompany%5D' +
  '&body=Hi%20Leo%2C%0A%0A' +
  'Company%3A%20%0A' +
  'Role%3A%20%0A' +
  'Distribution%20tier%20of%20interest%3A%20%5Bnational%20%2F%20regional%20%2F%20boutique%5D%0A' +
  'Target%20markets%20or%20store%20count%3A%20%0A%0A' +
  'Brief%20on%20our%20interest%3A%0A'

export default function PartnerContact() {
  return (
    <section
      id="partner-contact"
      className="py-[clamp(64px,8vw,100px)] px-[clamp(24px,5vw,64px)]"
    >
      <FadeIn className="max-w-[560px] mx-auto text-center">
        <div className="gold-line mx-auto" />
        <p className="label-uppercase text-ink-light mb-5">Get In Touch</p>
        <h2 className="font-display text-h2 font-normal text-mineral tracking-tight mb-4">
          Let&apos;s talk distribution
        </h2>
        <p className="text-[15px] font-normal leading-relaxed text-ink-light mb-9">
          Pharmacy chains, wellness retailers, or international distributors
          {' \u2014 '}reach out directly and we reply within 48 hours.
        </p>
        <a
          href={MAILTO_HREF}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-mineral text-white text-[12px] font-medium tracking-cta uppercase rounded-pill hover:bg-mineral-light transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 7l9 6 9-6" />
          </svg>
          Email info@salt-magic.com
        </a>
        <p className="mt-5 text-[13px] font-normal text-ink-light">
          or call{' '}
          <a
            href="tel:+66826020486"
            className="link-underline"
          >
            +66 82 602 0486
          </a>
        </p>
      </FadeIn>
    </section>
  )
}
