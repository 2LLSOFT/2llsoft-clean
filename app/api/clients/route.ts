"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Client = {
  id: number;
  company: string;
  contact: string;
  plan: string;
  status: string;
};

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [company, setCompany] = useState("");

  async function loadClients() {
    const response = await fetch("/api/clients");
    const data = await response.json();
    setClients(data);
  }

  async function addClient() {
    if (!company) return;

    await fetch("/api/clients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        contact: "New Contact",
        plan: "Starter",
        status: "New",
      }),
    });

    setCompany("");
    loadClients();
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Projects</Link>
          <Link href="/dashboard/tasks" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Tasks</Link>
          <Link href="/dashboard/clients" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Clients</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Clients
        </p>

        <h1 className="mt-3 text-5xl font-black">Clients</h1>

        <div className="mt-10 flex flex-col gap-4 md:flex-row">
          <input
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            placeholder="New client company"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <button
            onClick={addClient}
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition hover:bg-cyan-300"
          >
            Add Client
          </button>
        </div>

        <div className="mt-10 space-y-5">
          {clients.map((client) => (
            <div
              key={client.id}
              className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
            >
              <h2 className="text-3xl font-black">{client.company}</h2>
              <p className="mt-3 text-zinc-400">Contact: {client.contact}</p>

              <div className="mt-5 flex gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  {client.plan}
                </span>

                <span className="rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
                  {client.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}