import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent monthly pricing for GLP-1 weight loss medication. Semaglutide from $179 first month. Bundle with Future coaching for $499 flat.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
