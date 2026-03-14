"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { slugify } from "@/app/utils/slugify";
import Link from "next/link";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [debouncedQuery, setDebouncedQuery] = useState("");

    const wrapperRef = useRef(null);

    // Debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query]);

    // Fetch search
    useEffect(() => {
        if (!debouncedQuery) {
            setResults([]);
            return;
        }

        const fetchResults = async () => {
            try {
                const res = await fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`);
                const data = await res.json();
                setResults(data.results.slice(0, 5));
            } catch (error) {
                console.error("Search error:", error);
                setResults([]);
            }
        };

        fetchResults();
    }, [debouncedQuery]);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!wrapperRef.current?.contains(event.target)) {
                setResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Clear search
    const clearSearch = () => {
        setQuery("");
        setResults([]);
    };

    const router = useRouter();

    const handleNavigate = (game) => {
        const gameData = encodeURIComponent(JSON.stringify(game));

        router.push(
            `/game/${encodeURIComponent(game.title)}?game=${gameData}`
        );
    };

    return (
        <div ref={wrapperRef} className="relative w-full max-w-lg mx-auto">

            {/* Search Input */}
            <div className="relative">

                {/* Search Icon */}
                <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m1.6-5.15a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>

                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search games..."
                    className="
            w-full
            pl-11 pr-10
            py-3
            rounded-xl
            bg-white
            border border-gray-300
            text-gray-800
            placeholder-gray-400
            outline-none
            transition
            duration-200
            focus:border-blue-500
            focus:ring-2
            focus:ring-blue-500/30
          "
                />

                {/* Clear Button */}
                {query && (
                    <button
                        onClick={clearSearch}
                        className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              p-1
              rounded-full
              hover:bg-gray-200
              transition
            "
                    >
                        <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}

            </div>

            {/* Dropdown */}
            {results.length > 0 && (
                <div
                    className="
            absolute
            left-0
            right-0
            mt-3
            bg-white
            border
            border-gray-200
            rounded-xl
            shadow-xl
            overflow-hidden
            z-50
            transition
            duration-200
          "
                >
                    <div className="max-h-90 overflow-y-auto">

                        {results.map((game) => (
                            <Link href={`/game/${slugify(game.title)}`}
                                key={game.id}
                                className="
                  flex
                  items-center
                  gap-4
                  px-4
                  py-3
                  cursor-pointer
                  transition
                  duration-200
                  hover:bg-gray-100
                  group
                "
                                onClick={() => handleNavigate(game)}
                            >

                                <div className="overflow-hidden rounded-md">
                                    <img
                                        src={game.thumb}
                                        alt={game.title}
                                        className="
                      w-12
                      h-12
                      object-cover
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                                    />
                                </div>

                                <span className="text-sm text-gray-800 font-medium">
                                    {game.title}
                                </span>

                            </Link>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
}