import useReveal from "../hooks/useReveal";

export default function About() {
  useReveal();

  return (
    <section id="about" className="min-h-screen px-6 py-24 reveal">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        about
        <a href="#hero" className="text-forest hover:underline underline-offset-4 text-lg">↑</a>
      </h2>

      <p className="text-gray-800 max-w-3xl leading-relaxed">
        I'm a first-year at Yale studying mathematics and computer science and their 
        applications in the real-world. When I'm not debugging or losing track of time 
        in a math problem, you can find me working out, playing the cello, exploring 
        the great outdoors, trying new foods, or learning something new (ultimate frisbee!).
      </p>
    </section>
  );
}
