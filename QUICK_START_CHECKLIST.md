/**
 * QUICK START CHECKLIST
 * 
 * Use this checklist to implement and deploy your SEO-optimized game pages
 * Print or copy to a notes app for easy reference
 */

// ============================================
// PHASE 1: LOCAL SETUP (5-10 minutes)
// ============================================

const phase1 = {
  title: "Local Setup",
  time: "5-10 minutes",
  steps: [
    {
      number: 1,
      task: "Review files created",
      action: [
        "☐ app/utils/slugify.ts",
        "☐ app/game/[slug]/page.tsx",
        "☐ app/sitemap.ts",
        "☐ app/robots.ts"
      ],
      verifyWith: "ls -la app/utils/slugify.ts (should exist)"
    },
    {
      number: 2,
      task: "Update domain names (CRITICAL)",
      files: [
        "app/sitemap.ts - Replace 'yourdomain.com' (3 places)",
        "app/game/[slug]/page.tsx - Line 54",
        "app/robots.ts - Line 10"
      ],
      replaceWith: "YOUR ACTUAL DOMAIN",
      action: "☐ Find & Replace 'yourdomain.com' → 'your-domain.com'"
    },
    {
      number: 3,
      task: "Test locally",
      action: [
        "☐ npm run dev",
        "☐ Visit: http://localhost:3000/game/neon-velocity",
        "☐ Visit: http://localhost:3000/sitemap.xml",
        "☐ Visit: http://localhost:3000/robots.txt"
      ],
      expected: "All pages load without errors"
    },
    {
      number: 4,
      task: "View page source",
      action: [
        "☐ Right-click game page > View Page Source",
        "☐ Search for: <meta name=\"description\"",
        "☐ Search for: \"VideoGame\"",
        "☐ Search for: \"og:image\""
      ],
      expected: "All found = SEO metadata working"
    }
  ]
};

// ============================================
// PHASE 2: BUILD & TEST (10-15 minutes)
// ============================================

const phase2 = {
  title: "Build for Production",
  time: "10-15 minutes",
  steps: [
    {
      number: 1,
      task: "Build production version",
      action: "☐ npm run build",
      expectation: [
        "✓ No errors",
        "✓ Shows '6200+ dynamic pages' (or your game count)",
        "✓ Output: .next folder"
      ],
      troubleshoot: "If errors, check domain replacement was done correctly"
    },
    {
      number: 2,
      task: "Test production build locally",
      action: [
        "☐ npm run start",
        "☐ Visit: http://localhost:3000/game/neon-velocity",
        "☐ Check page loads instantly (pre-built)"
      ],
      expected: "Instant load time (no server rendering)"
    },
    {
      number: 3,
      task: "Verify static files created",
      action: "☐ ls -la .next/server/app/game/",
      expected: "Many [slug] directories exist"
    },
    {
      number: 4,
      task: "Check sitemap validity",
      action: [
        "☐ Stop server (Ctrl+C)",
        "☐ npm run start",
        "☐ Visit: http://localhost:3000/sitemap.xml",
        "☐ View source - should be valid XML"
      ],
      expected: "Valid XML with 6000+ <url> entries"
    }
  ]
};

// ============================================
// PHASE 3: DEPLOY (5-30 minutes depending on platform)
// ============================================

const phase3 = {
  title: "Deploy to Production",
  time: "5-30 minutes",
  platforms: [
    {
      name: "VERCEL (Recommended)",
      steps: [
        "☐ Push code to GitHub",
        "☐ Go to: vercel.com",
        "☐ Sign in with GitHub",
        "☐ Click 'Add New Project'",
        "☐ Select your game-portal repo",
        "☐ Click 'Deploy'",
        "☐ Wait 5-10 minutes for first build",
        "☐ Visit: your-project.vercel.app",
        "☐ Test /game/neon-velocity"
      ],
      customDomain: [
        "☐ Dashboard > Settings > Domains",
        "☐ Add your domain",
        "☐ Update DNS (Vercel shows exact records)",
        "☐ Wait 5-30 min for DNS propagation",
        "☐ Test with your domain"
      ]
    },
    {
      name: "NETLIFY",
      steps: [
        "☐ Push code to GitHub",
        "☐ Go to: netlify.com",
        "☐ Click 'New site from Git'",
        "☐ Select your repo",
        "☐ Build command: npm run build",
        "☐ Publish directory: .next",
        "☐ Click 'Deploy site'",
        "☐ Wait 5-10 minutes"
      ]
    },
    {
      name: "DOCKER (Self-hosted)",
      steps: [
        "☐ docker build -t game-portal .",
        "☐ docker run -p 3000:3000 game-portal",
        "☐ Deploy to your server/VPS"
      ]
    }
  ]
};

