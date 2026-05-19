const projects = [
  {
    name: "Enterprise Dashboard",
    category: "Web Platform",
  },
  {
    name: "AI SaaS System",
    category: "Artificial Intelligence",
  },
  {
    name: "Mobile Commerce",
    category: "Mobile App",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-24 text-white md:px-20"
    >
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Projects
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Selected work
      </h2>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
          >
            <div className="h-[260px] bg-gradient-to-br from-cyan-500/20 to-blue-700/20 transition duration-500 group-hover:scale-105" />

            <div className="p-8">
              <p className="text-sm text-cyan-400">
                {project.category}
              </p>

              <h3 className="mt-3 text-3xl font-bold">
                {project.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}