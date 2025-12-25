"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isJourneysListingPage = pathname === "/journeys";
  const isJourneyDetailPage = pathname?.startsWith("/journeys/") && pathname !== "/journeys";
  const isWorkFromHimalayasPage = pathname === "/work-from-the-himalayas";
  const shouldUseWhiteText = isHomePage || isJourneysListingPage || isWorkFromHimalayasPage;
  const shouldUseDarkText = !shouldUseWhiteText;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#philosophy", label: "Philosophy" },
    { href: "/work-from-the-himalayas", label: "Work From the Himalayas" },
    { href: "/journeys", label: "Journeys" },
    { href: "/enquire", label: "Enquire" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileMenuOpen(false);
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (shouldUseWhiteText && scrolled) || shouldUseDarkText || isJourneyDetailPage
          ? "bg-[#f8f6f3]/98 backdrop-blur-sm border-b border-[#e8e6e3]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-start transition-opacity hover:opacity-80"
            style={{ backgroundColor: 'transparent' }}
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <Logo 
              className={`h-16 md:h-20 w-auto ${
                shouldUseWhiteText && !scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              if (link.href.startsWith("#")) {
                return (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleSmoothScroll(e as any, link.href);
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:opacity-70 ${
                      shouldUseWhiteText && !scrolled ? "text-white/90" : "text-[#4a5560]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:opacity-70 ${
                    shouldUseWhiteText && !scrolled ? "text-white/90" : "text-[#4a5560]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              shouldUseWhiteText && !scrolled ? "text-white" : "text-[#2d3a47]"
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4">
            {navLinks.map((link) => {
              if (link.href.startsWith("#")) {
                return (
                  <Link
                    key={link.href}
                    href={`/${link.href}`}
                    onClick={(e) => {
                      if (isHomePage) {
                        e.preventDefault();
                        handleSmoothScroll(e as any, link.href);
                      }
                    }}
                    className={`block text-base font-medium transition-colors ${
                      shouldUseWhiteText && !scrolled ? "text-white/90" : "text-[#4a5560]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block text-base font-medium transition-colors ${
                    scrolled || !isHomePage ? "text-[#4a5560]" : "text-white/90"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}

