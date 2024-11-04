import React from "react";
import CounterItem from "./CounterItem";

const data = [
  {
    id: 1,
    count: 500,
    defaultHeading: "500",
    symbol: "+",
    subHeading: "Riders choose us",
  },
  {
    id: 2,
    count: 2000,
    defaultHeading: "2000",
    symbol: "+",
    subHeading: "Eco-Friendly Rides",
  },
  {
    id: 3,
    count: null,
    defaultHeading: "24/7",
    symbol: "",
    subHeading: "support",
  },
];

function Stats() {
  return (
    <section className="text-[#4a4a4a] flex justify-center gap-32 py-7 bg-neutral-50">
      {data?.map((item) => {
        return <CounterItem key={item?.id} {...item} />;
      })}
    </section>
  );
}

export default Stats;
