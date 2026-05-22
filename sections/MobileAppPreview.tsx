"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function MobileAppPreview() {
  const { language } = useLanguage();
  const isTR = language === "tr";

  return (
    <section className="relative overflow-hidden bg-[#030303] px-6 py-28 text-white md:px-20">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-cyan-400">
            {isTR ? "Mobil Sistemler" : "Mobile Systems"}
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight md:text-7xl">
            {isTR
              ? "Modern işletmeler için premium mobil uygulama arayüzleri."
              : "Premium mobile app interfaces for modern businesses."}
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            {isTR
              ? "Temiz kullanıcı deneyimi, ölçeklenebilir API ve production-ready mimariyle cross-platform mobil uygulamalar geliştiriyoruz."
              : "We build cross-platform mobile applications with clean user experience, scalable APIs and production-ready architecture."}
          </p>
        </div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto w-full max-w-[360px]"
        >
          <div className="rounded-[3rem] border border-white/10 bg-zinc-900 p-4 shadow-[0_0_80px_rgba(34,211,238,0.2)]">
            <div className="rounded-[2.5rem] bg-black p-5">
              <div className="mx-auto mb-6 h-1.5 w-24 rounded-full bg-white/20" />

<img
  src="/showcase/mobile.jpg"
  className="mt-6 h-64 w-full rounded-2xl object-cover"
/>                <p className="text-sm text-cyan-300">2LLSOFT App</p>

                <h3 className="mt-4 text-3xl font-black">
                  {isTR ? "Mobil Dashboard" : "Mobile Dashboard"}
                </h3>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl bg-black/40 p-5">
                    <p className="text-zinc-500">{isTR ? "Gelir" : "Revenue"}</p>
                    <h4 className="mt-2 text-3xl font-black text-cyan-400">
                      €12,480
                    </h4>
                  </div>

                  <div className="rounded-2xl bg-black/40 p-5">
                    <p className="text-zinc-500">
                      {isTR ? "Aktif Kullanıcılar" : "Active Users"}
                    </p>
                    <h4 className="mt-2 text-3xl font-black text-cyan-400">
                      8.2K
                    </h4>
                  </div>

                  <div className="flex gap-3">
                    <div className="h-20 flex-1 rounded-2xl bg-cyan-400/30" />
                    <div className="h-20 flex-1 rounded-2xl bg-white/10" />
                    <div className="h-20 flex-1 rounded-2xl bg-blue-500/30" />
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                <div className="h-12 rounded-2xl bg-white/10" />
                <div className="h-12 rounded-2xl bg-white/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}