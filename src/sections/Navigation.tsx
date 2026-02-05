"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Schedule", href: "#schedule" },
  { label: "Prizes", href: "#prizes" },
  { label: "FAQ", href: "#faq" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex">
            <span className="text-xl font-mono">Code</span>
            <p className="text-xl bg-neutral-200 text-black px-2 rounded-full">
              &
            </p>
            <span className="text-xl font-mono">Chaos</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-white/60 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="inline-block rounded-xl bg-gradient-to-r from-purple-600 to-red-600 p-[1.5px]">
                <MagneticButton
                className="group font-display px-3 sm:px-4 py-1 sm:py-3 bg-gradient-to-r from-neutral-950 to-neutral-900 text-neutral-199 rounded-xl flex flex-row items-center justify-center gap-2 sm:gap-3 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                strength={0.0}
              >
                <Link className="text-sm" href="https://code-and-chaos.devfolio.co/">Register Now</Link>
              </MagneticButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/98 backdrop-blur-lg lg:hidden">
          <div className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-2xl text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link
              href="https://code-and-chaos.devfolio.co/"
              className="mt-4 px-8 py-3 bg-gradient-to-r from-purple-600 to-red-600 text-white text-lg font-medium rounded-lg"
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
