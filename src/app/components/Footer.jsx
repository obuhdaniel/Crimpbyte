import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  
} from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col text-primaryTextGrey bg-[#F2F2F2]">
      {/* Social Icons */}
      <div className="flex flex-row justify-center gap-4 sm:gap-8 md:gap-10 lg:gap-14 my-10 mx-5 bg-white rounded-lg p-5 md:mx-10 md:px-10 md:justify-between">
        
        <a href="https://web.facebook.com/profile.php?id=61561635763286">
        <FaFacebook size={30} className="text-blue-600" />
        </a>
        <a href="https://x.com/crimpbyte">
          <FaTwitter size={30} className="text-blue-400" />
        </a>
        <a href="https://www.instagram.com/crimpbyte/?hl=en"><FaInstagram size={30} className="text-pink-500" /></a>
        
        <FaLinkedin size={30} className="text-blue-700" />
        <a href="https://www.youtube.com/channel/UCSJ8O3jfyWtJG7bMddg-_bg/"><FaYoutube size={30} className="text-red-500" /></a>
        
      </div>

      {/* Footer Sections */}
      <div className="flex flex-col md:flex-row justify-evenly items-start gap-10  md:gap-0 px-5 md:px-10 py-10">
        {/* Logo and Branding */}
        <div className="flex flex-row lg:flex-col md:flex-row items-center gap-4">
          <div>
            <Image src="/logo.png" alt="Logo" width={50} height={50} />
          </div>
          <div className="flex flex-col items-start text-center md:text-left">
            <span className="font-opensans text-[#111111] text-lg md:text-[20px] font-semibold">
              Crimpbyte
            </span>
            <span className="font-opensans text-base md:text-[16px]">
              Innovating for a Sustainable Future
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-start">
          <span className="font-opensans text-[#111111] mb-4 text-lg md:text-[20px] font-semibold">
            Quick Links
          </span>
          <ul className="list-none flex flex-col gap-2 font-opensans text-base md:text-[16px]">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/portfolio">Portfolio</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start">
          <span className="font-opensans mb-4 text-[#111111] text-lg md:text-[20px] font-semibold">
            Contact Us
          </span>
          <ul className="list-none flex flex-col gap-2 font-opensans text-base md:text-[16px]">
            <li className="flex items-center gap-2">
              <FaEnvelope /> crimpbyte@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> +234 9015343134
            </li>
            <li className="flex items-start gap-2">
              <FaLocationPin /> Department of Computer Engineering,
              <br />
              University of Benin, Edo State, NG
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-start lg:text-center  md:text-right py-5 text-xs sm:text-sm px-5">
        &copy; 2024 Crimpbyte. All rights reserved. Privacy Policy | Terms of
        Service
      </div>
    </div>
  );
}

export default Footer;
