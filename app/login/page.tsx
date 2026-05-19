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
        "admin-auth=true; path=/; max-age=86400";

      router.push("/dashboard");

      return;
    }

    setError("Invalid email or password.");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#030303] px-6 text-white">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
          2LLSOFT
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Admin Login
        </h1>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none"
          />

          <button
            className="w-full rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300"
          >
            Sign In
          </button>
        </form>

        {error && (
          <p className="mt-6 text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    </main>
  );
}