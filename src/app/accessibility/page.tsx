import { generateSEOMetadata } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";
import { 
  Eye, 
  Ear, 
  MousePointer, 
  Keyboard, 
  Monitor, 
  Accessibility, 
  CheckCircle, 
  Mail,
  Calendar,
  Heart
} from "lucide-react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Accessibility Statement - Inclusive Design & Web Accessibility",
  description: "Learn about our commitment to web accessibility and how we ensure our website is usable by everyone, regardless of ability or technology used.",
  noIndex: false,
  canonicalUrl: "https://oakleydye.com/accessibility",
});

const AccessibilityPage: React.FC = () => {
  const lastUpdated = "January 1, 2024";

  const accessibilityFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Accessibility",
      features: [
        "High contrast color ratios meeting WCAG AA standards",
        "Scalable text that can be enlarged up to 200%",
        "Alternative text for all meaningful images",
        "Focus indicators on all interactive elements",
        "Clear visual hierarchy and consistent navigation"
      ]
    },
    {
      icon: <Keyboard className="w-6 h-6" />,
      title: "Keyboard Navigation",
      features: [
        "Full keyboard navigation support",
        "Logical tab order throughout the site",
        "Skip links to main content areas",
        "Visible focus indicators",
        "No keyboard traps or inaccessible content"
      ]
    },
    {
      icon: <Ear className="w-6 h-6" />,
      title: "Audio & Media",
      features: [
        "Captions and transcripts for video content",
        "Audio descriptions where applicable",
        "No auto-playing media with sound",
        "Media controls are keyboard accessible",
        "Volume controls are clearly labeled"
      ]
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Technical Standards",
      features: [
        "Semantic HTML markup for screen readers",
        "ARIA labels and roles where needed",
        "Responsive design for all screen sizes",
        "Compatible with assistive technologies",
        "Fast loading times and optimal performance"
      ]
    }
  ];

  const wcagCompliance = [
    {
      level: "A",
      description: "Basic accessibility features",
      status: "Fully Compliant",
      color: "text-green-600"
    },
    {
      level: "AA", 
      description: "Enhanced accessibility (our target)",
      status: "Fully Compliant",
      color: "text-green-600"
    },
    {
      level: "AAA",
      description: "Highest level accessibility",
      status: "Partially Compliant",
      color: "text-yellow-600"
    }
  ];

  const assistiveTechnologies = [
    "JAWS (Job Access With Speech)",
    "NVDA (NonVisual Desktop Access)", 
    "VoiceOver (macOS and iOS)",
    "Dragon NaturallySpeaking",
    "ZoomText and other magnification software",
    "Switch navigation devices"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16 pb-8 max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Accessibility className="w-12 h-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Accessibility Statement</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're committed to ensuring our website is accessible to everyone, regardless of ability or technology used.
          </p>
          <div className="flex items-center justify-center mt-6 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>

        {/* Commitment Statement */}
        <Card className="mb-12 bg-gradient-to-r from-primary/5 to-secondary/5">
          <CardContent className="p-8">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">Our Accessibility Commitment</h2>
            <p className="text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              At Oakley Dye Software & Design, we believe the web should be accessible to everyone. 
              We strive to ensure our website meets or exceeds the Web Content Accessibility Guidelines (WCAG) 2.1 
              Level AA standards, and we continuously work to improve the accessibility of our digital services.
            </p>
          </CardContent>
        </Card>

        {/* WCAG Compliance */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">WCAG 2.1 Compliance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              {wcagCompliance.map((level, index) => (
                <div key={index} className="p-6 bg-background/50 rounded-lg border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Level {level.level}</h3>
                    <CheckCircle className={`w-6 h-6 ${level.color}`} />
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{level.description}</p>
                  <span className={`text-sm font-medium ${level.color}`}>{level.status}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Accessibility Features */}
        <div className="space-y-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-primary">Accessibility Features</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {accessibilityFeatures.map((section, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <div className="p-2 bg-primary/10 rounded-lg mr-4">
                      {section.icon}
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Assistive Technologies */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Supported Assistive Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              Our website has been tested and works with the following assistive technologies:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {assistiveTechnologies.map((tech, index) => (
                <div key={index} className="flex items-center p-3 bg-background/50 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Browser Compatibility */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Browser & Device Compatibility</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4">Desktop Browsers</h4>
                <ul className="space-y-2">
                  {["Chrome (latest 2 versions)", "Firefox (latest 2 versions)", "Safari (latest 2 versions)", "Edge (latest 2 versions)"].map((browser, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      {browser}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Mobile Devices</h4>
                <ul className="space-y-2">
                  {["iOS Safari", "Android Chrome", "Mobile Firefox", "Samsung Internet"].map((browser, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-3" />
                      {browser}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Known Issues */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-primary">Known Issues & Limitations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We continuously work to improve accessibility. Currently known limitations include:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">
                  Some third-party embedded content may not fully meet WCAG AAA standards
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">
                  Complex animations may need to be disabled for users with vestibular disorders
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-sm text-muted-foreground">
                  We're continuously updating content to ensure all images have descriptive alt text
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Feedback Section */}
        <Card>
          <CardContent className="p-8 text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Accessibility Feedback</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              If you encounter any accessibility barriers on our website or have suggestions for improvement, 
              please let us know. Your feedback helps us create a better experience for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="mailto:accessibility@oakleydye.com">
                  Email Accessibility Team
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              We aim to respond to accessibility feedback within 48 hours
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AccessibilityPage;
