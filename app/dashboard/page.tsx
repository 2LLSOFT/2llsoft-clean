"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const stats = [
  { label: "Projects", value: "12" },
  { label: "Messages", value: "3" },
  { label: "Clients", value: "3" },
  { label: "Tasks", value: "4" },
];

const navItems = [
  { name: "Overview", href: "/dashboard" },
  { name: "Messages", href: "/dashboard/messages" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Billing", href: "/dashboard/billing" },
  { name: "Team", href: "/dashboard/team" },
  { name: "Clients", href: "/dashboard/clients" },
  { name: "Tasks", href: "/dashboard/tasks" },
  { name: "Calendar", href: "/dashboard/calendar" },
  { name: "Settings", href: "/dashboard/settings" },
];

export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "admin-auth=; path=/; max-age=0";
    router.push("/login");
  }

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
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
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
              Dashboard
            </p>

            <h1 className="mt-3 text-5xl font-black">Admin Panel</h1>

            <p className="mt-4 text-zinc-400">
              2LLSOFT management console.
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-full bg-white px-6 py-3 font-bold text-black transition hover:bg-cyan-300"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <p className="text-zinc-400">{stat.label}</p>
              <h2 className="mt-4 text-5xl font-black text-cyan-400">
                {stat.value}
              </h2>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-black">Quick Actions</h2>

            <div className="mt-8 grid gap-4">
              <Link href="/dashboard/messages" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
                Open Messages
              </Link>

              <Link href="/dashboard/projects" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
                Manage Projects
              </Link>

              <Link href="/dashboard/tasks" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
                View Tasks
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-3xl font-black">System Status</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
                Website: Online
              </div>

              <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
                Domain: Connected
              </div>

              <div className="rounded-2xl bg-black/30 p-5 text-zinc-300">
                Deployment: Stable
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}