"use client";

import Link from "next/link";
import { useState } from "react";
import { FutureLogo } from "./logo";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] flex items-center justify-between h-16">
        <Link
          href="/"
          aria-label="Future — Home"
          className="flex items-center text-black"
          onClick={() => setMenuOpen(false)}
        >
          <FutureLogo className="h-5" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors whitespace-nowrap"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/faq"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/assessment"
            className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-gray-200/60 bg-white"
        >
          <div className="px-4 py-4 flex flex-col gap-1">
            <Link
              href="/how-it-works"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              FAQ
            </Link>
            <Link
              href="/assessment"
              onClick={() => setMenuOpen(false)}
              className="mt-2 bg-black text-white text-center text-base font-semibold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
