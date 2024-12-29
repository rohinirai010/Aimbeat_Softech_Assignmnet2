import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

const ClientSection = () => {
  const testimonials = [
    {
      id: 1,
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.",
      companyName: "48-hour technology",
      avatar: avatar1,
    },
    {
      id: 2,
      rating: 4,
      text: "Excellent support and great experience! Highly recommend their service.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.",
      companyName: "Tech Solutions",
      avatar: avatar2,
    },
    {
      id: 3,
      rating: 4.8,
      text: "Truly outstanding service! The team went above and beyond.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.",
      companyName: "Digital Innovations",
      avatar: avatar3,
    },
    {
      id: 4,
      rating: 5,
      text: "Best service we've experienced. Highly professional team.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.",
      companyName: "Smart Systems",
      avatar: avatar2,
    },
    {
      id: 5,
      rating: 4.5,
      text: "Incredible results and amazing support throughout.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed vulputate nibh. Vestibulum.",
      companyName: "Future Tech",
      avatar: avatar1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(2);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getCircularIndex = (index) => {
    return (index + testimonials.length) % testimonials.length;
  };

  const getVisibleAvatars = () => {
    const visibleAvatars = [-2, -1, 0, 1, 2].map((offset) => {
      const index = getCircularIndex(currentIndex + offset);
      return testimonials[index];
    });
    return visibleAvatars;
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-current"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current opacity-50"
        />
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-${i}`}
          className="w-5 h-5 text-gray-300 fill-current"
        />
      );
    }

    return stars;
  };

  return (
    <div className="px-[2rem] sm:px-[3rem] lg:px-[5rem]">
      <section className="bg-[#ffffff] shadow-lg rounded-xl relative top-[12rem] z-20 mt-[-20rem] overflow-hidden py-[3.5rem] px-[2rem] sm:px-[3rem] lg:px-[5rem]">
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-row items-center mb-[1.5rem]">
            <div>
              <h2 className="text-2xl sm:text-4xl font-bold mb-6 text-[#383636]">
                What our Clients Say
              </h2>
              <p className="text-[#8e8c8c] text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
          </div>

          <div className="text-4xl font-semibold mb-6 text-[#645f5f]">
            {testimonials[currentIndex].rating}
          </div>

          <p className="text-[#747171] text-sm max-w-[60rem] mb-6">
            {testimonials[currentIndex].text}
          </p>

          <p className="font-semibold text-gray-800 mb-4 text-lg">
            {testimonials[currentIndex].companyName}
          </p>

          <div className="flex items-center mb-4">
            {renderStars(testimonials[currentIndex].rating)}
          </div>

          <div className="flex flex-col items-center w-full">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {getVisibleAvatars().map((item, index) => (
                <div
                  key={item.id}
                  className={`rounded-full border-2 border-white overflow-hidden transition-all duration-300 ${
                    index === 2
                      ? "w-12 h-12 z-10"
                      : index === 1 || index === 3
                      ? "w-9 h-9 z-5 opacity-80"
                      : "w-9 h-9 opacity-60"
                  }`}
                >
                  <img
                    src={item.avatar}
                    alt={`Client avatar`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4 lg:hidden">
              <button onClick={handlePrev}>
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button onClick={handleNext}>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="hidden lg:block relative w-full">
              <button onClick={handlePrev} className="absolute left-[30%]">
                <ChevronLeft className="w-5 h-5 text-gray-400" />
              </button>
              <button onClick={handleNext} className="absolute right-[30%]">
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientSection;
