import React from "react";
import Image from "next/image";

const WwoCardsSimple = () => {
  const cards = [
    {
      title: "Mobile Application Development",
      content:
        "Crimplyte’s mobile app development services focus on creating high-quality, user-centric applications for both iOS and Android platforms.",
      image: "/purple-fan.png",
    },
    {
      title: "Web Development",
      content:
        "Crimplyte’s web development services encompass a comprehensive range of offerings to build robust and dynamic websites.",
      image: "/yellow-fan.png",
    },
    {
      title: "UI/UX Design Services",
      content:
        "Crimplyte Technology offers a range of UI/UX design services aimed at creating exceptional user experiences.",
      image: "/orange-fan.png",
    },
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
};

export default WwoCardsSimple;
