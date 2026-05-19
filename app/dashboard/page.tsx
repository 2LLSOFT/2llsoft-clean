"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const stats = [
  { label: "Projects", value: "12" },
  { label: "Messages", value: "3" },
  { label: "Users", value: "1" },
];

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Messages", href: "/dashboard/messages" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Settings", href: "/dashboard/settings" },
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
      <aside className="w-[90px] border-r border-white/10 bg-black/40 p-4 md:w-[280px] md:p-8"
        <h1 className="text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h1>

        <div className="mt-14 space-y-3">
          {navItems.map((item, index) => (
            <Link
              <span className="hidden md:inline">
  {item.name}
</span>
              href={item.href}
              className={
                index === 0
                  ? "block rounded-2xl bg-white px-5 py-4 font-bold text-black"
                  : "block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400 transition hover:border-white/20 hover:text-white"
              }
            >
              {item.name}
            </Link>
          ))}
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <div className="mb-10 flex items-start justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="mt-3 text-5xl font-black">
              Admin Panel
            </h1>

            <p className="mt-4 text-zinc-400">
              <span className="hidden md:inline">
  2LLSOFT
</span>

<span className="md:hidden">
  2L
</span>
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full bg-white px-6 py-3 font-bold text-black"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-zinc-400">
                {stat.label}
              </p>

              <h2 className="mt-4 text-5xl font-black">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">
            System Status
          </h2>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
              Website: Online
            </div>

            <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
              Deployment: Active
            </div>

            <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
              Domain: Connected
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}