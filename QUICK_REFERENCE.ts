/**
 * QUICK REFERENCE - SEO Game Pages
 */

// ============================================
// File Structure
// ============================================
// app/
//   utils/
//     slugify.ts                 ← Convert titles to slugs
//   game/
//     [slug]/
//       page.tsx                 ← Dynamic game pages (6000+ pages)
//   sitemap.ts                   ← XML sitemap generator
//   robots.ts                    ← Robots.txt generator
//   components/
//     GameCard.jsx               ← Updated to use slug-based links

// ============================================
// Core Functions
// ============================================

// 1. SLUGIFY - Convert title to URL slug
// 
// import { slugify } from '@/app/utils/slugify';
// 
// slugify("Neon Velocity")        // → "neon-velocity"
// slugify("Idle Sprint Race 3D") // → "idle-sprint-race-3d"
// slugify("Hyper Cakes")          // → "hyper-cakes"

// ============================================
// Dynamic Game Pages
// ============================================

// generateStaticParams()
// - Runs at BUILD TIME
// - Pre-generates all 6000+ game pages
// - Creates static HTML files
// - Result: Zero runtime overhead
// - Google can crawl all pages immediately

// generateMetadata()
// - Runs at BUILD TIME (for static pages)
// - Generates unique SEO metadata per game
// - Includes:
//   ✓ Title: "Play {title} Online Free - {category}"
//   ✓ Description: Game description (truncated to 160 chars)
//   ✓ Keywords: Category + game tags
//   ✓ OpenGraph: Image, title, description
//   ✓ Twitter Card: Summary with large image
//   ✓ Robots: index=true, follow=true

// ============================================
// SEO Features
// ============================================

// 1. SEMANTIC URLS
//    Old: /game/Neon%20Velocity?game={JSON}
//    New: /game/neon-velocity
//    ✓ Better for SEO
//    ✓ Keyword-rich
//    ✓ Human-readable

// 2. STATIC GENERATION
//    ✓ All pages pre-built at deploy time
//    ✓ Zero latency for users
//    ✓ Perfect for crawlers (all pages exist)
//    ✓ Edge caching friendly

// 3. STRUCTURED DATA (JSON-LD)
//    ✓ VideoGame schema from schema.org
//    ✓ Helps Google understand content
//    ✓ Rich snippets in search results
//    ✓ Knowledge Graph integration

// 4. OPEN GRAPH TAGS
//    ✓ Better social media previews
//    ✓ Thumbnail + title + description
//    ✓ Increases click-through on social

// ============================================
// URLs Created
// ============================================

// Homepage
// http://yourdomain.com/

// Game pages (6000+ variations)
// http://yourdomain.com/game/neon-velocity
// http://yourdomain.com/game/idle-sprint-race-3d
// http://yourdomain.com/game/knife-ring-io
// http://yourdomain.com/game/hyper-cakes
// ... 6196 more

// Sitemap (for search engines)
// http://yourdomain.com/sitemap.xml

// Robots
// http://yourdomain.com/robots.txt

// ============================================
// Build & Deploy
// ============================================

// 1. Build command:
//    npm run build
//    (or: pnpm build, yarn build)

// 2. What happens:
//    - generateStaticParams() creates all routes
//    - generateMetadata() generates metadata
//    - Creates static HTML files
//    - First build: 2-5 minutes (one-time)
//    - Rebuilds: ~1-2 minutes (incremental)

// 3. Deploy:
//    npm run start
//    (or deploy to Vercel: full automatic)

// ============================================
// Testing Checklist
// ============================================

// ✓ Dev test:
//   npm run dev
//   Visit: http://localhost:3000/game/neon-velocity

// ✓ Check SEO metadata:
//   Right-click > View Page Source
//   Search for: "<meta name="description""
//   Search for: "<meta property="og:

// ✓ Check structured data:
//   Right-click > View Page Source
//   Search for: "VideoGame"

// ✓ Check routes exist:
//   npm run build
//   ls .next/server/app/game
//   (should show many [slug] directories)

// ============================================
// Important Notes
// ============================================

// 1. UPDATE YOUR DOMAIN
//    Files with "yourdomain.com":
//    - app/sitemap.ts (line 12, 24, 30)
//    - app/game/[slug]/page.tsx (line 54)
//    
//    Replace with actual domain before deploying!

// 2. Build Time Increase
//    With 6000 pages statically generated:
//    - Expected: 2-5 minutes on first build
//    - Normal and acceptable
//    - Vercel handles this automatically

// 3. Static Page Size
//    - Each game page: ~50-100KB
//    - Total: ~300-600MB
//    - This is normal and manageable
//    - Compression reduces by 80%

// 4. Ongoing Maintenance
//    - If games data changes: rebuild
//    - Can add ISR (revalidate) for live updates
//    - Monitor Core Web Vitals

// ============================================
// Google Search Console
// ============================================

// 1. Add property:
//    https://search.google.com/search-console
//    Add URL: https://yourdomain.com

// 2. Verify ownership:
//    Upload HTML file or meta tag

// 3. Submit sitemap:
//    Sitemaps > New sitemap
//    Enter: https://yourdomain.com/sitemap.xml

// 4. Request indexing:
//    Inspect any game URL
//    Click: "Request indexing"

// 5. Monitor:
//    - Search performance report
//    - Coverage (indexed pages)
//    - Mobile usability
//    - Core Web Vitals

// ============================================
// Example Usage in Components
// ============================================

// In GameCard (already done):
// import Link from "next/link";
// import { slugify } from "@/app/utils/slugify";
// 
// const slug = slugify(game.title);
// <Link href={`/game/${slug}`}>
//   {game.title}
// </Link>

// In related games section:
// import { games } from "@/app/mock";
// import { slugify } from "@/app/utils/slugify";
//
// games
//   .filter(g => g.category === currentGame.category)
//   .slice(0, 6)
//   .map(game => (
//     <Link key={game.id} href={`/game/${slugify(game.title)}`}>
//       {game.title}
//     </Link>
//   ))

export const quickReference = {
  version: "1.0",
  pages: "6000+",
  staticGeneration: true,
  seoEnabled: true,
};
