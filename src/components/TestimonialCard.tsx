"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  rating?: number;
  index?: number;
}

export default function TestimonialCard({
  quote,
  name,
  location,
  rating = 5,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-slate-100 transition-all duration-300"
    >
      <FaQuoteLeft className="text-3xl text-primary/20 mb-4" />
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="text-accent text-sm" />
        ))}
      </div>
      <p className="text-text-light leading-relaxed mb-6 line-clamp-4">
        {quote}
      </p>
      <div className="border-t border-slate-100 pt-4">
        <p className="font-semibold text-secondary">{name}</p>
        <p className="text-sm text-text-light">{location}</p>
      </div>
    </motion.div>
  );
}
