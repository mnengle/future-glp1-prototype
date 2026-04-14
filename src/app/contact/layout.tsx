import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Future Weight Loss team. We typically respond within one business day.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
