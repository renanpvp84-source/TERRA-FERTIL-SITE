import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";
import { products } from "@/data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    ...products.map((p) => ({
      url: `${siteConfig.url}/produto/${p.id}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];
}
