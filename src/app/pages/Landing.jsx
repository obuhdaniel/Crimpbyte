import React from 'react'
import ContactSection from '../components/gittlarge';

import HeroText from "../components/HeroText";
import Wwo from "../components/Wwo";
import Wcu from "../components/Wcu";
import Portfolio from "../components/Portfolio";
import Gitt from "../components/Gitt";




function LandingPage() {
  return (
    <main className='mx-auto overflow-clip'>
       <div className='bg-primaryWhite'>
 
      
      

  
      <HeroText/>
      

      <Wwo/>

      <Wcu/>
      
      <Portfolio/>
      <ContactSection/>
      
      
        
    </div>
    </main>
  )
}

export default LandingPage