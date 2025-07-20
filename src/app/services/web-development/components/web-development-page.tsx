"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Smartphone, 
  Zap, 
  Shield,
  Search,
  Palette,
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const WebDevelopmentPage: React.FC = () => {
  const isMobile = useIsMobile();

  const technologies = [
    { name: "React & Next.js", description: "Modern frontend frameworks for blazing-fast applications" },
    { name: "Node.js & Express", description: "Scalable backend solutions with JavaScript" },
    { name: "TypeScript", description: "Type-safe development for robust applications" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid styling" },
    { name: "PostgreSQL & MongoDB", description: "Reliable database solutions for your data needs" },
    { name: "AWS & Vercel", description: "Cloud deployment and hosting for optimal performance" }
  ];

  const features = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Responsive Design",
      description: "Websites that look and work perfectly on all devices, from mobile to desktop."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized for speed with modern performance best practices and CDN integration."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Secure & Reliable",
      description: "Built with security in mind, including SSL, authentication, and data protection."
    },
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "SEO Optimized",
      description: "Search engine friendly architecture to help your business get found online."
    }
  ];

  const services = [
    "Custom Website Development",
    "E-commerce Platforms",
    "Web Applications",
    "Progressive Web Apps (PWAs)",
    "API Development & Integration",
    "Website Redesigns & Updates",
    "Performance Optimization",
    "Maintenance & Support"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and technical requirements."
    },
    {
      step: "2", 
      title: "Design & Prototyping",
      description: "Creating wireframes and prototypes to visualize the user experience and interface."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Building your website with clean, maintainable code and thorough testing."
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Deploying your site and providing ongoing maintenance and support."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Code2 className="w-20 h-20 text-primary" />
            </div>
            <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
              Web Development
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Custom websites and web applications built with cutting-edge technologies 
              to deliver exceptional user experiences and drive business growth.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Key Features */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our Web Development?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Code2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">{tech.name}</h3>
                      <p className="text-muted-foreground text-sm">{tech.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services List */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Web Development Services</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < process.length - 1 && !isMobile && (
                  <ArrowRight className="absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground hidden lg:block" />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Investment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Starter Website</h3>
                <p className="text-4xl font-bold text-primary mb-6">$2,500+</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Up to 5 pages</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Responsive design</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Contact forms</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Basic SEO</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />1 month support</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Professional Website</h3>
                <p className="text-4xl font-bold text-primary mb-6">$5,000+</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Up to 15 pages</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Custom design</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />CMS integration</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Advanced SEO</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />3 months support</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Analytics setup</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
                <p className="text-4xl font-bold text-primary mb-6">$10,000+</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Unlimited pages</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Custom functionality</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />E-commerce ready</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Performance optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />6 months support</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Priority support</li>
                </ul>
                <Button className="w-full" variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Website?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your project requirements and create a website that drives results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  Start Your Project
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

export default WebDevelopmentPage;
