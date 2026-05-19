const items = [
  {
    title: "Fast Delivery",
    text: "Modern workflows and scalable engineering processes for rapid execution.",
  },
  {
    title: "Clean Code",
    text: "Maintainable architecture with production-ready development standards.",
  },
  {
    title: "Scalable Systems",
    text: "Infrastructure designed to support long-term product growth.",
  },
  {
    title: "Premium UI",
    text: "Modern interfaces with smooth interactions and responsive layouts.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl md:p-16">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          Why 2LLSOFT
        </p>

        <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
          Engineering systems focused on performance and scale.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-black/30 p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <h3 className="text-3xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-zinc-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}