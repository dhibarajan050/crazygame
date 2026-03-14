import { games } from "@/app/mock";
import { slugify } from "@/app/utils/slugify";
import GameClient from "./GameClient";

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

  const description =
    game.description.replace(/<[^>]*>/g, "").substring(0, 160) + "...";

  return {
    title: `Play ${game.title} Online Free - ${game.category} Game`,
    description,
    keywords: [
      game.title,
      game.category,
      ...game.tags.split(",").map((t) => t.trim()),
    ],
    openGraph: {
      title: `Play ${game.title} Online Free`,
      description,
      type: "website",
      url: `https://yourdomain.com/game/${slug}`,
      images: [
        {
          url: game.thumb,
          width: 512,
          height: 384,
          alt: game.title,
        },
      ],
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