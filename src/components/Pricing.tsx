"use client";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Boshlang‘ich",
    price: "400 000 so‘m / oy",
    features: [
      "Haftasiga 2 ta mashg‘ulot",
      "Guruhda 10-15 kishi",
      "Boshlovchilar uchun qulay",
    ],
    highlight: false,
  },
  {
    name: "Standart",
    price: "600 000 so‘m / oy",
    features: [
      "Haftasiga 3 ta mashg‘ulot",
      "O‘rtacha guruh (8-10 kishi)",
      "Bepul raqs formasi",
      "Konsertlarda qatnashish imkoniyati",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "900 000 so‘m / oy",
    features: [
      "Haftasiga 5 ta mashg‘ulot",
      "Kichik guruh (5-6 kishi)",
      "Shaxsiy murabbiy",
      "Professional sahna tayyorgarligi",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-pink-600/20 via-purple-700/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Header */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Narxlar{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              paketlar
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-300">
            Siz uchun mos bo‘lgan tarifni tanlang va raqs olamiga qadam qo‘ying.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl overflow-hidden shadow-xl border transition transform hover:-translate-y-2 ${plan.highlight
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 scale-105 shadow-pink-500/30"
                  : "bg-gray-800/50 backdrop-blur-md border-gray-700 hover:border-pink-500"
                }`}
            >
              {/* Content */}
              <div className="p-8 text-left">
                <h3
                  className={`text-2xl font-bold ${plan.highlight ? "text-white" : "text-gray-100"
                    }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 text-xl font-semibold ${plan.highlight ? "text-pink-100" : "text-gray-300"
                    }`}
                >
                  {plan.price}
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  {plan.features.map((feature, j) => (
                    <li
                      key={j}
                      className={`flex items-center gap-2 ${plan.highlight ? "text-pink-50" : "text-gray-400"
                        }`}
                    >
                      ✅ {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-8 inline-block px-6 py-3 rounded-full font-semibold shadow-md transition hover:scale-105 ${plan.highlight
                      ? "bg-white text-purple-600"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                    }`}
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
