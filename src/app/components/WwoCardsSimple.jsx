import React from 'react';

const svgColors = [
  "text-yellow-500",  // Yellow for the first card
  "text-blue-500",    // Blue for the second card
  "text-orange-500",  // Orange for the third card
];

function WwoCardsSimple() {
  const cards = [
    {
      title: "Mobile Application Development",
      content:
        "Crimplyte’s mobile app development services focus on creating high-quality, user-centric applications for both iOS and Android platforms.",
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
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-white p-6 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
              {card.title}
            </h3>
            <p className="text-base md:text-lg text-gray-800 font-normal">
              {card.content}
            </p>
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

export default WwoCardsSimple;
