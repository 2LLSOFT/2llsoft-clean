"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;

    await fetch("/api/contact", {
      method: "POST",
    });

    setStatus("Message sent successfully.");
    form.reset();
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-20">
      <form
        onSubmit={handleSubmit}
        className="rounded-[2rem] bg-white p-10 text-black md:p-16"
      >
        <p className="text-xs uppercase tracking-[0.5em] text-zinc-500">
          Contact
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Let’s build something serious.
        </h2>

        <p className="mt-6 max-w-2xl text-zinc-600">
          Send your project idea. 2LLSOFT will turn it into production-ready
          software.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <input
            required
            name="name"
            className="rounded-2xl border border-zinc-200 px-5 py-4"
            placeholder="Your name"
          />

          <input
            required
            name="email"
            type="email"
            className="rounded-2xl border border-zinc-200 px-5 py-4"
            placeholder="Email address"
          />

          <textarea
            required
            name="message"
            className="min-h-36 rounded-2xl border border-zinc-200 px-5 py-4 md:col-span-2"
            placeholder="Project details"
          />

          <button className="rounded-full bg-black px-8 py-4 font-bold text-white md:w-fit">
            Send Message
          </button>
        </div>

        {status && <p className="mt-6 text-sm text-zinc-600">{status}</p>}
      </form>
    </section>
  );
}