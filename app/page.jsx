
import {games} from "@/app/mock";
import GameCard from "@/app/components/GameCard";

import Navbar from "@/app/components/Navbar";

export default function Home() {
  return (
    <div className="pt-20 container box-border bg-gray-200 mx-auto px-10 py-10">
      <Navbar />

      <h1 className="text-3xl font-bold mb-8 text-center 
        animate-pulse hover:animate-none transition-transform duration-500 
        hover:scale-105">
        Play Free Online Games
      </h1>

      <div className="
        mt-8 grid gap-5
        grid-cols-2
        sm:grid-cols-3
        md:grid-cols-4
        lg:grid-cols-5
        xl:grid-cols-6
        2xl:grid-cols-7
      ">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>

    </div>
  );
}