
import React from 'react'

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
        },
        {
          title: "Web Development",
          content:
            "Crimplyte’s web development services encompass a comprehensive range of offerings to build robust and dynamic websites.",
        },
        {
          title: "UI/UX Design Services",
          content:
            "Crimplyte Technology offers a range of UI/UX design services aimed at creating exceptional user experiences.",
        },
        {
          title: "Cloud Computing",
          content:
            "Crimplyte offers cloud computing solutions that enable businesses to scale their operations flexibly and securely.",
        },
        {
          title: "Renewable Energy",
          content:
            "We are committed to sustainability, providing consulting and technology solutions in renewable energy.",
        },
        {
          title: "Artificial Intelligence",
          content:
            "We harness the power of artificial intelligence to create intelligent systems that automate processes.",
        },
        {
          title: "Marketing Services",
          content:
            "Crimplyte provides comprehensive marketing solutions designed to increase brand visibility and drive engagement.",
        },
        {
          title: "IoT",
          content:
            "We specialize in developing IoT solutions that connect devices and systems to improve efficiency and data collection.",
        },
        {
          title: "Precision Agriculture",
          content:
            "Our precision agriculture services leverage technology to enhance farming efficiency.",
        },
      ];
    
      return (
        <div className="max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {card.title}
                </h3>
                <p className="text-gray-600">{card.content}</p>
    
                {/* Bottom-right SVG Accent */}
                <div className={`absolute bottom-4 right-4 ${svgColors[index % 3]}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
}

export default WwoCards