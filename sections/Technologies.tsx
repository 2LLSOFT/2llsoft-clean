const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Flutter",
  "OpenAI",
  "Cloud",
  "TailwindCSS",
  "Vercel",
  "Docker",
];

export default function Technologies() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Technology Stack
      </p>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        Modern technologies engineered for scalable digital products.
      </h2>

      <div className="mt-16 grid gap-6 md:grid-cols-4">
        {technologies.map((tech, index) => (
          <div
            key={tech}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
              <div className="absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[80px]" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-500">
                  0{index + 1}
                </span>

                <div className="h-3 w-3 rounded-full bg-cyan-400" />
              </div>

              <h3 className="mt-10 text-3xl font-black">
                {tech}
              </h3>

              <p className="mt-5 leading-7 text-zinc-400">
                Production-grade technology optimized for modern software systems.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}