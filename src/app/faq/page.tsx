"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronDown, HiArrowRight, HiSearch } from "react-icons/hi";
import { FaWindowMaximize, FaDoorOpen, FaPaintBrush, FaShieldAlt, FaClock, FaRupeeSign } from "react-icons/fa";
import SectionHeading from "@/components/SectionHeading";
import { RevealOnScroll, StaggerChildren, staggerItem } from "@/components/animations";

type FAQCategory = "All" | "Windows" | "Doors" | "Interiors" | "Warranty" | "Timeline" | "Pricing";

interface FAQ {
  question: string;
  answer: string;
  category: Exclude<FAQCategory, "All">;
}

const categoryIcons: Record<Exclude<FAQCategory, "All">, React.ElementType> = {
  Windows: FaWindowMaximize,
  Doors: FaDoorOpen,
  Interiors: FaPaintBrush,
  Warranty: FaShieldAlt,
  Timeline: FaClock,
  Pricing: FaRupeeSign,
};

const categories: FAQCategory[] = ["All", "Windows", "Doors", "Interiors", "Warranty", "Timeline", "Pricing"];

const faqs: FAQ[] = [
  // Windows
  {
    question: "What is uPVC and why is it better than aluminium or wood?",
    answer: "uPVC (unplasticized polyvinyl chloride) is a rigid, durable plastic material widely used for windows and doors in Europe. Unlike aluminium, it doesn't conduct heat — keeping your home cooler and reducing AC costs by up to 30%. Unlike wood, it's completely termite-proof, waterproof, and never needs painting. uPVC windows last 25+ years with virtually zero maintenance.",
    category: "Windows",
  },
  {
    question: "What types of windows do you offer?",
    answer: "We offer a wide range including: Casement Windows (open outward like a door), Sliding Windows (slide horizontally — great for balconies), Tilt & Turn Windows (dual-function for ventilation), Bay Windows (project outward for extra space), Fixed Windows (non-operable for views), and Combination Windows (mix of fixed and operable). All available in uPVC and aluminium profiles.",
    category: "Windows",
  },
  {
    question: "Are your windows soundproof?",
    answer: "Yes! Our uPVC windows with double-glazed glass reduce external noise by up to 40 dB — that's roughly the difference between a busy street and a quiet library. The multi-chambered profile design, combined with rubber gaskets and quality glass, provides excellent acoustic insulation. They're ideal for homes near busy roads, airports, or noisy neighborhoods.",
    category: "Windows",
  },
  {
    question: "Can uPVC windows withstand Chennai's humidity and heat?",
    answer: "Absolutely. uPVC is specifically engineered for harsh climates. Our profiles are UV-stabilized (tested for 8,000+ hours of UV exposure) and resistant to humidity, salt air, and temperature fluctuations. They won't discolor, warp, swell, or crack even after decades of exposure to Chennai's tropical weather. The material is also CIPET-certified for Indian conditions.",
    category: "Windows",
  },
  {
    question: "Do you offer tinted or reflective glass options?",
    answer: "Yes, we offer multiple glass options: Clear float glass, Tinted glass (bronze, grey, green), Reflective/solar control glass (reduces heat by up to 70%), Toughened safety glass, Laminated security glass, and Double-glazed insulated units. Our team will recommend the best option based on your window orientation, floor level, and requirements.",
    category: "Windows",
  },

  // Doors
  {
    question: "What types of doors do you offer?",
    answer: "We provide: Sliding Doors (for balconies and patios), French Doors (classic double-door elegance), Casement Doors (single-panel entry doors), Bi-fold Doors (foldable for wide openings), Main Entrance Doors (with multi-point locking), and Lift & Slide Doors (premium, smooth-gliding heavy doors). Available in uPVC and aluminium with various finish options.",
    category: "Doors",
  },
  {
    question: "How secure are your doors?",
    answer: "Very secure. All our doors come with multi-point locking systems (5-7 locking points around the frame), European-grade hardware from brands like Roto and Maco, steel reinforcement inside the profiles, and toughened or laminated glass options. Our entrance doors are designed to meet residential security standards.",
    category: "Doors",
  },
  {
    question: "Can you make custom-sized doors?",
    answer: "Yes, every door we manufacture is made-to-measure. We visit your site, take precise measurements, and fabricate doors to fit your exact opening dimensions. Whether you have standard sizes or unusual openings, we can accommodate any requirement. Custom colors and finishes are also available.",
    category: "Doors",
  },
  {
    question: "Are uPVC doors waterproof? Can I use them for bathrooms?",
    answer: "Yes, uPVC doors are 100% waterproof and perfect for bathrooms. Unlike wooden doors that swell and rot in wet areas, uPVC maintains its shape and finish even with constant moisture exposure. We offer frosted glass panel options for bathroom privacy. Many of our Chennai clients specifically choose uPVC for all their bathroom doors.",
    category: "Doors",
  },

  // Interiors
  {
    question: "What interior services do you provide?",
    answer: "We offer end-to-end interior solutions: Modular Kitchens (L-shaped, U-shaped, parallel, island), Wardrobes (sliding, hinged, walk-in), TV Units & Entertainment Walls, Study Tables & Bookshelves, Shoe Racks & Foyer Cabinets, False Ceilings, Crockery Units, Pooja Rooms, and complete bedroom & living room designs. We handle everything from design to installation.",
    category: "Interiors",
  },
  {
    question: "What materials do you use for modular kitchens?",
    answer: "We use BWR (Boiling Water Resistant) grade marine plywood for the carcass — essential for Chennai's humidity. Shutters are available in various finishes: High-Pressure Laminate (HPL), Acrylic, PU Paint, Membrane, and Glass. Countertop options include Granite, Quartz, and Engineered Stone. All hardware is from premium brands like Hettich and Hafele with soft-close mechanisms.",
    category: "Interiors",
  },
  {
    question: "Do you provide 3D design visualizations before starting?",
    answer: "Yes! Our design process includes a free site visit, detailed measurements, and 3D rendered visualizations of your space. You'll see exactly how your kitchen, wardrobe, or room will look before we begin production. We iterate on the design based on your feedback until you're 100% satisfied.",
    category: "Interiors",
  },
  {
    question: "Can you work with my existing layout or do I need to renovate?",
    answer: "We can work with both! Whether you're building a new home or renovating an existing one, we adapt our designs to your current layout. For renovations, we handle removal of old furniture, civil work modifications (if needed), and fresh installations. Our modular approach means minimal disruption to your daily life.",
    category: "Interiors",
  },

  // Warranty
  {
    question: "What warranty do you offer on windows and doors?",
    answer: "We provide one of the best warranties in the industry: 20-year warranty on uPVC profiles (against discoloration, warping, peeling, and manufacturing defects), 10-year warranty on hardware (hinges, handles, locking mechanisms), and 5-year warranty on glass units. The warranty covers manufacturing defects and material degradation under normal use.",
    category: "Warranty",
  },
  {
    question: "What does the warranty cover and what's excluded?",
    answer: "Covered: Profile discoloration, warping, cracking, hardware malfunction, seal failure, and manufacturing defects. Not covered: Damage from misuse, unauthorized modifications, natural disasters, normal wear of rubber gaskets (replaceable at nominal cost), and glass breakage from external impact. We provide a detailed warranty card with every installation.",
    category: "Warranty",
  },
  {
    question: "Do you offer after-sales service?",
    answer: "Yes, we provide comprehensive after-sales support. This includes: Free service inspections within the warranty period, Quick response for any issues (within 24-48 hours), Gasket and hardware replacement at nominal charges, Annual maintenance service packages available, and a dedicated customer support number. Our goal is a long-term relationship, not just a one-time sale.",
    category: "Warranty",
  },
  {
    question: "What warranty do you provide for interior work?",
    answer: "Our interior work comes with: 10-year warranty on carcass and structure, 5-year warranty on shutter finish (against peeling, bubbling), 10-year warranty on Hettich/Hafele hardware, and 1-year warranty on countertop installation. We use only ISI-marked plywood and branded materials to ensure longevity.",
    category: "Warranty",
  },

  // Timeline
  {
    question: "How long does window installation take?",
    answer: "For a typical apartment (8-12 windows), the complete process takes: Site visit & measurement: 1 day, Design finalization & quotation: 2-3 days, Manufacturing: 15-20 working days, Installation: 2-3 days. Total: approximately 3-4 weeks from order confirmation. Larger projects may take slightly longer depending on complexity.",
    category: "Timeline",
  },
  {
    question: "What's the timeline for a modular kitchen?",
    answer: "The typical modular kitchen timeline is: Design consultation & 3D visualization: 3-5 days, Design finalization & material selection: 2-3 days, Manufacturing at our factory: 25-30 working days, Delivery & installation: 5-7 days. Total: approximately 5-6 weeks from order confirmation. Civil work (if needed) runs in parallel during manufacturing.",
    category: "Timeline",
  },
  {
    question: "How long does complete interior work take for a 2BHK/3BHK?",
    answer: "For a 2BHK (kitchen + 2 wardrobes + TV unit + shoe rack): 6-8 weeks. For a 3BHK (kitchen + 3 wardrobes + TV unit + study + crockery unit): 8-10 weeks. These timelines include design, manufacturing, and installation. We provide a detailed project schedule with milestones so you can track progress.",
    category: "Timeline",
  },
  {
    question: "Can you fast-track my order if I need it urgently?",
    answer: "Yes, we offer expedited processing for urgent requirements at a nominal additional charge. Depending on the scope, we can reduce timelines by 30-40%. Please discuss your deadline during the initial consultation so we can plan accordingly. Note that rush orders are subject to factory availability.",
    category: "Timeline",
  },

  // Pricing
  {
    question: "How much do uPVC windows cost?",
    answer: "uPVC window pricing depends on the type, size, glass option, and hardware. Approximate ranges per square foot: Sliding Windows: ₹450-650/sq.ft, Casement Windows: ₹500-750/sq.ft, Tilt & Turn: ₹600-850/sq.ft, Fixed Windows: ₹350-500/sq.ft. These are indicative ranges — exact pricing is provided after a site visit and measurement. We offer the best value for premium German-engineered profiles.",
    category: "Pricing",
  },
  {
    question: "What's the approximate cost of a modular kitchen?",
    answer: "Modular kitchen costs vary based on layout, materials, and accessories. General ranges: Basic (laminate finish, essential hardware): ₹1.5-2.5 lakhs, Mid-range (acrylic/membrane, Hettich hardware): ₹2.5-4 lakhs, Premium (PU/lacquer, Hafele hardware, premium stone): ₹4-7 lakhs. These are for a standard 8-10 ft kitchen. Island kitchens and larger kitchens cost more. We provide detailed itemized quotations.",
    category: "Pricing",
  },
  {
    question: "Do you offer EMI or payment plans?",
    answer: "Yes, we offer flexible payment options: No-cost EMI through select bank credit cards (3-6 months), Milestone-based payments (40% advance, 40% on delivery, 20% on completion), and Custom payment schedules for large projects. We accept bank transfers, UPI, cheques, and credit/debit cards. Discuss your preferred payment method during consultation.",
    category: "Pricing",
  },
  {
    question: "Is there a free quotation? Are there any hidden charges?",
    answer: "Absolutely free quotation with no obligations! Our process: Free site visit, free measurement, free 3D design (for interiors), and a detailed itemized quotation. There are no hidden charges — our quote includes material, manufacturing, delivery, installation, hardware, and GST. What you see in the quote is what you pay.",
    category: "Pricing",
  },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  const Icon = categoryIcons[faq.category];

  return (
    <motion.div
      variants={staggerItem}
      className={`bg-white rounded-2xl border transition-all duration-300 ${
        isOpen ? "border-primary/30 shadow-lg shadow-primary/5" : "border-slate-100 hover:border-slate-200 hover:shadow-sm"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 p-5 md:p-6 text-left"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
          isOpen ? "bg-primary text-white" : "bg-primary/10 text-primary"
        }`}>
          <Icon className="text-sm" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-semibold pr-8 transition-colors ${isOpen ? "text-primary" : "text-secondary"}`}>
            {faq.question}
          </h3>
          <span className="text-xs text-text-light mt-1 inline-block">{faq.category}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 mt-1"
        >
          <HiChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-primary" : "text-text-light"}`} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem]">
              <p className="text-text-light leading-relaxed text-sm whitespace-pre-line">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = (activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory))
    .filter((f) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-900 to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Questions
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
              Everything you need to know about our windows, doors, interiors, warranties,
              timelines, and pricing.
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setOpenIndex(null); }}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 backdrop-blur-sm"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white sticky top-[72px] md:top-[80px] z-30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat !== "All" ? categoryIcons[cat] : null;
              return (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenIndex(null); }}
                  className={`inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md shadow-primary/30"
                      : "bg-slate-100 text-text-light hover:bg-slate-200 hover:text-text"
                  }`}
                >
                  {Icon && <Icon className="text-xs" />}
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding bg-surface">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeading
            subtitle={activeCategory === "All" ? "All Questions" : activeCategory}
            title={`${filtered.length} Question${filtered.length !== 1 ? "s" : ""}`}
            description={searchQuery ? `Results for "${searchQuery}"` : "Click on any question to see the detailed answer."}
          />

          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-light text-lg mb-4">No matching questions found.</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                className="text-primary font-semibold hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <StaggerChildren className="space-y-4">
              {filtered.map((faq, i) => (
                <FAQItem
                  key={`${faq.category}-${i}`}
                  faq={faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* Still have questions CTA */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-secondary via-slate-900 to-secondary rounded-3xl p-8 md:p-12 text-center text-white">
            <RevealOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
                Our team is happy to answer any questions you may have.
                Reach out to us via phone, email, or visit our showroom.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-semibold rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
                >
                  Contact Us <HiArrowRight />
                </Link>
                <a
                  href="tel:+919789053195"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all"
                >
                  Call +91 97890 53195
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
