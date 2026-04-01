"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaQrcode, FaLock, FaChartLine, FaEye, FaArrowRight } from "react-icons/fa";

const steps = [
  { icon: "🌱", label: "Seed",       color: "#2F6E49" },
  { icon: "🔬", label: "Production", color: "#3a805a" },
  { icon: "🚚", label: "Delivery",   color: "#529476" },
  { icon: "🌳", label: "Planting",   color: "#6fa888" },
  { icon: "📊", label: "Monitoring", color: "#8CCB8A" },
];

const features = [
  { icon: FaQrcode,    title: "QR Code Tracking",  description: "Unique identifier for every seedling" },
  { icon: FaLock,      title: "Blockchain Security", description: "Immutable record of all data" },
  { icon: FaChartLine, title: "CO₂ Footprint",      description: "Carbon tracking from production to planting" },
  { icon: FaEye,       title: "Full Transparency",   description: "Insight into the entire plant lifecycle" },
];

export default function BlockchainSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blockchain" className="py-20 bg-gradient-to-br from-gray-50 to-[#8CCB8A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
            Technology
          </div>
          <h2 className="text-[#2F6E49] mb-6">
            Blockchain Transparency & QR Tracking
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Every seedling has a unique QR code and blockchain record that enables tracking
            of the genetic material origin, production process, CO₂ footprint from order to
            planting, and the complete lifecycle.
          </p>
        </motion.div>

        {/* Process flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    className="text-center"
                  >
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl shadow-lg hover:scale-110 transition-transform"
                      style={{ backgroundColor: step.color + "20" }}
                    >
                      {step.icon}
                    </div>
                    <div className="mt-3 text-sm text-gray-700">{step.label}</div>
                  </motion.div>

                  {index < steps.length - 1 && (
                    <FaArrowRight className="hidden md:block w-8 h-8 text-[#8CCB8A] mx-4" />
                  )}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-8 text-center text-sm text-gray-600 bg-[#8CCB8A]/10 rounded-lg p-4"
            >
              <FaLock className="w-5 h-5 inline-block mr-2 text-[#2F6E49]" />
              All phases verified by blockchain technology
            </motion.div>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-[#2F6E49] mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
