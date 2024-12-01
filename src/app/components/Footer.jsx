'use client'

import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SocialIcon = ({ href, icon: Icon, color }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative p-3 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg
      ${color} hover:text-white hover:-translate-y-1`}
  >
    <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <svg className="w-full h-full" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" className={`${color} opacity-20`} />
      </svg>
    </div>
  </a>
);

const QuickLink = ({ href, children }) => (
  <Link 
    href={href}
    className="group flex items-center gap-2 transition-colors duration-200 hover:text-orange-500"
  >
    <ChevronRight className="w-4 h-4 opacity-0 -ml-6 transition-all duration-200 group-hover:opacity-100 group-hover:ml-0" />
    {children}
  </Link>
);

const ContactItem = ({ icon: Icon, children }) => (
  <li className="flex items-start gap-3 group">
    <Icon className="w-5 h-5 mt-1 text-orange-500 transition-transform duration-200 group-hover:scale-110" />
    <span className="flex-1">{children}</span>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background SVG Patterns */}
      <div className="absolute inset-0 -z-10 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="footer-grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Social Media Bar */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-16">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            <SocialIcon 
              href="https://web.facebook.com/profile.php?id=61561635763286" 
              icon={Facebook} 
              color="text-blue-600"
            />
            <SocialIcon 
              href="https://x.com/crimpbyte" 
              icon={Twitter} 
              color="text-blue-400"
            />
            <SocialIcon 
              href="https://www.instagram.com/crimpbyte/?hl=en" 
              icon={Instagram} 
              color="text-pink-500"
            />
            <SocialIcon 
              href="#" 
              icon={Linkedin} 
              color="text-blue-700"
            />
            <SocialIcon 
              href="https://www.youtube.com/channel/UCSJ8O3jfyWtJG7bMddg-_bg" 
              icon={Youtube} 
              color="text-red-500"
            />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo.png" 
                alt="Crimpbyte Logo" 
                width={50} 
                height={50}
                className="transition-transform hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-900">Crimpbyte</h3>
                <p className="text-sm text-gray-600">Innovating for a Sustainable Future</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions for a 
              digital-first world.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <nav className="space-y-3 pl-6">
              <QuickLink href="/">Home</QuickLink>
              <QuickLink href="/services">Services</QuickLink>
              <QuickLink href="/portfolio">Portfolio</QuickLink>
              <QuickLink href="/about-us">About Us</QuickLink>
              <QuickLink href="/contact-us">Contact Us</QuickLink>
            </nav>
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <ContactItem icon={Mail}>
                <a href="mailto:crimpbyte@gmail.com" className="hover:text-orange-500 transition-colors">
                  crimpbyte@gmail.com
                </a>
              </ContactItem>
              <ContactItem icon={Phone}>
                <a href="tel:+2349015343134" className="hover:text-orange-500 transition-colors">
                  +234 9015343134
                </a>
              </ContactItem>
              <ContactItem icon={MapPin}>
                Department of Computer Engineering,
                <br />
                University of Benin, Edo State, NG
              </ContactItem>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="w-full max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>&copy; {currentYear} Crimpbyte. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;