import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    const myEmail = "e.tian@yale.edu"; // ✅ your real email
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}`;
    const mailtoURL = `mailto:${myEmail}`;

    // Detect Chrome / Gmail / Android clients
    const ua = navigator.userAgent;
    const isGmailUser =
      ua.includes("Chrome") ||
      ua.includes("CriOS") ||
      ua.includes("Gmail");

    setEmailLink(isGmailUser ? gmailURL : mailtoURL);
  }, []);

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
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

        <motion.a
          href={emailLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-3 bg-primary text-black font-semibold rounded-md shadow hover:bg-primary/80 transition inline-block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Email Me
        </motion.a>

        <div className="flex gap-8 text-lg mt-6 justify-center">
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
    </section>
  );
};

export default Contact;
