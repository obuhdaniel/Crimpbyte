import React from 'react';
import OrangeButton from "./yellow";
import WithIcon from "./fancyButtons/WithIcon";

function HeroText() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 md:py-16 gap-4">
      <div className="bg-yellow-300 text-black py-2 text-center font-opensans">
      <span className="font-semibold text-lg">
        🚧 This page is currently under construction. Please check back later! 🚧
      </span>
    </div>
      {/* Top Icons Section */}
      <div className="w-full max-w-5xl px-6 md:px-10">
        <div className="flex flex-wrap justify-between gap-4">
          <WithIcon text="UI/UX Designs" style="border-orange-500" />
          <WithIcon text="Software Development" style="border-purple-500" />
        </div>
        <div className="flex justify-center mt-4">
          <WithIcon text="Cloud Computing" style="border-blue-500" />
        </div>
      </div>

      {/* Main Heading and Description */}
      <div className="w-full max-w-4xl text-center">
        <h1 className="font-optima text-3xl md:text-5xl leading-tight md:leading-snug">
          Transforming industries through <br /> advanced technology solutions
        </h1>
        <p className="font-opensans text-base md:text-xl mt-4">
          Empowering Your Brand with Innovative Digital Solutions Tailored to Elevate Engagement, <br /> Drive Growth, and Achieve your unique Business Goals.
        </p>
      </div>

      {/* Call to Action */}
      <OrangeButton buttonText="Get a Quote" />

      {/* Bottom Icons Section */}
      <div className="w-full max-w-5xl px-6 md:px-10 mt-10">
        <div className="flex flex-wrap justify-between gap-4">
          <WithIcon text="Marketing Service" style="border-blue-500" />
          <WithIcon text="Web Development" style="border-green-500" />
        </div>
        <div className="flex justify-center mt-4">
          <WithIcon text="IOT" style="border-orange-500" />
        </div>
      </div>
    </div>
  );
}

export default HeroText;
