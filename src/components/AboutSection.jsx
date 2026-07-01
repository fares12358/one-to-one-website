"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1643909070454-bbeb9236bc42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGJpb3RlY2hub2xvZ3klMjBsYWJvcmF0b3J5fGVufDF8fHx8MTc2NDEwNTg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="METIX ECO Laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F6E49]/20 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-[#2F6E49]">15+</div>
                <div className="text-gray-600 text-sm">Years of Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4"
              >
                About Us
              </motion.div>
              <h2 className="text-[#2F6E49] mb-6">Who We Are</h2>
            </div>

            <p className="text-gray-700 leading-relaxed">
              METIX ECO is a Croatian company specializing in the procurement, distribution,
              and production of genetically resilient plant material for urban and peri-urban
              spaces. Our team brings together experts from urban forestry, ecology,
              biotechnology, horticulture, and climate science.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Collaboration with universities, research institutes, and laboratories enables
              us to deliver the highest level of quality and innovation.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 gap-6 pt-6"
            >
              <div className="p-4 bg-white rounded-lg shadow-md border border-[#8CCB8A]/20">
                <div className="text-[#2F6E49]">100%</div>
                <div className="text-gray-600 text-sm">Transparency</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-md border border-[#8CCB8A]/20">
                <div className="text-[#2F6E49]">1000+</div>
                <div className="text-gray-600 text-sm">Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
