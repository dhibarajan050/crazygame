"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useParams, useRouter } from "next/navigation";
import { games } from "@/app/mock";
import Layout from "@/app/pageLayout/layout";

export default function GamePage() {
  const params = useParams();
  const router = useRouter();

  const gameTitle = decodeURIComponent(params.title);

  // memoized lookup (better performance for large game lists)
  const game = useMemo(
    () => games.find((g) => g.title === gameTitle),
    [gameTitle]
  );

  const containerRef = useRef(null);
  const infoRef = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // Lazy load Game Info section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowInfo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
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
    <Layout>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-900/20 via-black to-purple-900/20 blur-3xl"></div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">

        {/* Left Ad */}
        <div className="hidden lg:flex lg:col-span-2 items-center justify-center rounded-xl border border-white/10 backdrop-blur bg-white/5 text-gray-400">
          Ad Space
        </div>

        {/* Game Player */}
        <div
          ref={containerRef}
          className="relative col-span-1 lg:col-span-8 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.2)] hover:shadow-[0_0_70px_rgba(59,130,246,0.4)] transition duration-500"
          style={{ height: "80vh" }}
        >
          {/* Controls */}
          <div className="absolute top-0 left-0 w-full z-10 flex justify-between items-center p-4">

            <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {game.title}
            </h1>

            <div className="flex gap-3">
              <button
                onClick={toggleFullscreen}
                className="px-4 py-2 rounded-lg text-sm bg-white/10 backdrop-blur border border-white/20 hover:bg-blue-600 hover:border-blue-500 transition duration-300"
              >
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>

              <button
                onClick={() => router.push("/")}
                className="px-4 py-2 rounded-lg text-sm bg-white/10 backdrop-blur border border-white/20 hover:bg-purple-600 hover:border-purple-500 transition duration-300"
              >
                Home
              </button>
            </div>
          </div>

          {/* Click-to-play loading */}
          {!startGame ? (
            <div className="flex flex-col items-center justify-center h-full text-white gap-4">
              <button
                onClick={() => setStartGame(true)}
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition"
              >
                ▶ Play Game
              </button>

              <p className="text-sm text-gray-400">
                Click to load the game
              </p>
            </div>
          ) : (
            <iframe
              src={game.url}
              title={game.title}
              allowFullScreen
              className="w-full h-full border-none"
              loading="lazy"
            />
          )}
        </div>

        {/* Right Ad */}
        <div className="hidden lg:flex lg:col-span-2 items-center justify-center rounded-xl border border-white/10 backdrop-blur bg-white/5 text-gray-400">
          Ad Space
        </div>
      </div>

      {/* Lazy Game Info Section */}
      <div ref={infoRef} className="max-w-6xl mx-auto px-6 pb-16">

        {showInfo && (
          <div className="rounded-2xl p-8 bg-white border border-gray-200 shadow-lg hover:shadow-xl transition duration-300">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              About {game.title}
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-6">
              {game.description}
            </p>

            {game.instructions && (
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900">
                  Instructions
                </h3>

                <p className="text-gray-600 text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                  {game.instructions}
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}