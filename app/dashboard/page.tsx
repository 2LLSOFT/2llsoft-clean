export const dynamic = "force-dynamic";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Admin Panel
        </h1>

        <p className="mt-4 text-zinc-400">
          Dashboard is working.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-zinc-400">Projects</p>

            <h2 className="mt-4 text-5xl font-black">
              12
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-zinc-400">Messages</p>

            <h2 className="mt-4 text-5xl font-black">
              0
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-8">
            <p className="text-zinc-400">Users</p>

            <h2 className="mt-4 text-5xl font-black">
              1
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}