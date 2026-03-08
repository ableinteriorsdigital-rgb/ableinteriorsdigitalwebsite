"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  { href: "/interiors", label: "Interiors" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-secondary text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919789053195" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaPhone className="text-accent text-xs" />
              <span>+91 97890 53195 / 97899 14746</span>
            </a>
            <a href="mailto:ablewindows22@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaEnvelope className="text-accent text-xs" />
              <span>ablewindows22@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-300">Premium Windows, Doors & Interiors</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-lg border-b border-slate-200/50"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-18 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                <Image src="/logo/logo.png" alt="Able Interiors & Windows" width={48} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
                  Able <span className="text-primary">Interiors & Windows</span>
                </h1>
                <p className="text-[10px] md:text-xs text-text-light tracking-wider uppercase hidden sm:block">
                  Windows · Doors · Interiors
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden xl:flex items-center gap-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-[13px] font-medium text-text hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200 whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/get-quote"
                className="ml-3 px-5 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white text-[13px] font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-t border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-text hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-3 space-y-2">
                  <a
                    href="tel:+919789053195"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-text-light"
                  >
                    <FaPhone className="text-primary" />
                    +91 97890 53195
                  </a>
                  <Link
                    href="/get-quote"
                    onClick={() => setIsOpen(false)}
                    className="block text-center px-6 py-3 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
