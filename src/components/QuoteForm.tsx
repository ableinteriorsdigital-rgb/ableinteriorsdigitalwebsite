"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaHome, FaCheckCircle } from "react-icons/fa";

interface QuoteFormProps {
  compact?: boolean;
}

const serviceOptions = [
  "uPVC Windows",
  "uPVC Doors",
  "Aluminium Windows",
  "Aluminium Doors",
  "Modular Kitchen",
  "Wardrobes & Storage",
  "Complete Interiors",
  "Other",
];

export default function QuoteForm({ compact = false }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    propertyType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", city: "", service: "", propertyType: "", message: "" });
      }
    } catch {
      // Handle error silently for now
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 text-center shadow-lg"
      >
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-secondary mb-2">Thank You!</h3>
        <p className="text-text-light mb-6">
          Your enquiry has been submitted successfully. Our team will contact you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors"
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={`grid ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"} gap-5`}>
        {/* Name */}
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <input
            type="text"
            required
            placeholder="Full Name *"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Phone */}
        <div className="relative">
          <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <input
            type="tel"
            required
            placeholder="Phone Number *"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Email */}
        <div className="relative">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* City */}
        <div className="relative">
          <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <input
            type="text"
            required
            placeholder="City *"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
          />
        </div>

        {/* Service */}
        <div className="relative">
          <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <select
            required
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
          >
            <option value="">Select Service *</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Property Type */}
        <div className="relative">
          <FaHome className="absolute left-4 top-1/2 -translate-y-1/2 text-text-light text-sm" />
          <select
            value={formData.propertyType}
            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
            className="w-full pl-11 pr-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
          >
            <option value="">Property Type</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="villa">Villa / Independent House</option>
            <option value="apartment">Apartment</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <textarea
        rows={compact ? 3 : 4}
        placeholder="Additional message (optional)"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        className="w-full px-4 py-3.5 bg-surface border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Get Free Quote →"}
      </button>
    </form>
  );
}
