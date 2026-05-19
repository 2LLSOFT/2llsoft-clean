export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24 text-white md:px-20"
    >
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            About
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
            Engineering-focused
            <br />
            software studio.
          </h2>
        </div>

        <div>
          <p className="text-lg leading-relaxed text-zinc-400 md:text-2xl">
            2LLSOFT develops scalable digital products with clean
            architecture, modern frontend systems and secure backend
            infrastructure.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-5xl font-black">10+</h3>
              <p className="mt-3 text-zinc-400">
                Technologies integrated
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
              <h3 className="text-5xl font-black">24/7</h3>
              <p className="mt-3 text-zinc-400">
                Infrastructure support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}