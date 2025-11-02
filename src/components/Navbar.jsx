import { useEffect, useState } from "react";

export default function Navbar() {
  const name = "Emily Tian";
  const [typed, setTyped] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(name.slice(0, i));
      i++;
      if (i > name.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        <span className="font-semibold text-lg text-forest tracking-tight">
          {typed}
        </span>

        <div className="flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-forest transition">about</a>
          <a href="#projects" className="hover:text-forest transition">projects</a>
          <a href="#contact" className="hover:text-forest transition">contact</a>
        </div>
      </div>
    </nav>
  );
}
