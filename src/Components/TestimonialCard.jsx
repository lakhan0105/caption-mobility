import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function TestimonialCard({ id, custName, reviewText, starsCount, index }) {
  return (
    <article
      key={id}
      className="bg-white p-4 w-[350px] h-[250px] rounded-lg relative m-10 mt-0 mb-14 shadow-lg"
    >
      {/* cust info and stars */}
      <div className="flex justify-between mb-7">
        {/* cust info */}
        <div>
          <h3 className="font-semibold text-lg">{custName}</h3>
          <p className="text-sm">reviewed on google</p>
        </div>

        {/* rating */}
        <div className="flex gap-1 mt-1">
          {starsCount.map((item) => {
            if (item === 1) {
              return <FaStar className="text-amber-400" />;
            } else if (item === 0) {
              return <FaRegStar />;
            }
          })}
        </div>
      </div>

      {/* reviews text */}
      <p className="text-[#333]/90 text-base pb-2 w-[98%]">{reviewText}</p>

      {/* quote icon (absoulte and relative to the article el)*/}
      <div className="absolute bottom-[-7%] right-[-3%] bg-[#BEE4B2] p-3 text-xl shadow-md rounded-full z-100">
        <FaQuoteLeft />
      </div>
    </article>
  );
}

export default TestimonialCard;
