import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">
                <span className="text-cream">AK</span>
                <span className="text-fire font-fraunces italic">.</span>
              </span>
            </div>
            <p className="text-muted text-sm">
              Web design and development for local businesses that want to
              thrive online.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#how"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Get in Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:akvantage@outlook.com"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  akvantage@outlook.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+14256919005"
                  className="text-muted hover:text-fire transition-colors text-sm"
                >
                  (425) 691-9005
                </a>
              </li>
              <li className="text-muted text-sm">
                Mesa, Arizona
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © 2026 AKVantage · Mesa, AZ
          </p>
          <div className="flex items-center gap-6">
            <a
              href="mailto:akvantage@outlook.com"
              className="text-muted hover:text-fire transition-colors text-sm"
            >
              Email
            </a>
            <a
              href="tel:+14256919005"
              className="text-muted hover:text-fire transition-colors text-sm"
            >
              Phone
            </a>
            <a
              href="#gallery"
              className="text-muted hover:text-fire transition-colors text-sm"
            >
              Gallery
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
