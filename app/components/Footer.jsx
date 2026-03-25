import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 rounded-t-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 shadow-inner">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3 text-white">
              🎮 PlayArenaHub
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">
              Play thousands of free online games directly in your browser.
              No downloads, no installs — just fun and entertainment anytime.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>

            <ul className="space-y-2 text-sm">

              <li>
                <Link href="/" className="hover:text-blue-400 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-blue-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/policy" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Contact Us
                </Link>
              </li>

            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Connect</h3>

            <div className="flex space-x-4">

              <a
                href="#"
                className="p-2 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5ZM17.5 6.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.637 7.584H.476l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.494h2.04L6.486 3.24H4.297L17.61 20.647Z" />
                </svg>
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M21.582 6.186a2.997 2.997 0 0 0-2.11-2.12C17.64 3.5 12 3.5 12 3.5s-5.64 0-7.472.566a2.997 2.997 0 0 0-2.11 2.12C1.85 8.03 1.85 12 1.85 12s0 3.97.568 5.814a2.997 2.997 0 0 0 2.11 2.12C6.36 20.5 12 20.5 12 20.5s5.64 0 7.472-.566a2.997 2.997 0 0 0 2.11-2.12C22.15 15.97 22.15 12 22.15 12s0-3.97-.568-5.814ZM10.2 15.2V8.8l5.6 3.2-5.6 3.2Z" />
                </svg>
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p> {new Date().getFullYear()} | Designed and developed by PlayArenaHub.me.</p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ for gamers
          </p>

        </div>

      </div>

    </footer>
  );
}