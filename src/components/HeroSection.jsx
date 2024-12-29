import React from "react";
import img1 from "../assets/img1.jpg";

const StatsItem = ({ value, label }) => (
  <div className="text-center">
    <div className="text-2xl md:text-3xl font-bold text-gray-900">{value}</div>
    <div className="text-sm md:text-base font-semibold text-gray-800">
      {label}
    </div>
  </div>
);

const HeroSection = () => {
  const stats = [
    { value: "350+", label: "Coverage" },
    { value: "10×", label: "Experience" },
    { value: "10+", label: "Clients" },
    { value: "99.9%", label: "Satisfaction" },
  ];

  return (
    <div className="pt-16 px-[2rem] sm:px-[3rem] lg:px-[5rem] xl:px-[6rem]">
      <section className="bg-[#FFC637] rounded-lg md:rounded-xl relative z-20 bottom-[3rem] overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-12 lg:py-16 lg:pl-12 xl:pl-16 flex flex-col gap-6 md:gap-8">
              {/* Main Content */}
              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white">
                  Trust in the Fastest & Most Reliable
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
                  QuickDaak Logistic Service
                </h2>
              </div>

              {/* Search Bar */}
              <div className="flex w-full">
                <input
                  type="text"
                  placeholder="Enter tracking ID"
                  className="flex-1 min-w-0 p-2 sm:p-3 rounded-l-lg text-gray-800 outline-none text-sm sm:text-base"
                />
                <button className="bg-[#ff3737] text-white px-3 sm:px-6 py-2 sm:py-3 rounded-r-lg hover:bg-gray-800 transition-colors whitespace-nowrap text-sm sm:text-base">
                  Explore
                </button>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 justify-start gap-4 sm:gap-6 md:gap-8">
                {stats.map((stat, index) => (
                  <StatsItem key={index} {...stat} />
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 h-48 sm:h-64 md:h-80 lg:h-full lflex justify-center items-center text-center relative">
              <img
                src={img1}
                alt="Delivery Person"
                className="h-full w-full object-cover object-center lg:object-left"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
