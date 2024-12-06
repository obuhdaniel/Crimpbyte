import React from "react";
import Image from "next/image";

const WwoCardsSimple = () => {
  const cards = [
    {
      title: "Mobile Application Development",
      content:
        "Crimplyte’s mobile app development services focus on creating high-quality, user-centric applications for both iOS and Android platforms.",
      image: "/purple.png",
    },
    {
      title: "Web Development",
      content:
        "Crimplyte’s web development services encompass a comprehensive range of offerings to build robust and dynamic websites.",
      image: "/yellow.png",
    },
    {
      title: "UI/UX Design Services",
      content:
        "Crimplyte Technology offers a range of UI/UX design services aimed at creating exceptional user experiences.",
      image: "/orange.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex w-full flex-col h-full pl-4 pr-5 py-4  bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200 hover:border-gray-300 opacity-40 hover:opacity-100"
          >
            <h3 className=" min-[320px]:text-[16px] text-[18px]  text-start font-medium text-gray-800 ">
              {card.title}
            </h3>
            <p className="text-[18px] text-start text-gray-700 leading-relaxed mb-4 flex-grow">
              {card.content}
            </p>


            <div className="absolute -bottom-3 right-1 transform translate-x-2 translate-y-2">
              <Image
                src={card.image}
                width={30}
                height={30}
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