// ============================================
// PHASE 4: SEARCH ENGINE REGISTRATION (15-30 minutes)
// ============================================

const phase4 = {
  title: "Register with Search Engines",
  time: "15-30 minutes",
  steps: [
    {
      number: 1,
      task: "Google Search Console",
      url: "https://search.google.com/search-console",
      actions: [
        "☐ Click 'Add property'",
        "☐ Enter: https://yourdomain.com",
        "☐ Choose verification method",
        "☐ Verify ownership",
        "☐ Go to 'Sitemaps' section",
        "☐ Click 'Add/test sitemap'",
        "☐ Enter: https://yourdomain.com/sitemap.xml",
        "☐ Click 'Submit'",
      ],
      status: "Wait 1-3 days before checking coverage"
    },
    {
      number: 2,
      task: "Bing Webmaster Tools",
      url: "https://www.bing.com/webmasters/",
      actions: [
        "☐ Sign in with Microsoft account",
        "☐ Add your site",
        "☐ Verify ownership",
        "☐ Submit sitemap at: https://yourdomain.com/sitemap.xml"
      ]
    },
    {
      number: 3,
      task: "Add Analytics",
      actions: [
        "☐ Create Google Analytics account (analytics.google.com)",
        "☐ Add property for your domain",
        "☐ Copy tracking ID",
        "☐ Add to next.config.ts or layout.tsx"
      ]
    }
  ]
};

// ============================================
// PHASE 5: MONITORING & TROUBLESHOOTING (Week 1)
// ============================================

const phase5 = {
  title: "Monitor & Verify",
  time: "30 minutes (daily for first week)",
  dailyTasks: [
    "☐ Check Google Search Console > Coverage",
    "☐ Monitor 'Submitted and indexed' count",
    "☐ Check 'Performance' for impressions",
    "☐ Test 5-10 game pages loading",
    "☐ Monitor Core Web Vitals (PageSpeed Insights)"
  ],
  weeklyTasks: [
    "☐ Check crawl stats",
    "☐ Review any indexing errors",
    "☐ Monitor analytics for organic traffic",
    "☐ Check for 404 errors in crawl stats"
  ],
  timeline: {
    day0: "Deploy goes live",
    day1: "Google discovers sitemap",
    day3: "Google starts crawling pages",
    day7: "Most pages indexed",
    week2: "Pages appearing in search results",
    month1: "Organic traffic starts appearing"
  }
};

// ============================================
// PHASE 6: OPTIMIZATION (Month 2+)
// ============================================

const phase6 = {
  title: "Optimization & Growth",
  tasks: [
    "☐ Add internal links between related games",
    "☐ Create category landing pages",
    "☐ Add breadcrumb schema",
    "☐ Optimize images (compress thumbnails)",
    "☐ Add ratings/reviews schema (if applicable)",
    "☐ Monitor Core Web Vitals monthly",
    "☐ Update games data and rebuild as needed"
  ]
};

// ============================================
// TROUBLESHOOTING QUICK REFERENCE
// ============================================

const troubleshooting = {
  problem1: {
    issue: "Pages not appearing in search results",
    timeline: "Normal - up to 2 weeks",
    fix: [
      "1. Verify sitemap submitted in Search Console",
      "2. Check Coverage report for errors",
      "3. Request indexing manually for 5 pages",
      "4. Wait 3-7 days"
    ]
  },

  problem2: {
    issue: "Build taking too long",
    timeline: "Normal for 6000+ pages: 2-5 minutes",
    fix: [
      "1. This is expected. First build is slowest.",
      "2. Subsequent builds are faster.",
      "3. Use Vercel for best build times.",
      "4. Monitor build logs for actual issues"
    ]
  },

  problem3: {
    issue: "Some pages showing 404",
    causes: [
      "- Slug mismatch (slugify changed)",
      "- Duplicate game titles",
      "- Improper domain in URLs"
    ],
    fix: [
      "1. Check console for errors",
      "2. Run: npm run build and look for errors",
      "3. Verify slugify() output is consistent",
      "4. Check for duplicate titles in mock.js"
    ]
  },

  problem4: {
    issue: "SEO metadata not showing",
    check: [
      "1. Right-click > View Page Source",
      "2. Search for <meta name=\"description\"",
      "3. If missing - check generateMetadata() code",
      "4. Verify page is built (not server-rendered)"
    ]
  },

  problem5: {
    issue: "Domain changes",
    fix: [
      "1. Update all domain references",
      "2. Rebuild: npm run build",
      "3. Deploy to new domain",
      "4. Submit new sitemap",
      "5. Add 301 redirects from old domain (if applicable)"
    ]
  }
};

