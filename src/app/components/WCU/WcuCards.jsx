import React from 'react';
import Image from 'next/image';

const svgColors = [
  "text-yellow-500", // Yellow SVG for the first card
  "text-blue-500",   // Blue SVG for the second card
  "text-orange-500", // Orange SVG for the third card
];

function WcuCards() {
  const cards = [
    {
      title: "Expert Team",
      content:
        "Our talented professionals bring a wealth of experience in UI/UX design and development. We stay updated on the latest industry trends and best practices to ensure your project benefits from top-tier expertise.",
        image: "/purple-pine.png",
    },
    {
      title: "Transparent Communication",
      content:
        "We believe in open and honest communication throughout the project lifecycle. Regular updates and feedback loops keep you informed and involved every step of the way.",
      image: "/yellow-pine.png",
    },
    {
      title: "Agile Development",
      content:
        "We utilize an agile approach, allowing us to adapt quickly to changes and client feedback. This flexibility ensures that your project stays on track and meets evolving needs.",
      image: "/orange-pine.png",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex w-full flex-col h-full pl-4 pr-5 py-4  lg:py-[30px] bg-white dark:bg-[#151515] rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#6D6D6D] hover:border-gray-300 opacity-40 hover:opacity-100"
          >
            <h3 className=" text-[20px]  text-start font-medium text-gray-800 dark:text-white lg:text-[24px] ">
              {card.title}
            </h3>
            <p className="text-[14px] lg:text-[16px] text-start text-[#A5A5A5] leading-relaxed mb-4 flex-grow">
              {card.content}
            </p>


            <div className="absolute -bottom-3 right-1 transform translate-x-2 translate-y-2">
              <Image
                src={card.image}
                width={50}
                height={50}
                alt={`${card.title} icon`}
                className=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WcuCards;
