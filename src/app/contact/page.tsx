"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import QuoteForm from "@/components/QuoteForm";
import { images } from "@/lib/images";
import {
  RevealOnScroll,
  StaggerChildren,
  staggerItem,
  floatingAnimation,
} from "@/components/animations";

const contactInfo = [
  {
    icon: FaPhone,
    title: "Phone",
    details: ["+91 98765 43210"],
    link: "tel:+919876543210",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+91 98765 43210"],
    link: "https://wa.me/919876543210",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: ["info@ablewindows.com", "sales@ablewindows.com"],
    link: "mailto:info@ablewindows.com",
    color: "bg-amber-50 text-amber-600",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Office Address",
    details: ["123, Anna Salai", "Chennai, Tamil Nadu 600002"],
    link: "#map",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: FaClock,
    title: "Working Hours",
    details: ["Mon – Sat: 9:00 AM – 7:00 PM", "Sun: 10:00 AM – 4:00 PM"],
    link: null,
    color: "bg-purple-50 text-purple-600",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={images.showroom} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Able Windows
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to start your project? Reach out to us
              and our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 -mt-16 relative z-10">
            {contactInfo.map((info) => (
              <motion.div
                key={info.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all card-hover"
              >
                <div
                  className={`w-12 h-12 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                >
                  <info.icon className="text-xl" />
                </div>
                <h3 className="font-bold text-secondary mb-2">{info.title}</h3>
                {info.details.map((detail, j) =>
                  info.link && j === 0 ? (
                    <a
                      key={j}
                      href={info.link}
                      className="block text-sm text-text-light hover:text-primary transition-colors"
                    >
                      {detail}
                    </a>
                  ) : (
                    <p key={j} className="text-sm text-text-light">
                      {detail}
                    </p>
                  )
                )}
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Contact Form + Map */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <RevealOnScroll direction="left">
              <SectionHeading
                subtitle="Send Enquiry"
                title="Send Us a Message"
                description="Fill in the form below and our team will contact you within 24 hours."
                centered={false}
              />
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                <QuoteForm />
              </div>
            </RevealOnScroll>

            {/* Map + Info */}
            <RevealOnScroll direction="right">
              <SectionHeading
                subtitle="Visit Us"
                title="Our Location"
                description="Visit our showroom to explore our products and discuss your project in person."
                centered={false}
              />
              <div id="map" className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={images.showroom} alt="Showroom" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-8">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-white mb-2">
                        Able Windows Showroom
                      </h3>
                      <p className="text-white/80 text-sm mb-4">
                        123, Anna Salai, Chennai, Tamil Nadu 600002
                      </p>
                      <a
                        href="https://maps.google.com/?q=Chennai+Tamil+Nadu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2 bg-white text-primary text-sm font-semibold rounded-full hover:shadow-lg transition-all"
                      >
                        <FaMapMarkerAlt />
                        Open in Google Maps
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-secondary mb-3">
                    How to Reach Us
                  </h4>
                  <div className="space-y-3 text-sm text-text-light">
                    <p>
                      <strong className="text-secondary">By Car:</strong> Located on
                      Anna Salai (Mount Road), easily accessible from all parts
                      of Chennai. Free parking available.
                    </p>
                    <p>
                      <strong className="text-secondary">By Metro:</strong> Nearest
                      metro station is just 5 minutes walk.
                    </p>
                    <p>
                      <strong className="text-secondary">By Bus:</strong> Multiple
                      bus routes stop within walking distance.
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            subtitle="FAQs"
            title="Frequently Asked Questions"
          />
          <StaggerChildren className="space-y-4">
            {[
              {
                q: "What areas do you serve?",
                a: "We serve all of Tamil Nadu with our products and installation services. Our primary locations include Chennai, Coimbatore, Madurai, Trichy, Salem, and surrounding areas.",
              },
              {
                q: "Do you offer free site visits?",
                a: "Yes! We offer complimentary site visits for measurement and consultation. Our team will visit your location, assess requirements, and provide a detailed quotation.",
              },
              {
                q: "What is the typical project timeline?",
                a: "For windows and doors, typical delivery and installation takes 2-4 weeks after order confirmation. For interior projects, timelines range from 4-8 weeks depending on scope.",
              },
              {
                q: "Do you work with builders and architects?",
                a: "Absolutely! We have a dedicated B2B division that works closely with builders, developers, and architects for large-scale residential and commercial projects.",
              },
              {
                q: "What warranty do you provide?",
                a: "We offer a 20-year warranty on uPVC profiles against discoloration, warping, and manufacturing defects. Hardware comes with a 10-year warranty against breakage and bending.",
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                className="bg-surface rounded-2xl p-6 hover:shadow-md transition-all card-hover"
              >
                <h3 className="font-bold text-secondary mb-2">{faq.q}</h3>
                <p className="text-sm text-text-light leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
