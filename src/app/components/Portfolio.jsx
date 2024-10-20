//This is where we implement the Landing Pages Portfolio component
//Author: Obuh Daniel
//Started: 15/10/2024 

import React from 'react';
import NoIcon from "../components/fancyButtons/NoIcon";
import OrangeButton from "./yellow";
import Image from "next/image";
import SeeMore from './fancyButtons/SeeMore';

function Portfolio() {
  return (
    <div className='flex flex-col items-center text-center py-20 gap-10 bg-black text-white'>
      {/* Section Title */}
      <NoIcon text="Portfolio" />
      <span className='font-optima text-4xl mb-6'>A little exploration into our creativity</span>

      {/* Portfolio Items */}
      <div className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto justify-between gap-10 px-4">
        
        {/* Cryptocurrency Exchange Application */}
        <div className='pt-10 rounded-md bg-[#151515] text-start px-6 flex-1'>
          <span className='font-opensans text-xl font-semibold mb-6 block'>A cryptocurrency exchange <br /> mobile application</span>
          <div className='flex flex-col items-start'>
            <div className='my-4'>
              <OrangeButton buttonText="View Case Study" />
            </div>
            <div>
              <Image
                src="/koin3.png"
                width={400}
                height={200}
                alt='cryptocurrency app'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>

        {/* Apartment Booking Application */}
        <div className='pt-10 rounded-md bg-[#151515] text-start px-6 flex-1'>
          <span className='font-opensans text-xl font-semibold mb-6 block'>An Apartment booking mobile <br /> application</span>
          <div className='flex flex-col items-start'>
            <div className='my-4'>
              <OrangeButton buttonText="View Case Study" />
            </div>
            <div>
              <Image
                src="/booking2.png"
                width={400}
                height={200}
                alt='apartment booking app'
                className='rounded-lg'
              />
            </div>
          </div>
        </div>

      </div>

      {/* See More Button */}
      <SeeMore />
    </div>
  );
}

export default Portfolio;
