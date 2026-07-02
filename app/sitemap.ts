import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";

const BASE_URL = "https://stepsure-demo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/services", "/about", "/gallery", "/blog", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const postPages = getAllPosts().map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
  }));

  return [...staticPages, ...postPages];
}
