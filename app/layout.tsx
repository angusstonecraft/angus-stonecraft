import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import Navigation from "./Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angus Stonecraft",
  description: "Handcrafted stone pieces inspired by the raw beauty of the Earth. Lapidary art, custom cuts, and tumbled rock.",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} antialiased text-neutral-900`}
      >
        <header>
          <Navigation />
        </header>

        <main className="bg-neutral-50 min-h-screen text-neutral-900">
          {children}
        </main>
      </body>
    </html>
  );
}
