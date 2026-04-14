import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about GLP-1 medications, pricing, coaching, and the Future Weight Loss program.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
