import Link from "next/link";

const invoices = [
  {
    id: "INV-001",
    client: "Demo Client",
    amount: "€499",
    status: "Paid",
  },
  {
    id: "INV-002",
    client: "Startup Founder",
    amount: "€1499",
    status: "Pending",
  },
  {
    id: "INV-003",
    client: "Business Owner",
    amount: "€2499",
    status: "Draft",
  },
];

export default function BillingPage() {
  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Projects</Link>
          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Analytics</Link>
          <Link href="/dashboard/billing" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Billing</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Billing
        </p>

        <h1 className="mt-3 text-5xl font-black">Billing</h1>

        <div className="mt-10 space-y-5">
          {invoices.map((invoice) => (
            <div
              key={invoice.id}
              className="flex flex-col justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:flex-row md:items-center"
            >
              <div>
                <h2 className="text-2xl font-bold">{invoice.id}</h2>
                <p className="mt-2 text-zinc-400">{invoice.client}</p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-black text-cyan-400">
                  {invoice.amount}
                </span>

                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {invoice.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}