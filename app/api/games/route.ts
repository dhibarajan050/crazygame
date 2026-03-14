import { NextResponse } from "next/server";
import { games } from "@/app/mock.js"

export async function GET(request: Request) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") ?? "1", 10);
  const limit = parseInt(url.searchParams.get("limit") ?? "50", 10);

  const start = (page - 1) * limit;
  const end = start + limit;
  const data = games.slice(start, end);
  const total = games.length;
  console.log(total)

  return NextResponse.json({ data, total, page, limit });
}



