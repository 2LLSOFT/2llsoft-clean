import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import WhatsAppButton from "@/components/WhatsAppButton";

import "./globals.css";

export const metadata: Metadata = {
  title: "2LLSOFT | Modern Software Solutions",
  description:
    "2LLSOFT builds premium web platforms, mobile applications, cloud systems and AI-powered software products.",
  icons: {
    icon: "/logo/mark.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}