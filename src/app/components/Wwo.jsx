import React from 'react';
import NoIcon from "../components/fancyButtons/NoIcon";
import WwoCardsSimple from './WwoCardsSimple';
import SeeMore from "./fancyButtons/SeeMore";
import Image from 'next/image';
import Link from 'next/link';

function Wwo() {
  return (
    <div className="flex flex-col items-center dark:bg-black dark:text-white text-center gap-2 md:gap-8">
      <NoIcon text="Our Services" />
      <span className="font-optima text-[22px] lg:text-[32px] md:text-4xl">What We Offer</span>
      <p className="font-opensans text-[15px] md:text-xl max-w-3xl text-primaryTextGrey mx-auto w-[90%]">
        Comprehensive Digital Solutions Designed to Propel Your Business Forward
      </p>
      <WwoCardsSimple />
      <Link href="/about">
        <SeeMore />
      </Link>

      <Image
        src="/line.png"
        width="1500"
        height="0"
        alt=''

        className='my-7'

        />
    </div>
  );
}

export default Wwo;
