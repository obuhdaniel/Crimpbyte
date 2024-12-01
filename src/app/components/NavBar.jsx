'use client'

import React, { useState, useEffect } from 'react';
import OrangeButton from "./yellow";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: 'https://kabu.crimpbyte.com/', label: 'Kabu Kabu™' },
    { path: 'https://check.crimpbyte.com/', label: 'Check Home' }
  ];

  return (
    <div className="relative">
      {/* SVG Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-16 h-16 text-orange-100 transform -translate-x-1/2 -translate-y-1/2 opacity-50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
        </svg>
        <svg className="absolute top-0 right-0 w-24 h-24 text-orange-50 transform translate-x-1/3 -translate-y-1/3 opacity-30" viewBox="0 0 100 100">
          <path d="M0,50 a1,1 0 0,0 100,0" fill="currentColor" />
        </svg>
      </div>

      {/* Navbar */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center px-4 py-3 lg:px-8">
            {/* Logo */}
            <div className="relative z-10 flex items-center">
              <Image 
                src='/logo.png' 
                alt='Logo' 
                width={50} 
                height={50} 
                className="transform transition-transform hover:scale-105"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex space-x-6 items-center">
                {navLinks.map(({ path, label }) => (
                  <li key={path} className="relative group">
                    <Link 
                      href={path}
                      className={`py-2 px-1 font-medium text-gray-700 transition-colors duration-200
                        ${isActive(path) 
                          ? 'text-orange-500' 
                          : 'hover:text-orange-500'
                        }`}
                    >
                      {label}
                      <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100
                        ${isActive(path) ? 'scale-x-100' : ''}`} 
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              
              <Link href="/contact">
                <OrangeButton 
                  buttonText='Contact Us'
                  className="transform transition-transform hover:scale-105 hover:shadow-lg"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="absolute inset-0 bg-black opacity-25" onClick={() => setMenuOpen(false)} />
          <nav className="relative h-full w-64 ml-auto bg-white shadow-xl flex flex-col">
            <div className="p-4">
              <button 
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto block"
              >
                <X size={24} />
              </button>
            </div>
            <ul className="flex-1 px-4 py-2 space-y-2">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    href={path}
                    onClick={() => setMenuOpen(false)}
                    className={`flex items-center space-x-2 p-3 rounded-lg transition-colors
                      ${isActive(path)
                        ? 'bg-orange-50 text-orange-500'
                        : 'hover:bg-gray-50'
                      }`}
                  >
                    <span>{label}</span>
                    <ChevronRight size={16} className="ml-auto" />
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  <OrangeButton buttonText='Contact Us' className="w-full" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-16" />
    </div>
  );
};

export default NavBar;