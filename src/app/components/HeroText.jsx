import React from "react";
import OrangeButton from "./yellow";
import WithIcon from "./fancyButtons/WithIcon";
import Image from "next/image";

function HeroText() {
  return (
    <div className="w-full dark:bg-black dark:text-white flex flex-col items-center py-10 gap-4 dark:bg-hero-dark bg-cover bg-center">
      <div className="w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-wrap justify-between gap-2">
          <WithIcon text="UI/UX Designs" style="border-orange-500" stroke="orange" />
          <WithIcon text="Software Development" style="border-purple-500" stroke="purple" />
        </div>
        <div className="flex justify-center mt-4">
          <WithIcon text="Cloud Computing" style="border-blue-500" stroke="blue" />
        </div>
      </div>

      <div className="w-full max-w-4xl text-center">
        <h1 className="font-optima max-w-full text-[26px] lg:text-[40px] md:text-5xl leading-tight md:leading-snug">
          Transforming industries through <br /> advanced technology solutions
        </h1>
        <p className="font-opensans text-primaryTextGrey dark:text-gray-100 lg:text-[15px] text-[12px] md:text-xl mt-1 mx-auto w-3/4">
          Empowering Your Brand with Innovative Digital Solutions Tailored to
          Elevate Engagement, Drive Growth, and Achieve your unique Business
          Goals.
        </p>
      </div>

      {/* Call to Action */}
      <OrangeButton buttonText="Get a Quote" />

      {/* Bottom Icons Section */}
      <div className="w-full max-w-5xl px-6 md:px-10 ">
      <div className="flex justify-center mt-4">
          <WithIcon text="IOT" style="border-orange-500" stroke="orange" />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <WithIcon text="Marketing Service" style="border-blue-500" stroke="blue" />
          <WithIcon text="Web Development" style="border-green-500" stroke="green"/>
        </div>
        
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-3 mx-5 dark:bg-[#151515] bg-white h-6 w-3/4 rounded-lg p-5 md:mx-10 md:px-20 md:justify-between"></div>

      <div className="">
  <Image 
    src="/line.png" 
    width={1500} 
    height={0} 
    alt="decorative line" 
    className="block dark:hidden"
  />
  <Image 
    src="/line2.png" 
    width={1500} 
    height={0} 
    alt="decorative line" 
    className="hidden dark:block"
  />
</div>
    </div>
  );
}

export default HeroText;
