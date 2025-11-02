import { useState, useEffect } from "react";
import useReveal from "../hooks/useReveal";
import useTypewriter from "../hooks/useTypewriter";

export default function Navbar() {
  useReveal();
  
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const typedName = useTypewriter("emily tian", 75); // fast, subtle typing

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all border-b border-gray-200 px-6 py-4 backdrop-blur-md bg-white/80
        ${scrolled ? "opacity-90 shadow-md" : "opacity-100 shadow-none"}
      `}
    >
      <div className="flex justify-between items-center">

        {/* Name link — typewriter */}
        <a
          href="#hero"
          className="font-semibold text-lg text-forest transition hover:opacity-80"
        >
          {typedName}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 text-sm">
          <a href="#about" className="hover:underline underline-offset-4">about</a>
          <a href="#projects" className="hover:underline underline-offset-4">projects</a>
          <a href="#contact" className="hover:underline underline-offset-4">contact</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-forest"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {openMenu && (
        <div className="md:hidden flex flex-col mt-2 gap-3 text-sm bg-white p-4 rounded shadow">
          <a href="#about" onClick={() => setOpenMenu(false)}>about</a>
          <a href="#projects" onClick={() => setOpenMenu(false)}>projects</a>
          <a href="#contact" onClick={() => setOpenMenu(false)}>contact</a>
        </div>
      )}
    </nav>
  );
}
