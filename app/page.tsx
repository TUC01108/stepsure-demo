import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { business, serviceAreaRegions } from "@/lib/business";
import { services } from "@/lib/services";
import { testimonials } from "@/lib/testimonials";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const recentPosts = getAllPosts().slice(0, 3);

  return (
    <div className="min-h-screen">
      <Nav />

      <section className="bg-walnut text-fieldstone">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">
              {business.city} · Serving {business.serviceRadius}
            </p>
            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              Floors that get fixed right the first time.
            </h1>
            <p className="mt-6 max-w-md text-lg text-fieldstone/75">
              {business.tagline}. Installation and repair for hardwood, tile,
              LVP, and carpet, done by people who tell you what&apos;s actually
              wrong before they tell you what it costs.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={business.phoneHref}
                className="focus-ring rounded-full bg-oak px-6 py-3 text-sm font-semibold text-walnut transition-transform hover:scale-[1.03] hover:bg-oak-light"
              >
                Call {business.phone}
              </a>
              <Link
                href="/contact"
                className="focus-ring rounded-full border border-fieldstone/30 px-6 py-3 text-sm font-semibold text-fieldstone transition-colors hover:border-oak-light hover:text-oak-light"
              >
                Request an estimate
              </Link>
            </div>
          </div>
          <BeforeAfterSlider />
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-grout">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-walnut md:text-4xl">
              Three ways we help
            </h2>
          </div>
          <Link href="/services" className="focus-ring hidden text-sm font-semibold text-rust hover:underline md:block">
            See all services →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.slug}
              className="group rounded-2xl border border-walnut/10 bg-white/60 p-7 transition-shadow hover:shadow-xl hover:shadow-walnut/10"
            >
              <h3 className="font-display text-xl font-semibold text-walnut">{s.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">{s.short}</p>
              <Link
                href={`/services#${s.slug}`}
                className="focus-ring mt-5 inline-block text-sm font-semibold text-rust group-hover:underline"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-fieldstone">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-grout">Service area</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold text-walnut md:text-4xl">
            Based in {business.city}, working across a {business.serviceRadius}
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-walnut/10 sm:grid-cols-2 md:grid-cols-3">
            {serviceAreaRegions.map((r) => (
              <div key={r.label} className="bg-fieldstone p-6">
                <p className="font-display text-lg font-semibold text-walnut">{r.label}</p>
                <p className="mt-1 text-sm text-ink/70">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-walnut text-fieldstone">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">What people say</p>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote key={t.name} className="border-l-2 border-oak pl-5">
                <p className="text-fieldstone/85">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-4 font-mono text-xs uppercase tracking-wider text-oak-light">
                  {t.name} · {t.location}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-grout">From the blog</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-walnut md:text-4xl">
              Local flooring guides
            </h2>
          </div>
          <Link href="/blog" className="focus-ring hidden text-sm font-semibold text-rust hover:underline md:block">
            Read the blog →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {recentPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="focus-ring group rounded-2xl border border-walnut/10 bg-white/60 p-6 transition-shadow hover:shadow-xl hover:shadow-walnut/10"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-grout">{p.region}</p>
              <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-walnut group-hover:text-rust">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-ink/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
