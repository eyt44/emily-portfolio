import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold"
      >
        Hi, I'm Emily 👋
      </motion.h1>
      <p className="mt-4 text-xl text-gray-600 max-w-xl">
        I’m a developer, mathematician, and problem solver building cool things at the intersection of AI and creativity.
      </p>
      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View My Work
      </a>
    </section>
  );
}
