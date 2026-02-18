export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  projectPrice: number | null;
  monthlyPrice: number | null;
  consultPrice: number | null;
  featured: boolean;
  features: string[];
  notIncluded: string[];
  cta: string;
  badge?: string;
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for small businesses getting online.",
    projectPrice: 1500,
    monthlyPrice: 500,
    consultPrice: 500,
    featured: false,
    features: [
      "Up to 5-page website",
      "Mobile-responsive design",
      "Contact form integration",
      "Basic SEO setup",
      "30-day post-launch support",
      "1 revision round",
    ],
    notIncluded: [
      "Custom CMS or admin panel",
      "E-commerce functionality",
      "Third-party API integrations",
    ],
    cta: "Get Started",
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "For growing businesses that need more power.",
    projectPrice: 4500,
    monthlyPrice: 1200,
    consultPrice: null,
    featured: true,
    badge: "Most Popular",
    features: [
      "Unlimited pages",
      "Custom CMS integration",
      "Advanced SEO & analytics",
      "Third-party API integrations",
      "E-commerce ready",
      "90-day post-launch support",
      "Unlimited revision rounds",
      "Performance optimization",
      "Custom admin dashboard",
    ],
    notIncluded: [
      "Dedicated DevOps support",
      "24/7 on-call SLA",
    ],
    cta: "Start Project",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Custom solutions for complex requirements.",
    projectPrice: null,
    monthlyPrice: null,
    consultPrice: null,
    featured: false,
    features: [
      "Everything in Professional",
      "Dedicated project manager",
      "Custom infrastructure & DevOps",
      "Microservices architecture",
      "SLA with uptime guarantees",
      "Priority 24/7 support",
      "Security audits",
      "Team training & documentation",
      "Ongoing retainer options",
    ],
    notIncluded: [],
    cta: "Let's Talk",
  },
];

export const faqItems = [
  {
    question: "How long does a typical project take?",
    answer:
      "Starter projects typically take 2–4 weeks. Professional projects range from 4–12 weeks depending on complexity. Enterprise timelines are scoped during discovery.",
  },
  {
    question: "Do you require a deposit?",
    answer:
      "Yes — 50% upfront to secure your spot, with the remainder due on project completion. Enterprise projects use milestone-based billing.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "Primarily Next.js, React, TypeScript, .NET Core, PostgreSQL, and AWS/Vercel. I'll always recommend the right tool for your specific needs.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. Projects can be extended with additional features at any time. I offer ongoing retainer options for continued development.",
  },
  {
    question: "Do you offer maintenance after launch?",
    answer:
      "Yes — every project includes a post-launch support period. Extended maintenance plans are available for ongoing updates and security patches.",
  },
];
