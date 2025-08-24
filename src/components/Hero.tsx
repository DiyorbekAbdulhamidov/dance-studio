"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpg" // <-- o'z rasmiingizni qo'ying (dinamik, kuchli sahna rasmi)
        alt="Dance Studio"
        fill
        priority
        className="object-cover object-center opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        {/* Subheadline */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="uppercase tracking-[0.3em] text-sm md:text-base text-pink-400 font-semibold"
        >
          San’at. Ritm. Hayot.
        </motion.span>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Raqs bilan o‘zingni <br /> qayta kashf et
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed"
        >
          Bizning <span className="text-pink-400 font-semibold">Baxtem Dance Studio</span> –
          bu shunchaki raqs emas. Bu sizning orzularingiz, ritmingiz va
          kelajagingizga qadam. Eng yaxshi ustozlar, eng zamonaviy mashg‘ulotlar va
          cheksiz ilhom manbai.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="#contact"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-xl hover:scale-105 transition transform"
          >
            🚀 Hozir Yozilish
          </Link>
          <Link
            href="#courses"
            className="px-8 py-4 rounded-full border border-white/60 text-white font-bold shadow-lg hover:bg-white/10 transition"
          >
            🎶 Kurslarni Ko‘rish
          </Link>
        </motion.div>
      </div>

      {/* Floating Elements (Premium Accent) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-64 h-64 bg-pink-500 rounded-full blur-3xl top-20 left-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
        className="absolute w-72 h-72 bg-purple-500 rounded-full blur-3xl bottom-10 right-10"
      />
    </section>
  );
}
