import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
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
          <nav className="text-lg font-medium relative h-20" style={{ backgroundColor: 'var(--nav-bg)', color: 'var(--nav-text)' }}>
            {/* Logo flush left */}
            <div className="absolute left-4 top-0 h-full flex items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="Angus Stonecraft"
                  width={96}
                  height={96}
                  className="rounded-sm object-contain"
                  priority
                />
              </Link>
            </div>

              <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-center">
                <div className="flex items-center gap-8">
                  <Link href="/" className="hover:opacity-80">Home</Link>
                  <Link href="/gallery" className="hover:opacity-80">Gallery</Link>
                  <Link href="/about" className="hover:opacity-80">About</Link>
                  <Link href="/blog" className="hover:opacity-80">Blog</Link>
                </div>
              </div>
          </nav>
        </header>

        <main className="bg-neutral-50 min-h-screen text-neutral-900">
          {children}
        </main>
      </body>
    </html>
  );
}
