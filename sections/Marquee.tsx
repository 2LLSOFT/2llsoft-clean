const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "Cloud",
  "AI Systems",
  "Mobile Apps",
  "SaaS",
];

export default function Marquee() {
  return (
    <section className="overflow-hidden border-y border-white/10 bg-black/20 py-6">
      <div className="flex animate-[marquee_20s_linear_infinite] gap-12 whitespace-nowrap text-zinc-400">
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="text-lg font-semibold tracking-[0.3em]"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}