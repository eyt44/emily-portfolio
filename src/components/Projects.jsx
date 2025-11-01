import { motion } from "framer-motion";

const projects = [
  {
    title: "Systematic Trading Simulator",
    desc: "Built a backtesting framework to evaluate mean-reversion and momentum signals across equities.",
    link: "#"
  },
  {
    title: "AI-Driven Market Regime Classifier",
    desc: "Used clustering + RL to detect market regimes and adapt trading actions dynamically.",
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-panel p-6 rounded-lg border border-neutral-800 hover:border-primary transition"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
            <p className="text-neutral-300 mb-4">{project.desc}</p>
            <a
              href={project.link}
              className="text-primary font-medium hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
