//Why choose us section
//Author: Obuh Daniel


import React from 'react'
import NoIcon from "../components/fancyButtons/NoIcon";
import SeeMore from "./fancyButtons/SeeMore";
import WcuCards from './WCU/WcuCards';
import Link from 'next/link';


function Wcu() {
  return (
    <div className='flex flex-col items-center text-center py-10 gap-3'>
        <NoIcon
        text="Why choose Us"
        />
        <span className='font-optima text-4xl'>Committed to your Success</span>
        <p className='font-opensans text-[24]'>We combine innovative design with cutting-edge technology to create custom <br />
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