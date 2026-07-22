import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Header from "../components/Header";
import MobileBottomNav from "../components/MobileBottomNav";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Materialpedia - The Encyclopedia of Materials",
  description: "Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
  manifest: "/manifest.json",
  verification: {
    google: "3HnqK-VdYSw0Gvki7SZizE2J_mdws5GCxxGC8AmkTgA",
    other: {
      "msvalidate.01": "09C7A42C92C510395B16F0393F057D6C",
      "yandex-verification": "8d0d5adc59a12b92",
    },
  },
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
      <body className="min-h-full flex flex-col font-sans bg-[#0b0f19] text-gray-100 pb-20 md:pb-0" suppressHydrationWarning>
        <AppProvider>
          <Header />
          <main className="flex-grow max-w-7xl w-full mx-auto py-8 relative z-10 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <MobileBottomNav />
          <footer className="border-t border-gray-900 bg-gray-955/40 py-8 text-center text-xs text-gray-500 no-print space-y-2">
            <p className="font-medium">© 2026 MaterialVerse - The Material Knowledge Platform.</p>
            <p className="font-light tracking-wide text-[10px]">
              100% Static Web Resource powered by Next.js Export & React. Fully Offline Compatible (PWA).
            </p>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
