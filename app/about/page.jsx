import Layout from "@/app/pageLayout/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-20">

        {/* Page Title */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Learn more about our mission to bring free and fun browser games
            to players around the world.
          </p>
        </div>

        {/* Intro Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg mb-20">
          <p>
            Welcome to <span className="font-semibold">PlayArenaHub</span>! We are
            passionate about bringing you a curated collection of free online
            games across genres such as action, puzzle, racing, arcade, and more.
            Our goal is to create a simple and enjoyable platform where anyone
            can discover and play games <span className="font-medium text-blue-600">instantly without downloads</span> or
            installations.
          </p>

          <p>
            Our platform focuses on accessibility and ease of use. Whether
            you want to quickly play a fun game during a break or
            <span className="font-medium text-blue-600"> explore different gaming genres</span>, our portal makes it easy to jump into
            entertainment right from your browser.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">Why Choose PlayArenaHub?</h2>
          <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-white p-8 hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Free Games</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Enjoy a wide collection of browser-based games completely free
              to play with no downloads required.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-white p-8 hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Instant Play</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Start playing instantly from your browser with fast loading
              and smooth gameplay experience.
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-8 hover:shadow-lg transition duration-300">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold text-xl mb-3 text-gray-900">Accessible Anywhere</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Play on desktop, tablet, or mobile devices from anywhere in
              the world.
            </p>
          </div>

          </div>
        </div>

        {/* Mission Section */}
        <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-12 space-y-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-relaxed text-lg">
            This website is maintained by a small team of gaming enthusiasts
            who love building platforms that make web games easy to access.
            We continuously add new games and improve the platform to make
            your gaming experience better.
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            If you have suggestions, feedback, or would like to recommend a
            game, feel free to reach out through our contact page. Your ideas
            help us improve the platform for everyone.
          </p>

        </div>

      </div>
    </Layout>
  );
}