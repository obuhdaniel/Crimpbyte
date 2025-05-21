import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar';
import ContactSection from '../components/gittlarge';
import Footer from '../components/Footer';
import WwoCards from '../components/WwoCards';
import Wwo2 from '../components/Wwo2';
import Portfolio from '../components/Portfolio';

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col items-start w-full p-6 bg-[#f2f2f2] dark:bg-black space-y-4">
        <h1 className="font-optima text-3xl font-bold text-gray-800 dark:text-white">
          The Crimpbyte Difference
        </h1>
        <p className="font-opensans text-[15px] max-w-4xl text-gray-700 leading-relaxed dark:text-[#A5A5A5]">
          <strong>CRIMPBYTE</strong> is a forward-thinking technology company committed to delivering innovative, high-quality solutions across a range of industries. Our core services include Software Development, UI/UX Design, AI Model Development, Mobile App Development, Digital Marketing, IoT, Cloud Computing, Renewable Energy Solutions, and Precision Agriculture.
        </p>
        <p className="font-opensans text-[15px] max-w-4xl text-gray-700 leading-relaxed dark:text-[#A5A5A5]">
          At CRIMPBYTE, we empower businesses and institutions by leveraging modern technology to solve real-world problems and unlock growth. Our solutions are driven by creativity, efficiency, and impact.
        </p>
        <p className="font-opensans text-[15px] max-w-4xl text-gray-700 leading-relaxed dark:text-[#A5A5A5]">
          We are officially registered with the Corporate Affairs Commission (CAC), and our certificate of incorporation is shown below as proof of our credibility and commitment to transparency.
        </p>
        <div className="w-full flex justify-center py-4">
          <Image
            src="/cac.png"
            alt="CRIMPBYTE CAC Certificate of Incorporation"
            width={700}
            height={900}
            className="rounded-lg shadow-lg object-contain w-full max-w-2xl"
          />
        </div>
        <p className="font-opensans text-[15px] max-w-4xl text-gray-700 leading-relaxed dark:text-[#A5A5A5]">
          We look forward to collaborating with you and exceeding your expectations. For inquiries, please contact us at{' '}
          <a href="tel:09015343134" className="text-blue-600 underline">
            09015343134
          </a>.
        </p>
      </div>

      <Wwo2 />
      <Portfolio />
      <ContactSection />
    </>
  );
}

export default PortfolioPage;
