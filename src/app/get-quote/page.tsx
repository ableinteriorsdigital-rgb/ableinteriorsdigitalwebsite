"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaCheckCircle,
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

const benefits = [
  "Free site visit and consultation",
  "Detailed quotation within 24 hours",
  "No obligation — compare and decide",
  "Expert advice on materials and designs",
  "20-year warranty on uPVC profiles",
  "Transparent pricing — no hidden costs",
];

export default function GetQuotePage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={images.heroLiving} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute top-10 right-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <motion.div animate={floatingAnimation} className="absolute bottom-10 left-10 w-60 h-60 bg-primary-light/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Free Consultation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Get Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Free Quote
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tell us about your project and get a detailed, no-obligation quote
              within 24 hours. Our experts will guide you to the perfect solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <RevealOnScroll direction="left" className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
                <h2 className="text-2xl font-bold text-secondary mb-2">
                  Request a Quote
                </h2>
                <p className="text-text-light mb-8">
                  Fill in the details below and our team will prepare a customized
                  quote for your project.
                </p>
                <QuoteForm />
              </div>
            </RevealOnScroll>

            {/* Sidebar */}
            <RevealOnScroll direction="right" className="lg:col-span-2 space-y-8">
              {/* Benefits */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 card-hover">
                <h3 className="text-lg font-bold text-secondary mb-5">
                  What You Get
                </h3>
                <div className="space-y-4">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <FaCheckCircle className="text-green-500 mt-0.5 shrink-0" />
                      <span className="text-sm text-text-light">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white card-hover">
                <h3 className="text-lg font-bold mb-4">Prefer to Talk?</h3>
                <p className="text-blue-100 text-sm mb-6">
                  Call or WhatsApp us directly for an instant consultation.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-3 px-5 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors text-sm"
                  >
                    <FaPhoneAlt />
                    <span>+91 98765 43210</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-5 py-3 bg-white/20 rounded-xl hover:bg-white/30 transition-colors text-sm"
                  >
                    <FaWhatsapp />
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>

              {/* Trust with image */}
              <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden card-hover">
                <div className="relative h-40 overflow-hidden">
                  <Image src={images.installation} alt="Installation" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-primary">500+</div>
                      <div className="text-xs text-text-light uppercase tracking-wider">
                        Happy Clients
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">1000+</div>
                      <div className="text-xs text-text-light uppercase tracking-wider">
                        Installations
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">20yr</div>
                      <div className="text-xs text-text-light uppercase tracking-wider">
                        Warranty
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">50+</div>
                      <div className="text-xs text-text-light uppercase tracking-wider">
                        Locations
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            subtitle="Simple Process"
            title="How It Works"
          />
          <StaggerChildren className="grid sm:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Submit Your Request",
                desc: "Fill the form above with your project details and requirements.",
              },
              {
                step: "2",
                title: "Get Expert Advice",
                desc: "Our team contacts you within 24 hours with personalized recommendations.",
              },
              {
                step: "3",
                title: "Receive Your Quote",
                desc: "Get a detailed, transparent quotation with no hidden costs or obligations.",
              },
            ].map((s) => (
              <motion.div
                key={s.step}
                variants={staggerItem}
                className="text-center card-hover bg-surface rounded-2xl p-8"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{s.step}</span>
                </div>
                <h3 className="font-bold text-secondary mb-2">{s.title}</h3>
                <p className="text-sm text-text-light">{s.desc}</p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
