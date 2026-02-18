"use client";

import { motion } from "framer-motion";
import { Quote, Star, TrendingUp } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { testimonials, caseStudies } from "@/lib/testimonials_data";

export function TestimonialsPage() {
  return (
    <div className="space-y-24">
      {/* Stats band */}
      <motion.div
        className="grid grid-cols-3 gap-6 glass-strong rounded-2xl p-8 border border-glass-border"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {[
          { value: "5+", label: "Happy Clients" },
          { value: "100%", label: "Project Success Rate" },
          { value: "5★", label: "Average Rating" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <div className="text-4xl font-bold gradient-text-red mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </motion.div>

      {/* Testimonials masonry grid */}
      <div>
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Client <span className="gradient-text-red">Reviews</span>
        </motion.h2>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              className="glass rounded-2xl p-6 flex flex-col gap-4 break-inside-avoid"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-primary opacity-60" />

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, si) => (
                  <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
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
                <span className="text-xs font-terminal bg-primary/10 text-primary border border-primary/20 rounded-full px-2 py-0.5 shrink-0">
                  {t.projectType}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Case studies */}
      <div>
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Case <span className="gradient-text-red">Studies</span>
        </motion.h2>

        <div className="space-y-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              className="glass rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-8 bg-primary rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">{cs.client}</h3>
                  <span className="text-sm text-muted-foreground font-terminal">{cs.industry}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Challenge */}
                <div>
                  <h4 className="font-semibold text-sm text-primary font-terminal mb-3">
                    <span className="text-muted-foreground">// </span>challenge
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.challenge}</p>
                </div>

                {/* Solution */}
                <div>
                  <h4 className="font-semibold text-sm text-primary font-terminal mb-3">
                    <span className="text-muted-foreground">// </span>solution
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cs.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-sm text-primary font-terminal mb-3">
                    <span className="text-muted-foreground">// </span>results
                  </h4>
                  <div className="space-y-3">
                    {cs.results.map((r, ri) => (
                      <div key={ri} className="flex items-center gap-3">
                        <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-green-400 font-terminal">{r.value}</div>
                          <div className="text-xs text-muted-foreground">{r.metric}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-glass-border">
                {cs.technologies.map((tech) => (
                  <span key={tech} className="text-xs font-terminal bg-primary/10 text-primary border border-primary/20 rounded-lg px-2 py-1">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
