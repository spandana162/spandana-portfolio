import type { MetadataRoute } from "next";
import { projects } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://spandana-portfolio.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    ...projects.map((p) => ({ url: `${base}/projects/${p.slug}`, lastModified: new Date() })),
  ];
}
