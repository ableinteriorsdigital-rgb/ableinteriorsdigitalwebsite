"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Link from "next/link";

const feedbackVideos = [
  { id: 1, src: "/videos/feedback-1.mp4", poster: "/videos/poster-1.jpg" },
  { id: 2, src: "/videos/feedback-2.mp4", poster: "/videos/poster-2.jpg" },
  { id: 3, src: "/videos/feedback-3.mp4", poster: "/videos/poster-3.jpg" },
  { id: 4, src: "/videos/feedback-4.mp4", poster: "/videos/poster-4.jpg" },
  { id: 5, src: "/videos/feedback-5.mp4", poster: "/videos/poster-5.jpg" },
  { id: 6, src: "/videos/feedback-6.mp4", poster: "/videos/poster-6.jpg" },
  { id: 7, src: "/videos/feedback-7.mp4", poster: "/videos/poster-7.jpg" },
  { id: 8, src: "/videos/feedback-8.mp4", poster: "/videos/poster-8.jpg" },
  { id: 9, src: "/videos/feedback-9.mp4", poster: "/videos/poster-9.jpg" },
  { id: 10, src: "/videos/feedback-10.mp4", poster: "/videos/poster-10.jpg" },
];

const VISIBLE_COUNT = 3;

export default function VideoTestimonials() {
  const [page, setPage] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const totalPages = Math.ceil(feedbackVideos.length / VISIBLE_COUNT);
  const startIdx = page * VISIBLE_COUNT;
  const visibleVideos = feedbackVideos.slice(startIdx, startIdx + VISIBLE_COUNT);

  const goNext = () => setPage((p) => (p + 1) % totalPages);
  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);

  const openVideo = (id: number) => {
    setPlayingId(id);
    setIsMuted(true);
  };

  const closeVideo = () => {
    setPlayingId(null);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const activeVideo = feedbackVideos.find((v) => v.id === playingId);

  return (
    <>
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8 md:mb-12">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-4"
            >
              Customer Stories
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold text-secondary mb-3 md:mb-4"
            >
              Watch Our{" "}
              <span className="text-primary">Happy Clients</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-text-light max-w-2xl mx-auto"
            >
              Real feedback from our valued customers who transformed their homes with us.
            </motion.p>
          </div>

          {/* Video Cards Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            {totalPages > 1 && (
              <>
                <button
                  onClick={goPrev}
                  className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-200"
                  aria-label="Previous videos"
                >
                  <FaChevronLeft className="text-sm" />
                </button>
                <button
                  onClick={goNext}
                  className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-slate-200"
                  aria-label="Next videos"
                >
                  <FaChevronRight className="text-sm" />
                </button>
              </>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {visibleVideos.map((video, i) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => openVideo(video.id)}
                >
                  <div className="relative aspect-[3/4] sm:aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                    {/* Video thumbnail / preview */}
                    <video
                      src={video.src}
                      poster={video.poster}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <FaPlay className="text-primary text-sm md:text-lg ml-0.5 md:ml-1" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "bg-primary w-8" : "bg-slate-300 w-2 hover:bg-slate-400"
                  }`}
                  aria-label={`Page ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Visit More button */}
          <div className="text-center mt-6 md:mt-10">
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-3.5 bg-secondary text-white font-semibold rounded-full hover:bg-secondary/90 transition-all hover:shadow-lg"
            >
              Visit More
            </Link>
          </div>
        </div>
      </section>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                ref={videoRef}
                src={activeVideo.src}
                autoPlay
                muted={isMuted}
                playsInline
                controls={false}
                className="w-full h-full object-contain bg-black"
              />
              {/* Close button */}
              <button
                onClick={closeVideo}
                className="absolute top-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label="Close video"
              >
                <FaTimes />
              </button>
              {/* Mute toggle */}
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
