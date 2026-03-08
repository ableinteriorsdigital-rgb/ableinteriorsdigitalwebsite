import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of completed projects — before & after transformations in kitchens, bedrooms, windows, and doors by Able Interiors & Windows, Chennai.",
  keywords: [
    "interior design gallery",
    "before after interiors",
    "uPVC windows projects",
    "modular kitchen gallery",
    "Chennai interior portfolio",
  ],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
