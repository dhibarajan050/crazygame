"use client"

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-gray-300/90 backdrop-blur-lg  shadow-lg"
        : "bg-transparent"}
      `}
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          🎮 GamePortal
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium">

          <li className="group relative">
            <Link href="/" className="transition">
              Home
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link href="/about">
              About
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link href="/policy">
              Policy
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative">
            <Link href="/contact">
              Contact
            </Link>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className={`w-6 h-[2px] bg-current transition ${open ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`w-6 h-[2px] bg-current transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-[2px] bg-current transition ${open ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
        md:hidden
        overflow-hidden
        transition-all
        duration-300
        ${open ? "max-h-96" : "max-h-0"}
        `}
      >
        <ul className="px-6 pb-6 space-y-4 font-medium">

          <li>
            <Link href="/" onClick={() => setOpen(false)} className="block hover:text-blue-500 transition">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" onClick={() => setOpen(false)} className="block hover:text-purple-500 transition">
              About Us
            </Link>
          </li>

          <li>
            <Link href="/policy" onClick={() => setOpen(false)} className="block hover:text-cyan-500 transition">
              Policy
            </Link>
          </li>

          <li>
            <Link href="/contact" onClick={() => setOpen(false)} className="block hover:text-green-500 transition">
              Contact Us
            </Link>
          </li>

        </ul>
      </div>

    </nav>
  );
}