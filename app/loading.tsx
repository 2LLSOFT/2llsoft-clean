export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] text-white">
      <div className="flex flex-col items-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />

        <p className="mt-6 text-sm uppercase tracking-[0.5em] text-cyan-400">
          Loading
        </p>
      </div>
    </main>
  );
}