"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
  children,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-8 md:mb-12 ${centered ? "text-center" : ""}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4">
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-secondary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-slate-300" : "text-text-light"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
