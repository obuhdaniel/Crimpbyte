import React from 'react'

import Head from "next/head";
import Image from "next/image";
import HeroText from "../components/HeroText";
import NoIcon from "../components/fancyButtons/NoIcon";
import Wwo from "../components/Wwo";
import Wcu from "../components/Wcu";
import Portfolio from "../components/Portfolio";
import Gitt from "../components/Gitt";
import Footer from "../components/Footer";



function LandingPage() {
  return (
    <main>
       <div className='bg-[#f2f2f2]'>
      {/* Navbar */}
      

      {/* Hero Section */}
      <HeroText/>
      

      {/* What we Offer Section */}
      <Wwo/>

      {/* Why Chhose Us Section */}
      <Wcu/>
      

      {/* Portfolio Section */}
      <Portfolio/>

      {/* Get in Touch Today Section */}
      <Gitt/>
      

      {/* Footer */}
      <Footer/>
        
    </div>
    </main>
  )
}

export default LandingPage