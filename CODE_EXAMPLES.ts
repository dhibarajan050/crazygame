/**
 * CODE EXAMPLES & SNIPPETS
 * 
 * Copy-paste ready examples for extending the SEO system
 */

// ============================================
// 1. BASIC SLUGIFY USAGE
// ============================================

// In any component:
import { slugify } from "@/app/utils/slugify";

// Convert a title to slug
const title = "Neon Velocity";
const slug = slugify(title); // "neon-velocity"

// Build a URL
const gameUrl = `/game/${slug}`; // "/game/neon-velocity"


// ============================================
// 2. CATEGORY PAGES (Future Enhancement)
// ============================================

// Create dynamic category pages for SEO
// app/category/[category]/page.tsx

export async function generateStaticParams() {
  const categories = [
    ...new Set(games.map((g) => g.category)),
  ];

  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({ params }): Promise<Metadata> {
  const { category } = await params;
  const categoryName = category.replace(/-/g, " ");

  return {
    title: `Play Free ${categoryName} Games Online`,
    description: `Discover and play the best ${categoryName} games. Thousands of ${categoryName} games available.`,
    openGraph: {
      title: `${categoryName} Games`,
      description: `Explore our collection of ${categoryName} games.`,
    },
  };
}

export default function CategoryPage({ params }) {
  const { category } = params;
  const categoryGames = games.filter(
    (g) => g.category.toLowerCase().replace(/\s+/g, "-") === category
  );

  return (
    <div className="container mx-auto">
      <h1>{category.replace(/-/g, " ")} Games</h1>
      <div className="grid">
        {categoryGames.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}


// ============================================
// 3. BREADCRUMB SCHEMA (for better SEO)
// ============================================

// Add to app/game/[slug]/page.tsx

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://yourdomain.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: game.category,
      item: `https://yourdomain.com/category/${game.category.toLowerCase()}`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: game.title,
      item: `https://yourdomain.com/game/${slugify(game.title)}`,
    },
  ],
};

// Add to page:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(breadcrumbSchema),
  }}
/>


// ============================================
// 4. SEARCH ACTION SCHEMA (for Google search)
// ============================================

// In app/layout.tsx, add to <head>

const searchSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://yourdomain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://yourdomain.com/search?q={search_term_string}",
    },
    query_input: "required name=search_term_string",
  },
};


// ============================================
// 5. RATING SCHEMA (if you have reviews)
// ============================================

// If your games have user ratings, add to generateMetadata:

const ratingSchema = {
  "@context": "https://schema.org/",
  "@type": "VideoGame",
  name: game.title,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.5",
    ratingCount: "248",
  },
};


// ============================================
// 6. RICH RESULTS TESTING
// ============================================

// Test your structured data:
// https://search.google.com/test/rich-results

// Paste any game URL:
// https://yourdomain.com/game/neon-velocity

// Google will show:
// ✓ Detected: VideoGame
// ✓ Valid structured data
// ✓ Preview of rich result


// ============================================
// 7. TRACKING GAME PLAYS WITH ANALYTICS
// ============================================

// Install Google Analytics first:
// npm install @next/third-parties

// In your game wrapper component:

"use client";

import { useEffect } from "react";
import { useAnalytics } from "@next/third-parties/google";

export function GameTracker({ game }) {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track when user clicks play
    analytics?.gtag?.("event", "play_game", {
      game_id: game.id,
      game_title: game.title,
      game_category: game.category,
      game_url: window.location.pathname,
    });
  }, [game, analytics]);

  return null;
}


// ============================================
// 8. INTERNAL LINKING FOR SEO
// ============================================

// Related games section (improves SEO):

export function RelatedGames({ currentGame, limit = 6 }) {
  const related = games
    .filter(
      (g) =>
        g.category === currentGame.category &&
        g.id !== currentGame.id
    )
    .slice(0, limit);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
      {related.map((game) => (
        <Link
          key={game.id}
          href={`/game/${slugify(game.title)}`}
          className="text-blue-500 hover:underline"
        >
          {game.title}
        </Link>
      ))}
    </div>
  );
}


// ============================================
// 9. OPEN GRAPH IMAGE OPTIMIZATION
// ============================================

// For better social media sharing, add dynamic OG images:

export async function generateMetadata({ params }, parent): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) return {};

  // Create dynamic OG image with game title overlay
  // Using Vercel OG Image Generation (if available):
  
  return {
    openGraph: {
      images: [
        {
          url: game.thumb, // Or use dynamic image generation
          width: 1200,
          height: 630,
          alt: game.title,
          type: "image/jpeg",
        },
      ],
    },
  };
}


