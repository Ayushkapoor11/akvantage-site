"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10 lg:px-16 pt-28 pb-16 overflow-hidden bg-ink">

      {/* Eyebrow */}
      <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-fire" />
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/40 font-outfit">
          Mesa, AZ &nbsp;/&nbsp; Web Design &amp; Development
        </span>
      </div>

      {/* Brand name — viewport-filling */}
      <div
        className={`font-fraunces italic font-black leading-[0.88] tracking-tight text-cream mb-6 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        style={{ fontSize: "clamp(52px, 15.5vw, 220px)" }}
      >
        AKVantage<span className="text-fire">.</span>
      </div>

      {/* Sub-headline + descriptor */}
      <div className={`flex flex-col gap-3 max-w-2xl mb-12 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <p className="font-fraunces italic font-bold text-fire leading-tight"
           style={{ fontSize: "clamp(20px, 2.8vw, 38px)" }}>
          Websites that get customers.
        </p>
        <p className="text-base text-mid font-light leading-relaxed max-w-md font-outfit">
          Strategic design and development for local businesses that want to thrive online. No fluff—just results.
        </p>
      </div>

      {/* CTAs */}
      <div className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 bg-fire text-ink text-sm font-bold tracking-widest uppercase rounded-sm hover:bg-orange-600 transition-all hover:-translate-y-px font-outfit"
        >
          Book a Free Consultation
        </a>
        <a
          href="#work"
          className="inline-block px-8 py-3.5 border border-cream/20 text-cream text-sm font-medium rounded-sm hover:border-fire hover:text-fire transition-all font-outfit"
        >
          See Our Work →
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-cream/10 mb-10" />

      {/* Stats */}
      <div className={`flex gap-12 sm:gap-20 flex-wrap transition-all duration-700 delay-400 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        <div>
          <div className="font-bebas text-4xl text-gold leading-none">8+</div>
          <div className="text-[11px] text-cream/35 tracking-widest uppercase mt-1 font-outfit">Templates Ready</div>
        </div>
        <div>
          <div className="font-bebas text-4xl text-gold leading-none">2–3 wk</div>
          <div className="text-[11px] text-cream/35 tracking-widest uppercase mt-1 font-outfit">Launch Time</div>
        </div>
        <div>
          <div className="font-bebas text-4xl text-gold leading-none">Mesa, AZ</div>
          <div className="text-[11px] text-cream/35 tracking-widest uppercase mt-1 font-outfit">Local &amp; Proud</div>
        </div>
      </div>
    </section>
  );
}
