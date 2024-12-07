'use client'
import React, { useState, useEffect} from "react";
import ContactSection from "../components/gittlarge";
import Image from "next/image";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';

function PortfolioPage() {
  const [state, handleSubmit] = useForm("xldebkyw");
  const router = useRouter();
 
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/'); 
      }, 3000); 
      return () => clearTimeout(timer); 
    }
  }, [state.succeeded, router]);

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-black">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full text-center transform transition-all duration-300 hover:scale-105">
          <div className="flex justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 1 8-8 8.012 8.012 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6.008 6.008 0 0 0-6-6z" />
              <path fillRule="evenodd" d="M10 12a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-500 mb-3">Thanks for reaching out!</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">We&apos;ll get back to you soon.</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">You are being redirected to the homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-start w-full ">
          <h1 className="text-4xl font-bold font-optima text-gray-900 dark:text-white mb-4">
            Contact Crimpbyte
          </h1>
          <p className="text-lg text-gray-600 font-opensans dark:text-[#A5A5A5] leading-relaxed">
            Have Questions or Need Assistance? We&apos;re Just a Message Away! Our Team
            is Dedicated to Providing You with Prompt and Helpful Support.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-[#f2f2f2] dark:bg-black rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-2 text-red-500" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-2 text-red-500" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Phone Number
                  </label>
                  <PhoneInput
                    name="phone"
                    defaultCountry="ng"
                    className="w-full rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <ValidationError prefix="Phone" field="phone" errors={state.errors} className="mt-2 text-red-500" />
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="Your budget range"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <ValidationError prefix="Budget" field="budget" errors={state.errors} className="mt-2 text-red-500" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-2 text-red-500" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-200 transform hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 relative">
              <div className="h-full">
                <Image
                  src="/34.png"
                  alt="Contact Us"
                  width={1200}
                  height={600}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactSection />
    </div>
  );
}

export default PortfolioPage;