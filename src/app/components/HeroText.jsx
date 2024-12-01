"use client"
import React, {useState, useEffect} from "react";
import OrangeButton from "./yellow";
// import WithIcon from "./fancyButtons/WithIcon";
import { Monitor, Cloud, Cpu, Palette, Globe, TrendingUp } from 'lucide-react';
const WithIcon = ({ text, style, Icon }) => (
  <div
    className={`group flex items-center gap-3 px-6 py-3 rounded-full border-2 ${style} 
    bg-white shadow-sm hover:shadow-md transition-all cursor-pointer
    opacity-0 translate-y-4 animate-fade-in-up hover:scale-105 duration-300`}
  >
    {Icon && <Icon className="w-5 h-5 transition-transform group-hover:rotate-12" />}
    <span className="font-medium text-gray-800">{text}</span>
  </div>
);

const BackgroundSVG = () => (
  <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style={{ stopColor: '#ff8f0030', stopOpacity: 0.1 }} />
      <stop offset="100%" style={{ stopColor: '#ff8f0010', stopOpacity: 0.05 }} />
    </linearGradient>
    <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
      <path d="M 8 0 L 0 0 0 8" fill="none" stroke="#ff8f0015" strokeWidth="0.5" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad1)" />
  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
);


function HeroText() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <BackgroundSVG />
      
      {/* Decorative SVG Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 animate-float">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <circle cx="50" cy="50" r="40" fill="none" stroke="#ff8f00" strokeWidth="1">
            <animate 
              attributeName="r" 
              values="38;42;38" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </circle>
          <circle cx="50" cy="50" r="30" fill="none" stroke="#ff8f00" strokeWidth="1">
            <animate 
              attributeName="r" 
              values="28;32;28" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </circle>
        </svg>
      </div>
      
      <div className="absolute bottom-20 right-10 w-40 h-40 animate-float-delayed">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-10">
          <rect x="20" y="20" width="60" height="60" fill="none" stroke="#ff8f00" strokeWidth="1">
            <animate 
              attributeName="width" 
              values="58;62;58" 
              dur="4s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="height" 
              values="58;62;58" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </rect>
          <rect x="30" y="30" width="40" height="40" fill="none" stroke="#ff8f00" strokeWidth="1">
            <animate 
              attributeName="width" 
              values="38;42;38" 
              dur="4s" 
              repeatCount="indefinite" 
            />
            <animate 
              attributeName="height" 
              values="38;42;38" 
              dur="4s" 
              repeatCount="indefinite" 
            />
          </rect>
        </svg>
      </div>

      <div className={`flex flex-col items-center py-10 md:py-16 gap-4 px-4 transition-opacity duration-1000 
        ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Top Services Section */}
        <div className="w-full max-w-5xl px-6 md:px-10">
          <div className="flex flex-wrap justify-between gap-4" style={{ '--stagger-delay': '0.1s' }}>
            <WithIcon text="UI/UX Designs" style="border-orange-500" Icon={Palette} />
            <WithIcon text="Software Development" style="border-purple-500" Icon={Monitor} />
          </div>
          <div className="flex justify-center mt-6">
            <WithIcon text="Cloud Computing" style="border-blue-500" Icon={Cloud} />
          </div>
        </div>

        {/* Main Content */}
        <div className={`w-full max-w-4xl text-center px-4 opacity-0 translate-y-4 
          ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.4s' }}
        >
          <h1 className="font-optima text-4xl md:text-6xl leading-tight md:leading-snug 
            bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Transforming industries through{" "}
            <span className="block md:inline">advanced technology solutions</span>
          </h1>
          <p className="font-opensans text-primaryTextGrey text-base md:text-xl mt-6 
            mx-auto max-w-3xl leading-relaxed">
            Empowering Your Brand with Innovative Digital Solutions Tailored to
            Elevate Engagement, Drive Growth, and Achieve your unique Business
            Goals.
          </p>
        </div>

        {/* CTA Button */}
        <div className={`mt-8 opacity-0 translate-y-4 ${isVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.6s' }}>
          <OrangeButton 
            buttonText="Get a Quote" 
            className="transition-transform hover:scale-105 duration-300"
          />
        </div>

        {/* Bottom Services Section */}
        <div className="w-full max-w-5xl px-6 md:px-10 mt-12">
          <div className="flex justify-center mb-6">
            <WithIcon text="IOT" style="border-orange-500" Icon={Cpu} />
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            <WithIcon text="Marketing Service" style="border-blue-500" Icon={TrendingUp} />
            <WithIcon text="Web Development" style="border-green-500" Icon={Globe} />
          </div>
        </div>

        {/* Separator Line */}
        <div className={`w-full max-w-5xl mt-16 transition-transform duration-1000 origin-left
          ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}>
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </div>
      </div>
    </div>
  );
}

export default HeroText;
