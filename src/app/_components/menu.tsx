"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Button } from "@/components/ui/button";
import { Menu as MenuIcon, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

const Menu: React.FC = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" }
  ];
  
  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 bg-red-900 backdrop-blur supports-[backdrop-filter]:bg-red-900/95 border-b h-16">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/">
            <img
              src={`/logo.webp`}
              alt="Logo"
              className="h-auto cursor-pointer"
              style={{ width: isMobile ? "40%" : "20%" }}
            />
          </Link>
          
          {!isMobile ? (
            <nav className="flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-white transition-colors hover:text-gray-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </Button>
          )}
        </div>
        
        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-red-900 border-b shadow-lg">
            <nav className="container py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 px-4 text-sm font-medium text-white transition-colors hover:text-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </React.Fragment>
  );
};

export default Menu;
