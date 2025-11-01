import ProjectCard from "../ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "AI Gut Health App",
      description: "MIT App Inventor + vision model to classify stool images and give health insights.",
      link: "https://github.com/yourproject"
    },
    {
      title: "Digital Circuit Simulator",
      description: "Racket tool to simulate gates & sequential circuits for CS theory class.",
      link: "https://github.com/yourproject2"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
