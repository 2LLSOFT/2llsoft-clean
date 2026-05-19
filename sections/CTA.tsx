export default function CTA() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-500/20 to-blue-700/20 p-10 backdrop-blur-2xl md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Start Now
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
          Let’s build your next software product.
        </h2>

        <p className="mt-6 max-w-2xl text-lg text-zinc-300">
          Modern design, scalable architecture and production-ready engineering
          systems for serious businesses.
        </p>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Start Project
          </a>

          <a
            href="/dashboard"
            className="rounded-full border border-white/20 bg-black/30 px-8 py-4 transition duration-300 hover:bg-black/50"
          >
            Open Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}