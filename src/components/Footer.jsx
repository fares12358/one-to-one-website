import Link from "next/link";
import { FaLeaf, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const quickLinks = [
  { label: "About",      path: "/about" },
  { label: "Services",   path: "/services" },
  { label: "Technology", path: "/technology" },
  { label: "Contact",    path: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2F6E49] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-[#8CCB8A] rounded-lg flex items-center justify-center">
                <FaLeaf className="w-6 h-6 text-[#2F6E49]" />
              </div>
              <div>
                <div className="text-white">METIX ECO</div>
                <div className="text-xs text-white/70">d.o.o.</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              High-quality genetic material and blockchain transparency for
              climate-resilient cities.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="text-white/70 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <FaEnvelope className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8CCB8A]" />
                <a href="mailto:info@metixeco.hr" className="text-white/70 hover:text-white transition-colors">
                  info@metixeco.hr
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FaPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8CCB8A]" />
                <a href="tel:+38512345678" className="text-white/70 hover:text-white transition-colors">
                  +385 1 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#8CCB8A]" />
                <span className="text-white/70">Zagreb, Croatia</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-white mb-4">Certifications</h4>
            <div className="space-y-2 text-sm text-white/70">
              {["ISO 9001", "Blockchain Verified", "ESG Compliant"].map((cert) => (
                <div key={cert} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#8CCB8A] rounded-full" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© {currentYear} METIX ECO d.o.o. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Use</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
