const companies = [
  "NovaTech",
  "Skyline AI",
  "CloudForge",
  "Vertex Systems",
  "Aether Labs",
];

export default function Trust() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 md:p-20">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Trusted by modern companies
        </p>

        <h2 className="mt-6 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Built for ambitious startups and enterprise-level businesses.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-5">
          {companies.map((company) => (
            <div
              key={company}
              className="flex h-[120px] items-center justify-center rounded-[2rem] border border-white/10 bg-black/20 text-center text-xl font-bold text-zinc-300"
            >
              {company}
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              24+
            </h3>

            <p className="mt-4 text-zinc-400">
              Premium software products delivered.
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              99%
            </h3>

            <p className="mt-4 text-zinc-400">
              Optimized infrastructure and uptime.
            </p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-cyan-400">
              24/7
            </h3>

            <p className="mt-4 text-zinc-400">
              Continuous maintenance and support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}