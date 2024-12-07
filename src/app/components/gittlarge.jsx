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
    className="relative bg-white dark:bg-black pt-12 px-6 bg-stars-light dark:bg-stars-dark bg-cover bg-center"
  >
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-12">
      {/* Text Section */}
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-optima text-white dark:text-black mb-4">
          Get in Touch Today!
        </h2>
        <p className="text-gray-700 text-[18px] font-opensans dark:text-gray-400 mb-6">
          Let’s transform your ideas into an outstanding digital experience.
        </p>
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center sm:items-stretch">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            className="px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-t-lg sm:rounded-t-none sm:rounded-l-lg w-full sm:w-72 focus:outline-none focus:ring focus:ring-orange-500 mb-4 sm:mb-0"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-b-lg sm:rounded-b-none sm:rounded-r-lg transition duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Processing..." : "Contact Us"}
          </button>
        </div>
      </div>
  
      {/* Image Section */}
      <div className="lg:w-1/2 flex justify-center lg:justify-end">
        <Image
          src="/gitt2.png" // Replace with your image path
          alt="Professional woman"
          width={300}
          height={400}
          className="rounded-md object-cover w-[200px] h-[300px] sm:w-[300px] sm:h-[400px]"
        />
      </div>
    </div>
  </section>
  
  );
};

export default ContactSection;
