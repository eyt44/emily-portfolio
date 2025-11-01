export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 fixed w-full bg-white/80 backdrop-blur-md shadow">
      <h1 className="font-bold text-xl">Emily Tian</h1>
      <ul className="flex gap-8">
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </ul>
    </nav>
  );
}

