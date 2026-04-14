import type { Metadata } from "next";

const title = "Pricing";
const description =
  "Transparent monthly pricing for GLP-1 weight loss medication. Semaglutide from $179 first month. Bundle with Future coaching and save $49 per month.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: `${title} | Future Weight Loss`,
    description,
    url: "/pricing",
  },
  twitter: {
    title: `${title} | Future Weight Loss`,
    description,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
