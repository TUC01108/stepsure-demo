import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">About</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Local, straightforward, and around for the long haul
          </h1>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="space-y-6 leading-relaxed text-ink/80">
          <p>
            StepSure Flooring &amp; Repair is based in {business.city}, working
            on homes and businesses across the greater Philadelphia region. We
            started the way most trades businesses do: doing the work
            ourselves, showing up when we said we would, and fixing what was
            actually wrong instead of what was easiest to bill.
          </p>
          <p>
            That&apos;s still the whole approach. Every job starts with a real
            diagnosis, not a sales pitch, whether that&apos;s a full hardwood
            installation or a single cracked tile. We&apos;d rather tell you a
            repair will hold for years than upsell you into a replacement you
            don&apos;t need, and we&apos;d rather tell you a floor needs to come up than
            patch something that&apos;s going to fail again in six months.
          </p>
          <p>
            We work on hardwood, engineered wood, LVP, laminate, tile, and
            carpet, for homeowners, property managers, and small businesses
            throughout the region.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { label: "Years serving the region", value: "10+" },
            { label: "Materials installed", value: "6" },
            { label: "Service radius", value: "2–4 hrs" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-fieldstone p-6 text-center">
              <p className="font-display text-3xl font-semibold text-walnut">{stat.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-grout">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
