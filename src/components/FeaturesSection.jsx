import React from "react";
import FeatureCard from "./subComponents/FeatureCard";

const FeaturesSection = () => {
  const features = [
    { title: "Seamless Shipping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", icon: "📦" },
    { title: "Global Reach", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", icon: "🌍" },
    { title: "AI-powered Tools", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", icon: "🤖" },
    { title: "Capital Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.", icon: "💰" },
  ];

  return (
    <>
      <div className="px-[2rem] sm:px-[3rem] lg:px-[4rem]">

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
