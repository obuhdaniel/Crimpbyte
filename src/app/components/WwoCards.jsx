
import React from 'react';
import Image from 'next/image';

const svgColors = [
    "text-yellow-500", // Yellow SVG for the first row
    "text-blue-500",   // Blue SVG for the second row
    "text-orange-500", // Orange SVG for the third row
  ];

function WwoCards() {
    const cards = [
        {
          title: "Mobile Application Development",
          content:
            "Crimplyte’s Technology mobile app development services focus on creating high-quality, user-centric applications for both iOS and Android platforms.",
            image: "/purple.png",
        },
        {
          title: "Web Development",
          content:
            "Crimplyte’s web development services encompass a comprehensive range of offerings to build robust and dynamic websites.",
            image: "/yellow.png",        },
        {
          title: "UI/UX Design Services",
          content:
            "Crimplyte Technology offers a range of UI/UX design services aimed at creating exceptional user experiences.",

            image: "/orange.png",
        },
        {
          title: "Cloud Computing",
          content:
            "Crimplyte offers cloud computing solutions that enable businesses to scale their operations flexibly and securely.",
          image: "/purple.png",        
        },
        {
          title: "Renewable Energy",
          content:
            "We are committed to sustainability, providing consulting and technology solutions in renewable energy.",

          image: "/yellow.png",
        },
        {
          title: "Artificial Intelligence",
          content:
            "We harness the power of artificial intelligence to create intelligent systems that automate processes.",

          image: "/orange.png",
        },
        {
          title: "Marketing Services",
          content:
            "Crimplyte provides comprehensive marketing solutions designed to increase brand visibility and drive engagement.",
            image: "/purple.png",
        },
        {
          title: "IoT",
          content:
            "We specialize in developing IoT solutions that connect devices and systems to improve efficiency and data collection.",

          image: "/yellow.png",
        },
        {
          title: "Precision Agriculture",
          content:
            "Our precision agriculture services leverage technology to enhance farming efficiency.",

          image: "/orange.png",
        },
        {
          title: "Software Development",
          content:
            "Crimpbyte delivers tailored software development services to meet specific business needs. Our team of developers works on custom applications, ensuring they are robust, scalable, and aligned with industry standards.",

          image: "/purple.png",
        },
        {
          title: "Consultation",
          content:
            "We offer expert consultation services to guide businesses in their digital transformation journey. Our consultants assess current practices, identify opportunities for improvement, and provide actionable strategies tailored to each client.",

          image: "/yellow.png",
        },
        {
          title: "Training",
          content:
            "Crimpbyte provides training programs designed to empower teams with the latest digital skills. Our training covers various topics, from technology implementation to digital marketing strategies, ensuring clients can effectively leverage new tools and methodologies.",

          image: "/orange.png",
        },
        {
          title: "Maintenance and Support",
          content:
            "Crimpbyte offers ongoing maintenance and support services to ensure your digital solutions run smoothly. This includes regular updates, troubleshooting, performance monitoring, and user support to address any issues promptly, keeping your systems secure and efficient.",

          image: "/purple.png",
        },

      ];
    
      return (
        <div className="max-w-7xl bg-[#f2f2f2] dark:bg-black mx-auto px-4 py-10 lg:px-8 lg:py-16 bg-[#]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative flex w-full flex-col h-full pl-4 pr-5 py-4  lg:py-[30px] bg-white dark:bg-[#151515] rounded-lg shadow-md hover:shadow-xl transition-shadow border border-[#6D6D6D] hover:border-gray-300 opacity-100"
          >
            <h3 className=" text-[18px]  text-start font-medium text-gray-800 dark:text-white lg:text-[24px] ">
              {card.title}
            </h3>
            <p className="text-[18px] lg:text-[16px] text-start text-[#A5A5A5] leading-relaxed mb-4 flex-grow">
              {card.content}
            </p>



            <div className="absolute -bottom-3 right-1 transform translate-x-2 translate-y-2">
              <Image
                src={card.image}
                width={60}
                height={60}
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

export default WwoCards