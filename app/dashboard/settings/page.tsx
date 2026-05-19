"use client";

import Link from "next/link";
import { useState } from "react";

export default function SettingsPage() {
  const [companyName, setCompanyName] = useState("2LLSOFT");
  const [email, setEmail] = useState("info@2llsoft.com");
  const [status, setStatus] = useState("");

  function saveSettings() {
    setStatus("Settings saved.");
  }

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Projects</Link>
          <Link href="/dashboard/analytics" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Analytics</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Settings
        </p>

        <h1 className="mt-3 text-5xl font-black">Settings</h1>

        <div className="mt-10 max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <div className="space-y-5">
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
              placeholder="Company name"
            />

            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
              placeholder="Contact email"
            />

            <button
              onClick={saveSettings}
              className="rounded-full bg-white px-8 py-4 font-bold text-black"
            >
              Save Settings
            </button>

            {status && <p className="text-sm text-cyan-400">{status}</p>}
          </div>
        </div>
      </section>
    </main>
  );
}