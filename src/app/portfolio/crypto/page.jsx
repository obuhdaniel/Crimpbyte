import React from "react";
import Gitt from "../../components/Gitt";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            A Cryptocurrency Exchange mobile application{" "}
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
            Koin is a cutting-edge cryptocurrency exchange mobile application
            designed to simplify the buying, selling, and trading of digital
            assets. As the cryptocurrency market continues to grow, so does the
            need for user-friendly platforms that cater to both novice and
            experienced traders. Koin aims to provide a seamless trading
            experience, combining advanced features with an intuitive interface,
            making it easier for users to navigate the complexities of the
            crypto landscape.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/koin1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          The current landscape of apartment booking apps is often fragmented and overwhelming for users. Many platforms present users with a plethora of choices but lack intuitive navigation, leading to frustration during the search and booking process. Additionally, concerns around trust and transparency—such as unclear pricing, hidden fees, and insufficient property information—can deter users from committing to bookings. As a result, travelers frequently miss out on great accommodations that fit their needs.          </p>
          
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/koin2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Solution
          </h1>
          <div>
            <h2 className="text-xl font-semibold">
              1. User Friendly Interface (UI):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium">Simple Navigation:</span>  Crimpbyte Designed a clean, intuitive interface that allows users to effortlessly browse, filter, and select apartments based on their preferences, such as location, price, and amenities.
              </li>
              <li>
                <span className="font-medium">Visual Appeal:</span>
                Utilized high-quality images and engaging visuals to showcase properties, enhancing the appeal of listings and making them more inviting.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              2. Enhanced User Experience (UX):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium"> Personalized Recommendations:</span>
                We Implemented a smart recommendation engine that suggests apartments based on users' past behavior, preferences, and search history.
              </li>
              <li>
                <span className="font-medium">Streamlined Booking Process:</span>We Simplify the booking flow with minimal steps, allowing users to reserve their chosen apartment quickly and easily
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/koin3.png" alt="" />
          </div>
        </div>
      </div>

      <Gitt />
    </>
  );
}

export default PortfolioPage;
