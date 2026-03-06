"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  features: string[];
  index?: number;
  gradient?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  features,
  index = 0,
  gradient = "from-primary to-primary-light",
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 group"
    >
      <div className={`bg-gradient-to-r ${gradient} p-6`}>
        <Icon className="text-4xl text-white mb-3" />
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-text-light">
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
