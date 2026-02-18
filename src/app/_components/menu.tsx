"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Menu as MenuIcon, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  // { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  // { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const Menu: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.85]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-3"
      style={{}}
    >
      {/* Floating pill nav */}
      <motion.div
        className="relative flex items-center justify-between w-full max-w-6xl rounded-2xl px-4 py-2"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `oklch(0.065 0.008 265 / ${v})`),
          borderColor: useTransform(borderOpacity, (v) => `oklch(1 0 0 / ${v * 0.08})`),
          borderWidth: "1px",
          borderStyle: "solid",
          backdropFilter: useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]) as unknown as string,
          WebkitBackdropFilter: useTransform(scrollY, [0, 80], ["blur(0px)", "blur(16px)"]) as unknown as string,
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logo.webp"
            alt="Oakley Dye Software & Design"
            className="h-8 w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                )}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0 rounded-lg bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold glow-red-sm transition-all duration-300"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="sm" className="text-foreground hover:bg-white/5">
              <MenuIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-card/95 backdrop-blur-xl border-l border-glass-border p-0"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between px-6 py-4 border-b border-glass-border">
                <img src="/logo.webp" alt="Logo" className="h-7 w-auto" style={{ filter: "brightness(0) invert(1)" }} />
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navigation.map((item, i) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                          isActive
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                        )}
                      >
                        {item.name}
                        <ChevronRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="px-4 py-6 border-t border-glass-border">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-red-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </motion.div>
    </motion.header>
  );
};

export default Menu;
