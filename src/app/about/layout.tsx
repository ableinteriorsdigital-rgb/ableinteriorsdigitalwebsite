import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Able Windows — your trusted partner for premium uPVC & aluminium windows, doors, and interior solutions in Tamil Nadu. 12+ years of excellence.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
