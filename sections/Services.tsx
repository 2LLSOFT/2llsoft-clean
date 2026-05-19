const services = [
  {
    title: "Web Platforms",
    text: "High-performance company websites, SaaS platforms and product landing pages.",
  },
  {
    title: "Mobile Apps",
    text: "Modern mobile applications with clean user experience and scalable structure.",
  },
  {
    title: "Backend APIs",
    text: "Secure API systems, authentication flows and server-side business logic.",
  },
  {
    title: "Cloud Systems",
    text: "Deployment, hosting, monitoring and production-ready infrastructure.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Services
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
        Software systems designed for real businesses.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="mb-8 text-sm text-cyan-400">
              0{index + 1}
            </div>

            <h3 className="text-2xl font-bold">
              {service.title}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {service.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}