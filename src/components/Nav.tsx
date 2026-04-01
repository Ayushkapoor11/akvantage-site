"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Gallery" },
    { href: "#process", label: "Process" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-ink/90 backdrop-blur-md border-b border-cream/[0.06]"
            : "bg-transparent"
        }`}
      >
        <div className="px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-fraunces italic font-black text-xl text-cream tracking-tight">
            AKVantage<span className="text-fire">.</span>
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-cream/50 hover:text-cream transition-colors tracking-wide font-outfit font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-fire text-ink text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-orange-600 transition-all font-outfit"
            >
              Book a Call
            </Link>
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-5 h-px bg-cream transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 pb-4" : "max-h-0"}`}>
          <div className="flex flex-col px-6 gap-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-cream/70 hover:text-fire transition-colors py-3 border-b border-cream/[0.07] text-sm font-medium font-outfit tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
