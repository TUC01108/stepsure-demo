import Link from "next/link";
import { business } from "@/lib/business";

const links = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-walnut/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="focus-ring flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-walnut">
            StepSure
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-grout">
            Flooring &amp; Repair
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="focus-ring text-sm font-medium text-ink/80 transition-colors hover:text-rust"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={business.phoneHref}
          className="focus-ring rounded-full bg-walnut px-4 py-2 text-sm font-semibold text-fieldstone transition-colors hover:bg-rust"
        >
          {business.phone}
        </a>
      </div>
    </header>
  );
}
