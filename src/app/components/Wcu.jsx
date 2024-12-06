//Why choose us section
//Author: Obuh Daniel


import React from 'react'
import NoIcon from "../components/fancyButtons/NoIcon";
import SeeMore from "./fancyButtons/SeeMore";
import WcuCards from './WCU/WcuCards';
import Link from 'next/link';


function Wcu() {
  return (
    <div className='flex flex-col items-center text-center py-10 gap-2'>
        <NoIcon
        text="Why choose Us"
        />
        <span className='font-optima mt-5 mx-auto px-5 text-[26px] md:text-4xl font-bold'>Committed to your Success</span>
        <p className='font-opensans font-normal text-[15px] md:text-xl max-w-3xl text-primaryTextGrey mx-auto w-[90%]'>We combine innovative design with cutting-edge technology to create custom 
        solutions that not only meet your needs but also exceed your expectations
        </p>
        <WcuCards/>


        <Link href="/about">
        <SeeMore />
      </Link>

       


        

        

        
        
    </div>
  )
}

export default Wcu