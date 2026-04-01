import Link from "next/link";
import FadeIn from "./FadeIn";

export default function GalleryTeaser() {
  return (
    <section
      id="gallery"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-ink-2 border-t border-border"
    >
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl sm:text-4xl font-fraunces italic font-black text-cream mb-4">
            See Example Designs
          </h2>
          <p className="text-lg text-mid mb-10">
            for your industry. Every site we build is tailored to your unique
            business.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-fire text-ink font-semibold rounded text-base hover:bg-orange-600 transition-all hover:-translate-y-1 shadow-lg hover:shadow-fire/20"
          >
            View Gallery →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
