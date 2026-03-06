"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaAward,
  FaCogs,
  FaThumbsUp,
  FaHome,
  FaPaintBrush,
  FaWindowMaximize,
  FaDoorOpen,
  FaCouch,
  FaCertificate,
  FaHandshake,
  FaTools,
  FaStar,
} from "react-icons/fa";
import {
  HiOutlineCheckCircle,
  HiArrowRight,
} from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import StatCounter from "@/components/StatCounter";
import QuoteForm from "@/components/QuoteForm";
import { images } from "@/lib/images";
import {
  RevealOnScroll,
  StaggerChildren,
  staggerItem,
  floatingAnimation,
  floatingSlow,
} from "@/components/animations";

const services = [
  {
    icon: FaWindowMaximize,
    title: "German uPVC Windows",
    description:
      "Advanced German-engineered uPVC windows with superior insulation, soundproofing, and UV resistance. Perfect for Indian climate conditions.",
    image: images.casementWindow,
    href: "/windows",
  },
  {
    icon: FaDoorOpen,
    title: "Premium uPVC Doors",
    description:
      "Durable, weather-resistant uPVC doors that combine security with elegance. Available in sliding, casement, and French door styles.",
    image: images.frenchDoor,
    href: "/doors",
  },
  {
    icon: FaCogs,
    title: "Aluminium Windows & Doors",
    description:
      "Precision-engineered aluminium profiles with premium hardware for sleek, strong, and high-performance window and door solutions.",
    image: images.slidingWindow,
    href: "/windows",
  },
  {
    icon: FaPaintBrush,
    title: "Modular Kitchens",
    description:
      "Bespoke modular kitchen designs with premium materials, smart storage solutions, and flawless execution for modern homes.",
    image: images.modularKitchen,
    href: "/interiors",
  },
  {
    icon: FaCouch,
    title: "Wardrobes & Storage",
    description:
      "Custom-designed wardrobes and storage solutions that maximize space while complementing your home's aesthetic.",
    image: images.wardrobe,
    href: "/interiors",
  },
  {
    icon: FaHome,
    title: "Complete Interiors",
    description:
      "End-to-end interior design and execution — from concept to completion. Transform every room with style and functionality.",
    image: images.bedroom,
    href: "/interiors",
  },
];

const whyChooseUs = [
  {
    icon: FaShieldAlt,
    title: "20-Year Profile Warranty",
    desc: "Industry-leading warranty on all uPVC profiles against discoloration, warping, and defects.",
  },
  {
    icon: FaAward,
    title: "Certified Quality",
    desc: "Products tested and certified by leading quality assurance institutions for durability and safety.",
  },
  {
    icon: FaCogs,
    title: "German Engineering",
    desc: "Advanced German technology ensuring superior insulation, soundproofing, and energy efficiency.",
  },
  {
    icon: FaThumbsUp,
    title: "Expert Installation",
    desc: "Professional installation teams ensuring perfect fitting and long-lasting performance.",
  },
  {
    icon: FaHandshake,
    title: "End-to-End Service",
    desc: "From consultation to installation and after-sales support — we handle everything.",
  },
  {
    icon: FaTools,
    title: "10-Year Hardware Warranty",
    desc: "Premium hardware with 10-year warranty against breakage and bending.",
  },
];

const testimonials = [
  {
    quote:
      "Able Windows transformed our home with stunning uPVC windows. The soundproofing is incredible — we barely hear the traffic now. The team was professional and completed the installation on time.",
    name: "Rajesh Kumar",
    location: "Chennai",
    avatar: images.avatar1,
    rating: 5,
  },
  {
    quote:
      "We chose Able Windows for our villa project and couldn't be happier. The aluminium sliding doors they installed are elegant and smooth. Their attention to detail sets them apart from competitors.",
    name: "Priya Venkatesh",
    location: "Coimbatore",
    avatar: images.avatar2,
    rating: 5,
  },
  {
    quote:
      "From modular kitchen to wardrobes, Able Windows delivered everything with precision. The quality of materials and craftsmanship is outstanding. Highly recommend their interior solutions!",
    name: "Suresh Babu",
    location: "Madurai",
    avatar: images.avatar3,
    rating: 5,
  },
];

