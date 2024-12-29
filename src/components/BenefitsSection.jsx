import React, { useState } from "react";
import img3 from "../assets/img3.png"

const BenefitsSection = () => {
  const benefits = [
    {
      id: 1,
      title: "Integrated Business Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat",
      bgColor: "bg-gray-100",
    },
    {
      id: 2,
      title: "Data Intelligence",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat",
      bgColor: "bg-gray-100",
    },
    {
      id: 3,
      title: "AI & Predictive Insights",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit. Sed euismod. Excepteur sint occaecat",
      bgColor: "bg-gray-100",
    },
  ];

  // Set the first card as initially selected
  const [selectedCard, setSelectedCard] = useState(benefits[0].id);

  const handleCardClick = (id) => {
    setSelectedCard(id); // Update the selected card's ID
  };

  return (
    <section className="py-8 bg-[#e1ebf15c]">
      <div className="px-[2rem] sm:px-[3rem] lg:px-[4rem] flex flex-col lg:flex-row gap-8 items-center">
        {/* Illustration Section */}
        <div className="flex-1">
          <img
            src={img3}
            alt="Delivery Illustration"
            className="rounded-lg"
          />
        </div>

        {/* Benefits Cards Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Benefits for You!
          </h2>
          <div className="space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className={`p-4 rounded-lg shadow-md cursor-pointer  ${
                  selectedCard === benefit.id
                    ? "bg-[#5D8FD2] text-white"
                    : benefit.bgColor
                }`}
                onClick={() => handleCardClick(benefit.id)}
              >
                <h3
                  className={`text-lg font-semibold ${
                    selectedCard === benefit.id ? "text-white" : "text-gray-800"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm mt-2 text-justify ${
                    selectedCard === benefit.id ? "text-white" : "text-gray-600"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
