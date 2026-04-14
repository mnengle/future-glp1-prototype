import type { Metadata } from "next";

const title = "How It Works";
const description =
  "From assessment to medication in hand in under a week. See how Future delivers GLP-1 therapy paired with coaching and resistance training.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: `${title} | Future Weight Loss`,
    description,
    url: "/how-it-works",
  },
  twitter: {
    title: `${title} | Future Weight Loss`,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
