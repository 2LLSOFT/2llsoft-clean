const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Vercel",
  "Cloudflare",
  "Docker",
];

export default function Technologies() {
  return (
    <section
      id="tech"
      className="px-6 py-24 text-white md:px-20"
    >
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Technologies
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Modern stack.
          <br />
          Clean architecture.
        </h2>

        <div className="mt-12 flex flex-wrap gap-4">
          {tech.map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-black/40 px-6 py-3 text-zinc-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
