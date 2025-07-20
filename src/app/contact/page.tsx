import ContactPage from "./components/contact-page";
import { generateSEOMetadata } from "@/lib/seo";
import { Metadata } from "next";

export const metadata: Metadata = generateSEOMetadata({
  title: "Contact Us - Get Your Software Project Started",
  description: "Ready to transform your business? Contact Oakley Dye Software & Design for expert software development, web design, and consulting services.",
  keywords: [
    "contact",
    "get quote",
    "software development consultation",
    "project inquiry",
    "business contact",
  ],
  canonicalUrl: "https://oakleydye.com/contact",
});

const Contact: React.FC = () => {
  return <ContactPage />;
};

export default Contact;
