"use client";

import * as React from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import ContactForm from "@/app/_components/contact_form";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection: React.FC = () => {
  const isMobile = useIsMobile();

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      label: "Email",
      value: "hello@oakleydye.com",
      href: "mailto:hello@oakleydye.com"
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      label: "Phone",
      value: "(555) 123-4567",
      href: "tel:+14355571427"
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      label: "Location",
      value: "Hyrum, UT",
      href: null
    }
  ];

  return (
    <div id="contact" className="container mx-auto mt-32 mb-20 relative max-w-6xl px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <h2
          className={`${
            isMobile ? "text-4xl" : "text-6xl"
          } font-bold mb-6`}
        >
          Ready to Get Started?
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Let's discuss your project and how we can help bring your vision to life. 
          Get in touch for a free consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
          <ContactForm />
        </div>

        {/* Contact Information & CTA */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Have questions or ready to start your project? We're here to help. 
              Reach out through the form or contact us directly using the information below.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a 
                          href={info.href} 
                          className="text-base font-semibold hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-base font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process Steps */}
          <Card className="bg-gradient-to-br from-background to-card">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-4">What Happens Next?</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                    1
                  </div>
                  <span>We'll review your message within 24 hours</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                    2
                  </div>
                  <span>Schedule a free consultation call</span>
                </div>
                <div className="flex items-center text-sm">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mr-3 flex-shrink-0">
                    3
                  </div>
                  <span>Receive a detailed project proposal</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              asChild
              variant="outline" 
              className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="/contact">
                View Full Contact Page
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
