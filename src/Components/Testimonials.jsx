import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

// reviews data
const data = [
  {
    id: 1,
    custName: "Sarvan Singh",
    starsCount: [1, 1, 1, 1, 0],
    reviewText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque obcaecati libero molestiae similique iure voluptatibus temporibus impedit. Voluptate, impedit.",
  },
  {
    id: 2,
    custName: "Charith",
    starsCount: [1, 1, 1, 0, 0],
    reviewText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque obcaecati libero molestiae similique iure voluptatibus temporibus impedit. Voluptate, impedit.",
  },
  {
    id: 3,
    custName: "Sachin",
    starsCount: [1, 1, 1, 1, 0],
    reviewText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque obcaecati libero molestiae similique iure voluptatibus.",
  },
];

function Testimonials() {
  return (
    <div>
      {/* section heading */}
      <h2 className="text-4xl font-semibold text-center mt-8 mb-14">
        What our customers say?
      </h2>

      {/* cards container */}
      <div className="borde flex justify-between items-start">
        {data.map((item) => {
          const { id, custName, reviewText, starsCount } = item;

          return (
            <article
              key={id}
              className="min-h-[250px] w-[400px] relative bg-white/90 rounded-lg shadow-xl px-4 py-6 flex flex-col justify-evenl"
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
              <p className="text-[#333]/90 text-base">{reviewText}</p>

              {/* quote icon (absoulte and relative to the article el)*/}
              <div className="absolute bottom-[-5%] left-[-3%] bg-[#BEE4B2] p-3 text-xl shadow-md rounded-full">
                <FaQuoteLeft />
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
