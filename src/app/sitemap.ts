import type { MetadataRoute } from "next";
import { allRoutes } from "@/lib/routes";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allRoutes.map((route) => ({
    url: `${site.url}${route.href === "/" ? "" : route.href}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
