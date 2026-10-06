import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return siteConfig.allowIndexing
    ? {
        rules: { userAgent: "*", allow: "/", disallow: ["/conta", "/checkout"] },
        sitemap: `${siteConfig.url}/sitemap.xml`,
      }
    : { rules: { userAgent: "*", disallow: "/" } };
}
