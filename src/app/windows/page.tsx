"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaWindowMaximize,
  FaSlidersH,
  FaExpandArrowsAlt,
  FaThLarge,
  FaVectorSquare,
  FaBorderAll,
  FaShieldAlt,
  FaVolumeDown,
  FaSun,
  FaLeaf,
  FaPaintRoller,
  FaLock,
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

const windowTypes = [
  {
    icon: FaWindowMaximize,
    title: "Casement Windows",
    description:
      "Side-hinged windows that open outward for maximum ventilation and unobstructed views. Available in single and double configurations.",
    features: [
      "Multi-point locking for security",
      "Weatherproof gasket sealing",
      "90° or 180° opening options",
      "Available in uPVC and aluminium",
    ],
    image: images.casementWindow,
  },
  {
    icon: FaSlidersH,
    title: "Sliding Windows",
    description:
      "Space-saving horizontal sliding windows ideal for balconies and compact spaces. Smooth gliding operation with premium rollers.",
    features: [
      "Premium stainless steel rollers",
      "Optional bug mesh integration",
      "2-track and 3-track options",
      "Silent operation mechanism",
    ],
    image: images.slidingWindow,
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Tilt & Turn Windows",
    description:
      "Versatile European-style windows that tilt inward for ventilation or swing open fully for cleaning and maximum airflow.",
    features: [
      "Dual-mode operation",
      "Easy cleaning from inside",
      "Enhanced security when tilted",
      "German-engineered hardware",
    ],
    image: images.tiltTurnWindow,
  },
  {
    icon: FaThLarge,
    title: "Bay & Bow Windows",
    description:
      "Elegant projecting windows that add depth, natural light, and panoramic views to your rooms. A statement of architectural beauty.",
    features: [
      "Custom angle configurations",
      "Additional interior space created",
      "Stunning panoramic views",
      "Structural steel reinforcement",
    ],
    image: images.bayWindow,
  },
  {
    icon: FaVectorSquare,
    title: "Fixed Windows",
    description:
      "Non-operable windows that maximize natural light and views. Perfect for picture windows and architectural accents.",
    features: [
      "Maximum glass area",
      "Superior energy efficiency",
      "Flush or projecting options",
      "Large size capabilities",
    ],
    image: images.fixedWindow,
  },
  {
    icon: FaBorderAll,
    title: "Combination Windows",
    description:
      "Custom configurations combining multiple window types for unique architectural requirements and design flexibility.",
    features: [
      "Fully customizable layouts",
      "Mix of fixed and operable panels",
      "Structural mullion connections",
      "Designed to your specifications",
    ],
    image: images.comboWindow,
  },
];

const upvcBenefits = [
  { icon: FaShieldAlt, benefit: "20-year warranty against discoloration and warping" },
  { icon: FaVolumeDown, benefit: "Up to 40dB noise reduction for peaceful interiors" },
  { icon: FaSun, benefit: "UV-resistant profiles rated for 8000+ hours" },
  { icon: FaLeaf, benefit: "Energy-efficient with multi-chamber insulation" },
  { icon: FaPaintRoller, benefit: "Available in 20+ colors and wood-grain finishes" },
  { icon: FaLock, benefit: "Multi-point locking systems for enhanced security" },
];

const aluminiumBenefits = [
  { icon: FaShieldAlt, benefit: "Corrosion-resistant and weatherproof" },
  { icon: FaExpandArrowsAlt, benefit: "Slim profiles for maximum glass area and views" },
  { icon: FaSun, benefit: "Thermal break technology for insulation" },
  { icon: FaPaintRoller, benefit: "Powder-coated in any RAL color" },
  { icon: FaLock, benefit: "Premium European hardware and fittings" },
  { icon: FaLeaf, benefit: "100% recyclable and eco-friendly material" },
];

export default function WindowsPage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative bg-gradient-to-br from-secondary via-slate-900 to-secondary py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image src={images.heroWindow} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/80 to-secondary" />
        <motion.div animate={floatingAnimation} className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Premium Windows
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              uPVC & Aluminium
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Window Solutions
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Explore German-engineered uPVC and precision aluminium window
              systems designed for energy efficiency, soundproofing, security,
              and lasting beauty.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all group"
            >
              Get Window Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Window Types with Images */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Window Types"
            title="Find the Perfect Windows for Your Home"
            description="Choose from our wide range of window styles, each designed for specific needs and architectural aesthetics."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {windowTypes.map((wt) => (
              <motion.div
                key={wt.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={wt.image}
                    alt={wt.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-primary/20" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                    <wt.icon className="text-lg" />
                    <h3 className="font-bold text-lg">{wt.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {wt.features.map((f, j) => (
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

      {/* uPVC Benefits with Image */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <SectionHeading
                subtitle="German uPVC"
                title="German uPVC Windows"
                description="Advanced German technology for superior insulation, soundproofing, and durability — ideal for Indian homes."
                centered={false}
              />
              <div className="space-y-4">
                {upvcBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-surface transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <b.icon className="text-primary" />
                    </div>
                    <span className="text-text-light mt-2">{b.benefit}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={images.upvcProfile} alt="uPVC Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                  <div className="text-3xl font-bold text-primary">20</div>
                  <div className="text-xs text-text-light uppercase">Year Warranty</div>
                </div>
                <div className="bg-primary/5 rounded-2xl p-6 text-center border border-primary/10">
                  <div className="text-3xl font-bold text-primary">40dB</div>
                  <div className="text-xs text-text-light uppercase">Noise Reduction</div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Aluminium Benefits with Image */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left" className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                <Image src={images.aluminiumProfile} alt="Aluminium Profile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400">Slim</div>
                  <div className="text-xs text-slate-400 uppercase">Profile Design</div>
                </div>
                <div className="bg-slate-800 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-400">100%</div>
                  <div className="text-xs text-slate-400 uppercase">Recyclable</div>
                </div>
              </div>
            </RevealOnScroll>
            <RevealOnScroll direction="right" className="order-1 lg:order-2">
              <SectionHeading
                subtitle="System Aluminium"
                title="Aluminium Window Systems"
                description="Precision-engineered profiles with premium hardware for sleek, strong, and high-performance solutions."
                centered={false}
              />
              <div className="space-y-4">
                {aluminiumBenefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <b.icon className="text-primary" />
                    </div>
                    <span className="text-text-light mt-2">{b.benefit}</span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Glass Options with Images */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Glass Options"
            title="Premium Glass Solutions"
            description="Choose from a range of advanced glass options for enhanced performance and comfort."
          />
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Toughened Glass", desc: "5x stronger than regular glass. Safety-first choice for all windows.", image: images.glassOptions },
              { title: "Double Glazed", desc: "Two glass panes with insulating air gap for thermal and acoustic performance.", image: images.fixedWindow },
              { title: "Laminated Glass", desc: "Shatter-resistant glass that holds together when broken. Maximum safety.", image: images.bayWindow },
              { title: "Reflective Glass", desc: "Reduces heat and glare while maintaining outward visibility. Energy efficient.", image: images.slidingWindow },
            ].map((glass) => (
              <motion.div
                key={glass.title}
                variants={staggerItem}
                className="bg-surface rounded-2xl overflow-hidden border border-slate-100 hover:shadow-lg transition-all card-hover group"
              >
                <div className="relative h-36 overflow-hidden">
                  <Image src={glass.image} alt={glass.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-secondary mb-2">{glass.title}</h3>
                  <p className="text-sm text-text-light">{glass.desc}</p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
        <motion.div animate={floatingAnimation} className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Windows?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get expert advice and a free estimate for your window project.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all group"
            >
              Get Free Window Quote <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
