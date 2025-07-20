import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Home, ArrowLeft, Search, Mail, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const helpfulLinks = [
    { href: "/", label: "Homepage", icon: <Home className="w-4 h-4" /> },
    { href: "/about", label: "About Us", icon: <Search className="w-4 h-4" /> },
    { href: "/services", label: "Our Services", icon: <Search className="w-4 h-4" /> },
    { href: "/portfolio", label: "Portfolio", icon: <Search className="w-4 h-4" /> },
    { href: "/contact", label: "Contact Us", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <div className="container max-w-4xl">
        <div className="text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="text-9xl md:text-[12rem] font-bold text-primary/10 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 bg-primary/10 rounded-3xl">
                  <AlertTriangle className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oops! Page Not Found
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              The page you're looking for seems to have wandered off into the digital wilderness. 
              Don't worry, it happens to the best of us!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="javascript:history.back()">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Link>
            </Button>
          </div>

          {/* Helpful Links */}
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Maybe you were looking for one of these?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {helpfulLinks.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="ghost"
                    className="h-auto p-4 flex flex-col items-center gap-2 hover:bg-primary/5 transition-colors"
                  >
                    <Link href={link.href}>
                      {link.icon}
                      <span className="text-sm font-medium">{link.label}</span>
                    </Link>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Fun Message */}
          <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2 text-primary">
              Still Lost? 🤔
            </h3>
            <p className="text-muted-foreground text-sm">
              If you think this page should exist or you found a broken link, 
              we'd love to hear about it! Drop us a message and we'll fix it faster than you can say "404".
            </p>
            <Button asChild className="mt-4" size="sm">
              <Link href="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Report Issue
              </Link>
            </Button>
          </div>

          {/* Footer Message */}
          <div className="mt-16 text-center">
            <p className="text-sm text-muted-foreground">
              Error Code: 404 | Page Not Found | Oakley Dye Software & Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
