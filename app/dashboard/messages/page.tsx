export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <h1 className="text-5xl font-black">Messages</h1>

      <div className="mt-10 space-y-4">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-bold">Demo Client</h2>
          <p className="mt-3 text-zinc-400">
            We need a modern company website.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-bold">Startup Founder</h2>
          <p className="mt-3 text-zinc-400">
            Can you build a SaaS dashboard?
          </p>
        </div>
      </div>
    </main>
  );
}
