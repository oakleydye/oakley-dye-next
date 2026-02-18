"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/lib/portfolio_data";
import { Button } from "@/components/ui/button";
import CustomButton from "./custom_button";
import { ExternalLink, Calendar, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const PortfolioSection: React.FC = () => {
  const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());
  const featuredProjects = portfolioData.filter((p) => p.featured);

  const handleImageError = (projectId: number) => {
    setImageErrors((prev) => new Set(prev).add(projectId));
  };

  const hasValidImage = (project: (typeof portfolioData)[0]) => {
    return project.image && !imageErrors.has(project.id);
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-400 bg-green-400/10 border border-green-400/20";
      case "In Development":
        return "text-blue-400 bg-blue-400/10 border border-blue-400/20";
      case "Demo":
        return "text-orange-400 bg-orange-400/10 border border-orange-400/20";
      case "Cancelled":
      case "Decommissioned":
        return "text-zinc-400 bg-zinc-400/10 border border-zinc-400/20";
      default:
        return "text-muted-foreground bg-muted border border-glass-border";
    }
  };

  return (
    <section className="section-padding">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-terminal text-sm text-primary mb-4 block">
            <span className="text-muted-foreground">// </span>portfolio.ts
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            Featured <span className="gradient-text-red">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results — a selection of my recent work.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-12">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:glow-red-sm transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              {/* Image — only rendered when one exists */}
              {hasValidImage(project) && (
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={() => handleImageError(project.id)}
                  />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <p className="text-sm opacity-90 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/20 rounded text-xs font-terminal">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium font-terminal ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  {!hasValidImage(project) && (
                    <span className={`shrink-0 px-2 py-0.5 rounded-full text-xs font-medium font-terminal ${getStatusStyle(project.status)}`}>
                      {project.status}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-xs font-terminal">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded-lg text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    <span>{project.category}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {project.link !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-primary hover:bg-primary/10"
                  >
                    <Link href="/portfolio">Learn More</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="glass-strong rounded-2xl p-8 text-center border border-glass-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-2">See All My Work</h3>
          <p className="text-muted-foreground mb-6">
            Discover more projects in the complete portfolio.
          </p>
          <CustomButton asChild>
            <Link href="/portfolio" className="inline-flex items-center gap-2">
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
