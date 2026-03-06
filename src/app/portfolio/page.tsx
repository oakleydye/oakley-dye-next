import PortfolioPage from "./components/portfolio-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Portfolio — Client Projects by Oakley Dye",
  description: "Browse Oakley Dye's portfolio of live client projects: real estate websites, booking platforms, entertainment sites, and enterprise software solutions built with Next.js and React.",
  keywords: [
    "software development portfolio",
    "Next.js project examples",
    "freelance developer work",
    "web development case studies",
    "small business websites",
    "client project showcase",
  ],
  canonicalUrl: "https://oakleydye.com/portfolio",
});

const Portfolio: React.FC = () => {
  return <PortfolioPage />;
};

export default Portfolio;
