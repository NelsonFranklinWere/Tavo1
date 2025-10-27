"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-primary-900/80 backdrop-blur-lg border-b border-primary-800/50 shadow-2xl"
            : "bg-primary-900/20 backdrop-blur-sm md:bg-primary-900"
        )}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-brand-500 hover:scale-105 transition-transform duration-300">
              TAVO
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-accent-400 transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/reservations"
                className="px-6 py-2 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 text-white rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30 hover:scale-105 text-sm font-bold"
              >
                Reserve Table
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white hover:text-accent-400 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-primary-900/95 backdrop-blur-lg border-t border-primary-800 shadow-2xl">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-neutral-300 hover:text-accent-400 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/reservations"
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 bg-gradient-to-r from-accent-500 to-brand-500 hover:from-accent-400 hover:to-brand-400 text-white rounded-full transition-all duration-300 text-center font-bold mt-2"
                >
                  Reserve Table
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
