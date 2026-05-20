import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import PageLoader from "@/components/PageLoader";
import WhatsAppButton from "@/components/WhatsAppButton";

import "./globals.css";

export const metadata: Metadata = {
  title: "2LLSOFT | Modern Software Solutions",
  description:
    "2LLSOFT builds premium web platforms, mobile applications, cloud systems and AI-powered software products.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageLoader />
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}