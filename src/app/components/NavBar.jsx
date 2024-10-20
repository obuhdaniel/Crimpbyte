"use client"

import React, { useState } from 'react';
import OrangeButton from "./yellow";
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-white p-4 border-b-2 border-gray-200 flex justify-between items-center px-6 lg:px-10 font-opensans">
        {/* Logo */}
        <div>
          <Image src='/logo.png' alt='Logo' width={50} height={50} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <ul className="flex flex-row gap-6 items-center">
            <li>
              <Link href="/" className={`${isActive('/') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={`${isActive('/services') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`${isActive('/portfolio') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${isActive('/about') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`}>
                About Us
              </Link>
            </li>
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
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white px-6 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className={`${isActive('/') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`} onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className={`${isActive('/services') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`} onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className={`${isActive('/portfolio') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`} onClick={() => setMenuOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/about" className={`${isActive('/about') ? 'underline decoration-orange-300 font-bold underline-offset-2' : ''}`} onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
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
