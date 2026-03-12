"use client";

import { useState, useEffect } from "react";
import GameCard from "@/app/components/GameCard";
import Layout from "@/app/pageLayout/layout";

export default function Home() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const limit = 50;

  const fetchGames = async (pageNum) => {
    try {
      const res = await fetch(`/api/games?page=${pageNum}&limit=${limit}`);
      const { data, total: t } = await res.json();

      setGames(data);
      setTotal(t);
    } catch (err) {
      console.error("Failed to load games", err);
    }
  };

  useEffect(() => {
    fetchGames(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const totalPages = Math.ceil(total / limit);

  // Pagination logic optimized for large pages
  const getPagination = () => {
    const pages = [];
    const delta = 2;

    const start = Math.max(2, page - delta);
    const end = Math.min(totalPages - 1, page + delta);

    pages.push(1);

    if (start > 2) {
      pages.push("...");
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <Layout>
      <h1
        className="text-3xl font-bold mb-8 text-center
        animate-pulse hover:animate-none transition-transform duration-500
        hover:scale-105"
      >
        Play Free Online Games
      </h1>

      {/* Game Grid */}
      <div
        className="
        mt-8 grid gap-5
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        2xl:grid-cols-7
      "
      >
        {games.map((game) => (
          <GameCard key={game?.id} game={game} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 px-2">

        <div
          className="
          flex items-center gap-2
          overflow-x-auto
          scrollbar-hide
          py-2
        "
        >
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="
            px-4 py-2 text-sm md:text-base
            rounded-lg border
            bg-white hover:bg-gray-100
            disabled:opacity-40
            transition whitespace-nowrap
            "
          >
            ← Prev
          </button>

          {/* Page numbers */}
          {getPagination().map((p, index) =>
            p === "..." ? (
              <span
                key={`${p}-${index}`}
                className="px-3 text-gray-400 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`
                min-w-[38px]
                px-3 py-2
                text-sm md:text-base
                rounded-lg border
                transition
                ${
                  p === page
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white hover:bg-gray-100"
                }
                `}
              >
                {p}
              </button>
            )
          )}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="
            px-4 py-2 text-sm md:text-base
            rounded-lg border
            bg-white hover:bg-gray-100
            disabled:opacity-40
            transition whitespace-nowrap
            "
          >
            Next →
          </button>
        </div>
      </div>
    </Layout>
  );
}