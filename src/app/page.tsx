import { Fragment } from "react";
import Hero from "./_components/hero";
import AboutSection from "./_components/about";
import PortfolioSection from "./_components/portfolio";
import ContactSection from "./_components/contact";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Oakley Dye Software & Design | Custom Software Development",
  description: "Transform your business with expert software development, modern web design, and strategic consulting. Get innovative solutions tailored to your needs.",
  keywords: [
    "homepage",
    "software development company",
    "web design agency",
    "custom solutions",
    "digital transformation",
  ],
  canonicalUrl: "https://oakleydye.com",
});

const Homepage: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </Fragment>
  );
};

export default Homepage;
