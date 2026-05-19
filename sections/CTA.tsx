export default function CTA() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Start Now
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-7xl">
          Let’s build your next software product.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-400">
          Modern scalable systems for serious businesses.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-4 font-bold text-black"
          >
            Start Project
          </a>

          <a
            href="/dashboard"
            className="rounded-full border border-white/10 px-8 py-4"
          >
            Dashboard
          </a>
        </div>
      </div>
    </section>
  );
}