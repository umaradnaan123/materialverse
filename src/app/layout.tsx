import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

import type { Viewport } from "next";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Materialpedia - The Encyclopedia of Materials",
  description: "Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0b0f19] text-gray-100" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
