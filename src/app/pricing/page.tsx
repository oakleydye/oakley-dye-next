import { PricingPage } from "./components/pricing-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Pricing — Transparent Software Development Rates",
  description: "Clear, honest pricing for web development, custom applications, and consulting services. No hidden fees.",
  canonicalUrl: "https://oakleydye.com/pricing",
});

export default function Pricing() {
  return (
    <main className="min-h-screen pt-28 section-padding">
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
