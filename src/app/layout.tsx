import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono", // Using Inter as body/mono fallback or secondary
});

export const metadata: Metadata = {
  title: "GUPC Exhibition | Victory Day 2025",
  description: "Join the Green University Photography Club Exhibition celebrating Bangladesh's Victory Day.",
  icons: {
    icon: '/gupc-logo.svg',
    shortcut: '/gupc-logo.svg',
    apple: '/gupc-logo.svg',
  },
  openGraph: {
    title: "GUPC Exhibition | Victory Day 2025",
    description: "Join the Green University Photography Club Exhibition celebrating Bangladesh's Victory Day.",
    url: 'https://gupc-web.vercel.app',
    siteName: 'GUPC Exhibition',
    images: [
      {
        url: '/gupc-logo.png',
        width: 800,
        height: 600,
        alt: 'GUPC Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

import VisitorTracker from "@/components/VisitorTracker";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} antialiased bg-ocean-900 text-ocean-50`}
      >
        <VisitorTracker />
        <Navbar />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
