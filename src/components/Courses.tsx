"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Bolalar uchun raqs",
    description:
      "6 yoshdan 12 yoshgacha bo‘lgan bolalar uchun maxsus raqs mashg‘ulotlari. Raqs orqali ijodkorlik va ishonch rivojlanadi.",
    image: "/courses/kids.jpg",
  },
  {
    title: "Zamonaviy raqs",
    description:
      "Hip-Hop, Jazz Funk va boshqa zamonaviy yo‘nalishlar. Yoshlar va kattalar uchun energiyaga boy mashg‘ulotlar.",
    image: "/courses/modern.jpg",
  },
  {
    title: "Klassik raqs",
    description:
      "Balet va klassik raqs asoslari. Harakatlarda nafislik, intizom va mukammallikni shakllantiradi.",
    image: "/courses/classic.jpg",
  },
  {
    title: "Katta yoshdagilar uchun",
    description:
      "Katta yoshdagi insonlar uchun raqs – sog‘liq va kayfiyatni yaxshilovchi ajoyib mashg‘ulot.",
    image: "/courses/adults.jpg",
  },
];

export default function Courses() {
  return (
    <section
      id="courses"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-600/20 via-purple-700/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Bizning{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              kurslar
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Har bir kurs sizning qiziqishingiz, yoshi va maqsadlaringizga
            moslashtirilgan. Siz uchun eng qulayini tanlang.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-gray-800/50 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-pink-500/30 transition-all border border-gray-700 hover:border-pink-500"
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">
                  {course.title}
                </h3>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed">
                  {course.description}
                </p>
                <a
                  href="#contact"
                  className="inline-block mt-5 px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 transition"
                >
                  🚀 Darsga yozilish
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
