export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white text-center px-6">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">Get in Touch</h2>
      <p className="text-gray-300 mb-4">I'm open to collaboration, internships, and new opportunities.</p>

      <div className="flex justify-center gap-6 text-cyan-400 text-lg">
        <a href="mailto:e.tian@yale.edu" className="hover:text-white">Email</a>
        <a href="https://github.com/eyt44" className="hover:text-white" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/eyt44" className="hover:text-white" target="_blank">LinkedIn</a>
      </div>
    </section>
  );
}
