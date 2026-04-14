import Link from "next/link";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main-content" className="flex-1 bg-warm-gray flex items-center justify-center">
        <div className="max-w-xl mx-auto px-4 py-24 text-center">
          <p className="text-7xl font-bold tracking-tight text-black">404</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight mt-4">
            We couldn&apos;t find that page.
          </h1>
          <p className="text-gray-500 mt-3">
            The page may have moved or never existed. Head back and try one of
            the routes below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Link
              href="/"
              className="bg-black text-white text-sm font-semibold px-6 py-3 rounded-lg hover:opacity-80 transition-opacity"
            >
              Go Home
            </Link>
            <Link
              href="/how-it-works"
              className="bg-white border border-gray-200 text-sm font-semibold px-6 py-3 rounded-lg hover:border-gray-300 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="bg-white border border-gray-200 text-sm font-semibold px-6 py-3 rounded-lg hover:border-gray-300 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="bg-white border border-gray-200 text-sm font-semibold px-6 py-3 rounded-lg hover:border-gray-300 transition-colors"
            >
              FAQ
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
