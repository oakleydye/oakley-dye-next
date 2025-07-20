"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send
} from "lucide-react";
import ContactForm from "@/app/_components/contact_form";
import * as React from "react";

const ContactPage: React.FC = () => {
  const isMobile = useIsMobile();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email",
      details: "hello@oakleydye.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      details: "(555) 123-4567",
      subtitle: "Mon-Fri 9AM-5PM PST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Location",
      details: "Hyrum, UT",
      subtitle: "Serving clients worldwide"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Response Time",
      details: "24 hours or less",
      subtitle: "For all inquiries"
    }
  ];

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on complexity. Simple websites take 2-4 weeks, while custom applications can take 2-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you work with small businesses?",
      answer: "Absolutely! We specialize in helping small to medium-sized businesses grow through technology. We offer scalable solutions that fit your budget and grow with your business."
    },
    {
      question: "What's included in ongoing support?",
      answer: "Our support includes bug fixes, security updates, performance monitoring, and minor content updates. We also provide priority support and consultation for any technical questions."
    },
    {
      question: "Can you help improve my existing website?",
      answer: "Yes! We offer website audits, redesigns, performance optimization, and modernization services. We can work with your existing site or recommend a complete rebuild if needed."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Ready to start your project or have questions about our services? 
            We'd love to hear from you and discuss how we can help your business grow.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="font-semibold mb-2">{info.title}</h3>
                <p className="font-medium mb-1">{info.details}</p>
                <p className="text-sm text-muted-foreground">{info.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Fill out the form below and we'll get back to you as soon as possible. 
              For urgent matters, feel free to call us directly.
            </p>
            <Card>
              <ContactForm />
            </Card>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">What Happens Next?</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">We Review Your Message</h3>
                  <p className="text-muted-foreground text-sm">
                    Our team reviews your inquiry and determines the best way to help you achieve your goals.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free Consultation</h3>
                  <p className="text-muted-foreground text-sm">
                    We schedule a call to discuss your project requirements, timeline, and budget in detail.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Detailed Proposal</h3>
                  <p className="text-muted-foreground text-sm">
                    We provide a comprehensive proposal with scope, timeline, and investment details.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Project Kickoff</h3>
                  <p className="text-muted-foreground text-sm">
                    Once approved, we begin work on your project with regular updates and collaboration.
                  </p>
                </div>
              </div>
            </div>

            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Send className="w-6 h-6 text-primary mr-3" />
                  <h3 className="font-semibold">Quick Response Guarantee</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We respond to all inquiries within 24 hours, usually much faster. 
                  Your project success is our priority!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Don't wait! The sooner we start, the sooner you'll see results. 
              Contact us today for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@oakleydye.com" className="inline-block">
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-primary mr-3" />
                    <div className="text-left">
                      <p className="font-semibold">Email Us</p>
                      <p className="text-sm text-muted-foreground">hello@oakleydye.com</p>
                    </div>
                  </div>
                </Card>
              </a>
              <a href="tel:+14355571427" className="inline-block">
                <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-primary mr-3" />
                    <div className="text-left">
                      <p className="font-semibold">Call Us</p>
                      <p className="text-sm text-muted-foreground">(435) 557-1427</p>
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
