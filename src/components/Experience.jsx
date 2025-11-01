import { motion } from "framer-motion";

const experiences = [
  {
    role: "Quant Research / ML Projects",
    desc: "Probabilistic modeling, time-series forecasting, reinforcement learning, systematic strategy research.",
  },
  {
    role: "Technical Projects",
    desc: "Large-scale software, real-time signal processing, hardware+software integration, automation tools.",
  },
  {
    role: "Competitive Math & CS",
    desc: "Strong foundation in algorithms, probability, linear algebra, and optimization.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-10"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-primary">{item.role}</h3>
            <p className="text-neutral-300">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
