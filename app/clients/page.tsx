import Link from "next/link";

const clients = [
  {
    company: "NovaTech",
    contact: "Michael Ross",
    plan: "Business",
    status: "Active",
  },
  {
    company: "Skyline AI",
    contact: "Sarah Chen",
    plan: "Custom",
    status: "Negotiation",
  },
  {
    company: "Urban Commerce",
    contact: "David Miller",
    plan: "Starter",
    status: "Completed",
  },
];

export default function ClientsPage() {
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

          <Link href="/dashboard/team" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Team
          </Link>

          <Link href="/dashboard/clients" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">
            Clients
          </Link>

          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Settings
          </Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Clients
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Clients
        </h1>

        <div className="mt-10 space-y-5">
          {clients.map((client) => (
            <div
              key={client.company}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h2 className="text-3xl font-black">
                    {client.company}
                  </h2>

                  <p className="mt-3 text-zinc-400">
                    Contact: {client.contact}
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="rounded-full bg-white/10 px-4 py-2 text-sm">
                    {client.plan}
                  </div>

                  <div className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                    {client.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}