const features = [
  {
    title: "Modern Architecture",
    text: "Scalable frontend and backend systems engineered for production environments.",
  },
  {
    title: "Enterprise Security",
    text: "Authentication, validation and infrastructure best practices built into the workflow.",
  },
  {
    title: "Cloud Deployment",
    text: "Production deployment pipelines with monitoring and optimization systems.",
  },
  {
    title: "AI Integrations",
    text: "Modern AI-powered workflows and automation integrations for digital products.",
  },
  {
    title: "Responsive UI",
    text: "Clean premium interfaces optimized for mobile, desktop and tablet devices.",
  },
  {
    title: "High Performance",
    text: "Fast-loading applications with optimized rendering and scalable infrastructure.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Features
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Production-ready systems.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <h3 className="text-2xl font-bold">
              {feature.title}
            </h3>

            <p className="mt-4 leading-relaxed text-zinc-400">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}