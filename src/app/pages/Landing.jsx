import React from 'react'


import HeroText from "../components/HeroText";
import Wwo from "../components/Wwo";
import Wcu from "../components/Wcu";
import Portfolio from "../components/Portfolio";
import Gitt from "../components/Gitt";




function LandingPage() {
  return (
    <main>
       <div className='bg-primaryWhite'>
 
      

  
      <HeroText/>
      

      <Wwo/>

      <Wcu/>
      
      <Portfolio/>
      <Gitt/>
      
        
    </div>
    </main>
  )
}

export default LandingPage