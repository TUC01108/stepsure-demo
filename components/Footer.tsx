import Link from "next/link";
import { business } from "@/lib/business";

export default function Footer() {
  return (
    <footer className="bg-walnut text-fieldstone">
      <div className="herringbone-divider herringbone-divider--dark" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">StepSure Flooring &amp; Repair</p>
          <p className="mt-2 text-sm text-fieldstone/70">{business.tagline}</p>
          <p className="mt-4 font-mono text-xs uppercase tracking-wider text-oak-light">
            Serving {business.serviceRadius}
          </p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-oak-light">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-fieldstone/80">
            <li><Link className="focus-ring hover:text-oak-light" href="/services">Services</Link></li>
            <li><Link className="focus-ring hover:text-oak-light" href="/gallery">Gallery</Link></li>
            <li><Link className="focus-ring hover:text-oak-light" href="/about">About</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-oak-light">Resources</p>
          <ul className="mt-3 space-y-2 text-sm text-fieldstone/80">
            <li><Link className="focus-ring hover:text-oak-light" href="/blog">Flooring Blog</Link></li>
            <li><Link className="focus-ring hover:text-oak-light" href="/contact">Get an Estimate</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-oak-light">Contact</p>
          <ul className="mt-3 space-y-2 text-sm text-fieldstone/80">
            <li><a className="focus-ring hover:text-oak-light" href={business.phoneHref}>{business.phone}</a></li>
            <li>{business.city}</li>
            <li>{business.hoursNote}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-fieldstone/10 py-6 text-center font-mono text-[11px] uppercase tracking-wider text-fieldstone/40">
        © {new Date().getFullYear()} StepSure Flooring &amp; Repair LLC · Sample site built by Forsaeti
      </div>
    </footer>
  );
}
