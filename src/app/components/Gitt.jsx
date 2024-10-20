import React from 'react';
import OrangeButton from "./yellow";
import Image from 'next/image';

function Gitt() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black text-white p-10 md:px-20">
      {/* Text Section */}
      <div className="flex flex-col gap-4 text-center md:text-left mb-8 md:mb-0">
        <span className="font-optima font-semibold text-3xl md:text-5xl">Get in Touch Today!</span>
        <p className="font-opensans font-normal text-base md:text-xl">Let's transform your ideas into outstanding digital experiences.</p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            placeholder="Enter your Email"
            className="bg-black border border-gray-500 rounded-md text-white placeholder:text-gray-500 p-2 w-full md:w-2/3"
            type="email"
          />
          <OrangeButton buttonText="Contact Us" />
        </div>
      </div>
      
      {/* Image Section */}
      <div>
        <Image
          src="/gitt.png"
          width={300}
          height={300}
          alt="Get in Touch"
          className="md:w-96 md:h-96"
        />
      </div>
    </div>
  );
}

export default Gitt;
