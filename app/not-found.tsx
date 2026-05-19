import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-white">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-cyan-400">
          404 Error
        </p>

        <h1 className="mt-6 text-7xl font-black md:text-9xl">
          PAGE
          <br />
          NOT FOUND
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-zinc-400">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Back Home
          </Link>
        </div>
      </div>
    </main>
  );
}