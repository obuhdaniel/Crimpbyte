'use client'

import React, { useState } from 'react';
import OrangeButton from "./yellow";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Function to check if the link is active
  const isActive = (path) => pathname === path;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-primaryWhite  border-b-2 border-gray-200 flex justify-between items-center px-6 lg:px-10 font-opensans">
        {/* Logo */}
        <div>
          <Image src='/logo.png' alt='Logo' width={50} height={50} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex flex-row gap-6 items-center">
            {['/', '/services', '/portfolio', '/about'].map((path, index) => (
              <li key={index}>
                <Link href={path} className={`pb-2 ${isActive(path) ? 'border-b-2 border-orange-300 font-bold' : ''} hover:border-b-2 hover:border-gray-300 transition-all duration-300`}>
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <OrangeButton buttonText='Contact Us' />
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600">
            {menuOpen ? 'Close' : <Image src='/menu.png' width={30} height={30} alt='menu icon' />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-primaryWhite px-6 py-4">
          <ul className="flex flex-col gap-4">
            {['/', '/services', '/portfolio', '/about'].map((path, index) => (
              <li key={index}>
                <Link href={path} className={`pb-2 ${isActive(path) ? 'border-b-2 border-orange-300 font-bold' : ''} hover:border-b-2 hover:border-gray-300 transition-all duration-300`} onClick={() => setMenuOpen(false)}>
                  {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.slice(2)}
                </Link>
              </li>
            ))}
            <li>
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
