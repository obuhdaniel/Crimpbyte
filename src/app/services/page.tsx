import React from 'react';
import Gitt from '../components/Gitt';
import WwoCards from '../components/WwoCards';

function PortfolioPage() {
  return (
    <>
    <div className="flex flex-col items-start w-full py-6 px-2 bg-[#f2f2f2] rounded-lg space-y-4">
        <h1 className="text-3xl font-bold text-gray-800">What We Offer</h1>
       
      </div>
    <WwoCards/>
    
    <Gitt/>
    </>
  );
}

export default PortfolioPage