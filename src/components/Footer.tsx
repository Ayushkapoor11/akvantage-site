import Link from "next/link";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Gallery" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-cream/[0.08] px-6 sm:px-10 lg:px-16 py-8">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="font-fraunces italic font-black text-lg text-cream tracking-tight">
          AKVantage<span className="text-fire">.</span>
        </Link>

        {/* Nav links */}
        <div className="flex flex-wrap gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[11px] text-cream/35 hover:text-cream transition-colors tracking-widest uppercase font-outfit"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right — email + copyright */}
        <div className="flex items-center gap-6 flex-wrap">
          <a
            href="mailto:akvantage@outlook.com"
            className="text-[12px] text-cream/35 hover:text-fire transition-colors font-outfit"
          >
            akvantage@outlook.com
          </a>
          <span className="text-[11px] text-cream/20 tracking-wide font-outfit">
            © 2026 AKVantage · Mesa, AZ
          </span>
        </div>
      </div>
    </footer>
  );
}
