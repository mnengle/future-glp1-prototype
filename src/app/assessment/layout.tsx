import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Health Assessment",
  description:
    "Complete your 5-minute health assessment to see if you qualify for medical weight loss with GLP-1 medication.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
