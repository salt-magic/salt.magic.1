import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyMobileCta from '@/components/StickyMobileCta'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Salt.Magic | Natural Electrolytes - Thailand',
  description:
    "Salt.Magic is Thailand's premium natural electrolyte mineralizer. Three ingredients: Trimagnesium Citrate, Potassium Citrate, and Himalayan Pink Salt. Zero sugar, unflavored, additive free. Buy electrolytes in Thailand.",
  openGraph: {
    title: 'Salt.Magic | Natural Electrolytes - Thailand',
    description:
      'Natural electrolytes with high-bioavailability magnesium, potassium, and pink Himalayan salt. Zero sugar, zero additives, zero fillers. Thailand\u2019s daily mineralizer.',
    type: 'website',
    url: 'https://salt-magic.com',
    siteName: 'Salt.Magic',
    locale: 'en_US',
    images: [
      {
        url: 'https://salt-magic.com/images/products/taylor-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Salt.Magic - Natural Electrolyte Mineralizer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Salt.Magic | Natural Electrolytes - Thailand',
    description:
      'Three ingredients. Zero compromise. Thailand\u2019s clean daily mineralizer.',
    images: ['https://salt-magic.com/images/products/taylor-hero.jpg'],
  },
  robots: 'index, follow',
  authors: [{ name: 'Salt.Magic' }],
  other: {
    'geo.region': 'TH',
    'geo.placename': 'Koh Samui, Thailand',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://salt-magic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Salt.Magic',
              url: 'https://salt-magic.com',
              logo: 'https://salt-magic.com/images/logo.png',
              description:
                "Thailand's premium all-natural daily electrolyte mineralizer. Three natural ingredients, zero sugar, zero additives.",
              foundingDate: '2021',
              foundingLocation: {
                '@type': 'Place',
                name: 'Koh Samui, Thailand',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@salt-magic.com',
                telephone: '+66826020486',
                contactType: 'customer service',
                availableLanguage: ['English', 'Thai'],
              },
              sameAs: [
                'https://www.instagram.com/saltmagic.electrolytes',
              ],
              areaServed: { '@type': 'Country', name: 'Thailand' },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Salt.Magic Signature Glass Jar',
                description:
                  'Signature Glass Jar \u2014 natural electrolyte mineralizer with Trimagnesium Citrate, Potassium Citrate, and Himalayan Pink Salt. Sugar free, flavorless, GMP/HACCP-certified manufacturing. Crafted on Koh Samui.',
                brand: { '@type': 'Brand', name: 'Salt.Magic' },
                offers: {
                  '@type': 'Offer',
                  price: '490',
                  priceCurrency: 'THB',
                  availability: 'https://schema.org/InStock',
                  url: 'https://www.lazada.co.th/shop/salt-magic/',
                },
                image: 'https://salt-magic.com/images/products/taylor-closeup.jpg',
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Salt.Magic Travel Sachet',
                description:
                  'Portable resealable pouch with 20 servings of natural electrolyte mineralizer. Three ingredients: Trimagnesium Citrate, Potassium Citrate, and Himalayan Pink Salt. Zero sugar, GMP/HACCP certified.',
                brand: { '@type': 'Brand', name: 'Salt.Magic' },
                offers: {
                  '@type': 'Offer',
                  price: '290',
                  priceCurrency: 'THB',
                  availability: 'https://schema.org/InStock',
                  url: 'https://www.lazada.co.th/shop/salt-magic/',
                },
                image: 'https://salt-magic.com/images/products/sachet.jpg',
              },
            ]),
          }}
        />
      </head>
      <body className="font-body text-ink bg-warm-white">
        {/* Issue #8: Skip-to-content link for keyboard users */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-mineral focus:text-white focus:rounded-pill focus:text-sm focus:font-medium"
        >
          Skip to main content
        </a>
        <AnnouncementBar />
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  )
}
