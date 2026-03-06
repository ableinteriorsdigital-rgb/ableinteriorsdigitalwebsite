import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interiors | Modular Kitchen, Wardrobes & Home Interiors",
  description:
    "Transform your home with Able Windows' bespoke interior solutions — modular kitchens, wardrobes, TV units, study areas, and complete home interiors in Chennai.",
  keywords: ["modular kitchen", "wardrobes", "home interiors", "interior design Chennai", "TV unit", "study table", "pooja room"],
};

export default function InteriorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
