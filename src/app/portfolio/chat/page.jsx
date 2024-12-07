import React from "react";
import Gitt from "../../components/Gitt";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4 ">
        <div className="lg:max-w-3xl">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Social Media chat Ui screen
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
            Social media chat applications are vital for communication, yet many
            users struggle with issues like cluttered interfaces, message
            overload, and security concerns. These challenges can lead to
            frustration and reduced engagement. Our proposed chat UI aims to
            simplify the messaging experience by offering a clean design,
            enhanced interaction options, and robust security features. This
            approach will empower users to connect more meaningfully while
            ensuring their privacy and security.
          </p>

          <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
            1. Overwhelming interface <br />
            2. Message overload
            <br />
            3. Limited interaction options
            <br />
            4. Security concerns
            <br />
            5. Lack of message management features
            <br />
            6. Inconsistent notifications
            <br />
            7. Poor search functionality
            <br />
            8. Difficulty in finding important messages
            <br />
            9. Inadequate privacy settings
            <br />
            10. Unclear message context in group chats{" "}
          </p>{" "}
        </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4  lg:w-full lg:h-full">
            <img src="/portfolio/chat1.png" alt="" />
          </div>
        </div>
      </div>

    

      <div className="flex flex-col lg:flex-row items-start justify-between  mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div className="max-w-4xl">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Solution
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
            1. Simplified user interface design <br />
            2. Message management features (e.g., search, pinning) <br />
            3. Enhanced interaction options (e.g., voice messages, video calls){" "}
            <br />
            4. Robust security measures (e.g., end-to-end encryption) <br />
            5. Consistent and customizable notifications <br />
            6. Improved search functionality for quick access <br />
            7. Clear visual differentiation of message types <br />
            8. Contextual replies to maintain conversation flow <br />
            9. Comprehensive privacy settings <br />
            10. User-friendly onboarding for new features
          </p>
        </div>
        <div className="w-full flex flex-col content-end  items-center">
          <div className="w-1/4 h-1/4 lg:w-full lg:h-full">
            <img src="/portfolio/chat2.png" alt="" />
          </div>
        </div>
      </div>

      <Gitt />
    </>
  );
}

export default PortfolioPage;
