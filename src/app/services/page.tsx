import ServicesPage from "./components/services-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Services - Web Development, Design & Consulting",
  description: "Comprehensive software development services including web development, custom applications, business consulting, and SEO marketing solutions.",
  keywords: [
    "services",
    "web development services",
    "custom application development",
    "business consulting services",
    "SEO marketing",
    "software consulting",
  ],
  canonicalUrl: "https://oakleydye.com/services",
});

const Services: React.FC = () => {
  return <ServicesPage />;
};

export default Services;
