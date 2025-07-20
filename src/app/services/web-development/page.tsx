import WebDevelopmentPage from "./components/web-development-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Web Development Services - Custom Websites & Applications",
  description: "Professional web development services using modern technologies. Custom websites, responsive design, e-commerce solutions, and web applications.",
  keywords: [
    "web development",
    "custom websites",
    "responsive design",
    "React development",
    "Next.js development",
    "e-commerce development",
    "web applications",
  ],
  canonicalUrl: "https://oakleydye.com/services/web-development",
});

const WebDevelopment: React.FC = () => {
  return <WebDevelopmentPage />;
};

export default WebDevelopment;
