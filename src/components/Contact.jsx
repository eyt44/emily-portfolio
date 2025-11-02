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
      <h2 className="text-4xl font-bold text-forest mb-6">contact</h2>

      <p className="text-gray-800 mb-6 max-w-xl">
        Always happy to chat about anything.
      </p>

      <a
        href={emailLink}
        className="border border-forest text-forest px-6 py-3 rounded hover:bg-forest hover:text-white transition inline-block"
      >
        email me
      </a>

      <div className="flex flex-col gap-2 mt-8 text-base">
        <a
          href="https://github.com/eyt44"
          target="_blank"
          className="relative text-gray-800 lowercase group w-fit"
        >
          github ↗
          <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-forest transition-all group-hover:w-full"></span>
        </a>

        <a
          href="https://www.linkedin.com/in/emily-t-338503318/"
          target="_blank"
          className="relative text-gray-800 lowercase group w-fit"
        >
          linkedin ↗
          <span className="absolute left-0 -bottom-0.5 h-[1px] w-0 bg-forest transition-all group-hover:w-full"></span>
        </a>
      </div>
    </section>
  );
}
