export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-4 text-4xl font-black">
          Admin Login
        </h1>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none"
          />

          <button className="w-full rounded-full bg-white px-8 py-4 font-bold text-black">
            Sign In
          </button>
        </form>
      </div>
    </main>
  );
}