import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink-2 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-fraunces italic font-black text-cream mb-4">
            Let's build something.
          </h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Ready to take your online presence to the next level? Fill out the
            form below or reach out directly.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Direct CTAs */}
          <FadeIn>
            <div className="space-y-8">
              <h3 className="font-fraunces italic font-black text-xl text-cream">
                Get in Touch
              </h3>

              {/* Email CTA */}
              <a
                href="mailto:akvantage@outlook.com"
                className="flex items-center gap-4 p-6 bg-ink-3 rounded-lg border border-border-2 hover:border-fire/50 transition-all group"
              >
                <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-fire/30 transition-colors">
                  <span className="text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-sm text-muted">Email</div>
                  <div className="text-cream font-semibold">
                    akvantage@outlook.com
                  </div>
                </div>
              </a>

              {/* Phone CTA */}
              <a
                href="tel:+14256919005"
                className="flex items-center gap-4 p-6 bg-ink-3 rounded-lg border border-border-2 hover:border-fire/50 transition-all group"
              >
                <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-fire/30 transition-colors">
                  <span className="text-xl">📱</span>
                </div>
                <div>
                  <div className="text-sm text-muted">Phone</div>
                  <div className="text-cream font-semibold">(425) 691-9005</div>
                </div>
              </a>

              {/* Hours */}
              <div className="p-6 bg-ink-3 rounded-lg border border-border-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-fire/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🕐</span>
                  </div>
                  <div>
                    <div className="text-sm text-muted mb-1">Hours</div>
                    <div className="text-cream font-semibold text-sm">
                      Saturday & Sunday
                    </div>
                    <div className="text-muted text-sm">9am–5pm MST</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Contact Form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
