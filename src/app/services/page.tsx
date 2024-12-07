import React from 'react';
import ContactSection from '../components/gittlarge';
import WwoCards from '../components/WwoCards';

function PortfolioPage() {
  return (
    <>
    <div className="flex flex-col items-start w-full py-6 px-2 bg-[#f2f2f2] dark:bg-black dark:text-white space-y-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">What We Offer</h1>
       
      </div>
    <WwoCards/>
    
    <ContactSection/>
    </>
  );
}

export default PortfolioPage