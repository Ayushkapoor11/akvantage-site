import FadeIn from "./FadeIn";
import { NeonButton } from "@/components/ui/neon-button";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and customers. No jargon—just real conversation about what success looks like for you.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We design and develop a site optimized for conversions. You get to review and approve every step of the way.",
  },
  {
    number: "03",
    title: "Launch & Support",
    description:
      "We launch your site and make sure it performs. You get ongoing support to keep things running smoothly.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <div className="section-label mb-4">PROCESS</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces italic font-black text-cream">
            How It Works
          </h2>
        </FadeIn>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, idx) => (
            <FadeIn key={idx}>
              <div className="relative">
                {/* Step Number Background */}
                <div className="absolute -top-6 left-0 font-bebas text-6xl text-fire/10">
                  {step.number}
                </div>

                {/* Card Content */}
                <div className="relative bg-ink-3 border border-border-2 rounded-lg p-8 hover:border-fire/50 transition-colors">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-fire/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="font-bebas text-2xl text-fire">
                        {step.number.split("").join("")}
                      </span>
                    </div>
                    <h3 className="font-fraunces italic font-black text-xl text-cream">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>

                {/* Connector Line (hidden on mobile, shows between items on desktop) */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-12 lg:-right-16 w-12 lg:w-16 h-1 bg-gradient-to-r from-fire/50 to-transparent"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn className="text-center mt-16">
          <p className="text-mid mb-6">
            Ready to get started? Let's talk about your project.
          </p>
          <NeonButton href="#contact" variant="solid">
            Schedule Your Call
          </NeonButton>
        </FadeIn>
      </div>
    </section>
  );
}
