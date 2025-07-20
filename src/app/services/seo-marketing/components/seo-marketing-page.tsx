"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  TrendingUp, 
  Target, 
  BarChart3,
  Globe,
  MapPin,
  Check,
  ArrowRight,
  Eye
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const SEOMarketingPage: React.FC = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Search Engine Optimization",
      description: "Improve your website's visibility in search results and drive organic traffic.",
      features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"]
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary" />,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your area.",
      features: ["Google My Business", "Local Citations", "Review Management", "Local Content"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Analytics & Reporting",
      description: "Track performance and make data-driven decisions for your marketing.",
      features: ["Google Analytics Setup", "Performance Reports", "Conversion Tracking", "ROI Analysis"]
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Content Marketing",
      description: "Create valuable content that attracts and engages your target audience.",
      features: ["Content Strategy", "Blog Writing", "Social Media", "Email Marketing"]
    }
  ];

  const benefits = [
    "Increased website traffic from search engines",
    "Higher quality leads and better conversion rates",
    "Improved brand visibility and recognition",
    "Better return on investment than paid advertising",
    "Long-term sustainable growth",
    "Competitive advantage in your market"
  ];

  const process = [
    {
      step: "1",
      title: "SEO Audit",
      description: "Comprehensive analysis of your current website and online presence."
    },
    {
      step: "2",
      title: "Strategy Development",
      description: "Create a customized SEO and marketing plan based on your goals."
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute optimization strategies and content marketing campaigns."
    },
    {
      step: "4",
      title: "Monitoring & Reporting",
      description: "Track results and adjust strategies for continuous improvement."
    }
  ];

  const industries = [
    "Professional Services",
    "Healthcare & Medical",
    "Home Services",
    "Real Estate",
    "Restaurants & Food",
    "Retail & E-commerce",
    "Technology",
    "Non-profit Organizations"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Search className="w-20 h-20 text-primary" />
            </div>
            <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
              SEO & Digital Marketing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Boost your online visibility, attract more customers, and grow your business 
              with proven SEO strategies and digital marketing solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Services Overview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our SEO & Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    {service.icon}
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <ArrowRight className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why SEO Matters */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Why Your Business Needs SEO</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card>
                  <CardContent className="p-6">
                    <Eye className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">93%</p>
                    <p className="text-sm text-muted-foreground">of online experiences start with search</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold">75%</p>
                    <p className="text-sm text-muted-foreground">never scroll past first page</p>
                  </CardContent>
                </Card>
              </div>
              <p className="text-muted-foreground">
                Don't let your competitors capture your potential customers. 
                Invest in SEO to secure your place at the top of search results.
              </p>
            </div>
          </div>
        </div>

        {/* Our Process */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our SEO Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Results You Can Expect */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Results You Can Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">First 3 Months</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>Technical improvements</li>
                  <li>Content optimization</li>
                  <li>Initial ranking improvements</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">3-6 Months</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>Significant traffic increase</li>
                  <li>Higher search rankings</li>
                  <li>More qualified leads</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">6+ Months</h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li>Sustained growth</li>
                  <li>Competitive dominance</li>
                  <li>Measurable ROI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">SEO & Marketing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Starter SEO</h3>
                <p className="text-4xl font-bold text-primary mb-6">$800/mo</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Keyword research</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />On-page optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Monthly reporting</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Basic local SEO</li>
                </ul>
                <Button className="w-full">Get Started</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Professional SEO</h3>
                <p className="text-4xl font-bold text-primary mb-6">$1,500/mo</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Everything in Starter</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Content creation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Link building</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Technical SEO</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Competitor analysis</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Enterprise SEO</h3>
                <p className="text-4xl font-bold text-primary mb-6">$2,500/mo</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Everything in Professional</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Advanced analytics</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />PPC management</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Social media marketing</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Priority support</li>
                </ul>
                <Button className="w-full" variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
          <p className="text-center text-muted-foreground mt-8">
            All packages include monthly reports and strategy adjustments. 
            Minimum 6-month commitment for best results.
          </p>
        </div>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Dominate Search Results?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Don't let your competitors capture your potential customers. 
              Start your SEO journey today and watch your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  Get Free SEO Audit
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

export default SEOMarketingPage;
