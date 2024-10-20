import React from 'react';

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
    },
    {
      title: "Transparent Communication",
      content:
        "We believe in open and honest communication throughout the project lifecycle. Regular updates and feedback loops keep you informed and involved every step of the way.",
    },
    {
      title: "Agile Development",
      content:
        "We utilize an agile approach, allowing us to adapt quickly to changes and client feedback. This flexibility ensures that your project stays on track and meets evolving needs.",
    }
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

export default WcuCards;
