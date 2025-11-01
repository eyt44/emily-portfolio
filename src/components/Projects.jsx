const projects = [
  {
    title: "Market-Neutral Strategy Simulator",
    description: "Developed a multi-strategy market-neutral model with trend-following overlays (~7% simulated annual returns).",
    link: "https://github.com/eyt44"
  },
  {
    title: "ASL Fingerspelling Neural Network",
    description: "Built an image recognition model to classify American Sign Language fingerspelling gestures.",
    link: "https://github.com/eyt44"
  },
  {
    title: "Heart Disease ML Predictor",
    description: "Trained supervised learning models to predict heart disease likelihood using health metrics.",
    link: "https://github.com/eyt44"
  },
  {
    title: "Web Apps & Games",
    description: "Created multiple interactive web apps, including quizzes, ciphers, and chat-based interfaces.",
    link: "https://github.com/eyt44"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black text-white px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-cyan-400 mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="border border-cyan-400/30 rounded-xl p-6 bg-gray-900 hover:border-cyan-400 transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-cyan-400 hover:underline">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
