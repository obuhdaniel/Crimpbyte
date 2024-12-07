import React from 'react';
import NoIcon from "./fancyButtons/NoIcon";
import WwoCardsSimple from './WwoCardsSimple';
import SeeMore from "./fancyButtons/SeeMore";
import Image from 'next/image';
import WwoCards from './WwoCards';

function Wwo2() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-40 bg-[#f2f2f2] dark:bg-black dark:text-white gap-6 md:gap-8">
      <NoIcon text="Our Services" />
      <span className="font-optima text-3xl md:text-4xl">What We Offer</span>
      
      <WwoCards/>
     
    </div>
  );
}

export default Wwo2;
