//This is where we implement the Landing Pages Portfolio component
//Author: Obuh Daniel
//Started: 15/10/2024

import React from "react";
import NoIcon from "../components/fancyButtons/NoIcon";
import OrangeButton from "./yellow";
import Image from "next/image";
import SeeMore from "./fancyButtons/SeeMore";
import Link from "next/link";

function Portfolio() {
  return (
    <div className="flex flex-col items-center text-center py-20 gap-14 bg-black text-white">
    {/* Section Title */}
    <NoIcon text="Our Projects" />
    <h2 className="font-optima text-4xl mb-4">
      Take a look at our Completed and Active Projects
    </h2>
  
    <div className="flex flex-col md:flex-row w-full md:w-4/5 mx-auto justify-between gap-12 px-4">
      {/* Project 1 */}
      <Link
        href="https://check.crimpbyte.com"
        aria-label="View details of the property technology project"
      >
        <div className="pt-10 rounded-lg bg-[#151515] text-start px-6 flex-1 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-opensans text-xl font-semibold mb-6">
            Cutting-edge technology to help you find your perfect property
          </h3>
          <div className="flex flex-col items-start gap-4">
            <OrangeButton buttonText="View Project" />
            <Image
              src="/check.png"
              width={400}
              height={200}
              alt="Cryptocurrency app preview"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </Link>
  
      {/* Project 2 */}
      <Link
        href="https://kabu.crimpbyte.com"
        aria-label="View details of the transport sector data project"
      >
        <div className="pt-10 rounded-lg bg-[#151515] text-start px-6 flex-1 shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="font-opensans text-xl font-semibold mb-6">
            Data-driven solutions for Nigeria Transport Sector
          </h3>
          <div className="flex flex-col items-start gap-4">
            <OrangeButton buttonText="View Project" />
            <Image
              src="/kabu2.png"
              width={400}
              height={200}
              alt="Apartment booking app preview"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </Link>
    </div>
  
    <Link href="/portfolio" aria-label="Explore the full portfolio">
      <SeeMore />
    </Link>
  </div>
  
  );
}

export default Portfolio;
