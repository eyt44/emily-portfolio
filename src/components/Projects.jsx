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

        <div className="border border-gray-300 p-6 rounded-lg hover:border-forest transition">
          <h3 className="text-2xl font-semibold text-black mb-2">Prime Defense</h3>
          <p className="text-gray-600 mb-3">
            Defend your tower from the prime numbers! Click the prime numbers before they reach your tower.
          </p>
          <a
            href="https://prime-defense-game-30qg576pp-emily-tians-projects.vercel.app/"
            target="_blank"
            className="text-forest underline underline-offset-2"
          >
            play →
          </a>
        </div>

        <div className="border border-gray-300 p-6 rounded-lg hover:border-forest transition">
          <h3 className="text-2xl font-semibold text-black mb-2">Portfolio Website</h3>
          <p className="text-gray-600 mb-3">
            The site you're on right now! Guess my favorite color :)
          </p>
          <a
            href="https://emily-portfolio-teal.vercel.app/"
            target="_blank"
            className="text-forest underline underline-offset-2"
          >
            view →
          </a>
        </div>

      </div>
    </section>
  );
}
