"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, BarChart3, Lightbulb, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";
import CustomButton from "./custom_button";

const services = [
  {
    icon: <Globe className="w-6 h-6" />,
    name: "Web Development",
    description: "Modern, performant websites built with the latest technologies.",
    features: ["Next.js & React", "Responsive Design", "SEO Optimized", "Fast Load Times"],
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    name: "Custom Applications",
    description: "Bespoke software solutions tailored to your unique business requirements.",
    features: ["Full-Stack Development", "API Design", "Database Architecture", "Cloud Deployment"],
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    name: "SEO & Marketing",
    description: "Drive organic traffic and convert visitors into customers.",
    features: ["Technical SEO", "Content Strategy", "Analytics Setup", "Performance Audits"],
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    name: "Business Consulting",
    description: "Strategic technology guidance to help your business grow.",
    features: ["Tech Stack Advice", "Process Automation", "Digital Transformation", "Vendor Selection"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    name: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that users love to interact with.",
    features: ["Wireframing", "Design Systems", "User Testing", "Accessibility"],
  },
  {
    icon: <Shield className="w-6 h-6" />,
    name: "System Architecture",
    description: "Scalable, secure infrastructure designed for growth.",
    features: ["Microservices", "CI/CD Pipelines", "Security Reviews", "Performance Tuning"],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>services.ts
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            What I <span className="gradient-text-red">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            End-to-end digital solutions crafted with precision and purpose.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              className="glass rounded-2xl p-6 group hover:-translate-y-1 hover:glow-red-sm transition-all duration-300 cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-2 text-foreground">{service.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pricing teaser */}
        <motion.div
          className="glass-strong rounded-2xl p-8 text-center border border-primary/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground mb-2 font-terminal text-sm">
            <span className="text-primary">// </span>transparent pricing, no surprises
          </p>
          <h3 className="text-2xl font-bold mb-4">Ready to see what fits your budget?</h3>
          <CustomButton asChild>
            <Link href="/pricing" className="inline-flex items-center gap-2">
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
