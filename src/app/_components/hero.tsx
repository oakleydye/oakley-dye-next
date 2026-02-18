"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";
import CustomButton from "@/app/_components/custom_button";
import Link from "next/link";

const words = ["Expertise", "Innovation", "Creativity", "Solutions", "Quality"];

const stats = [
  { value: "5+", label: "Projects Delivered" },
  { value: "3+", label: "Years Experience" },
  { value: "100%", label: "Remote Friendly" },
];

const Hero: React.FC = () => {
  const [currentWord, setCurrentWord] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background radial glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(5 89% 45% / 30%) 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(265 30% 40% / 20%) 0%, transparent 70%)" }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left column (60%) */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Terminal label */}
            <motion.div variants={itemVariants}>
              <span className="font-terminal text-sm text-primary bg-primary/10 border border-primary/20 rounded-lg px-4 py-2 inline-block">
                <span className="text-muted-foreground">$</span> oakley <span className="text-primary">--mode</span>=developer
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                Your Vision,{" "}
                <span className="block">
                  Our{" "}
                  <span className="inline-block word-fade gradient-text-red min-w-[280px] lg:min-w-[380px]">
                    {words[currentWord]}
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Sub-copy */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Custom software development, modern web design, and strategic consulting
              — built to transform your business and drive real results.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <CustomButton asChild>
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CustomButton>
              <CustomButton variant="outline-glow" asChild>
                <Link href="/portfolio">View My Work</Link>
              </CustomButton>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-8 pt-4 border-t border-glass-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary text-glow-red">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column (40%) — desktop only */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glassmorphism panel */}
              <div className="glass rounded-2xl overflow-hidden border border-glass-border">
                <img
                  src="/images/hero.webp"
                  alt="Oakley Dye"
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>

              {/* Floating availability badge */}
              <motion.div
                className="absolute -bottom-4 -left-4 glass-strong rounded-xl px-4 py-3 border border-glass-border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot" />
                  <span className="text-sm font-medium text-foreground">Available for new projects</span>
                </div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                className="absolute -top-4 -right-4 glass-strong rounded-xl px-4 py-3 border border-primary/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium font-terminal text-primary">Full-Stack Dev</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs font-terminal">scroll</span>
        <ChevronDown className="w-4 h-4 bounce-y" />
      </div>
    </section>
  );
};

export default Hero;
