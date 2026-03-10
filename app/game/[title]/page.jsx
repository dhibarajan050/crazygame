"use client"

import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { games } from "@/app/mock";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();
  const gameTitle = decodeURIComponent(params.title);

  const game = games.find((g) => g.title === gameTitle);

  const iframeRef = useRef(null);
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

 

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleEscape = (e) => {
      if (e.key === "Escape" && document.fullscreenElement) {
        document.exitFullscreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);



  if (!game) {
    return (
      <div className="h-screen flex items-center justify-center text-white bg-black">
        Game not found
      </div>
    );
  }

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await containerRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen error:", error);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">

      {/* Game Container */}
      <div
        ref={containerRef}
        className="relative w-full h-screen flex flex-col"
      >

        {/* Top Overlay */}
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-b from-black/70 to-transparent z-10">

          <h1 className="text-xl md:text-2xl font-bold">
            {game.title}
          </h1>

          <div className="flex gap-3">

            <button
              onClick={toggleFullscreen}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm"
            >
              {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>

            <button
              onClick={() => router.push("/")}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg text-sm"
            >
              Home
            </button>

          </div>
        </div>

        {/* Game iframe */}
        {game.iframeURL ? (
          <iframe
            ref={iframeRef}
            src={game.iframeURL}
            title={game.title}
            allowFullScreen
            className="w-full h-full border-none"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            No Game Available
          </div>
        )}
      </div>

      {/* Game Description Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">

        <h2 className="text-2xl font-bold mb-4">
          About {game.title}
        </h2>

        <p className="text-gray-400 leading-relaxed">
          {game.description}
        </p>

      </div>
    </div>
  );
}