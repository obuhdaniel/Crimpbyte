import React from 'react';
import NoIcon from "./fancyButtons/NoIcon";
import OrangeButton from "./yellow";
import Image from "next/image";
import Link from "next/link";

const portfolioItems = [
  {
    title: 'A cryptocurrency exchange mobile application',
    image: '/koin3.png',
    alt: 'cryptocurrency app',
    link: '/portfolio/crypto'
  },
  {
    title: 'An Apartment booking mobile application',
    image: '/booking2.png',
    alt: 'apartment booking app',
    link: '/portfolio/apartment'
  },
  {
    title: 'Homify: An IoT mobile app UI',
    image: '/homify2.png',
    alt: 'IoT app UI',
    link: '/portfolio/iot'
  },
  {
    title: 'Social Media Chat UI',
    image: '/socio.png',
    alt: 'social media chat UI',
    link: '/portfolio/chat'
  },
  {
    title: 'Fintech Mobile UI Screen',
    image: '/fintech.png',
    alt: 'fintech UI',
    link: '/portfolio/bank'
  }
];

function PortfolioLong() {
  return (
    <div className="flex flex-col items-center text-center py-5 gap-10 bg-[#f2f2f2] text-white">
     

      {/* Portfolio Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-4/5 mx-auto px-4">
        {portfolioItems.map((item, index) => (
          <div key={index} className="pt-10 rounded-md bg-white text-black text-start px-6 flex flex-col justify-between h-full">
            <div className="flex-grow">
              <span className="font-opensans text-xl font-semibold mb-6 block">
                {item.title}
              </span>
              <Link href={item.link}>
              <OrangeButton buttonText="View Case Study" className="my-4" />
              </Link>
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
