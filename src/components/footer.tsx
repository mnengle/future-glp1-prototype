import Link from "next/link";
import { FutureLogo } from "./logo";

export function Footer() {
  return (
    <footer className="bg-black text-white mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[60px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <FutureLogo className="h-5 text-white" />
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Smart coaching meets medical weight loss. Expert-guided GLP-1
              programs that adapt to you.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Program
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/how-it-works"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                Pricing
              </Link>
              <Link
                href="/assessment"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                Start Assessment
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Support
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/faq"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-4">
              Legal
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/privacy"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-white/70 hover:text-white transition-opacity"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex items-center justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Future. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Medical services provided by licensed physicians via SteadyMD.
          </p>
        </div>
      </div>
    </footer>
  );
}
