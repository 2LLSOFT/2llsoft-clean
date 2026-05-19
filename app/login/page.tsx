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

    if (email === "admin@2llsoft.com" && password === "123456") {
      document.cookie = "admin-auth=true; path=/";
      router.push("/dashboard");
      return;
    }

    setError("Invalid email or password.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb55,transparent_35%)]" />

      <form
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-4 text-4xl font-black">Admin Login</h1>

        <div className="mt-8 space-y-4">
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <button className="w-full rounded-full bg-white px-8 py-4 font-bold text-black">
            Sign In
          </button>
        </div>

        {error && <p className="mt-5 text-sm text-red-400">{error}</p>}
      </form>
    </main>
  );
}