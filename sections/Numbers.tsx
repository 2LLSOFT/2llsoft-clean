const numbers = [
  {
    value: "120+",
    label: "Completed Deployments",
  },
  {
    value: "15+",
    label: "Integrated APIs",
  },
  {
    value: "30+",
    label: "Production Systems",
  },
  {
    value: "99.9%",
    label: "Infrastructure Uptime",
  },
];

export default function Numbers() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Performance
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Built for serious scale.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {numbers.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-black/30 p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <h3 className="text-5xl font-black text-cyan-400">
                {item.value}
              </h3>

              <p className="mt-4 text-zinc-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}