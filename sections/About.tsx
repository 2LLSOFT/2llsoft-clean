const values = [
  "Clean engineering architecture",
  "Premium interface design",
  "Scalable backend systems",
  "Production-focused delivery",
];

export default function About() {
  return (
    <section id="about" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            About 2LLSOFT
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-7xl">
            A software company focused on premium digital systems.
          </h2>
        </div>

        <div>
          <p className="text-xl leading-9 text-zinc-400">
            2LLSOFT is a modern software company based in Słupsk, Poland,
            building scalable web platforms, mobile applications, dashboards,
            backend systems and AI-powered digital products for ambitious
            businesses.
          </p>

          <p className="mt-8 text-lg leading-8 text-zinc-500">
            Every project is designed with clean architecture, strong visual
            identity, production-ready infrastructure and long-term scalability
            in mind.
          </p>

          <div className="mt-10 grid gap-4">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-zinc-300"
              >
                ✓ {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}