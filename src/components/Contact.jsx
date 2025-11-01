import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 text-center">
      <motion.h2
        className="text-3xl font-bold text-white mb-6"
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Contact
      </motion.h2>

      <motion.p
        className="text-neutral-300 mb-6"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Feel free to reach out for collaborations or opportunities.
      </motion.p>

      <motion.a
        href="mailto:your.email@example.com"
        className="px-6 py-3 bg-primary text-black font-semibold rounded-md shadow hover:bg-primary/80 transition inline-block"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        Say Hello
      </motion.a>
    </section>
  );
}
