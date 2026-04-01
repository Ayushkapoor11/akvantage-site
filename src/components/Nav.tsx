"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-1 text-2xl font-bold">
          <span className="text-cream">AK</span>
          <span className="text-fire font-fraunces italic">.</span>
        </Link>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="#about"
            className="text-cream hover:text-fire transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-cream hover:text-fire transition-colors"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="text-cream hover:text-fire transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#how"
            className="text-cream hover:text-fire transition-colors"
          >
            How It Works
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          href="#contact"
          className="px-6 py-2 bg-fire text-ink font-semibold rounded text-sm hover:bg-orange-600 transition-colors"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
}
