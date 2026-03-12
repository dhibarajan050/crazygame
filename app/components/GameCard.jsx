"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GameCard({ game }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/game/${encodeURIComponent(game.title)}`)}
      className="
      group
      relative
      rounded-xl
      overflow-hidden
      bg-black
      shadow-md
      hover:shadow-xl
      transition
      duration-300
      cursor-pointer
      "
    >
      {/* Image */}
      <div className="relative w-full h-48">

        <Image
          src={game.thumb || game.image || "/placeholder.png"}
          alt={game.title}
          fill
          className="object-cover"
        />

        {/* Dark gradient for readability */}
        <div className="
        absolute inset-0
        bg-gradient-to-t
        from-black/80 via-black/30 to-transparent
        "></div>

        {/* Category */}
        {game.category && (
          <span className="
          absolute top-3 left-3
          bg-black/70 text-white
          text-xs font-medium
          px-3 py-1
          rounded-md
          backdrop-blur
          ">
            {game.category}
          </span>
        )}

        {/* Play button */}
        <div className="
        absolute inset-0
        flex items-center justify-center
        opacity-0
        group-hover:opacity-100
        transition
        duration-300
        ">
          <div className="
          bg-white text-black
          px-5 py-2
          rounded-full
          font-semibold
          shadow-lg
          ">
            ▶ Play
          </div>
        </div>

        {/* Game title */}
        <div className="
        absolute bottom-3 left-4 right-4
        text-white
        text-sm font-semibold
        leading-tight
        line-clamp-2
        drop-shadow-lg
        ">
          {game.title}
        </div>

      </div>

      {/* Bottom bar */}
      {game.tags && (
        <div className="
        px-3 py-2
        bg-gray-900
        text-gray-300
        text-xs
        truncate
        ">
          {game.tags}
        </div>
      )}
    </div>
  );
}