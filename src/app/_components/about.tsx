"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import * as React from "react";

const AboutSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="container mx-auto mt-20 max-w-6xl px-4">
      <div className="text-center mb-16">
        <h2
          className={`${
            isMobile ? "text-4xl" : "text-5xl lg:text-6xl"
          } font-bold mb-6`}
        >
          About Us
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Where your vision becomes our mission
        </p>
      </div>

      <div className="space-y-12">
        <Card className="bg-gradient-to-br from-background to-card/50">
          <CardContent className="p-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to <span className="font-semibold text-foreground">Oakley Dye Software & Design</span>, where your vision becomes
              our mission. We are a passionate team of skilled professionals
              dedicated to bringing your ideas to life through innovative coding,
              striking web design, creative graphic solutions, and a variety of
              small business services tailored to your unique needs.
            </p>
          </CardContent>
        </Card>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a vision to make high-quality digital services
                accessible to businesses of all sizes, Oakley Dye Software & Design
                has grown from a small startup into a trusted partner for many. Our
                journey began with a simple yet powerful idea: to combine technical
                expertise with creative thinking to help businesses thrive in the
                digital age.
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                At Oakley Dye Software & Design, we believe that every project is an
                opportunity to create something extraordinary. We take the time to
                understand your goals, challenges, and aspirations, ensuring that
                our solutions are perfectly aligned with your vision.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center text-primary">Our Services</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Custom Coding</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you need a bespoke software solution, an
                      interactive web application, or complex system integration, our
                      coding experts are here to turn your requirements into reality.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Web Design</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      First impressions matter. Our talented designers
                      craft visually stunning and user-friendly websites that
                      captivate your audience and drive engagement.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Graphic Design</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Visual storytelling is at the heart of our
                      graphic design services. We create compelling graphics, logos,
                      branding materials, and marketing collateral.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4 flex-shrink-0">
                    <Code2 className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Small Business Services</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Running a small business can be challenging, but you don't have to do it alone. 
                      We offer digital marketing, SEO, social media management, and consulting.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-10">
            <h3 className="text-3xl font-bold mb-8 text-center text-primary">Why Choose Us?</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary mb-2">Expertise</div>
                <p className="text-sm text-muted-foreground">Years of experience and diverse skill set</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary mb-2">Innovation</div>
                <p className="text-sm text-muted-foreground">Passionate about new solutions</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary mb-2">Collaboration</div>
                <p className="text-sm text-muted-foreground">Working closely with our clients</p>
              </div>
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="font-semibold text-primary mb-2">Quality</div>
                <p className="text-sm text-muted-foreground">Results that exceed expectations</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
