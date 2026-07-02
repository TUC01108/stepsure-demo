import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Blog</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
            Flooring guides for the Philadelphia region
          </h1>
          <p className="mt-4 max-w-xl text-fieldstone/75">
            Local, practical, and specific to the towns and climate we actually work in.
          </p>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-8">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="focus-ring group block rounded-2xl border border-walnut/10 p-7 transition-shadow hover:shadow-xl hover:shadow-walnut/10"
            >
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-grout">
                <span>{p.region}</span>
                <span>·</span>
                <span>{p.topic}</span>
                <span>·</span>
                <span>{p.readMins} min read</span>
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold text-walnut group-hover:text-rust">
                {p.title}
              </h2>
              <p className="mt-3 text-sm text-ink/70">{p.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
