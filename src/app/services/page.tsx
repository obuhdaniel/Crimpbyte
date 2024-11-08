import React from 'react'
import NavBar from '../components/NavBar';
import Gitt from '../components/Gitt';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Wwo2 from '../components/Wwo2';
import WwoCards from '../components/WwoCards';

function PortfolioPage() {
  return (
    <>
    <NavBar/>
    <div className="flex flex-col items-start max-w-4xl mx-auto p-6 bg-white rounded-lg space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">What We Offer</h1>
       
      </div>
    <WwoCards/>
    
    <Gitt/>
    <Footer/>
    </>
  );
}

export default PortfolioPage