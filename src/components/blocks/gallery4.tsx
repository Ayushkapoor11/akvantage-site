"use client";

const templates = [
  { id: "1", industry: "Retail", title: "Smoke Shop", desc: "Bold, edgy for tobacco & vape", href: "/templates/1-smoke-shop.html", icon: "🔥", bg: "from-zinc-800 to-zinc-900" },
  { id: "2", industry: "Home Services", title: "Local Service", desc: "Clean trust-building layout", href: "/templates/2-local-service.html", icon: "🔧", bg: "from-sky-950 to-ink" },
  { id: "3", industry: "Coaching", title: "Personal Brand", desc: "Sleek portfolio for coaches", href: "/templates/3-personal-brand.html", icon: "✨", bg: "from-violet-950 to-ink" },
  { id: "4", industry: "Restaurant", title: "Chinese Restaurant", desc: "Rich, appetizing layout", href: "/templates/4-chinese-restaurant.html", icon: "🥢", bg: "from-red-950 to-ink" },
  { id: "5", industry: "Creative", title: "Agency Portfolio", desc: "Modern creative showcase", href: "/templates/5-agency-portfolio.html", icon: "🎨", bg: "from-emerald-950 to-ink" },
  { id: "6", industry: "E-Commerce", title: "Online Store", desc: "Conversion-focused storefront", href: "/templates/6-ecommerce.html", icon: "🛍️", bg: "from-amber-950 to-ink" },
  { id: "7", industry: "Hospitality", title: "Restaurant", desc: "Inviting food & dining design", href: "/templates/7-restaurant.html", icon: "🍽️", bg: "from-orange-950 to-ink" },
  { id: "8", industry: "Health & Fitness", title: "Fitness Studio", desc: "High-energy gym & trainer site", href: "/templates/8-fitness-studio.html", icon: "💪", bg: "from-lime-950 to-ink" },
];

export default function Gallery4() {
  return (
    <section id="work">
      {/* Header bar */}
      <div className="border-t border-b border-dashed border-cream/[0.15] flex items-center justify-between px-6 sm:px-10 lg:px-16 py-4">
        <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/35 font-outfit">
          Selected Work — 8 Industry Templates
        </span>
        <a
          href="/gallery.html"
          className="text-[11px] text-fire font-bold tracking-widest uppercase hover:opacity-70 transition-opacity font-outfit"
        >
          View Full Gallery →
        </a>
      </div>

      {/* Horizontal scroll strip */}
      <div
        className="flex overflow-x-auto border-b border-dashed border-cream/[0.15]"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}
      >
        {templates.map((t, i) => (
          <a
            key={t.id}
            href={t.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-none w-64 p-5 group transition-colors hover:bg-fire/[0.04] ${i < templates.length - 1 ? "border-r border-dashed border-cream/[0.15]" : ""}`}
            style={{ scrollSnapAlign: "start", textDecoration: "none" }}
          >
            {/* Preview tile */}
            <div className={`w-full h-28 rounded-sm bg-gradient-to-br ${t.bg} flex items-center justify-center text-3xl mb-4`}>
              {t.icon}
            </div>
            <div className="text-[11px] text-fire font-bold tracking-[0.14em] uppercase mb-1.5 font-outfit">{t.industry}</div>
            <div className="font-fraunces italic font-bold text-cream text-base mb-1 group-hover:text-fire transition-colors">{t.title}</div>
            <div className="text-xs text-mid font-outfit font-light">{t.desc}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
