import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import ResumePageComponent from "./components/resume-page";

export const metadata: Metadata = generateSEOMetadata({
  title: "Oakley Dye - Interactive Resume & Professional Experience",
  description: "Explore Oakley Dye's professional journey, technical skills, and experience in software development, web design, and business consulting.",
  noIndex: false,
  canonicalUrl: "https://oakleydye.com/resume",
});

const ResumePage: React.FC = () => {
  return <ResumePageComponent />;
};

export default ResumePage;
