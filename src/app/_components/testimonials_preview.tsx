"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import CustomButton from "./custom_button";

const testimonials = [
  {
    quote: "Oakley transformed our online presence completely. The new website is fast, beautiful, and has already brought in new customers. Couldn't be happier.",
    name: "Jordan M.",
    role: "Owner",
    company: "CD Entertainment",
    project: "Web Development",
    initials: "JM",
  },
  {
    quote: "Professional, responsive, and genuinely cares about results. Oakley delivered our project on time and exceeded every expectation we had.",
    name: "Sarah K.",
    role: "Operations Manager",
    company: "O.R.E. Plumbing",
    project: "Custom Application",
    initials: "SK",
  },
  {
    quote: "The attention to detail and technical expertise is remarkable. Our booking system works flawlessly and saves us hours every week.",
    name: "Mike T.",
    role: "Studio Manager",
    company: "44th Street Tattoo",
    project: "Business Consulting",
    initials: "MT",
  },
];

const TestimonialsPreview: React.FC = () => {
  return (
    <section className="section-padding relative">
      {/* Red radial glow behind section */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(5 89% 45% / 8%) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>client_reviews.ts
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            What Clients <span className="gradient-text-red">Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from real clients who trusted me with their digital presence.
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="glass rounded-2xl p-6 flex flex-col gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              {/* Large quote icon */}
              <Quote className="w-8 h-8 text-primary opacity-60" />

              <p className="text-muted-foreground leading-relaxed flex-1 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
                <Avatar className="w-10 h-10 bg-primary/10 border border-primary/20">
                  <AvatarFallback className="text-primary font-bold text-sm bg-transparent">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.company}</div>
                </div>
                <span className="text-xs font-terminal bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-1 shrink-0">
                  {t.project}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CustomButton variant="outline-glow" asChild>
            <Link href="/testimonials" className="inline-flex items-center gap-2">
              Read All Reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