const certifications = [
  "CIPET Certified for superior product quality",
  "8000-Hour UV resistance tested and certified",
  "20-Year profile warranty against defects",
  "10-Year hardware warranty for lasting performance",
  "ISO quality management standards",
  "BIS compliant products",
];

const projectShowcase = [
  { image: images.project1, title: "Modern Villa - Chennai", category: "Windows", height: "h-64" },
  { image: images.gallery1, title: "Penthouse Suite - Coimbatore", category: "Interiors", height: "h-80" },
  { image: images.project3, title: "Contemporary Home - Madurai", category: "Doors", height: "h-56" },
  { image: images.gallery5, title: "Luxury Flat - Salem", category: "Interiors", height: "h-72" },
  { image: images.project5, title: "Premium Villa - Trichy", category: "Windows", height: "h-60" },
  { image: images.gallery3, title: "Duplex Interiors - Chennai", category: "Interiors", height: "h-80" },
  { image: images.gallery2, title: "Executive Office - Madurai", category: "Windows", height: "h-56" },
  { image: images.gallery4, title: "Flagship Showroom - Trichy", category: "Doors", height: "h-64" },
];

export default function HomePage() {
  return (
    <>
      {/* ───── Hero Section ───── */}
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-br from-secondary via-slate-900 to-secondary overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        {/* Floating decorative shapes */}
        <motion.div animate={floatingAnimation} className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <motion.div animate={floatingSlow} className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl" />
        <motion.div animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }} className="absolute top-1/3 right-1/3 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-blue-200 backdrop-blur-sm mb-6"
            >
              <FaCertificate className="text-accent" />
              Trusted by 500+ Clients Across Tamil Nadu
            </motion.span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Windows, Doors
              </span>
              <br />& Interior Solutions
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-slate-300 max-w-xl mb-8 leading-relaxed"
            >
              Elevate your living spaces with German-engineered uPVC windows,
              precision aluminium doors, and bespoke interior designs. Quality
              guaranteed with up to 20-year warranty.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Get Free Quote
                <HiArrowRight className="text-lg group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Call +91 98765 43210
              </a>
            </motion.div>
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10"
            >
              {[
                { num: "20+", label: "Years Warranty" },
                { num: "10+", label: "Years Hardware" },
                { num: "500+", label: "Happy Clients" },
              ].map((badge) => (
                <div key={badge.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{badge.num}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider">
                    {badge.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Quick Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 shadow-2xl relative"
          >
            <div className="absolute -top-3 -right-3 px-4 py-1.5 bg-accent text-white text-xs font-bold rounded-full shadow-lg">
              FREE
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-2">
              Get a Free Quote
            </h3>
            <p className="text-text-light text-sm mb-6">
              Fill in your details and we&apos;ll get back to you within 24 hours.
            </p>
            <QuoteForm compact />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ───── Stats Bar ───── */}
      <section className="relative -mt-1 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCounter end={12} suffix="+" label="Years Experience" />
            <StatCounter end={50} suffix="+" label="Locations Served" />
            <StatCounter end={500} suffix="+" label="Happy Clients" />
            <StatCounter end={1000} suffix="+" label="Installations" />
          </div>
        </div>
      </section>

      {/* ───── Services Section with Images ───── */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Solutions for Your Home"
            description="From premium windows and doors to complete interior transformations — we deliver quality craftsmanship at every step."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 card-hover"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <service.icon className="text-lg" />
                      <h3 className="font-bold text-lg">{service.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-text-light leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors group/link"
                  >
                    Learn More
                    <HiArrowRight className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ───── Why Choose Us ───── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Why Able Windows"
            title="Built on Trust, Delivered with Excellence"
            description="We combine German engineering with Indian craftsmanship to deliver windows, doors, and interiors that last a lifetime."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item) => (
              <motion.div
                key={item.title}
                variants={staggerItem}
                className="flex gap-5 p-6 rounded-2xl hover:bg-surface transition-all duration-300 group card-hover"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="text-xl text-primary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ───── Project Showcase — Masonry Gallery ───── */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Our Work"
            title="Recent Projects"
            description="Explore some of our recent transformations across Tamil Nadu."
          />
          <div className="masonry-grid">
            {projectShowcase.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative rounded-2xl overflow-hidden ${project.height} img-shine cursor-pointer`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-2 py-0.5 bg-primary/80 text-white text-xs font-semibold rounded-full mb-1.5">
                    {project.category}
                  </span>
                  <h4 className="text-white font-bold text-lg">{project.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all group"
            >
              View All Projects
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ───── About Preview with Image ───── */}
      <section className="section-padding bg-gradient-to-br from-secondary via-slate-900 to-secondary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <RevealOnScroll direction="left">
              <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
                About Able Windows
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Transforming Spaces with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Style & Performance
                </span>
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Able Windows brings together German-engineered uPVC windows,
                precision aluminium windows and doors, and bespoke interiors.
                Our solutions combine durability, energy efficiency, and elegant
                design to elevate every home.
              </p>
              <p className="text-slate-300 leading-relaxed mb-8">
                We have meticulously built a reputation for trust and quality by
                consistently delivering high value, lasting functionality, and
                reliable performance.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold transition-colors group"
              >
                Learn More About Us
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </RevealOnScroll>

            <RevealOnScroll direction="right">
              <div className="bento-grid">
                <div className="bento-tall relative rounded-2xl overflow-hidden img-shine">
                  <Image src={images.showroom} alt="Showroom" fill className="object-cover" />
                  <div className="absolute inset-0 bg-primary/20" />
                </div>
                <div className="relative rounded-2xl overflow-hidden img-shine">
                  <Image src={images.gallery2} alt="Project" fill className="object-cover" />
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-4 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">20 Years</div>
                  <div className="text-sm text-slate-400">Profile Warranty</div>
                </div>
                <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center p-4 hover:bg-white/10 transition-colors">
                  <div className="text-3xl font-bold text-white mb-1">99%</div>
                  <div className="text-sm text-slate-400">Client Satisfaction</div>
                </div>
                <div className="bento-wide relative rounded-2xl overflow-hidden img-shine">
                  <Image src={images.installation} alt="Installation" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ───── Certifications ───── */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Quality Assurance"
            title="Proven. Certified. Guaranteed."
            description="Our products meet the highest international standards, ensuring lasting quality and performance for your home."
          />
          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={i}
                  variants={staggerItem}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm card-hover"
                >
                  <HiOutlineCheckCircle className="text-xl text-green-500 shrink-0" />
                  <span className="text-sm text-text font-medium">{cert}</span>
                </motion.div>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ───── Testimonials with Avatars ───── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle="Testimonials"
            title="What Our Clients Say"
            description="Our top priority is customer satisfaction. Here's what our happy clients have to say about their experience with Able Windows."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={staggerItem}
                className="bg-surface rounded-2xl p-8 relative card-hover border border-slate-100"
              >
                <div className="text-4xl text-primary/20 mb-4">&ldquo;</div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="text-amber-400 text-sm" />
                  ))}
                </div>
                <p className="text-text-light text-sm leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary text-sm">{t.name}</h4>
                    <p className="text-xs text-text-light">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ───── CTA Section ───── */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
        <motion.div animate={floatingSlow} className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-2xl" />
        <motion.div animate={floatingAnimation} className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full blur-xl" />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bring Your Vision to Life
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Your dream windows, doors, and interiors are just a click away.
              Get a free consultation and quote today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/get-quote"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Get Free Quote
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
