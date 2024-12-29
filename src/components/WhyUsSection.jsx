import React from "react";
import img4 from "../assets/img4.png"

const WhyUsSection = () => {
  return (
    <section className="w-[100%] flex flex-col-reverse lg:flex-row gap-8  mt-[3.5rem] px-[2rem] sm:px-[3rem] lg:px-[4rem] py-[1rem] items-center justify-center">
      <div className="w-[100%] lg:w-[50%] flex items-center justify-center">

        <img
        src={img4}
        alt="Why us"
        className="md:w-[30rem] md:h-[25rem]"
      />
      </div>
      <div className="w-[100%] lg:w-[50%]">
        <h2 className="text-orange-500 text-2xl font-bold mb-4">
          Why is QuickDaak the Trusted Partner for Scaling eCommerce Businesses?
        </h2>
        <p className="text-gray-600 text-justify pr-[1rem]">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
        </p>
      </div>
    </section>
  );
};

export default WhyUsSection;
