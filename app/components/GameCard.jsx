
"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function GameCard({ game }) {
    const router = useRouter();
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-md 
      hover:shadow-xl hover:-translate-y-2 hover:scale-105 transform 
      transition-all duration-300 cursor-pointer"
      onClick={() => router.push(`/game/${encodeURIComponent(game.title)}`)}
      >

        <div className="relative w-full h-36">
          <Image
            src={game.image}
            alt={game.title}
            fill
            className="object-cover"
          />
      
          <div className="absolute inset-0 flex items-center justify-center 
            bg-black/40 bg-opacity-50 opacity-0 group-hover:opacity-100 
            transition-opacity duration-300">
            <h3 className="text-white font-semibold text-lg">{game.title}</h3>
          </div>
        </div>

      </div>
  );
}