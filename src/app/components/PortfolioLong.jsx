import React from 'react';
import NoIcon from "./fancyButtons/NoIcon";
import OrangeButton from "./yellow";
import Image from "next/image";

const portfolioItems = [
  {
    title: 'A cryptocurrency exchange mobile application',
    image: '/koin3.png',
    alt: 'cryptocurrency app'
  },
  {
    title: 'An Apartment booking mobile application',
    image: '/booking2.png',
    alt: 'apartment booking app'
  },
  {
    title: 'Homify: An IoT mobile app UI',
    image: '/homify2.png',
    alt: 'IoT app UI'
  },
  {
    title: 'Social Media Chat UI',
    image: '/socio.png',
    alt: 'social media chat UI'
  },
  {
    title: 'Fintech Mobile UI Screen',
    image: '/fintech.png',
    alt: 'fintech UI'
  }
];

function PortfolioLong() {
  return (
    <div className="flex flex-col items-center text-center py-20 gap-10 bg-black text-white">
      {/* Section Title */}
      <NoIcon text="Portfolio" />
      <h2 className="font-optima text-4xl mb-6">
        A little exploration into our creativity
      </h2>

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-4/5 mx-auto px-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="pt-10 rounded-md bg-[#151515] text-start px-6 flex flex-col justify-between h-full">
            <div className="flex-grow">
              <span className="font-opensans text-xl font-semibold mb-6 block">
                {item.title}
              </span>
              <OrangeButton buttonText="View Case Study" className="my-4" />
            </div>
            <div className="mt-4">
              <Image
                src={item.image}
                width={400}
                height={200}
                alt={item.alt}
                className="rounded-lg object-cover w-full"
                priority={index < 2} // Prioritize loading for first items
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioLong;
