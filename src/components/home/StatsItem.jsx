import React from 'react';

const StatsItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default StatsItem;