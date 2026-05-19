const values = [
  "Clean architecture",
  "Performance-first development",
  "Scalable systems",
  "Production-ready delivery",
];

export default function About() {
  return (
    <section id="about" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            We build software with engineering discipline.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-zinc-400 md:text-2xl">
            2LLSOFT develops modern digital products for companies that need
            reliable, scalable and maintainable software systems.
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