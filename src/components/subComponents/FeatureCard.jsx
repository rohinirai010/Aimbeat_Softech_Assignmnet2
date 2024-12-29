import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#f0debe] p-6 rounded-lg shadow-md flex flex-col items-start gap-4">
    <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#ffffff] rounded-full text-xl">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

export default FeatureCard;
