"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 pb-32 pt-40 text-white md:px-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-8 max-w-5xl text-6xl font-black leading-[0.95] tracking-[-0.04em] md:text-8xl">
          We build
          <span className="text-cyan-400"> cinematic </span>
          digital experiences for modern companies.
        </h1>

        <p className="mt-10 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
          Premium web platforms, SaaS systems, mobile applications and scalable
          software products engineered for serious businesses.
        </p>

        <div className="mt-14 flex flex-col gap-5 md:flex-row">
          <a
            href="#projects"
            className="rounded-full bg-white px-8 py-5 text-center font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-5 text-center font-bold transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            Start a Project
          </a>
        </div>

        {/* Premium Stats */}
        <div className="mt-24 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Projects
            </p>

            <h2 className="mt-4 text-5xl font-black text-cyan-400">
              24+
            </h2>

            <p className="mt-4 text-zinc-400">
              Premium digital products delivered.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Performance
            </p>

            <h2 className="mt-4 text-5xl font-black text-cyan-400">
              99%
            </h2>

            <p className="mt-4 text-zinc-400">
              Optimized modern infrastructure.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Support
            </p>

            <h2 className="mt-4 text-5xl font-black text-cyan-400">
              24/7
            </h2>

            <p className="mt-4 text-zinc-400">
              Continuous support & maintenance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}