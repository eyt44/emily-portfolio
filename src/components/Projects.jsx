import useReveal from "../hooks/useReveal";

export default function Projects() {
  useReveal();

  return (
    <section id="projects" className="min-h-screen px-6 py-24 reveal">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        projects
        <a href="#hero" className="text-forest hover:underline underline-offset-4 text-lg">↑</a>
      </h2>

      <div className="space-y-8">

        {/* Prime Defense */}
        <div className="border border-gray-300 p-6 rounded-lg hover:border-forest transition">
          <h3 className="text-2xl font-semibold text-black mb-2">Prime Defense</h3>
          <p className="text-gray-600 mb-3">
            Defend your tower from the prime numbers! Click the prime numbers before they reach your tower.
          </p>
          
          <div className="flex items-center gap-3 text-forest text-sm">
            <a
              href="https://prime-defense-game-30qg576pp-emily-tians-projects.vercel.app/"
              target="_blank"
              className="text-forest link-underline hover:opacity-70"
            >
              play ↗
            </a>

            <span className="text-gray-400">·</span>

            <a
              href="https://github.com/eyt44/prime-defense-game"
              target="_blank"
              className="text-forest link-underline hover:opacity-70"
            >
              github ↗
            </a>

          </div>
        </div>

        {/* Portfolio */}
        <div className="border border-gray-300 p-6 rounded-lg hover:border-forest transition">
          <h3 className="text-2xl font-semibold text-black mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-3">
            The site you're on right now! Guess my favorite color :)
          </p>
          
          <div className="flex items-center gap-3 text-forest text-sm">
            <a
              href="https://emily-portfolio-teal.vercel.app/"
              target="_blank"
              className="text-forest link-underline hover:opacity-70"
            >
              view ↗
            </a>

            <span className="text-gray-400">·</span>

            <a
              href="https://github.com/eyt44/emily-portfolio"
              target="_blank"
              className="text-forest link-underline hover:opacity-70"
            >
              github ↗
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
