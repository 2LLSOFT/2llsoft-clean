"use client";

import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("Sending...");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (response.ok) {
      setStatus("Message saved successfully.");
      form.reset();
    } else {
      setStatus("Message could not be saved.");
    }
  }

  return (
    <section id="contact" className="bg-[#030303] px-6 py-24 text-white md:px-20">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            {t.contactBadge}
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">
            {t.contactTitle}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            {t.contactText}
          </p>

          <form onSubmit={handleSubmit} className="mt-12 grid gap-4 md:grid-cols-2">
            <input
              required
              name="name"
              placeholder={t.contactName}
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <input
              required
              type="email"
              name="email"
              placeholder={t.contactEmail}
              className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400"
            />

            <textarea
              required
              name="message"
              placeholder={t.contactMessage}
              className="min-h-[190px] rounded-2xl border border-white/10 bg-black/40 px-5 py-4 outline-none transition focus:border-cyan-400 md:col-span-2"
            />

            <button className="rounded-full bg-white px-8 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:bg-cyan-300 md:w-fit">
              {t.contactButton}
            </button>
          </form>

          {status && <p className="mt-6 text-sm text-cyan-400">{status}</p>}
        </div>

        <div className="rounded-[3rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl md:p-16">
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            Company Info
          </p>

          <h3 className="mt-5 text-4xl font-black">2LLSOFT</h3>

          <div className="mt-10 space-y-5 text-zinc-300">
            <p>Email: info@2llsoft.com</p>
            <p>Phone: +48 507 275 668</p>
            <p>WhatsApp: +48 507 275 668</p>
            <p>Location: Słupsk, Poland</p>
            <p>Working Hours: Mon - Fri / 09:00 - 18:00</p>
          </div>

          <div className="glass-card glass-hover rounded-[2rem] p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              Response Time
            </p>

            <p className="mt-4 text-2xl font-black">
              Usually within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}