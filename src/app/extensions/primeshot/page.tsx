"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Camera, Zap, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function PrimeShot() {
  const slides = [
    { src: "/images/primeshot/slide1.png", alt: "PrimeShot Preview 1" },
    { src: "/images/primeshot/slide2.png", alt: "PrimeShot Preview 2" },
    { src: "/images/primeshot/slide3.png", alt: "PrimeShot Preview 3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <main className="min-h-screen bg-bg-dark text-white pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[100px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            v1.2.4 Now Available
          </div>

          <h1 className="font-outfit font-bold text-5xl sm:text-6xl md:text-7xl mb-6 tracking-tight">
            Prime<span className="text-gradient">Shot</span>
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Capture, annotate, blur, and share screenshots with other powerful
            built-in tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-primary text-bg-dark font-bold text-lg rounded-full hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transform hover:-translate-y-1 cursor-pointer">
              Add to Chrome
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold text-lg rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: <Camera className="w-8 h-8 text-primary" />,
            title: "Capture & Blur",
            desc: "Capture any area and use the built-in blur tool to protect sensitive information instantly.",
          },
          {
            icon: <Zap className="w-8 h-8 text-warning" />,
            title: "Smart Annotation",
            desc: "Add arrows, text, and shapes with a powerful set of built-in annotation tools.",
          },
          {
            icon: <Shield className="w-8 h-8 text-success" />,
            title: "Privacy First",
            desc: "Zero tracking. All screenshots and data remain strictly on your local device storage.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="glass-card p-8 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
          >
            <div className="mb-6 p-4 bg-white/5 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-bold font-outfit mb-4">
              {feature.title}
            </h3>
            <p className="text-text-secondary leading-relaxed text-base">
              {feature.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Demo / Preview Section */}
      <section className="max-w-6xl mx-auto glass-card p-4 rounded-3xl border border-white/10 shadow-2xl overflow-hidden relative group">
        <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 to-transparent z-10 pointer-events-none" />
        <div className="aspect-video bg-bg-deep rounded-xl relative overflow-hidden flex items-center justify-center group/slider">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={slides[currentSlide].src}
                alt={slides[currentSlide].alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-bg-dark transition-all opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 z-20 p-2 rounded-full bg-black/50 text-white hover:bg-primary hover:text-bg-dark transition-all opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? "bg-primary w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <footer className="mt-20 pt-8 border-t border-white/10 text-center">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link
            href="/extensions/primeshot/terms"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            href="/extensions/primeshot/privacy"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            href="/extensions/primeshot/help"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            Help Center
          </Link>
          <Link
            href="/extensions/primeshot/contact"
            className="text-text-muted hover:text-primary transition-colors text-sm"
          >
            Contact Us
          </Link>
        </div>
        <p className="text-xs text-text-muted">
          © {new Date().getFullYear()} PrimeShot. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
