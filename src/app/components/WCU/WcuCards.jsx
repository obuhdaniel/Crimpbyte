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
            className="relative flex flex-col h-full p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-base text-gray-700 leading-relaxed mb-8 flex-grow">
              {card.content}
            </p>

            {/* Decorative Image Positioned Fully Outside the Card */}
            <div className="absolute bottom-0 right-0 transform translate-x-8 translate-y-8">
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
