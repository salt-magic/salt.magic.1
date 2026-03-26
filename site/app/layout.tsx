import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: "Salt.Magic — Thailand's Natural Electrolyte Mineralizer",
  description:
    "Salt.Magic restores essential minerals to your water with 3 natural ingredients — 312mg magnesium, zero sugar, zero additives. Trusted daily by thousands across Thailand.",
  openGraph: {
    title: "Salt.Magic — Thailand's Natural Electrolyte Mineralizer",
    description:
      '3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving. The daily electrolyte Thailand trusts.',
    type: 'website',
    url: 'https://salt-magic.com',
    siteName: 'Salt.Magic',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Salt.Magic — Thailand's Natural Electrolyte Mineralizer",
    description:
      '3 natural minerals. Zero sugar. Zero additives. 312mg magnesium per serving.',
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
                "Thailand's premier all-natural daily electrolyte mineralizer. Three natural ingredients, zero sugar, zero additives.",
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
      </head>
      <body className="font-body text-ink bg-warm-white">
        <AnnouncementBar />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
