export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative z-10 rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur-2xl md:p-24">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Start Building
        </p>

        <h2 className="mx-auto mt-6 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
          Let’s build your next
          <span className="text-cyan-400"> premium digital product.</span>
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          2LLSOFT engineers scalable web platforms, SaaS systems, mobile apps
          and AI-powered digital experiences for ambitious companies.
        </p>

        <div className="mt-14 flex flex-col justify-center gap-5 md:flex-row">
          <a
            href="#contact"
            className="rounded-full bg-white px-10 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Start a Project
          </a>

          <a
            href="#projects"
            className="rounded-full border border-white/10 bg-black/20 px-10 py-5 font-bold transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            View Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}