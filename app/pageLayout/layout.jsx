"use client";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchBar from "@/app/components/SearchBar";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20">
        <div className="container mx-auto box-border 
                        px-4 sm:px-5 md:px-8 lg:px-12 xl:px-16 
                        py-4 sm:py-5 md:py-6 lg:py-8">
          {isHomePage && <SearchBar />}
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}