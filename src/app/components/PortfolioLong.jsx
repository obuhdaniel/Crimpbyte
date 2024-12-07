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
    <div className="bg-[#f2f2f2] dark:bg-black py-16 px-4 md:px-8 lg:px-16">
    {/* Portfolio Items Grid */}
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {portfolioItems.map((item, index) => (
          <div 
            key={index} 
            className="group bg-white dark:bg-[#151515] rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-64 lg:h-72 overflow-hidden">
              <Image
                src={item.image}
                width={800}
                height={600}
                alt={item.alt}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
  
            {/* Content Section */}
            <div className="p-6 lg:p-8">
              <div className="flex flex-col h-full">
                <h3 className="font-opensans text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                
                {/* Optional description if you want to add one */}
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3">
                    {item.description}
                  </p>
                )}
  
                {/* Button */}
                <div className="mt-auto">
                  <Link 
                    href={item.link}
                    className="inline-block w-full"
                  >
                    <OrangeButton 
                      buttonText="View Case Study" 
                      className="w-full text-center justify-center hover:opacity-90 transition-opacity duration-200"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default PortfolioLong;
