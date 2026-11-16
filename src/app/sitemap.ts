import type { MetadataRoute } from "next";
import { brand } from "@/content/site";
import { projects, projectSlug } from "@/content/work";
import { servicePages } from "@/content/service-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = brand.url;
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/work", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/pricing", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
  ];

  const staticEntries = routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries = projects.map((p) => ({
    url: `${baseUrl}/work/${projectSlug(p.name)}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const serviceEntries = servicePages.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));
  return [...staticEntries, ...serviceEntries, ...projectEntries];
}
