import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

import { LanguageProvider } from "@/components/LanguageProvider";
import WhatsAppButton from "@/components/WhatsAppButton";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "2LLSOFT | Premium Software Engineering",
  description:
    "2LLSOFT is a premium software company based in Słupsk, Poland. We build web platforms, mobile apps, dashboards, cloud systems and AI-powered digital products.",
  keywords: [
    "2LLSOFT",
    "software company Poland",
    "web development",
    "mobile app development",
    "SaaS development",
    "AI software",
    "Next.js",
    "Flutter",
    "dashboard development",
  ],
  icons: {
    icon: "/logo/mark.svg",
  },
  openGraph: {
    title: "2LLSOFT | Premium Software Engineering",
    description:
      "Premium web, mobile, cloud and AI-powered software systems for modern companies.",
    url: "https://2llsoft.com",
    siteName: "2LLSOFT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2LLSOFT | Premium Software Engineering",
    description:
      "Modern software engineering for scalable digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <WhatsAppButton />
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}