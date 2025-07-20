import BusinessConsultingPage from "./components/business-consulting-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Business Consulting - Technology Strategy & Digital Transformation",
  description: "Strategic business consulting services focused on technology solutions, digital transformation, and operational efficiency improvements.",
  keywords: [
    "business consulting",
    "technology consulting",
    "digital transformation",
    "business strategy",
    "process optimization",
    "technology solutions",
  ],
  canonicalUrl: "https://oakleydye.com/services/business-consulting",
});

const BusinessConsulting: React.FC = () => {
  return <BusinessConsultingPage />;
};

export default BusinessConsulting;
