export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center bg-black">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
        Hi, I'm <span className="text-cyan-400">Emily</span> 👋
      </h1>
      <p className="max-w-xl text-gray-300 text-lg">
        Computer Science + Mathematics @ Yale.  
        Interested in quantitative finance, machine learning, and building clean technical interfaces.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
      >
        View My Work
      </a>
    </section>
  );
}
