import React from 'react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-orange-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
    <Icon className="text-orange-500 w-8 h-8 mb-3" />
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default FeatureCard;