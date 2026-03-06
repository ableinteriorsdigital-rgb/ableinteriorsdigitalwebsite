"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <Icon className="text-2xl text-primary group-hover:text-white transition-colors" />
      </div>
      <h3 className="text-xl font-bold text-secondary mb-3">{title}</h3>
      <p className="text-text-light leading-relaxed">{description}</p>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-light rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