// ============================================
// FILES CHECKLIST
// ============================================

const filesChecklist = {
  created: [
    "☐ app/utils/slugify.ts",
    "☐ app/game/[slug]/page.tsx",
    "☐ app/sitemap.ts",
    "☐ app/robots.ts",
    "☐ SEO_IMPLEMENTATION_GUIDE.md",
    "☐ DEPLOYMENT_GUIDE.md",
    "☐ QUICK_REFERENCE.ts",
    "☐ CODE_EXAMPLES.ts",
    "☐ CHANGES_SUMMARY.md",
    "☐ __tests__/slugify.test.ts"
  ],
  modified: [
    "☐ app/components/GameCard.jsx"
  ],
  shouldDelete: [
    "□ app/game/[title]/ (old dynamic route - optional)"
  ]
};

// ============================================
// SUCCESS METRICS
// ============================================

const successMetrics = {
  week1: {
    goal: "Setup complete and live",
    checks: [
      "✓ Domain updated",
      "✓ Sitemap.xml accessible",
      "✓ Robots.txt accessible",
      "✓ Game pages loading",
      "✓ Sitemap submitted to GSC"
    ]
  },

  week2: {
    goal: "Indexing in progress",
    checks: [
      "✓ GSC shows crawling activity",
      "✓ Some pages indexed",
      "✓ No major crawl errors"
    ]
  },

  week4: {
    goal: "Full indexing achieved",
    checks: [
      "✓ Most pages indexed in GSC",
      "✓ Pages appearing in search results",
      "✓ Core Web Vitals all green",
      "✓ Regular crawl activity"
    ]
  },

  month2: {
    goal: "Organic traffic starting",
    checks: [
      "✓ Organic impressions in Analytics",
      "✓ Organic clicks detected",
      "✓ Average position shows in GSC",
      "✓ CTR improving"
    ]
  }
};

// ============================================
// PRINTABLE SUMMARY
// ============================================

export const quickStartSummary = `
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
  SEO GAME PORTAL - QUICK START (Print This!)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫

✓ Phase 1: Local Setup (5-10 min)
  ☐ Check files exist
  ☐ Update domain names (CRITICAL!)
  ☐ npm run dev
  ☐ Test http://localhost:3000/game/neon-velocity

✓ Phase 2: Build (10-15 min)
  ☐ npm run build
  ☐ npm run start
  ☐ Verify pages load instantly

✓ Phase 3: Deploy (5-30 min)
  ☐ Vercel (recommended) OR Netlify OR Docker
  ☐ Add custom domain
  ☐ Test production

✓ Phase 4: Search Engines (15-30 min)
  ☐ Google Search Console
  ☐ Submit sitemap: /sitemap.xml
  ☐ Bing Webmaster Tools

✓ Phase 5: Monitor (Week 1+)
  ☐ Check GSC daily
  ☐ Monitor coverage report
  ☐ Check for errors

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

TIMELINE:
  Day 0:   Deploy live
  Day 1-3: Google crawling
  Day 7:   Most pages indexed
  Week 2:  Pages in search results
  Month 1: Organic traffic arriving

FILES CREATED:
  • app/utils/slugify.ts
  • app/game/[slug]/page.tsx
  • app/sitemap.ts
  • app/robots.ts
  • GameCard.jsx (modified)
  +5 documentation files

URLS TO TEST:
  Game page:  /game/neon-velocity
  Sitemap:    /sitemap.xml
  Robots:     /robots.txt

DOCUMENTS TO READ:
  1. QUICK_REFERENCE.ts (2 min read)
  2. SEO_IMPLEMENTATION_GUIDE.md (5 min read)
  3. DEPLOYMENT_GUIDE.md (10 min read)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

export const checklist = {
  phase1,
  phase2,
  phase3,
  phase4,
  phase5,
  phase6,
  troubleshooting,
  filesChecklist,
  successMetrics,
};
