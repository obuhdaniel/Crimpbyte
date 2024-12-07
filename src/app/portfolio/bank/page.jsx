import React from "react";
import Gitt from "../../components/Gitt";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Bankmate: A fintech Mobile App
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          Introducing BankMate, a mobile banking application designed to provide users with a seamless and secure banking experience. As digital banking continues to grow in popularity, BankMate aims to simplify everyday financial tasks such as account management, money transfers, and bill payments. With an emphasis on user-friendly design and robust security, BankMate empowers users to manage their finances anytime, anywhere
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          Introducing BankMate, a mobile banking application designed to provide users with a seamless and secure banking experience. As digital banking continues to grow in popularity, BankMate aims to simplify everyday financial tasks such as account management, money transfers, and bill payments. With an emphasis on user-friendly design and robust security, BankMate empowers users to manage their finances anytime, anywhere </p>        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start  mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Solution
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          To address these challenges, BankMate  features an intuitive user interface that simplifies navigation and enhances user experience. The app  provides quick access to essential banking features, ensuring convenience for users managing their finances on the go. Advanced security measures, including biometric authentication, was  implemented to safeguard user transactions and data. Additionally, personalized dashboards  offer tailored financial insights and recommendations, empowering users to make informed decisions about their money. </p> 
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/bank3.png" alt="" />
          </div>
        </div>
      </div>

      <Gitt />
    </>
  );
}

export default PortfolioPage;
