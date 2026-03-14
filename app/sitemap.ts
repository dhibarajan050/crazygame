import { MetadataRoute } from "next";
import { games } from "./mock";
import { slugify } from "./utils/slugify";

export default function sitemap(): MetadataRoute.Sitemap {
  // Homepage
  const homepage = {
    url: "https://yourdomain.com",
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 1,
  };

  // Game pages
  const gamePages = games.map((game) => ({
    url: `https://yourdomain.com/game/${slugify(game.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Other pages
  const staticPages = [
    {
      url: "https://yourdomain.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://yourdomain.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: "https://yourdomain.com/policy",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  return [homepage, ...gamePages, ...staticPages];
}
