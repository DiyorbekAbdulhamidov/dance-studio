"use client";

import { Instagram, Facebook, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 text-white py-20">
      {/* Neon moving blobs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

      <div className="relative container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Logo + info */}
          <div>
            <h2 className="text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-200 to-pink-400 drop-shadow-[0_0_15px_#ff99ff]">
              Dono Dance Studio
            </h2>
            <p className="mt-4 text-sm text-pink-100 leading-relaxed drop-shadow-[0_0_5px_#ff99ff]">
              Biz bilan raqs san’atini o‘rganing. Professional ustozlar va zamonaviy sharoitlar sizni kutmoqda.
            </p>
          </div>

          {/* Navigatsiya */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow-[0_0_5px_#ffffff]">Navigatsiya</h3>
            <ul className="space-y-3">
              {["About", "Courses", "Gallery", "Contact"].map((item, idx) => (
                <li key={idx}>
                  <a
                    href={`#${item.toLowerCase().replace(/ /g, "")}`}
                    className="relative inline-block text-white/90 hover:text-white transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h3 className="text-lg font-semibold mb-4 drop-shadow-[0_0_5px_#ffffff]">Bizni kuzating</h3>
            <div className="flex gap-4">
              {[
                { href: "https://instagram.com/", icon: <Instagram size={20} /> },
                { href: "https://telegram.org/", icon: <Send size={20} /> },
                { href: "https://facebook.com/", icon: <Facebook size={20} /> },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_#ff99ff] hover:shadow-[0_0_30px_#ff00ff]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Pastki copyright */}
        <div className="mt-20 pt-8 border-t border-white/20 text-center text-sm text-pink-100 drop-shadow-[0_0_5px_#ff99ff]">
          © {new Date().getFullYear()} Dance Studio. Barcha huquqlar himoyalangan.
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -50px) scale(1.1); }
          66% { transform: translate(-30px, 30px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 12s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
}
