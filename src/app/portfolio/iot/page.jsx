import React from "react";
import Gitt from "../../components/Gitt";
import PortfolioLong from "../../components/PortfolioLong";

function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4 ">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Homify: An IoT mobile Application Ui
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          Introducing Homify, an innovative IoT mobile application designed to empower users in managing their smart home devices seamlessly and intuitively. As the Internet of Things (IoT) continues to expand, homeowners are increasingly looking for centralized solutions that allow them to control their smart devices from one platform. Homify aims to simplify home automation, providing users with a cohesive interface to monitor, manage, and optimize their smart home experience.
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/iot1.png" alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:justify-items-center items-start w-full mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div className="lg:pt-20">
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            The Problem Statement
          </h1>
          <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          With the rapid growth of smart home technology, users often find themselves overwhelmed by multiple apps, disparate ecosystems, and complex setup processes. Many existing IoT applications lack user-friendly interfaces, making it difficult for homeowners to effectively control their devices. Additionally, users often face challenges related to device compatibility, security concerns, and a lack of centralized control, leading to frustration and underutilization of their smart home technology.</p>        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/iot2.png" alt="" />
          </div>
        </div>
      </div>


      <div className="flex flex-col lg:flex-row items-start  mx-auto p-6 bg-[#F2F2F2] space-y-4">
        <div>
          <h1 className=" font-optima text-[24px] font-bold text-gray-800">
            Solution
          </h1>
          
        <div>
        <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
        Homify will feature a centralized dashboard that displays all connected devices, allowing users to manage their smart home at a glance with a customizable layout tailored to individual preferences. The intuitive navigation will guide users through setup and control, while smart automation features enable the creation of automated routines for device management.
To ensure broad compatibility, Homify will support a wide range of IoT devices from various brands, incorporating voice control integration for hands-free operation. Strong security features will include user authentication methods, such as biometric logins and two-factor authentication, along with clear privacy controls for data sharing.
The app will provide real-time monitoring with alerts for device statuses and insights into energy usage to help users save on bills. An in-app support system will offer FAQs and direct customer service access, complemented by a community forum for users to share tips and best practices. Overall, Homify aims to empower users with a cohesive and user-friendly smart home management experience.</p> 

        </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="w-1/4 h-1/4 lg:w-1/2 lg:h-1/2">
            
          <img src="/portfolio/iot3.png" alt="" />
          </div>
        </div>
      </div>

      <Gitt />
    </>
  );
}

export default PortfolioPage;
