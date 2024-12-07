'use client'

import Image from 'next/image';
import React, { useEffect } from "react";
import OrangeButton from "./yellow";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
const ContactSection = () => {

    const [state, handleSubmit] = useForm("xpwzdgae"); // Replace with your Formspree form ID
  const router = useRouter();

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.refresh; // Redirect to homepage after 3 seconds
      }, 3000); // 3 seconds delay for the message

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [state.succeeded, router]);

  // If the form is successfully submitted
  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 1 1 8-8 8.012 8.012 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6.008 6.008 0 0 0-6-6z"
              />
              <path
                fillRule="evenodd"
                d="M10 12a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-green-500">
            Thanks for reaching out!
          </h2>
          <p className="text-lg text-gray-600">
            We&apos;ll get back to you soon.
          </p>
        </div>
      </div>
    );
  }
  return (
    <section
      className="relative bg-white dark:bg-gray-900 pt-12  pl-6  bg-stars-light dark:bg-stars-dark bg-cover bg-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 lg:mb-24">
          <h2 className="text-2xl md:text-4xl font-bold font-optima dark:text-black text-white mb-4">
            Get in Touch Today!
          </h2>
          <p className="text-gray-600 font-opensans dark:text-[#444444] mb-6">
            Let’s transform your ideas into an outstanding digital experience.
          </p>
          <div className="flex justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-l-lg w-72 focus:outline-none focus:ring focus:ring-orange-500"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-r-lg">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 hidden lg:flex justify-center h-2/3">
          <div className="relative">
            <Image
              src="/gitt2.png" // Replace with your image path
              alt="Professional woman"
              width={300}
              height={400}
              className="rounded-md"
            />
          </div>
          
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center h-2/3 lg:hidden">
          <div className="relative">
            <Image
              src="/gitt2.png" // Replace with your image path
              alt="Professional woman"
              width={200}
              height={300}
              className="rounded-md"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
