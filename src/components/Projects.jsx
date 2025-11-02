import React from "react";

const projects = [
  {
    title: "Prime Defense — Math Tower Defense Game",
    description:
      "A fast-paced math tower defense game where you must stop prime-number enemies from reaching your base. Composite enemies split into their prime factors, creating cascading waves of targets. Built with React and Tailwind, featuring state-driven animation, survival timer, and escalating difficulty.",
    liveLink: "https://prime-defense-game-30qg576pp-emily-tians-projects.vercel.app",
    codeLink: "https://github.com/eyt44/prime-defense-game",
    emoji: "🎮",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A sleek, dark-mode fintech-inspired portfolio designed to showcase interactive projects, technical skills, and experience. Built in React with Tailwind, smooth animation, and responsive layouts.",
    liveLink: "https://emily-portfolio-priv.vercel.app",
    codeLink: "https://github.com/eyt44/emily-portfolio",
    emoji: "💼",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="text-purple-400">Projects</span>
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 p-8 rounded-xl border border-purple-500/20 shadow-lg hover:border-purple-400/50 transition group"
          >
            <div className="text-3xl mb-3">{project.emoji}</div>
            <h3 className="text-2xl font-bold text-purple-300 mb-3 group-hover:text-purple-200 transition">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-purple-600 text-black font-semibold rounded-lg hover:bg-purple-500 transition"
              >
                🚀 View Project
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 border border-purple-500 text-purple-300 rounded-lg hover:bg-purple-600 hover:text-black transition"
              >
                📂 Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
