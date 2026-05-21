export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#030303] px-6 text-center text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#22d3ee22,transparent_40%)]" />

      <div className="relative z-10">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-400">
          ERROR 404
        </p>

        <h1 className="mt-6 text-7xl font-black md:text-9xl">
          LOST IN SPACE
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          The page you are looking for does not exist or has been moved to
          another orbit.
        </p>

        <a
          href="/"
          className="mt-12 inline-block rounded-full bg-white px-8 py-5 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
        >
          Return Home
        </a>
      </div>
    </main>
  );
}