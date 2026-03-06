"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "919876543210";
  const prefilledMessages = [
    { label: "Get a Quote", message: "Hi, I'd like to get a quote for windows/doors." },
    { label: "Book Site Visit", message: "Hi, I'd like to book a free site visit." },
    { label: "Interior Enquiry", message: "Hi, I'm interested in your interior solutions." },
    { label: "General Enquiry", message: "Hi, I have a question about Able Windows." },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 left-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-white text-2xl" />
                <div>
                  <h3 className="text-white font-bold text-sm">Able Windows</h3>
                  <p className="text-green-100 text-xs">Typically replies instantly</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Chat bubble */}
            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-lg rounded-tl-none px-4 py-3 shadow-sm text-sm text-text leading-relaxed">
                <p className="font-medium mb-1">Hi there! 👋</p>
                <p className="text-text-light">How can we help you today? Tap below to start a conversation.</p>
              </div>
            </div>

            {/* Quick actions */}
            <div className="p-3 space-y-1.5">
              {prefilledMessages.map((item) => (
                <a
                  key={item.label}
                  href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(item.message)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 bg-slate-50 rounded-xl hover:bg-[#25D366]/10 transition-colors group"
                >
                  <span className="text-sm font-medium text-text">{item.label}</span>
                  <HiArrowRight className="text-text-light group-hover:text-[#25D366] transition-colors" />
                </a>
              ))}
            </div>

            {/* Call option */}
            <div className="px-3 pb-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm font-medium text-text hover:bg-slate-50 transition-colors"
              >
                <FaPhoneAlt className="text-xs text-primary" />
                Call +91 98765 43210
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center text-white hover:bg-[#20BD5A] transition-colors relative"
        aria-label="WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
              <FaTimes className="text-xl" />
            </motion.span>
          ) : (
            <motion.span key="wa" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
              <FaWhatsapp className="text-2xl" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        )}
      </motion.button>
    </div>
  );
}
