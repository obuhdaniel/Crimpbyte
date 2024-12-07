import React from "react";
import ContactSection from "../../components/gittlarge";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="bg-[#F2F2F2] dark:bg-black text-gray-700 dark:text-[#A5A5A5]">
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            A Cryptocurrency Exchange mobile application{" "}
          </h1>
          <p className="font-opensans text-[15px] leading-relaxed">
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

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6  space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            The Problem Statement
          </h1>
          <p className=" font-opensans text-[15px] leading-relaxed">
         The cryptocurrency market is often perceived as complex and intimidating, particularly for new users. Many existing exchange platforms have cumbersome interfaces, overwhelming amounts of information, and security concerns, which can deter potential users from engaging with the platform. Additionally, the lack of educational resources and support can leave users feeling lost, hindering their trading experience and overall satisfaction</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/koin2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start  mx-auto p-6  space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800 dark:text-white">
            Solution
          </h1>
          <div>
            <h2 className="text-xl font-semibold">
              1. Intuitive User Interface (UI):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium">Streamlined Design:</span>  Develop a clean and straightforward interface that prioritizes essential features, allowing users to navigate easily without feeling overwhelmed.
              </li>
              <li>
                <span className="font-medium">Personalized Dashboard:</span>
                Create a customizable dashboard where users can see their preferred assets, trading pairs, and market trends at a glance.              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold">
              2. Enhanced User Experience (UX):
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside">
              <li>
                <span className="font-medium"> Onboarding Process:</span>
                Implement a guided onboarding experience for new users, introducing them to the app’s features and functionalities step-by-step.
              </li>
              <li>
                <span className="font-medium">Contextual Help:</span>Offer tooltips and contextual help throughout the app to assist users as they trade or explore different features.
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
      </div>

      <ContactSection />
    </>
  );
}

export default PortfolioPage;
