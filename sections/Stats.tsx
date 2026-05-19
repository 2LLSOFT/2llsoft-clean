const stats = [
  {
    value: "50+",
    label: "Projects Delivered",
  },
  {
    value: "99%",
    label: "Client Satisfaction",
  },
  {
    value: "24/7",
    label: "Infrastructure Support",
  },
  {
    value: "10+",
    label: "Integrated Technologies",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 text-center"
          >
            <h2 className="text-5xl font-black text-cyan-400">
              {item.value}
            </h2>

            <p className="mt-4 text-zinc-400">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}