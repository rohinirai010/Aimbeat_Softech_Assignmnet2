import React from 'react';
import StatsItem from './StatsItem';
import Button from '../ui/Button';

const HeroSection = () => {
  const stats = [
    { value: "350+", label: "Coverage" },
    { value: "10+", label: "Experience" },
    { value: "10+", label: "Clients" },
    { value: "99.9%", label: "Satisfaction" }
  ];

  return (
    <div className="bg-orange-400 rounded-xl p-8 text-white relative overflow-hidden">
      <div className="w-1/2">
        <h1 className="text-4xl font-bold mb-4">
          Trust in the Fastest & Most Reliable
          <div>QuickDaak Logistic Service</div>
        </h1>
        <div className="flex gap-2 mb-8">
          <input 
            type="text" 
            placeholder="Enter tracking ID"
            className="px-4 py-2 rounded-lg text-black w-64"
          />
          <Button variant="primary" className="bg-black hover:bg-gray-800">
            Submit
          </Button>
        </div>
        <div className="flex gap-8">
          {stats.map((stat, index) => (
            <StatsItem key={index} {...stat} />
          ))}
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/2">
        <img 
          src="/api/placeholder/400/400" 
          alt="Delivery Person" 
          className="h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;