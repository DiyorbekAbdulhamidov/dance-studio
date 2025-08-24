
import About from "@/components/About";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Web Studio",
  description: "Professional web development services",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function HomePage() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Pricing />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
