export default function ProjectCard({ title, description, link }) {
  return (
    <div className="p-6 bg-white shadow rounded-xl border hover:shadow-xl transition">
      <h3 className="font-semibold text-xl mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} target="_blank" className="text-blue-600 hover:underline">
        View Project →
      </a>
    </div>
  );
}
