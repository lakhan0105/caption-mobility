import React from "react";
import { BsFillLightbulbFill } from "react-icons/bs";
import { PiEngineFill } from "react-icons/pi";
import { GiSpring } from "react-icons/gi";

const data = [
  {
    id: 1,
    icon: <PiEngineFill />,
    heading: "Engine Power",
    subHeading: "200cc / Turbo Boost",
  },
  {
    id: 2,
    icon: <BsFillLightbulbFill />,
    heading: "LED Lighting",
    subHeading: "Night Vision Clarity",
  },
  {
    id: 1,
    icon: <GiSpring />,
    heading: "Suspension ",
    subHeading: "perfect for Bengaluru roads",
  },
  {
    id: 1,
    icon: <PiEngineFill />,
    heading: "Engine Power",
    subHeading: "200cc / Turbo Boost",
  },
  {
    id: 2,
    icon: <BsFillLightbulbFill />,
    heading: "LED Lighting",
    subHeading: "Night Vision Clarity",
  },
];

function BikeDetails() {
  return (
    <section className="h-[90vh] bg-gradient-to-r from-[#e8f6ff] to-[#d1e8ff]">
      <div className="relative h-full max-w-[1280px] m-auto flex items-center justify-center">
        {/* section heading */}
        {/* <h2 className="absolute top-0 left-2/4 translate-x-[-50%] text-center text-4xl font-semibold pt-6">
          Our bike details
        </h2> */}

        {/* image container */}
        <div className="w-[480px]">
          <img
            className="w-full h-full"
            src="https://yulu-blogs-cdn.yulu.bike/detils_image_657dc7d5ce.png"
            alt="not found"
          />
        </div>

        {/* right content */}
        <div className="w-1/2">
          <h2 className="text-4xl font-semibold text-[#1d4e89]">
            Our bike details
          </h2>
          <h4 className="mt-2 text-[#5a647e]">
            Crafted for the bold and built to thrill, our bike offers
            exceptional power and unmatched design. Ready for every adventure,
            it delivers on both style and substance
          </h4>

          <div className="mt-10">
            <ul className="grid grid-cols-2 gap-x-16 gap-y-1">
              {data?.map((item) => {
                const { id, icon, heading, subHeading } = item;

                return (
                  <li key={id} className="flex gap-4 mb-8">
                    {/* icon */}
                    <span className="text-4xl p-3 rounded-lg shadow-lg bg-[#d1ffe0]">
                      {icon}
                    </span>

                    {/* info container */}
                    <div className="leading-tight">
                      <p className="text-lg font-semibold text-[#1d4e89]">
                        {heading}
                      </p>
                      <span className="text-sm italic text-[#5a647e]">
                        {subHeading}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BikeDetails;
