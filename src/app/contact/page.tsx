'use client'

import React, { useState, useEffect} from "react";
import NavBar from "../components/NavBar";
import Gitt from "../components/Gitt";
import Footer from "../components/Footer";
import Image from "next/image";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/navigation';
function PortfolioPage() {
  // Initialize formspree hook
  const [state, handleSubmit] = useForm("xldebkyw");
  const router = useRouter();
 
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        router.push('/'); // Redirect to homepage after 3 seconds
      }, 3000); // 3 seconds delay for the message

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [state.succeeded, router]);

  if (state.succeeded) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white rounded-lg shadow-xl max-w-md w-full text-center">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 1 8-8 8.012 8.012 0 0 1-8 8zm0-14a6 6 0 1 0 6 6 6.008 6.008 0 0 0-6-6z" />
              <path fillRule="evenodd" d="M10 12a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-green-500">Thanks for reaching out!</h2>
          <p className="text-lg text-gray-600">We'll get back to you soon.</p>
          <p className="mt-4 text-sm text-gray-500">You are being redirected to the homepage...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-col items-start max-w-4xl mx-auto p-6 bg-white rounded-lg space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">Contact Crimpbyte</h1>
        <p className="text-gray-700 leading-relaxed">
          Have Questions or Need Assistance? We're Just a Message Away! Our Team
          is Dedicated to Providing You with Prompt and Helpful Support—Reach
          Out to Us Anytime!
        </p>
      </div>

      {/* Form and Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 p-8 bg-white rounded-lg max-w-5xl mx-auto">
        {/* Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-gray-600">Your Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                name="name" // Ensuring it's included in the form data
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-gray-600">Your Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                name="email" // Ensuring it's included in the form data
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-gray-600">Phone Number</label>
              <PhoneInput
                name="phone" // Ensure it’s included in the form data
                defaultCountry="ng" // Set default country (Nigeria)
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <ValidationError prefix="Phone" field="phone" errors={state.errors} />
            </div>

            {/* Budget Field */}
            <div>
              <label htmlFor="budget" className="block text-gray-600">Budget</label>
              <input
                type="text"
                id="budget"
                placeholder="Budget"
                name="budget" // Ensuring it's included in the form data
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                required
              />
              <ValidationError prefix="Budget" field="budget" errors={state.errors} />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-gray-600">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                name="message" // Ensuring it's included in the form data
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 h-32 resize-none"
                required
              ></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300"
              disabled={state.submitting} // Disable button during submission
            >
              {state.submitting ? "Submitting..." : "Submit"}

            
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/34.png"
            alt="Contact Us"
            width={1200}
            height={600}
            className="rounded-lg object-cover w-full h-auto"
            priority // Optimize the image load on the page
          />
        </div>
      </div>

      <Gitt />
      <Footer />
    </>
  );
}

export default PortfolioPage;
