import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl font-bold text-white mb-4">
          Hi, I'm <span className="text-primary">Emily Tian</span>
        </h1>
        <p className="text-lg text-neutral-300 mb-6 leading-relaxed">
          Quant-minded developer & researcher exploring{" "}
          <span className="text-primary">algorithmic trading</span>,{" "}
          <span className="text-accent">machine learning</span>, and{" "}
          <span className="text-primary">systematic finance</span>.
        </p>

        <motion.a
          href="#projects"
          className="px-6 py-3 bg-primary text-black font-semibold rounded-md shadow hover:bg-primary/80 transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
}
