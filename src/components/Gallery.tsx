"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/gallery/1.jpg",
  "/gallery/2.jpg",
  "/gallery/3.jpg",
  "/gallery/4.jpg",
  "/gallery/5.jpg",
  "/gallery/6.jpg",
];

export default function Gallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="gallery"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Decorative gradient light */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-600/20 via-purple-700/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Galereya
        </h2>
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          Bizning raqs studiyamizdagi mashg‘ulotlar va chiqishlardan
          lavhalar.
        </p>

        {/* Grid Gallery */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelected(src)}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                width={600}
                height={400}
                className="object-cover w-full h-48 md:h-64 transform group-hover:scale-110 transition duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end justify-center pb-4">
                <span className="text-white text-lg font-semibold tracking-wide">
                  Ko‘rish →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="relative w-[90%] md:w-[70%] lg:w-[55%]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // modal ichiga bosganda yopilmasin
              >
                <Image
                  src={selected}
                  alt="Selected"
                  width={1200}
                  height={800}
                  className="rounded-2xl shadow-2xl"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
