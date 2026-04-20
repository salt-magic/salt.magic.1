import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import AnnouncementBar from '@/components/AnnouncementBar'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import StickyMobileCta from '@/components/StickyMobileCta'
import { faqs } from '@/content/faqs'

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
  title: 'Salt.Magic | Natural Electrolyte Mineralizer - Thailand',
  description:
    "Salt.Magic is Thailand's natural electrolyte mineralizer. 3g serving: 135mg Trimagnesium Citrate, 532mg Potassium, Himalayan pink salt. Zero sugar, unflavored, additive free.",
  openGraph: {
    title: 'Salt.Magic | Natural Electrolyte Mineralizer - Thailand',
    description:
      'Natural electrolytes with 135mg Trimagnesium Citrate, 532mg Potassium, and pink Himalayan salt. Three ingredients. Zero sugar. Thailand\u2019s daily hydration ritual.',
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
    title: 'Salt.Magic | Natural Electrolyte Mineralizer - Thailand',
    description:
      'Natural electrolyte mineralizer \u2014 135mg Trimagnesium Citrate, 532mg Potassium, zero sugar, unflavored. Thailand\u2019s clean hydration ritual.',
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
                "Thailand's premium natural electrolyte mineralizer and daily mineral complex. Three natural ingredients, zero sugar, zero additives, cardiovascularly responsible sodium. The best electrolytes in Thailand for daily wellness.",
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
                  'Signature Glass Jar \u2014 natural electrolyte mineralizer with Himalayan Pink Salt. A magnesium-potassium mineral complex with 135mg Trimagnesium Citrate Anhydrous, 532mg Potassium Citrate, sugar free, flavorless. GMP/HACCP-certified. Crafted on Koh Samui.',
                category: 'Health & Wellness / Supplements / Electrolytes',
                brand: { '@type': 'Brand', name: 'Salt.Magic' },
                offers: {
                  '@type': 'Offer',
                  price: '490',
                  priceCurrency: 'THB',
                  availability: 'https://schema.org/InStock',
                  url: 'https://www.lazada.co.th/products/saltmagic-natural-electrolytes-jar-140g-i5485961672-s23279174700.html',
                },
                image: 'https://salt-magic.com/images/products/glass-jar-final.webp',
                nutrition: {
                  '@type': 'NutritionInformation',
                  servingSize: '3g',
                  calories: '0 kcal',
                  sugarContent: '0 g',
                  sodiumContent: '189 mg',
                  fatContent: '0 g',
                  carbohydrateContent: '0 g',
                  proteinContent: '0 g',
                },
                additionalProperty: [
                  { '@type': 'PropertyValue', name: 'Trimagnesium Citrate Anhydrous', value: '135mg per 3g serving (32% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Potassium Citrate', value: '532mg per 3g serving (15% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Pink Himalayan Salt (sodium)', value: '189mg per 3g serving (8% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Certification', value: 'GMP and HACCP certified manufacturing' },
                  { '@type': 'PropertyValue', name: 'Origin', value: 'Koh Samui, Thailand' },
                  { '@type': 'PropertyValue', name: 'Dietary attributes', value: 'Sugar free, flavorless, fasting safe, keto friendly, no maltodextrin, no artificial flavors' },
                ],
                audience: {
                  '@type': 'PeopleAudience',
                  audienceType: 'adults, families, fasting practitioners, keto diet, wellness consumers, athletes, travelers',
                  suggestedMinAge: 3,
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'Product',
                name: 'Salt.Magic Travel Sachet',
                description:
                  'Travel Sachet \u2014 20 servings of portable electrolyte mineralizer for travel. A sugar-free hydration mix with 135mg Trimagnesium Citrate, 532mg Potassium, and pink Himalayan salt. GMP/HACCP certified. Ideal hydration for flying and on-the-go wellness.',
                category: 'Health & Wellness / Supplements / Electrolytes',
                brand: { '@type': 'Brand', name: 'Salt.Magic' },
                offers: {
                  '@type': 'Offer',
                  price: '290',
                  priceCurrency: 'THB',
                  availability: 'https://schema.org/InStock',
                  url: 'https://www.lazada.co.th/products/saltmagic-natural-electrolytes-sachet-60g-i5486254021-s23279401671.html',
                },
                image: 'https://salt-magic.com/images/products/sachet-studio-front.webp',
                nutrition: {
                  '@type': 'NutritionInformation',
                  servingSize: '3g',
                  calories: '0 kcal',
                  sugarContent: '0 g',
                  sodiumContent: '189 mg',
                  fatContent: '0 g',
                  carbohydrateContent: '0 g',
                  proteinContent: '0 g',
                },
                additionalProperty: [
                  { '@type': 'PropertyValue', name: 'Servings per container', value: '20 servings (60g)' },
                  { '@type': 'PropertyValue', name: 'Trimagnesium Citrate Anhydrous', value: '135mg per 3g serving (32% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Potassium Citrate', value: '532mg per 3g serving (15% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Pink Himalayan Salt (sodium)', value: '189mg per 3g serving (8% Daily Value)' },
                  { '@type': 'PropertyValue', name: 'Certification', value: 'GMP and HACCP certified manufacturing' },
                  { '@type': 'PropertyValue', name: 'Origin', value: 'Koh Samui, Thailand' },
                  { '@type': 'PropertyValue', name: 'Dietary attributes', value: 'Sugar free, flavorless, fasting safe, keto friendly, no maltodextrin, no artificial flavors' },
                ],
                audience: {
                  '@type': 'PeopleAudience',
                  audienceType: 'adults, families, fasting practitioners, keto diet, wellness consumers, travelers, expats',
                  suggestedMinAge: 3,
                },
              },
            ]),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            }),
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
