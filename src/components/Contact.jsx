import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-6"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-8"
        >
          Always happy to chat about quant, trading, tech, or anything interesting.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-col items-center gap-4">

          {/* Main email button */}
          <motion.a
            href="mailto:e.tian@yale.edu"
            className="px-6 py-3 bg-primary text-black font-semibold rounded-md shadow hover:bg-primary/80 transition inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Email Me
          </motion.a>

          {/* Gmail fallback */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=e.tian@yale.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm hover:underline"
          >
            Or message me via Gmail →
          </a>

          {/* Social Links */}
          <div className="flex gap-8 text-lg mt-4">
            <a
              href="https://github.com/eyt44"
              target="_blank"
              className="hover:text-primary transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emily-t-338503318/"
              target="_blank"
              className="hover:text-primary transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
