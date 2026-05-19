"use client";

import { useRouter } from "next/navigation";

const messages = [
  {
    name: "Demo Client",
    email: "client@example.com",
    message: "We need a modern company website.",
  },
  {
    name: "Startup Founder",
    email: "founder@example.com",
    message: "Can you build a SaaS dashboard?",
  },
];

export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    document.cookie =
      "admin-auth=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    router.push("/login");
  }

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/30 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h1>

        <div className="mt-14 space-y-3">
          <div className="rounded-2xl bg-white px-5 py-4 font-bold text-black">
            Dashboard
          </div>

          <div className="rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Messages
          </div>

          <div className="rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Projects
          </div>

          <div className="rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Analytics
          </div>

          <div className="rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">
            Settings
          </div>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="mt-3 text-5xl font-black">
              Admin Panel
            </h1>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full bg-white px-6 py-3 font-bold text-black"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Projects</h2>
            <p className="mt-4 text-5xl font-black">12</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Messages</h2>
            <p className="mt-4 text-5xl font-black">
              {messages.length}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Users</h2>
            <p className="mt-4 text-5xl font-black">1</p>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">
            Contact Messages
          </h2>

          <div className="mt-8 space-y-4">
            {messages.map((item) => (
              <div
                key={item.email}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <h3 className="text-xl font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-cyan-400">
                    {item.email}
                  </p>
                </div>

                <p className="mt-4 text-zinc-400">
                  {item.message}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}