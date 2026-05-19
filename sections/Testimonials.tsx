const testimonials = [
  {
    name: "Michael Ross",
    role: "Startup Founder",
    text: "2LLSOFT delivered a clean and scalable SaaS platform faster than expected.",
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "The UI quality and engineering structure were production-level from day one.",
  },
  {
    name: "David Miller",
    role: "Business Owner",
    text: "Professional communication, modern design and solid backend systems.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Testimonials
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Trusted by modern businesses.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
          >
            <p className="leading-relaxed text-zinc-300">
              "{item.text}"
            </p>

            <div className="mt-8">
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-2 text-zinc-500">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}