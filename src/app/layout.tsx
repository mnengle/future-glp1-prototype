import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const OG_IMAGE = "/og-image.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://future-glp1-prototype.vercel.app"),
  title: {
    default: "Future Weight Loss | Medical GLP-1 with Coaching",
    template: "%s | Future Weight Loss",
  },
  description:
    "Clinically proven GLP-1 medications paired with expert coaching and resistance training. Lose the fat. Keep the muscle.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Future Weight Loss",
    title: "Future Weight Loss | Medical GLP-1 with Coaching",
    description:
      "Clinically proven GLP-1 medications paired with expert coaching and resistance training.",
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Weight Loss | Medical GLP-1 with Coaching",
    description:
      "Clinically proven GLP-1 medications paired with expert coaching and resistance training.",
    images: [OG_IMAGE],
  },
};

export const viewport: Viewport = {
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
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded focus:z-[100] focus:outline-none"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
