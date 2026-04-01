"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-fire/5 rounded-full blur-3xl opacity-0 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Tag Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-fire/10 border border-fire/30 transition-all duration-700 ${
            mounted ? "reveal reveal-delay-1" : "opacity-0"
          }`}
        >
          <div className="w-2 h-2 bg-fire rounded-full blink"></div>
          <span className="text-sm font-semibold text-cream">
            Available for Projects
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-fraunces italic font-black leading-tight mb-6 transition-all duration-700 ${
            mounted ? "reveal reveal-delay-2" : "opacity-0"
          }`}
        >
          We build websites that{" "}
          <span className="text-fire">actually</span> get customers.
        </h1>

        {/* Gradient Rule */}
        <div
          className={`h-1 max-w-xs mx-auto mb-6 gradient-rule transition-all duration-700 ${
            mounted ? "reveal reveal-delay-3" : "opacity-0"
          }`}
        ></div>

        {/* Subtext */}
        <p
          className={`text-lg sm:text-xl text-mid mb-10 max-w-2xl mx-auto transition-all duration-700 ${
            mounted ? "reveal reveal-delay-3" : "opacity-0"
          }`}
        >
          Strategic design and development for local businesses that want to
          thrive online. No fluff, no buzzwords—just results.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${
            mounted ? "reveal reveal-delay-4" : "opacity-0"
          }`}
        >
          <Link
            href="#contact"
            className="px-8 py-4 bg-fire text-ink font-semibold rounded text-base hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-fire/20"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="#services"
            className="px-8 py-4 bg-transparent border-2 border-cream text-cream font-semibold rounded text-base hover:border-fire hover:text-fire transition-all hover:bg-fire/5"
          >
            See Our Work →
          </Link>
        </div>

        {/* Stats Row */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-20 transition-all duration-700 ${
            mounted ? "reveal reveal-delay-5" : "opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="font-bebas text-4xl text-gold mb-1">8+</div>
            <div className="text-sm text-muted">Templates Ready</div>
          </div>
          <div className="text-center">
            <div className="font-bebas text-4xl text-gold mb-1">2–3 wk</div>
            <div className="text-sm text-muted">Launch Time</div>
          </div>
          <div className="text-center">
            <div className="font-bebas text-4xl text-gold mb-1">Mesa, AZ</div>
            <div className="text-sm text-muted">Local & Proud</div>
          </div>
        </div>
      </div>
    </section>
  );
}
