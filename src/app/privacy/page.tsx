import { generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { Shield, Eye, Lock, Mail, Calendar, FileText } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Privacy Policy - Data Protection & Privacy Practices",
  description: "Learn about our privacy practices, data collection, and how we protect your personal information at Oakley Dye Software & Design.",
  noIndex: false,
  canonicalUrl: "https://oakleydye.com/privacy",
});

const PrivacyPolicy: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const privacySections = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Information We Collect",
      content: [
        "Personal information you provide when contacting us (name, email, phone number)",
        "Information submitted through our contact forms and project inquiries",
        "Technical information like IP address, browser type, and usage patterns",
        "Cookies and similar technologies for website functionality and analytics"
      ]
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "How We Use Your Information",
      content: [
        "Respond to your inquiries and provide customer support",
        "Deliver and improve our software development and design services",
        "Send project updates and service-related communications",
        "Analyze website usage to improve user experience",
        "Comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Information Sharing and Disclosure",
      content: [
        "We never sell or rent your personal information to third parties",
        "Information may be shared with trusted service providers (hosting, analytics)",
        "Data may be disclosed if required by law or to protect our rights",
        "Business transfers: information may be transferred in mergers or acquisitions",
        "All third-party services are bound by strict confidentiality agreements"
      ]
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Data Security and Storage",
      content: [
        "Industry-standard encryption and security measures protect your data",
        "Secure servers with regular security updates and monitoring",
        "Limited access to personal information on a need-to-know basis",
        "Regular security audits and vulnerability assessments",
        "Data retention policies to minimize unnecessary data storage"
      ]
    }
  ];

  const userRights = [
    "Access: Request a copy of your personal information",
    "Correction: Request corrections to inaccurate information", 
    "Deletion: Request deletion of your personal information",
    "Portability: Request your data in a portable format",
    "Opt-out: Unsubscribe from marketing communications"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Shield className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Quick Overview */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Privacy at a Glance</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">We Don't Sell Data</h3>
                <p className="text-sm text-muted-foreground">Your information is never sold or shared for profit</p>
              </div>
              <div>
                <Lock className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Secure Storage</h3>
                <p className="text-sm text-muted-foreground">Industry-standard encryption protects your data</p>
              </div>
              <div>
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Full Transparency</h3>
                <p className="text-sm text-muted-foreground">Clear policies about what we collect and why</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="space-y-8 mb-12">
          {privacySections.map((section, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <div className="p-2 bg-primary/10 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Your Rights */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <div className="p-2 bg-primary/10 rounded-lg mr-4">
                <FileText className="w-6 h-6" />
              </div>
              Your Privacy Rights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Under applicable privacy laws, you have the following rights regarding your personal information:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {userRights.map((right, index) => (
                <div key={index} className="flex items-start p-4 bg-background/50 rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">{right}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Cookies and Tracking</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your experience on our website:
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Essential Cookies</h4>
                <p className="text-sm text-muted-foreground">Required for basic website functionality and security</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Analytics Cookies</h4>
                <p className="text-sm text-muted-foreground">Help us understand how visitors use our website to improve performance</p>
              </div>
              <div className="p-4 bg-background/50 rounded-lg">
                <h4 className="font-semibold mb-2">Preference Cookies</h4>
                <p className="text-sm text-muted-foreground">Remember your settings and preferences for future visits</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy or how we handle your data, 
              we're here to help. Contact us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:privacy@oakleydye.com">
                  Email Privacy Team
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
