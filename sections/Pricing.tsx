const plans = [
  {
    name: "Starter",
    price: "€499+",
    description: "For landing pages and small company websites.",
    features: ["Premium landing page", "Responsive design", "Basic SEO", "Vercel deploy"],
  },
  {
    name: "Business",
    price: "€1499+",
    description: "For companies that need a stronger web presence.",
    features: ["Full company website", "Contact system", "Analytics", "Admin-ready structure"],
  },
  {
    name: "Custom",
    price: "Quote",
    description: "For full platforms, dashboards and SaaS products.",
    features: ["Backend API", "Database", "Authentication", "Dashboard system"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Pricing
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Simple starting points.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={
              index === 1
                ? "rounded-[2rem] border border-cyan-400/40 bg-cyan-400/10 p-8"
                : "rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            }
          >
            <h3 className="text-2xl font-black">{plan.name}</h3>

            <p className="mt-5 text-5xl font-black">{plan.price}</p>

            <p className="mt-5 text-zinc-400">{plan.description}</p>

            <ul className="mt-8 space-y-4 text-zinc-300">
              {plan.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-full bg-white px-7 py-3 font-bold text-black transition hover:scale-105"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}