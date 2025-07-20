"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code2, Palette, Users, Award, Target, Heart } from "lucide-react";
import * as React from "react";

const AboutPage: React.FC = () => {
  const isMobile = useIsMobile();

  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Excellence",
      description: "We strive for perfection in every project, ensuring the highest quality deliverables."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Collaboration",
      description: "We work closely with our clients as partners, not just service providers."
    },
    {
      icon: <Code2 className="w-8 h-8 text-primary" />,
      title: "Innovation",
      description: "We stay at the forefront of technology to provide cutting-edge solutions."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Passion",
      description: "We love what we do, and it shows in every line of code and pixel we create."
    }
  ];

  const team = [
    {
      name: "Oakley Dye",
      role: "Founder & Lead Developer",
      description: "Full-stack developer with expertise in modern web technologies and system architecture.",
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-background to-card py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className={`${isMobile ? "text-4xl" : "text-6xl"} font-bold mb-6`}>
            About Oakley Dye Software & Design
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Transforming visions into digital realities through innovative software development, 
            stunning design, and strategic business solutions.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 py-16">
        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a vision to make high-quality digital services accessible to businesses 
                of all sizes, Oakley Dye Software & Design has grown from a passionate idea into a 
                trusted partner for companies looking to thrive in the digital age.
              </p>
              <p>
                Our journey began with a simple yet powerful belief: that every business deserves 
                exceptional digital solutions that not only meet their current needs but position 
                them for future growth. We combine technical expertise with creative thinking to 
                deliver results that exceed expectations.
              </p>
              <p>
                Today, we continue to evolve, staying ahead of industry trends and expanding our 
                services to provide comprehensive digital solutions that help our clients succeed 
                in an ever-changing marketplace.
              </p>
            </div>
          </div>
          <div 
            className="relative h-96 bg-cover bg-center rounded-lg shadow-xl"
            style={{ backgroundImage: "url(/images/about.webp)" }}
          />
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, 
                enhance efficiency, and create meaningful connections with their customers. 
                We are committed to delivering exceptional quality while providing 
                personalized service that treats every client as a valued partner.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the premier choice for businesses seeking comprehensive digital transformation. 
                We envision a future where technology seamlessly integrates with business strategy 
                to create sustainable competitive advantages and lasting value for our clients.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <Card key={index} className="max-w-md">
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">OD</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <Card>
          <CardContent className="p-8">
            <h2 className="text-4xl font-bold text-center mb-8">Why Choose Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Code2 className="w-6 h-6 text-primary mr-2" />
                  Technical Expertise
                </h4>
                <p className="text-muted-foreground">
                  Years of experience with cutting-edge technologies and proven track record 
                  of delivering complex projects on time and within budget.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Palette className="w-6 h-6 text-primary mr-2" />
                  Creative Excellence
                </h4>
                <p className="text-muted-foreground">
                  Our design philosophy combines aesthetic appeal with functional usability 
                  to create memorable user experiences that drive results.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-3 flex items-center">
                  <Users className="w-6 h-6 text-primary mr-2" />
                  Client Partnership
                </h4>
                <p className="text-muted-foreground">
                  We believe in building long-term relationships, providing ongoing support, 
                  and being responsive to your evolving business needs.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AboutPage;
