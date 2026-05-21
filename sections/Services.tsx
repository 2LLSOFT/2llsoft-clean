const services = [
  {
    title: "Web Platforms",
    description:
      "Premium company websites, SaaS platforms and landing pages built with modern frontend systems.",
    items: ["Next.js", "SEO", "Responsive UI"],
  },
  {
    title: "Mobile Applications",
    description:
      "Cross-platform mobile applications with scalable architecture and clean user experience.",
    items: ["Flutter", "API Integration", "Push-ready"],
  },
  {
    title: "Backend Systems",
    description:
      "Secure APIs, databases, authentication systems and dashboard-driven backend architecture.",
    items: ["Node.js", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI Integrations",
    description:
      "AI-powered workflows, automation systems and intelligent product features for modern companies.",
    items: ["OpenAI", "Automation", "Custom AI"],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Services
      </p>

      <h2 className="mt-4 max-w-5xl text-4xl font-black leading-tight md:text-7xl">
        Software services designed for serious business growth.
      </h2>

      <div className="mt-16 grid gap-8 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={service.title}
           className="glass-card glass-hover rounded-[2rem] p-8"
          >
            <div className="text-sm text-cyan-400">
              0{index + 1}
            </div>

            <h3 className="mt-8 text-3xl font-black">
              {service.title}
            </h3>

            <p className="mt-5 leading-7 text-zinc-400">
              {service.description}
            </p>

            <div className="mt-8 space-y-3">
              {service.items.map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-zinc-300"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}