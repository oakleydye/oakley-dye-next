import { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  structuredData?: object
  noIndex?: boolean
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/og-image.jpg',
  structuredData,
  noIndex = false,
}: SEOProps = {}): Metadata {
  const baseTitle = 'Oakley Dye Software & Design'
  const baseDescription = 'Custom software development, web design, and business consulting services. Transform your ideas into digital reality with innovative solutions.'
  
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle
  const metaDescription = description || baseDescription
  const baseUrl = 'https://oakleydye.com'
  
  const metadata: Metadata = {
    title: fullTitle,
    description: metaDescription,
    keywords: [
      'software development',
      'web design',
      'custom applications',
      'business consulting',
      'SEO marketing',
      'system architecture',
      ...keywords
    ],
    authors: [{ name: 'Oakley Dye' }],
    creator: 'Oakley Dye',
    publisher: 'Oakley Dye Software & Design',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow',
    alternates: {
      canonical: canonicalUrl || baseUrl,
    },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl || baseUrl,
      title: fullTitle,
      description: metaDescription,
      siteName: baseTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@oakleydye',
      creator: '@oakleydye',
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
    },
    viewport: 'width=device-width, initial-scale=1',
    themeColor: '#C73E1D',
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
    },
  }

  return metadata
}

export const defaultKeywords = [
  'software development',
  'web design',
  'custom applications',
  'business consulting',
  'SEO marketing',
  'system architecture',
  'digital transformation',
  'technology solutions',
  'responsive design',
  'user experience',
  'remote development',
  'small business solutions',
]

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oakley Dye Software & Design',
  url: 'https://oakleydye.com',
  logo: 'https://oakleydye.com/logo.webp',
  description: 'Custom software development, web design, and business consulting services',
  founder: {
    '@type': 'Person',
    name: 'Oakley Dye',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Remote',
    addressCountry: 'US',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14355571427',
    contactType: 'customer service',
    email: 'hello@oakleydye.com',
  },
  sameAs: [
    'https://github.com/oakleydye',
    'https://linkedin.com/in/oakleydye',
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom website development with modern technologies',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Applications',
          description: 'Bespoke software solutions for business needs',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Consulting',
          description: 'Strategic technology consulting for businesses',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Marketing',
          description: 'Digital marketing and search engine optimization',
        },
      },
    ],
  },
}
