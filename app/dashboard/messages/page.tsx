import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: { createdAt: "desc" },
  }).catch(() => []);

  return (
    <main className="flex min-h-screen bg-[#030303] text-white">
      <aside className="hidden w-[280px] border-r border-white/10 bg-black/40 p-8 md:block">
        <h1 className="text-2xl font-black tracking-[0.3em]">2LLSOFT</h1>

        <div className="mt-14 space-y-3">
          <Link href="/dashboard" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Overview</Link>
          <Link href="/dashboard/messages" className="block rounded-2xl bg-white px-5 py-4 font-bold text-black">Messages</Link>
          <Link href="/dashboard/projects" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Projects</Link>
          <Link href="/dashboard/settings" className="block rounded-2xl border border-white/10 px-5 py-4 text-zinc-400">Settings</Link>
        </div>
      </aside>

      <section className="flex-1 p-6 md:p-10">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard / Messages
        </p>

        <h1 className="mt-3 text-5xl font-black">Messages</h1>

        <div className="mt-10 space-y-5">
          {messages.length === 0 ? (
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-zinc-400">
              No messages yet.
            </div>
          ) : (
            messages.map((item) => (
              <div key={item.id} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
                <h2 className="text-2xl font-black">{item.name}</h2>
                <p className="mt-2 text-cyan-400">{item.email}</p>
                <p className="mt-5 text-zinc-400">{item.message}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}