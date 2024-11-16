import React from "react";
import OrangeButton from "./yellow";
import WithIcon from "./fancyButtons/WithIcon";
import Image from "next/image";

function HeroText() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 md:py-16 gap-4">
      <div className="w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-wrap justify-between gap-2">
          <WithIcon text="UI/UX Designs" style="border-orange-500" />
          <WithIcon text="Software Development" style="border-purple-500" />
        </div>
        <div className="flex justify-center mt-4">
          <WithIcon text="Cloud Computing" style="border-blue-500" />
        </div>
      </div>

      <div className="w-full max-w-4xl text-center">
        <h1 className="font-optima text-3xl md:text-5xl leading-tight md:leading-snug">
          Transforming industries through <br /> advanced technology solutions
        </h1>
        <p className="font-opensans text-primaryTextGrey text-base md:text-xl mt-4 mx-auto w-3/4">
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
          <WithIcon text="IOT" style="border-orange-500" />
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <WithIcon text="Marketing Service" style="border-blue-500" />
          <WithIcon text="Web Development" style="border-green-500" />
        </div>
        
      </div>

      <div className="flex flex-wrap justify-center gap-6 my-3 mx-5 bg-white h-6 w-3/4 rounded-lg p-5 md:mx-10 md:px-20 md:justify-between"></div>

      <Image src="/line.png" width="1500" height="0" alt="" className="my-10" />
    </div>
  );
}

export default HeroText;
