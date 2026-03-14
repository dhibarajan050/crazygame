import { NextResponse } from "next/server";
import { games } from "@/app/mock.js";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase().trim() || "";

  if (!query) {
    return NextResponse.json({ results: [] });
  }

  const results = games
    .map((game) => {
      const title = game.title.toLowerCase();

      let score = 0;

      if (title === query) score = 100; // exact match
      else if (title.startsWith(query)) score = 75; // starts with
      else if (title.includes(` ${query}`)) score = 50; // word match
      else if (title.includes(query)) score = 25; // loose match

      return { ...game, score };
    })
    .filter((game) => game.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5) // only return first 5 results
    .map(({ score, ...game }) => game); // remove score from response

  return NextResponse.json({ results });
}