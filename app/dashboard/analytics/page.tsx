import Link from "next/link";

const analytics = [
  {
    label: "Visitors",
    value: "12.4K",
  },
  {
    label: "Page Views",
    value: "48K",
  },
  {
    label: "Conversion Rate",
    value: "4.8%",
  },
  {
    label: "Bounce Rate",
    value: "21%",
  },
];

export default function AnalyticsPage() {
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

          <Link href="/dashboard/analytics" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">
            Analytics
          </Link>

          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Settings
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Analytics
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Analytics
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {analytics.map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-zinc-400">
                {item.label}
              </p>

              <h2 className="mt-4 text-5xl font-black text-cyan-400">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-10">
          <h2 className="text-3xl font-black">
            Traffic Overview
          </h2>

          <div className="mt-10 h-[300px] rounded-[2rem] bg-gradient-to-br from-cyan-500/10 to-blue-700/10" />
        </div>
      </section>
    </main>
  );
}