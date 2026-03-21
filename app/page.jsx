"use client";

import { useState, useEffect } from "react";
import GameCard from "@/app/components/GameCard";
import Layout from "@/app/pageLayout/layout";
import Pagination from "@/app/components/Pagination";

import GameSkeletonGrid from "@/app/components/Loading";

export default function Home() {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 50;
  const totalPages = Math.ceil(total / limit);

  const fetchGames = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/games?page=${pageNum}&limit=${limit}`);
      const { data, total: t } = await res.json();

      setGames(data);
      setTotal(t);
      setLoading(false);
    } catch (err) {
      setLoading(false);
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

  return (
    <Layout>

      {loading ? <GameSkeletonGrid count={24} /> : <div
        className="
        grid gap-5
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
      </div>}


      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </Layout>
  );
}