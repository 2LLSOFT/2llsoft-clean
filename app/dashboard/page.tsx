import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function DashboardPage() {
  const messages = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
          Dashboard
        </p>

        <h1 className="mt-3 text-5xl font-black">
          Admin Panel
        </h1>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <h2 className="text-zinc-400">Messages</h2>
            <p className="mt-4 text-5xl font-black">{messages.length}</p>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
          <h2 className="text-3xl font-black">
            Contact Messages
          </h2>

          <div className="mt-8 space-y-4">
            {messages.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <div className="flex flex-col justify-between gap-2 md:flex-row">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-cyan-400">{item.email}</p>
                </div>

                <p className="mt-4 text-zinc-400">{item.message}</p>

                <p className="mt-4 text-xs text-zinc-600">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}