const items = [
  "SaaS Architecture",
  "AI Automation",
  "Cloud Systems",
  "Mobile Apps",
  "Admin Dashboards",
  "Database Design",
  "API Engineering",
  "SEO Systems",
];

export default function VisualGrid() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-6 md:grid-cols-4">
        {items.map((item, index) => (
          <div
            key={item}
            className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-cyan-400/[0.06] p-8"
          >
            <p className="text-sm text-cyan-400">0{index + 1}</p>
            <h3 className="mt-8 text-2xl font-black">{item}</h3>
            <div className="mt-8 h-24 rounded-2xl bg-black/40" />
          </div>
        ))}
      </div>
    </section>
  );
}