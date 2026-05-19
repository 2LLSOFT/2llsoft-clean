"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  function handleLogout() {
    document.cookie =
      "admin-auth=false; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC";

    router.push("/login");
  }

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
            <p className="mt-4 text-5xl font-black">28</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Users</h2>
            <p className="mt-4 text-5xl font-black">134</p>
          </div>
        </div>
      </div>
    </main>
  );
}