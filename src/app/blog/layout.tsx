import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read expert tips on interior design, uPVC window maintenance, modular kitchen trends, and home improvement ideas from Able Interiors & Windows, Chennai.",
  keywords: [
    "interior design blog",
    "uPVC window maintenance tips",
    "modular kitchen trends",
    "home improvement Chennai",
    "window care guide",
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
