import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - Salt.Magic',
  description:
    'How Salt.Magic handles your personal data under the Thai PDPA. Last updated April 2026.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://salt-magic.com/privacy',
  },
}

const linkClass =
  'text-mineral underline decoration-gold/60 decoration-1 underline-offset-[3px] hover:decoration-gold hover:text-mineral-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold'

const h2Class =
  'font-display text-[clamp(22px,2.8vw,30px)] font-normal text-mineral tracking-tight mt-[clamp(48px,6vw,72px)] mb-5 leading-[1.2]'

const h3Class =
  'font-display text-[clamp(17px,2vw,20px)] font-normal text-mineral mt-10 mb-3 leading-[1.25]'

const pClass =
  'text-[15px] font-normal leading-relaxed text-ink-light mb-4'

const ulClass =
  'list-disc pl-6 space-y-2 mb-6 text-[15px] font-normal leading-relaxed text-ink-light marker:text-gold'

const strongClass = 'font-medium text-ink'

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-off py-[clamp(64px,10vw,120px)] px-[clamp(24px,5vw,64px)]">
        <div className="max-w-[680px] mx-auto text-center">
          <div className="gold-line mx-auto" />
          <p className="label-uppercase text-ink-light mb-5">
            Legal
          </p>
          <h1 className="headline-editorial text-mineral tracking-tight mb-5">
            Privacy Policy
          </h1>
          <p className="text-[15px] font-normal text-ink-light leading-relaxed">
            <span className={strongClass}>SALT.MAGIC CO., LTD.</span>
            <br />
            Last updated: April 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-[680px] mx-auto px-[clamp(24px,5vw,64px)] py-[clamp(60px,8vw,100px)]">
        {/* 1. Data Controller */}
        <section id="data-controller" aria-labelledby="heading-1">
          <h2 id="heading-1" className={`${h2Class} mt-0`}>
            1. Data Controller
          </h2>
          <p className={pClass}>
            <span className={strongClass}>SALT.MAGIC CO., LTD.</span>
            <br />
            45/57 Moo 3, Maret
            <br />
            Koh Samui, Suratthani 84310
            <br />
            Thailand
          </p>
          <p className={pClass}>
            <span className={strongClass}>Tax ID:</span> 0845567024315
            <br />
            <span className={strongClass}>Email:</span>{' '}
            <a href="mailto:info@salt-magic.com" className={linkClass}>
              info@salt-magic.com
            </a>
            <br />
            <span className={strongClass}>Phone:</span>{' '}
            <a href="tel:+66826020486" className={linkClass}>
              +66 82 602 0486
            </a>
            <br />
            <span className={strongClass}>Website:</span>{' '}
            <a
              href="https://salt-magic.com"
              className={linkClass}
            >
              https://salt-magic.com
            </a>
            <br />
            <span className={strongClass}>Director:</span> Kawin Tanomsat
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 2. Applicable Law */}
        <section id="applicable-law" aria-labelledby="heading-2">
          <h2 id="heading-2" className={h2Class}>
            2. Applicable Law
          </h2>
          <p className={pClass}>
            We process personal data in accordance with the Thai{' '}
            <span className={strongClass}>
              Personal Data Protection Act B.E. 2562 (2019)
            </span>{' '}
            (&ldquo;PDPA&rdquo;). Our company is registered in Thailand and our
            services are not directed at the European Union market.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 3. Personal Data We Collect */}
        <section id="personal-data" aria-labelledby="heading-3">
          <h2 id="heading-3" className={h2Class}>
            3. Personal Data We Collect
          </h2>
          <p className={pClass}>
            Depending on how you use our website, we may process the following
            categories of personal data:
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>Technical access data:</span> IP
              address, browser type, operating system, referrer URL, time of
              access
            </li>
            <li>
              <span className={strongClass}>
                Contact / inquiry form data:
              </span>{' '}
              when you submit our contact or partner inquiry form, or contact us
              via email (name, email address, company, role, content of your
              message)
            </li>
            <li>
              <span className={strongClass}>Newsletter data:</span> email
              address, and optionally first name, if you subscribe to our
              newsletter &mdash; see{' '}
              <a href="#newsletter" className={linkClass}>
                Section 8
              </a>
            </li>
            <li>
              <span className={strongClass}>Cookie and tracking data</span> (see{' '}
              <a href="#cookies" className={linkClass}>
                Section 7
              </a>
              )
            </li>
          </ul>
          <p className={pClass}>
            We do <span className={strongClass}>not</span> process booking or
            reservation data, and we do{' '}
            <span className={strongClass}>not</span> process payment data
            &mdash; product purchases are fulfilled externally via Lazada (see{' '}
            <a href="#external-redirects" className={linkClass}>
              Section 9
            </a>
            ).
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 4. Purposes and Legal Bases */}
        <section id="purposes" aria-labelledby="heading-4">
          <h2 id="heading-4" className={h2Class}>
            4. Purposes and Legal Bases under PDPA
          </h2>
          <div
            role="table"
            aria-label="Processing purposes and their PDPA legal bases"
            className="bg-warm-off rounded-2xl overflow-hidden border border-border-warm"
          >
            <div
              role="row"
              className="grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-2 sm:gap-6 px-5 sm:px-7 py-4 bg-mineral/5 border-b border-border-warm"
            >
              <div
                role="columnheader"
                className="text-[12px] font-medium text-mineral tracking-eyebrow uppercase"
              >
                Purpose
              </div>
              <div
                role="columnheader"
                className="text-[12px] font-medium text-mineral tracking-eyebrow uppercase"
              >
                PDPA Legal Basis
              </div>
            </div>
            {[
              {
                purpose: 'Operation and provision of the website',
                basis: 'Sec. 24(5) – legitimate interest',
              },
              {
                purpose: 'Responding to contact and partner inquiries',
                basis: 'Sec. 24(3) – pre-contractual / Sec. 24(5)',
              },
              {
                purpose: 'Newsletter distribution',
                basis: 'Sec. 19 – consent',
              },
              {
                purpose:
                  'Analytics, marketing, non-essential cookies (once activated)',
                basis: 'Sec. 19 – consent',
              },
              {
                purpose:
                  'Compliance with legal obligations (Thai tax, accounting, commercial law)',
                basis: 'Sec. 24(6) – legal obligation',
              },
            ].map((row, idx, arr) => (
              <div
                role="row"
                key={idx}
                className={`grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-1 sm:gap-6 px-5 sm:px-7 py-4 text-[14px] leading-relaxed ${
                  idx < arr.length - 1 ? 'border-b border-border-warm' : ''
                }`}
              >
                <div role="cell" className="text-ink">
                  {row.purpose}
                </div>
                <div role="cell" className="text-ink-light">
                  {row.basis}
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 5. Server Log Files */}
        <section id="server-logs" aria-labelledby="heading-5">
          <h2 id="heading-5" className={h2Class}>
            5. Server Log Files
          </h2>
          <p className={pClass}>
            When you visit our website, our hosting provider (Vercel Inc.)
            automatically collects the following data transmitted by your
            browser:
          </p>
          <ul className={ulClass}>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing device</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>
          <p className={pClass}>
            These data are not combined with other data sources and are used to
            ensure the secure and stable operation of our website.
          </p>
          <p className={pClass}>
            <span className={strongClass}>Retention:</span> typically{' '}
            <span className={strongClass}>7 to 30 days</span>; thereafter
            deleted or anonymized, unless retention is required for security
            reasons. Statutory logging requirements under the Thai{' '}
            <span className={strongClass}>Computer Crime Act</span> (up to 90
            days) remain unaffected.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 6. Contact */}
        <section id="contact-processing" aria-labelledby="heading-6">
          <h2 id="heading-6" className={h2Class}>
            6. Contact
          </h2>
          <p className={pClass}>
            You can contact us either directly via email at{' '}
            <a href="mailto:leo@salt-magic.com" className={linkClass}>
              leo@salt-magic.com
            </a>
            , or by submitting the contact / partner inquiry form on our
            website. In both cases, we process the information you provide
            (name, email address, company, role, content of your message) in
            order to respond to your inquiry and to handle any follow-up
            questions.
          </p>
          <p className={pClass}>
            <span className={strongClass}>Email delivery provider:</span> form
            submissions from our website are transmitted to us via{' '}
            <span className={strongClass}>Resend</span> (Resend, Inc., operated
            out of the United States &mdash;{' '}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="Resend website (opens in new window)"
            >
              https://resend.com
            </a>
            ). Resend acts as our transactional email service provider and
            processes form content and email metadata solely for the purpose of
            delivering the message to us.
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>Legal basis:</span> Sec. 24(3) PDPA
              (pre-contractual / contractual) or Sec. 24(5) PDPA (legitimate
              interest).
            </li>
            <li>
              <span className={strongClass}>Retention:</span> until the purpose
              ceases to apply, at the latest{' '}
              <span className={strongClass}>36 months</span>, unless statutory
              retention obligations apply.
            </li>
            <li>
              <span className={strongClass}>Cross-border transfer:</span> data
              transmitted via the form leaves Thailand and is processed on
              servers of Resend in the United States. Appropriate safeguards
              under Sec. 28 PDPA apply (see{' '}
              <a href="#cross-border" className={linkClass}>
                Section 10
              </a>
              ).
            </li>
          </ul>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 7. Cookies and Tracking */}
        <section id="cookies" aria-labelledby="heading-7">
          <h2 id="heading-7" className={h2Class}>
            7. Cookies and Tracking Technologies
          </h2>
          <p className={pClass}>
            Our website uses a minimal set of technologies. We distinguish
            between:
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>Strictly necessary</span> (required
              for the operation of the website). Legal basis: Sec. 24(5) PDPA
              (legitimate interest).
            </li>
            <li>
              <span className={strongClass}>
                Functional, analytics and marketing
              </span>{' '}
              (currently not in use &mdash; see 7.2). Once activated, only on
              the basis of your <span className={strongClass}>consent</span>{' '}
              (Sec. 19 PDPA), which you may withdraw at any time with effect
              for the future.
            </li>
          </ul>

          <h3 className={h3Class}>7.1 Strictly Necessary</h3>
          <ul className={ulClass}>
            <li>
              Session cookies used by the website framework for navigation
              state and form persistence during a single visit.
            </li>
            <li>
              Build-time font delivery: typography (Playfair Display and Inter)
              is loaded from Google Fonts{' '}
              <span className={strongClass}>at build time only</span> via
              Next.js&apos;{' '}
              <span className="font-mono text-[13px] bg-warm-off px-1.5 py-0.5 rounded">
                next/font
              </span>{' '}
              mechanism and served as self-hosted static assets. No runtime
              request is sent to Google servers when you view a page, and no
              cookies are set by Google as a result of loading fonts.
            </li>
          </ul>

          <h3 className={h3Class}>7.2 Analytics and Marketing</h3>
          <p className={pClass}>
            <span className={strongClass}>Currently: none.</span> No analytics,
            tracking pixels, or marketing technologies are deployed on this
            website at this time.
          </p>
          <p className={pClass}>
            If analytics tools, tracking pixels, embedded maps or video players
            are added in the future, this Privacy Policy will be updated
            accordingly and a cookie consent mechanism will be deployed in
            accordance with <span className={strongClass}>Sec. 19 PDPA</span>{' '}
            before any non-essential cookie is set.
          </p>

          <h3 className={h3Class}>7.3 Google Analytics 4</h3>
          <p className={pClass}>
            Provider: Google LLC / Google Asia Pacific. Purpose: reach and
            usage analysis. IP anonymization enabled.
          </p>

          <h3 className={h3Class}>7.4 Meta Pixel (Facebook / Instagram)</h3>
          <p className={pClass}>
            Provider: Meta Platforms, Inc. Purpose: reach measurement and
            retargeting.
          </p>

          <h3 className={h3Class}>7.5 Google Maps</h3>
          <p className={pClass}>
            Provider: Google LLC. Purpose: display of our location.
          </p>

          <h3 className={h3Class}>7.6 YouTube (embedded videos)</h3>
          <p className={pClass}>
            Provider: Google LLC. Enhanced privacy mode enabled where
            technically feasible.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 8. Newsletter */}
        <section id="newsletter" aria-labelledby="heading-8">
          <h2 id="heading-8" className={h2Class}>
            8. Newsletter
          </h2>
          <p className={pClass}>
            If you subscribe to our newsletter, we process your email address
            (and, if provided, your first name) in order to send you our
            marketing and content emails. The newsletter is sent using a{' '}
            <span className={strongClass}>double opt-in procedure</span>: after
            you submit the signup form, you will receive a confirmation email,
            and only after you confirm the subscription will we add you to the
            distribution list.
          </p>
          <p className={pClass}>
            <span className={strongClass}>Newsletter provider:</span> we use{' '}
            <span className={strongClass}>Mailchimp</span> (Intuit Mailchimp,
            operated by Intuit Inc., United States &mdash;{' '}
            <a
              href="https://mailchimp.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
              aria-label="Mailchimp website (opens in new window)"
            >
              https://mailchimp.com
            </a>
            ) as our email marketing platform. Your email address, first name,
            subscription status and basic engagement data (e.g. opens, clicks)
            are stored on Mailchimp&apos;s infrastructure.
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>Legal basis:</span> Sec. 19 PDPA
              (consent).
            </li>
            <li>
              <span className={strongClass}>Withdrawal:</span> you may
              unsubscribe at any time via the unsubscribe link in every
              newsletter or by contacting us at{' '}
              <a href="mailto:leo@salt-magic.com" className={linkClass}>
                leo@salt-magic.com
              </a>
              . Withdrawal takes effect for the future and does not affect the
              lawfulness of processing that took place before withdrawal.
            </li>
            <li>
              <span className={strongClass}>Retention:</span> until you
              unsubscribe or your subscription has been inactive for a
              prolonged period. After unsubscribe, your email address may be
              retained on a suppression list to ensure that you do not receive
              further newsletters.
            </li>
            <li>
              <span className={strongClass}>Cross-border transfer:</span>{' '}
              Mailchimp processes data on servers in the United States.
              Appropriate safeguards under Sec. 28 PDPA apply (see{' '}
              <a href="#cross-border" className={linkClass}>
                Section 10
              </a>
              ).
            </li>
          </ul>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 9. External Purchase Redirects */}
        <section id="external-redirects" aria-labelledby="heading-9">
          <h2 id="heading-9" className={h2Class}>
            9. External Purchase Redirects
          </h2>
          <p className={pClass}>
            Product purchases are fulfilled externally via{' '}
            <span className={strongClass}>Lazada</span> (www.lazada.co.th).
            When you click a &ldquo;Buy&rdquo; or &ldquo;Shop&rdquo; link on
            our website, you leave our domain and are bound by Lazada&apos;s
            own privacy policy and terms. We do{' '}
            <span className={strongClass}>not</span> receive or store your
            payment data, credit card details or shipping information for
            Lazada orders.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 10. Disclosure and Cross-Border */}
        <section id="cross-border" aria-labelledby="heading-10">
          <h2 id="heading-10" className={h2Class}>
            10. Disclosure to Third Parties and Cross-Border Transfers
          </h2>
          <p className={pClass}>
            We disclose personal data only where legally permitted or required
            &mdash; for example to:
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>
                IT and hosting providers
              </span>{' '}
              &mdash; <span className={strongClass}>Vercel Inc.</span> (United
              States; with Singapore and other global edge locations) provides
              the hosting infrastructure for our website
            </li>
            <li>
              <span className={strongClass}>
                Transactional email / contact-form delivery
              </span>{' '}
              &mdash; <span className={strongClass}>Resend, Inc.</span> (United
              States;{' '}
              <a
                href="https://resend.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Resend website (opens in new window)"
              >
                https://resend.com
              </a>
              ) delivers messages you submit via our contact and partner
              inquiry form to us
            </li>
            <li>
              <span className={strongClass}>Newsletter platform</span> &mdash;{' '}
              <span className={strongClass}>Intuit Mailchimp</span> (Intuit
              Inc., United States;{' '}
              <a
                href="https://mailchimp.com"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Mailchimp website (opens in new window)"
              >
                https://mailchimp.com
              </a>
              ) stores and distributes newsletter subscriber data
            </li>
            <li>
              <span className={strongClass}>
                External order fulfilment
              </span>{' '}
              &mdash; <span className={strongClass}>Lazada</span> (regional
              e-commerce platform; you are redirected to their platform to
              complete purchases)
            </li>
            <li>Authorities and courts, where legally required</li>
          </ul>
          <p className={pClass}>
            Additional providers will be listed here once they are integrated.
          </p>
          <p className={pClass}>
            Some of our service providers are located outside Thailand (e.g.
            in Singapore or the United States). For such cross-border
            transfers, we ensure appropriate safeguards in accordance with{' '}
            <span className={strongClass}>Sec. 28 PDPA</span> &mdash; through
            suitable contractual arrangements, recognized certifications of
            the recipient, or, where required, your consent.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 11. Retention Periods */}
        <section id="retention" aria-labelledby="heading-11">
          <h2 id="heading-11" className={h2Class}>
            11. Retention Periods
          </h2>
          <p className={pClass}>
            We retain personal data only for as long as necessary for the
            purposes described above or as required to comply with applicable
            statutory retention obligations (e.g. under the Thai{' '}
            <span className={strongClass}>Revenue Code</span> and other tax
            and accounting regulations &mdash; typically{' '}
            <span className={strongClass}>5 to 10 years</span>).
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 12. Rights under PDPA */}
        <section id="your-rights" aria-labelledby="heading-12">
          <h2 id="heading-12" className={h2Class}>
            12. Your Rights under PDPA
          </h2>
          <p className={pClass}>
            Subject to the applicable legal requirements, you have the
            following rights:
          </p>
          <ul className={ulClass}>
            <li>
              <span className={strongClass}>Right of access</span> to your
              personal data held by us (Sec. 30 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to data portability</span>{' '}
              (Sec. 31 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to object</span> to
              processing (Sec. 32 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to erasure</span> (Sec. 33
              PDPA)
            </li>
            <li>
              <span className={strongClass}>
                Right to restriction of processing
              </span>{' '}
              (Sec. 34 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to rectification</span> of
              inaccurate data (Sec. 35, 36 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to withdraw consent</span>{' '}
              with effect for the future (Sec. 19 PDPA)
            </li>
            <li>
              <span className={strongClass}>Right to lodge a complaint</span>{' '}
              with the Thai supervisory authority, the{' '}
              <span className={strongClass}>
                Personal Data Protection Committee (PDPC)
              </span>{' '}
              &mdash;{' '}
              <a
                href="https://www.pdpc.or.th"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
                aria-label="Thailand PDPC website (opens in new window)"
              >
                https://www.pdpc.or.th
              </a>
            </li>
          </ul>
          <p className={pClass}>
            To exercise your rights, please contact us at:{' '}
            <a href="mailto:leo@salt-magic.com" className={linkClass}>
              leo@salt-magic.com
            </a>
            . We respond to requests without undue delay, generally within{' '}
            <span className={strongClass}>30 days</span>.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 13. No Automated Decision-Making */}
        <section id="no-automated-decisions" aria-labelledby="heading-13">
          <h2 id="heading-13" className={h2Class}>
            13. No Automated Decision-Making
          </h2>
          <p className={pClass}>
            We do not engage in automated decision-making or profiling with
            legal effect.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 14. Data Security */}
        <section id="data-security" aria-labelledby="heading-14">
          <h2 id="heading-14" className={h2Class}>
            14. Data Security
          </h2>
          <p className={pClass}>
            We implement appropriate technical and organizational measures to
            protect your personal data against loss, misuse and unauthorized
            access. Data transmission via our website is encrypted using
            SSL/TLS.
          </p>
          <p className={pClass}>
            In the event of a reportable personal data breach, we will notify
            the PDPC in accordance with{' '}
            <span className={strongClass}>
              Sec. 37(4) PDPA within 72 hours
            </span>{' '}
            of becoming aware of the breach, where required.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 15. Changes */}
        <section id="changes" aria-labelledby="heading-15">
          <h2 id="heading-15" className={h2Class}>
            15. Changes to This Privacy Policy
          </h2>
          <p className={pClass}>
            We reserve the right to update this Privacy Policy to reflect
            legal or operational changes &mdash; in particular when new
            services (analytics, email marketing, contact-form backends,
            embedded maps or videos) are integrated into the website. The
            version published on our website at the time of your visit
            applies.
          </p>
        </section>

        <hr className="border-border-warm my-[clamp(40px,5vw,56px)]" />

        {/* 16. Contact */}
        <section id="contact" aria-labelledby="heading-16">
          <h2 id="heading-16" className={h2Class}>
            16. Contact
          </h2>
          <p className={pClass}>
            For any questions about data protection or to exercise your
            rights, please contact:
          </p>
          <div className="bg-warm-off rounded-2xl border border-border-warm px-[clamp(24px,4vw,40px)] py-[clamp(28px,4vw,40px)] mt-6">
            <div className="gold-line" />
            <p className="font-display text-[clamp(18px,2vw,20px)] font-normal text-mineral mb-4">
              SALT.MAGIC CO., LTD.
            </p>
            <p className={`${pClass} mb-0`}>
              45/57 Moo 3, Maret
              <br />
              Koh Samui, Suratthani 84310
              <br />
              Thailand
              <br />
              Email:{' '}
              <a href="mailto:info@salt-magic.com" className={linkClass}>
                info@salt-magic.com
              </a>
            </p>
          </div>
        </section>
      </article>
    </>
  )
}
