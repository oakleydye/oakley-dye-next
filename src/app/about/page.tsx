import AboutPage from "./components/about-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "About Oakley Dye — Full-Stack Developer & Consultant",
  description: "Full-stack software engineer with 8+ years of experience, based in Hyrum, UT. Founder of Oakley Dye Software & Design and Engineering Manager at Conservice.",
  keywords: [
    "Oakley Dye",
    "full-stack developer Utah",
    "software engineer Hyrum UT",
    "freelance developer biography",
    "engineering manager",
    "web developer background",
  ],
  canonicalUrl: "https://www.oakleydye.com/about",
});

const About: React.FC = () => {
  return <AboutPage />;
};

export default About;
