"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Layout from "@/app/pageLayout/layout";
import { getGameId } from "@/app/utils/constant";

export default function GameClient({ game }) {
  const router = useRouter();

  const containerRef = useRef(null);
  const infoRef = useRef(null);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [startGame, setStartGame] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  // ✅ SEO Structured Data
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "VideoGame",
      name: game.title,
      description: game.description?.replace(/<[^>]*>/g, "").trim(),
      image: game.thumb,
      url: typeof window !== "undefined" ? window.location.href : "",
      gameCategory: game.category,
      keywords: Array.isArray(game.tags)
        ? game.tags
        : game.tags?.split(",").map((tag) => tag.trim()),
      applicationCategory: "Game",
      inLanguage: "en-US",
      author: {
        "@type": "Organization",
        name: "PlayArenaHub",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => script.remove();
  }, [game]);

  // ✅ Fullscreen listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  // ✅ Lazy load info section
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

  // ✅ Walkthrough Video Loader (FIXED)
  useEffect(() => {
    if (!showInfo) return;

    window.VIDEO_OPTIONS = {
      gameid: getGameId(game.url),
      width: "100%",
      height: "480px",
      color: "#3f007e",
      getads: "false",
    };

    let cancelled = false;
    let gmScript = null;

    const loadScript = (id, src, parent) =>
      new Promise((resolve, reject) => {
        const existing = document.getElementById(id);
        if (existing) {
          resolve(existing);
          return;
        }

        const script = document.createElement("script");
        script.id = id;
        script.src = src;
        script.async = true;
        script.onload = () => resolve(script);
        script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        parent.appendChild(script);
      });

    const target = document.getElementById("gamemonetize-video");
    if (!target) return;

    const loadVideoScript = async () => {
      try {
        if (!window.jQuery && !window.$) {
          await loadScript(
            "jquery-cdn",
            "https://code.jquery.com/jquery-3.7.1.min.js",
            document.head
          );
        }

        if (cancelled) return;

        target.innerHTML = "";
        gmScript = document.createElement("script");
        gmScript.id = "gamemonetize-video-api";
        gmScript.src = "https://api.gamemonetize.com/video.js";
        gmScript.async = true;
        target.appendChild(gmScript);
      } catch (error) {
        console.error(error);
      }
    };

    loadVideoScript();

    return () => {
      cancelled = true;
      if (gmScript && gmScript.parentNode) {
        gmScript.parentNode.removeChild(gmScript);
      }
    };
  }, [showInfo, game.url]);

  // ✅ Fullscreen toggle
  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  return (
    <Layout>
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

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur border border-white/20 text-white hover:bg-blue-600 hover:border-blue-400 transition duration-200"
                title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                {isFullscreen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      d="M9 9H4V4M15 9h5V4M9 15H4v5M15 15h5v5"/>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                      d="M4 8V4h4M20 8V4h-4M4 16v4h4M20 16v4h-4"/>
                  </svg>
                )}
              </button>

              {/* Home Button */}
              <button
                onClick={() => router.push("/")}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur border border-white/20 text-white hover:bg-purple-600 hover:border-purple-400 transition duration-200"
                title="Home"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                    d="M3 11l9-7 9 7M5 10v10h14V10"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Click-to-play loading */}
          {!startGame ? (
            <div className="flex flex-col items-center justify-center h-full text-white gap-4">
              <button
                onClick={() => setStartGame(true)}
                className="px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 transition cursor-pointer"
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
        <div className="hidden lg:flex lg:col-span-2 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-400">
          Ad Space
        </div>
      </div>

      {/* ✅ GAME INFO + WALKTHROUGH */}
      <div ref={infoRef} className="max-w-6xl mx-auto px-6 pb-16">
        {showInfo && (
          <div className="rounded-2xl p-8 bg-white shadow-lg">

            <h2 className="text-2xl font-bold mb-4">
              About {game.title}
            </h2>

            <p className="mb-6">{game.description}</p>

            {game.instructions && (
              <>
                <h3 className="text-xl font-semibold mb-2">
                  Instructions
                </h3>
                <p className="mb-6 whitespace-pre-wrap">
                  {game.instructions}
                </p>
              </>
            )}

            {/* ✅ WALKTHROUGH VIDEO */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                🎥 Walkthrough Video
              </h3>

              <div id="gamemonetize-video"></div>
            </div>

          </div>
        )}
      </div>
    </Layout>
  );
}