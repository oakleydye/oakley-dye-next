import AboutPage from "./components/about-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Us - Expert Software Development",
  description: "Learn about Oakley Dye Software & Design - a passionate team dedicated to innovative software development, web design, and business solutions.",
  keywords: [
    "about us",
    "software development team",
    "company story",
    "expertise",
    "web design philosophy",
  ],
  canonicalUrl: "https://oakleydye.com/about",
});

const About: React.FC = () => {
  return <AboutPage />;
};

export default About;
