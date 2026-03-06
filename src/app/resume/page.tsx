import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";
import ResumePageComponent from "./components/resume-page";

export const metadata: Metadata = generateSEOMetadata({
  title: "Resume — Oakley Dye, Engineering Manager & Full-Stack Developer",
  description: "Oakley Dye's professional resume: 8+ years in software engineering, Engineering Manager at Conservice, founder of a software consultancy. Skilled in React, Next.js, .NET Core, PostgreSQL, and cloud platforms.",
  keywords: [
    "Oakley Dye resume",
    "full-stack developer resume",
    "engineering manager Utah",
    "software engineer experience",
    "React Next.js developer",
    ".NET developer resume",
  ],
  noIndex: false,
  canonicalUrl: "https://oakleydye.com/resume",
});

const ResumePage: React.FC = () => {
  return <ResumePageComponent />;
};

export default ResumePage;
