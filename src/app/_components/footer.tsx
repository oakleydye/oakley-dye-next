"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink } from "lucide-react";
import * as React from "react";

const Footer: React.FC = () => {
  const isMobile = useIsMobile();
  const canvasRef = React.useRef(null);
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = (canvas as HTMLCanvasElement).getContext("2d");
    if (!context) return;
    const dpr = window.devicePixelRatio || 1;
    (canvas as HTMLCanvasElement).width = window.innerWidth * dpr;
    (canvas as HTMLCanvasElement).height = window.innerHeight * dpr;
    context.scale(dpr, dpr);

    const drawRandomLines = () => {
      context.clearRect(
        0,
        0,
        (canvas as HTMLCanvasElement).width / dpr,
        (canvas as HTMLCanvasElement).height / dpr
      );

      for (let i = 0; i < 30; i++) {
        context.beginPath();
        context.moveTo(
          (Math.random() * (canvas as HTMLCanvasElement).width) / dpr,
          (Math.random() * (canvas as HTMLCanvasElement).height) / dpr
        );
        context.lineTo(
          (Math.random() * (canvas as HTMLCanvasElement).width) / dpr,
          (Math.random() * (canvas as HTMLCanvasElement).height) / dpr
        );
        context.strokeStyle = "hsl(5 89% 31% / 0.05)";
        context.lineWidth = Math.random() * 1.5;
        context.stroke();
      }
    };

    drawRandomLines();

    window.addEventListener("resize", drawRandomLines);

    return () => window.removeEventListener("resize", drawRandomLines);
  }, []);

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Custom Applications", href: "/services/custom-applications" },
    { name: "Business Consulting", href: "/services/business-consulting" },
    { name: "SEO & Marketing", href: "/services/seo-marketing" }
  ];

  const resourceLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Site Map", href: "/sitemap.xml" },
    { name: "Accessibility", href: "/accessibility" }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 mt-20">
      <Separator />
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full opacity-50"
      />
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}>
            
            {/* Company Info */}
            <div className="space-y-4">
              <div>
                <img
                  src="/footer_logo.webp"
                  alt="Oakley Dye Software & Design Logo"
                  className="h-12 w-auto mb-4"
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  Oakley Dye Software & Design
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforming ideas into digital reality through innovative software development, 
                  modern web design, and strategic business solutions.
                </p>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                  <a href="https://github.com/oakleydye" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:text-primary">
                  <a href="https://linkedin.com/in/oakley-dye" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Quick Links</h4>
              <nav className="space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Services</h4>
              <nav className="space-y-2">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-foreground">Get in Touch</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:hello@oakleydye.com" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@oakleydye.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <a 
                    href="tel:+4355571427" 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    (435) 557-1427
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    Remote & On-Site<br />
                    Serving Nationwide
                  </span>
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="pt-2">
                <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link href="/contact">
                    Start Your Project
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <Separator />
        <div className="container mx-auto px-4 py-6">
          <div className={`flex ${isMobile ? "flex-col space-y-4" : "flex-row justify-between items-center"}`}>
            <div className="text-sm text-muted-foreground">
              © {currentYear} Oakley Dye Software & Design. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6">
              {resourceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Schema.org Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Oakley Dye Software & Design",
                "url": "https://oakleydye.com",
                "logo": "https://oakleydye.com/footer_logo.webp",
                "description": "Custom software development, web design, and business consulting services",
                "founder": {
                  "@type": "Person",
                  "name": "Oakley Dye"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Remote",
                  "addressCountry": "US"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+14355571427",
                  "contactType": "customer service",
                  "email": "hello@oakleydye.com"
                },
                "sameAs": [
                  "https://github.com/oakleydye",
                  "https://linkedin.com/in/oakleydye"
                ],
                "serviceArea": {
                  "@type": "Country",
                  "name": "United States"
                }
              })
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
