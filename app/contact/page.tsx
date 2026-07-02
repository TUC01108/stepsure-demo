"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business } from "@/lib/business";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Get a real estimate</h1>
          <p className="mt-4 text-fieldstone/75">
            Tell us what&apos;s going on and where you&apos;re located. We&apos;ll follow up with next steps, not a form-letter reply.
          </p>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto grid max-w-5xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr]">
        {status === "sent" ? (
          <div className="rounded-2xl bg-fieldstone p-8">
            <p className="font-display text-2xl font-semibold text-walnut">Got it.</p>
            <p className="mt-2 text-ink/75">We&apos;ll reach out shortly to talk through next steps.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="text-sm font-semibold text-walnut">Name</label>
              <input required id="name" name="name" className="focus-ring mt-1 w-full rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-walnut">Email</label>
                <input required type="email" id="email" name="email" className="focus-ring mt-1 w-full rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-semibold text-walnut">Phone</label>
                <input id="phone" name="phone" className="focus-ring mt-1 w-full rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-semibold text-walnut">What&apos;s going on?</label>
              <textarea required id="message" name="message" rows={5} className="focus-ring mt-1 w-full rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm" />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="focus-ring rounded-full bg-walnut px-6 py-3 text-sm font-semibold text-fieldstone transition-colors hover:bg-rust disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-rust">Something went wrong, call us instead at {business.phone}.</p>
            )}
          </form>
        )}

        <div className="space-y-6">
          <div className="rounded-2xl bg-fieldstone p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-grout">Call directly</p>
            <a href={business.phoneHref} className="focus-ring mt-1 block font-display text-2xl font-semibold text-walnut hover:text-rust">
              {business.phone}
            </a>
          </div>
          <div className="rounded-2xl bg-fieldstone p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-grout">Based in</p>
            <p className="mt-1 font-display text-lg font-semibold text-walnut">{business.city}</p>
            <p className="mt-1 text-sm text-ink/70">Serving {business.serviceRadius}</p>
          </div>
          <div className="rounded-2xl bg-fieldstone p-6">
            <p className="font-mono text-xs uppercase tracking-wider text-grout">Hours</p>
            <p className="mt-1 text-sm text-ink/70">{business.hoursNote}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
