"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CustomButton from "./custom_button";

const codeSnippet = `const developer = {
  name: 'Oakley Dye',
  title: 'Full-Stack Developer',
  location: 'Hyrum, UT (Remote)',
  available: true,
  skills: [
    'TypeScript', 'React', 'Next.js',
    '.NET Core', 'PostgreSQL', 'AWS',
  ],
  passions: ['clean code', 'great UX'],
};`;

const AboutSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="font-terminal text-sm text-primary mb-4 block">
                <span className="text-muted-foreground">// </span>about.ts
              </span>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6">
                Meet <span className="gradient-text-red">Oakley</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer who turns complex problems into elegant digital solutions.
              From pixel-perfect frontends to scalable backend systems, I bring ideas to life with modern
              technology and thoughtful design.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded on the belief that high-quality software should be accessible to businesses of all sizes,
              I work directly with clients to understand their goals and deliver solutions that exceed expectations.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <CustomButton asChild>
                <Link href="/about" className="inline-flex items-center gap-2">
                  More About Me
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </CustomButton>
              <CustomButton variant="outline-glow" asChild>
                <Link href="/resume">View Resume</Link>
              </CustomButton>
            </div>
          </motion.div>

          {/* Right: code snippet panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-2xl overflow-hidden border border-glass-border">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border bg-white/3">
                <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
                <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
                <span className="ml-3 text-xs font-terminal text-muted-foreground">developer.ts</span>
              </div>
              {/* Code */}
              <pre className="p-6 text-sm font-terminal leading-relaxed overflow-x-auto">
                <code>
                  {codeSnippet.split('\n').map((line, i) => {
                    // Simple syntax highlighting via spans
                    return (
                      <span key={i} className="block">
                        {line
                          .replace(/'/g, '\u2018')
                          .split(/(\b(?:const|true|false)\b|'[^']*')/)
                          .map((part, j) => {
                            if (/^(const|true|false)$/.test(part)) {
                              return <span key={j} className="text-primary">{part.replace(/\u2018/g, "'")}</span>;
                            }
                            if (part.startsWith('\u2018') || part.startsWith("'")) {
                              return <span key={j} className="text-green-400">{part.replace(/\u2018/g, "'")}</span>;
                            }
                            return <span key={j} className="text-muted-foreground">{part.replace(/\u2018/g, "'")}</span>;
                          })}
                      </span>
                    );
                  })}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
