"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    // { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "Custom Applications", href: "/services/custom-applications" },
    { name: "Business Consulting", href: "/services/business-consulting" },
    { name: "SEO & Marketing", href: "/services/seo-marketing" },
  ];

  const resourceLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Accessibility", href: "/accessibility" },
  ];

  return (
    <footer className="relative mt-20 glass-strong border-t border-glass-border">
      {/* CSS grid pattern background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, oklch(1 0 0) 0px, oklch(1 0 0) 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, oklch(1 0 0) 0px, oklch(1 0 0) 1px, transparent 1px, transparent 60px)
          `,
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Company Info */}
            <div className="space-y-4">
              <div>
                <img
                  src="/logo.webp"
                  alt="Oakley Dye Software & Design Logo"
                  className="h-10 w-auto mb-4 opacity-90"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforming ideas into digital reality through innovative software development,
                  modern web design, and strategic business solutions.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-primary/10">
                  <a href="https://github.com/oakleydye" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild className="hover:text-primary hover:bg-primary/10">
                  <a href="https://linkedin.com/in/oakley-dye" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              {/* Terminal badge */}
              <div className="flex items-center gap-2 font-terminal text-xs text-muted-foreground bg-white/5 border border-glass-border rounded-lg px-3 py-2 w-fit">
                <Terminal className="w-3 h-3 text-primary" />
                <span>v1.0.0 <span className="text-primary">//</span> Built with Next.js 15</span>
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

              <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all">
                <Link href="/contact">
                  Start Your Project
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-glass-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm text-muted-foreground">
                © {currentYear} Oakley Dye Software & Design. All rights reserved.
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
