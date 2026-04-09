import { Link } from "wouter";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <img 
                src="/logo-white.jpg" 
                alt="ARCHIS TECHNOLOGY" 
                className="h-16 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              We are offering a comprehensive range of IT services designed to meet the diverse needs of our clients.
            </p>
            <div className="flex gap-4 pt-4">
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <Facebook size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-slate-400 hover:text-white hover:bg-white/10">
                <Instagram size={20} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Programs", href: "/programs" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Services */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">Quick Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-slate-300">Web Development</li>
              <li className="text-sm text-slate-300">Software Development</li>
              <li className="text-sm text-slate-300">UX & UI</li>
              <li className="text-sm text-slate-300">Mobile Application Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4 text-white">India</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 shrink-0" />
                <p className="text-sm text-slate-300 leading-relaxed">
                  A-1113, Siddhi Vinayak towers, Near Kataria Arcade, Sarkhej, Ahmedabad
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+919722641969" className="text-sm text-slate-300 hover:text-primary transition-colors">
                  9722641969
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@archistechnology.com" className="text-sm text-slate-300 hover:text-primary transition-colors">
                  info@archistechnology.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-400">
            Copyright © 2026 ARCHIS Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
