import useReveal from "../hooks/useReveal";

export default function Hero() {
  useReveal();

  return (
    <section id="hero" className="min-h-screen px-6 py-24 reveal flex flex-col justify-center">
      <h1 className="text-6xl font-bold text-forest mb-4">
        Hi, I'm Emily.
      </h1>

      <p className="text-gray-800 text-lg max-w-xl mb-8">
        Quantitative-minded student exploring algorithms, software, and AI.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        
        <a
          href="#about"
          className="border border-forest text-forest px-5 py-2 rounded hover:bg-forest hover:text-white transition"
        >
          about
        </a>
        
        <a
          href="#projects"
          className="border border-forest text-forest px-5 py-2 rounded hover:bg-forest hover:text-white transition"
        >
          projects
        </a>
        
        <a
          href="#contact"
          className="border border-forest text-forest px-5 py-2 rounded hover:bg-forest hover:text-white transition"
        >
          contact
        </a>

      </div>
    </section>
  );
}
