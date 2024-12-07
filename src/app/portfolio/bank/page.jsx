import React from "react";
import ContactSection from "../../components/gittlarge";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2]  dark:bg-black dark:text-white space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            Bankmate: A fintech Mobile App
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed dark:text-[#A5A5A5]">
          Introducing BankMate, a mobile banking application designed to provide users with a seamless and secure banking experience. As digital banking continues to grow in popularity, BankMate aims to simplify everyday financial tasks such as account management, money transfers, and bill payments. With an emphasis on user-friendly design and robust security, BankMate empowers users to manage their finances anytime, anywhere
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6 bg-[#F2F2F2] dark:bg-black dark:text-white space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed dark:text-[#A5A5A5]">
          Introducing BankMate, a mobile banking application designed to provide users with a seamless and secure banking experience. As digital banking continues to grow in popularity, BankMate aims to simplify everyday financial tasks such as account management, money transfers, and bill payments. With an emphasis on user-friendly design and robust security, BankMate empowers users to manage their finances anytime, anywhere </p>        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start  mx-auto p-6 text-gray-700 dark:text-[#A5A5A5] bg-[#F2F2F2] dark:bg-black space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            Solution
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed dark:text-[#e3e3e3] ">
          To address these challenges, BankMate  features an intuitive user interface that simplifies navigation and enhances user experience. The app  provides quick access to essential banking features, ensuring convenience for users managing their finances on the go. Advanced security measures, including biometric authentication, was  implemented to safeguard user transactions and data. Additionally, personalized dashboards  offer tailored financial insights and recommendations, empowering users to make informed decisions about their money. </p> 
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank3.png" alt="" />
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export default PortfolioPage;
