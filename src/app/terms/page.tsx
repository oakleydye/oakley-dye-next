import { generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { FileText, Scale, Shield, AlertCircle, Calendar, Mail, CheckCircle } from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Terms of Service - Service Agreement & Terms",
  description: "Read our terms of service and service agreement for Oakley Dye Software & Design services and website usage.",
  noIndex: false,
  canonicalUrl: "https://oakleydye.com/terms",
});

const TermsOfService: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const termsSections = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing our website or using our services, you agree to these terms",
        "These terms apply to all visitors, users, and customers",
        "If you disagree with any part of these terms, please discontinue use",
        "We may update these terms periodically with notice to users"
      ]
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Services Offered",
      content: [
        "Custom software development and web applications",
        "Web design and user interface/experience design",
        "Graphic design and branding services",
        "Business consulting and digital strategy",
        "SEO optimization and digital marketing services"
      ]
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Client Responsibilities",
      content: [
        "Provide accurate project requirements and feedback",
        "Supply necessary content, assets, and access in a timely manner",
        "Make payments according to agreed schedules",
        "Respect intellectual property rights and confidentiality",
        "Use our services in compliance with applicable laws"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Intellectual Property",
      content: [
        "Client retains ownership of their original content and data",
        "We retain rights to our development processes and methodologies",
        "Custom work becomes client property upon full payment",
        "We may showcase completed projects in our portfolio (with permission)",
        "Third-party licenses and tools remain property of their owners"
      ]
    }
  ];

  const projectTerms = [
    {
      title: "Project Scope",
      description: "All projects begin with a detailed scope document outlining deliverables, timelines, and costs."
    },
    {
      title: "Revisions",
      description: "We include reasonable revisions in our quotes. Additional changes may incur extra charges."
    },
    {
      title: "Timeline",
      description: "Project timelines depend on client feedback and content provision. Delays may affect delivery dates."
    },
    {
      title: "Payment Terms",
      description: "Projects typically require a deposit upfront, with remaining balance due upon completion."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            These terms govern your use of our services and establish a clear working relationship.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Quick Summary */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Terms Summary</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Fair & Transparent</h3>
                <p className="text-sm text-muted-foreground">Clear terms with no hidden clauses or unfair conditions</p>
              </div>
              <div>
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Rights Protected</h3>
                <p className="text-sm text-muted-foreground">Both client and service provider rights are protected</p>
              </div>
              <div>
                <Scale className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Legal Compliance</h3>
                <p className="text-sm text-muted-foreground">All terms comply with applicable business laws</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Terms Sections */}
        <div className="space-y-8 mb-12">
          {termsSections.map((section, index) => (
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

        {/* Project Terms */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Project Terms & Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {projectTerms.map((term, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg">
                  <h4 className="font-semibold mb-2 text-primary">{term.title}</h4>
                  <p className="text-sm text-muted-foreground">{term.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center text-primary">
              <AlertCircle className="w-6 h-6 mr-3" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Our liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Indirect, incidental, or consequential damages
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Loss of profits, data, or business opportunities
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Third-party services or integrations beyond our control
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Issues arising from client-provided content or requirements
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">By Client</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    May terminate with written notice
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Payment due for completed work
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Work-in-progress may be delivered
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">By Service Provider</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    May terminate for breach of terms
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Non-payment or violation of agreement
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Reasonable notice will be provided
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card>
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Questions About These Terms?</h3>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service or need clarification 
              on any points, don't hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:legal@oakleydye.com">
                  Email Legal Team
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;
