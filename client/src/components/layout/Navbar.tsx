import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Brain, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/hire-developers", label: "Hire Talent" },
    { href: "/contact", label: "Contact" },
  ];

  const courseLinks = [
    { href: "/programs/ai-ml-internship", label: "AI/ML" },
    { href: "/programs/data-science", label: "Data Science" },
    { href: "/programs/deep-learning", label: "Data Analysis" },
    { href: "/full-stack", label: "Full Stack" },
    { href: "/digital-marketing", label: "Digital Marketing" },
  ];

  const navItemsWithCourse = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { type: "dropdown", label: "Course" },
    { href: "/hire-developers", label: "Hire Talent" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center gap-2">
            <img 
              src="/Archis Logo purpal.png" 
              alt="ARCHIS TECHNOLOGY Logo" 
              className="h-16 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItemsWithCourse.map((item) => 
            item.type === "dropdown" ? (
              <DropdownMenu key="course">
                <DropdownMenuTrigger asChild>
                  <button className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 ${
                    courseLinks.some(link => location === link.href)
                      ? "text-primary font-semibold"
                      : "text-muted-foreground"
                  }`}>
                    {item.label}
                    <ChevronDown size={16} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {courseLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : item.href ? (
              <Link 
                key={item.href} 
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === item.href
                    ? "text-primary font-semibold"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ) : null
          )}

          <Link href="/programs">
            <Button variant="default" className="ml-4 bg-primary hover:bg-primary/90 rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/"
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === "/"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  href="/about"
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === "/about"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>

                {/* Mobile Course Menu */}
                <div className="py-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-3">Courses</p>
                  <div className="flex flex-col gap-3 pl-2">
                    {courseLinks.map((link) => (
                      <Link 
                        key={link.href} 
                        href={link.href}
                        className="text-base font-medium transition-colors hover:text-primary text-muted-foreground"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/hire-developers"
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === "/hire-developers"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Hire Talent
                </Link>

                <Link 
                  href="/contact"
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    location === "/contact"
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <Link href="/programs">
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-4 rounded-full" onClick={() => setIsOpen(false)}>
                    Join as Student
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
