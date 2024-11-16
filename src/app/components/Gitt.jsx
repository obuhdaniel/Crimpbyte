"use client";

import React, { useState, useEffect } from "react";
import OrangeButton from "./yellow";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

function Gitt() {
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
    <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white px-5">
      <div className="flex flex-col gap-4 text-start lg:text-center  md:text-left mb-8 md:mb-0">
        <span className="font-optima font-semibold text-2xl md:text-5xl">
          Get in Touch Today!
        </span>
        <p className="font-opensans font-normal text-[15px] md:text-xl">
          Let Us transform your ideas into outstanding digital experiences.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-start lg:items-center gap-4"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="bg-black border border-gray-500 rounded-md text-white placeholder:text-gray-500 p-2 w-full md:w-2/3"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white rounded-md px-6 py-2 mt-4 md:mt-0 hover:bg-orange-600 items-start"
            disabled={state.submitting}
          >
            {state.submitting ? "Processing..." : "Contact Us"}
          </button>
        </form>
        <ValidationError field="email" prefix="Email" errors={state.errors} />
      </div>

      <div className="relative w-full h-fit  ">
        <div className="absolute h-1/2 top-20 left-0 flex gap-4 ">
          {[1, 2, 3].map((star, index) => (
            <div key={index} className="w-full h-full  transform rotate-45">
              <div className="w-full h-full transform -rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-full h-full text-orange-950 p-2"
                >
                  <path
                    fill="currentColor"
                    d="M12 2c.5 0 .9.3 1.1.8l2.3 4.7 5.2.8c.5.1.9.6.8 1.1l-3.8 3.7.9 5.2c.1.5-.4.9-.9.7L12 17.4l-4.7 2.5c-.5.3-1-.1-.9-.7l.9-5.2-3.8-3.7c-.4-.5-.1-1 .8-1.1l5.2-.8 2.3-4.7c.2-.5.6-.8 1.1-.8z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end items-end h-full">
          <div className="relative min-h-max">
            <Image
              src="/gitt.png"
              alt="Professional"
              objectFit="cover"
              className="rounded-lg"
              height={100}
              width={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gitt;
