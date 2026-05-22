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
  metadataBase: new URL("https://2llsoft.com"),

  title: "2LLSOFT | Premium Software Engineering",
  description:
    "2LLSOFT builds premium web platforms, mobile apps, cloud systems and AI-powered software products.",
  icons: {
    icon: "/logo/mark.svg",
  },
  openGraph: {
    title: "2LLSOFT | Premium Software Engineering",
    description:
      "Premium web, mobile, cloud and AI-powered software systems for modern companies.",
    url: "https://2llsoft.com",
    siteName: "2LLSOFT",
    images: ["/og.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2LLSOFT | Premium Software Engineering",
    description:
      "Modern software engineering for scalable digital products.",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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