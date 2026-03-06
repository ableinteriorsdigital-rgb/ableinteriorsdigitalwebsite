import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Free Quote",
  description:
    "Request a free quote for uPVC windows, aluminium doors, modular kitchens, and interior solutions from Able Windows. Quick response within 24 hours.",
  keywords: ["free quote windows", "quote doors", "quote interiors", "uPVC quote Chennai"],
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
