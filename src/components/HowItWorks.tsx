import FadeIn from "./FadeIn";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    body: "We learn about your business, goals, and customers. No jargon—just real conversation about what success looks like for you.",
  },
  {
    num: "02",
    title: "Design & Build",
    body: "We design and develop a site optimized for conversions. You get to review and approve every step of the way.",
    accent: true,
  },
  {
    num: "03",
    title: "Launch & Support",
    body: "We launch your site and make sure it performs. You get ongoing support to keep things running smoothly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/[0.08] scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/35 font-outfit">Process</span>
            <div className="flex-1 border-t border-cream/[0.08]" />
          </div>
          <h2 className="font-fraunces italic font-black text-cream leading-tight mb-16" style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}>
            How It Works
          </h2>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ background: "rgba(240,239,235,0.07)", gap: "1px" }}>
          {steps.map((step) => (
            <FadeIn key={step.num}>
              <div className={`relative p-10 bg-ink ${step.accent ? "border-t-2 border-t-fire" : ""}`}>
                {/* Giant faded step number */}
                <div className="font-bebas text-fire/15 leading-none mb-4 select-none"
                  style={{ fontSize: "clamp(72px, 8vw, 110px)" }}>
                  {step.num}
                </div>
                <h3 className="font-fraunces italic font-bold text-cream text-xl mb-4">{step.title}</h3>
                <p className="text-[14px] text-mid font-light leading-relaxed font-outfit">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn>
          <div className="mt-14 flex items-center justify-between flex-wrap gap-6">
            <p className="text-[15px] text-mid font-light italic font-fraunces">
              Ready to get started? Let&apos;s talk about your project.
            </p>
            <a
              href="#contact"
              className="px-8 py-3.5 bg-fire text-ink text-xs font-bold tracking-widest uppercase rounded-sm hover:bg-orange-600 transition-all font-outfit"
            >
              Schedule Your Call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
