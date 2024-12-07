import React from "react";
import ContactSection from "../../components/gittlarge";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] dark:bg-black dark:text-white space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            An Apartment booking mobile application
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed dark:text-[#A5A5A5]">
          Introducing StayFinder, an innovative apartment booking mobile application designed to revolutionize the way users find and book short-term rentals. As urban living becomes more dynamic and travel preferences evolve, StayFinder aims to bridge the gap between travelers seeking unique accommodations and apartment owners looking to maximize their rental potential. With a focus on user-centric design and seamless functionality, StayFinder transforms the apartment booking experience into a hassle-free journey.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/stay1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6 bg-[#F2F2F2] dark:bg-black dark:text-white space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed dark:text-[#A5A5A5]">
          The current landscape of apartment booking apps is often fragmented and overwhelming for users. Many platforms present users with a plethora of choices but lack intuitive navigation, leading to frustration during the search and booking process. Additionally, concerns around trust and transparency—such as unclear pricing, hidden fees, and insufficient property information—can deter users from committing to bookings. As a result, travelers frequently miss out on great accommodations that fit their needs.          </p>
          
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/stay2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start  mx-auto p-6 text-gray-700 dark:text-[#A5A5A5] bg-[#F2F2F2] dark:bg-black space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            Solution
          </h1>
          <div>
            <h2 className="text-xl font-semibold dark:text-[#e3e3e3]">
              1. User Friendly Interface (UI):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium dark:text-[#d8d8d8]">Simple Navigation:</span>  Crimpbyte Designed a clean, intuitive interface that allows users to effortlessly browse, filter, and select apartments based on their preferences, such as location, price, and amenities.
              </li>
              <li>
                <span className="font-medium dark:text-[#d8d8d8]">Visual Appeal: </span>
                Utilized high-quality images and engaging visuals to showcase properties, enhancing the appeal of listings and making them more inviting.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold dark:text-[#d8d8d8]">
              2. Enhanced User Experience (UX):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li >
                <span className="font-medium dark:text-[#d8d8d8]"> Personalized Recommendations: </span>
                 We Implemented a smart recommendation engine that suggests apartments based on users' past behavior, preferences, and search history.
              </li>
              <li>
                <span className="font-medium dark:text-[#d8d8d8]">Streamlined Booking Process:</span> We Simplify the booking flow with minimal steps, allowing users to reserve their chosen apartment quickly and easily
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/stay3.png" alt="" />
          </div>
        </div>
      </div>

      <ContactSection />
    </>
  );
}

export default PortfolioPage;
