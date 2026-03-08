"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiArrowRight, HiClock, HiUser, HiTag } from "react-icons/hi";
import SectionHeading from "@/components/SectionHeading";
import { RevealOnScroll, StaggerChildren, staggerItem } from "@/components/animations";

type BlogCategory = "All" | "Interior Design" | "Windows & Doors" | "Maintenance" | "Trends";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: Exclude<BlogCategory, "All">;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string[];
}

const blogCategories: BlogCategory[] = ["All", "Interior Design", "Windows & Doors", "Maintenance", "Trends"];

const blogPosts: BlogPost[] = [
  {
    id: "upvc-vs-aluminium-windows",
    title: "uPVC vs Aluminium Windows: Which Is Better for Chennai Homes?",
    excerpt: "A comprehensive comparison of uPVC and aluminium windows covering durability, cost, insulation, and maintenance for the Chennai climate.",
    category: "Windows & Doors",
    image: "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Feb 28, 2026",
    readTime: "6 min read",
    tags: ["uPVC", "Aluminium", "Windows", "Comparison"],
    content: [
      "When it comes to choosing windows for your Chennai home, the two most popular options are uPVC and aluminium. Both have their strengths, but understanding the differences can help you make the right choice for your specific needs.",
      "## Durability & Weather Resistance\n\nuPVC windows excel in humid, coastal climates like Chennai. They are resistant to rust, corrosion, and termite damage. The material doesn't swell, warp, or rot even after years of exposure to rain and sun. Aluminium windows are also durable but can corrode over time without proper coating, especially near coastal areas.",
      "## Thermal Insulation\n\nuPVC is a natural insulator — it prevents heat transfer, keeping your home cooler in summer and reducing air conditioning costs by up to 30%. Aluminium, being a metal, conducts heat readily, which means your AC has to work harder. However, thermally broken aluminium profiles can mitigate this to some extent.",
      "## Soundproofing\n\nuPVC windows provide superior sound insulation, reducing external noise by up to 40 dB. This makes them ideal for homes near busy roads or airports. Aluminium windows offer decent soundproofing but typically fall short of uPVC's performance.",
      "## Cost Comparison\n\nInitially, uPVC windows are slightly more expensive than aluminium. However, the long-term savings on energy bills, zero maintenance costs, and longer lifespan (20-25 years) make uPVC the more cost-effective option over time.",
      "## Maintenance\n\nuPVC requires virtually zero maintenance — just occasional cleaning with soap and water. Aluminium windows may need repainting or re-anodizing every few years to maintain their appearance.",
      "## Our Recommendation\n\nFor Chennai homes, we recommend uPVC windows for their superior insulation, soundproofing, and maintenance-free performance. If you prefer a slimmer frame profile for a more modern look, thermally broken aluminium is a strong alternative. At Able Interiors & Windows, we offer both options and can help you decide based on your specific requirements.",
    ],
  },
  {
    id: "modular-kitchen-design-tips",
    title: "10 Essential Tips for Designing Your Dream Modular Kitchen",
    excerpt: "From layout selection to material choices, here's everything you need to know before designing a modular kitchen for your home.",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    tags: ["Modular Kitchen", "Design Tips", "Interiors"],
    content: [
      "A modular kitchen isn't just a cooking space — it's the heart of your home. Getting the design right means balancing aesthetics with functionality. Here are 10 essential tips from our design experts.",
      "## 1. Choose the Right Layout\n\nThe layout depends on your available space. An L-shaped kitchen works great for open plans, a U-shaped kitchen maximizes counter space, and a parallel kitchen is ideal for narrow spaces. Measure your space carefully before deciding.",
      "## 2. Prioritize the Work Triangle\n\nThe sink, stove, and refrigerator should form an efficient triangle. This reduces unnecessary movement while cooking and makes the kitchen workflow smooth.",
      "## 3. Invest in Quality Hardware\n\nSoft-close hinges, heavy-duty drawer slides, and quality handles may seem like small details, but they make a huge difference in daily usability and longevity. We recommend Hettich or Hafele hardware.",
      "## 4. Select the Right Countertop\n\nGranite is the most popular choice in Chennai for its heat resistance and durability. Quartz offers a more uniform look and is non-porous. For budget-friendly options, consider engineered stone.",
      "## 5. Plan Adequate Storage\n\nInclude tall units, corner carousels, pull-out baskets, bottle pull-outs, and under-sink organizers. A well-planned kitchen can have 30% more storage than a traditional one.",
      "## 6. Choose Durable Shutter Materials\n\nMarine plywood with laminate finish is the best option for Chennai's humid climate. Avoid MDF in areas near the sink or stove. Acrylic and PU finishes offer a premium look.",
      "## 7. Adequate Lighting\n\nCombine task lighting (under-cabinet LED strips) with ambient lighting. Good lighting transforms how your kitchen looks and makes cooking safer.",
      "## 8. Ventilation Is Key\n\nInvest in a good chimney with adequate suction power (at least 1000 m³/hr for Indian cooking). Proper ventilation prevents oil residue from damaging your cabinets.",
      "## 9. Plan Electrical Points\n\nMark electrical points for appliances before installation. You'll need dedicated points for mixer, microwave, water purifier, chimney, and dishwasher.",
      "## 10. Budget Wisely\n\nAllocate 50% of your kitchen budget to cabinetry, 20% to countertop, 15% to hardware, and 15% to accessories and lighting. At Able Interiors & Windows, we help you get the best value within your budget.",
    ],
  },
  {
    id: "upvc-window-maintenance-guide",
    title: "How to Maintain Your uPVC Windows: A Complete Guide",
    excerpt: "Simple maintenance tips to keep your uPVC windows looking new and performing at their best for decades.",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Jan 30, 2026",
    readTime: "5 min read",
    tags: ["uPVC", "Maintenance", "Cleaning Tips"],
    content: [
      "One of the biggest advantages of uPVC windows is their low maintenance. Unlike wooden windows that need regular painting or aluminium that may corrode, uPVC stays pristine with minimal care. Here's how to keep them in top condition.",
      "## Routine Cleaning (Monthly)\n\nWipe down the frames with a soft cloth dampened with warm soapy water. Avoid abrasive cleaners, scouring pads, or solvents as these can scratch or discolor the surface. For stubborn marks, use a non-abrasive cream cleaner.",
      "## Glass Cleaning\n\nUse a standard glass cleaner or a mix of vinegar and water. Spray, wipe with a microfiber cloth, and buff dry for streak-free results. Clean both sides for maximum clarity and light.",
      "## Hardware Care (Every 6 Months)\n\nApply a few drops of light machine oil (like sewing machine oil) to the moving parts — hinges, locking mechanisms, and handles. This keeps them operating smoothly and prevents stiffness.",
      "## Rubber Seals & Gaskets\n\nCheck the rubber gaskets around the glass and frame every 6 months. Clean them with soapy water and apply a thin coat of silicone spray to keep them supple and maintain the seal. Replace if they show cracking or shrinkage.",
      "## Drainage Holes\n\nAll uPVC windows have small drainage holes at the bottom of the frame. Check these periodically and clear any debris to ensure water drains properly and doesn't accumulate inside the frame.",
      "## What NOT to Do\n\n- Never use bleach, acetone, or paint thinner on uPVC\n- Don't use wire wool or abrasive pads\n- Avoid hanging heavy objects from window handles\n- Don't paint uPVC frames — the factory finish is designed to last\n- Never force a window that's stuck — check for obstructions first",
      "## When to Call a Professional\n\nIf you notice condensation between double-glazed panes, difficulty in opening/closing, or damaged hardware, contact your installer. At Able Interiors & Windows, we offer free service inspections for windows installed by us.",
    ],
  },
  {
    id: "interior-design-trends-2026",
    title: "Top Interior Design Trends for Indian Homes in 2026",
    excerpt: "From earthy tones to smart home integrations, discover the interior design trends shaping Indian homes this year.",
    category: "Trends",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    tags: ["Trends", "2026", "Interior Design", "Indian Homes"],
    content: [
      "2026 brings exciting shifts in how Indian homeowners approach interior design. Here are the key trends we're seeing in our projects across Chennai and Tamil Nadu.",
      "## 1. Warm Earth Tones\n\nGone are the stark whites of previous years. 2026 is all about warm, earthy palettes — terracotta, olive green, warm beige, and muted clay. These tones create inviting, grounded spaces that feel both modern and timeless.",
      "## 2. Fluted & Textured Panels\n\nFluted glass partitions, ribbed wood panels, and textured wall accents are everywhere. They add visual interest and depth without overwhelming the space. We're using them extensively in TV unit backdrops and bedroom feature walls.",
      "## 3. Integrated Smart Storage\n\nStorage that hides in plain sight — beds with hydraulic lift storage, window seats with hidden compartments, and full-height wardrobes with internal drawers and accessory organizers. Every square foot is optimized.",
      "## 4. Japandi Aesthetic\n\nThe Japanese-Scandinavian fusion continues to grow. Clean lines, minimal clutter, natural materials, and functional beauty. This resonates well with Indian sensibilities of simplicity and purposeful design.",
      "## 5. Sustainable Materials\n\nBamboo cabinetry, recycled-content countertops, and low-VOC finishes are gaining popularity. Clients are increasingly asking about the environmental footprint of their interior choices.",
      "## 6. Bold Kitchen Islands\n\nFor larger homes, kitchen islands in contrasting colors or materials are becoming statement pieces. Waterfall countertops, under-counter wine coolers, and built-in charging stations make these islands multi-functional.",
      "## 7. Large Format Windows\n\nFloor-to-ceiling windows and sliding doors that blur the boundary between indoors and outdoors. Our uPVC and aluminium sliding systems are perfect for achieving this look while maintaining energy efficiency.",
      "## 8. Smart Home Integration\n\nAutomated blinds, smart lighting, sensor-based ventilation, and voice-controlled fixtures are no longer luxury — they're becoming standard. Planning electrical and network infrastructure during the design phase is crucial.",
      "## How We're Implementing These Trends\n\nAt Able Interiors & Windows, we stay ahead of design trends while maintaining practicality for Indian lifestyles. Whether you want a complete home makeover or just want to update your windows, our design team can guide you. Contact us for a free consultation.",
    ],
  },
  {
    id: "choosing-right-doors",
    title: "How to Choose the Right Doors for Every Room in Your Home",
    excerpt: "A room-by-room guide to selecting the perfect door type — from main entrance to bathrooms, bedrooms, and balconies.",
    category: "Windows & Doors",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Dec 20, 2025",
    readTime: "6 min read",
    tags: ["Doors", "Home Design", "uPVC", "Guide"],
    content: [
      "Every door in your home serves a different purpose — security, privacy, aesthetics, or space-saving. Here's our expert guide on choosing the right door for each room.",
      "## Main Entrance Door\n\nThis is your home's first impression and primary security point. Choose a solid door with multi-point locking. uPVC doors with steel reinforcement offer excellent security, weather resistance, and require zero painting. For a premium look, choose woodgrain laminate finishes.",
      "## Living Room / Balcony Doors\n\nSliding doors or French doors work best here. They maximize natural light, provide easy access to balconies, and create a sense of spaciousness. Our uPVC sliding doors come with toughened glass and smooth roller mechanisms.",
      "## Bedroom Doors\n\nPrioritize sound insulation and privacy. Solid-core doors with rubber seals block noise effectively. Casement-style uPVC doors offer excellent soundproofing compared to traditional wooden doors.",
      "## Bathroom Doors\n\nMoisture resistance is critical. uPVC doors are the best choice — they're 100% waterproof, won't swell or warp, and resist mold growth. Frosted glass panels allow light while maintaining privacy.",
      "## Kitchen Door\n\nChoose a door that's easy to clean and grease-resistant. Sliding doors save space in compact kitchens. uPVC with smooth laminate finish can be wiped clean in seconds.",
      "## Pooja Room Door\n\nTraditional carved wooden doors add cultural character. Alternatively, uPVC doors with CNC-cut designs offer the traditional look with modern durability. Add frosted glass panels with customized designs.",
      "## Key Factors to Consider\n\n- **Space**: Sliding doors for tight spaces, casement for wider openings\n- **Climate**: uPVC for humid areas, aluminium for corrosion-prone zones\n- **Budget**: uPVC offers the best value; premium aluminium for high-end aesthetics\n- **Maintenance**: uPVC = zero maintenance; Wood = regular upkeep; Aluminium = occasional cleaning\n\nAt Able Interiors & Windows, we offer free site visits to help you choose the perfect doors for your home. Call us at +91 97890 53195.",
    ],
  },
  {
    id: "wardrobe-design-ideas",
    title: "Smart Wardrobe Design Ideas to Maximize Your Bedroom Space",
    excerpt: "Innovative wardrobe solutions including sliding wardrobes, walk-in closets, and space-saving designs for compact bedrooms.",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=500&fit=crop",
    author: "Able Interiors Team",
    date: "Dec 5, 2025",
    readTime: "5 min read",
    tags: ["Wardrobe", "Bedroom", "Storage", "Design Ideas"],
    content: [
      "A well-designed wardrobe can transform your bedroom from cluttered to organized. Whether you have a spacious master bedroom or a compact guest room, there's a smart wardrobe solution for you.",
      "## Sliding Wardrobes\n\nPerfect for rooms where space is at a premium. Sliding doors don't need clearance to open, making them ideal for bedrooms with beds close to the wardrobe. Choose mirror-finish doors to visually double the room size.",
      "## Hinged Wardrobes\n\nClassic and practical, hinged wardrobes allow full access to the interior at once. They work best in larger rooms. Opt for soft-close hinges to prevent slamming and extend hardware life.",
      "## Walk-In Closets\n\nIf you have the space, a walk-in closet is the ultimate luxury. We design walk-ins with dedicated zones for hanging, folding, shoes, accessories, and even a dressing mirror. LED strip lighting inside makes everything easy to find.",
      "## Loft Storage\n\nDon't waste the space above your wardrobe. Built-in loft storage is perfect for seasonal items, luggage, and rarely used items. We design lofts that blend seamlessly with the wardrobe for a clean look.",
      "## Smart Internal Organization\n\nThe inside matters as much as the outside. Essential internal fittings include:\n- Adjustable shelves for different-height items\n- Pull-out trouser racks\n- Tie and belt organizers\n- Drawer dividers for small items\n- Shoe rack pullouts\n- Saree/dhoti rods",
      "## Material Selection\n\nFor Chennai's humidity, we recommend marine plywood for the carcass and pre-laminated boards for shelves. Avoid plain MDF in humid environments. For shutters, choose high-pressure laminates, acrylic, or PU finish based on your budget and style preference.",
      "## Get Your Wardrobe Designed\n\nAt Able Interiors & Windows, we custom-design every wardrobe to fit your exact space, style, and storage needs. Our designers visit your home, take precise measurements, and create 3D visualizations before production begins. Contact us for a free consultation.",
    ],
  },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All");
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary via-slate-900 to-secondary text-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-blue-200 text-sm font-semibold rounded-full mb-4">
              Blog & Articles
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Expert{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Tips & Insights
              </span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Interior design ideas, window care guides, and home improvement trends
              from the experts at Able Interiors &amp; Windows.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Category Filters */}
      <section className="bg-white sticky top-[72px] md:top-[80px] z-30 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-2">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/30"
                    : "bg-slate-100 text-text-light hover:bg-slate-200 hover:text-text"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {/* Featured post (first one) */}
          {filtered.length > 0 && !expandedPost && (
            <RevealOnScroll className="mb-12">
              <div
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer grid md:grid-cols-2"
                onClick={() => setExpandedPost(filtered[0].id)}
              >
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <Image
                    src={filtered[0].image}
                    alt={filtered[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-white text-xs font-bold rounded-full">
                    Featured
                  </span>
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 w-fit">
                    {filtered[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                    {filtered[0].title}
                  </h2>
                  <p className="text-text-light leading-relaxed mb-4">{filtered[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-text-light">
                    <span className="flex items-center gap-1"><HiUser className="text-sm" /> {filtered[0].author}</span>
                    <span className="flex items-center gap-1"><HiClock className="text-sm" /> {filtered[0].readTime}</span>
                    <span>{filtered[0].date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-4 group-hover:gap-2 transition-all">
                    Read Article <HiArrowRight />
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* Expanded Article View */}
          {expandedPost && (() => {
            const post = blogPosts.find((p) => p.id === expandedPost);
            if (!post) return null;
            return (
              <RevealOnScroll>
                <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 mb-12">
                  {/* Article Header Image */}
                  <div className="relative h-64 md:h-96 overflow-hidden">
                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-3">
                        {post.category}
                      </span>
                      <h1 className="text-2xl md:text-4xl font-bold text-white">{post.title}</h1>
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="px-6 md:px-10 py-4 border-b border-slate-100 flex flex-wrap items-center gap-4 text-sm text-text-light">
                    <span className="flex items-center gap-1"><HiUser /> {post.author}</span>
                    <span className="flex items-center gap-1"><HiClock /> {post.readTime}</span>
                    <span>{post.date}</span>
                    <div className="flex items-center gap-1 ml-auto">
                      <HiTag />
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-slate-100 text-xs rounded-full">{tag}</span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 md:px-10 py-8 max-w-3xl">
                    {post.content.map((block, i) => {
                      if (block.startsWith("## ")) {
                        return (
                          <h2 key={i} className="text-xl font-bold text-secondary mt-8 mb-3">
                            {block.replace("## ", "")}
                          </h2>
                        );
                      }
                      const parts = block.split("\n").filter(Boolean);
                      return (
                        <div key={i}>
                          {parts.map((part, j) => {
                            if (part.startsWith("## ")) {
                              return (
                                <h2 key={j} className="text-xl font-bold text-secondary mt-8 mb-3">
                                  {part.replace("## ", "")}
                                </h2>
                              );
                            }
                            if (part.startsWith("- ")) {
                              return (
                                <li key={j} className="text-text-light leading-relaxed ml-4 mb-1 list-disc">
                                  {part.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "$1")}
                                </li>
                              );
                            }
                            return (
                              <p key={j} className="text-text-light leading-relaxed mb-4">
                                {part}
                              </p>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>

                  {/* Back */}
                  <div className="px-6 md:px-10 pb-8">
                    <button
                      onClick={() => setExpandedPost(null)}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                      ← Back to All Articles
                    </button>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })()}

          {/* Rest of posts grid */}
          {!expandedPost && (
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.slice(1).map((post) => (
                <motion.div
                  key={post.id}
                  variants={staggerItem}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col"
                  onClick={() => setExpandedPost(post.id)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-secondary text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-light leading-relaxed mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-text-light border-t border-slate-100 pt-4">
                      <span className="flex items-center gap-1"><HiClock className="text-sm" /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                      Read More <HiArrowRight />
                    </span>
                  </div>
                </motion.div>
              ))}
            </StaggerChildren>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <RevealOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Want Expert Advice for Your Project?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Our team is ready to help you with design ideas, material selection, and
              expert guidance for your home improvement project.
            </p>
            <Link
              href="/get-quote"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Consultation <HiArrowRight />
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
