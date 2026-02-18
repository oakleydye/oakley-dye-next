import { TestimonialsPage } from "./components/testimonials-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Client Testimonials & Case Studies",
  description: "Real feedback from real clients. See how Oakley Dye has helped businesses transform their digital presence.",
  canonicalUrl: "https://oakleydye.com/testimonials",
});

export default function Testimonials() {
  return (
    <main className="min-h-screen pt-28 section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>testimonials.ts
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Client <span className="gradient-text-red">Stories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t take my word for it — hear from the people I&apos;ve worked with.
          </p>
        </div>

        <TestimonialsPage />
      </div>
    </main>
  );
}
