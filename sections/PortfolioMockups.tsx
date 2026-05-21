const mockups = [
  "Enterprise SaaS Dashboard",
  "Mobile App Interface",
  "AI Automation Console",
  "Cloud Monitoring Panel",
];

export default function PortfolioMockups() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Visual Work
      </p>

      <h2 className="mt-5 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        Premium interface systems designed for real business products.
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {mockups.map((item, index) => (
          <div
            key={item}
            className="overflow-hidden rounded-[3rem] border border-white/10 bg-black"
          >
            <div className="border-b border-white/10 px-6 py-4">
              <p className="text-sm text-zinc-500">2LLSOFT / 0{index + 1}</p>
            </div>

            <div className="p-8">
              <div className="rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-white/[0.06] to-blue-700/20 p-6">
                <div className="grid gap-5">
                  <div className="h-10 w-2/3 rounded-full bg-white/20" />
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="h-28 rounded-2xl bg-cyan-400/30" />
                    <div className="h-28 rounded-2xl bg-white/10" />
                    <div className="h-28 rounded-2xl bg-blue-500/30" />
                  </div>
                  <div className="h-48 rounded-2xl bg-black/40" />
                </div>
              </div>

              <h3 className="mt-8 text-3xl font-black">{item}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}