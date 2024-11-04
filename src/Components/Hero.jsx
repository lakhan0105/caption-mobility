import React from "react";
import bgImg from "../assets/ather-energy-ZjOQIFXq5Ns-unsplash.jpg";

function Hero() {
  return (
    <section
      className={`relative h-[calc(84vh)] m-auto mt-[0px] overflow-hidden bg-cover bg-right bg-no-repeat`}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="max-w-[1280px] m-auto h-full flex justify-between items-start gap-2 ">
        {/* left */}
        <div className="left w-[55%] p-10 py-14 rounded-xl shadow-xl backdrop-blur-md translate-y-[25%] bg-gradient-to-r from-[#f7f6f3] to-[#f9e8e4]">
          {/* hero heading */}
          <div>
            <h2 className="text-6xl">
              <span className="text-6xl text-lime-500 font-semibold">
                Electric
              </span>{" "}
              <span className="text-[#4a4a4a] font-semibold">Bike Rentals</span>
            </h2>
            <h3 className="text-[55px] text-[#4a4a4a]">In Bengaluru!</h3>
          </div>

          {/* hero info */}
          <p className="max-w-[90%] px-1 text-lg mt-2 text-[#4a4a49]/95 tracking-wide">
            Navigate Bengaluru effortlessly. Perfect for commutes, deliveries,
            or exploring at minimal cost.
          </p>

          {/* CTA */}
          <div className="rounded bg-lime-500 bg-[#b3e6a1] inline-block px-3 py-2 ml-2 mt-7 shadow">
            <p className="text-md font-medium">need help? call us!</p>
            <a href="tel:" className="text-2xl font-semibold hover:underline">
              +91 9785642354
            </a>
          </div>
        </div>

        {/* right */}
        {/* <div className="min-w-[490px] max-w-[500px] h-[350px] border bg-gray-200 rounded-md mt-2">
          <h2>photo</h2>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
