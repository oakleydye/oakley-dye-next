import CustomApplicationsPage from "./components/custom-applications-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Custom Application Development - Bespoke Software Solutions",
  description: "Expert custom application development services. Build scalable, secure, and efficient software solutions tailored to your business needs.",
  keywords: [
    "custom applications",
    "bespoke software",
    "software development",
    "business applications",
    "enterprise solutions",
    "scalable software",
  ],
  canonicalUrl: "https://oakleydye.com/services/custom-applications",
});

const CustomApplications: React.FC = () => {
  return <CustomApplicationsPage />;
};

export default CustomApplications;
