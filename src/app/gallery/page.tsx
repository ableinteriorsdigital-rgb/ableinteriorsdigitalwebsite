"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { RevealOnScroll, StaggerChildren, staggerItem } from "@/components/animations";

type Category = "All" | "Kitchens" | "Bedrooms" | "Windows" | "Doors";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "All">;
  location: string;
  description: string;
  before: string;
  after: string;
}

const categories: Category[] = ["All", "Kitchens", "Bedrooms", "Windows", "Doors"];

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Modular Kitchen",
    category: "Kitchens",
    location: "Nanmangalam, Chennai",
    description: "Complete kitchen transformation with glossy laminates, soft-close drawers, and premium granite countertop.",
    before: "https://images.unsplash.com/photo-1556909114-44e3e70034e2?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "L-Shaped Kitchen Revamp",
    category: "Kitchens",
    location: "Tambaram, Chennai",
    description: "Upgraded from old wooden cabinets to a sleek L-shaped modular kitchen with island counter.",
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Compact Parallel Kitchen",
    category: "Kitchens",
    location: "Velachery, Chennai",
    description: "Space-efficient parallel kitchen design with integrated chimney, pull-out baskets, and under-cabinet lighting.",
    before: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Master Bedroom Makeover",
    category: "Bedrooms",
    location: "Pallikaranai, Chennai",
    description: "Elegant bedroom redesign with custom wardrobe, upholstered bed panel, and ambient lighting.",
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Kids Bedroom Design",
    category: "Bedrooms",
    location: "Medavakkam, Chennai",
    description: "Colorful, functional kids room with bunk bed, study area, and ample storage solutions.",
    before: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Guest Bedroom Upgrade",
    category: "Bedrooms",
    location: "Chromepet, Chennai",
    description: "Minimalist guest room with sliding wardrobe, false ceiling, and warm-toned wall paneling.",
    before: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&h=400&fit=crop",
  },
  {
    id: 7,
    title: "uPVC Casement Windows",
    category: "Windows",
    location: "Anna Nagar, Chennai",
    description: "Replaced old aluminium windows with German-engineered uPVC casement windows for superior soundproofing.",
    before: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=400&fit=crop",
  },
  {
    id: 8,
    title: "Sliding Window Installation",
    category: "Windows",
    location: "T. Nagar, Chennai",
    description: "Full apartment window upgrade with premium sliding uPVC windows and tinted glass for heat reduction.",
    before: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&h=400&fit=crop",
  },
  {
    id: 9,
    title: "Bay Window Makeover",
    category: "Windows",
    location: "Adyar, Chennai",
    description: "Converted flat wall to an elegant bay window setup with seating nook and plantation shutters.",
    before: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    id: 10,
    title: "French Door Upgrade",
    category: "Doors",
    location: "Porur, Chennai",
    description: "Installed elegant French doors opening to the balcony with multi-point locking system.",
    before: "https://images.unsplash.com/photo-1600566752229-250ed79470f8?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
  },
  {
    id: 11,
    title: "Sliding Door Installation",
    category: "Doors",
    location: "OMR, Chennai",
    description: "Floor-to-ceiling sliding doors with toughened glass, maximizing natural light and garden views.",
    before: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    id: 12,
    title: "Main Entrance Door",
    category: "Doors",
    location: "Sholinganallur, Chennai",
    description: "Premium uPVC entrance door with woodgrain laminate finish and heavy-duty hardware.",
    before: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop",
  },
];

function BeforeAfterCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const [showAfter, setShowAfter] = useState(true);

  return (
    <motion.div
      variants={staggerItem}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image with toggle */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={showAfter ? project.after : project.before}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Before/After toggle */}
        <div className="absolute top-3 left-3 flex bg-white/90 backdrop-blur-sm rounded-full p-0.5 text-xs font-semibold">
          <button
            onClick={(e) => { e.stopPropagation(); setShowAfter(false); }}
            className={`px-3 py-1 rounded-full transition-all ${!showAfter ? "bg-primary text-white" : "text-text-light hover:text-text"}`}
          >
            Before
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setShowAfter(true); }}
            className={`px-3 py-1 rounded-full transition-all ${showAfter ? "bg-primary text-white" : "text-text-light hover:text-text"}`}
          >
            After
          </button>
        </div>

        {/* Category badge */}
        <span className="absolute top-3 right-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
          {project.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-bold text-secondary text-lg mb-1">{project.title}</h3>
        <p className="text-xs text-primary font-medium mb-2">{project.location}</p>
        <p className="text-sm text-text-light leading-relaxed line-clamp-2">{project.description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
          View Details <FaArrowRight className="text-xs" />
        </span>
      </div>
    </motion.div>
  );
}

function LightboxModal({
  project,
  onClose,
  onPrev,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <div>
            <h3 className="text-xl font-bold text-secondary">{project.title}</h3>
            <p className="text-sm text-primary font-medium">{project.location}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Before / After comparison */}
        <div className="grid md:grid-cols-2 gap-4 p-6">
          <div>
            <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full mb-3">BEFORE</span>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={project.before} alt="Before" fill className="object-cover" />
            </div>
          </div>
          <div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full mb-3">AFTER</span>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image src={project.after} alt="After" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-6">
          <p className="text-text-light leading-relaxed">{project.description}</p>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center px-6 pb-6">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            <HiArrowLeft /> Previous
          </button>
          <button
            onClick={onNext}
            className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors"
          >
            Next <HiArrowRight />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.category === activeCategory);
  const selectedProject = selectedIndex !== null ? filtered[selectedIndex] : null;

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? filtered.length - 1 : selectedIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === filtered.length - 1 ? 0 : selectedIndex + 1);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-900 to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Project{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Gallery
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Explore our portfolio of stunning transformations — see the before &amp; after
              of real projects across kitchens, bedrooms, windows, and doors.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white sticky top-[72px] md:top-[80px] z-30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSelectedIndex(null); }}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-slate-100 text-text-light hover:bg-slate-200 hover:text-text"
                }`}
              >
                {cat}
                {cat !== "All" && (
                  <span className="ml-1.5 text-xs opacity-70">
                    ({projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            subtitle={activeCategory === "All" ? "All Projects" : activeCategory}
            title={`${filtered.length} Project${filtered.length !== 1 ? "s" : ""}`}
            description="Click on any project to see the full before & after comparison."
          />

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <BeforeAfterCard
                key={project.id}
                project={project}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Similar Results for Your Home?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get a free consultation and quote. Let us transform your space with the same quality and craftsmanship.
            </p>
            <a
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Quote <HiArrowRight />
            </a>
          </RevealOnScroll>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <LightboxModal
            project={selectedProject}
            onClose={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        )}
      </AnimatePresence>
    </>
  );
}
