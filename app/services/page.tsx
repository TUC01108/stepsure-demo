import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";
import { business } from "@/lib/business";

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Services</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Installation, repair, and honest estimates
          </h1>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {services.map((s, i) => (
          <div key={s.slug} id={s.slug} className={`scroll-mt-24 ${i > 0 ? "mt-16 border-t border-walnut/10 pt-16" : ""}`}>
            <p className="font-mono text-xs uppercase tracking-wider text-grout">0{i + 1}</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-walnut">{s.name}</h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-ink/80">{s.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-ink/75">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rust" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="mt-16 rounded-2xl bg-fieldstone p-8 text-center">
          <p className="font-display text-xl font-semibold text-walnut">Not sure which one you need?</p>
          <p className="mt-2 text-sm text-ink/70">Call and describe what you&apos;re seeing, we&apos;ll tell you straight.</p>
          <a href={business.phoneHref} className="focus-ring mt-5 inline-block rounded-full bg-walnut px-6 py-3 text-sm font-semibold text-fieldstone hover:bg-rust">
            Call {business.phone}
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
