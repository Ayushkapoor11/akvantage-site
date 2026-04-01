import FadeIn from "./FadeIn";

const packages = [
  {
    tier: "Starter",
    name: "Get Online",
    price: "$300–500",
    billing: "One-time · ~1 week",
    description: "Perfect for getting started with a professional web presence.",
    features: ["5-page responsive website", "Basic SEO optimization", "Contact form", "Social media links", "One round of revisions"],
    featured: false,
  },
  {
    tier: "Growth",
    name: "Grow Online",
    price: "$700–1,200",
    billing: "One-time · 2–3 weeks",
    description: "Our most popular package. Everything you need to compete.",
    features: ["10+ page responsive website", "Advanced SEO & local SEO", "Contact forms & lead capture", "Blog integration", "Google Maps integration", "Analytics setup", "Two rounds of revisions"],
    featured: true,
  },
  {
    tier: "Retainer",
    name: "Stay Active",
    price: "$400–800",
    billing: "Per month · Cancel anytime",
    description: "Keep your site fresh and your customers engaged month to month.",
    features: ["Monthly content updates", "Quarterly feature additions", "Dedicated support", "Performance monitoring", "Security updates"],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/[0.08] scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">

        <FadeIn>
          <div className="flex items-start justify-between gap-8 mb-16 flex-wrap">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/35 font-outfit mb-4">Packages</div>
              <h2 className="font-fraunces italic font-black text-cream leading-tight" style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>
                Choose Your Growth Plan
              </h2>
            </div>
            <p className="text-[14px] text-mid max-w-[240px] text-right leading-relaxed font-outfit font-light self-end">
              Transparent pricing. No hidden fees. Pick the package that fits your needs.
            </p>
          </div>
        </FadeIn>

        {/* Package grid — separated by 1px lines */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ background: "rgba(240,239,235,0.07)", gap: "1px" }}>
          {packages.map((pkg) => (
            <FadeIn key={pkg.name}>
              <div className={`flex flex-col p-10 bg-ink h-full relative ${pkg.featured ? "border-t-2 border-t-fire" : ""}`}>
                {pkg.featured && (
                  <span className="absolute top-5 right-5 bg-fire text-ink text-[10px] font-bold tracking-widest uppercase px-2.5 py-1">POPULAR</span>
                )}
                <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-cream/30 font-outfit mb-4">{pkg.tier}</div>
                <div className="font-fraunces italic font-black text-cream text-2xl mb-4">{pkg.name}</div>
                <div className="font-bebas text-5xl text-gold leading-none mb-1">{pkg.price}</div>
                <div className="text-[11px] text-cream/30 tracking-widest uppercase mb-4 font-outfit">{pkg.billing}</div>
                <p className="text-[13px] text-mid font-light leading-relaxed mb-8 font-outfit">{pkg.description}</p>
                <div className="border-t border-cream/[0.08] mb-6" />
                <ul className="flex flex-col gap-2.5 mb-10 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[13px] text-cream/60 font-outfit">
                      <span className="text-fire mt-px">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full text-center py-3 text-xs font-bold tracking-widest uppercase rounded-sm transition-all font-outfit ${
                    pkg.featured
                      ? "bg-fire text-ink hover:bg-orange-600"
                      : "border border-cream/20 text-cream hover:border-fire hover:text-fire"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
