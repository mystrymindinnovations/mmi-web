
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetClose,
  SheetTitle, 
   SheetDescription,
} from "@/components/ui/sheet";
import { Accordion } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/section/about" },
  { label: "Services", href: "/section/services" },
  { label: "Career", href: "/section/careers" },
  { label: "Contact Us", href: "/section/contact" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-slide-in-from-top">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="mr-4 flex">
          <Logo />
        </div>
        <div className="flex items-center">
          <nav className="hidden items-center space-x-0 md:flex md:space-x-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Button
                  variant="ghost"
                  asChild
                  className="px-2 text-xs lg:px-3 lg:text-sm xl:text-base hover:bg-transparent hover:text-foreground focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                  <Link href={link.href} className="nav-link">
                    <span className="nav-text-gradient">{link.label}</span>
                  </Link>
                </Button>
              </div>
            ))}
          </nav>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:btn-gradient data-[state=open]:text-white"
              >
                <Menu className="h-5 w-5 text-primary data-[state=open]:text-brand-orange" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-white text-foreground border-none">
              <SheetHeader className="flex flex-col items-start">
  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
  <SheetDescription className="sr-only">
    This is the mobile navigation drawer
  </SheetDescription>

                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="hover:text-brand-orange">
                    <ArrowLeft className="h-5 w-5" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </SheetHeader>

              <Separator className="my-4 bg-border" />

              <div className="flex flex-col space-y-2">
                <Accordion type="single" collapsible className="w-full">
                  {navLinks.map((link) => (
                    <div key={link.label} className="border-b">
                      <Link
                        href={link.href}
                        className="py-3 text-lg font-semibold flex items-center"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span className="nav-text-gradient">{link.label}</span>
                      </Link>
                    </div>
                  ))}
                </Accordion>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
