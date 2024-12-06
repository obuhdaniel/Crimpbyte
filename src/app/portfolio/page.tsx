import React from "react";
import Gitt from "../components/Gitt";
import PortfolioLong from '../components/PortfolioLong';

function PortfolioPage() {
  return (
    <>

      <div className="flex flex-col items-start  mx-auto p-6 bg-[#F2F2F2] rounded-lg space-y-4">
        <h1 className=" font-optima text-[24px] font-bold text-gray-800">Featured Projects</h1>
        <p className="text-gray-700 font-opensans text-[15px] leading-relaxed">
          Showcasing a Diverse Range of Projects That Reflect Our Commitment to
          Excellence and Strategic Innovation, Illustrating How We Transform
          Client Visions into Reality Through a Blend of Creative Design and
          Technical Expertise, All While Upholding the Highest Standards of
          Quality and Creativity to Ensure Every Project Meets and Exceeds
          Expectations
        </p>
      </div>

      <PortfolioLong />






      <Gitt />

    </>
  );
}

export default PortfolioPage;
