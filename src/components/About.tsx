"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Star } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative gradient light */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-600/20 via-purple-700/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/about.jpg" // o'zingizning rasmi bilan almashtiring
            alt="About Dance Studio"
            fill
            className="object-cover scale-105 hover:scale-110 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Biz <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">haqimizda</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            <span className="font-semibold text-white">Baxtem Dance Studio</span> —
            zamonaviy va klassik raqs san’atini uyg‘unlashtirgan premium studiya.
            Har bir mashg‘ulot sizning <span className="text-pink-400">iste’dodingizni</span> ochishga
            va <span className="text-purple-400">cheksiz energiya</span> berishga qaratilgan.
          </p>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Bizning darslarimiz nafaqat raqs o‘rganish, balki ijodiy o‘sish,
            do‘stona muhit va hayotingizga yorqinlik qo‘shadi.
          </p>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="w-10 h-10 text-pink-400 mb-3" />
              <p className="text-sm text-gray-300 font-medium">Ijodiy muhit</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <HeartHandshake className="w-10 h-10 text-purple-400 mb-3" />
              <p className="text-sm text-gray-300 font-medium">Do‘stona jamoa</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-10 h-10 text-yellow-400 mb-3" />
              <p className="text-sm text-gray-300 font-medium">Professional ustozlar</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#courses"
              className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-xl hover:scale-105 transition transform"
            >
              🚀 Kurslarimizni ko‘rish
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
