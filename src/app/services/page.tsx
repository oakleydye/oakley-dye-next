import ServicesPage from "./components/services-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Services — Web Development, Custom Apps & Consulting",
  description: "Hire Oakley Dye for web development, custom software, SEO, system architecture, and business consulting. Serving small and medium businesses remotely across the US.",
  keywords: [
    "hire a web developer",
    "custom software development services",
    "web development for small business",
    "software consultant for hire",
    "technical SEO service",
    "cloud architecture consulting",
    "Next.js development service",
  ],
  canonicalUrl: "https://oakleydye.com/services",
});

const Services: React.FC = () => {
  return <ServicesPage />;
};

export default Services;
