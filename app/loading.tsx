export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
      <div className="flex flex-col items-center">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

        <h2 className="mt-8 text-2xl font-black tracking-[0.3em]">
          2LLSOFT
        </h2>

        <p className="mt-4 text-zinc-500">
          Initializing systems...
        </p>
      </div>
    </main>
  );
}