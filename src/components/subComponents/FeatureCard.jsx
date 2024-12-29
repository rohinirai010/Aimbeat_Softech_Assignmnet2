import React from "react";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#f0debe] p-6 rounded-lg shadow-md flex flex-col items-start gap-4 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-teal-400 hover:text-white group">
    <div className="flex items-center justify-center w-[2.5rem] h-[2.5rem] bg-[#ffffff] rounded-full text-xl">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[white]">{title}</h3>
    <p className="text-sm text-gray-600 group-hover:text-[white]">{description}</p>
  </div>
);

export default FeatureCard;
