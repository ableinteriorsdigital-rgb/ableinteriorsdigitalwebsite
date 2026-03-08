import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import ChatBot from "@/components/ChatBot";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnquiryPopup from "@/components/EnquiryPopup";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Able Interiors & Windows | Premium uPVC & Aluminium Windows, Doors & Interiors",
    template: "%s | Able Interiors & Windows",
  },
  description:
    "Able Interiors & Windows offers premium uPVC and aluminium windows, doors, and bespoke interior solutions in Chennai & Tamil Nadu. 20-year warranty. Get a free quote today!",
  keywords: [
    "uPVC windows",
    "aluminium windows",
    "uPVC doors",
    "aluminium doors",
    "home interiors",
    "modular kitchen",
    "wardrobes",
    "windows Chennai",
    "doors Tamil Nadu",
    "Able Interiors & Windows",
    "German uPVC",
    "window installation",
    "interior solutions",
  ],
  authors: [{ name: "Able Interiors & Windows" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Able Interiors & Windows",
    title: "Able Interiors & Windows | Premium Windows, Doors & Interiors",
    description:
      "Transform your home with premium uPVC & aluminium windows, doors, and complete interior solutions. 20-year warranty. Free consultation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Able Interiors & Windows | Premium Windows, Doors & Interiors",
    description:
      "Transform your home with premium uPVC & aluminium windows, doors, and complete interior solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
        <WhatsAppButton />
        <EnquiryPopup />
      </body>
    </html>
  );
}
