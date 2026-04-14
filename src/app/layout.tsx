import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://future-glp1.example.com"),
  title: {
    default: "Future Weight Loss | Medical GLP-1 with Coaching",
    template: "%s | Future Weight Loss",
  },
  description:
    "Clinically proven GLP-1 medications paired with expert coaching and resistance training. Lose the fat. Keep the muscle.",
  openGraph: {
    type: "website",
    siteName: "Future Weight Loss",
    title: "Future Weight Loss | Medical GLP-1 with Coaching",
    description:
      "Clinically proven GLP-1 medications paired with expert coaching and resistance training.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Future Weight Loss | Medical GLP-1 with Coaching",
    description:
      "Clinically proven GLP-1 medications paired with expert coaching and resistance training.",
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
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
