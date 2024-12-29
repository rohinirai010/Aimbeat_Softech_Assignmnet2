import React from "react";
import Slider from "react-slick";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.jpg";
import logo7 from "../assets/logo7.png";

const EcommerceCarousel = () => {
  const logos = [
    { name: "Amazon", src: logo1 },
    { name: "Ekart", src: logo2 },
    { name: "Magento", src: logo3 },
    { name: "Ecom Express", src: logo4 },
    { name: "Delhivery", src: logo5 },
    { name: "FedEx", src: logo6 },
    { name: "Shopify", src: logo7 },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-12 bg-[#96999FF2] mt-10">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-[#ffffff] uppercase px-[2rem] sm:px-[3rem] lg:px-0">
          Integrate Ecommerce Stores and Marketplaces!
        </h2>
      </div>

      {/* Carousel */}
      <div className="px-[2rem] sm:px-[3rem] lg:px-[4rem]">
        <Slider {...settings} className="slider-comp">
          {logos.map((logo, index) => (
            <div key={index} className="px-2">
              <div className="flex justify-center items-center w-full h-32 bg-white shadow-md rounded-lg">
                <div className="flex items-center justify-center w-full h-full p-4">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="w-20 h-16 object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default EcommerceCarousel;