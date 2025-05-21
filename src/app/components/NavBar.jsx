'use client'
import { FiMenu, FiX } from 'react-icons/fi';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdSunny } from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import { useTheme } from '../context/ThemeContext';
import OrangeButton from "./yellow";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const isActive = (path) => pathname === path;

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const navigationLinks = ['/', '/services', '/portfolio', '/about'];

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar */}
      <nav className="bg-[#f2f2f2] dark:bg-black border-b dark:border-gray-800 dark:text-white flex justify-between items-center px-4 md:px-8 lg:px-16 py-4 font-opensans shadow-sm">
        {/* Logo */}
        <div className="flex-shrink-0 dark:bg-white p-[1px] rounded-full">
          <Image 
            src='/logo3.png' 
            alt='Logo' 
            width={40} 
            height={40} 
            className="w-auto h-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-8">
            {navigationLinks.map((path, index) => (
              <li key={index}>
                <Link 
                  href={path} 
                  className={`py-2 text-sm font-medium tracking-wide ${
                    isActive(path) 
                      ? 'border-b-2 border-orange-300 text-orange-500 dark:text-orange-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  } hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-200`}
                >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-300 dark:focus:ring-orange-500"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <MdSunny className="w-5 h-5 text-amber-400 transition-transform hover:rotate-12" />
            ) : (
              <IoMoonOutline className="w-5 h-5 text-gray-600 transition-transform hover:-rotate-12" />
            )}
          </button>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <OrangeButton buttonText='Contact Us' />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <MdSunny className="w-5 h-5 text-amber-400" />
            ) : (
              <IoMoonOutline className="w-5 h-5 text-gray-600" />
            )}
          </button>
          <button 
  onClick={() => setMenuOpen(!menuOpen)} 
  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200"
>
  {menuOpen ? (
    <FiX size={24} /> // Close icon
  ) : (
    <FiMenu size={24} /> // Menu icon
  )}
</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#f2f2f2] dark:bg-black border-b dark:border-gray-800 px-4 py-6 shadow-lg">
          <ul className="flex flex-col space-y-4">
            {navigationLinks.map((path, index) => (
              <li key={index}>
                <Link
                  href={path}
                  className={`block py-2 text-sm font-medium ${
                    isActive(path) 
                      ? 'text-orange-500 dark:text-orange-400' 
                      : 'text-gray-700 dark:text-gray-300'
                  } hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200`}
                  onClick={() => setMenuOpen(false)}
                >
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                href="https://africakabu.vercel.app/" 
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-200"
              >
                Kabu Kabu &trade;
              </Link>
            </li>
            <li className="pt-2">
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                <OrangeButton buttonText='Contact Us' />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBar;