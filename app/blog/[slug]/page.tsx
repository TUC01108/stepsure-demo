import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      <Nav />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/blog" className="focus-ring text-sm font-semibold text-rust hover:underline">
          ← All guides
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-grout">
          <span>{post.region}</span>
          <span>·</span>
          <span>{post.topic}</span>
          <span>·</span>
          <span>{post.readMins} min read</span>
          {post.aiGenerated && (
            <span className="rounded-full bg-fieldstone px-2 py-0.5 text-walnut">AI-assisted, human reviewed</span>
          )}
        </div>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-walnut">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 leading-relaxed text-ink/85">
          {post.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-fieldstone p-8 text-center">
          <p className="font-display text-xl font-semibold text-walnut">Dealing with this in your own home?</p>
          <p className="mt-2 text-sm text-ink/70">Call and we&apos;ll walk you through what to do next.</p>
          <a
            href={business.phoneHref}
            className="focus-ring mt-5 inline-block rounded-full bg-walnut px-6 py-3 text-sm font-semibold text-fieldstone hover:bg-rust"
          >
            Call {business.phone}
          </a>
        </div>
      </article>
      <Footer />
    </div>
  );
}
