"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Item = {
  id: number | string;
};

export default function DashboardPage() {
  const router = useRouter();

  const [projects, setProjects] = useState<Item[]>([]);
  const [clients, setClients] = useState<Item[]>([]);
  const [tasks, setTasks] = useState<Item[]>([]);
  const [messages, setMessages] = useState<Item[]>([]);

  async function loadData() {
    const projectsResponse = await fetch("/api/projects");
    const clientsResponse = await fetch("/api/clients");
    const tasksResponse = await fetch("/api/tasks");
    const messagesResponse = await fetch("/api/messages");

    setProjects(await projectsResponse.json());
    setClients(await clientsResponse.json());
    setTasks(await tasksResponse.json());
    setMessages(await messagesResponse.json());
  }

 document.cookie = "admin-auth=; path=/; max-age=0";

  useEffect(() => {
    loadData();
  }, []);

  const stats = [
    { label: "Projects", value: projects.length },
    { label: "Clients", value: clients.length },
    { label: "Tasks", value: tasks.length },
    { label: "Messages", value: messages.length },
  ];

  const navItems = [
    { name: "Overview", href: "/dashboard" },
    { name: "Messages", href: "/dashboard/messages" },
    { name: "Projects", href: "/dashboard/projects" },
    { name: "Tasks", href: "/dashboard/tasks" },
    { name: "Clients", href: "/dashboard/clients" },
    { name: "Analytics", href: "/dashboard/analytics" },
    { name: "Settings", href: "/dashboard/settings" },
  ];

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

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">Quick Actions</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Link href="/dashboard/messages" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
              Open Messages
            </Link>

            <Link href="/dashboard/projects" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
              Manage Projects
            </Link>

            <Link href="/dashboard/tasks" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
              View Tasks
            </Link>

            <Link href="/dashboard/clients" className="rounded-2xl bg-cyan-400/10 p-5 transition hover:bg-cyan-400/20">
              Manage Clients
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}