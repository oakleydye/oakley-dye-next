import PortfolioPage from "./components/portfolio-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Portfolio - Our Best Software Development Projects",
  description: "Explore our portfolio of successful web development, custom applications, and business solutions. See how we've helped businesses transform digitally.",
  keywords: [
    "portfolio",
    "web development projects",
    "custom applications",
    "client success stories",
    "software development examples",
    "case studies",
  ],
  canonicalUrl: "https://oakleydye.com/portfolio",
});

const Portfolio: React.FC = () => {
  return <PortfolioPage />;
};

export default Portfolio;
