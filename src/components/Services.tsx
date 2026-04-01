import Link from "next/link";
import FadeIn from "./FadeIn";

const packages = [
  {
    name: "Get Online",
    price: "$300–500",
    billing: "one-time",
    duration: "~1 week",
    featured: false,
    description: "Perfect for getting started with a professional web presence.",
    features: [
      "5-page responsive website",
      "Basic SEO optimization",
      "Contact form",
      "Social media links",
      "One round of revisions",
    ],
  },
  {
    name: "Grow Online",
    price: "$700–1,200",
    billing: "one-time",
    duration: "2–3 weeks",
    featured: true,
    description: "Our most popular package. Everything you need to compete.",
    features: [
      "10+ page responsive website",
      "Advanced SEO & local SEO",
      "Contact forms & lead capture",
      "Blog integration",
      "Google Maps integration",
      "Analytics setup",
      "Two rounds of revisions",
    ],
  },
  {
    name: "Stay Active",
    price: "$400–800",
    billing: "per month",
    duration: "cancel anytime",
    featured: false,
    description:
      "Keep your site fresh and your customers engaged month to month.",
    features: [
      "Monthly content updates",
      "Quarterly feature additions",
      "Dedicated support",
      "Performance monitoring",
      "Security updates",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="section-label mb-4">PACKAGES</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces italic font-black text-cream mb-4">
            Choose Your Growth Plan
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Transparent pricing. No hidden fees. Pick the package that fits your
            needs.
          </p>
        </FadeIn>

        {/* Package Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {packages.map((pkg, idx) => (
            <FadeIn key={idx} className={featured(idx) ? "md:scale-105" : ""}>
              <div
                className={`relative rounded-lg p-8 h-full flex flex-col transition-all hover:shadow-xl ${
                  featured(idx)
                    ? "bg-ink-4 border-2 border-fire/50"
                    : "bg-ink-3 border border-border-2 hover:border-fire/30"
                }`}
              >
                {featured(idx) && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-fire/20 text-fire text-xs font-bold rounded">
                    POPULAR
                  </div>
                )}

                <h3 className="font-fraunces italic font-black text-xl text-cream mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-4">
                  <div className="font-bebas text-4xl text-gold mb-1">
                    {pkg.price}
                  </div>
                  <div className="text-xs text-muted uppercase tracking-wide mb-2">
                    {pkg.billing}
                  </div>
                  <div className="text-sm text-mid">{pkg.duration}</div>
                </div>

                <p className="text-muted text-sm mb-6">{pkg.description}</p>

                {/* Feature List */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-start gap-3 text-sm text-cream"
                    >
                      <span className="text-fire font-bold mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="#contact"
                  className={`w-full py-3 font-semibold rounded text-center transition-all inline-block ${
                    featured(idx)
                      ? "bg-fire text-ink hover:bg-orange-600 hover:-translate-y-1"
                      : "bg-transparent border-2 border-cream text-cream hover:border-fire hover:text-fire hover:bg-fire/5"
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function featured(idx: number): boolean {
  return idx === 1;
}
