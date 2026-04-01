"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaSeedling, FaFlask, FaDatabase, FaAward, FaFileAlt } from "react-icons/fa";

const services = [
  { icon: FaTruck,    title: "Plant Material Procurement & Distribution",   description: "Supply chain of high-quality, genetically resistant material that withstands drought, climate extremes, and pathogens.", color: "from-[#2F6E49] to-[#8CCB8A]" },
  { icon: FaSeedling, title: "Seedling Production from Your Seeds",          description: "Production of locally adapted planting material from your own indigenous seeds.", color: "from-[#8CCB8A] to-[#2F6E49]" },
  { icon: FaFlask,    title: "In Vitro Micropropagation",                    description: "Multiplication of rare, protected, and historically valuable genotypes using modern biotechnology.", color: "from-[#2F6E49] to-[#8CCB8A]" },
  { icon: FaDatabase, title: "Species Selection Platform",                   description: "Digital analysis of climate, soil, and heat islands for science-based species recommendations.", color: "from-[#8CCB8A] to-[#2F6E49]" },
  { icon: FaAward,    title: "CO₂ Certificates",                            description: "Every seedling has a blockchain-verified CO₂ certificate with sequestration calculations.", color: "from-[#2F6E49] to-[#8CCB8A]" },
  { icon: FaFileAlt,  title: "Expert Consulting & Project Design",           description: "Planning of green corridors, urban forests, and ecosystem services.", color: "from-[#8CCB8A] to-[#2F6E49]" },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
            What We Offer
          </div>
          <h2 className="text-[#2F6E49]">Our Services</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#8CCB8A]/30"
            >
              <div
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-[#2F6E49] mb-4 group-hover:text-[#8CCB8A] transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-6 flex items-center text-[#2F6E49] opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-sm">Learn More</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
