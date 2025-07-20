"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Monitor, 
  Database, 
  Zap,
  Shield,
  Cog,
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const CustomApplicationsPage: React.FC = () => {
  const isMobile = useIsMobile();

  const applicationTypes = [
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Desktop Applications",
      description: "Native desktop software for Windows, macOS, and Linux platforms.",
      examples: ["Business Management Tools", "Data Analysis Software", "Creative Tools"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Applications",
      description: "iOS and Android apps built with React Native and Flutter.",
      examples: ["Customer Portals", "Field Service Apps", "E-commerce Apps"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Web Applications",
      description: "Complex web-based software solutions accessible from any browser.",
      examples: ["SaaS Platforms", "Internal Dashboards", "Workflow Systems"]
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless system integration.",
      examples: ["Third-party Integrations", "Microservices", "Data Synchronization"]
    }
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "Manufacturing",
    "Education",
    "Real Estate",
    "Professional Services",
    "Non-profit Organizations",
    "Retail & E-commerce"
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Increased Efficiency",
      description: "Automate manual processes and streamline workflows to save time and reduce errors."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Enhanced Security",
      description: "Built-in security measures to protect your sensitive business data and customer information."
    },
    {
      icon: <Cog className="w-8 h-8 text-primary" />,
      title: "Scalable Solutions",
      description: "Applications that grow with your business, handling increased load and new requirements."
    }
  ];

  const developmentSteps = [
    "Requirements Analysis & Planning",
    "System Architecture Design",
    "User Interface & Experience Design",
    "Development & Implementation",
    "Testing & Quality Assurance",
    "Deployment & Training",
    "Ongoing Support & Maintenance"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Smartphone className="w-20 h-20 text-primary" />
            </div>
            <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
              Custom Applications
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bespoke software solutions designed specifically for your business needs, 
              workflows, and objectives. From desktop apps to mobile solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Application Types */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Types of Applications We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applicationTypes.map((app, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    {app.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                      <p className="text-muted-foreground mb-4">{app.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {app.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Benefits of Custom Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-4">
                {developmentSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Frontend</h3>
                <ul className="space-y-2">
                  <li>React & Next.js</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Electron</li>
                  <li>TypeScript</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Backend</h3>
                <ul className="space-y-2">
                  <li>Node.js & Express</li>
                  <li>Python & Django</li>
                  <li>.NET Core</li>
                  <li>Java Spring</li>
                  <li>GraphQL & REST APIs</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-center">Database & Cloud</h3>
                <ul className="space-y-2">
                  <li>PostgreSQL & MySQL</li>
                  <li>MongoDB</li>
                  <li>AWS & Azure</li>
                  <li>Docker & Kubernetes</li>
                  <li>Redis & Elasticsearch</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Investment */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Investment Range</h2>
          <Card>
            <CardContent className="p-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Simple Apps</h3>
                  <p className="text-3xl font-bold text-primary mb-2">$5,000 - $15,000</p>
                  <p className="text-muted-foreground text-sm">Basic functionality, single platform</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complex Apps</h3>
                  <p className="text-3xl font-bold text-primary mb-2">$15,000 - $50,000</p>
                  <p className="text-muted-foreground text-sm">Advanced features, multiple platforms</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Enterprise Solutions</h3>
                  <p className="text-3xl font-bold text-primary mb-2">$50,000+</p>
                  <p className="text-muted-foreground text-sm">Large-scale, mission-critical systems</p>
                </div>
              </div>
              <p className="text-muted-foreground mt-8">
                Final pricing depends on complexity, features, and integration requirements. 
                Contact us for a detailed project estimate.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Custom Application?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your specific requirements and create a solution that perfectly fits your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  Schedule Consultation
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  View All Services
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CustomApplicationsPage;
