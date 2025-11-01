export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-cyan-400 font-semibold text-lg tracking-wide">
          Emily Tian
        </a>

        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <a 
          href="https://raw.githubusercontent.com/eyt44/emily-portfolio/main/Emily%20Tian%20Resume%20Blue.pdf"
          target="_blank"
          className="text-xs px-4 py-2 border border-cyan-400/50 rounded-lg text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
        >
          Résumé
        </a>
      </nav>
    </header>
  );
}
