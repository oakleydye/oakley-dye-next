"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { portfolioData } from "@/lib/portfolio_data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomButton from "./custom_button";
import { ExternalLink, ImageIcon, Calendar, Zap } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const PortfolioSection: React.FC = () => {
  const isMobile = useIsMobile();
  const [imageErrors, setImageErrors] = React.useState<Set<number>>(new Set());
  
  // Show only the first 4 projects on homepage
  const featuredProjects = portfolioData.slice(0, 4);

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  const hasValidImage = (project: typeof portfolioData[0]) => {
    return project.image && 
           project.image !== "/images/portfolio/placeholder.jpg" && 
           !imageErrors.has(project.id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "text-green-600 bg-green-100";
      case "In Development":
        return "text-blue-600 bg-blue-100";
      case "Demo":
        return "text-orange-600 bg-orange-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
            Featured Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore some of our recent projects and see how we've helped businesses 
            transform their digital presence with innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 mb-12 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
          {featuredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-background/80 backdrop-blur overflow-hidden"
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  {hasValidImage(project) ? (
                    <img 
                      src={project.image} 
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-primary/50 group-hover:scale-110 transition-transform duration-500">
                      <ImageIcon className="w-16 h-16 mb-3" />
                      <span className="text-sm font-medium">Project Showcase</span>
                    </div>
                  )}
                  
                  {/* Overlay with project info */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                      <p className="text-sm opacity-90 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.technologies.slice(0, 3).map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-white/20 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
                
                {/* Project Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      <span>{project.category}</span>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
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
                    <Link href="/portfolio">
                      Learn More
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-6 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/10">
            <div>
              <h3 className="text-2xl font-bold mb-2">See All Our Work</h3>
              <p className="text-muted-foreground">
                Discover more projects and case studies in our complete portfolio
              </p>
            </div>
            <CustomButton asChild>
              <Link href="/portfolio" className="inline-flex items-center gap-2">
                View Full Portfolio
                <ExternalLink className="w-4 h-4" />
              </Link>
            </CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
