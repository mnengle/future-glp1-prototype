import type { Metadata } from "next";

const title = "Frequently Asked Questions";
const description =
  "Answers about GLP-1 medications, pricing, coaching, and eligibility for the Future Weight Loss program.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `${title} | Future Weight Loss`,
    description,
    url: "/faq",
  },
  twitter: {
    title: `${title} | Future Weight Loss`,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
