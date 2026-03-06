"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/windows", label: "Windows" },
  { href: "/doors", label: "Doors" },
  { href: "/interiors", label: "Interiors" },
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
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaPhone className="text-accent text-xs" />
              <span>+91 98765 43210</span>
            </a>
            <a href="mailto:info@ablewindows.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <FaEnvelope className="text-accent text-xs" />
              <span>info@ablewindows.com</span>
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
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg md:text-xl">A</span>
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-secondary leading-tight">
                  Able <span className="text-primary">Windows</span>
                </h1>
                <p className="text-[10px] md:text-xs text-text-light tracking-wider uppercase hidden sm:block">
                  Windows · Doors · Interiors
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-text hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/get-quote"
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary to-primary-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free Quote
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
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
              className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
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
                    href="tel:+919876543210"
                    className="flex items-center gap-3 px-4 py-3 text-sm text-text-light"
                  >
                    <FaPhone className="text-primary" />
                    +91 98765 43210
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
