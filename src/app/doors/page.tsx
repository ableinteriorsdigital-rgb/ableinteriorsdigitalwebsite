"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaDoorOpen,
  FaDoorClosed,
  FaSlidersH,
  FaExpandArrowsAlt,
  FaColumns,
  FaArchway,
  FaShieldAlt,
  FaVolumeDown,
  FaLock,
  FaPaintRoller,
  FaCogs,
  FaSun,
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

const doorTypes = [
  {
    icon: FaSlidersH,
    title: "Sliding Doors",
    features: [
      "Space-saving design with smooth gliding",
      "Premium stainless steel rollers",
      "2-track, 3-track, and lift-and-slide options",
      "Ideal for balconies and patios",
    ],
    image: images.slidingDoor,
  },
  {
    icon: FaDoorOpen,
    title: "French Doors",
    features: [
      "Classic double-door elegance",
      "Full 180° opening capability",
      "Multi-point locking security",
      "Perfect for gardens and balconies",
    ],
    image: images.frenchDoor,
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Bi-Fold Doors",
    features: [
      "Folds away to open up entire wall",
      "Seamless indoor-outdoor transition",
      "2 to 7 panel configurations",
      "Smooth folding mechanism",
    ],
    image: images.bifoldDoor,
  },
  {
    icon: FaDoorClosed,
    title: "Entrance Doors",
    features: [
      "Robust construction for main entry",
      "Multi-point locking systems",
      "Wide range of panel designs",
      "Reinforced steel core option",
    ],
    image: images.entranceDoor,
  },
  {
    icon: FaColumns,
    title: "Casement Doors",
    features: [
      "Traditional hinged door style",
      "Single or double door options",
      "Adjustable friction stays",
      "Available in all profiles",
    ],
    image: images.casementDoor,
  },
  {
    icon: FaArchway,
    title: "Tilt & Slide Doors",
    features: [
      "Tilt for ventilation, slide to open",
      "Large glass panels for views",
      "Superior weather sealing",
      "European hardware mechanism",
    ],
    image: images.tiltSlideDoor,
  },
];

const doorBenefits = [
  {
    icon: FaShieldAlt,
    title: "Superior Security",
    desc: "Multi-point locking systems, reinforced profiles, and toughened glass options ensure maximum safety for your home.",
  },
  {
    icon: FaVolumeDown,
    title: "Sound Insulation",
    desc: "Advanced sealing and multi-chamber profiles reduce external noise by up to 40dB for peaceful interiors.",
  },
  {
    icon: FaSun,
    title: "Weather Resistant",
    desc: "UV-resistant profiles and EPDM gaskets withstand extreme Indian weather conditions for decades.",
  },
  {
    icon: FaPaintRoller,
    title: "Design Flexibility",
    desc: "Available in 20+ colors, wood-grain finishes, and custom designs to match your home's architecture.",
  },
  {
    icon: FaCogs,
    title: "Smooth Operation",
    desc: "Premium European hardware ensures effortless operation, day after day, year after year.",
  },
  {
    icon: FaLock,
    title: "Child Safety",
    desc: "Optional child-safe locks and restrictors provide peace of mind for families with young children.",
  },
];

export default function DoorsPage() {
  return (
    <>
      {/* Hero with image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={images.heroDoor} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Premium Doors
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              uPVC & Aluminium
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Door Solutions
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Secure, elegant, and energy-efficient door systems engineered for
              Indian homes. From sliding doors to grand entrances — find your
              perfect match.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              Get Door Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Door Types with Images */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Door Types"
            title="Doors Designed for Every Space"
            description="Explore our comprehensive range of door systems, each crafted for specific functional and aesthetic needs."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorTypes.map((dt) => (
              <motion.div
                key={dt.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={dt.image}
                    alt={dt.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-slate-800/20" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <dt.icon className="text-lg" />
                    <h3 className="font-bold text-lg">{dt.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {dt.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-text-light">
                        <HiOutlineCheckCircle className="text-green-500 shrink-0 mt-0.5" />
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

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Key Benefits"
            title="Why Our Doors Stand Out"
            description="Every door from Able Interiors & Windows is built with precision, tested for performance, and designed for beauty."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doorBenefits.map((b) => (
              <motion.div
                key={b.title}
                variants={staggerItem}
                className="flex gap-5 p-6 rounded-2xl hover:bg-surface transition-all duration-300 group card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <b.icon className="text-xl text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{b.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* uPVC vs Aluminium Comparison with Images */}
      <section className="section-padding bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <SectionHeading
            subtitle="Compare"
            title="uPVC vs Aluminium Doors"
            description="Both materials excel in different areas. Let us help you choose the right one for your needs."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <RevealOnScroll direction="left">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover">
                <div className="relative h-44 overflow-hidden">
                  <Image src={images.upvcProfile} alt="uPVC Doors" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">uPVC Doors</h3>
                    <p className="text-blue-100 text-sm">Best for insulation & value</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    "Superior thermal insulation",
                    "Excellent sound reduction",
                    "20-year profile warranty",
                    "Low maintenance — no painting",
                    "Cost-effective solution",
                    "Wide color & finish options",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-text-light">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover">
                <div className="relative h-44 overflow-hidden">
                  <Image src={images.aluminiumProfile} alt="Aluminium Doors" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-700/20" />
                  <div className="absolute bottom-4 left-6">
                    <h3 className="text-2xl font-bold text-white">Aluminium Doors</h3>
                    <p className="text-slate-300 text-sm">Best for strength & aesthetics</p>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    "Ultra-slim profiles for max glass",
                    "Exceptional structural strength",
                    "Large span capabilities",
                    "Powder-coated any RAL color",
                    "Premium, modern look",
                    "100% recyclable material",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-text-light">
                      <span className="w-2 h-2 bg-slate-600 rounded-full shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
        <motion.div animate={floatingAnimation} className="absolute -top-20 -left-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Find the Perfect Doors for Your Home
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get a free consultation and custom quote for your door project.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all group"
            >
              Get Free Door Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>

  );
}
