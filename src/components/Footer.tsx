import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const services = [
  { href: "/windows", label: "uPVC Windows" },
  { href: "/windows", label: "Aluminium Windows" },
  { href: "/doors", label: "uPVC Doors" },
  { href: "/doors", label: "Aluminium Doors" },
  { href: "/interiors", label: "Modular Kitchens" },
  { href: "/interiors", label: "Wardrobes & Storage" },
];

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/gallery", label: "Project Gallery" },
  { href: "/blog", label: "Blog & Articles" },
  { href: "/faq", label: "FAQ" },
  { href: "/get-quote", label: "Get Quote" },
  { href: "/contact", label: "Contact Us" },
];

const socialLinks = [
  { href: "#", icon: FaFacebookF, label: "Facebook" },
  { href: "#", icon: FaInstagram, label: "Instagram" },
  { href: "#", icon: FaYoutube, label: "YouTube" },
  { href: "#", icon: FaLinkedinIn, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white">
      {/* CTA Strip */}
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="max-w-7xl mx-auto px-4 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Transform Your Space?
            </h3>
            <p className="text-blue-100 mt-1">
              Get a free consultation and quote for your project today.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-quote"
              className="px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-slate-50 transition-all hover:shadow-lg text-center"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+919789053195"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all text-center"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg overflow-hidden">
                <Image src="/logo/logo.png" alt="Able Interiors & Windows" width={40} height={40} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  Able <span className="text-primary-light">Interiors & Windows</span>
                </h3>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium uPVC and aluminium windows, doors,
              and complete interior solutions. Enhancing homes with quality,
              durability, and elegant design.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <Link
                    href={service.href}
                    className="text-slate-400 hover:text-primary-light text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-light text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-5">Get In Touch</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919789053195"
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-light text-sm transition-colors"
                >
                  <FaPhone className="text-primary-light mt-0.5 shrink-0" />
                  <span>+91 97890 53195 / 97899 14746</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ablewindows22@gmail.com"
                  className="flex items-start gap-3 text-slate-400 hover:text-primary-light text-sm transition-colors"
                >
                  <FaEnvelope className="text-primary-light mt-0.5 shrink-0" />
                  <span>ablewindows22@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-400 text-sm">
                  <FaMapMarkerAlt className="text-primary-light mt-0.5 shrink-0" />
                  <span>Flat No.: 1/106ab, G1, Plot No.B5,<br />Sampath Nagar, Nanmangalam,<br />Chennai - 600129</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Able Interiors & Windows. All rights reserved. | GST: 33CMRPM6079C1ZR
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-primary-light transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-primary-light transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
