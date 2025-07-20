"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Palette, 
  Database, 
  Users, 
  PenTool, 
  Search,
  Smartphone,
  ShoppingCart,
  Shield,
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const ServicesPage: React.FC = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Code2 className="w-12 h-12 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "SEO-Friendly"],
      slug: "web-development"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-primary" />,
      title: "Custom Applications",
      description: "Bespoke software solutions tailored to your specific business needs and workflows.",
      features: ["Desktop Applications", "Mobile Apps", "Web Applications", "API Development"],
      slug: "custom-applications"
    },
    {
      icon: <Database className="w-12 h-12 text-primary" />,
      title: "System Architecture",
      description: "Scalable and secure system design that grows with your business requirements.",
      features: ["Cloud Solutions", "Database Design", "Microservices", "Security Implementation"],
      slug: "system-architecture"
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Business Consulting",
      description: "Strategic guidance to help small businesses leverage technology for growth and efficiency.",
      features: ["Digital Strategy", "Process Optimization", "Technology Planning", "Growth Consulting"],
      slug: "business-consulting"
    },
    {
      icon: <PenTool className="w-12 h-12 text-primary" />,
      title: "Graphic Design",
      description: "Professional visual design services that enhance your brand identity and marketing materials.",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "UI/UX Design"],
      slug: "graphic-design"
    },
    {
      icon: <Search className="w-12 h-12 text-primary" />,
      title: "SEO & Marketing",
      description: "Comprehensive digital marketing strategies to improve your online visibility and reach.",
      features: ["Search Engine Optimization", "Content Strategy", "Analytics", "Local SEO"],
      slug: "seo-marketing"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-primary" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with payment processing and inventory management.",
      features: ["Online Stores", "Payment Integration", "Inventory Management", "Mobile Commerce"],
      slug: "ecommerce"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security assessments and implementations.",
      features: ["Security Audits", "Data Protection", "Compliance", "Risk Assessment"],
      slug: "cybersecurity"
    },
    {
      icon: <Zap className="w-12 h-12 text-primary" />,
      title: "Digital Transformation",
      description: "Modernize your business processes and technology infrastructure for the digital age.",
      features: ["Legacy System Updates", "Workflow Automation", "Cloud Migration", "Staff Training"],
      slug: "digital-transformation"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive digital solutions designed to help your business thrive in the modern marketplace.
            From custom development to strategic consulting, we've got you covered.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link href={`/services/${service.slug}`}>
                    <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Card>
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our comprehensive digital solutions. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">
                    Learn About Us
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
