const team = [
  {
    name: "Alex Carter",
    role: "Frontend Engineer",
  },
  {
    name: "Daniel Lee",
    role: "Backend Engineer",
  },
  {
    name: "Emma Wilson",
    role: "UI/UX Designer",
  },
  {
    name: "Michael Brown",
    role: "Cloud Architect",
  },
];

export default function Team() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
        Team
      </p>

      <h2 className="mt-4 text-4xl font-black md:text-6xl">
        Built by experienced engineers.
      </h2>

      <div className="mt-14 grid gap-6 md:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <div className="h-[260px] bg-gradient-to-br from-cyan-500/20 to-blue-700/20" />

            <div className="p-8">
              <h3 className="text-2xl font-bold">
                {member.name}
              </h3>

              <p className="mt-3 text-zinc-400">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}