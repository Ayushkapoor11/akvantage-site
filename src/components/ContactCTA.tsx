import FadeIn from "./FadeIn";
import ContactForm from "./ContactForm";

export default function ContactCTA() {
  return (
    <section id="contact" className="py-24 sm:py-32 px-6 sm:px-10 lg:px-16 border-t border-cream/[0.08] scroll-mt-20">
      <div className="max-w-screen-xl mx-auto">

        <FadeIn>
          <div className="flex items-center gap-4 mb-16">
            <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-cream/35 font-outfit">Contact</span>
            <div className="flex-1 border-t border-cream/[0.08]" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — heading + contact info */}
          <FadeIn>
            <h2
              className="font-fraunces italic font-black text-cream leading-none mb-6"
              style={{ fontSize: "clamp(36px, 4.5vw, 64px)" }}
            >
              Let&apos;s build<br />something.
            </h2>
            <p className="text-[15px] text-mid font-light leading-relaxed mb-12 max-w-sm font-outfit">
              Ready to take your online presence to the next level? Fill out the form or reach out directly.
            </p>

            {/* Contact rows */}
            <div className="flex flex-col">
              <a
                href="mailto:akvantage@outlook.com"
                className="flex items-center gap-5 py-5 border-b border-cream/[0.08] group"
              >
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream/30 w-14 font-outfit">Email</span>
                <span className="text-[15px] text-cream group-hover:text-fire transition-colors font-outfit">akvantage@outlook.com</span>
              </a>
              <a
                href="tel:+14256919005"
                className="flex items-center gap-5 py-5 border-b border-cream/[0.08] group"
              >
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream/30 w-14 font-outfit">Phone</span>
                <span className="text-[15px] text-cream group-hover:text-fire transition-colors font-outfit">(425) 691-9005</span>
              </a>
              <div className="flex items-center gap-5 py-5">
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-cream/30 w-14 font-outfit">Hours</span>
                <span className="text-[15px] text-mid font-outfit">Sat &amp; Sun · 9am–5pm MST</span>
              </div>
            </div>
          </FadeIn>

          {/* Right — form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
