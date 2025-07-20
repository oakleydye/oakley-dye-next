"use client";

import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CustomButton from "@/app/_components/custom_button";
import { portfolioData, portfolioCategories } from "@/lib/portfolio_data";
import { ExternalLink, Github, Eye, Calendar, Zap, CheckCircle, ImageIcon } from "lucide-react";
import Image from "next/image";

type ProjectType = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  link: string;
  image: string;
  category: string;
  technologies: string[];
  features: string[];
  year: string;
  status: string;
};

const PortfolioPage: React.FC = () => {
  const isMobile = useIsMobile();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (projectId: number) => {
    setImageErrors(prev => new Set(prev).add(projectId));
  };

  const hasValidImage = (project: ProjectType) => {
    return project.image && 
           project.image !== "/images/portfolio/placeholder.jpg" && 
           !imageErrors.has(project.id);
  };

  useEffect(() => {
    // Simulate loading for smooth animation
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const filteredProjects = portfolioData.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory
  );

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

  const ProjectModal = ({ project, onClose }: { project: ProjectType; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">{project.name}</h3>
              <p className="text-muted-foreground">{project.description}</p>
            </div>
            <Button variant="ghost" onClick={onClose} className="text-2xl">×</Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                {hasValidImage(project) ? (
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`}
                    className="w-full h-full object-cover"
                    onError={() => handleImageError(project.id)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-primary/50">
                    <ImageIcon className="w-16 h-16 mb-2" />
                    <span className="text-sm">Project Preview</span>
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-muted-foreground mb-6">{project.fullDescription}</p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{project.year}</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <Zap className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{project.category}</span>
                </div>
              </div>
              
              {project.link !== "#" && (
                <div className="mt-6">
                  <CustomButton asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                  </CustomButton>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="text-center mb-12">
          <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent`}>
            Our Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the innovative solutions we've crafted for businesses across various industries. 
            Each project represents our commitment to excellence and cutting-edge technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {portfolioCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"} mb-12`}>
          {filteredProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border-0 bg-background/80 backdrop-blur"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                  {hasValidImage(project) ? (
                    <img 
                      src={project.image} 
                      alt={`${project.name} screenshot`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={() => handleImageError(project.id)}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-primary/50 group-hover:scale-110 transition-transform duration-300">
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span className="text-xs">Preview</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-20">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </CardTitle>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{project.category}</span>
                  {project.link !== "#" && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank");
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with innovative solutions tailored to your business needs.
          </p>
          <CustomButton asChild>
            <a href="/contact">Get Started Today</a>
          </CustomButton>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default PortfolioPage;
