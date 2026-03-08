import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about uPVC windows, aluminium doors, modular kitchens, timelines, warranties, and pricing at Able Interiors & Windows, Chennai.",
  keywords: [
    "uPVC windows FAQ",
    "interior design questions",
    "window warranty",
    "modular kitchen timeline",
    "door installation FAQ",
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
