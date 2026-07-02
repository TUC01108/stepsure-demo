"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

type GeneratedPost = {
  title: string;
  excerpt: string;
  topic: string;
  content: string[];
};

export default function AdminBlogPage() {
  const [topic, setTopic] = useState("");
  const [region, setRegion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<GeneratedPost | null>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/generate-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, region }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong.");
      } else {
        setResult(data.post);
      }
    } catch {
      setError("Network error, try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Internal tool</p>
          <h1 className="mt-3 font-display text-4xl font-semibold">Blog post generator</h1>
          <p className="mt-4 text-fieldstone/75">
            Type a topic and a local area, generate a draft, review it, then copy it into{" "}
            <code className="rounded bg-fieldstone/10 px-1.5 py-0.5 text-oak-light">lib/posts.ts</code>{" "}
            to publish. Nothing here goes live automatically, every draft gets a human read before it&apos;s public.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <form onSubmit={handleGenerate} className="flex flex-col gap-4 sm:flex-row">
          <input
            required
            placeholder="Topic, e.g. tile in bathrooms with poor ventilation"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="focus-ring flex-1 rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm"
          />
          <input
            required
            placeholder="Region, e.g. Baltimore, MD"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="focus-ring w-full rounded-lg border border-walnut/20 bg-white px-4 py-3 text-sm sm:w-56"
          />
          <button
            type="submit"
            disabled={loading}
            className="focus-ring rounded-lg bg-walnut px-6 py-3 text-sm font-semibold text-fieldstone hover:bg-rust disabled:opacity-60"
          >
            {loading ? "Generating…" : "Generate draft"}
          </button>
        </form>

        {error && (
          <div className="mt-8 rounded-2xl border border-rust/30 bg-rust/5 p-6 text-sm text-rust">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-10 rounded-2xl border border-walnut/10 p-7">
            <p className="font-mono text-[11px] uppercase tracking-wider text-grout">{result.topic} · Draft</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-walnut">{result.title}</h2>
            <p className="mt-2 text-sm italic text-ink/60">{result.excerpt}</p>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink/80">
              {result.content.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
}
