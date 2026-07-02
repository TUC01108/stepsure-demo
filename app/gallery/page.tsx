"use client";

import { useState } from "react";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { galleryItems } from "@/lib/gallery";

function GalleryTile({ item }: { item: (typeof galleryItems)[number] }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      {!failed ? (
        <Image
          src={item.file}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className="flex h-full w-full items-end p-5 transition-transform duration-300 group-hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${item.tone}, ${item.tone}cc)` }}
        >
          <p className="font-display text-sm font-semibold text-walnut/90">{item.title}</p>
        </div>
      )}
      {!failed && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-walnut/80 to-transparent p-4">
          <p className="font-display text-sm font-semibold text-fieldstone">{item.title}</p>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <section className="bg-walnut px-6 py-16 text-fieldstone">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-oak-light">Gallery</p>
          <h1 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Recent work</h1>
          <p className="mt-4 max-w-xl text-fieldstone/75">
            Drop real job photos into /public/images/gallery, tiles below fall back to a
            placeholder automatically until then.
          </p>
        </div>
      </section>
      <div className="herringbone-divider" />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryItems.map((item) => (
            <GalleryTile key={item.file} item={item} />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
