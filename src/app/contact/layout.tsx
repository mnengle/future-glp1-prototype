import type { Metadata } from "next";

const title = "Contact Us";
const description =
  "Get in touch with the Future Weight Loss team. We typically respond within one business day.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `${title} | Future Weight Loss`,
    description,
    url: "/contact",
  },
  twitter: {
    title: `${title} | Future Weight Loss`,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
