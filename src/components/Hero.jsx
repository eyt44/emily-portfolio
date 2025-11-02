import useReveal from "../hooks/useReveal";

export default function Hero() {
  useReveal();

  return (
    <section id="hero" className="min-h-screen px-6 py-24 reveal">
      <h1 className="text-6xl font-bold text-forest mb-4">Hi, I'm Emily.</h1>
      <p className="text-gray-800 text-lg max-w-xl">
        Quantitative-minded student exploring algorithms, software, and AI.
      </p>
    </section>
  );
}
