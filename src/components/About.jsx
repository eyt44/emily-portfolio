import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-4xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>

      <motion.p
        className="text-neutral-300 leading-relaxed text-lg"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I'm <span className="text-primary font-semibold">Emily Tian</span>, a developer and
        quantitative thinker focused on systematic trading, applied ML, and financial systems.
        I love bringing together{" "}
        <span className="text-accent font-semibold">math, research, and engineering</span>{" "}
        to solve complex computational challenges — from algorithmic trading models to AI-driven
        simulations and real-time systems.
      </motion.p>
    </section>
  );
}
