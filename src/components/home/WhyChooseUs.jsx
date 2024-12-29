import React from 'react';

const WhyChooseUs = () => (
  <div className="mt-12">
    <h2 className="text-2xl font-bold text-orange-500 mb-4">
      Why is Quickdaak the Trusted Partner for Scaling eCommerce Businesses?
    </h2>
    <div className="flex flex-col md:flex-row gap-8 items-center">
      <div className="w-full md:w-1/3">
        <img 
          src="/api/placeholder/300/300" 
          alt="Delivery illustration" 
          className="w-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  </div>
);

export default WhyChooseUs;