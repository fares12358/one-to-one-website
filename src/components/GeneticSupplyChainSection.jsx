"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaDna, FaShieldAlt, FaLeaf } from "react-icons/fa";

const features = [
  { icon: FaDna,       title: "Genetic Excellence",   description: "Premium genetic material with certified provenance" },
  { icon: FaShieldAlt, title: "Climate Resilience",   description: "Resistance to drought, heat waves, and pathogens" },
  { icon: FaLeaf,      title: "European Provenances", description: "Adapted to future climate conditions" },
];

export default function GeneticSupplyChainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="genetic" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div>
              <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
                Quality
              </div>
              <h2 className="text-[#2F6E49] mb-6">
                High-Quality Genetic Supply Chain
              </h2>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed">
              METIX ECO ensures genetically superior material resistant to drought, heat waves,
              climate change, and biotic organisms. Seedlings come from certified European
              provenances adapted to future climate conditions.
            </p>

            <div className="space-y-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-[#8CCB8A]/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[#2F6E49] mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1589307584900-e2aa67c44a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmVlJTIwbnVyc2VyeSUyMHN1c3RhaW5hYmxlfGVufDF8fHx8MTc2NDEwNTg4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Tree Nursery"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2F6E49]/30 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-xl"
            >
              <div className="text-center">
                <div className="text-[#2F6E49]">100%</div>
                <div className="text-gray-600 text-sm">Certified</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
