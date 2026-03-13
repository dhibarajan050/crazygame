import Layout from "@/app/pageLayout/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About Us
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl">
            Learn more about our mission to bring free and fun browser games
            to players around the world.
          </p>
        </div>

        {/* Intro Section */}
        <div className="space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>
            Welcome to <span className="font-semibold">Game Portal</span>! We are
            passionate about bringing you a curated collection of free online
            games across genres such as action, puzzle, racing, arcade, and more.
            Our goal is to create a simple and enjoyable platform where anyone
            can discover and play games instantly without downloads or
            installations.
          </p>

          <p>
            Our platform focuses on accessibility and ease of use. Whether
            you want to quickly play a fun game during a break or explore
            different gaming genres, our portal makes it easy to jump into
            entertainment right from your browser.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="space-y-3">
            <div className="text-2xl">🎮</div>
            <h3 className="font-semibold text-lg">Free Games</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Enjoy a wide collection of browser-based games completely free
              to play with no downloads required.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-2xl">⚡</div>
            <h3 className="font-semibold text-lg">Instant Play</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Start playing instantly from your browser with fast loading
              and smooth gameplay experience.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-2xl">🌍</div>
            <h3 className="font-semibold text-lg">Accessible Anywhere</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Play on desktop, tablet, or mobile devices from anywhere in
              the world.
            </p>
          </div>

        </div>

        {/* Team Section */}
        <div className="mt-16 space-y-6 text-gray-700 leading-relaxed">

          <h2 className="text-2xl font-semibold">
            Our Mission
          </h2>

          <p>
            This website is maintained by a small team of gaming enthusiasts
            who love building platforms that make web games easy to access.
            We continuously add new games and improve the platform to make
            your gaming experience better.
          </p>

          <p>
            If you have suggestions, feedback, or would like to recommend a
            game, feel free to reach out through our contact page. Your ideas
            help us improve the platform for everyone.
          </p>

        </div>

      </div>
    </Layout>
  );
}