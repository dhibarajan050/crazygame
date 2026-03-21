import { games } from "@/app/mock";
import { slugify } from "@/app/utils/slugify";
import GameClient from "./GameClient";

const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL ?? "https://playarenahub.com").replace(/\/$/, "");

function getGameBySlug(slug) {
  return games.find((game) => slugify(game.title) === slug);
}

export async function generateStaticParams() {
  return games.map((game) => ({
    slug: slugify(game.title),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {
      title: "Game Not Found",
      description: "The game you're looking for doesn't exist.",
    };
  }

  const plainDescription = game.description?.replace(/<[^>]*>/g, "").trim() || "";
  const description =
    plainDescription.length > 160
      ? `${plainDescription.substring(0, 157)}...`
      : plainDescription;
  const canonicalUrl = `${SITE_URL}/game/${slug}`;
  const gameTags =
    game?.tags
      ?.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean) ?? [];

  return {
    title: `Play ${game.title} Online Free - ${game.category} Game`,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    keywords: [game.title, game.category, ...gameTags],
    openGraph: {
      title: `Play ${game.title} Online Free`,
      description,
      type: "website",
      url: canonicalUrl,
      siteName: "PlayArenaHub",
      images: [
        {
          url: game.thumb,
          width: 512,
          height: 384,
          alt: game.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Play ${game.title} Online Free`,
      description,
      images: [game.thumb],
    },
  };
}

export default async function GamePage({ params }) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Game not found
      </div>
    );
  }

  return <GameClient game={game} />;
}