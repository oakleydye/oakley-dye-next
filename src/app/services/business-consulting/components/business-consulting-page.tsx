"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  TrendingUp, 
  Lightbulb,
  Settings,
  BarChart3,
  ArrowRight,
  Check
} from "lucide-react";
import Link from "next/link";
import * as React from "react";

const BusinessConsultingPage: React.FC = () => {
  const isMobile = useIsMobile();

  const services = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Digital Strategy",
      description: "Develop comprehensive digital transformation roadmaps aligned with your business goals.",
      benefits: ["Technology Assessment", "Digital Roadmap", "ROI Planning", "Risk Analysis"]
    },
    {
      icon: <Settings className="w-8 h-8 text-primary" />,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through technology integration.",
      benefits: ["Workflow Analysis", "Automation Solutions", "Performance Metrics", "Training Plans"]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Growth Strategy",
      description: "Strategic planning to scale your business with sustainable technology solutions.",
      benefits: ["Market Analysis", "Scalability Planning", "Resource Optimization", "Growth Metrics"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: "Technology Planning",
      description: "Create technology roadmaps that support your long-term business objectives.",
      benefits: ["Tech Stack Selection", "Integration Planning", "Budget Forecasting", "Timeline Development"]
    }
  ];

  const challenges = [
    "Outdated technology systems holding back growth",
    "Manual processes that consume too much time",
    "Poor integration between different software tools",
    "Lack of data insights for decision making",
    "Inefficient workflows and communication gaps",
    "Difficulty scaling operations as business grows"
  ];

  const approach = [
    {
      step: "1",
      title: "Business Assessment",
      description: "Comprehensive analysis of your current operations, technology, and challenges."
    },
    {
      step: "2",
      title: "Strategy Development", 
      description: "Create customized solutions and roadmaps based on your specific needs and goals."
    },
    {
      step: "3",
      title: "Implementation Planning",
      description: "Detailed project plans with timelines, budgets, and resource requirements."
    },
    {
      step: "4",
      title: "Execution Support",
      description: "Ongoing guidance and support throughout the implementation process."
    },
    {
      step: "5",
      title: "Performance Monitoring",
      description: "Track progress and adjust strategies to ensure optimal results."
    }
  ];

  const outcomes = [
    "Increased operational efficiency by 30-50%",
    "Reduced manual work and human errors",
    "Better data visibility and reporting",
    "Improved customer experience and satisfaction",
    "Enhanced scalability and growth potential",
    "Stronger competitive positioning"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <Users className="w-20 h-20 text-primary" />
            </div>
            <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
              Business Consulting
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Strategic technology guidance to help small businesses optimize operations, 
              increase efficiency, and accelerate growth through smart digital solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Services Overview */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Consulting Services</h2>
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
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Common Challenges */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Common Business Challenges We Address</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start">
                    <Lightbulb className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Consulting Approach</h2>
          <div className="space-y-6">
            {approach.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-xl font-bold flex-shrink-0">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expected Outcomes */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Expected Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-8 h-8 text-primary mx-auto mb-4" />
                  <p className="font-medium">{outcome}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Study Example */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Success Story</h2>
          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Local Service Business</h3>
                  <p className="text-muted-foreground mb-6">
                    A growing service company was struggling with manual scheduling, 
                    paper-based invoicing, and poor customer communication. We implemented 
                    a comprehensive digital transformation strategy.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>40% reduction in administrative time</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>60% faster invoicing process</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>25% increase in customer satisfaction</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-2" />
                      <span>30% revenue growth in first year</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary rounded-lg p-8 text-white">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4" />
                    <h4 className="text-xl font-bold mb-2">ROI Achieved</h4>
                    <p className="text-4xl font-bold">300%</p>
                    <p className="text-sm opacity-90 mt-2">Within 12 months</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Investment Options */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Consulting Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Strategy Session</h3>
                <p className="text-4xl font-bold text-primary mb-6">$500</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />2-hour consultation</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Business assessment</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Recommendations report</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Action plan outline</li>
                </ul>
                <Button className="w-full">Book Session</Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Comprehensive Analysis</h3>
                <p className="text-4xl font-bold text-primary mb-6">$2,500</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Full business audit</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Detailed strategy document</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Implementation roadmap</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />3 months follow-up</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Priority support</li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary">Get Started</Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ongoing Partnership</h3>
                <p className="text-4xl font-bold text-primary mb-6">$1,500/mo</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Monthly strategy sessions</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Continuous optimization</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Performance monitoring</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Team training</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-primary mr-2" />Unlimited email support</li>
                </ul>
                <Button className="w-full" variant="outline">Contact Us</Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss your business challenges and create a strategic plan to overcome them 
              with smart technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary">
                  Schedule Free Consultation
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

export default BusinessConsultingPage;
