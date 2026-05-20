const projects = [
  {
    name: "Enterprise Analytics Dashboard",
    category: "SaaS Platform",
    description:
      "A premium admin dashboard for tracking business metrics, client activity and operational data.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
  },
  {
    name: "AI Automation System",
    category: "AI Software",
    description:
      "Workflow automation platform using AI-assisted processes for modern companies.",
    stack: ["OpenAI", "Node.js", "Cloud"],
  },
  {
    name: "Mobile Commerce Platform",
    category: "Mobile App",
    description:
      "Scalable mobile commerce experience with clean UI, fast checkout and backend API.",
    stack: ["Flutter", "API", "Payments"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Portfolio
      </p>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        Selected digital products engineered by 2LLSOFT.
      </h2>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.name}
            className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="h-[280px] bg-gradient-to-br from-cyan-400/20 via-blue-700/10 to-black" />

            <div className="p-8">
              <p className="text-sm text-cyan-400">{project.category}</p>

              <h3 className="mt-4 text-3xl font-black leading-tight">
                {project.name}
              </h3>

              <p className="mt-5 leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}