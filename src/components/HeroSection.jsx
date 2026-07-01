"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaArrowRight, FaPhone } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574759259684-258a94de6762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZvcmVzdCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY0MTA1ODg1fDA&ixlib=rb-4.1.0&q=80&w=1080')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F6E49]/90 via-[#2F6E49]/70 to-[#8CCB8A]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* h1 — no text-* class, governed by globals.css @layer base */}
          <h1 className="text-white max-w-4xl mx-auto">
            Natural Solutions for Sustainable & Climate-Resilient Cities
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white/90 max-w-3xl mx-auto text-lg sm:text-xl"
          >
            METIX ECO d.o.o. delivers high-quality genetic material, advanced
            ecological solutions and blockchain transparency for modern cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => router.push("/contact")}
              className="group bg-white text-[#2F6E49] px-8 py-4 rounded-lg hover:bg-[#8CCB8A] hover:text-white transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Request a Quote
              <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => router.push("/contact")}
              className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2F6E49] transition-all duration-300 flex items-center gap-2"
            >
              <FaPhone className="w-5 h-5" />
              Contact Us
            </button>
          </motion.div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap justify-center gap-6 mt-16 text-white/80 text-sm"
          >
            {[
              "Genetically Resistant Material",
              "Blockchain Transparency",
              "6-Year Warranty",
            ].map((label) => (
              <div key={label} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#8CCB8A] rounded-full animate-pulse" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
