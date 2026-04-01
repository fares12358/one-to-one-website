"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  FaLeaf, FaDna, FaEye, FaQrcode, FaFlask, FaAward,
  FaShieldAlt, FaUsers, FaArrowRight,
} from "react-icons/fa";

const reasons = [
  { icon: FaLeaf,      title: "Natural Solutions for Climate Challenges",         description: "Scientifically grounded approach to urban greenery" },
  { icon: FaDna,       title: "Genetically Verified, Climate-Resistant Material", description: "Certified genetic material adapted for the future" },
  { icon: FaEye,       title: "Transparent Supply Chain",                         description: "Full visibility from production to planting" },
  { icon: FaQrcode,    title: "QR Tracking for Every Seedling",                   description: "Unique identifier for every plant" },
  { icon: FaFlask,     title: "Advanced Biotechnology & In Vitro Programs",       description: "Modern biotech for outstanding results" },
  { icon: FaAward,     title: "CO₂ Certificates & ESG Compliance",               description: "Blockchain-verified carbon footprint certificates" },
  { icon: FaShieldAlt, title: "6-Year Warranty",                                  description: "Long-term quality guarantee and support" },
  { icon: FaUsers,     title: "International Scientific Partnerships",             description: "Collaboration with universities and research institutes" },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
            Our Advantages
          </div>
          {/* bare h2 — sized by globals @layer base (xl = 1.25rem) */}
          <h2 className="text-[#2F6E49]">Why Choose METIX ECO?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#8CCB8A]/30"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                <reason.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                {/* bare h4 */}
                <h4 className="text-[#2F6E49] mb-2 group-hover:text-[#8CCB8A] transition-colors">
                  {reason.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "100+", label: "Tree Species" },
            { value: "50+",  label: "Projects per Year" },
            { value: "15+",  label: "Scientific Partners" },
            { value: "100%", label: "Blockchain Records" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-gradient-to-br from-[#2F6E49]/5 to-[#8CCB8A]/10 rounded-xl">
              <div className="text-[#2F6E49]">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2F6E49] to-[#8CCB8A] text-white rounded-lg hover:shadow-lg transition-all duration-300"
          >
            View Our Services
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#2F6E49] text-[#2F6E49] rounded-lg hover:bg-[#2F6E49] hover:text-white transition-all duration-300"
          >
            Learn More About Us
            <FaArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
