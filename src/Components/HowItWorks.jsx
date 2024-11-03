import React from "react";
import { IoCall } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { RiEBikeFill } from "react-icons/ri";

const data = [
  {
    id: 1,
    icon: <IoCall />,
    stepName: "contact us",
    stepDesc: "Reach out to inquire about bike availability",
  },
  {
    id: 2,
    icon: <MdEventAvailable />,
    stepName: "check availability",
    stepDesc: "We'll confirm the bike availability for your desired time",
  },
  {
    id: 3,
    icon: <RiEBikeFill />,
    stepName: "Pick up your bike",
    stepDesc: "Once confirmed, you can pick up your bike.",
  },
];

function HowItWorks() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-semibold mt-16 mb-14">How it Works?</h2>

      <div className="flex justify-evenly max-w-[75%] m-auto">
        {data.map((item) => {
          const { id, icon, stepName, stepDesc } = item;

          return (
            <article
              key={id}
              className="max-w-[180px] flex flex-col items-center"
            >
              <div className="border bg-[#C8EBBC] bg-gradient-to-r from-[#E0F7DB]/80 to-[#A6D497]/50 p-4 rounded-[50%] mb-4">
                <span className="text-5xl">{icon}</span>
              </div>

              <div className="text-[#4a4a4a]">
                <h2 className="font-semibold capitalize mb-0.5 text-lg">
                  {stepName}
                </h2>
                <p className="text-[#4a4a4a]/80 text-sm">{stepDesc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default HowItWorks;
