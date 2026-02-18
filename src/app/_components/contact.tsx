"use client";

import * as React from "react";
import { motion } from "framer-motion";
import ContactForm from "@/app/_components/contact_form";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-primary" />,
    label: "Email",
    value: "hello@oakleydye.com",
    href: "mailto:hello@oakleydye.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-primary" />,
    label: "Phone",
    value: "(435) 557-1427",
    href: "tel:+14355571427",
  },
  {
    icon: <MapPin className="w-5 h-5 text-primary" />,
    label: "Location",
    value: "Hyrum, UT · Remote",
    href: null,
  },
];

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>contact.ts
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text-red">Start?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss your project. Get in touch for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Have questions? Ready to start? I&apos;m here to help. Reach out directly or use the form.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              {contactInfo.map((info, i) => (
                <div key={i} className="glass rounded-xl p-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm font-semibold hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-semibold mb-4 font-terminal text-sm text-primary">
                <span className="text-muted-foreground">// </span>what_happens_next[]
              </h4>
              <div className="space-y-3">
                {[
                  "Review your message within 24 hours",
                  "Schedule a free consultation call",
                  "Receive a detailed project proposal",
                ].map((step, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-6 h-6 bg-primary/10 border border-primary/20 text-primary rounded-full flex items-center justify-center text-xs font-bold font-terminal flex-shrink-0">
                      {i + 1}
                    </div>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <Button
              asChild
              variant="outline"
              className="w-full h-12 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Link href="/contact">
                Full Contact Page
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
