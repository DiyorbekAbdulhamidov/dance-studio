"use client";

import { useState } from "react";
import { Instagram, Facebook, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("✅ Arizangiz qabul qilindi! Tez orada siz bilan bog‘lanamiz.");
    setForm({ name: "", phone: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white"
    >
      <div className="absolute inset-0 bg-[url('/bg-pattern.svg')] opacity-10"></div>

      <div className="container relative mx-auto px-6 md:px-12 lg:px-20">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
            Biz bilan bog‘laning
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Darslarga yozilish yoki savollaringiz bo‘lsa, bizga yozib qoldiring yoki qo‘ng‘iroq qiling.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Chap: Contact Info + Map */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shadow-lg">
              <h3 className="text-2xl font-bold text-pink-400">Aloqa ma’lumotlari</h3>
              <p className="text-gray-300 mt-3">📍 Toshkent, Chilonzor, 7-mavze</p>
              <p className="text-gray-300">
                📞 <a href="tel:+998901234567" className="text-pink-400 hover:underline">+998 90 123 45 67</a>
              </p>
              <p className="text-gray-300">
                📧 <a href="mailto:info@dance.uz" className="text-pink-400 hover:underline">info@dance.uz</a>
              </p>

              {/* Socials */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://t.me/"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full shadow hover:scale-110 transition"
                >
                  <Send size={22} />
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full shadow hover:scale-110 transition"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://facebook.com/"
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-pink-600 to-purple-600 text-white rounded-full shadow hover:scale-110 transition"
                >
                  <Facebook size={22} />
                </a>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.9089439482783!2d69.2401!3d41.2995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b123456789%3A0xabcdef!2sChilonzor!5e0!3m2!1suz!2s!4v1691234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* O‘ng: Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-6 border border-white/10"
          >
            <div>
              <label className="block text-sm font-medium text-gray-300">Ism</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="Ismingiz"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Telefon</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="mt-2 block w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="+998 90 123 45 67"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">Xabar</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="mt-2 block w-full rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-500 focus:outline-none"
                placeholder="Xabaringizni yozing..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition"
            >
              🚀 Yuborish
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
