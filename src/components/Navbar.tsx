"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled
          ? "backdrop-blur-lg bg-black/80 shadow-lg border-b border-white/10"
          : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent">
            Baxtem
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold">
          <Link href="#about" className="text-gray-200 hover:text-white transition">
            Biz haqimizda
          </Link>
          <Link href="#courses" className="text-gray-200 hover:text-white transition">
            Kurslar
          </Link>
          <Link href="#gallery" className="text-gray-200 hover:text-white transition">
            Galereya
          </Link>
          <Link href="#contact" className="text-gray-200 hover:text-white transition">
            Aloqa
          </Link>
        </div>

        {/* Desktop CTA */}
        <Link
          href="#contact"
          className="hidden md:inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition transform"
        >
          🚀 Yozilish
        </Link>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-black/95 backdrop-blur-lg px-6 py-6 space-y-6 flex flex-col items-center text-lg font-semibold"
        >
          <Link
            href="#about"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Biz haqimizda
          </Link>
          <Link
            href="#courses"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Kurslar
          </Link>
          <Link
            href="#gallery"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Galereya
          </Link>
          <Link
            href="#contact"
            className="text-gray-200 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Aloqa
          </Link>
          <Link
            href="#contact"
            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 transition transform"
            onClick={() => setOpen(false)}
          >
            🚀 Yozilish
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
