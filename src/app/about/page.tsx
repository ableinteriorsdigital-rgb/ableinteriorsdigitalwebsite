"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaAward,
  FaUsers,
  FaMapMarkerAlt,
  FaPalette,
  FaWrench,
  FaBullseye,
  FaEye,
  FaHeart,
} from "react-icons/fa";
import { HiArrowRight, HiOutlineCheckCircle } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import { images } from "@/lib/images";
import {
  RevealOnScroll,
  StaggerChildren,
  staggerItem,
  floatingAnimation,
} from "@/components/animations";

const milestones = [
  { year: "2013", event: "Founded Able Windows with a vision for premium window solutions" },
  { year: "2015", event: "Expanded to aluminium window and door systems" },
  { year: "2017", event: "Reached 100+ residential project completions" },
  { year: "2019", event: "Launched complete interior solutions division" },
  { year: "2021", event: "Expanded operations across Tamil Nadu — 30+ locations" },
  { year: "2023", event: "500+ satisfied clients milestone achieved" },
  { year: "2025", event: "Serving 50+ locations with 1000+ installations completed" },
];

const values = [
  {
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "To deliver world-class window, door, and interior solutions that combine cutting-edge technology with aesthetic excellence, making premium quality accessible to every homeowner.",
  },
  {
    icon: FaEye,
    title: "Our Vision",
    description:
      "To be the most trusted name in windows, doors, and interiors across South India — known for uncompromising quality, innovative design, and customer-first service.",
  },
  {
    icon: FaHeart,
    title: "Our Values",
    description:
      "Quality without compromise, transparency in every transaction, innovation in design, and a deep commitment to customer satisfaction drive everything we do.",
  },
];

const strengths = [
  "German-engineered uPVC profiles with advanced multi-chamber technology",
  "Precision aluminium systems with thermal break technology",
  "20-year profile warranty and 10-year hardware warranty",
  "CIPET certified products for superior quality assurance",
  "8000-hour UV resistance testing for Indian tropical conditions",
  "Dedicated in-house design and installation teams",
  "End-to-end project management from consultation to completion",
  "After-sales support and maintenance services",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={images.showroom} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <motion.div animate={floatingAnimation} className="absolute bottom-10 left-10 w-60 h-60 bg-primary-light/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Trusted Partner for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Windows, Doors & Interiors
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We design and deliver premium uPVC and aluminium windows, doors,
              and interior solutions that enhance comfort, beauty, and
              functionality in every home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={12} suffix="+" label="Years Experience" />
            <StatCounter end={50} suffix="+" label="Locations Served" />
            <StatCounter end={500} suffix="+" label="Happy Clients" />
            <StatCounter end={1000} suffix="+" label="Installations" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="What Drives Us"
            title="Mission, Vision & Values"
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={staggerItem}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg border border-slate-100 transition-all card-hover"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <v.icon className="text-2xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">
                  {v.title}
                </h3>
                <p className="text-text-light leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Our Story with Images */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <SectionHeading
                subtitle="Our Story"
                title="Building Trust with Quality and Value"
                centered={false}
              />
              <p className="text-text-light leading-relaxed mb-6">
                Able Windows has meticulously built a reputation for trust and
                quality by consistently delivering high value, lasting
                functionality, and reliable benefits. Since our inception, we
                have been dedicated to bringing world-class window and door
                solutions to Indian homes.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Our products have been tested for quality and safety, and we
                cater to a wide range of categories in the construction
                industry, including residential, commercial, industrial,
                institutional, and architectural segments.
              </p>
              <p className="text-text-light leading-relaxed">
                We take pride in building long-lasting relationships with our
                customers by providing the best-in-class service and solutions
                for their window design and interior design needs.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="masonry-grid-3">
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 280 }}>
                  <Image src={images.factory} alt="Factory" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 200 }}>
                  <Image src={images.gallery6} alt="Project" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 260 }}>
                  <Image src={images.team} alt="Team" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 180 }}>
                  <Image src={images.gallery7} alt="Installation" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 240 }}>
                  <Image src={images.installation} alt="Installation" fill className="object-cover" />
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold text-secondary mb-4">
                  What Sets Us Apart
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {strengths.slice(0, 4).map((s, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 bg-surface rounded-xl"
                    >
                      <HiOutlineCheckCircle className="text-lg text-green-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-text-light">{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            subtitle="Our Journey"
            title="Milestones That Define Us"
          />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="hidden md:block md:w-1/2">
                    <div
                      className={`p-5 bg-white rounded-xl shadow-sm border border-slate-100 ${
                        i % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="text-sm text-text-light">{m.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-lg shadow-primary/30">
                    {m.year.slice(2)}
                  </div>
                  <div className="md:w-1/2">
                    <div className="md:hidden p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                      <span className="text-xs font-bold text-primary">
                        {m.year}
                      </span>
                      <p className="text-sm text-text-light mt-1">{m.event}</p>
                    </div>
                    <span className="hidden md:block text-lg font-bold text-primary">
                      {m.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Segments We Serve */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Who We Serve"
            title="Trusted Across Segments"
            description="We deliver solutions tailored for every type of project."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FaUsers, title: "Homeowners", desc: "Personalized solutions for your dream home", image: images.heroLiving },
              { icon: FaAward, title: "Builders & Developers", desc: "Large-scale projects with consistent quality", image: images.project3 },
              { icon: FaPalette, title: "Architects & Designers", desc: "Custom profiles to match your vision", image: images.project5 },
              { icon: FaWrench, title: "Commercial Projects", desc: "Durable solutions for offices and retail", image: images.project1 },
            ].map((seg) => (
              <motion.div
                key={seg.title}
                variants={staggerItem}
                className="text-center bg-surface rounded-2xl overflow-hidden hover:shadow-lg transition-all group card-hover"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image src={seg.image} alt={seg.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3 -mt-10 relative bg-white shadow-md group-hover:bg-primary transition-colors">
                    <seg.icon className="text-lg text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-secondary mb-2">{seg.title}</h3>
                  <p className="text-sm text-text-light">{seg.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Something Beautiful Together
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&apos;re building a new home or renovating, we&apos;re here to
              make your vision a reality.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all"
              >
                Get Free Quote <HiArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
