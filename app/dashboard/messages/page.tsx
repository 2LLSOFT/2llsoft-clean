export default function MessagesPage() {
  return (
    <main className="min-h-screen bg-[#030303] p-10 text-white">
      <p className="text-sm uppercase tracking-[0.4em] text-cyan-400">
        Dashboard / Messages
      </p>

      <h1 className="mt-3 text-5xl font-black">Messages</h1>

      <div className="mt-10 space-y-4">
        {[
          "We need a modern company website.",
          "Can you build a SaaS dashboard?",
          "I want a mobile app for my business.",
        ].map((message) => (
          <div
            key={message}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
          >
            <h2 className="text-xl font-bold">Client Request</h2>
            <p className="mt-3 text-zinc-400">{message}</p>
          </div>
        ))}
      </div>
    </main>
  );
}