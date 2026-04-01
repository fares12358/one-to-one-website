"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaLeaf, FaMicroscope, FaNetworkWired } from "react-icons/fa";

const icons = [
  { Icon: FaLeaf,         title: "Nature",     color: "from-[#2F6E49] to-[#8CCB8A]" },
  { Icon: FaMicroscope,   title: "Science",    color: "from-[#8CCB8A] to-[#2F6E49]" },
  { Icon: FaNetworkWired, title: "Technology", color: "from-[#2F6E49] to-[#8CCB8A]" },
];

export default function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center max-w-4xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
              Our Vision
            </div>
            <h2 className="text-[#2F6E49] mb-6">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our mission is to create more climate-resilient, sustainable, and biologically
              rich urban environments through scientifically selected species, high-quality
              planting material, advanced biotechnology, and transparent management through
              digital technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          >
            {icons.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative">
                  <div
                    className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                  >
                    <item.Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="mt-4 text-gray-700">{item.title}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-12 h-1 bg-gradient-to-r from-transparent via-[#8CCB8A] to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
