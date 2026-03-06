"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaTshirt,
  FaTv,
  FaBookOpen,
  FaPray,
  FaBed,
  FaPaintBrush,
  FaRulerCombined,
  FaTools,
  FaHandshake,
  FaShieldAlt,
  FaGem,
} from "react-icons/fa";
import { HiArrowRight, HiOutlineCheckCircle } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import { images } from "@/lib/images";
import {
  RevealOnScroll,
  StaggerChildren,
  staggerItem,
  floatingAnimation,
} from "@/components/animations";

const interiorSolutions = [
  {
    icon: FaUtensils,
    title: "Modular Kitchen",
    features: [
      "L-shape, U-shape, parallel & island layouts",
      "Premium marine-grade plywood & hardware",
      "Soft-close hinges and drawer channels",
      "Granite, quartz, and Corian countertops",
    ],
    image: images.modularKitchen,
  },
  {
    icon: FaTshirt,
    title: "Wardrobes & Walk-in Closets",
    features: [
      "Sliding, hinged, and loft configurations",
      "Customized internal organizers",
      "Full-length mirror integration",
      "Accessory trays and pull-out shelves",
    ],
    image: images.wardrobe,
  },
  {
    icon: FaTv,
    title: "TV Units & Entertainment",
    features: [
      "Wall-mounted and floor-standing designs",
      "Cable management solutions",
      "Integrated lighting options",
      "Display shelves and storage drawers",
    ],
    image: images.tvUnit,
  },
  {
    icon: FaBookOpen,
    title: "Study & Work Spaces",
    features: [
      "Ergonomic desk configurations",
      "Built-in bookshelves and storage",
      "Cable management for electronics",
      "Optimized lighting design",
    ],
    image: images.studyRoom,
  },
  {
    icon: FaPray,
    title: "Pooja Room",
    features: [
      "Traditional and contemporary designs",
      "Intricate CNC-cut patterns",
      "Custom lighting and storage",
      "Premium wood and laminate finishes",
    ],
    image: images.poojaRoom,
  },
  {
    icon: FaBed,
    title: "Bedroom Interiors",
    features: [
      "Custom headboard designs",
      "Bedside tables and dressers",
      "Integrated storage solutions",
      "False ceiling and lighting design",
    ],
    image: images.bedroom,
  },
];

const process = [
  {
    icon: FaHandshake,
    step: "01",
    title: "Consultation",
    desc: "Free in-home consultation to understand your needs, style preferences, and budget.",
  },
  {
    icon: FaPaintBrush,
    step: "02",
    title: "Design",
    desc: "Our designers create detailed 3D renders and material selections for your approval.",
  },
  {
    icon: FaRulerCombined,
    step: "03",
    title: "Manufacturing",
    desc: "Precision manufacturing in our facility using premium materials and hardware.",
  },
  {
    icon: FaTools,
    step: "04",
    title: "Installation",
    desc: "Expert installation team ensures perfect fitting and thorough quality checks.",
  },
];

const materialHighlights = [
  {
    icon: FaGem,
    title: "Premium Materials",
    desc: "Marine-grade plywood, premium laminates, and branded hardware from Hettich, Hafele, and Blum.",
  },
  {
    icon: FaShieldAlt,
    title: "Durable Finishes",
    desc: "Anti-scratch, water-resistant, and UV-stable finishes that maintain their beauty for years.",
  },
  {
    icon: FaRulerCombined,
    title: "Precision Craftsmanship",
    desc: "CNC-cut components with millimeter accuracy for perfect fit and seamless installation.",
  },
  {
    icon: FaPaintBrush,
    title: "Design Variety",
    desc: "Choose from 500+ laminate textures, colors, and finishes to match your vision perfectly.",
  },
];

export default function InteriorsPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={images.heroInterior} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute bottom-10 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Interior Solutions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Bespoke Home
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Interior Solutions
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform every corner of your home with our premium interior
              solutions — modular kitchens, wardrobes, TV units, and complete
              home interiors crafted with precision and style.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              Get Interior Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Interior Solutions with Images */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Our Solutions"
            title="Complete Interior Solutions for Every Room"
            description="From modular kitchens to bedroom interiors — we design, manufacture, and install with meticulous attention to detail."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorSolutions.map((sol) => (
              <motion.div
                key={sol.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-700/80 to-amber-600/20" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <sol.icon className="text-lg" />
                    <h3 className="font-bold text-lg">{sol.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {sol.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <HiOutlineCheckCircle className="text-amber-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Design Process */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="How We Work"
            title="Our 4-Step Design Process"
            description="A seamless journey from idea to installation — we make it effortless for you."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <motion.div
                key={p.title}
                variants={staggerItem}
                className="relative text-center p-8 bg-surface rounded-2xl hover:shadow-lg transition-all group card-hover"
              >
                <div className="text-5xl font-black text-primary/10 absolute top-4 right-4">
                  {p.step}
                </div>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-primary transition-colors">
                  <p.icon className="text-2xl text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-secondary mb-2">{p.title}</h3>
                <p className="text-sm text-text-light">{p.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 text-primary/30">
                    <HiArrowRight className="text-xl" />
                  </div>
                )}
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Material & Quality with Images */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Quality Materials"
            title="Premium Materials & Craftsmanship"
            description="We use only the finest materials and hardware to ensure lasting beauty and functionality."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <div className="masonry-grid-3">
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 260 }}>
                  <Image src={images.modularKitchen} alt="Kitchen" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 200 }}>
                  <Image src={images.wardrobe} alt="Wardrobe" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 280 }}>
                  <Image src={images.tvUnit} alt="TV Unit" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 220 }}>
                  <Image src={images.bedroom} alt="Bedroom" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 240 }}>
                  <Image src={images.studyRoom} alt="Study Room" fill className="object-cover" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine" style={{ height: 180 }}>
                  <Image src={images.poojaRoom} alt="Pooja Room" fill className="object-cover" />
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="space-y-6">
                {materialHighlights.map((m, i) => (
                  <div
                    key={m.title}
                    className="flex gap-5 p-5 bg-white rounded-2xl border border-slate-100 card-hover"
                  >
                    <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                      <m.icon className="text-2xl text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary mb-1">{m.title}</h3>
                      <p className="text-sm text-text-light">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
        <motion.div animate={floatingAnimation} className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Design Your Dream Interiors?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Book a free design consultation with our interior experts today.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all group"
            >
              Get Free Interior Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
