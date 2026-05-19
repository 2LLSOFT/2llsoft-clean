const services = [
  {
    title: "Web Development",
    text: "Modern, responsive and scalable websites built with clean architecture.",
  },
  {
    title: "Mobile Applications",
    text: "Cross-platform mobile applications optimized for performance and UX.",
  },
  {
    title: "Backend Systems",
    text: "Secure APIs, authentication systems and scalable infrastructure.",
  },
  {
    title: "Cloud Infrastructure",
    text: "Deployment, hosting and production-ready cloud environments.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="px-6 py-24 text-white md:px-20"
    >
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Services
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        What we build
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/[0.08]"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300">
              0{index + 1}
            </div>

            <h3 className="text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mt-4 text-zinc-400">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}