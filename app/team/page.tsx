import Link from "next/link";

const team = [
  {
    name: "Alex Carter",
    role: "Frontend Engineer",
    status: "Active",
  },
  {
    name: "Daniel Lee",
    role: "Backend Engineer",
    status: "Active",
  },
  {
    name: "Emma Wilson",
    role: "UI/UX Designer",
    status: "Remote",
  },
  {
    name: "Michael Brown",
    role: "Cloud Architect",
    status: "Lead",
  },
];

export default function TeamPage() {
  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Overview
          </Link>

          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Messages
          </Link>

          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Projects
          </Link>

          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Analytics
          </Link>

          <Link href="/dashboard/billing" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Billing
          </Link>

          <Link href="/dashboard/team" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">
            Team
          </Link>

          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Settings
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Team
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Team
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="h-[220px] bg-gradient-to-br from-cyan-500/20 to-blue-700/20" />

              <div className="p-8">
                <h2 className="text-2xl font-black">
                  {member.name}
                </h2>

                <p className="mt-3 text-zinc-400">
                  {member.role}
                </p>

                <div className="mt-5 inline-block rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {member.status}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}