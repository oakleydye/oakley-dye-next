import SEOMarketingPage from "./components/seo-marketing-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "SEO & Digital Marketing Services - Increase Online Visibility",
  description: "Professional SEO and digital marketing services to boost your online presence, drive traffic, and increase conversions for your business.",
  keywords: [
    "SEO services",
    "digital marketing",
    "search engine optimization",
    "online marketing",
    "content marketing",
    "local SEO",
    "keyword optimization",
  ],
  canonicalUrl: "https://oakleydye.com/services/seo-marketing",
});

const SEOMarketing: React.FC = () => {
  return <SEOMarketingPage />;
};

export default SEOMarketing;
