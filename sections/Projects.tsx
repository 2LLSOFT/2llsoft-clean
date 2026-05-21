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
        {projects.map((project, index) => (
          <div
            key={project.name}
            className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <div className="relative h-[280px] overflow-hidden bg-[#050505] p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22d3ee33,transparent_45%)]" />

              <div className="relative h-full rounded-[1.5rem] border border-white/10 bg-black/60 p-5 shadow-2xl">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400" />
                  <span className="h-3 w-3 rounded-full bg-green-400" />
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="h-8 w-2/3 rounded-full bg-cyan-400/30" />
                  <div className="h-24 rounded-2xl bg-white/10" />

                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-2xl bg-cyan-400/20" />
                    <div className="h-16 rounded-2xl bg-white/10" />
                    <div className="h-16 rounded-2xl bg-blue-500/20" />
                  </div>
                </div>

                <div className="absolute bottom-5 right-5 rounded-full bg-cyan-400 px-4 py-2 text-xs font-bold text-black">
                  0{index + 1}
                </div>
              </div>
            </div>

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