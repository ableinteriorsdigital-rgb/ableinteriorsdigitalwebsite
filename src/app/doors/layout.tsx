import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doors | uPVC & Aluminium Doors",
  description:
    "Discover Able Windows' premium uPVC and aluminium door solutions — sliding, French, bi-fold, entrance, and patio doors with superior security and design.",
  keywords: ["uPVC doors", "aluminium doors", "sliding doors", "French doors", "bi-fold doors", "entrance doors", "door installation Chennai"],
};

export default function DoorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
