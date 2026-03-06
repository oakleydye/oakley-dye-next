import { Fragment } from "react";
import Hero from "./_components/hero";
import ServicesSection from "./_components/services_section";
import AboutSection from "./_components/about";
import PortfolioSection from "./_components/portfolio";
import TestimonialsPreview from "./_components/testimonials_preview";
import ContactSection from "./_components/contact";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Custom Software Development, Web Design & Consulting",
  description: "Oakley Dye builds custom software, modern websites, and scalable systems for businesses across the US. Based in Hyrum, UT — available remotely. React, Next.js, .NET, and more.",
  keywords: [
    "freelance software developer",
    "custom web development",
    "web design agency",
    "software consultant",
    "Utah software engineer",
    "remote developer for hire",
    "small business web developer",
  ],
  canonicalUrl: "https://oakleydye.com",
});

const Homepage: React.FC = () => {
  return (
    <Fragment>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      {/* <TestimonialsPreview /> */}
      <ContactSection />
    </Fragment>
  );
};

export default Homepage;
