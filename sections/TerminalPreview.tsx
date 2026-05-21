export default function TerminalPreview() {
  return (
    <section className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="overflow-hidden rounded-[3rem] border border-white/10 bg-black shadow-[0_0_80px_rgba(34,211,238,0.08)]">
        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />

          <span className="ml-4 text-sm text-zinc-500">
            2llsoft-terminal
          </span>
        </div>

        <div className="space-y-4 p-8 font-mono text-sm md:text-base">
          <p className="text-cyan-400">
            $ initializing enterprise systems...
          </p>

          <p className="text-zinc-400">
            ✓ cloud infrastructure connected
          </p>

          <p className="text-zinc-400">
            ✓ AI modules synchronized
          </p>

          <p className="text-zinc-400">
            ✓ dashboard analytics running
          </p>

          <p className="text-zinc-400">
            ✓ mobile platform deployed
          </p>

          <p className="text-cyan-300">
            status: production ready
          </p>
        </div>
      </div>
    </section>
  );
}