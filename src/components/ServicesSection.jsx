import React from "react";

import { LiaShippingFastSolid } from "react-icons/lia";
import { LuNotepadText } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { GiTrade } from "react-icons/gi";
import { MdShoppingCartCheckout } from "react-icons/md";
import { TbRotate360 } from "react-icons/tb";

const ServicesSection = () => {
  const services = [
    {
      title: "Domestic Shipping",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <LiaShippingFastSolid />,
    },
    {
      title: "Fulfillment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <LuNotepadText />,
    },
    {
      title: "Quick",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <SlEnergy />,
    },
    {
      title: "Cross Border Trade",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <GiTrade />,
    },
    {
      title: "Checkout",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      icon: <MdShoppingCartCheckout />,
    },
    {
      title: "Engage 360",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <TbRotate360 />,
    },
  ];

  return (
    <section className="py-16">
      <div className="px-[2rem] sm:px-[3rem] lg:px-[4rem]">
        <h2 className="text-3xl font-bold text-[#232352] uppercase mb-8">
          Our Services <br /> & Solutions Portfolio
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index}>
              <div
                className={`w-[3.5rem] h-[3.5rem] rounded-xl flex items-center justify-center text-4xl mb-4 ${
                  index === 0 || index === 2 || index === 4
                    ? "bg-[#ff8a57] text-white"
                    : "bg-[#232352] text-white"
                }`}
              >
                {service.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-xl">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
