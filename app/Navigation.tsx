"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className="relative h-20 flex items-center justify-between px-4 md:px-6"
      style={{ backgroundColor: "var(--nav-bg)", color: "var(--nav-text)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex-shrink-0 flex items-center">
        <Image
          src="/logo.png"
          alt="Angus Stonecraft"
          width={72}
          height={72}
          className="rounded-sm object-contain"
          priority
        />
      </Link>

      {/* Desktop: Title in center */}
      <Link
        href="/"
        className="flex-1 text-center text-3xl md:text-4xl font-bold"
        style={{ fontFamily: "var(--font-playfair-display)" }}
      >
        Angus Stonecraft
      </Link>

      {/* Hamburger Menu Container */}
      <div className="ml-auto relative">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1.5 p-3 cursor-pointer rounded-full transition-all duration-300 hover:bg-white justify-center items-center"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className="w-6 h-0.5 block transition-transform duration-300"
            style={{
              backgroundColor: "currentColor",
              transform: isMenuOpen ? "rotate(45deg) translateY(10px)" : "none",
            }}
          />
          <span
            className="w-6 h-0.5 block transition-opacity duration-300"
            style={{
              backgroundColor: "currentColor",
              opacity: isMenuOpen ? 0 : 1,
            }}
          />
          <span
            className="w-6 h-0.5 block transition-transform duration-300"
            style={{
              backgroundColor: "currentColor",
              transform: isMenuOpen ? "rotate(-45deg) translateY(-10px)" : "none",
            }}
          />
        </button>

        {/* Menu Dropdown Panel */}
        {isMenuOpen && (
          <div
            className="absolute top-full right-0 mt-0 shadow-lg min-w-max"
            style={{ backgroundColor: "#d6a461", zIndex: 50 }}
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-4 text-base font-medium border-b border-opacity-20 last:border-b-0 hover:opacity-80 transition-opacity"
                  style={{ color: "#000000", borderColor: "#000000", fontFamily: "var(--font-playfair-display)" }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
