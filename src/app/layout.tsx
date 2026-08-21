import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { AppProvider } from "../context/AppContext";
import Header from "../components/Header";
import MobileBottomNav from "../components/MobileBottomNav";

import { SITE_URL } from "@/config/seo";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: "Materialpedia - The Encyclopedia of Materials",
    template: "%s | Materialpedia"
  },
  description: "Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
  applicationName: "Materialpedia",
  referrer: "origin-when-cross-origin",
  keywords: ["materials", "construction", "interior finishing", "electrical utilities", "calculators", "compare materials", "BIS standards", "quality standards"],
  authors: [{ name: "MaterialVerse Team" }],
  publisher: "MaterialVerse Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Materialpedia - The Encyclopedia of Materials",
    description: "Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
    url: SITE_URL,
    siteName: "Materialpedia",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/icon.png",
        width: 512,
        height: 512,
        alt: "Materialpedia logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Materialpedia - The Encyclopedia of Materials",
    description: "Wikipedia for Materials. Find standards, lifespans, price estimates, durability ratings, environmental impact, calculators, and comparison matrices for 60+ material categories.",
    creator: "@materialpedia",
    images: ["/icon.png"],
  },
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
        <meta name="monetag" content="cda8fa4d7d6622ef7f52f8dbd5e41bf9" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(s){s.dataset.zone='11531059',s.src='https://al5sm.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))`
          }}
        />
        {/* Google Analytics 4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MV9981881"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-MV9981881');`
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0b0f19] text-gray-100 pb-20 md:pb-0" suppressHydrationWarning>
        <AppProvider>
          <Header />
          <main className="flex-grow max-w-7xl w-full mx-auto py-8 relative z-10 px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <MobileBottomNav />
          <footer className="border-t border-gray-900 bg-gray-955/40 py-8 text-center text-xs text-gray-500 no-print space-y-4">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
              <Link href="/blog" className="hover:text-white transition-colors">Blog Hub</Link>
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/authors" className="hover:text-white transition-colors">Authors</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">Disclaimer</Link>
            </div>
            <div className="space-y-1">
              <p className="font-medium">© 2026 MaterialVerse - The Material Knowledge Platform.</p>
              <p className="font-light tracking-wide text-[10px]">
                100% Static Web Resource powered by Next.js Export & React. Fully Offline Compatible (PWA).
              </p>
            </div>
          </footer>
        </AppProvider>
      </body>
    </html>
  );
}
