import React from 'react';
import NoIcon from "./fancyButtons/NoIcon";
import WwoCardsSimple from './WwoCardsSimple';
import SeeMore from "./fancyButtons/SeeMore";
import Image from 'next/image';
import WwoCards from './WwoCards';

function Wwo2() {
  return (
    <div className="flex flex-col items-center text-center py-10 md:py-40 gap-6 md:gap-8">
      <NoIcon text="Our Services" />
      <span className="font-optima text-3xl md:text-4xl">What We Offer</span>
      <p className="font-opensans text-lg md:text-xl max-w-3xl mx-auto">
        Comprehensive Digital Solutions Designed to Propel Your Business Forward
      </p>
      <WwoCards/>
      <SeeMore />

      <Image
        src="/line.png"
        width="1500"
        height="0"
        alt=''

        className='my-20'

        />
    </div>
  );
}

export default Wwo2;
