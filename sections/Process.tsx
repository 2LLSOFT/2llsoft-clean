const process = [
  {
    step: "01",
    title: "Discovery",
    text: "Understanding business goals, technical requirements and project scope.",
  },
  {
    step: "02",
    title: "Design",
    text: "Building modern UI systems with scalable UX structure.",
  },
  {
    step: "03",
    title: "Development",
    text: "Production-ready frontend, backend and cloud infrastructure.",
  },
  {
    step: "04",
    title: "Launch",
    text: "Deployment, optimization and long-term system support.",
  },
];

export default function Process() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Process
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        How 2LLSOFT builds software.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {process.map((item) => (
          <div
            key={item.step}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="text-5xl font-black text-cyan-400">
              {item.step}
            </div>

            <h3 className="mt-6 text-2xl font-bold">
              {item.title}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}