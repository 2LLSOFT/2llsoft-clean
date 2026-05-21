const cases = [
  {
    title: "SaaS Command Center",
    type: "Enterprise Dashboard",
    result: "Real-time analytics, project tracking and operational control.",
  },
  {
    title: "AI Workflow Engine",
    type: "Automation Platform",
    result: "Automated client processes with AI-assisted decision flows.",
  },
  {
    title: "Mobile Commerce Suite",
    type: "Mobile Application",
    result: "Fast product discovery, checkout flow and business dashboard.",
  },
];

export default function CaseStudies() {
  return (
    <section className="relative bg-[#030303] px-6 py-28 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Case Studies
      </p>

      <h2 className="mt-5 max-w-6xl text-4xl font-black leading-tight md:text-7xl">
        Digital products designed to look premium and perform at scale.
      </h2>

      <div className="mt-16 grid gap-8">
        {cases.map((item, index) => (
          <div
            key={item.title}
            className="glass-card glass-hover grid gap-8 rounded-[3rem] p-8 lg:grid-cols-[0.8fr_1.2fr]"
          >
            <div>
              <p className="text-sm text-cyan-400">0{index + 1}</p>

              <h3 className="mt-5 text-4xl font-black">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-500">
                {item.type}
              </p>

              <p className="mt-8 max-w-xl leading-8 text-zinc-400">
                {item.result}
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/50 p-6">
              <div className="mb-6 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="h-40 rounded-2xl bg-cyan-400/20" />
                <div className="h-40 rounded-2xl bg-white/10" />
                <div className="h-40 rounded-2xl bg-blue-500/20" />
              </div>

              <div className="mt-6 h-20 rounded-2xl bg-white/10" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}