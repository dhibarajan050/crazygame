import { MetadataRoute } from "next";
import { games } from "./mock";
import { slugify } from "./utils/slugify";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://playarenahub.com").replace(/\/$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage = {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  };

  // Game pages
  const gamePages = games.map((game:any) => ({
    url: `${SITE_URL}/game/${slugify(game.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Other pages
  const staticPages = [
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/policy`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [homepage, ...gamePages, ...staticPages];
}
