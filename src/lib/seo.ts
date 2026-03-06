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
  const baseDescription =
    'Oakley Dye is a full-stack software engineer and consultant based in Hyrum, UT. He builds custom web apps, software systems, and digital solutions for businesses across the US using React, Next.js, .NET, and more.'

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
      'full-stack developer',
      'Next.js developer',
      'React developer',
      'Utah software engineer',
      ...keywords,
    ],
    authors: [{ name: 'Oakley Dye', url: 'https://oakleydye.com' }],
    creator: 'Oakley Dye',
    publisher: 'Oakley Dye Software & Design',
    robots: noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1',
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
      title: fullTitle,
      description: metaDescription,
      images: [ogImage],
      creator: '@oakleydye',
      site: '@oakleydye',
    },
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION_CODE,
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
  'full-stack development',
  'Next.js',
  'React',
  '.NET Core',
  'Utah software engineer',
  'freelance developer',
]

export const businessStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Oakley Dye Software & Design',
  url: 'https://oakleydye.com',
  logo: 'https://oakleydye.com/logo.webp',
  image: 'https://oakleydye.com/images/hero.webp',
  description:
    'Custom software development, web design, and business consulting services for small and medium-sized businesses across the United States.',
  founder: {
    '@type': 'Person',
    name: 'Oakley Dye',
    jobTitle: 'Full-Stack Software Engineer & Business Consultant',
    url: 'https://oakleydye.com',
    sameAs: [
      'https://github.com/oakleydye',
      'https://linkedin.com/in/oakley-dye',
    ],
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyrum',
    addressRegion: 'UT',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '41.6305',
    longitude: '-111.8497',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+14355571427',
    contactType: 'customer service',
    email: 'hello@oakleydye.com',
    availableLanguage: 'English',
    areaServed: 'US',
  },
  sameAs: [
    'https://github.com/oakleydye',
    'https://linkedin.com/in/oakley-dye',
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'United States',
  },
  priceRange: '$$$',
  knowsAbout: [
    'Web Development',
    'React',
    'Next.js',
    'TypeScript',
    '.NET Core',
    'PostgreSQL',
    'AWS',
    'Azure',
    'SEO',
    'Software Architecture',
    'Business Consulting',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Software Development & Consulting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description:
            'Custom website and web application development using Next.js, React, and TypeScript. Mobile-responsive, SEO-optimized, and fast-loading.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Applications',
          description:
            'Bespoke software solutions for unique business workflows, including desktop apps, mobile apps, and full-stack web applications.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Business Consulting',
          description:
            'Strategic technology consulting for small and medium businesses: digital strategy, process automation, tech stack planning, and growth consulting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Marketing',
          description:
            'Technical SEO audits, content strategy, local SEO, analytics setup, and performance optimization to grow organic traffic.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'System Architecture',
          description:
            'Scalable, secure infrastructure design including microservices, CI/CD pipelines, cloud migration, and security reviews.',
        },
      },
    ],
  },
}

export const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oakley Dye',
  jobTitle: 'Full-Stack Software Engineer & Business Consultant',
  description:
    'Full-stack software engineer with 8+ years of experience building scalable web applications. Founder of Oakley Dye Software & Design. Engineering Manager at Conservice. Specializes in React, Next.js, .NET Core, and cloud architecture.',
  url: 'https://oakleydye.com',
  image: 'https://oakleydye.com/images/hero.webp',
  email: 'hello@oakleydye.com',
  telephone: '+14355571427',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Hyrum',
    addressRegion: 'UT',
    addressCountry: 'US',
  },
  sameAs: [
    'https://github.com/oakleydye',
    'https://linkedin.com/in/oakley-dye',
  ],
  knowsAbout: [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    '.NET Core',
    'PostgreSQL',
    'AWS',
    'Azure',
    'Docker',
    'Software Architecture',
    'SEO',
    'Web Design',
    'Business Consulting',
  ],
  worksFor: {
    '@type': 'Organization',
    name: 'Conservice',
    url: 'https://conservice.com',
  },
  founder: {
    '@type': 'Organization',
    name: 'Oakley Dye Software & Design',
    url: 'https://oakleydye.com',
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Western Governors University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Utah State University',
    },
  ],
}

export function generateArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  tags = [],
}: {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: 'Oakley Dye',
      url: 'https://oakleydye.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Oakley Dye Software & Design',
      url: 'https://oakleydye.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://oakleydye.com/logo.webp',
      },
    },
    image: 'https://oakleydye.com/og-image.jpg',
    keywords: tags.join(', '),
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'Blog',
      name: 'Oakley Dye Blog',
      url: 'https://oakleydye.com/blog',
    },
  }
}

export function generateFAQStructuredData(
  items: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
