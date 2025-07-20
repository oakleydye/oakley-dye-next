"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Github, 
  Linkedin,
  Calendar,
  Code2,
  Briefcase,
  GraduationCap,
  Award,
  Zap,
  Users,
  TrendingUp,
  ExternalLink
} from "lucide-react";
import * as React from "react";

const ResumePageComponent: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeSection, setActiveSection] = React.useState("overview");

  const personalInfo = {
    name: "Oakley Dye",
    title: "Full-Stack Software Engineer & Business Consultant",
    location: "Hyrum, UT",
    email: "hello@oakleydye.com",
    phone: "(435) 557-1427",
    website: "https://oakleydye.com",
    linkedin: "https://linkedin.com/in/oakley-dye",
    github: "https://github.com/oakleydye"
  };

  const skills = {
    "Frontend": [
      "React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3",
      "Tailwind CSS", "Sass", "Vue.js", "Angular", "Responsive Design"
    ],
    "Backend": [
      "Node.js", ".NET Core", "Python", "Java", "Express.js", "Django", "FastAPI",
      "REST APIs", "GraphQL", "Microservices", "Server Architecture"
    ],
    "Database & Cloud": [
      "PostgreSQL", "Microsoft SQL Server", "MongoDB", "Redis", "AWS", "Azure",
      "Docker", "Kubernetes", "CI/CD", "DevOps"
    ],
    "Tools & Others": [
      "Git", "Agile/Scrum", "Project Management", "UI/UX Design",
      "SEO", "Digital Marketing", "Business Strategy", "Client Relations"
    ]
  };

  const experience = [
    {
      company: "Conservice",
      position: "Senior Software Engineer",
      duration: "Jan 2024 - Present",
      location: "Hyrum, UT",
      type: "Full-time",
      achievements: [
        "Rolled out AI driven data extraction and processing pipelines, improving efficiency and reducing costs.",
        "Automated business workflows, reducing manual toil by operations partners.",
        "Implemented real-time data analytics dashboards, enhancing decision-making capabilities.",
        "Improved system reliability and performance through proactive monitoring and optimization.",
      ],
      technologies: ["React", "Next.js", ".NET", "PostgreSQL", "Azure Service Bus", "Docker"]
    },
    {
      company: "Oakley Dye Software & Design",
      position: "Founder & Lead Developer",
      duration: "2023 - Present",
      location: "Hyrum, UT",
      type: "Self-employed",
      achievements: [
        "Founded and scaled a software consultancy serving 10+ clients across various industries",
        "Delivered 20+ custom web applications and business solutions with 98% client satisfaction",
        "Specialized in full-stack development, UI/UX design, and digital transformation strategies"
      ],
      technologies: ["React", "Next.js", "PostgreSQL", "Docker", "Photoshop"]
    },
    {
      company: "CD Entertainment",
      position: "DJ",
      duration: "2024 - Present",
      location: "Hyrum, UT",
      type: "Self-employed",
      achievements: [
        "Provided DJ services for weddings, parties, and corporate events",
        "Managed sound and lighting equipment for live events",
        "Created custom playlists and event timelines",
        "Ensured high-quality audio and visual experiences for clients"
      ],
      technologies: ["Virtual DJ", "QLC+", "Rekordbox", "Logic Pro", "Google Analytics"]
    },
    {
        company: "Delinea",
        position: "Senior Software Engineer",
        duration: "Mar 2022 - Jan 2024",
        location: "Salt Lake City, UT",
        type: "Full-time",
        achievements: [
            "Maintained legacy .NET applications while transitioning to modern tech stack",
            "Carried out large-scale testing initiatives to ensure software quality",
            "Mentored junior developers and conducted code reviews"
        ],
        technologies: ["Angular", ".NET", "PostgreSQL", "Sencha Ext.JS"]
    },
    {
        company: "Conservice",
        position: "Engineering Manager",
        duration: "Sep 2021 - Mar 2022",
        location: "Hyrum, UT",
        type: "Full-time",
        achievements: [
            "Led a team of 5 developers in the design and implementation of a microservices architecture",
            "Improved application performance by 30% through code optimization and refactoring",
            "Implemented Agile methodologies, resulting in a 25% increase in team productivity"
        ],
        technologies: ["React", ".NET", "PostgreSQL", "SQL Server", "Docker"]
    },
    {
        company: "Conservice",
        position: "Software Engineer",
        duration: "Mar 2019 - Sep 2021",
        location: "Hyrum, UT",
        type: "Full-time",
        achievements: [
            "Developed and maintained web applications using React and .NET",
            "Maintained and optimized legacy desktop applications",
            "Collaborated with cross-functional teams to define and implement new features",
            "Participated in code reviews and contributed to team knowledge sharing"
        ],
        technologies: ["React", ".NET", "PostgreSQL", "SQL Server", "WPF", "WinForms", "Docker"]
    }
  ];

  const education = [
    {
      institution: "Western Governors University",
      degree: "Computer Science",
      location: "Salt Lake City, UT",
    },
    {
        institution: "Utah State University",
        degree: "Computer Science",
        location: "Logan, UT",
    }
  ];

  const certifications = [
    { name: "Complete C# Masterclass", issuer: "Udemy", year: "2024" },
    { name: "React.js Essential Training", issuer: "LinkedIn", year: "2023" },
    { name: "Advanced Terraform", issuer: "LinkedIn", year: "2023" },
    { name: "Learning Terraform", issuer: "LinkedIn", year: "2023" },
    { name: "Secure Coding Foundations", issuer: "LinkedIn", year: "2023" },
    { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: "2023" },
    { name: "CompTIA Project+", issuer: "CompTIA", year: "2023" },
    { name: "Docker Essentials", issuer: "Amigos Code", year: "2021" },
    { name: "Complete ASP.NET MVC 5 Course", issuer: "Code with Mosh", year: "2021" },
    { name: "Database Administration", issuer: "Brent Ozar", year: "2021" },
    { name: "Performance Tuning", issuer: "Brent Ozar", year: "2021" },
  ];

  const projects = [
    {
      name: "AI Data Extraction Pipeline",
      description: "Automated bill data extraction and processing pipeline by utilizing AI and generic data templates.",
      technologies: ["Next.js", ".NET", "PostgreSQL", "Azure Service Bus", "Kodexa AI"],
      impact: "Decreased manual data entry time and reduced document processing costs."
    },
    {
      name: "Data Mapping Automation",
      description: "Created a workflow automation tool that maps data from various sources to a unified format, reducing manual data entry.",
      technologies: ["React", ".NET", "SQL Server", "PostgreSQL", "GraphQL"],
      impact: "Reduced manual data entry time, increased user capacity, and improved data accuracy."
    },
    {
      name: "Legal Request Dashboard",
      description: "Created a platform for operations users to interact with legal department, streamlining request management and tracking.",
      technologies: [".NET", "SQL Server", "WPF"],
      impact: "Improved request processing time and enhanced collaboration between departments."
    }
  ];

  const sectionTabs = [
    { id: "overview", label: "Overview", icon: <Users className="w-4 h-4" /> },
    { id: "experience", label: "Experience", icon: <Briefcase className="w-4 h-4" /> },
    { id: "skills", label: "Skills", icon: <Code2 className="w-4 h-4" /> },
    { id: "projects", label: "Projects", icon: <Zap className="w-4 h-4" /> },
    { id: "education", label: "Education", icon: <GraduationCap className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-4xl font-bold text-white">
              OD
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{personalInfo.name}</h1>
          <p className="text-xl text-muted-foreground mb-6">{personalInfo.title}</p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-primary">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <a href={`tel:${personalInfo.phone}`} className="hover:text-primary">
                {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild>
              <a href="mailto:hello@oakleydye.com">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume-oakley-dye.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                Download PDF
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/portfolio">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectionTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeSection === tab.id ? "default" : "outline"}
              onClick={() => setActiveSection(tab.id)}
              className="flex items-center gap-2"
            >
              {tab.icon}
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <div className="space-y-8">
              <Card>
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Professional Summary</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Passionate full-stack developer and entrepreneur with 8+ years of experience building 
                    scalable web applications and growing successful businesses. Founder of Oakley Dye Software & Design, 
                    where I've helped 50+ clients transform their ideas into powerful digital solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I specialize in modern web technologies, user experience design, and business strategy. 
                    My unique combination of technical expertise and business acumen allows me to deliver 
                    solutions that not only work flawlessly but also drive real business growth for my clients.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">50+</h3>
                    <p className="text-muted-foreground">Successful Projects</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">98%</h3>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">8+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {/* Experience Section */}
          {activeSection === "experience" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">Professional Experience</h2>
              {experience.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{job.position}</h3>
                        <p className="text-lg font-semibold">{job.company}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{job.duration}</p>
                        <p>{job.location}</p>
                        <Badge variant="outline">{job.type}</Badge>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Skills Section */}
          {activeSection === "skills" && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">Technical Skills</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {Object.entries(skills).map(([category, skillList]) => (
                  <Card key={category} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-primary">{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <Badge key={index} variant="outline" className="mb-2">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                        <div>
                          <p className="font-semibold">{cert.name}</p>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge>{cert.year}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Projects Section */}
          {activeSection === "projects" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">Featured Projects</h2>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-3 text-primary">{project.name}</h3>
                      <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="p-3 bg-primary/5 rounded-lg">
                        <p className="text-sm font-medium text-primary mb-1">Impact:</p>
                        <p className="text-xs text-muted-foreground">{project.impact}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Want to See More?</h3>
                  <p className="text-muted-foreground mb-6">
                    Check out my complete portfolio with detailed case studies and live demos.
                  </p>
                  <Button asChild>
                    <Link href="/portfolio">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Portfolio
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Education Section */}
          {activeSection === "education" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-center text-primary mb-8">Education</h2>
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                        <p className="text-lg font-semibold">{edu.institution}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        {/* <p>{edu.duration}</p> */}
                        <p>{edu.location}</p>
                      </div>
                    </div>
                    {/* <ul className="space-y-2">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul> */}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Call to Action */}
        <Card className="mt-16">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a talented developer for your team or want to discuss a project, 
              I'd love to hear from you. Let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="mailto:hello@oakleydye.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/contact">
                  View Contact Page
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResumePageComponent;
