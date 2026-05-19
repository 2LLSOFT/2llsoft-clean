const plans = [
  {
    name: "Starter",
    price: "€499+",
    items: ["Landing page", "Responsive design", "Basic SEO", "Vercel deploy"],
  },
  {
    name: "Business",
    price: "€1499+",
    items: ["Company website", "Contact form", "Analytics", "Admin-ready structure"],
  },
  {
    name: "Custom",
    price: "Quote",
    items: ["Web app", "Backend API", "Database", "Authentication"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">Pricing</p>
      <h2 className="mt-4 text-4xl font-black md:text-6xl">Simple starting points</h2>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h3 className="text-2xl font-black">{plan.name}</h3>
            <p className="mt-5 text-5xl font-black">{plan.price}</p>

            <ul className="mt-8 space-y-4 text-zinc-400">
              {plan.items.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}