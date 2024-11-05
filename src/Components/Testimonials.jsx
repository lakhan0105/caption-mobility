import React, { lazy, Suspense } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
  {
    id: 4,
    custName: "Sachin",
    starsCount: [1, 1, 1, 1, 0],
    reviewText:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam itaque obcaecati libero molestiae similique iure voluptatibus.",
  },
  {
    id: 5,
    custName: "Sachin",
    starsCount: [1, 1, 1, 1, 0],
    reviewText: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
  },
];

const TestimonialCard = lazy(() => import("./TestimonialCard"));

function Testimonials() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-20">
      {/* section heading */}
      <h2 className="text-4xl font-semibold text-center mt-8 mb-8">
        What our customers say?
      </h2>

      {/* cards container */}
      <div className="mx-auto overflow-hidden p-10">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <Suspense fallback={<p>Loading...</p>}>
                <TestimonialCard key={item?.id} {...item} index={index} />
              </Suspense>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
