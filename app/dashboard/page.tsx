export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="mt-3 text-5xl font-black">
              Admin Panel
            </h1>
          </div>

          <button className="rounded-full bg-white px-6 py-3 font-bold text-black">
            New Project
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Projects</h2>
            <p className="mt-4 text-5xl font-black">12</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Messages</h2>
            <p className="mt-4 text-5xl font-black">28</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Users</h2>
            <p className="mt-4 text-5xl font-black">134</p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">
            Recent Activity
          </h2>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              New contact form submitted
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              New project request created
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              Analytics updated
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}