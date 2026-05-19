import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import "./globals.css";

export const metadata: Metadata = {
  title: "2LLSOFT | Modern Software Solutions",
  description:
    "2LLSOFT builds premium web platforms, mobile applications, cloud systems and AI-powered software products.",
  keywords: [
    "2LLSOFT",
    "software company",
    "web development",
    "mobile app development",
    "SaaS development",
    "Next.js",
    "React",
    "cloud systems",
    "AI software",
  ],
  openGraph: {
    title: "2LLSOFT | Modern Software Solutions",
    description:
      "Premium software engineering for web, mobile, cloud and AI-powered products.",
    url: "https://2llsoft.com",
    siteName: "2LLSOFT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2LLSOFT | Modern Software Solutions",
    description:
      "Modern software solutions for scalable digital products.",
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
        <Analytics />
      </body>
    </html>
  );
}