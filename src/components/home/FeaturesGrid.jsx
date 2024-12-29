import React from 'react';
import { MapPin, BarChart3, TrendingUp, Wallet } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = () => {
  const features = [
    {
      icon: MapPin,
      title: "Instant domestic shipping",
      description: "Fast and reliable local delivery services across the nation"
    },
    {
      icon: BarChart3,
      title: "Real-time global tracking",
      description: "Track your shipments anytime, anywhere with our advanced system"
    },
    {
      icon: TrendingUp,
      title: "AI-powered routing growth",
      description: "Optimized delivery routes for maximum efficiency"
    },
    {
      icon: Wallet,
      title: "Secure and financial locks",
      description: "Safe and secure payment processing for all transactions"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};


export default FeaturesGrid;