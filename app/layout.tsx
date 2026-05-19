import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2LLSOFT | Modern Software Solutions",
  description:
    "2LLSOFT builds modern web, mobile and cloud software systems with clean architecture and scalable engineering.",
  keywords: [
    "2LLSOFT",
    "software company",
    "web development",
    "mobile app development",
    "Next.js",
    "React",
    "cloud software",
  ],
  openGraph: {
    title: "2LLSOFT | Modern Software Solutions",
    description:
      "Premium software company building scalable web, mobile and cloud systems.",
    url: "https://2llsoft.com",
    siteName: "2LLSOFT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}