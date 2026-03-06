import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Able Windows for premium uPVC windows, aluminium doors, and interior solutions. Call +91 98765 43210 or visit us in Chennai.",
  keywords: ["contact Able Windows", "windows Chennai", "doors Chennai", "interior design contact", "free quote"],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
