"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold tracking-tight text-black">
            future
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            href="/how-it-works"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            Pricing
          </Link>
          {isLanding ? (
            <Link
              href="/assessment"
              className="bg-black text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:opacity-80 transition-opacity"
            >
              Get Started
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              My Account
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
