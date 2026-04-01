"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope,     label: "Email",   value: "info@metixeco.hr", link: "mailto:info@metixeco.hr" },
  { icon: FaPhone,        label: "Phone",   value: "+385 1 234 5678",  link: "tel:+38512345678" },
  { icon: FaMapMarkerAlt, label: "Address", value: "Zagreb, Croatia",  link: null },
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#8CCB8A]/20 text-[#2F6E49] rounded-full mb-4">
            Contact
          </div>
          <h2 className="text-[#2F6E49] mb-6">Get In Touch</h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
            Want to improve green infrastructure or start a climate resilience project?
            METIX ECO is here for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#8CCB8A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaPaperPlane className="w-7 h-7 text-[#2F6E49]" />
                </div>
                <h3 className="text-[#2F6E49] mb-2">Message Sent!</h3>
                <p className="text-gray-600">Thank you! We will get back to you as soon as possible.</p>
                <button onClick={() => setSubmitted(false)} className="mt-6 text-sm text-[#2F6E49] underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg p-3">{error}</div>
                )}
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text" id="name" name="name" value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F6E49] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F6E49] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message" name="message" value={formData.message} onChange={handleChange} rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2F6E49] focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#2F6E49] to-[#8CCB8A] text-white px-8 py-4 rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <FaPaperPlane className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100 hover:border-[#8CCB8A]/30 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="text-gray-800">{info.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2F6E49] to-[#8CCB8A] rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{info.label}</div>
                        <div className="text-gray-800">{info.value}</div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden h-64"
            >
              <div className="w-full h-full bg-gradient-to-br from-[#2F6E49]/20 to-[#8CCB8A]/20 flex items-center justify-center relative">
                <FaMapMarkerAlt className="w-16 h-16 text-[#2F6E49]" />
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 text-center">
                  <p className="text-gray-700">Zagreb, Croatia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
