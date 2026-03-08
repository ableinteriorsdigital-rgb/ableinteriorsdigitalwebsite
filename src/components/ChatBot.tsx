"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane } from "react-icons/fa";
import { HiChat } from "react-icons/hi";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const quickReplies = [
  "I need a quote for windows",
  "Tell me about your doors",
  "Interior design enquiry",
  "What warranty do you offer?",
  "I want to book a site visit",
];

function getBotResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("quote") || lower.includes("price") || lower.includes("cost")) {
    return "We'd love to give you a quote! You can fill out our free quote form at /get-quote, or share your requirements here:\n\n• Type of product (Windows / Doors / Interiors)\n• Approximate measurements\n• Your location\n\nOur team will get back within 24 hours with a detailed estimate.";
  }
  if (lower.includes("window")) {
    return "We offer premium German-engineered uPVC windows and aluminium windows including:\n\n• Casement Windows\n• Sliding Windows\n• Tilt & Turn Windows\n• Bay Windows\n• Fixed Windows\n\nAll come with a 20-year profile warranty. Would you like a free quote?";
  }
  if (lower.includes("door")) {
    return "Our door range includes:\n\n• Sliding Doors\n• French Doors\n• Bi-fold Doors\n• Entrance Doors\n• Casement Doors\n\nAll crafted with premium uPVC & aluminium profiles. Want me to arrange a free consultation?";
  }
  if (lower.includes("interior") || lower.includes("kitchen") || lower.includes("wardrobe")) {
    return "Our interior solutions include:\n\n• Modular Kitchens\n• Wardrobes & Walk-in Closets\n• TV Units\n• Study Rooms\n• Complete Bedroom Interiors\n\nWe use premium materials from Hettich, Hafele & Blum. Shall I book a free design consultation?";
  }
  if (lower.includes("warranty") || lower.includes("guarantee")) {
    return "We offer industry-leading warranties:\n\n• 20 years on uPVC profiles\n• 10 years on hardware\n• Products are CIPET certified\n• 8000-hour UV resistance tested\n\nYour investment is fully protected!";
  }
  if (lower.includes("site visit") || lower.includes("visit") || lower.includes("book")) {
    return "We'd be happy to arrange a free site visit! Please share:\n\n• Your name\n• Phone number\n• Address / Area\n• Preferred date & time\n\nOr call us directly at +91 97890 53195 for instant scheduling.";
  }
  if (lower.includes("location") || lower.includes("area") || lower.includes("serve") || lower.includes("chennai")) {
    return "We serve all of Tamil Nadu! Our primary service areas include Chennai, Coimbatore, Madurai, Trichy, Salem, and 50+ other locations. We also handle projects across South India for large orders.";
  }
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    return "Hello! 👋 Welcome to Able Interiors & Windows. How can I help you today?\n\nYou can ask me about:\n• Windows & Doors\n• Interior Solutions\n• Pricing & Quotes\n• Warranty Information\n• Booking a Site Visit";
  }

  return "Thank you for your message! For detailed assistance, you can:\n\n• Call us: +91 97890 53195\n• WhatsApp us for quick replies\n• Fill our quote form at /get-quote\n\nOr ask me about our windows, doors, interiors, warranty, or booking a site visit!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Hi there! 👋 Welcome to Able Interiors & Windows. I'm here to help you with windows, doors, and interior solutions. How can I assist you today?",
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: text.trim(),
      sender: "user",
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 800 + Math.random() * 600);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white hover:bg-primary-dark transition-colors group"
            aria-label="Open chat"
          >
            <HiChat className="text-2xl group-hover:scale-110 transition-transform" />
            {/* Notification dot */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
            style={{ height: "min(520px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primary-light px-5 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <HiChat className="text-white text-lg" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Able Interiors & Windows</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    <span className="text-blue-100 text-xs">Online now</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-sm" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-white text-text border border-slate-100 rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 rounded-2xl rounded-bl-md px-4 py-3 shadow-sm">
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-slate-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 shrink-0">
                <p className="text-xs text-text-light mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-1.5">
                  {quickReplies.map((reply) => (
                    <button
                      key={reply}
                      onClick={() => sendMessage(reply)}
                      className="px-3 py-1.5 text-xs bg-white border border-primary/30 text-primary rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="px-4 py-3 bg-white border-t border-slate-100 flex items-center gap-2 shrink-0"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 bg-slate-50 rounded-full text-sm text-text placeholder:text-text-light focus:outline-none focus:ring-2 focus:ring-primary/30 border border-slate-200"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <FaPaperPlane className="text-sm" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
