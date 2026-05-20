"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [error, setError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    if (
      email === "admin@2llsoft.com" &&
      password === "123456"
    ) {
      document.cookie =
        "llsoft_admin_session=true; path=/; max-age=86400";

      router.push("/dashboard");

      return;
    }

    setError("Invalid email or password.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_40%)]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Admin Login
        </h1>

        <p className="mt-4 text-zinc-400">
          Secure access to the management dashboard.
        </p>

        <div className="mt-10 space-y-4">
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
          />

          <input
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
          />

          <button className="w-full rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-[1.02] hover:bg-cyan-300">
            Sign In
          </button>
        </div>

        {error && (
          <p className="mt-6 text-sm text-red-400">
            {error}
          </p>
        )}

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          2LLSOFT Secure Management System
        </div>
      </form>
    </main>
  );
}