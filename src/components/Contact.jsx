import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";

export default function Contact() {
  useReveal();

  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    const email = "e.tian@yale.edu";
    const isGmail =
      navigator.userAgent.includes("Chrome") ||
      navigator.userAgent.includes("Gmail");

    setEmailLink(
      isGmail
        ? `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
        : `mailto:${email}`
    );
  }, []);

  return (
    <section id="contact" className="min-h-screen px-6 py-24 reveal">
      <h2 className="text-3xl font-semibold mb-4 flex items-center gap-2">
        contact
        <a href="#hero" className="text-forest hover:underline underline-offset-4 text-lg">↑</a>
      </h2>

      <p className="text-gray-800 mb-6 max-w-xl">
        Always happy to chat about anything.
      </p>

      {/* Email Button */}
      <a
        href={emailLink}
        target="_blank"
        rel="noopener noreferrer"
        className="border border-forest text-forest px-5 py-2 rounded hover:bg-forest hover:text-white transition inline-block"
      >
        email me
      </a>

      {/* Social Links under button */}
      <div className="flex items-center gap-3 mt-3 text-sm text-forest">

        <a 
          href="https://github.com/eyt44" 
          target="_blank"
          className="link-underline hover:opacity-70"
        >
          github ↗
        </a>

        <span className="text-gray-400">·</span>

        <a 
          href="https://www.linkedin.com/in/emily-t-338503318/"
          target="_blank"
          className="link-underline hover:opacity-70"
        >
          linkedin ↗
        </a>

      </div>

    </section>
  );
}
