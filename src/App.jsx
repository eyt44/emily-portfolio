import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-black font-sans text-white relative overflow-hidden">
      
      {/* background grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.3),transparent_70%)]"></div>
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

      <footer className="text-center text-neutral-600 py-10 text-sm border-t border-neutral-800">
        © {new Date().getFullYear()} Emily Tian — Quant & Systems Design
      </footer>
    </div>
  )
}
