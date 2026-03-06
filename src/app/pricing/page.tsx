import { PricingPage } from "./components/pricing-page";
import { generateSEOMetadata, generateFAQStructuredData } from "@/lib/seo";
import { faqItems } from "@/lib/pricing_data";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Pricing — Web Development & Consulting Rates",
  description: "Transparent pricing for custom software development. Starter websites from $1,500. Professional projects from $4,500. Enterprise custom quotes. No hidden fees.",
  keywords: [
    "web development pricing",
    "software development cost",
    "freelance developer rates",
    "website design cost",
    "how much does a website cost",
    "software project estimate",
  ],
  canonicalUrl: "https://oakleydye.com/pricing",
});

export default function Pricing() {
  const faqSchema = generateFAQStructuredData(faqItems);

  return (
    <main className="min-h-screen pt-28 section-padding">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>pricing.ts
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Transparent <span className="gradient-text-red">Pricing</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No hidden fees, no surprises. Choose the engagement model that fits your project.
          </p>
        </div>

        <PricingPage />
      </div>
    </main>
  );
}
