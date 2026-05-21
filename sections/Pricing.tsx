const plans = [
  {
    name: "Starter",
    price: "€990",
    description: "Perfect for startups and small businesses.",
    features: [
      "Modern landing page",
      "Responsive design",
      "Contact system",
      "Basic SEO",
    ],
  },
  {
    name: "Business",
    price: "€2,490",
    description: "Advanced business platform for growing companies.",
    features: [
      "Premium UI/UX",
      "Dashboard system",
      "Database integration",
      "Analytics",
      "Advanced SEO",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom engineered software systems for serious businesses.",
    features: [
      "Full-stack architecture",
      "Cloud infrastructure",
      "Custom integrations",
      "AI systems",
      "Priority support",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Pricing
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-7xl">
        Flexible pricing for modern digital products.
      </h2>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={
              index === 1
                ? "rounded-[2rem] border border-cyan-400/40 bg-cyan-400/10 p-10"
                : "rounded-[2rem] border border-white/10 glass-card glass-hover p-10"
            }
          >
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              {plan.name}
            </p>

            <h3 className="mt-6 text-6xl font-black">
              {plan.price}
            </h3>

            <p className="mt-6 text-zinc-400">
              {plan.description}
            </p>

            <div className="mt-10 space-y-4">
              {plan.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-zinc-300"
                >
                  {feature}
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 block rounded-full bg-white px-8 py-5 text-center font-bold text-black transition duration-300 hover:bg-cyan-300"
            >
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}