// ============================================
// 10. PERFORMANCE OPTIMIZATION
// ============================================

// Add to next.config.ts for caching:

export const nextConfig = {
  headers: async () => [
    {
      source: "/game/:slug",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=31536000, stale-while-revalidate=604800",
        },
      ],
    },
    {
      source: "/sitemap.xml",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400",
        },
      ],
    },
  ],
};


// ============================================
// 11. CUSTOM 404 PAGE FOR INVALID GAMES
// ============================================

// Create app/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-white mb-4">
        Game Not Found
      </h1>
      <p className="text-gray-400 text-xl mb-8">
        Sorry, the game you're looking for doesn't exist.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        Back to Home
      </Link>
    </div>
  );
}


// ============================================
// 12. GENERATE STATIC PARAMS WITH FALLBACK
// ============================================

// Alternative approach if you need fallback generation:

export async function generateStaticParams() {
  // Generate params for popular games only
  const popularGames = games
    .sort((a, b) => parseInt(b.id) - parseInt(a.id))
    .slice(0, 100); // Top 100 by ID

  return popularGames.map((game) => ({
    slug: slugify(game.title),
  }));
}

// With ISR for remaining games:
export const dynamicParams = true; // Allow other routes to be generated on demand
export const revalidate = 3600; // Regenerate after 1 hour


// ============================================
// 13. MONITORING SEO PERFORMANCE
// ============================================

// Create lib/seo-monitor.ts

export async function checkSEOMetrics(gameUrl: string) {
  try {
    const response = await fetch(gameUrl);
    const html = await response.text();

    const checks = {
      hasTitle: html.includes("<title>"),
      hasMetaDescription: html.includes('name="description"'),
      hasOGTags: html.includes("property=\"og:"),
      hasJSONLD: html.includes("application/ld+json"),
      isHTTPS: gameUrl.startsWith("https://"),
      isResponsive: html.includes('viewport'),
    };

    return checks;
  } catch (error) {
    console.error("SEO check failed:", error);
    return null;
  }
}


// ============================================
// 14. BATCH GAME IMPORT WITH URL NORMALIZATION
// ============================================

// When importing new games, ensure slug consistency:

export async function importNewGames(newGamesData: Game[]) {
  const imported = newGamesData.map((game) => ({
    ...game,
    slug: slugify(game.title), // Pre-generate slug
    slugVerified: true,
  }));

  // Check for duplicates
  const duplicateSlugs = new Set<string>();
  const seenSlugs = new Set<string>();

  imported.forEach((game) => {
    if (seenSlugs.has(game.slug)) {
      duplicateSlugs.add(game.slug);
    }
    seenSlugs.add(game.slug);
  });

  if (duplicateSlugs.size > 0) {
    console.warn("Duplicate slugs detected:", duplicateSlugs);
    // Handle duplicates - maybe append game ID
  }

  return imported;
}


// ============================================
// 15. ADVANCED: MULTI-LANGUAGE SUPPORT (Future)
// ============================================

// If you want to support multiple languages:

// Create routes:
// /en/game/[slug]
// /es/game/[slug]
// /fr/game/[slug]

export async function generateStaticParams() {
  const languages = ["en", "es", "fr"];

  return languages.flatMap((lang) =>
    games.map((game) => ({
      lang,
      slug: slugify(game.title),
    }))
  );
}

// Use in page:
export default async function GamePage({ params }) {
  const { lang, slug } = await params;
  const game = getGameBySlug(slug);

  const content = {
    en: { playButton: "Play", rating: "Rating" },
    es: { playButton: "Jugar", rating: "Calificación" },
    fr: { playButton: "Jouer", rating: "Note" },
  };

  const t = content[lang] || content["en"];

  return <div>{t.playButton}</div>;
}


// ============================================
// 16. SITEMAP INDEX FOR LARGE SITES
// ============================================

// If you ever exceed 50,000 URLs, use sitemap index:

// app/sitemap-index.xml.ts

export default function sitemapIndex(): MetadataRoute.Sitemap {
  return [
    { url: "https://yourdomain.com/sitemap-games.xml", lastModified: new Date() },
    { url: "https://yourdomain.com/sitemap-static.xml", lastModified: new Date() },
    { url: "https://yourdomain.com/sitemap-categories.xml", lastModified: new Date() },
  ];
}

export const examples = {
  total: 16,
  categories: [
    "Basic usage",
    "Category pages",
    "Structured data",
    "Analytics",
    "Performance",
    "Advanced features",
  ],
};
