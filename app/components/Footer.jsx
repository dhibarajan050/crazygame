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
              🎮 Game Portal
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
              >
                🌐
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition"
              >
                🐦
              </a>

              <a
                href="#"
                className="p-2 rounded-lg border border-gray-600 hover:border-blue-500 hover:text-blue-400 transition"
              >
                📺
              </a>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>© {new Date().getFullYear()} Game Portal. All rights reserved.</p>

          <p className="mt-3 md:mt-0">
            Made with ❤️ for gamers
          </p>

        </div>

      </div>

    </footer>
  );
}